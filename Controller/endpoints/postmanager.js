const fs = require('fs');
const Post = require('./post');

class PostManager {
    constructor(dataFile) {
        this.dataFile = dataFile;
        this.posts = this.loadPosts();
    }

    loadPosts() {
        if (fs.existsSync(this.dataFile)) {
            const data = fs.readFileSync(this.dataFile);
            return JSON.parse(data);
        }
        return [];
    }

    savePosts() {
        fs.writeFileSync(this.dataFile, JSON.stringify(this.posts, null, 2));
    }

    getAllPosts() {
        return this.posts;
    }

    getPostById(id) {
        return this.posts.find(post => post.id === id);
    }

    createPost(title, content) {
        const id = this.posts.length ? this.posts[this.posts.length - 1].id + 1 : 1;
        const newPost = new Post(id, title, content);
        this.posts.push(newPost);
        this.savePosts();
        return newPost;
    }

    updatePost(id, title, content) {
        const post = this.getPostById(id);
        if (post) {
            post.title = title;
            post.content = content;
            post.updatedAt = new Date();
            this.savePosts();
            return post;
        }
        return null;
    }

    deletePost(id) {
        const index = this.posts.findIndex(post => post.id === id);
        if (index !== -1) {
            const deletedPost = this.posts.splice(index, 1);
            this.savePosts();
            return deletedPost[0];
        }
        return null;
    }
}

module.exports = PostManager;

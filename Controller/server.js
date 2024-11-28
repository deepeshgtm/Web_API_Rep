// const express = require('express');
// const app = express();
// const PORT = 3000;


// app.get('/', (req, res) => {
//     res.send('Hello, this is the test server!');
// });


// app.get('/data', (req, res) => {
//     res.json({
//         message: 'This is a test endpoint!',
//         timestamp: new Date()
//     });
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const PostManager = require('./endpoints/postmanager');

const app = express();
const port = 3000;
const postManager = new PostManager('posts.json');

app.use(bodyParser.json());

// Get all posts
app.get('/api/posts', (req, res) => {
    const posts = postManager.getAllPosts();
    res.json(posts);
});

// Get a single post by ID
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = postManager.getPostById(id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});

// Create a new post
app.post('/api/posts', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
    const newPost = postManager.createPost(title, content);
    res.status(201).json(newPost);
});

// Update an existing post
app.put('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content } = req.body;
    const updatedPost = postManager.updatePost(id, title, content);
    if (updatedPost) {
        res.json(updatedPost);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});

// Delete a post
app.delete('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const deletedPost = postManager.deletePost(id);
    if (deletedPost) {
        res.json(deletedPost);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

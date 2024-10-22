/**
 * @file persistent.js
 * @brief This file contains the Persistent class, which handles reading and writing JSON data to a file.
 */

const fs = require('fs');

/**
 * @class Persistent
 * @brief Class responsible for handling persistent storage of JSON data.
 */
class Persistent {
    /**
     * @brief Constructor for the Persistent class.
     * @param {string} filename - The name of the JSON file to read from and write to.
     */
    constructor(filename) {
        /**
         * @var {string} filename
         * @brief The name of the file used for persistent storage.
         */
        this.filename = filename;
    }

    /**
     * @brief Reads the JSON file and returns its contents.
     * 
     * Attempts to read the file specified by the filename. If the file does not exist,
     * it returns an empty array.
     * 
     * @return {Array|Object} Parsed JSON data from the file or an empty array if the file is not found.
     */
    readJson() {
        try {
            const data = fs.readFileSync(this.filename, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            // If file doesn't exist or there's an error, return an empty array
            return [];
        }
    }

    /**
     * @brief Writes the given data to the JSON file.
     * 
     * Serializes the given data and writes it to the file specified by the filename.
     * 
     * @param {Array|Object} data - The data to write to the JSON file.
     */
    writeJson(data) {
        fs.writeFileSync(this.filename, JSON.stringify(data, null, 2), 'utf-8');
    }
}

module.exports = Persistent;

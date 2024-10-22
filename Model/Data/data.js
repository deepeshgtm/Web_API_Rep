/**
 * @file data.js
 * @brief This file contains the Data class, which interfaces with JSON data to manage entries.
 */

const Persistent = require("../persistant/persistant");

/**
 * @class Data
 * @brief Interface to manage JSON data, providing methods to add and find entries.
 */
class Data {
    /**
     * @brief Constructor for the Data class.
     * @param {string} filename - The name of the JSON file to persist data.
     */
    constructor(filename) {
        /**
         * @var {Object} persistent
         * @brief Persistent object used to read and write JSON data.
         */
        this.persistent = new Persistent(filename);

        /**
         * @var {Array} data
         * @brief Array of data entries loaded from the JSON file.
         */
        this.data = this.persistent.readJson();
    }

    /**
     * @brief Adds a new entry to the data and writes it to the JSON file.
     * @param {Object} entry - The entry object to be added (must contain 'input' and 'output' fields).
     */
    addEntry(entry) {
        this.data.push(entry);
        this.persistent.writeJson(this.data);
    }

    /**
     * @brief Finds an entry in the data that matches the provided input.
     * @param {string} query - The input query to search for.
     * @return {Object|null} The found entry if it exists, otherwise null.
     */
    findEntry(query) {
        return this.data.find(item => item.input === query);
    }
}

module.exports = Data;

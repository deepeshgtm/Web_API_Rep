/**
 * @file endpoint.js
 * @brief This file contains the Endpoint class, which handles input/output interactions with the user.
 */

const readline = require('readline');

/**
 * @class Endpoint
 * @brief Handles input/output interactions and manages data processing.
 */
class Endpoint {
    /**
     * @brief Constructor for the Endpoint class.
     * @param {Object} data - Data object used to find and add entries.
     */
    constructor(data) {
        /**
         * @var {Object} data
         * @brief Data object to interact with stored entries.
         */
        this.data = data;
    }

    /**
     * @brief Prompts the user for input and returns it as a string.
     * 
     * @return {Promise<string>} Promise that resolves with the user's input.
     */
    async getInput() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise((resolve) => {
            rl.question('Enter input: ', (input) => {
                rl.close();
                resolve(input);
            });
        });
    }

    /**
     * @brief Handles user input, checks for existing entries, and adds new entries if needed.
     * 
     * This method retrieves input from the user, searches for an existing entry in the data object,
     * and either prints the output or adds a new entry with processed data.
     * 
     * @return {Promise<void>} Promise that resolves once the input is processed.
     */
    async handleInput() {
        const input = await this.getInput();
        const existingEntry = this.data.findEntry(input);

        if (existingEntry) {
            console.log(`Output: ${existingEntry.output}`);
        } else {
            const output = `Processed ${input}`;
            this.data.addEntry({ input, output });
            console.log(`Added new entry: { input: "${input}", output: "${output}" }`);
        }
    }
}

module.exports = Endpoint;

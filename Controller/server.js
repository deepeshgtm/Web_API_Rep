/**
 * @file main.js
 * @brief This file contains the Main class, which initializes the application and runs it.
 */

const Data = require("../Model/Data/data");
const Endpoint = require("./endpoints/endpoint");

/**
 * @class Main
 * @brief Main class responsible for initializing the data and endpoint, and running the application.
 */
class Main {
    /**
     * @brief Constructor for the Main class.
     * Initializes a Data object and an Endpoint object.
     */
    constructor() {
        /**
         * @var {Object} data
         * @brief Data object to manage JSON data.
         */
        this.data = new Data('data.json');

        /**
         * @var {Object} endpoint
         * @brief Endpoint object to handle input operations.
         */
        this.endpoint = new Endpoint(this.data);
    }

    /**
     * @brief Runs the main application logic.
     * Calls the endpoint to handle user input asynchronously.
     * 
     * @return {Promise<void>} Promise that resolves once the input is handled.
     */
    async run() {
        await this.endpoint.handleInput();
    }
}

// Run the main application
/**
 * @brief Instantiate and run the Main application.
 */
const app = new Main();
app.run();

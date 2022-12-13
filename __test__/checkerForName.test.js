// Import the js file to test
import {checkForName} from "../src/client/js/nameChecker";

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the submit functionality", () => {
    // The test() function
    test("Testing the handleSubmit() function", () => {
        expect(checkForName).toBeDefined();
    })});
const assertEqual = require('../assertEqual');

// Testing
assertEqual("Lighthouse Labs", "Bootcamp"); // should fail
assertEqual(1, 1); // should pass
assertEqual(5, 5.5); // should fail
assertEqual(3, '3'); // should fail
assertEqual("Orange", "Orange"); // should pass
// Get the first command-line argument and convert it to an integer
const x = parseInt(process.argv[2]);

// Check if the argument is missing or invalid
if (process.argv[2] === undefined || isNaN(x)) {
    console.log("Missing number of occurrences");
} else if (x > 0) {
    // Use a for loop to print "C is fun" x times
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}
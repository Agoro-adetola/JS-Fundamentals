// Get the first command-line argument and convert it to an integer
const size = parseInt(process.argv[2]);

// Check conditions
if (process.argv[2] === undefined || isNaN(size)) {
    console.log("Missing size");
} else if (size > 0) {
    // Use nested loops to print an n x n square of X's
    for (let i = 0; i < size; i++) {
        let row = '';
        for (let j = 0; j < size; j++) {
            row += 'X';
        }
        console.log(row);
    }
}
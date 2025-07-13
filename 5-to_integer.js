const args = process.argv.slice(2);
const firstArg = args[0];

// Convert to integer using parseInt
const num = parseInt(firstArg, 10);

// Check if firstArg exists and num is a valid number (not NaN)
if (firstArg !== undefined && !isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}

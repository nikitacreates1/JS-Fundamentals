const args = process.argv.slice(2);
const count = parseInt(args[0], 10);

if (!count || count <= 0 || isNaN(count)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < count) {
    console.log("C is fun");
    i++;
  }
}

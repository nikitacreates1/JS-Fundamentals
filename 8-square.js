const args = process.argv.slice(2);
const size = parseInt(args[0], 10);

if (!size || size <= 0 || isNaN(size)) {
  console.log("Missing size");
} else {
  let i = 0;
  while (i < size) {
    let line = "";
    let j = 0;
    while (j < size) {
      line += "X";
      j++;
    }
    console.log(line);
    i++;
  }
}

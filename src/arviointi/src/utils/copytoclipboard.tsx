// A function that will take in a value.desc and return a string with
// newlines replaced with spaces and multiple spaces replaced with one space
function formatDescription(desc: string) {
  return desc.replace(/\n/g, " ").replace(/ +/g, " ");
}

export { formatDescription };

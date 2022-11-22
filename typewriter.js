const sentence = "When finished and satisfied with a manual verification of our exercise, it's time to submit it.";

let delayTotal = 0;
const delayIncrement = 75;

// Prints each character based on a continuously updated delay duration
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delayTotal);
  delayTotal += delayIncrement;
}

// Adds a line break once the sentence has finished printing
setTimeout(() => {
  process.stdout.write('\n');
}, (delayIncrement * sentence.length));
import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function question(input) {
  return new Promise((resolve) => {
    rl.question(input, (answer) => {
      resolve(answer);
    });
  });
}

export async function exit() {
  return new Promise((resolve) => {
    resolve(rl.close());
    process.exit(0);
  });
}

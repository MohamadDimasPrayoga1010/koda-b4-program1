import { toDoList } from "../index.js";
import { tasks } from "./addTask.js";
import { question } from "./question.js";

export async function showTask() {
  if (tasks.length === 0) {
    console.log("============ Show Task ============");
    console.log("\nTask Masih Kosong\n");
    await question("Tekan enter untuk kembali");
    return toDoList();
  }

  let dateTask = {};

  tasks.forEach((item) => {
    if (!dateTask[item.date]) {
      dateTask[item.date] = [];
    }
    dateTask[item.date].push(item);
  });

  for (let date in dateTask) {
    console.log(`\nTanggal: ${date}`);
    dateTask[date].forEach((item, index) => {
      console.log(
        `${index + 1}. Title: ${item.title}\n Description: ${
          item.desc
        } \nwaktu: ${item.time}\n\n`
      );
    });
  }

  console.log("0. Kembali");
  while (true) {
    let input = await question("Masukkan input: ");
    const back = parseInt(input);

    if (back === 0) {
      await toDoList();
    } else {
      console.log("Inputan Salah! Silakan pilih 0 untuk kembali.\n");
    }
  }
}

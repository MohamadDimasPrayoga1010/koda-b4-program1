import { tasks } from "./addTask.js";

export function showTaskList() {
  if (tasks.length === 0) {
    console.log("\nTask Masih Kosong\n");
    return;
  }

  tasks.forEach((item, index) => {
    console.log(
      `${index + 1}. Title: ${item.title}\n   Description: ${
        item.desc
      }\n   Date: ${item.date}\n   Time: ${item.time}\n`
    );
  });
}

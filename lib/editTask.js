import { toDoList } from "../index.js";
import { tasks } from "./addTask.js";
import { question } from "./question.js";

export async function editTask() {
  if (tasks.length === 0) {
    console.log("================ Edit Task ================");
    console.log("\nTask Masih Kosong\n");
    await question("Tekan enter untuk kembali");
    return toDoList();
  }

  let errorMsg = "";

  let select;
  while (true) {
    console.clear();
    console.log("================ Edit Task ================");

    tasks.forEach((item, index) => {
      console.log(
        `${index + 1}. Title: ${item.title}\n   Description: ${
          item.desc
        }\n   Date: ${item.date}\n   Time: ${item.time}\n   Status: ${
          item.status
        }\n`
      );
    });

    if (errorMsg) {
      console.log(`\n${errorMsg}\n`);
    }

    const input = await question(
      "Masukkan nomor task yang ingin diedit (0 untuk kembali): "
    );
    const parsed = parseInt(input);

    if (!isNaN(parsed) && parsed === 0) {
      return toDoList();
    }

    if (isNaN(parsed) || parsed < 1 || parsed > tasks.length) {
      errorMsg = "Input tidak valid! Silakan coba lagi.";
      continue;
    }

    select = parsed;
    break;
  }

  const taskToEdit = tasks[select - 1];

  const newTitle = await question(
    `Masukkan Title baru (tekan Enter untuk skip): `
  );
  const newDesc = await question(
    `Masukkan Description baru (tekan Enter untuk skip): `
  );

  let doneInput;
  while (true) {
    doneInput = await question(
      `Apakah task ini sudah selesai? (y/n), status sekarang: ${taskToEdit.status}): `
    );
    const lower = doneInput.trim().toLowerCase();
    if (lower === "y" || lower === "n") {
      doneInput = lower;
      break;
    }

    console.log("Input tidak valid! Masukkan hanya 'y' atau 'n'.\n");
  }

  taskToEdit.title = newTitle.trim() || taskToEdit.title;
  taskToEdit.desc = newDesc.trim() || taskToEdit.desc;
  taskToEdit.status = doneInput === "y" ? "done" : "pending";

  console.log(`\nTask "${taskToEdit.title}" berhasil diupdate!`);

  await question("Tekan enter untuk kembali");
  return toDoList();
}

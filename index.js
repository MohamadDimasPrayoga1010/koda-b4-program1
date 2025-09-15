import { addTask } from "./lib/addTask.js";
import { exit, question } from "./lib/question.js";
import { showTask } from "./lib/showTask.js";
import { deleteTask } from "./lib/deleteTask.js";
import { editTask } from "./lib/editTask.js";

export async function toDoList() {
  console.log("========== To Do List ==========");
  console.log("1. Tambah Task");
  console.log("2. Lihat Daftar Task"); 
  console.log("3. Edit Task");
  console.log("4. Hapus Task");
  console.log("5. Keluar");

  let input = await question("Pilih Menu : ");
  input = parseInt(input);

  switch (input) {
    case 1:
      await addTask();
      break;
    case 2:
      await showTask();
      break;
    case 3:
      editTask()
      break;
    case 4:
      deleteTask();
      break;
    case 5:
      console.log("============== Terima Kasih ==============");
      await exit();
      break;
    default:
      await question("Salah Input (press enter)");
      toDoList();
  }
}

toDoList();

import { toDoList } from "../index.js";
import { tasks } from "./addTask.js";
import { question } from "./question.js";
import { showTaskList } from "./showTaskList.js";


export async function deleteTask() {
  console.log("\n=============== Hapus Task ===============\n");
  
  if (tasks.length === 0) {
    console.log("Belum ada task untuk dihapus.\n");
    await question("Tekan enter untuk kembali");
    return toDoList();
  }

  
  showTaskList();

  const input = await question("Masukkan nomor task yang ingin dihapus: ");
  const select = parseInt(input);

  if (isNaN(select) || select < 1 || select > tasks.length) {
    console.log("Input tidak valid!");
    return deleteTask(); 
  }

  const removed = tasks.splice(select - 1, 1);
  console.log(`Task "${removed[0].title}" berhasil dihapus!`);

  await question("Tekan enter untuk kembali");
  return toDoList();
}

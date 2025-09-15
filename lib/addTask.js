import { toDoList } from "../index.js";
import { question } from "./question.js";

export let tasks = [];
export async function addTask() {
  const title = await question("\nMasukan Title : ");
  const desc = await question("Masukan Descripsi : ");
  tasks.push({
    id: tasks.length + 1,
    title: title,
    desc: desc,
    date: new Date().toLocaleDateString("id-ID"), 
    time: new Date().toLocaleTimeString("id-ID"),
    status: "Pending"
  });

  tasks.forEach((item, index) => {
    console.log(
      `${index + 1}. Title: ${item.title}\n Description: ${item.desc}\n\n`
    );
  });

  let validAnswer = false;

  while (!validAnswer) {
    let addMoreTask = await question("Buat lagi Tekan Y, Kembali Tekan N : ");
    if (addMoreTask.toLowerCase() === "y") {
      validAnswer = true;
      await addTask();
    } else if (addMoreTask.toLowerCase() === "n") {
      validAnswer = true;
      await toDoList();
    } else {
      console.log("Inputan salah, Silahkan pilih Y atau N");
      await addMoreTask;
    }
  }
}

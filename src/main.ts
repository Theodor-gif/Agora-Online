import { example } from "./api.js";

let age: number = 5;

console.log(age);

const task: HTMLElement | null = document.getElementById("name");

if (task) {
  task.innerHTML = String(example);
}

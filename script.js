
document.getElementById("username").textContent = "João"; // Exemplo de nome de usuário

// Simular tarefas no calendário
let tasks = [
  { day: 'Segunda-feira', task: 'Escovar os dentes', points: 10 },
  { day: 'Terça-feira', task: 'Lavar a louça', points: 15 }
];

let tasksDiv = document.getElementById("tasks");
tasks.forEach(task => {
  let taskElement = document.createElement("div");
  taskElement.innerHTML = `<p>${task.day}: ${task.task} - <strong>${task.points} Migux</strong></p>`;
  tasksDiv.appendChild(taskElement);
});
fetch('https://replit.com/@estevamgrilo/Home-Kids')
  .then(response => response.json())
  .then(data => console.log(data));

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  tasks.appendChild(listItem);
  form.reset();
  });

tasks.addEventListener('click', function(event){
  let listItem = event.target.parentNode;
  if (event.target.className == "exit")
    const taskList = new TaskList();
});

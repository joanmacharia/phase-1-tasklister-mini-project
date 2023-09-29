document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault()

  const myForm = document.getElementById('create-task-form')
  myForm.addEventListener('submit', (e)  => {
    e.preventDefault()

    const newTask = document.getElementById('new-task-description')

    const taskList = document.getElementById('tasks')

    const newTaskItem = document.createElement('li')
    newTaskItem.innerText = newTask.value
    taskList.appendChild(newTaskItem)
    e.target.reset()

  })
  
});

                document.addEventListener('DOMContentLoaded', function() {
                document.querySelector('#addingtasks').onsubmit = function() {
                    let task = document.querySelector("#task").value;
                    let taskpriority = document.querySelector("#task-priority").value;
                    const li = document.createElement('li');
                    let task_title_text = `<span> ${ task }</span><span> ( ${taskpriority} )</span><button class="remove btn btn-dark">Remove</button><button class="complete btn btn-light">Complete</button><button class="pending">In Progress</button>`
                    li.innerHTML = task_title_text;
                    li.querySelector(".complete").onclick = function() {
                        completeTask(li);
                        console.log("what");
                    }
                  li.querySelector(".pending").onclick = function() {
                    pendingTask(li);
                  }
                    let index = taskArray.length - 1;
                    li.querySelector(".remove").onclick = function() {
                        removeTask(li, index);
                    }

                    const taskItem = {
                        "item-number": taskArray.length,
                        "tasktitle": task,
                        "task-priority": taskpriority
                    }

                    addTask(taskItem);
                    document.querySelector("#tasklist").append(li);
                    document.querySelector("#task").value = "";
                    console.log(taskArray);

                    return false;
                }
            })

let taskArray = [] 

function addTask(taskItem) {
    taskArray.push(taskItem);
}

function completeTask(li) {
    li.style.textDecoration = "line-through";
    li.style.textDecorationColor = "#815858";
}

function pendingTask(li) {
  li.style.textDecoration = "underline";
  li.style.textDecorationColor = "#ff66b2";
}

function removeTask (li, index) {
    taskArray.splice(index,1);
    li.remove();
    console.log(taskArray);
}

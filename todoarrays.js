                document.addEventListener('DOMContentLoaded', function() {
                document.querySelector('#addingtasks').onsubmit = function() {
                    let task = document.querySelector("#task").value;
                    let taskpriority = document.querySelector("#task-priority").value;
                    let taskstatus = document.querySelector('input[name="pendingtask"]:checked');
                    const li = document.createElement('li');
                    let task_title_text = `<span> ${ task }</span><span> ( ${taskpriority} )</span><button class="remove btn btn-light">Remove</button><button class="complete btn btn-light">Complete</button><button class="pending btn btn-light">In Progress</button>`
                    li.innerHTML = task_title_text;
                    li.querySelector(".complete").onclick = function() {
                        completeTask(li);
                        console.log("what");
                    }
                  li.querySelector(".pending").onclick = function() {
                    pendingTask(li);
                  }
                  
                    if(taskstatus.value === yes)
                    {
                      alreadyPending(li);
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
  li.style.textDecorationColor = "c8f3d6";
  li.style.color = "#ff66b2";
}

function alreadyPending(li) {
  li.style.fontStyle = "italic";
}

function removeTask (li, index) {
    taskArray.splice(index,1);
    li.remove();
    console.log(taskArray);
}

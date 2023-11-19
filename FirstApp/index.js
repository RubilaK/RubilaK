const taskInput=document.getElementById("taskInput");
const addTask=document.getElementById("addTask");
const taskList=document.getElementById("taskList");

addTask.addEventListener("click", function () {
    const taskvalue = taskInput.value.trim();


if(taskvalue.length){
    const li=document.createElement("li");
    const checkbox=document.createElement("input");
    const deletebtn=document.createElement("button");

    const txtNode=document.createTextNode(`${taskvalue}`);

    checkbox.type="checkbox";
    deletebtn.innerText="Delete";

    li.appendChild(checkbox);
    li.appendChild(txtNode);
    li.appendChild(deletebtn);


    checkbox.addEventListener("change" ,function(){
        if(this.checked){
            li.classList.add("completed");

        }else{
            li.classList.remove("completed");
        }
    });
    deletebtn.addEventListener("click" ,function(){
        console.log("delete button clicked",li);
        taskList.removechild(li);
    });


    taskList.appendChild(li);
    taskInput.value=""; 
}
});


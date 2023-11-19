const inputBox = document.getElementById("input-box");
const timeInput = document.getElementById("time-input");
const listContainer = document.getElementById("list-container");
const alarmSound = document.getElementById("alarmSound");


function addTask() {
    if (inputBox.value === "") {
        alert("Enter a value!");
    } else {
        let li = document.createElement("li");
        
        let taskDiv = document.createElement("div");
        taskDiv.className = "task-div";
        taskDiv.innerHTML = inputBox.value;
        li.appendChild(taskDiv);


        let closeSpan = document.createElement("span");
        closeSpan.innerHTML = "\u00d7";
        li.appendChild(closeSpan);

        listContainer.appendChild(li);

        
        setTimeout(() => {
            // playAudio()
            alert(`Time's up for task: ${inputBox.value} secs`);
            li.classList.add("checked");
        }, timeInput.value * 1000); 

        inputBox.value = "";
        timeInput.value = "";
        saveData();
    }
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        saveData()
    }
},false)

/*function playAudio() {
        alarmSound.play();
        setTimeout(() => {
            alarmSound.pause();
            alarmSound.currentTime = 0;
        }, 3000);
}
*/
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()
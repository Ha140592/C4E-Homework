let timeSheetData = [
    {
        project: "Learn front-end",
        task: "Learn HTML",
        timeSpent: 6
    },
    {
        project: "Learn front-end",
        task: "Learn CSS",
        timeSpent: 8
    },
    {
        project: "Learn front-end",
        task: "Learn JS Variables And Data Types",
        timeSpent: 6
    },
    {
        project: "Learn git",
        task: "Learn git basics",
        timeSpent: 2
    },
]
console.log(timeSheetData);
let table = document.getElementById('ts_tbody');
console.log(table);
for (let i = 0; i < timeSheetData.length; i++) {
    let row = table.insertRow(i+1);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    cell0.innerHTML = timeSheetData[i].project;
    cell1.innerHTML = timeSheetData[i].task;
    cell2.innerHTML = timeSheetData[i].timeSpent;
    cell3.innerHTML = '<button onClick="removeLine(this)">X</button> <button id="updateBtn">U</button>';
}
table.deleteRow(0);

let inputProject = document.getElementById('input_project');
let inputTask = document.getElementById('input_task');
let inputTime = document.getElementById('input_time');
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(){
    let newObject = {
        project: inputProject.value,
        task: inputTask.value,
        timeSpent: inputTime.value
    }
    timeSheetData.push(newObject);
    console.log(timeSheetData);
    let row = table.insertRow(timeSheetData.length-1);
    let cell0 = row.insertCell(0);
    let cell1 = row.insertCell(1);
    let cell2 = row.insertCell(2);
    let cell3 = row.insertCell(3);
    cell0.innerHTML = timeSheetData[timeSheetData.length-1].project;
    cell1.innerHTML = timeSheetData[timeSheetData.length-1].task;
    cell2.innerHTML = timeSheetData[timeSheetData.length-1].timeSpent;
    cell3.innerHTML = '<button onClick="removeLine(this)">X</button> <button>U</button>';
    
})
function removeLine(r) {
    let index = r.rowIndex;
    table.deleteRow(index);
  }

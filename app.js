var listOfActivities = [];

var input = document.getElementById("input");

var toDOList = document.getElementById("todolist");



document.getElementById("button").onclick = click;

function click(){
listOfActivities.push(input.value);

console.log(listOfActivities);

input.value = "";

showList();
}

function showList(){
    toDOList.innerHTML = "";

    listOfActivities.forEach(function(current_value, index){
        toDOList.innerHTML+=("<li>" + current_value + "<a onclick='editItem("+index+")'>edit</a>") + 
        "<a onclick='deleteItem("+index+")'>&times |</a></li>";
    })
}
    
function editItem(index){
    var newValue = prompt("Please insert your 'To-Do' :)");

    listOfActivities.splice(index,1,newValue);

    showList();
}
    
function deleteItem(index){
    listOfActivities.splice(index,1);

    showList()
}

const inputbox = document.getElementById("inputbox");
const addbtn = document.getElementById("addbtn");
const num_display = document.getElementById("numbers");
const todolist = document.querySelector(".todolist");


inputbox.onkeyup = () =>{
    let userenteredvalue = inputbox.value;

    if (userenteredvalue.trim() != 0){
        addbtn.classList.add("active");
    }else{
        addbtn.classList.remove("active");
    }
}


showtasks();


addbtn.onclick = () =>{
    let userdata = inputbox.value;
    let getLocalStorage = localStorage.getItem("New Todo");

    if(getLocalStorage == null){
        listarry = [];
    }else{
        listarry = JSON.parse(getLocalStorage);
    }
    listarry.push(userdata)
    localStorage.setItem("New Todo", JSON.stringify(listarry));
    showtasks();
    addbtn.classList.remove("active"); 
}

function showtasks(){

    let getLocalStorate = localStorage.getItem("New Todo");

    if(getLocalStorate == null){
        listarry = [];
    }else{
        listarry = JSON.parse(getLocalStorate);
    }
    num_display.textContent = listarry.length;
    let newLiTag = "";
    listarry.forEach((element, index) => {
        newLiTag += `
            <li class="item" onclick="deletetask()" title="Click to delete item">${element}</li>
        `        
        added_item = true;
    });



    todolist.innerHTML = newLiTag
    inputbox.value = "";

}




function clean(){
    alert("The list is now empty...")
    localStorage.clear();
    window.location.reload();
}

function deletetask(index){
    let getLocalStorate = localStorage.getItem("New Todo");
    listarry = JSON.parse(getLocalStorate);
    listarry.splice(index, 1)

    localStorage.setItem("New Todo", JSON.stringify(listarry));
    showtasks();
}
const form = document.querySelector("#itemForm");
const itemInput = document.querySelector("#itemInput");
const itemsList = document.querySelector("#itemsList");
const filters = document.querySelectorAll(".nav-item");

let todoItems = [];

const getList = function(todoItems){
    itemsList.innerHTML = '';
    if(todoItems.length > 0){
     todoItems.forEach((item)=>{
        let liTag = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${item.name}</span>
        <span>
         <a><i class="bi bi-check-circle green"></i></a>
         <a><i class="bi bi-pencil-square blue"></i></a>
         <a><i class="bi bi-x-circle red"></i></a>
        </span>
     </li>`
        itemsList.insertAdjacentHTML('beforeend',liTag);
     })
    }
    else{

    }
}

//get from local storage
const getLocalStorage = function(){
    const todoStorage = localStorage.getItem('itemsAdded');
    if(todoStorage === 'undefined' || todoStorage === null){
        todoItems = [];
    }
    else{
        todoItems = JSON.parse(todoStorage);
    }
    console.log(todoItems);
    getList(todoItems);
}

//set in local storage
const setLocalStorage = function (todoItems){
localStorage.setItem('itemsAdded', JSON.stringify(todoItems));
}

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const itemName = itemInput.value.trim();
    if (itemName.length === 0) {
      alert("Please enter a task...");
    } else {
      const itemObj = {
        name: itemName,
        isDone: false,
        addedAt: new Date().getTime(),
      };
      todoItems.push(itemObj);
      setLocalStorage(todoItems);
    }
  });
  getLocalStorage();
});

// let sum = 0;
// let array = [1,2,3];
// array.forEach((ele)=>{
//     sum += ele;
//     console.log(sum);

// })

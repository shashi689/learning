const form = document.querySelector('#itemForm');
const itemInput = document.querySelector('#itemInput');
const itemList = document.querySelector('#itemsList');
const filters = document.querySelectorAll('.nav-item');


let todoItems = [];
document.addEventListener('DOMContentLoaded', ()=>{
form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const itemName= itemInput.value.trim();
    if(itemName.length===0){
        alert('Please enter a task...');
    }
    console.log(itemName);
})
});
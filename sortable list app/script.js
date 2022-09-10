const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Elon Musk",
  "Jeff Bezos",
  "Gautam Adani",
  "Bernard Arnault",
  "Bill Gates",
  "Larry Page",
  "Warren Buffett",
  "Sergey Brin",
  "Mukesh Ambani",
  "Steve Ballmer",
];

const listItems = [];

let dragStartIndex;
creatList();
function creatList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random()}))
    .sort((a , b)=> a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
    //   console.log(person);
      const listItem = document.createElement("li");
    //   listItem.classList.add('over')
      // console.log(listItems);
      listItem.setAttribute("data-index", index);
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable = "true" >
        <p class="person-name"> ${person}</p>
        <i class="fas fa-grip-lines"></i>
        </div>
        `;
      // console.log(listItem.innerHTML);

      listItems.push(listItem);
      // console.log(listItems);

      draggable_list.appendChild(listItem);
    });
    addEventListener();
}


function dragStart(){
    // console.log('Event: ', 'dragstart');
    dragStartIndex= +this.closest('li').getAttribute('data-index');
    // console.log(dragStartIndex);
}
function dragOver(e){
    // console.log('Event: ', 'dragover');
    e.preventDefault();
}
function dragEnter(){
    // console.log('Event: ', 'dragenter');
    this.classList.add('over');
}
function dragLeave(){
    // console.log('Event: ', 'dragleave');
    this.classList.remove('over');
}

function dragDrop(){
    // console.log('Event: ', 'dragdrop');
    const dragEndIndex = +this.getAttribute('data-index');
    // console.log(dragEndIndex);
    swapItems(dragStartIndex , dragEndIndex);
    this.classList.remove('over');
}

function swapItems(fromIndex, toIndex){
    // console.log(1);
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');
    // console.log(itemOne , itemTwo);
    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

function checkOrder(){
    listItems.forEach((listItem , index) => {
        const personName = listItem.querySelector('.draggable').innerText.trim();
        if(personName !== richestPeople[index]){
            // console.log()
            listItem.classList.add('wrong');
        } 
        else{
            listItem.classList.remove('wrong');
            listItem.classList.add('right');

        }
    })
}
 

function addEventListener(){
    const draggables = document.querySelectorAll('.draggable');
    const dragListItem = document.querySelectorAll('.draggable-list li');
     draggables.forEach(draggable =>{
         draggable.addEventListener('dragstart', dragStart);
        //  console.log('Event: ', draggable);
     })
     dragListItem.forEach(item =>{
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
    })
}

check.addEventListener('click', checkOrder);
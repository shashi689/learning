const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const rishestPeople = [
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
  [...rishestPeople]
    .map((a) => ({ value: a, sort: Math.random()}))
    .sort((a , b)=> a.sort - b.sort)
    .map(a => a.value)
    .forEach((person, index) => {
      console.log(person);
      const listItem = document.createElement("li");
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
}

let myLeads = `["www.foobar.com"]`;

// 1. Turn the my Leads string into an array
myLeads = JSON.parse(myLeads);
// 2. Push a new value to the array
myLeads.push("www.barfoo.com");
// console.log(myLeads);
// 3. Turn the array into a string again
myLeads = JSON.stringify(myLeads);
// 4. Console.log the string using typeof to verify it is a string
console.log(typeof myLeads);


const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = ""
  renderLeads();
});

function renderLeads() {
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
      </a>
    </li>
  `
    console.log(listItems)
  }
  ulEl.innerHTML = listItems;
}

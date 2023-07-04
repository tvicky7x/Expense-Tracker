// Getting Events
// submit button event
let submit = document.getElementById("submit");
submit.addEventListener("click", addExpense);
// delete event
let expenseList = document.getElementById("expenseList");
expenseList.addEventListener("click", clearExpense);
expenseList.addEventListener("click", editExpense);

// addExpense Function
function addExpense(e) {
  e.preventDefault();
  let expenseAmount = document.getElementById("expenseAmount").value;
  let expenseName = document.getElementById("expenseName").value;
  let expenseCategory =
    document.getElementById("expenseCategory").selectedOptions[0].value;
  // making an li element
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.id = expenseName;
  let strongamout = document.createElement("strong");
  strongamout.appendChild(document.createTextNode(`${expenseAmount} ₹`));
  li.appendChild(strongamout);
  li.appendChild(document.createTextNode(` - ${expenseName}`));
  li.style.textTransform = "capitalize";
  // delete btn
  let del = document.createElement("button");
  del.className = "btn btn-danger btn-sm float-end delete fw-semibold";
  del.appendChild(document.createTextNode("X"));
  li.appendChild(del);
  // edit btn
  let edit = document.createElement("button");
  edit.className = "btn btn-warning btn-sm me-2 float-end edit fw-semibold";
  edit.appendChild(document.createTextNode("EDIT"));
  li.appendChild(edit);
  // category btn
  let categoryBtn = document.createElement("button");
  categoryBtn.className = "btn btn-outline-primary btn-sm float-end me-2";
  categoryBtn.appendChild(document.createTextNode(expenseCategory));
  li.appendChild(categoryBtn);
  // adding li to ul
  expenseList.appendChild(li);
  let expenseObj = {
    expenseAmount: expenseAmount,
    expenseName: expenseName,
    expenseCategory: expenseCategory,
  };
  localStorage.setItem(li.id, JSON.stringify(expenseObj));
}

// clearExpense Function
function clearExpense(e) {
  if (e.target.classList.contains("delete")) {
    let li = e.target.parentNode;
    expenseList.removeChild(li);
  }
}

// editExpense Function
function editExpense(e) {
  if (e.target.classList.contains("edit")) {
    let li = e.target.parentNode;
    let expenseObj = JSON.parse(localStorage.getItem(li.id));
    document.getElementById("expenseAmount").value = expenseObj.expenseAmount;
    document.getElementById("expenseName").value = expenseObj.expenseName;
    document.getElementById("expenseCategory").value =
      expenseObj.expenseCategory;
    expenseList.removeChild(li);
  }
}

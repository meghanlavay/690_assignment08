// CREATE AN ARRAY OF EMPLOYEES
let employees = [
    [12345689, 'Meghan', 1234, 'meghan@gmail.com', 'Administrative'],
    [22345689, 'Bob', 2234, 'bob@gmail.com', 'Engineering'],
    [32345689, 'Sally', 3234, 'sally@gmail.com', 'Executive'],
    [42345689, 'Ted', 4234, 'ted@gmail.com', 'Marketing'],
    [52345689, 'Jen', 5234, 'jen@gmail.com', 'Quality Assurance'],
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem = true) {
    employees = JSON.parse(localStorage.getItem('employeedata'));
} else {
    alert('No storage exists');
    localStorage.setItem('employeedata', JSON.stringify(employees));
}

// GET DOM ELEMENTS
const $ = (id) => document.getElementById(id);
let form = $('addForm');
let empTable = $('empTable');
let empCount = $('empCount');

empCount.innerHTML = `(${employees.length})`;

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid(employees)

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const $ = (id) => document.getElementById(id);
    let id = $('id').value;
    let name = $('name').value;
    let ext = $('extension').value;
    let email = $('email').value;
    let department = $('department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmp = [id, name, ext, email, department];

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmp);

    // BUILD THE GRID
    buildGrid(employyes);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {

    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
    if (confirm("Are you sure you want to delete this employee?")) {

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
        let rowIndex = e.target.parentNode.parentNode.rowIndex;

        // REMOVE EMPLOYEE FROM ARRAY
        employees.splice(rowIndex -1, 1);

        // BUILD THE GRID
        buildGrid(employees);
    }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid(employees) {

    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    tbody.remove();

    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for (let employee of employees) {
        row = tbody.insertRow();
        cellId = row.insertCell();
        cellId.appendChild(document.createTextNode(employee));
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody);

    // UPDATE EMPLOYEE COUNT
    empCount +=1;

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees));

};
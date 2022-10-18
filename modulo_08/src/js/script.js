const form = document.querySelector('form');
let inputName = document.getElementById('inputName');
let inputPhone = document.getElementById('inputPhone');

let tableRow;
let tableRows = document.querySelector('tbody');
let tableRowCount = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (inputName.value.trim().length === 0 || inputPhone.value.trim().length === 0) {
        console.log('Digite algo');
    } else {
        addTableRow();
        updateContactTotal();
        inputName.value = '';
        inputPhone.value = '';
    }
});

function addTableRow() {
    tableRow = `<tr>`;
    tableRow += `<td><span>${inputName.value}</span></td>`;
    tableRow += `<td><span>${inputPhone.value}</span></td>`;
    tableRow += `</tr>`;

    tableRows.innerHTML += tableRow;
    tableRowCount++;
}

function updateContactTotal() {
    contactTotal.innerHTML = tableRowCount;
}

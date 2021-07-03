// Get DOM Elements

const balance = document.getElementById('balance');
const moneyCredit = document.getElementById('money-credit');
const moneyDebit = document.getElementById('money-debit');
const list = document.getElementById('list');
const form = document.getElementById('add-form');
const reason = document.getElementById('reason');
const amount = document.getElementById('amount');

// Temporary array of transactions - to be replaced with local storage
const Transactions = [
    { id: 1, reason: 'Salary', amount: 5000 },
    { id: 2, reason: 'Dinner', amount: -1000 },
    { id: 3, reason: 'Air Ticket', amount: -400 },
    { id: 4, reason: 'Hotel', amount: -500 }
];

// Get Transaction data from storage

let transactions = Transactions;

// Function to display transaction in DOM - History section

function displayTransaction(transaction) {
    // Calculate if transaction is Credit or Debit
    const type = transaction.amount > 0 ? '+' : '-';
    // Create a list item for  the transaction
    const transactionLI = document.createElement('li');
    // Determine class base on transition type. if positive, then credit, otherwise debit
    transactionLI.classList.add(transaction.amount > 0 ? 'credit' : 'debit');
    // Assign the inn HTML for transaction li
    transactionLI.innerHTML = `
        ${transaction.reason} <span>${transaction.amount}</span>
        <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">X</button>
    `;
    // Add list item in the DOM under the transaction history list 
    list.appendChild(transactionLI);
};

// Function to update all balances
function updateBalance() {
    // Create new Array with just the amounts from the transactions Array
    const transactionAmounts = transactions.map(transaction => transaction.amount);
    // Calculate total balance value
    const totalBalance = transactionAmounts.reduce((acc, amount) => (acc += amount), 0);
    // Calculate total credit balance value
    const creditBalance = transactionAmounts
        .filter(amount => amount > 0)
        .reduce((acc, amount) => (acc += amount), 0);
    // Calculate total debit balance value
    const debitBalance = transactionAmounts
        .filter(amount => amount < 0)
        .reduce((acc, amount) => (acc += amount), 0);
    // Update Values in the DOM
    balance.innerText = `$${totalBalance}`;
    moneyCredit.innerText = `$${creditBalance}`;
    moneyDebit.innerText = `$${debitBalance}`;
};

// function to create a random ID
function createID() {
    return Math.floor(Math.random() * 10000000000);
}

// function to add a transaction from the form
function addTransaction(e) {
    // Stop the page reload
    e.preventDefault();
    // Check if form has valid data
    if (reason.value.trim() === '' || amount.value.trim() === '') {
        alert('Please provide a valid reason & transition amount.');
    } else {
        // create an object for the transaction containing id,
        // text for reason, and the transaction amount
        const transaction = {
            id: createID(),
            reason: reason.value,
            amount: +amount.value
        }
        // Push the new transaction into transactions array
        transactions.push(transaction);
        // display the new transaction in the DOM
        displayTransaction(transaction);
        //  Update all balances
        updateBalance();
        reason.value = '';
        amount.value = '';
    }
};

// Function to delete a transaction from the history
function deleteTransaction(id) {
    // Filter out the transaction with the provided id
    transactions = transactions.filter(transaction => transaction.id !== id);
    // initialize the app  again to update the DOM
    init();
}
// Function to Initialize the Application
function init() {
    // Clear all transaction history
    list.innerHTML = '';
    // Display all transaction from db in DOM
    transactions.forEach(displayTransaction);
    // Update all balance value
    updateBalance();
};

// Event Listener
// 1. Listener for form submit to add a transaction
form.addEventListener('submit', addTransaction)

// Initialize the Application

init();
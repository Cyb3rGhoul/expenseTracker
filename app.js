let totalExpenses = 0;

function addEntry(blockId) {
    const block = document.getElementById(blockId);
    const entries = block.querySelector('.entries');
    
    const description = prompt('Enter description:');
    const amount = parseFloat(prompt('Enter amount:'));
    
    if (description && !isNaN(amount)) {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        entryDiv.innerHTML = `
            <span>${description}: $${amount.toFixed(2)}</span>
            <button onclick="deleteEntry(this, ${amount})">Delete</button>
        `;
        entries.appendChild(entryDiv);
        
        totalExpenses += amount;
        document.getElementById('total-expenses').innerText = `$${totalExpenses.toFixed(2)}`;
    }
}

function deleteEntry(button, amount) {
    totalExpenses -= amount;
    document.getElementById('total-expenses').innerText = `$${totalExpenses.toFixed(2)}`;
    button.parentElement.remove();
}

function addNewBlock() {
    const title = prompt('Enter block title:');
    if (title) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.innerHTML = `
            <h3>${title}</h3>
            <div class="entries"></div>
            <button onclick="addEntry('${title.toLowerCase()}')">Add Entry</button>
        `;
        document.querySelector('.blocks-container').appendChild(block);
    }
}

function addDailyExpense() {
    const description = document.getElementById('daily-description').value;
    const amount = parseFloat(document.getElementById('daily-amount').value);
    if (description && !isNaN(amount)) {
        const dailyEntries = document.getElementById('daily-entries');
        const entryDiv = document.createElement('div');
        const date = new Date().toLocaleDateString();
        
        entryDiv.innerHTML = `
            <span>${date} - ${description}: ${amount.toFixed(2)}</span>
            <button onclick="addToTotal(${amount})">Add to Total</button>
        `;
        
        dailyEntries.appendChild(entryDiv);
        
        document.getElementById('daily-description').value = '';
        document.getElementById('daily-amount').value = '';
    }
}

function addToTotal(amount) {
    totalExpenses += amount;
    document.getElementById('total-expenses').innerText = `${totalExpenses.toFixed(2)}`;
}

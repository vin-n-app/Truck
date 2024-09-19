// Constants
const workerHourlyRate = 4500 / 160;  // Worker rate per hour
const overheadCosts = 26000;
const profitMargin = 0.2;

// Calculation function
function calculatePrice() {
    const laborHours = parseFloat(document.getElementById('laborHours').value);
    const numWorkers = parseFloat(document.getElementById('numWorkers').value);
    const materialCost = parseFloat(document.getElementById('materialCost').value);

    if (isNaN(laborHours) || isNaN(numWorkers) || isNaN(materialCost)) {
        alert("Please enter valid values.");
        return;
    }

    // Calculate labor cost
    const laborCost = laborHours * numWorkers * workerHourlyRate;

    // Calculate material cost with profit markup
    const materialWithProfit = materialCost * (1 + profitMargin);

    // Calculate proportional overhead for the job based on labor hours
    const dailyOverheadPerWorker = overheadCosts / 30;  // Daily overhead per worker
    const proportionalOverhead = (laborHours / 8) * numWorkers * dailyOverheadPerWorker;  // Proportional overhead

    // Calculate total cost
    const totalCost = laborCost + materialWithProfit + proportionalOverhead;

    // Update receipt
    document.getElementById('laborCost').textContent = `${laborCost.toFixed(2)} QAR`;
    document.getElementById('materialTotal').textContent = `${materialWithProfit.toFixed(2)} QAR`;
    document.getElementById('totalCost').textContent = `${totalCost.toFixed(2)} QAR`;
}

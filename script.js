// Constants
const workerHourlyRate = 4500 / (10 * 6 * 4.33);  // Worker rate per hour
const overheadCosts = 26000;
const profitMargin = 0.2;

// Calculation function
function calculatePrice() {
    const laborHours = parseFloat(document.getElementById('laborHours').value);
    const numWorkers = parseFloat(document.getElementById('numWorkers').value);
    const materialCost = parseFloat(document.getElementById('materialCost').value);

    if (isNaN(laborHours) || isNaN(numWorkers) || isNaN(materialCost) || laborHours < 0 || numWorkers <= 0 || materialCost < 0) {
        alert("Please enter valid values.");
        return;
    }

    // Calculate labor cost
    const laborCost = laborHours * numWorkers * workerHourlyRate;
    
    // Calculate material cost with profit markup
    const materialWithProfit = materialCost * (1 + profitMargin);

    // Calculate total monthly working hours
    const totalMonthlyWorkingHours = 10 * 6 * 4.33; // 10 hours/day * 6 days/week * 4.33 weeks/month
    const hourlyOverhead = overheadCosts / totalMonthlyWorkingHours; // Overhead per hour

    // Calculate overhead for the job
    const overheadForJob = laborHours * numWorkers * hourlyOverhead;

    // Calculate total cost
    const totalCost = laborCost + materialWithProfit + overheadForJob;

    // Update receipt
    document.getElementById('totalCost').textContent = `${totalCost.toFixed(2)} QAR`;
}

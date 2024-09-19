// Constants
const workerHourlyRate = 4500 / (10 * 6 * 4.33);  // Hourly rate per worker
const overheadCosts = 26000;  // Monthly overhead costs
const profitMargin = 0;  // Profit margin (0% for this example)

// Calculation function
function calculatePrice() {
    // Retrieve input values
    const laborHours = parseFloat(document.getElementById('laborHours').value);
    const numWorkers = parseFloat(document.getElementById('numWorkers').value);
    const materialCost = parseFloat(document.getElementById('materialCost').value);

    // Validate inputs
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

    // Display only total cost
    document.getElementById('totalCost').textContent = `Total Cost: ${totalCost.toFixed(2)} QAR`;
    document.getElementById('totalCost').style.display = 'block'; // Show total cost
}

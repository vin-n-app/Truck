// Constants
        const workerMonthlyRate = 4500; // Monthly rate for one worker
        const workHoursPerWeek = 10 * 6; // 10 hours per day, 6 days a week
        const workWeeksPerMonth = 4.33; // Average weeks per month
        const workerHourlyRate = workerMonthlyRate / (workHoursPerWeek * workWeeksPerMonth); // Worker rate per hour
        const overheadCosts = 26000; // Monthly overhead costs
        const totalMonthlyHours = workHoursPerWeek * workWeeksPerMonth * 7; // Total hours worked by all 7 workers
        const overheadHourlyRate = overheadCosts / totalMonthlyHours; // Overhead cost per hour for all workers
        const profitMargin = 0.2; // Profit margin (20%)

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

            // Calculate overhead cost for the job
            const overheadCostForJob = laborHours * numWorkers * overheadHourlyRate;

            // Calculate material cost with profit markup
            const materialWithProfit = materialCost * (1 + profitMargin);

            // Calculate total cost (labor + overhead + materials with profit)
            const totalCost = laborCost + overheadCostForJob + materialWithProfit;

            // Update receipt
            document.getElementById('totalCost').textContent = `${totalCost.toFixed(2)} QAR`;
        }

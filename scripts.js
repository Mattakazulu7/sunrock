document.getElementById('solarPanels').addEventListener('input', updateCalculations);
document.getElementById('roofSpace').addEventListener('input', updateCalculations);
document.getElementById('miners').addEventListener('input', updateCalculations);
document.getElementById('bitcoinReward').addEventListener('input', updateCalculations);
document.getElementById('energyPrice').addEventListener('input', updateCalculations);

function updateCalculations() {
    calculateEnergyProduced();
    calculateProfitabilityMiners();
    calculateProfitabilityPurchasers();
    calculateMaxMiners();
}

function calculateEnergyProduced() {
    const solarPanels = document.getElementById('solarPanels').value;
    const energyProduced = solarPanels * 0.2; // Example: 0.2 kW per solar panel

    document.getElementById('energyProduced').textContent = `Energy Produced: ${energyProduced.toFixed(2)} kW`;
    document.getElementById('energyProduced2').textContent = `Energy Produced: ${energyProduced.toFixed(2)} kW`;
}

function calculateProfitabilityMiners() {
    const solarPanels = document.getElementById('solarPanels').value;
    const miners = document.getElementById('miners').value;
    const bitcoinReward = document.getElementById('bitcoinReward').value;

    // Calculation logic for miners
    const solarEnergyProduced = solarPanels * 0.2; // Example: 0.2 kW per solar panel
    const miningProfit = bitcoinReward * 1 - miners; // Simplified example
    
    const totalProfit = miningProfit;

    document.getElementById('resultMiners').textContent = `Total Profitability: $${totalProfit.toFixed(2)}`;
}

function calculateProfitabilityPurchasers() {
    const solarPanels = document.getElementById('solarPanels').value;
    const energyPrice = document.getElementById('energyPrice').value;

    // Calculation logic for purchasers
    const solarEnergyProduced = solarPanels * 0.2; // Example: 0.2 kW per solar panel
    const energySaleProfit = solarEnergyProduced * energyPrice;
    
    const totalProfit = energySaleProfit;

    document.getElementById('resultPurchasers').textContent = `Total Profitability: $${totalProfit.toFixed(2)}`;
}

function calculateMaxMiners() {
    const solarPanels = document.getElementById('solarPanels').value;
    const energyProduced = solarPanels * 0.2; // Example: 0.2 kW per solar panel
    const maxMiners = Math.floor(energyProduced / 1); // 1 kW per miner

    document.getElementById('maxMiners').textContent = `Max Miners Supported: ${maxMiners}`;
    document.getElementById('maxMiners').style.color = 'orange';
}

// Initial calculation on page load
updateCalculations();


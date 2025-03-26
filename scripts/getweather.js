// Static temperature (°C) and wind speed (km/h) values
const temperature = 8; // Example: 8°C
const windSpeed = 10; // Example: 10 km/h

/**
 * Calculates wind chill factor using the metric formula.
 * Wind chill is calculated only if temperature is ≤ 10°C and wind speed > 4.8 km/h.
 * @param {number} tempC - Temperature in Celsius
 * @param {number} windKmh - Wind speed in km/h
 * @returns {string} Wind chill factor or "N/A"
 */
function calculateWindChill(tempC, windKmh) {
    return (tempC <= 10 && windKmh > 4.8)
        ? (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)).toFixed(1) + " °C"
        : "N/A";
}

// Insert wind chill value into the page
document.addEventListener("DOMContentLoaded", function () {
    const windChillElement = document.getElementById("windchill");
    if (windChillElement) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed);
    }
});

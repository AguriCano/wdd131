
// Footer information
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightYearElement = document.getElementById('currentyear');
const lastModifiedElement = document.getElementById('lastModified');
copyrightYearElement.textContent = currentYear;
lastModifiedElement.textContent = `Last update: ${lastModified}`;

 // Definir valores estáticos para temperatura y velocidad del viento
 const temperature = 24; // En grados Celsius (Ejemplo)
 const windSpeed = 10; // En km/h (Ejemplo)

 // Calcular y mostrar el factor de sensación térmica
 const windChill = calculateWindChill(temperature, windSpeed);
 document.getElementById("windChill").textContent = windChill;

// Función para calcular el factor de sensación térmica
function calculateWindChill(temp, wind) {
 if (temp <= 10 && wind > 4.8) {
     return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(2) + " °C";
 } else {
     return "N/A"; 
 }
}

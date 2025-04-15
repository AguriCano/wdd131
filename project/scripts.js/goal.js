// review.js - Script for EcoLife product review form

document.addEventListener('DOMContentLoaded', function () {
    const ecoProducts = [
      { id: 'ec-001', name: "Reusable Water Bottle", avg_rating: 4.8 },
      { id: 'ec-002', name: "Solar Powered Lamp", avg_rating: 4.6 },
      { id: 'ec-003', name: "Bamboo Toothbrush", avg_rating: 4.4 },
      { id: 'ec-004', name: "Compostable Phone Case", avg_rating: 4.3 },
      { id: 'ec-005', name: "Beeswax Food Wraps", avg_rating: 4.7 }
    ];
  
    const selectElement = document.getElementById('product-name');
    if (selectElement) {
      ecoProducts.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = `${product.name} (Avg Rating: ${product.avg_rating})`;
        selectElement.appendChild(option);
      });
    }
  
    if (localStorage.getItem('reviewCount') === null) {
      localStorage.setItem('reviewCount', 0);
    }

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const copyrightYearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('lastModified');
    if (copyrightYearElement) {
        copyrightYearElement.textContent = currentYear;
    }
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last update: ${lastModified}`;
    }

  });
  
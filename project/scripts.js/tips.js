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
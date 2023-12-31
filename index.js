const fs = require('fs');
const xml2js = require('xml2js');

// Read XML file
const xmlData = fs.readFileSync('data.xml', 'utf-8');

// Parse XML to JSON
xml2js.parseString(xmlData, (err, jsonData) => {
  if (err) {
    console.error('Error parsing XML:', err);
  } else {
    // Convert JSON to a string with proper indentation
    const jsonString = JSON.stringify(jsonData, null, 2);

    // Write JSON to a file
    fs.writeFileSync('data.json', jsonString);
    console.log('Conversion successful! Check data.json');
  }
});

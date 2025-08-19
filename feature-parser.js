const fs = require('fs');

const report = fs.readFileSync('training_report_onnx.md', 'utf-8');
const featureMap = {};

const makes = [
    "Audi", "BMW", "Chevrolet", "Citroen", "Fiat", "Ford", "Kia", "Mazda", 
    "Mercedes-Benz", "Opel", "Peugeot", "Renault", "Subaru", "Toyota", 
    "Volkswagen", "Volvo"
];

makes.forEach(make => {
    const modelHeader = "## Model: `" + make + "`";
    const codeBlockStart = '```';
    const codeBlockEnd = '```';

    let startIndex = report.indexOf(modelHeader);
    if (startIndex !== -1) {
        startIndex = report.indexOf(codeBlockStart, startIndex);
        if (startIndex !== -1) {
            const endIndex = report.indexOf(codeBlockEnd, startIndex + codeBlockStart.length);
            if (endIndex !== -1) {
                const featureBlock = report.substring(startIndex + codeBlockStart.length, endIndex).trim();
                const features = featureBlock.split('\n').map(f => f.trim().replace(/^- /, '')).filter(Boolean);
                featureMap[make] = features;
            }
        }
    }
});

fs.writeFileSync('onnx_models/feature_map.json', JSON.stringify(featureMap, null, 2));
console.log('Feature map generated successfully!');
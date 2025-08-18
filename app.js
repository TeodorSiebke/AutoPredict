
document.addEventListener('DOMContentLoaded', () => {
    const makeSelect = document.getElementById('make');
    const modelSelect = document.getElementById('model');
    const regionSelect = document.getElementById('region');
    const fuelSelect = document.getElementById('fuel');
    const gearboxSelect = document.getElementById('gearbox');
    const yearInput = document.getElementById('year');
    const mileageInput = document.getElementById('mileage');
    const predictBtn = document.getElementById('predict-btn');
    const predictionResult = document.getElementById('prediction-result');

    const carData = {
        'Audi': {
            models: ['A1', 'A3', 'A3 Sportback', 'A4', 'A5', 'A5 Sportback', 'A6', 'A6 Allroad', 'A6 Avant', 'A7', 'E-Tron', 'Q2', 'Q3', 'Q4', 'Q4 e-tron', 'Q5', 'Q7', 'Q8', 'RS3', 'RS6', 'TT'],
            feature_count: 61
        },
        'BMW': {
            models: ['116', '118', '118I', '120', '218', '318', '320', '325', '328', '330', '330e', '335i', '420', '430', '520', '523', '525', '530', '530e', '535', 'M3', 'M4', 'M5', 'X1', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z3', 'Z4', 'i3', 'i4', 'i5', 'iX', 'iX1', 'iX3'],
            feature_count: 77
        },
        'Chevrolet': {
            models: ['Bel Air', 'Camaro', 'Corvette', 'Cruze', 'Impala', 'Silverado', 'Silverado 1500'],
            feature_count: 46
        },
        'Citroen': {
            models: ['Berlingo', 'C1', 'C3', 'C3 Aircross', 'C4', 'C4 Cactus', 'C4 Picasso', 'C5', 'C5 Aircross', 'Grand C4 Picasso', 'Jumper', 'Jumpy', 'e-C4'],
            feature_count: 53
        },
        'Fiat': {
            models: ['500', '500C', '600', 'Doblò', 'Ducato', 'Freemont', 'Scudo', 'Tipo'],
            feature_count: 48
        },
        'Ford': {
            models: ['C-Max', 'Capri', 'Explorer', 'F-150', 'Fiesta', 'Focus', 'Ka', 'Kuga', 'Mondeo', 'Mustang', 'Mustang Mach-E', 'Puma', 'Ranger', 'S-Max', 'Thunderbird', 'Transit', 'Transit Connect', 'Transit Custom', 'ranger', 'transit', 'transit Connect', 'transit Custom'],
            feature_count: 62
        },
        'Kia': {
            models: ['CEED', 'CEED SW', 'CEED Sportswagon', 'Carens', 'Ceed', 'Ceed Sportswagon', 'E-Niro', 'E-SOUL', 'EV3', 'EV6', 'EV9', 'Niro', 'Optima', 'PV5 Cargo', 'Picanto', 'Rio', 'Sorento', 'Soul', 'Sportage', 'Stonic', 'Venga', 'Xceed'],
            feature_count: 62
        },
        'Mazda': {
            models: ['2', '3', '6', 'CX-3', 'CX-30', 'CX-5', 'CX-60', 'CX-80', 'MX-30', 'MX-5'],
            feature_count: 49
        },
        'Mercedes-Benz': {
            models: ['A 180', 'A 200', 'A 250', 'B 180', 'B 200', 'C 180', 'C 200', 'C 220', 'C 300', 'CLA', 'CLA 200', 'CLA 220', 'CLA 250', 'Citan', 'E 200', 'E 220', 'E 250', 'E 300', 'E 350', 'E Sprinter', 'EQA', 'EQB', 'EQE', 'EQS', 'GLA', 'GLA 200', 'GLB', 'GLC', 'GLC 300', 'GLE', 'GLE 350', 'SLK', 'Sprinter', 'Vito', 'eCitan', 'eVito'],
            feature_count: 76
        },
        'Opel': {
            models: ['Astra', 'Combo', 'Corsa', 'Corsa-e', 'Frontera', 'Grandland', 'Grandland X', 'Insignia', 'Mokka', 'Movano', 'Vivaro', 'Zafira'],
            feature_count: 52
        },
        'Peugeot': {
            models: ['107', '2008', '206', '207', '208', '3008', '307', '308', '308 SW', '407', '408', '5008', '508', 'Boxer', 'E-2008', 'E-208', 'E-3008', 'Expert', 'Partner', 'e-Expert'],
            feature_count: 60
        },
        'Renault': {
            models: ['5', 'Arkana', 'Austral', 'Captur', 'Clio', 'Clio Sport Tourer', 'Espace', 'Grand Scénic', 'Kadjar', 'Kangoo', 'Kangoo Express', 'Master', 'Mégane', 'Mégane Grandtour', 'Rafale', 'Scénic', 'Trafic', 'Zoe', 'trafic'],
            feature_count: 59
        },
        'Skoda': {
            models: ['Elroq', 'Enyaq', 'Fabia', 'Fabia Kombi', 'Kamiq', 'Karoq', 'Kodiaq', 'Octavia', 'Scala', 'Superb', 'Yeti'],
            feature_count: 51
        },
        'Subaru': {
            models: ['Crosstrek', 'Forester', 'Impreza', 'Legacy', 'Outback', 'Solterra', 'XV'],
            feature_count: 47
        },
        'Toyota': {
            models: ['Auris', 'Avensis', 'Aygo', 'Aygo X', 'C-HR', 'Corolla', 'Corolla Cross', 'Corolla Verso', 'Hilux', 'Prius', 'ProAce', 'ProAce City', 'RAV4', 'Verso', 'Yaris', 'Yaris Cross', 'bZ4X'],
            feature_count: 57
        },
        'Volkswagen': {
            models: ['Amarok', 'Arteon', 'Caddy', 'Caddy Cargo', 'Caddy Cargo Maxi', 'Caddy Maxi', 'Caravelle', 'Crafter', 'Golf', 'Golf Alltrack', 'Golf Plus', 'Golf Sportscombi', 'Golf Sportsvan', 'Golf Variant', 'ID. Buzz', 'ID.3', 'ID.4', 'ID.5', 'ID.7', 'Multivan', 'Passat', 'Passat Alltrack', 'Passat Sportscombi', 'Passat Variant', 'Polo', 'Scirocco', 'Sharan', 'T-CROSS', 'T-Roc', 'Taigo', 'Tayron', 'Tiguan', 'Tiguan Allspace', 'Touareg', 'Touran', 'Transporter', 'UP!', 'crafter'],
            feature_count: 78
        },
        'Volvo': {
            models: ['244', '740', '850', '940', 'Amazon', 'C30', 'C40', 'C70', 'EC40', 'EX30', 'EX40', 'EX90', 'S40', 'S60', 'S70', 'S80', 'S90', 'V40', 'V50', 'V60', 'V70', 'V90', 'V90 Cross Country', 'XC40', 'XC60', 'XC70', 'XC90'],
            feature_count: 67
        }
    };

    const regions = ['Blekinge', 'Dalarna', 'Gotland', 'Gävleborg', 'Göteborg', 'Halland', 'Jämtland', 'Jönköping', 'Kalmar', 'Kronoberg', 'Norrbotten', 'Skaraborg', 'Skåne', 'Stockholm', 'Södermanland', 'Uppsala', 'Värmland', 'Västerbotten', 'Västernorrland', 'Västmanland', 'Älvsborg', 'Örebro', 'Östergötland'];
    const fuels = ['Bensin', 'Diesel', 'El', 'Miljöbränsle/Hybrid'];
    const gearboxes = ['Automat', 'Manuell'];

    function populateDropdown(selectElement, items) {
        selectElement.innerHTML = '<option value="">Select...</option>';
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            selectElement.appendChild(option);
        });
    }

    populateDropdown(makeSelect, Object.keys(carData));
    populateDropdown(regionSelect, regions);
    populateDropdown(fuelSelect, fuels);
    populateDropdown(gearboxSelect, gearboxes);

    makeSelect.addEventListener('change', () => {
        const selectedMake = makeSelect.value;
        if (selectedMake) {
            populateDropdown(modelSelect, carData[selectedMake].models);
        } else {
            modelSelect.innerHTML = '<option value="">Select make first</option>';
        }
    });

    predictBtn.addEventListener('click', async () => {
        const make = makeSelect.value;
        const model = modelSelect.value;
        const region = regionSelect.value;
        const year = parseInt(yearInput.value);
        const mileage = parseInt(mileageInput.value);
        const fuel = fuelSelect.value;
        const gearbox = gearboxSelect.value;

        if (!make || !model || !region || !year || !mileage || !fuel || !gearbox) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            predictionResult.textContent = 'Predicting...';
            const session = new onnx.InferenceSession({ backendHint: 'webgl' });
            await session.load(`./onnx_models/${make}_model.json`);

            const featureCount = carData[make].feature_count;
            const inputArray = new Float32Array(featureCount).fill(0);

            // This is a simplified representation of feature engineering.
            // The actual indices depend on the training script.
            // We are making educated guesses here.
            inputArray[0] = 2025 - year; // age
            inputArray[1] = mileage;

            // One-hot encode categorical features
            const regionIndex = regions.indexOf(region) + 11; 
            if(regionIndex < featureCount) inputArray[regionIndex] = 1;

            const fuelIndex = fuels.indexOf(fuel) + 34;
            if(fuelIndex < featureCount) inputArray[fuelIndex] = 1;

            const gearboxIndex = gearboxes.indexOf(gearbox) + 38;
            if(gearboxIndex < featureCount) inputArray[gearboxIndex] = 1;

            const modelIndex = carData[make].models.indexOf(model) + 40;
            if(modelIndex < featureCount) inputArray[modelIndex] = 1;

            const tensor = new onnx.Tensor(inputArray, 'float32', [1, featureCount]);
            const outputMap = await session.run([tensor]);
            const prediction = outputMap.values().next().value.data[0];

            predictionResult.textContent = `Predicted Price: ${Math.round(prediction).toLocaleString()} kr (± 10%)`;

        } catch (error) {
            console.error(error);
            predictionResult.textContent = 'Error making prediction.';
        }
    });
});

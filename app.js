
document.addEventListener('DOMContentLoaded', async () => {
    let featureMap = {};

    const basePath = window.location.hostname.includes('github.io') ? '/AutoPredict/' : '/';

    try {
        const response = await fetch(`${basePath}onnx_models/feature_map.json`);
        featureMap = await response.json();
    } catch (error) {
        console.error('Failed to load feature map:', error);
        alert('Could not load model feature map. The application may not work correctly.');
    }

    const carData = {
        "Audi": { "r2": 0.860, "mae": 41661.33, "models": ["A1", "A3", "A3 Sportback", "A4", "A5", "A5 Sportback", "A6", "A6 Allroad", "A6 Avant", "A7", "E-Tron", "Q2", "Q3", "Q4", "Q4 e-tron", "Q5", "Q7", "Q8", "RS3", "RS6", "TT"] },
        "BMW": { "r2": 0.917, "mae": 49860.72, "models": ["116", "118", "118I", "120", "218", "318", "320", "325", "328", "330", "330e", "335i", "420", "430", "520", "523", "525", "530", "530e", "535", "M3", "M4", "M5", "X1", "X3", "X4", "X5", "X6", "X7", "Z3", "Z4", "i3", "i4", "i5", "iX", "iX1", "iX3"] },
        "Chevrolet": { "r2": 0.845, "mae": 106260.56, "models": ["Bel Air", "Camaro", "Corvette", "Cruze", "Impala", "Silverado", "Silverado 1500"] },
        "Citroen": { "r2": 0.848, "mae": 22270.64, "models": ["Berlingo", "C1", "C3", "C3 Aircross", "C4", "C4 Cactus", "C4 Picasso", "C5", "C5 Aircross", "Grand C4 Picasso", "Jumper", "Jumpy", "e-C4"] },
        "Fiat": { "r2": 0.868, "mae": 31688.58, "models": ["500", "500C", "600", "Doblò", "Ducato", "Freemont", "Scudo", "Tipo"] },
        "Ford": { "r2": 0.921, "mae": 32363.68, "models": ["C-Max", "Capri", "Explorer", "F-150", "Fiesta", "Focus", "Ka", "Kuga", "Mondeo", "Mustang", "Mustang Mach-E", "Puma", "Ranger", "S-Max", "Thunderbird", "Transit", "Transit Connect", "Transit Custom", "ranger", "transit", "transit Connect", "transit Custom"] },
        "Kia": { "r2": 0.895, "mae": 31970.75, "models": ["CEED", "CEED SW", "CEED Sportswagon", "Carens", "Ceed", "Ceed Sportswagon", "E-Niro", "E-SOUL", "EV3", "EV6", "EV9", "Niro", "Optima", "PV5 Cargo", "Picanto", "Rio", "Sorento", "Soul", "Sportage", "Stonic", "Venga", "Xceed"] },
        "Mazda": { "r2": 0.834, "mae": 36554.15, "models": ["2", "3", "6", "CX-3", "CX-30", "CX-5", "CX-60", "CX-80", "MX-30", "MX-5"] },
        "Mercedes-Benz": { "r2": 0.887, "mae": 48144.88, "models": ["A 180", "A 200", "A 250", "B 180", "B 200", "C 180", "C 200", "C 220", "C 300", "CLA", "CLA 200", "CLA 220", "CLA 250", "Citan", "E 200", "E 220", "E 250", "E 300", "E 350", "E Sprinter", "EQA", "EQB", "EQE", "EQS", "GLA", "GLA 200", "GLB", "GLC", "GLC 300", "GLE", "GLE 350", "SLK", "Sprinter", "Vito", "eCitan", "eVito"] },
        "Opel": { "r2": 0.861, "mae": 27021.90, "models": ["Astra", "Combo", "Corsa", "Corsa-e", "Frontera", "Grandland", "Grandland X", "Insignia", "Mokka", "Movano", "Vivaro", "Zafira"] },
        "Peugeot": { "r2": 0.814, "mae": 27791.96, "models": ["107", "2008", "206", "207", "208", "3008", "307", "308", "308 SW", "407", "408", "5008", "508", "Boxer", "E-2008", "E-208", "E-3008", "Expert", "Partner", "e-Expert"] },
        "Renault": { "r2": 0.909, "mae": 24461.48, "models": ["5", "Arkana", "Austral", "Captur", "Clio", "Clio Sport Tourer", "Espace", "Grand Scénic", "Kadjar", "Kangoo", "Kangoo Express", "Master", "Mégane", "Mégane Grandtour", "Rafale", "Scénic", "Trafic", "Zoe", "trafic"] },
        "Subaru": { "r2": 0.912, "mae": 25327.66, "models": ["Crosstrek", "Forester", "Impreza", "Legacy", "Outback", "Solterra", "XV"] },
        "Toyota": { "r2": 0.926, "mae": 21039.90, "models": ["Auris", "Avensis", "Aygo", "Aygo X", "C-HR", "Corolla", "Corolla Cross", "Corolla Verso", "Hilux", "Prius", "ProAce", "ProAce City", "RAV4", "Verso", "Yaris", "Yaris Cross", "bZ4X"] },
        "Volkswagen": { "r2": 0.859, "mae": 35093.94, "models": ["Amarok", "Arteon", "Caddy", "Caddy Cargo", "Caddy Cargo Maxi", "Caddy Maxi", "Caravelle", "Crafter", "Golf", "Golf Alltrack", "Golf Plus", "Golf Sportscombi", "Golf Sportsvan", "Golf Variant", "ID. Buzz", "ID.3", "ID.4", "ID.5", "ID.7", "Multivan", "Passat", "Passat Alltrack", "Passat Sportscombi", "Passat Variant", "Polo", "Scirocco", "Sharan", "T-CROSS", "T-Roc", "Taigo", "Tayron", "Tiguan", "Tiguan Allspace", "Touareg", "Touran", "Transporter", "UP!", "crafter"] },
        "Volvo": { "r2": 0.939, "mae": 26155.08, "models": ["244", "740", "850", "940", "Amazon", "C30", "C40", "C70", "EC40", "EX30", "EX40", "EX90", "S40", "S60", "S70", "S80", "S90", "V40", "V50", "V60", "V70", "V90", "V90 Cross Country", "XC40", "XC60", "XC70", "XC90"] }
    };

    const makeSelect = document.getElementById('make');
    const modelSelect = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const mileageInput = document.getElementById('mileage');
    const fuelSelect = document.getElementById('fuel');
    const gearboxSelect = document.getElementById('gearbox');
    const sellerTypeSelect = document.getElementById('seller-type');
    const locationSelect = document.getElementById('location');
    const predictBtn = document.getElementById('predict-btn');
    const priceSpan = document.getElementById('price');
    const uncertaintySpan = document.getElementById('uncertainty');
    const predictionContainer = document.querySelector('.prediction-container');
    const mileageUpBtn = document.getElementById('mileage-up');
    const mileageDownBtn = document.getElementById('mileage-down');
    const checkboxes = document.querySelectorAll('.checkbox-group input');

    function formatMileage(value) {
        const numericValue = String(value).replace(/\s/g, '');
        return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    function populateMakes() {
        const makes = Object.keys(carData).filter(make => carData[make].r2 >= 0.8);
        makes.forEach(make => {
            const option = document.createElement('option');
            option.value = make;
            option.textContent = make;
            makeSelect.appendChild(option);
        });
    }

    function populateModels(make) {
        modelSelect.innerHTML = '<option value="">Select Model</option>';
        if (make && carData[make]) {
            carData[make].models.forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                modelSelect.appendChild(option);
            });
        }
    }

    function setDefaultValues() {
        makeSelect.value = 'Volvo';
        populateModels('Volvo');
        modelSelect.value = 'XC60';
        yearInput.value = 2021;
        mileageInput.value = formatMileage(80000);
        fuelSelect.value = 'Diesel';
        gearboxSelect.value = 'Automat';
        sellerTypeSelect.value = 'Privat';
        locationSelect.value = 'Stockholm';
        document.getElementById('has_service_book').checked = true;
        document.getElementById('winter_tires_included').checked = true;
        document.getElementById('has_timing_belt_replaced').checked = true;
    }

    makeSelect.addEventListener('change', () => {
        populateModels(makeSelect.value);
    });

    mileageInput.addEventListener('input', () => {
        const cursorPosition = mileageInput.selectionStart;
        const originalLength = mileageInput.value.length;
        const numericValue = mileageInput.value.replace(/\D/g, '');
        const formattedValue = formatMileage(numericValue);
        mileageInput.value = formattedValue;
        const newLength = mileageInput.value.length;
        mileageInput.setSelectionRange(cursorPosition + (newLength - originalLength), cursorPosition + (newLength - originalLength));
    });

    mileageUpBtn.addEventListener('click', () => {
        const currentValue = parseInt(mileageInput.value.replace(/\s/g, '') || 0);
        mileageInput.value = formatMileage(currentValue + 10000);
    });

    mileageDownBtn.addEventListener('click', () => {
        const currentValue = parseInt(mileageInput.value.replace(/\s/g, '') || 0);
        mileageInput.value = formatMileage(Math.max(0, currentValue - 10000));
    });

    predictBtn.addEventListener('click', async () => {
        const make = makeSelect.value;
        const model = modelSelect.value;
        const year = parseInt(yearInput.value);
        const mileage = parseInt(mileageInput.value.replace(/\s/g, ''));
        const fuel = fuelSelect.value;
        const gearbox = gearboxSelect.value;
        const sellerType = sellerTypeSelect.value;
        const location = locationSelect.value;

        if (!make || !model || !year || isNaN(mileage)) {
            alert('Please fill in all fields correctly.');
            return;
        }

        predictionContainer.classList.add('loading');
        priceSpan.textContent = '';
        uncertaintySpan.textContent = 'Predicting...';

        try {
            const session = await ort.InferenceSession.create(`${basePath}onnx/${make}_model.onnx`);

            const features = featureMap[make];
            const input = new Float32Array(features.length).fill(0);

            const checkboxValues = {};
            checkboxes.forEach(cb => {
                checkboxValues[cb.id] = cb.checked ? 1 : 0;
            });

            features.forEach((feature, i) => {
                if (feature === 'age') {
                    input[i] = new Date().getFullYear() - year;
                } else if (feature === 'mileage') {
                    input[i] = mileage;
                } else if (feature.startsWith('fuel_')) {
                    if (feature === `fuel_${fuel}`) input[i] = 1;
                } else if (feature.startsWith('gearbox_')) {
                    if (feature === `gearbox_${gearbox}`) input[i] = 1;
                } else if (feature.startsWith('seller_type_')) {
                    if (feature === `seller_type_${sellerType}`) input[i] = 1;
                } else if (feature.startsWith('location_region_')) {
                    if (feature === `location_region_${location}`) input[i] = 1;
                } else if (feature.startsWith('model_')) {
                    if (feature === `model_${model}`) input[i] = 1;
                } else if (checkboxValues.hasOwnProperty(feature)) {
                    input[i] = checkboxValues[feature];
                }
            });

            const tensor = new ort.Tensor('float32', input, [1, features.length]);
            const feeds = {};
            feeds[session.inputNames[0]] = tensor;
            
            const outputMap = await session.run(feeds);
            const price = outputMap[session.outputNames[0]].data[0];

            priceSpan.textContent = `${Math.round(price).toLocaleString('sv-SE')} kr`;
            uncertaintySpan.textContent = `(± ${Math.round(carData[make].mae).toLocaleString('sv-SE')} kr)`;

        } catch (error) {
            console.error(error);
            priceSpan.textContent = 'Error';
            uncertaintySpan.textContent = 'Could not make a prediction.';
        } finally {
            predictionContainer.classList.remove('loading');
        }
    });

    populateMakes();
    setDefaultValues();

    const infoSection = document.querySelector('.info-section');
    const contactSection = document.querySelector('.contact-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(infoSection);
    observer.observe(contactSection);
});

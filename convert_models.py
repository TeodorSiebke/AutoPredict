import os
import joblib
import xgboost
import json

# Define the models to convert based on R² score > 0.8
models_to_convert = {
    'Audi': 61, 'BMW': 77, 'Chevrolet': 46, 'Citroen': 53, 'Fiat': 48,
    'Ford': 62, 'Kia': 62, 'Mazda': 49, 'Mercedes-Benz': 76, 'Opel': 52,
    'Peugeot': 60, 'Renault': 59, 'Skoda': 51, 'Subaru': 47, 'Toyota': 57,
    'Volkswagen': 78, 'Volvo': 67
}

input_dir = 'models'
output_dir = 'onnx_models'
os.makedirs(output_dir, exist_ok=True)

print("Starting model conversion...")

for make, feature_count in models_to_convert.items():
    input_path = os.path.join(input_dir, f'{make}_model.joblib')
    output_path = os.path.join(output_dir, f'{make}_model.json')

    if not os.path.exists(input_path):
        print(f"Warning: Model for {make} not found at {input_path}. Skipping.")
        continue

    try:
        model = joblib.load(input_path)
        model.get_booster().save_model(output_path)
        print(f"Successfully converted {make} model to {output_path}")
    except Exception as e:
        print(f"Error converting model for {make}: {e}")

print("\nConversion process finished.")
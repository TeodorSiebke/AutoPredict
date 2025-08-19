# Gradient Boosting ONNX Model Training Report

**Report Generated:** 2025-08-19 01:26:49

This report summarizes the performance and input features for each trained model, saved in both .joblib and .onnx formats.

## Model: `Audi`

*   **Joblib Model:** `Audi_model.joblib`
*   **ONNX Model:** `Audi_model.onnx`
*   **Training Data:** `4756` samples
*   **Test Data:** `1190` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 39,130.46 kr | 41,661.33 kr |
| **RMSE** | - | 90,018.75 kr |
| **R² Score** | - | 0.860 |

<details>
<summary>Click to view the 61 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_A1
- model_A3
- model_A3 Sportback
- model_A4
- model_A5
- model_A5 Sportback
- model_A6
- model_A6 Allroad
- model_A6 Avant
- model_A7
- model_E-Tron
- model_Q2
- model_Q3
- model_Q4
- model_Q4 e-tron
- model_Q5
- model_Q7
- model_Q8
- model_RS3
- model_RS6
- model_TT
```

</details>

---

## Model: `BMW`

*   **Joblib Model:** `BMW_model.joblib`
*   **ONNX Model:** `BMW_model.onnx`
*   **Training Data:** `6920` samples
*   **Test Data:** `1731` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 49,944.25 kr | 49,860.72 kr |
| **RMSE** | - | 88,867.64 kr |
| **R² Score** | - | 0.917 |

<details>
<summary>Click to view the 77 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_116
- model_118
- model_118I
- model_120
- model_218
- model_318
- model_320
- model_325
- model_328
- model_330
- model_330e
- model_335i
- model_420
- model_430
- model_520
- model_523
- model_525
- model_530
- model_530e
- model_535
- model_M3
- model_M4
- model_M5
- model_X1
- model_X3
- model_X4
- model_X5
- model_X6
- model_X7
- model_Z3
- model_Z4
- model_i3
- model_i4
- model_i5
- model_iX
- model_iX1
- model_iX3
```

</details>

---

## Model: `Chevrolet`

*   **Joblib Model:** `Chevrolet_model.joblib`
*   **ONNX Model:** `Chevrolet_model.onnx`
*   **Training Data:** `603` samples
*   **Test Data:** `151` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 126,165.31 kr | 106,260.56 kr |
| **RMSE** | - | 196,151.97 kr |
| **R² Score** | - | 0.845 |

<details>
<summary>Click to view the 46 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_Bel Air
- model_Camaro
- model_Corvette
- model_Cruze
- model_Impala
- model_Silverado
- model_Silverado 1500
```

</details>

---

## Model: `Citroen`

*   **Joblib Model:** `Citroen_model.joblib`
*   **ONNX Model:** `Citroen_model.onnx`
*   **Training Data:** `1622` samples
*   **Test Data:** `406` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 22,030.02 kr | 22,270.64 kr |
| **RMSE** | - | 44,836.88 kr |
| **R² Score** | - | 0.848 |

<details>
<summary>Click to view the 53 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_Berlingo
- model_C1
- model_C3
- model_C3 Aircross
- model_C4
- model_C4 Cactus
- model_C4 Picasso
- model_C5
- model_C5 Aircross
- model_Grand C4 Picasso
- model_Jumper
- model_Jumpy
- model_e-C4
```

</details>

---

## Model: `Dacia`

*   **Joblib Model:** `Dacia_model.joblib`
*   **ONNX Model:** `Dacia_model.onnx`
*   **Training Data:** `663` samples
*   **Test Data:** `166` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 34,334.19 kr | 29,016.20 kr |
| **RMSE** | - | 51,778.20 kr |
| **R² Score** | - | 0.704 |

<details>
<summary>Click to view the 42 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_Duster
- model_Jogger
- model_Sandero
- model_Sandero Stepway
```

</details>

---

## Model: `Fiat`

*   **Joblib Model:** `Fiat_model.joblib`
*   **ONNX Model:** `Fiat_model.onnx`
*   **Training Data:** `489` samples
*   **Test Data:** `123` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 26,052.98 kr | 31,688.58 kr |
| **RMSE** | - | 58,406.71 kr |
| **R² Score** | - | 0.868 |

<details>
<summary>Click to view the 48 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_500
- model_500C
- model_600
- model_Doblò
- model_Ducato
- model_Freemont
- model_Scudo
- model_Tipo
```

</details>

---

## Model: `Ford`

*   **Joblib Model:** `Ford_model.joblib`
*   **ONNX Model:** `Ford_model.onnx`
*   **Training Data:** `4531` samples
*   **Test Data:** `1133` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 33,947.14 kr | 32,363.68 kr |
| **RMSE** | - | 56,628.64 kr |
| **R² Score** | - | 0.921 |

<details>
<summary>Click to view the 62 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_C-Max
- model_Capri
- model_Explorer
- model_F-150
- model_Fiesta
- model_Focus
- model_Ka
- model_Kuga
- model_Mondeo
- model_Mustang
- model_Mustang Mach-E
- model_Puma
- model_Ranger
- model_S-Max
- model_Thunderbird
- model_Transit
- model_Transit Connect
- model_Transit Custom
- model_ranger
- model_transit
- model_transit Connect
- model_transit Custom
```

</details>

---

## Model: `Honda`

*   **Joblib Model:** `Honda_model.joblib`
*   **ONNX Model:** `Honda_model.onnx`
*   **Training Data:** `580` samples
*   **Test Data:** `146` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 29,484.83 kr | 31,455.49 kr |
| **RMSE** | - | 64,580.86 kr |
| **R² Score** | - | 0.741 |

<details>
<summary>Click to view the 42 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_CR-V
- model_Civic
- model_HR-V
- model_Jazz
```

</details>

---

## Model: `Hyundai`

*   **Joblib Model:** `Hyundai_model.joblib`
*   **ONNX Model:** `Hyundai_model.onnx`
*   **Training Data:** `1704` samples
*   **Test Data:** `427` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 34,853.11 kr | 36,159.62 kr |
| **RMSE** | - | 83,902.91 kr |
| **R² Score** | - | 0.721 |

<details>
<summary>Click to view the 51 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_Bayon
- model_IONIQ
- model_IONIQ 5
- model_Kona
- model_Santa Fe
- model_Tucson
- model_i10
- model_i20
- model_i30
- model_i40
- model_ix20
- model_ix35
```

</details>

---

## Model: `Kia`

*   **Joblib Model:** `Kia_model.joblib`
*   **ONNX Model:** `Kia_model.onnx`
*   **Training Data:** `5210` samples
*   **Test Data:** `1303` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 33,884.36 kr | 31,970.75 kr |
| **RMSE** | - | 62,678.39 kr |
| **R² Score** | - | 0.895 |

<details>
<summary>Click to view the 62 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_CEED
- model_CEED SW
- model_CEED Sportswagon
- model_Carens
- model_Ceed
- model_Ceed Sportswagon
- model_E-Niro
- model_E-SOUL
- model_EV3
- model_EV6
- model_EV9
- model_Niro
- model_Optima
- model_PV5 Cargo
- model_Picanto
- model_Rio
- model_Sorento
- model_Soul
- model_Sportage
- model_Stonic
- model_Venga
- model_Xceed
```

</details>

---

## Model: `MG`

*   **Joblib Model:** `MG_model.joblib`
*   **ONNX Model:** `MG_model.onnx`
*   **Training Data:** `789` samples
*   **Test Data:** `198` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 16,642.49 kr | 15,622.93 kr |
| **RMSE** | - | 34,675.74 kr |
| **R² Score** | - | 0.766 |

<details>
<summary>Click to view the 44 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Göteborg
- location_region_Halland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_3
- model_4
- model_5
- model_EHS
- model_HS
- model_Marvel R
- model_ZS
- model_ZS EV
```

</details>

---

## Model: `Mazda`

*   **Joblib Model:** `Mazda_model.joblib`
*   **ONNX Model:** `Mazda_model.onnx`
*   **Training Data:** `1175` samples
*   **Test Data:** `294` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 35,536.96 kr | 36,554.15 kr |
| **RMSE** | - | 82,340.26 kr |
| **R² Score** | - | 0.834 |

<details>
<summary>Click to view the 49 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_2
- model_3
- model_6
- model_CX-3
- model_CX-30
- model_CX-5
- model_CX-60
- model_CX-80
- model_MX-30
- model_MX-5
```

</details>

---

## Model: `Mercedes-Benz`

*   **Joblib Model:** `Mercedes-Benz_model.joblib`
*   **ONNX Model:** `Mercedes-Benz_model.onnx`
*   **Training Data:** `4899` samples
*   **Test Data:** `1225` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 48,849.52 kr | 48,144.88 kr |
| **RMSE** | - | 88,309.41 kr |
| **R² Score** | - | 0.887 |

<details>
<summary>Click to view the 76 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_A 180
- model_A 200
- model_A 250
- model_B 180
- model_B 200
- model_C 180
- model_C 200
- model_C 220
- model_C 300
- model_CLA
- model_CLA 200
- model_CLA 220
- model_CLA 250
- model_Citan
- model_E 200
- model_E 220
- model_E 250
- model_E 300
- model_E 350
- model_E Sprinter
- model_EQA
- model_EQB
- model_EQE
- model_EQS
- model_GLA
- model_GLA 200
- model_GLB
- model_GLC
- model_GLC 300
- model_GLE
- model_GLE 350
- model_SLK
- model_Sprinter
- model_Vito
- model_eCitan
- model_eVito
```

</details>

---

## Model: `Nissan`

*   **Joblib Model:** `Nissan_model.joblib`
*   **ONNX Model:** `Nissan_model.onnx`
*   **Training Data:** `1840` samples
*   **Test Data:** `461` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 31,129.91 kr | 34,146.28 kr |
| **RMSE** | - | 70,749.48 kr |
| **R² Score** | - | 0.708 |

<details>
<summary>Click to view the 52 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_Ariya
- model_Juke
- model_Leaf
- model_Micra
- model_Navara
- model_Note
- model_Primastar
- model_Pulsar
- model_Qashqai
- model_Qashqai+2
- model_Townstar
- model_X-Trail
```

</details>

---

## Model: `Opel`

*   **Joblib Model:** `Opel_model.joblib`
*   **ONNX Model:** `Opel_model.onnx`
*   **Training Data:** `1637` samples
*   **Test Data:** `410` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 29,320.24 kr | 27,021.90 kr |
| **RMSE** | - | 50,966.97 kr |
| **R² Score** | - | 0.861 |

<details>
<summary>Click to view the 52 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_Astra
- model_Combo
- model_Corsa
- model_Corsa-e
- model_Frontera
- model_Grandland
- model_Grandland X
- model_Insignia
- model_Mokka
- model_Movano
- model_Vivaro
- model_Zafira
```

</details>

---

## Model: `Peugeot`

*   **Joblib Model:** `Peugeot_model.joblib`
*   **ONNX Model:** `Peugeot_model.onnx`
*   **Training Data:** `3514` samples
*   **Test Data:** `879` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 28,894.67 kr | 27,791.96 kr |
| **RMSE** | - | 55,957.30 kr |
| **R² Score** | - | 0.814 |

<details>
<summary>Click to view the 60 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_107
- model_2008
- model_206
- model_207
- model_208
- model_3008
- model_307
- model_308
- model_308 SW
- model_407
- model_408
- model_5008
- model_508
- model_Boxer
- model_E-2008
- model_E-208
- model_E-3008
- model_Expert
- model_Partner
- model_e-Expert
```

</details>

---

## Model: `Porsche`

*   **Joblib Model:** `Porsche_model.joblib`
*   **ONNX Model:** `Porsche_model.onnx`
*   **Training Data:** `1116` samples
*   **Test Data:** `280` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 187,499.19 kr | 181,443.45 kr |
| **RMSE** | - | 351,512.58 kr |
| **R² Score** | - | 0.675 |

<details>
<summary>Click to view the 46 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_911
- model_Boxster
- model_Cayenne
- model_Macan
- model_Panamera
- model_Taycan
```

</details>

---

## Model: `Renault`

*   **Joblib Model:** `Renault_model.joblib`
*   **ONNX Model:** `Renault_model.onnx`
*   **Training Data:** `3204` samples
*   **Test Data:** `802` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 24,849.87 kr | 24,461.48 kr |
| **RMSE** | - | 50,896.15 kr |
| **R² Score** | - | 0.909 |

<details>
<summary>Click to view the 59 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_5
- model_Arkana
- model_Austral
- model_Captur
- model_Clio
- model_Clio Sport Tourer
- model_Espace
- model_Grand Scénic
- model_Kadjar
- model_Kangoo
- model_Kangoo Express
- model_Master
- model_Mégane
- model_Mégane Grandtour
- model_Rafale
- model_Scénic
- model_Trafic
- model_Zoe
- model_trafic
```

</details>

---

## Model: `SAAB`

*   **Joblib Model:** `SAAB_model.joblib`
*   **ONNX Model:** `SAAB_model.onnx`
*   **Training Data:** `730` samples
*   **Test Data:** `183` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 18,239.33 kr | 22,277.10 kr |
| **RMSE** | - | 36,897.56 kr |
| **R² Score** | - | 0.402 |

<details>
<summary>Click to view the 42 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_9-3
- model_9-5
- model_900
```

</details>

---

## Model: `Seat`

*   **Joblib Model:** `Seat_model.joblib`
*   **ONNX Model:** `Seat_model.onnx`
*   **Training Data:** `804` samples
*   **Test Data:** `201` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 21,719.51 kr | 24,911.78 kr |
| **RMSE** | - | 51,686.51 kr |
| **R² Score** | - | 0.546 |

<details>
<summary>Click to view the 45 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_Alhambra
- model_Arona
- model_Ateca
- model_Ibiza
- model_Leon
- model_Leon ST
```

</details>

---

## Model: `Skoda`

*   **Joblib Model:** `Skoda_model.joblib`
*   **ONNX Model:** `Skoda_model.onnx`
*   **Training Data:** `2249` samples
*   **Test Data:** `563` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 31,192.55 kr | 30,307.96 kr |
| **RMSE** | - | 65,748.07 kr |
| **R² Score** | - | 0.788 |

<details>
<summary>Click to view the 51 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_Elroq
- model_Enyaq
- model_Fabia
- model_Fabia Kombi
- model_Kamiq
- model_Karoq
- model_Kodiaq
- model_Octavia
- model_Scala
- model_Superb
- model_Yeti
```

</details>

---

## Model: `Subaru`

*   **Joblib Model:** `Subaru_model.joblib`
*   **ONNX Model:** `Subaru_model.onnx`
*   **Training Data:** `954` samples
*   **Test Data:** `239` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 26,940.44 kr | 25,327.66 kr |
| **RMSE** | - | 49,425.87 kr |
| **R² Score** | - | 0.912 |

<details>
<summary>Click to view the 47 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_Crosstrek
- model_Forester
- model_Impreza
- model_Legacy
- model_Outback
- model_Solterra
- model_XV
```

</details>

---

## Model: `Toyota`

*   **Joblib Model:** `Toyota_model.joblib`
*   **ONNX Model:** `Toyota_model.onnx`
*   **Training Data:** `3679` samples
*   **Test Data:** `920` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 21,997.59 kr | 21,039.90 kr |
| **RMSE** | - | 39,254.27 kr |
| **R² Score** | - | 0.926 |

<details>
<summary>Click to view the 57 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_Auris
- model_Avensis
- model_Aygo
- model_Aygo X
- model_C-HR
- model_Corolla
- model_Corolla Cross
- model_Corolla Verso
- model_Hilux
- model_Prius
- model_ProAce
- model_ProAce City
- model_RAV4
- model_Verso
- model_Yaris
- model_Yaris Cross
- model_bZ4X
```

</details>

---

## Model: `Volkswagen`

*   **Joblib Model:** `Volkswagen_model.joblib`
*   **ONNX Model:** `Volkswagen_model.onnx`
*   **Training Data:** `10852` samples
*   **Test Data:** `2714` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 35,897.69 kr | 35,093.94 kr |
| **RMSE** | - | 68,381.10 kr |
| **R² Score** | - | 0.859 |

<details>
<summary>Click to view the 78 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_Amarok
- model_Arteon
- model_Caddy
- model_Caddy Cargo
- model_Caddy Cargo Maxi
- model_Caddy Maxi
- model_Caravelle
- model_Crafter
- model_Golf
- model_Golf Alltrack
- model_Golf Plus
- model_Golf Sportscombi
- model_Golf Sportsvan
- model_Golf Variant
- model_ID. Buzz
- model_ID.3
- model_ID.4
- model_ID.5
- model_ID.7
- model_Multivan
- model_Passat
- model_Passat Alltrack
- model_Passat Sportscombi
- model_Passat Variant
- model_Polo
- model_Scirocco
- model_Sharan
- model_T-CROSS
- model_T-Roc
- model_Taigo
- model_Tayron
- model_Tiguan
- model_Tiguan Allspace
- model_Touareg
- model_Touran
- model_Transporter
- model_UP!
- model_crafter
```

</details>

---

## Model: `Volvo`

*   **Joblib Model:** `Volvo_model.joblib`
*   **ONNX Model:** `Volvo_model.onnx`
*   **Training Data:** `11660` samples
*   **Test Data:** `2916` samples

| Metric | Cross-Validation | Test Set |
|:---|:---|:---|| **MAE** | 25,931.25 kr | 26,155.08 kr |
| **RMSE** | - | 50,133.44 kr |
| **R² Score** | - | 0.939 |

<details>
<summary>Click to view the 67 input features for this model</summary>

```
- deal_id
- age
- mileage
- has_service_book
- is_newly_serviced
- has_timing_belt_replaced
- has_brakes_replaced
- has_authorized_service
- winter_tires_included
- seller_type_Företag
- seller_type_Privat
- location_region_Blekinge
- location_region_Dalarna
- location_region_Gotland
- location_region_Gävleborg
- location_region_Göteborg
- location_region_Halland
- location_region_Jämtland
- location_region_Jönköping
- location_region_Kalmar
- location_region_Kronoberg
- location_region_Norrbotten
- location_region_Skaraborg
- location_region_Skåne
- location_region_Stockholm
- location_region_Södermanland
- location_region_Uppsala
- location_region_Värmland
- location_region_Västerbotten
- location_region_Västernorrland
- location_region_Västmanland
- location_region_Älvsborg
- location_region_Örebro
- location_region_Östergötland
- fuel_Bensin
- fuel_Diesel
- fuel_El
- fuel_Miljöbränsle/Hybrid
- gearbox_Automat
- gearbox_Manuell
- model_244
- model_740
- model_850
- model_940
- model_Amazon
- model_C30
- model_C40
- model_C70
- model_EC40
- model_EX30
- model_EX40
- model_EX90
- model_S40
- model_S60
- model_S70
- model_S80
- model_S90
- model_V40
- model_V50
- model_V60
- model_V70
- model_V90
- model_V90 Cross Country
- model_XC40
- model_XC60
- model_XC70
- model_XC90
```

</details>

---


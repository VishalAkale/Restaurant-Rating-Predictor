# 🍽️ Restaurant Rating Predictor

A Machine Learning web application that predicts **restaurant ratings** based on **City** and **Cuisine Type**. The project uses **Flask**, **ML models**, **HTML/CSS/JS**, and a dataset of restaurants to provide an interactive prediction system.

---

## 🚀 Features

* 🔮 **Predict restaurant ratings** based on city & cuisine
* 🧠 **Trained Machine Learning Model** (RandomForestRegressor)
* 🌐 **Flask Web App** with clean UI
* 🎨 **Sky‑blue & cyan themed UI** (based on user preference)
* 🔍 **Auto‑suggestion feature** for cuisine input
* 🗂️ **Dataset‑driven predictions** using Dataset.csv
* 📦 **Complete project structure** with model, templates, and static files

---

## 📁 Project Structure

```
Task_1/
│── app.py
│── model.pkl
│── requirements.txt
│── Dataset.csv
│── README.md
│
├── templates/
│   ├── index.html
│   ├── result.html
│
└── static/
    ├── style.css
    └── script.js
```

---

## 🧠 Model Information

* Model Used: **RandomForestRegressor**
* Accuracy (based on provided test cases): **~3.66 average predicted rating**
* Model is trained on the dataset with **City** & **Cuisine Type** as inputs.

---

## ▶️ How to Run Locally

1. Clone the repository:

```
git clone https://github.com/VishalAkale/Restaurant-Rating-Predictor.git
```

2. Navigate to the project folder:

```
cd Restaurant-Rating-Predictor
```

3. Install dependencies:

```
pip install -r requirements.txt
```

4. Run the Flask app:

```
python app.py
```

5. Open in browser:

```
http://127.0.0.1:5000/
```

---

## 📝 Usage

1. Enter a **City name**
2. Enter a **Cuisine type** (auto suggestions available)
3. Click **Predict Rating**
4. Get an estimated restaurant rating

---

## 📊 Dataset

The dataset contains:

* 🔹 All available **Cities**
* 🔹 All available **Cuisine Types**
* 🔹 Ratings and additional attributes

This data is used to train and evaluate the ML model.

---

## 🌟 Technologies Used

* **Python**
* **Flask**
* **Pandas / NumPy**
* **scikit-learn**
* **HTML / CSS / JavaScript**
* **Git & GitHub**

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request.

---

## 📬 Contact

**Developer:** Vishal Akale

* 📧 Email: [akalevishal02@gmail.com](mailto:akalevishal02@gmail.com)

---

### ⭐ If you like this project, consider giving it a star on GitHub!

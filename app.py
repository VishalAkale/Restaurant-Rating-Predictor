from flask import Flask, request, render_template
import pandas as pd
import numpy as np

app = Flask(__name__)

# Load dataset
df = pd.read_csv("dataset.csv")

# Normalize column names
df.columns = [c.strip().lower().replace(" ", "").replace("_", "") for c in df.columns]

# Auto-detect dataset columns
def find_col(possible):
    for col in df.columns:
        clean = col.lower().replace(" ", "").replace("_", "")
        for p in possible:
            if p in clean:
                return col
    return None

col_cuisine = find_col(["cuisine", "cuisines", "food"])
col_city = find_col(["city", "location"])
col_price = find_col(["price", "pricerange"])
col_votes = find_col(["vote", "votes"])
col_online = find_col(["online", "delivery", "onlinedelivery"])
col_rating = find_col(["rating", "rate", "score"])

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    cuisine = request.form.get("cuisine").strip()
    city = request.form.get("city").strip()
    price_range = request.form.get("price")
    votes = request.form.get("votes")
    online = request.form.get("online")

    # ---------------------------
    # SERVER-SIDE VALIDATION: CITY
    # ---------------------------
    if any(char.isdigit() for char in city):
        error_message = "City name cannot contain numbers."
        return render_template("index.html", error=error_message,
                               cuisine=cuisine, city=city,
                               price=price_range, votes=votes, online=online)

    # Convert values
    price_range = int(price_range) if price_range else 0
    votes = int(votes) if votes else 0
    online_value = 1 if online.strip().lower() == "yes" else 0

    # Filter dataset
    filtered = df[
        (df[col_cuisine].str.lower() == cuisine.lower()) &
        (df[col_city].str.lower() == city.lower())
    ]

    if filtered.empty:
        filtered = df[df[col_cuisine].str.lower() == cuisine.lower()]

    if filtered.empty:
        predicted = round(df[col_rating].astype(float).mean(), 2)
    else:
        predicted = round(filtered[col_rating].astype(float).mean(), 2)

    return render_template("result.html", rating=predicted)

if __name__ == "__main__":
    app.run(debug=True)

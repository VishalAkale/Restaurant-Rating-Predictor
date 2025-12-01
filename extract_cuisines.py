from flask import Flask, request, jsonify, render_template
import pandas as pd

app = Flask(__name__)

# Load dataset
df = pd.read_csv("dataset.csv")

# Normalize columns
normalized_columns = {col: col.strip().lower().replace(" ", "").replace("_", "") for col in df.columns}
df.columns = normalized_columns.values()

# Auto-detect columns
def find_col(possible_names):
    for col in df.columns:
        clean = col.lower().replace(" ", "").replace("_", "")
        for name in possible_names:
            if name in clean:
                return col
    return None

col_cuisine = find_col(["cuisine", "cuisines"])
col_city = find_col(["city", "location"])
col_price_range = find_col(["price", "pricerange"])
col_votes = find_col(["vote", "votes"])
col_online = find_col(["online", "delivery", "onlinedelivery"])
col_rating = find_col(["rating", "rate", "score"])

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    # -----------------------------------------
    # FIX 1: MATCH EXACT HTML INPUT NAMES
    # -----------------------------------------
    cuisine = request.form.get("cuisine")
    city = request.form.get("city")
    price_range = request.form.get("price")     # HTML name="price"
    votes = request.form.get("votes")           # HTML name="votes"
    online = request.form.get("online")         # HTML name="online"

    # Safety conversion
    price_range = int(price_range) if price_range else 0
    votes = int(votes) if votes else 0
    online_value = 1 if (online and online.lower() == "yes") else 0

    # -----------------------------------------
    # PREDICTION LOGIC
    # -----------------------------------------
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

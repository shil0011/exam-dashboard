from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Backend is running!"})

@app.route("/api/exam/1", methods=["GET"])
def get_exam_data():
    # Mock data
    data = [
        {"group": "IT", "v1": 100, "v2": 95},
        {"group": "CSE", "v1": 120, "v2": 110},
        {"group": "ECE", "v1": 90, "v2": 85}
    ]
    return jsonify(data)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False)
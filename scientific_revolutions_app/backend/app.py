from flask import Flask, request, jsonify
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Arnab@1234",
    database="mydb"
)
cursor = db.cursor(dictionary=True)



def get_cursor():
    global db, cursor
    try:
        db.ping(reconnect=True, attempts=3, delay=2)
    except mysql.connector.Error:
        db = mysql.connector.connect(
            host="localhost",
            user="root",
            password="Arnab@1234",
            database="mydb"
        )
    cursor = db.cursor(dictionary=True)
    return cursor



@app.route("/add-card", methods=["POST"])
def add_card():
    try:
        data = request.get_json()
        title       = data.get("title")
        category    = data.get("category")
        description = data.get("description")
        image_url   = data.get("image_url")
        year        = data.get("year")

        if not title or not category:
            return jsonify({"error": "Missing required fields"}), 400

        cur = get_cursor()
        query = "INSERT INTO cards (title, category, description, image_url, year) VALUES (%s, %s, %s, %s, %s)"
        cur.execute(query, (title, category, description, image_url, int(year) if year else None))
        db.commit()
        return jsonify({"message": "Card inserted successfully", "id": cur.lastrowid}), 200

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500



@app.route("/get-cards", methods=["GET"])
def get_cards():
    try:
        cur = get_cursor()
        cur.execute("SELECT * FROM cards ORDER BY id DESC")
        cards = cur.fetchall()
        return jsonify(cards), 200

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500



@app.route("/get-card/<int:card_id>", methods=["GET"])
def get_card(card_id):
    try:
        cur = get_cursor()
        cur.execute("SELECT * FROM cards WHERE id = %s", (card_id,))
        card = cur.fetchone()
        if not card:
            return jsonify({"error": "Card not found"}), 404
        return jsonify(card), 200

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500



@app.route("/update-card/<int:card_id>", methods=["PUT"])
def update_card(card_id):
    try:
        data = request.get_json()
        title       = data.get("title")
        category    = data.get("category")
        description = data.get("description")
        image_url   = data.get("image_url")
        year        = data.get("year")

        if not title or not category:
            return jsonify({"error": "Missing required fields"}), 400

        cur = get_cursor()

        # Check card exists
        cur.execute("SELECT id FROM cards WHERE id = %s", (card_id,))
        if not cur.fetchone():
            return jsonify({"error": "Card not found"}), 404

        query = """
            UPDATE cards
            SET title=%s, category=%s, description=%s, image_url=%s, year=%s
            WHERE id=%s
        """
        cur.execute(query, (title, category, description, image_url, int(year) if year else None, card_id))
        db.commit()
        return jsonify({"message": "Card updated successfully"}), 200

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500



@app.route("/delete-card/<int:card_id>", methods=["DELETE"])
def delete_card(card_id):
    try:
        cur = get_cursor()

        # Check card exists
        cur.execute("SELECT id FROM cards WHERE id = %s", (card_id,))
        if not cur.fetchone():
            return jsonify({"error": "Card not found"}), 404

        cur.execute("DELETE FROM cards WHERE id = %s", (card_id,))
        db.commit()
        return jsonify({"message": "Card deleted successfully"}), 200

    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
import csv
from flask import Flask, render_template, jsonify


app = Flask("__name__")


with open("data.csv") as file:
    read = csv.DictReader(file)

    # create a list of data fetched from data.csv
    data = [item for item in read]


@app.route("/json")
def index():
    return jsonify(data)


@app.route("/")
def home():
    return render_template("home.html", data = data)


@app.route("/details/<int:id>")
def details(id):
    team_member = {}

    for item in data:
        if data.index(item) + 1 == id:
            team_member = item
            
    return render_template("about.html", team_member = team_member, id = id)

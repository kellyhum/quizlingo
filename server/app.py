from flask import Flask, jsonify
from dotenv import load_dotenv
import firebase_admin
from firebase_admin import credentials, db
import os
from flask_cors import CORS

load_dotenv()

firebase_creds = os.getenv('VITE_FIREBASE_CREDS')
firebase_url = os.getenv('VITE_FIREBASE_URL')

# connect to firebase
cred_obj = credentials.Certificate(firebase_creds)
default_app = firebase_admin.initialize_app(cred_obj, {
    'databaseURL': firebase_url
})

# create test objects
testQuizzes = [
    {
        "title": "TEST TEST 1 title",
        "date": "jan 5, 2025",
        "gameCode": "test1",
        "questions": [
            "sample question here"
        ],
    },
     {
        "title": "TEST TEST 2 title",
        "date": "jan 2, 2025",
        "gameCode": "test2",
        "questions": [],
    },
     {
        "title": "TEST TEST 3 title",
        "date": "jan 1, 2025",
        "gameCode": "test3",
        "questions": [],
    },
]

# initialize flask app
app = Flask(__name__)
CORS(app)

@app.route('/')
def main():
    return 'testing'

@app.route('/quizzes') # was ran once to get test quizzes into the database
def setupTestQuizzes():
    ref = db.reference('/quizzes')

    for quiz in testQuizzes:
        ref.push().set(quiz) # create unique id (push) and append the quiz data (set(quiz))

    return 'quizzes added to firebase'

@app.route('/dashboardData')
def pullQuizzesFromDB():
    ref = db.reference('/quizzes')

    try:
        data = ref.get()
        return jsonify(data)
    
    except:
        return 'data could not be fetched'

if __name__ == '__main__':
    app.run(debug=True)
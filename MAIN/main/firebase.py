# firebase.py

import firebase_admin
from firebase_admin import credentials, db

# Initialize Firebase
firebase_cred = credentials.Certificate('main\\firebase\\django-a564f-firebase-adminsdk-1nd8l-75d68f8c88.json')
firebase_admin.initialize_app(firebase_cred, {
    'databaseURL': 'https://django-a564f-default-rtdb.firebaseio.com'
})

# Get a reference to the Realtime Database service
firebase_db = db.reference()

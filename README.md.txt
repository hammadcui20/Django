**README.md**

## Academic Paper Recommendation System

This is a Django-based web application that provides academic paper recommendations based on user input. The system uses TF-IDF (Term Frequency-Inverse Document Frequency) scoring to analyze the user's input and then searches Google Scholar for relevant papers. The retrieved papers are then displayed to the user.

### Installation

1. Install the required dependencies using pip:

pip install django
pip install beautifulsoup4
pip install pandas
pip install scikit-learn
pip install requests
pip install fake-useragent
```
2.Install Firebase admin sdk for python

pip install firebase-admin

### Running the Application

1. Navigate to the project directory in your terminal the Main directory.

2. Run the Django server:

```
python manage.py runserver
```

3. Access the application in your web browser at `http://127.0.0.1:8000/`.

### Firebase Integration

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).

2. Follow the instructions to add Firebase to your web app and obtain the Firebase configuration credentials (API key, auth domain, etc.).

3. Initialize Firebase in your Django project. You can include the Firebase JavaScript SDK in your HTML templates:

```html
<script src="https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js"></script>
<!-- Include other Firebase SDKs you need -->

### Usage

1. Navigate to the homepage (`/`).

2. Enter your search query in the provided input field.

3. Click on the "Search" button to submit your query.

4. The system will retrieve relevant academic papers based on your query and display them on the page.

### File Structure

- `manage.py`: Django management script.
- `requirements.txt`: List of Python dependencies.
- `academic_recommendation_system/`: Django application directory.
  - `settings.py`: Django settings file.
  - `urls.py`: URL configuration file.
  - `views.py`: Contains the main logic for retrieving paper recommendations.
  - `templates/`: HTML templates for rendering pages.
  - `static/`: Static files (CSS, JavaScript, etc.).
  - `utils.py`: Contains utility functions for scraping paper details and processing user input.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
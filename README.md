# Match-Plus-Web

## Description
The **Football Match Web Application** is designed for football enthusiasts who want to stay updated with match scores and information. This project utilizes the **API-FOOTBALL** API to fetch football match data and scores, which are then stored in Firebase. JavaScript is used to retrieve this data from Firebase and display it on the web application.

## Features
- **Live Match Data**: Fetch and display live football match scores and details.
- **Firebase Integration**: Store and retrieve football match data using Firebase.
- **API Integration**: Use API-FOOTBALL to get accurate and up-to-date football match information.

## Installation
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/football-match-web-application.git
    cd football-match-web-application
    ```

2. **Setup Python Environment**:
    - Install Python dependencies:
        ```bash
        pip install -r requirements.txt
        ```

3. **Configure Python Files**:
    - **`db_helper.py`**: Update the Firebase database URL:
        ```python
        firebase_admin.initialize_app(cred, {'databaseURL' : 'your database url'})
        ```
    - **`fixtures.py`** and **`standings.py`**: Replace `your api key` with your RapidAPI key:
        ```python
        headers = {
            "X-RapidAPI-Key": "your api key",
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }
        ```
    - Ensure the `cred.json` file contains your specific Firebase credentials.

4. **Configure JavaScript Files**:
    - **`fixtures.js`** and **`standings.js`**: Update the Firebase configuration:
        ```javascript
        const firebaseConfig = {
            //firebase config
        };
        ```

5. **Run the Application**:
    - Start the Python server:
        ```bash
        python main.py
        ```

## Usage
- The web application will automatically fetch match data from the API-FOOTBALL API and store it in Firebase.
- Live match scores and details will be displayed on the web application interface.

## Configuration
1. **Python Configuration**:
    - Ensure the `db_helper.py` file contains your Firebase database URL.
    - Update the API keys in `fixtures.py` and `standings.py` with your RapidAPI key.
    - Verify that the `cred.json` file contains your Firebase credentials.

2. **JavaScript Configuration**:
    - Update the Firebase configuration in `fixtures.js` and `standings.js` with your Firebase project details.

## How It Works
1. **Data Fetching**: The application uses the API-FOOTBALL API to fetch football match data.
2. **Data Storage**: Data is stored in Firebase for persistent access.
3. **Data Display**: JavaScript retrieves data from Firebase and displays it on the web application.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any questions or support, please contact ["muhamedyildiriim@gmail.com"].

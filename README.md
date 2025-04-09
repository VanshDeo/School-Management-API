# School Management API

A simple Node.js + Express + MySQL API for managing schools, allowing users to add new schools and retrieve a list of schools sorted by proximity to a given location.

---

## 🚀 Features

- Add new schools with name, address, latitude, and longitude
- Retrieve schools sorted by geographical distance (using Haversine formula)
- Built using Node.js, Express.js, and MySQL

---

## 🧱 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL (with MySQL2 Promise-based client)
- **Environment:** dotenv for configuration
- **Testing:** Postman

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/VanshDeo/School-Management-API.git
cd School-Management-API
```
Note : After Cloning the repository, all the dependencies will automatically get cloned so there is no need to do "npm install". 

### 2. Create a .env file in the root folder and add these variables accordingly :

```bash
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=school_db
PORT=3000
```
### 3. In MySQL to setup the database add : 

```sql
CREATE DATABASE school_db;

USE school_db;

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
);
```
### 4. Start the server by writing this in the terminal :

```bash
node index.js
```
OR
```bash
npx nodemon index.js
```
### 5. To check addSchool API(POST method) add this API endpoint in Postman :

In the Postman App choose POST method and add this URL : https://localhost:3000/api/addSchool and add this in Body : 

```json
  {
    "name": "Narayana School",
    "address": "Sonarpur",
    "latitude": 28.60,
    "longitude": 77.22
  }
```
You should get the response as :

```json
{
  "msg": "School added successfully",
  "id": 1
}
```
### 6. To check the listSchools API(GET method) add this URL in your browser :

URL : https://localhost:3000/api/listSchools?latitude=28.60&longitude=77.22

You should get the response as :

```json
[
  {
    "id": 1,
    "name": "Narayana School",
    "address": "Sonarpur",
    "latitude": 28.60,
    "longitude": 77.22,
    "distance": 0
  }
]
```


## For Direct checking the deployed link :

### To check addSchool API(POST method) add this API endpoint in Postman :

In the Postman App choose POST method and add this URL : https://school-management-api-production-aab7.up.railway.app/api/addSchool and add this in Body : 

```json
  {
    "name": "Narayana School",
    "address": "Sonarpur",
    "latitude": 28.60,
    "longitude": 77.22
  }
```
You should get the response as :

```json
{
  "msg": "School added successfully",
  "id": 1
}
```

### To check the listSchools API(GET method) add this URL in your browser :

URL : https://school-management-api-production-aab7.up.railway.app/api/listSchools?latitude=28.60&longitude=77.22

You should get the response as :

```json
[
  {
    "id": 1,
    "name": "Narayana School",
    "address": "Sonarpur",
    "latitude": 28.60,
    "longitude": 77.22,
    "distance": 0
  }
]
```

## Here is the full Postman Collection of the POST and GET request created to test the API :

URL : https://vanshdeo.postman.co/workspace/Vansh-Deo's-Workspace~874a38a9-894b-45a5-811b-88f8bba93c26/collection/43585749-551abaff-a9cb-4580-8a84-76356da1da05?action=share&creator=43585749



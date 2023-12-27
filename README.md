# School_db

This project uses ReactJS for the frontend and uses Python's Flask framework for the backend.
To run this project follow this guide step by step:

1. To run the backend service by flask:
    - If you are running the backend service for the first time then follow these:
        1. Install Python from `python.org`
        2. Navigate the terminal to the `backend` folder
        3. Create a virtual environment by using `python -m venv env` or `python3 -m venv env`
        4. Activate the virtual environment by using `env/Scripts/activate`(for windows) and `source env/bin/windows`(for linux or ubuntu)
        5. Install the requirements from requirements.txt by using the following command: `pip install -r requirements.txt`
        6. Create a file named `.env` and configure the following variables and save it:
            dbms_provider="database name ie. mysql, postgresql, etc"
            db_user="database username"
            db_password="database password"
            db_host="database host address"
            db_name="database name"
        7. Now migrate the database using following commands:
            - flask db init
            - flask db migrate -m "Your migration message"
            - flask db upgrade
        8. Now, your configurations are compleated and you can go ahead and start the development server by: `flask run --debug` and it should start accepting requests at `http://localhost:5000/`

    - If you have already configured the flask app then follow these:
        1. Navigate to the backend folder
        2. Activate the environment by `env/Scripts/activate`
        3. Start the development server by: `flask run --debug` and it should start accepting requests at `http://localhost:5000/`

2. To run the frontend service by ReactJS:
    - For first configuration follow these:
        1. Install Node from the website
        2. Open a new terminal apart from the one in which flask server is running
        3. Navigate to `school-app` directory
        4. Install all the node modules using `npm i` command
        5. Now run `npm start` and your react app should start working at `http://localhost:3000/`

    - If node modules are already installed:
        1. Navigate to `school-app` directory
        2. Now run `npm start` and your react app should start working at `http://localhost:3000/`

    - This react app has following endpoints:
        1. / -> for adding data
        2. /show-school -> for rendering data

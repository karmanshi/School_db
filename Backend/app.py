from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy #connector package or sql query package
# from flask_uploads import UploadSet, IMAGES, configure_uploads
from flask_migrate import Migrate # handle migrations
from flask_cors import CORS
from decouple import config

app = Flask(__name__) #create flask object
app.config['SQLALCHEMY_DATABASE_URI'] = f'{config("dbms_provider")}://{config("db_user")}:{config("db_password")}@{config("db_host")}/{config("db_name")}'  # Replace with your MySQL connection details
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOADED_PHOTOS_DEST'] = 'photos'  # Folder where uploaded photos will be stored

cors = CORS(app, automatic_options = True, origins='*')

# photos = UploadSet('photos', IMAGES)
# configure_uploads(app, photos)

db = SQLAlchemy(app) 
migrate = Migrate(app, db)

class School(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    photo = db.Column(db.String(255), nullable=True)
    phone_no = db.Column(db.String(20), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(100), nullable=False)

@app.route('/add_school', methods=['POST'])
def add_school():
    print(12)
    print(request.form)
    data = request.form
    name = data['name']
    address = data['address']
    email = data['email']
    phone_no = data['phone_no']
    state = data['state']
    city = data['city']

    # Save uploaded photo
    if 'photo' in request.files:
        photo = request.files['photo']
        photo_path = f'static/photos/{photo.filename}'
        photo.save(photo_path)
    else:
        photo_path = None

    new_school = School(
        name=name,
        address=address,
        email=email,
        photo=photo_path,
        phone_no=phone_no,
        state=state,
        city=city
    )

    db.session.add(new_school)
    db.session.commit()

    return jsonify({'message': 'School added successfully'})

@app.route('/get_schools', methods=['GET'])
def get_schools():
    schools = School.query.all()
    schools_list = []

    for school in schools:
        school_data = {
            'id': school.id,
            'name': school.name,
            'address': school.address,
            'email': school.email,
            'photo': school.photo,
            'phone_no': school.phone_no,
            'state': school.state,
            'city': school.city
        }
        schools_list.append(school_data)

    return jsonify({'schools': schools_list})



if __name__ == '__main__':

    app.run(debug=True)

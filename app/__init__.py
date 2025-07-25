from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_socketio import SocketIO
import os
from flask_bcrypt import Bcrypt
from flask_login import LoginManager

db = SQLAlchemy()
socketio = SocketIO(async_mode='eventlet')

bcrypt = Bcrypt()

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'your-secret'
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'postgresql://postgres:grace@localhost/flask-socketio')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    bcrypt.init_app(app)
    db.init_app(app)
    socketio.init_app(app)

    from app.main.routes import main
    from app.users.routes import users
    app.register_blueprint(main)
    app.register_blueprint(users)

    return app

from .db import db

class Game(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    game_name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    splash_image = db.Column(db.String)

    course = db.relationship("Course", back_populates="game")

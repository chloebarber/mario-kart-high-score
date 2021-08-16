from .db import db

class Game(db.Model):
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    game_name = db.Column(db.string, nullable=False)
    description = db.Column(db.string, nullable=False)
    splash_image = db.Column(db.string)

    game = db.relationship("Game", back_populates="relationship variable name in courses")

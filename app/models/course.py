from .db import db


class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    splash_img = db.Column(db.String, nullable=False)
    map_img = db.Column(db.String, nullable=False)
    game_id = db.Column(db.Integer, db.ForeignKey("games.id"),  nullable=False)
    cup = db.Column(db.Integer, nullable=False)
    cup_order = db.Column(db.Integer, nullable=False)

    game = db.relationship("Game", back_populates="course")
    comments = db.relationship("Comment", back_populates="course")
    records = db.relationship("Record", back_populates="course")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'splash_img': self.splash_img,
            'map_img': self.map_img,
            'game_id': self.game_id,
            'cup': self.cup,
            'cup_order': self.cup_order
        }

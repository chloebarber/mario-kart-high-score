from .db import db


class Record(db.Model):
    __tablename__ = 'records'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    course_id = db.Column(db.Integer, db.ForeignKey(
        'courses.id'), nullable=False)
    time = db.Column(db.Integer, nullable=False)
    character = db.Column(db.String, nullable=False)

    course = db.relationship("Course", back_populates="records")
    user = db.relationship("User", back_populates="records")

    # def to_dict(self):
    #     return {
    #         'id': self.id,
    #         'user_id': self.user_id,
    #         'course_id': self.course_id,
    #         'time': self.time,
    #         'character': self.character,
    #     }

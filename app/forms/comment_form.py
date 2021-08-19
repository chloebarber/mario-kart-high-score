from flask_wtf import FlaskForm
from wtforms import TextField, IntegerField, StringField, BooleanField, SelectField, SubmitField, HiddenField
from wtforms.validators import DataRequired


v = [DataRequired()]


class CommentForm(FlaskForm):
    user_id = IntegerField("user_id")
    course_id = IntegerField("course_id")

    content = TextField("Content: ", v)
    submit = SubmitField("Submit")
    # selectField will need a better character list
    # character = SelectField("Character: ", v, choices=["Mario", "Luigi", "Peach", "Bowser", "Wario", "Yoshi"])

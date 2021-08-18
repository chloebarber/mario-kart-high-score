from flask import Blueprint
from app.models import Course

course_route = Blueprint('course', __name__)


@course_route.route('/<int:id>')
def courseInfo(id):
    course = Course.query.get(id)
    return {'course': course.to_dict(), 'records': [record.to_dict() for record in course.records], 'comments': [comment.to_dict() for comment in course.comments]}

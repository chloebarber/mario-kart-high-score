from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Comment, Record

user_routes = Blueprint('users', __name__)

# git


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return {'user': user.to_dict(), 'record': [record.to_dict() for record in user.records], 'comment': [comment.to_dict() for comment in user.comments]}
    # return user.to_dict()

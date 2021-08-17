from flask import Blueprint
from app.models import Game, Course

game_route = Blueprint('game', __name__)


@game_route.route('/')
def games():
    games = Game.query.all()
    # print(games)
    return {'games': [game.to_dict() for game in games]}


# @game_route.route('/<int:id>/')
# def allGameCourses(id):
#     courses = Game.query.join(Course, game_id=id)\
#         .filter(Course.id == id).all()
#     return {'courses': [course.to_dict() for course in courses]}


@game_route.route('/<int:id>/')
def allGameCourses(id):
    # game = Game.query.get(id)
    # courses = Course.query.join(Game, id == Game.id)\
    #     .filter_by(Course.id == id).all()
    courses = Course.query.filter_by(game_id=id).all()
    # code above works and returns
    return {'courses': [course.to_dict() for course in courses]}

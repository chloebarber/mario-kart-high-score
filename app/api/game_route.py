from flask import Blueprint
from app.models import Game

game_route = Blueprint('game', __name__)


@game_route.route('/')
def games():
    games = Game.query.all()
    # print(games)
    return {'games': [game.to_dict() for game in games]}

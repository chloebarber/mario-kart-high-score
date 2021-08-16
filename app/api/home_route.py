from flask import Blueprint
from app.models import Game

home_route = Blueprint('home', __name__)


@home_route.route('/')
def home():
    games = Game.query.all()
    return {'games': [game.to_dict() for game in games]}


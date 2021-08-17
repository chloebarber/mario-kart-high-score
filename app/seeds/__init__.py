from flask.cli import AppGroup
from .users import seed_users, undo_users
from .games import seed_games
from .courses import seed_courses
from .records import seed_records
from .comments import seed_comments

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_games()
    seed_courses()
    seed_records()
    seed_comments()

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here

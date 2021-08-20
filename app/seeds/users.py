from app.models import db, User, Game, Course


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', character_pfp="https://mariokart8.nintendo.com/assets/img/drivers/mario_th.png", bio="It's a me, Mario!")
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', character_pfp="https://mariokart8.nintendo.com/assets/img/drivers/luigi_th.png", bio="Wee-gee's got it!")
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', character_pfp="https://mariokart8.nintendo.com/assets/img/drivers/peach_th.png", bio="I baked a cake for you!")

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()



# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

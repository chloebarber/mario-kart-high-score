from flask import Blueprint, request
from app.models import Comment, db
from app.forms.comment_form import CommentForm

comment_route = Blueprint('comment', __name__)


@comment_route.route('/', methods=['POST'])
def postComment():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_comment = Comment(user_id=data["user_id"],
                              course_id=data["course_id"],
                              content=data["content"])
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    return {'error': 'UH OH ERROR'}


@comment_route.route('/<int:id>', methods=['PUT'])
def editComment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        oldComment = Comment.query.get(id)
        form.populate_obj(oldComment)
        
        # db.session.add(oldComment)
        db.session.commit()

        return oldComment.to_dict()
    return {'error': 'UH OH ERROR'}


@comment_route.route('/<int:id>', methods=['DELETE'])
def deleteComment(id):

    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()

    return comment.to_dict()

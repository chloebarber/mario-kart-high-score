from flask import Blueprint, request
from app.models import Record, db
from app.forms.record_form import RecordForm

record_route = Blueprint('record', __name__)


@record_route.route('/', methods=['POST'])
def postRecord():
    form = RecordForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_record = Record(user_id=data["user_id"],
                            course_id=data["course_id"],
                            time=data["time"],
                            character=data["character"])
        db.session.add(new_record)
        db.session.commit()
        return new_record.to_dict()
    return {'error': 'UH OH ERROR'}
    # return {'request': request.form}


@record_route.route('/<int:id>', methods=['PUT'])
def editRecord(id):
    form = RecordForm(request.form)
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # data = form.data #legacy code unused if populate_obj is used

        oldRecord = Record.query.get(id)
        form.populate_obj(oldRecord)

        db.session.add(oldRecord)
        db.session.commit()

        return oldRecord.to_dict()
    return {'error': 'UH OH ERROR'}


@record_route.route('/<int:id>', methods=['DELETE'])
def deleteRecord(id):

    record = Record.query.get(id)
    db.session.delete(record)
    db.session.commit()

    return {'success': 'baleeted it 4 u boss'}

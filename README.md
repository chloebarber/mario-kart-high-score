# ![Mario](https://emojis.slackmojis.com/emojis/images/1450319446/47/mario.gif?1450319446) Welcome to Mario Kart High Score ![Mario](https://emojis.slackmojis.com/emojis/images/1450319446/47/mario.gif?1450319446)
Mario Kart High Score is an app based on the the Map My Run website that allows users to record their race times for their favorite Mario Kart courses and add comments about their race experience. Mario Kart High Score was created using Flask, React, and Redux.

**A live link to the website can be found here: https://mk-highscores.herokuapp.com/**

## ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113) Website walk-through ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113)
### *Homepage, Course Page, Sign Up Page, Login Page*
![123](https://user-images.githubusercontent.com/79862908/130370698-7e7df97c-6b0e-4dc0-af46-f1bfb5c4da4a.gif)
---
### *Course Page in detail, showing CRUD functions for user comments and user records*
![12345](https://user-images.githubusercontent.com/79862908/130370717-2db9871a-ec0b-4069-b70f-82c2449139ca.gif)
---
### *MK Racers Page (full user list) and My Profile Page (showing user profile)*
![123456](https://user-images.githubusercontent.com/79862908/130370730-e517e717-7a21-4705-ac96-2e2d3de3a57f.gif)
---
## ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113) Features ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113)
* Sign up/in with email and password
* Explore all the courses from every Mario Kart Game
* Leave comments on any courses
* Post your high score achievements on a course page to see how you rank
* Customize your user profile page from a list 42 pre-selected avatars and a custom bio

## ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113) Future Features ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113)
* Add/Remove friends
* Friend list
* Search 


## ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113) Technologies used to build the website ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113)
### Backend
* Flask
* Python
* JavaScript
* PostgresSQL
* SQLAlchemy
* WTForms
### Frontend
* React
* JavaScript
* CSS3
* HTML5
* Heroku

## ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113) Backend comment routes code snippets: ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113)

```
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


@comment_route.route('/<int:id>/', methods=['PUT'])
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


@comment_route.route('/<int:id>/', methods=['DELETE'])
def deleteComment(id):

    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()

    return comment.to_dict()

```

## ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113) Frontend comment routes code snippets: ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113)

```
const AddCommentForm = () => {
    const sessionUser = useSelector(state => state.session.user)
    const courseInfo = useSelector((state) => state.courseInfo)
    // console.log(courseInfo)
    const dispatch = useDispatch();

    // const [course_id, setCourse_id] = useState(courseInfo.course.id);
    const [content, setContent] = useState("");
    // console.log(+listing)

    // const createUserId = (e) => setUser_id(e.target.value);
    // const createCourse_Id = (e) => setCourse_id(e.target.value);
    const createContent = (e) => setContent(e.target.value);

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        const addComment = {
           user_id: sessionUser.id,
           course_id:courseInfo.course.id,
           content
        };
        await dispatch(createCommentThunk(addComment))

    };

    return (
        <div className='comment-form-div'>
            <form className='comment-form' onSubmit={handleSubmit}>
                <label className="content">
                    <input type="text" onChange={createContent} placeholder="What do you think about the course?"/>
                </label>

                <button className='commentSubmit__button' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddCommentForm;

```

## ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113) Getting started ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113)

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***
*IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

*ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

## Deploy to Heroku

1. Before you deploy, don't forget to run the following command in order to
ensure that your production environment has all of your up-to-date
dependencies. You only have to run this command when you have installed new
Python packages since your last deployment, but if you aren't sure, it won't
hurt to run it again.

   ```bash
   pipenv lock -r > requirements.txt
   ```

2. Create a new project on Heroku
3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres"
4. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line)
5. Run

   ```bash
   heroku login
   ```

6. Login to the heroku container registry

   ```bash
   heroku container:login
   ```

7. Update the `REACT_APP_BASE_URL` variable in the Dockerfile.
   This should be the full URL of your Heroku app: i.e. "https://flask-react-aa.herokuapp.com"
8. Push your docker container to heroku from the root directory of your project.
   (If you are using an M1 mac, follow [these steps below](#for-m1-mac-users) instead, then continue on to step 9.)
   This will build the Dockerfile and push the image to your heroku container registry.

   ```bash
   heroku container:push web -a {NAME_OF_HEROKU_APP}
   ```

9. Release your docker container to heroku

      ```bash
      heroku container:release web -a {NAME_OF_HEROKU_APP}
      ```

10. set up your database

      ```bash
      heroku run -a {NAME_OF_HEROKU_APP} flask db upgrade
      heroku run -a {NAME_OF_HEROKU_APP} flask seed all
      ```

11. Under Settings find "Config Vars" and add any additional/secret .env
variables.

12. profit

### For M1 Mac users

(Replaces **Step 8**)

1. Build image with linux platform for heroku servers. Replace
{NAME_OF_HEROKU_APP} with your own tag:

   ```bash=
   docker buildx build --platform linux/amd64 -t {NAME_OF_HEROKU_APP} .
   ```

2. Tag your app with the url for your apps registry. Make sure to use the name
of your Heroku app in the url and tag name:

   ```bash=2
   docker tag {NAME_OF_HEROKU_APP} registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```

3. Use docker to push the image to the Heroku container registry:

   ```bash=3
   docker push registry.heroku.com/{NAME_OF_HEROKU_APP}/web
   ```
## ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113) Mario Kart High Score created by: ![Bowser](https://emojis.slackmojis.com/emojis/images/1494971113/2264/bowsermariokart.gif?1494971113)
- ![Coin-pip](https://github.com/snipe/awesome-emoji/blob/master/gaming/mario/Coin-Pip.gif?raw=true) [@chloebarber](https://github.com/chloebarber) ![Coin-pip](https://github.com/snipe/awesome-emoji/blob/master/gaming/mario/Coin-Pip.gif?raw=true)
- ![Coin-pip](https://github.com/snipe/awesome-emoji/blob/master/gaming/mario/Coin-Pip.gif?raw=true) [@meagan13](https://github.com/meagan13) ![Coin-pip](https://github.com/snipe/awesome-emoji/blob/master/gaming/mario/Coin-Pip.gif?raw=true)
- ![Coin-pip](https://github.com/snipe/awesome-emoji/blob/master/gaming/mario/Coin-Pip.gif?raw=true) [@ji-k](https://github.com/ji-k) ![Coin-pip](https://github.com/snipe/awesome-emoji/blob/master/gaming/mario/Coin-Pip.gif?raw=true)
- ![Coin-pip](https://github.com/snipe/awesome-emoji/blob/master/gaming/mario/Coin-Pip.gif?raw=true) [@D3vila](https://github.com/D3vila) ![Coin-pip](https://github.com/snipe/awesome-emoji/blob/master/gaming/mario/Coin-Pip.gif?raw=true)

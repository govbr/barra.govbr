#!flask/bin/python
from werkzeug.contrib.profiler import ProfilerMiddleware
from barrabrasil import app

app.config['PROFILE'] = True
app.wsgi_app = ProfilerMiddleware(app.wsgi_app, restrictions = [30]) #30 que mais demoraram
import webbrowser
webbrowser.open("http://127.0.0.1:5000/",new=1)
app.run(host='0.0.0.0', debug=True)

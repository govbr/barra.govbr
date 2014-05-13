#!flask/bin/python
from werkzeug.contrib.profiler import ProfilerMiddleware
from barrabrasil import app

app.config['PROFILE'] = True
app.wsgi_app = ProfilerMiddleware(app.wsgi_app, restrictions = [30]) #30 que mais demoraram
app.run(debug = True)

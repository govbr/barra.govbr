from flask import Flask, url_for, render_template, request, Response, make_response
from config import Config
import hashlib, zlib

# Criar Key e certificado
# openssl genrsa 1024 > ssl.key
# openssl req -new -x509 -nodes -sha1 -days 365 -key ssl.key > ssl.cert

#from OpenSSL import SSL
#ctx = SSL.Context(SSL.SSLv23_METHOD)
#ctx.use_privatekey_file('ssl.key')
#ctx.use_certificate_file('ssl.cert')

app = Flask(__name__)

if not app.debug: 
	import logging
	from logging.handlers import SMTPHandler
	f = app.open_resource('config')
	cfg = Config(f)
	mail_handler = SMTPHandler(cfg.server, cfg.email, cfg.ADMINS, cfg.subject)
   	mail_handler.setLevel(logging.ERROR)
	app.logger.addHandler(mail_handler)

@app.route('/')
def pagina_teste():
    try:
        with app.open_resource('templates/exemplo.html') as f:
            conteudo = f.read().decode('utf-8')
        resposta = make_response(conteudo)
        resposta.headers['Content-type'] = 'text/html; charset=utf-8'
        return resposta
    except IOError:
        return make_response("<h1>403 Forbidden</h1>", 403)

@app.route('/barra.js')
def barra():
    f = app.open_resource('profile')
    cfg = Config(f)
    profile = cfg.profile
    data = cfg.date
    with app.open_resource('templates/%s/barra-brasil.js' % profile) as f:
        conteudo = f.read().decode('utf-8')
    etag = hashlib.sha1(conteudo.encode('utf-8')).hexdigest()
    accept_encoding = request.headers.get('Accept-Encoding', '')
    if request.if_none_match and \
              etag in request.if_none_match:
        resposta = Response(status=304)
	if accept_encoding and \
		'gzip' in accept_encoding:
	   conteudo = zlib.compress(conteudo.encode('utf8'))
	   resposta.headers['Content-Encoding'] = 'gzip'
    else: # nao esta em cache do navegador
        resposta = make_response(conteudo)
        resposta.set_etag(etag)
    resposta.headers['Content-type'] = 'application/x-javascript'
    resposta.headers['Cache-control'] = 'public, max-age: 86401' #24 horas
    resposta.headers['Last-Modified'] = data
    return resposta

@app.route('/static/opensans-bold.woff')
def fonte():
    f = app.open_resource('profile')
    cfg = Config(f)
    data = cfg.date
    f = app.open_resource('static/opensans-bold.woff')
    conteudo = f.read().decode('base64')
    resposta = make_response(conteudo)
    resposta.headers['Content-type'] = 'application/x-font-woff'
    resposta.headers['Cache-control'] = 'public, max-age: 31536000' #1 ano
    resposta.headers['Last-Modified'] = data
    return resposta

if __name__ == '__main__':
    import webbrowser
    webbrowser.open("http://127.0.0.1:5000/",new=2)
    app.run(debug=True)
    #webbrowser.open("https://127.0.0.1:5000/",new=2)
    #app.run(debug=False,ssl_context=ctx)


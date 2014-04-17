from flask import Flask, url_for, render_template, request, Response, make_response
from config import Config
import hashlib

# Criar Key e certificado
# openssl genrsa 1024 > ssl.key
# openssl req -new -x509 -nodes -sha1 -days 365 -key ssl.key > ssl.cert

#from OpenSSL import SSL
#ctx = SSL.Context(SSL.SSLv23_METHOD)
#ctx.use_privatekey_file('ssl.key')
#ctx.use_certificate_file('ssl.cert')

app = Flask(__name__)

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
    f = file('profile')
    cfg = Config(f)
    profile = cfg.profile
    with app.open_resource('templates/%s/barra-brasil.js' % profile) as f:
        conteudo = f.read().decode('utf-8')
    etag = hashlib.sha1(conteudo.encode('utf-8')).hexdigest()
    if request.if_none_match and \
              etag in request.if_none_match:
        resposta = Response(status=304)
    else: # nao esta em cache do navegador
        resposta = make_response(conteudo)
        resposta.set_etag(etag)
        resposta.headers['Content-type'] = 'application/javascript'
    resposta.headers['Cache-control'] = 'max-age: 3600'
    return resposta

if __name__ == '__main__':
    import webbrowser
    webbrowser.open("http://127.0.0.1:5000/",new=2)
    app.run(debug=False)
    #webbrowser.open("https://127.0.0.1:5000/",new=2)
    #app.run(debug=False,ssl_context=ctx)


from flask import Flask, url_for, render_template, request, Response, make_response
import hashlib
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
def barra(profile='copa2014'):
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
    from sys import argv
    if len(argv) > 1:
        profile = argv[1]
    else:
        profile = 'default'
    app.run(debug=False)

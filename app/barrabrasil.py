from flask import Flask, url_for, render_template, request
app = Flask(__name__)

@app.route('/')
def pagina_teste():
    # apos o desenvolvimento substituir por redirect para e-pwg
    bootstrap = '''
    <html>
    <head></head>
    <body>
    <div id="barra-brasil"><a href="http://brasil.gov.br" style="background:#7F7F7F; height: 20px; padding:4px 0 4px 10px; display: block; font-family:sans,sans-serif; text-decoration:none; color:white; ">Portal do Governo Brasileiro</a></div>
    <script src="barra.js?cor=preto" type="text/javascript"></script>
    </body>
    </html>
    '''
    return bootstrap # % url_for('static', filename='barra-brasil.js')

@app.route('/barra.js')
def barra():
    nome_cor = request.args.get('cor', 'azul')
    paleta = {
        'azul': '#004B82',
        'preto': '#000000',
        'cinza': '#7F7F7F',
        'verde': '#00500F',
    }
    cor = paleta.get(nome_cor, '#004B82')
    return render_template('barra-brasil.js', cor=cor)

if __name__ == '__main__':
    app.run(debug=True)

# Barra.gov.br


Barra dinâmica do governo brasileiro


# Como gerar a barra


## Mudando o profile

Altere o arquivo 'app/profile' para apontar para o novo profile. Exemplo:

		profile : copa2014

## Dependências:

Esses são comandos exemplos, por favor verifique no seu sistema como deve ser instalado.

 * flask
		pip install flask
 * assetgen
		pip install assetgen

 * config
		pip install config

 * node.js
		apt-get install python-software-properties python g++ make
		add-apt-repository ppa:chris-lea/node.js
		apt-get update
		apt-get install nodejs
		apt-get install npm

 * coffeescript 
		npm install -g coffee-script

 * sass
		apt-get install ruby-full build-essential
		apt-get install rubygems
		gem install sass
		sass -v

 * uglifyjs
		npm install -g uglify-js

 * zlib


Para profiling é necessário além dos acima:

   * werkzeug
  
 
## Geração da barra

Execute o comando:

>    ./build.sh _profile_

Se não for especificado nenhum _profile_ o profile _default_ será selecionado.


# Requisitos da Barra
----

1. A Barra deve ser adaptável a um desenho fluído e fixo
2. A Barra deve suportar diferentes opções de cor de fundo
3. A Barra deve suportar a inclusão dinâmica do nome da organização
4. A Barra deve funcionar nos navegadores: 
>Internet Explorer versão 8 ou superior

>Mozilla Firefox versão _a definir_

>Google Chrome versão _a definir_
	
>Safari versão _a definir_

>Opera versão _a definir_

>Navegadores de dispositivos móveis

5. A Barra deve degradar graciosamente (graceful degradation ou progressive enhancement) clientes que não possuam compatibilidade ou no qual o javascript esteja desligado

6. A barra deve ser acessível.

# Considerações sobre a arquitetura
-----

1. A barra será hospedada em local centralizado e chamada de forma distribuída pelos portais institucionais;

2. A barra será incluída via javascript minificado.


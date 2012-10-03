(function() {


var conteudoBarra = '<div class="barra"><ul><li><a href="http://www.acessoainformacao.gov.br" class="ai" title="Acesso à informação">www.sic.gov.br</a></li> <li><a href="http://www.brasil.gov.br" class="brasilgov" title="Portal de Estado do Brasil">www.brasil.gov.br</a></li></ul></div>';

var divBarra = document.getElementById('barra-brasil');

var head = document.getElementByTagName('head');

var style = document.createElement('style');

var src = document.createAttribute("src");
    src.nodeValue = "http://barra.brasil.gov.br/estilo-barra.css";

var tipo = document.createAttribute("type");
	tipo.nodeValue = "stylesheet";

style.setAttributeNode(src);
style.setAttributeNode(tipo);

head.appendChild(style);

divBarra.innerHTML(conteudoBarra);

})();

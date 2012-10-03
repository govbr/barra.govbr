(function() {


var conteudoBarra = '<div class="barra"><ul><li><a href="http://www.acessoainformacao.gov.br" class="ai" title="Acesso à informação">www.sic.gov.br</a></li> <li><a href="http://www.brasil.gov.br" class="brasilgov" title="Portal de Estado do Brasil">www.brasil.gov.br</a></li></ul></div>';

var divBarra = document.getElementById('barra-brasil');

var head = document.getElementsByTagName('head')[0];

var link = document.createElement('link');

var href = document.createAttribute("href");
//    src.nodeValue = "http://barra.brasil.gov.br/estilo-barra.css";
    href.nodeValue = "http://189.9.137.173/estilo-barra.css";

var tipo = document.createAttribute("type");
	tipo.nodeValue = "text/css";

var rel = document.createAttribute("rel");
	rel.nodeValue = "stylesheet";

var media = document.createAttribute("media");
	media.nodeValue = "all";

link.setAttributeNode(href);
link.setAttributeNode(tipo);
link.setAttributeNode(rel);
link.setAttributeNode(media);

head.appendChild(link);

divBarra.innerHTML = conteudoBarra;

})();

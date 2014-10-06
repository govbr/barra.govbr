var _paq = _paq || [];
 _paq.push(['trackPageView']);
 _paq.push(['enableLinkTracking']);
(function(){
    var conteudoBarra = '<div id="wrapper-barra-brasil"><div class="brasil-flag"><a href="http://brasil.gov.br" class="link-barra">Brasil</a></div><span class="acesso-info"><a href="http://brasil.gov.br/barra#acesso-informacao" class="link-barra">Acesso &agrave; informa&ccedil;&atilde;o</a><span class="hashtag-barra-brasil"><a href="http://www2.inca.gov.br" class="link-barra"><span>#CancerDeMama</span><span>#OutubroRosa2014</span></a></span></span><ul class="list"><li class="list-item first"><a href="http://brasil.gov.br/barra#participe" class="link-barra">Participe</a></li><li class="list-item"><a href="http://www.servicos.gov.br/" class="link-barra">Servi&ccedil;os</a></li><li class="list-item"><a href="http://www.planalto.gov.br/legislacao" class="link-barra">Legisla&ccedil;&atilde;o</a></li><li class="list-item last last-item"><a href="http://brasil.gov.br/barra#orgaos-atuacao-canais" class="link-barra">Canais</a></li></ul></div>';
var body, divBarra, head, href, idNovaDiv, link, novaDiv;

divBarra = document.getElementById("barra-brasil");

if (divBarra) {
  divBarra.parentNode.removeChild(divBarra);
  head = document.getElementsByTagName("head")[0];
  body = document.getElementsByTagName("body")[0];
  link = document.createElement("link");
  href = document.createAttribute("href");
  novaDiv = document.createElement("div");
  idNovaDiv = document.createAttribute("id");
  idNovaDiv.nodeValue = "barra-brasil";
  novaDiv.setAttributeNode(idNovaDiv);
  novaDiv.innerHTML = conteudoBarra;
  body.insertBefore(novaDiv, body.childNodes[0]);
}

window._barrabrasil = {
  insere_css: function(css) {
    var media, style, tipo;
    style = document.createElement("style");
    tipo = document.createAttribute("type");
    tipo.nodeValue = "text/css";
    media = document.createAttribute("media");
    media.nodeValue = "all";
    style.setAttributeNode(tipo);
    style.setAttributeNode(media);
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    return head.appendChild(style);
  }
};
var d, g, s, u;

u = ("https:" === document.location.protocol ? "https" : "http") + "://189.9.150.35/piwik/";

_paq.push(["setTrackerUrl", u + "piwik.php"]);

_paq.push(["setSiteId", 1]);

d = document;

g = d.createElement("script");

s = d.getElementsByTagName("script")[0];

g.type = "text/javascript";

g.defer = true;

g.async = true;

g.src = u + "piwik.js";

s.parentNode.insertBefore(g, s);
})();
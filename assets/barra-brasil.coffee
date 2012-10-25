(->
  conteudoBarra = "<div class=\"barra\"><ul><li><a href=\"http://www.acessoainformacao.gov.br\" class=\"ai\" title=\"Acesso à informação\">www.sic.gov.br</a></li> <li><a href=\"http://www.brasil.gov.br\" class=\"brasilgov\" title=\"Portal de Estado do Brasil\">www.brasil.gov.br</a></li></ul></div>"
  divBarra = document.getElementById("barra-brasil")
  head = document.getElementsByTagName("head")[0]
  link = document.createElement("link")
  href = document.createAttribute("href")
  
  #    src.nodeValue = "http://barra.brasil.gov.br/estilo-barra.css";
  #    href.nodeValue = "http://189.9.137.173/estilo-barra.css";
  href.nodeValue = "static/estilo-barra.css"
  tipo = document.createAttribute("type")
  tipo.nodeValue = "text/css"
  rel = document.createAttribute("rel")
  rel.nodeValue = "stylesheet"
  media = document.createAttribute("media")
  media.nodeValue = "all"
  link.setAttributeNode href
  link.setAttributeNode tipo
  link.setAttributeNode rel
  link.setAttributeNode media
  head.appendChild link
  divBarra.innerHTML = conteudoBarra
)()

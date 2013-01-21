  divBarra = document.getElementById("barra-brasil")
  head = document.getElementsByTagName("head")[0]
  link = document.createElement("link")
  href = document.createAttribute("href")
  
  #    src.nodeValue = "http://barra.brasil.gov.br/estilo-barra.css";
  #    href.nodeValue = "http://189.9.137.173/estilo-barra.css";
  #    href.nodeValue = "static/estilo-barra.css"
  window._barrabrasil =
    insere_css: (css) ->
        style = document.createElement("style")
        tipo = document.createAttribute("type")
        tipo.nodeValue = "text/css"
        media = document.createAttribute("media")
        media.nodeValue = "all"
        conteudo = document.createTextNode(css)
        style.setAttributeNode tipo
        style.setAttributeNode media
        style.appendChild conteudo
        head.appendChild style

  divBarra.innerHTML = conteudoBarra

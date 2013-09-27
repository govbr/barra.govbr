  divBarra = document.getElementById("barra-brasil")
  divBarra.parentNode.removeChild(divBarra)
  head = document.getElementsByTagName("head")[0]
  body = document.getElementsByTagName("body")[0]

  link = document.createElement("link")
  href = document.createAttribute("href")

  novaDiv = document.createElement("div")
  idNovaDiv = document.createAttribute("id")
  idNovaDiv.nodeValue = "barra-brasil"
  novaDiv.setAttributeNode idNovaDiv
  # conteudoBarra definido no barra-brasil-1.yaml e atribuido pelo assetgen
  novaDiv.innerHTML = conteudoBarra
  body.insertBefore(novaDiv, body.childNodes[0])
  
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


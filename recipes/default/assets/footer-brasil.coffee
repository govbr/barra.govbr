  divFooter = document.getElementById("footer-brasil")
  if divFooter
    divFooter.parentNode.removeChild(divFooter) 
    
    head = document.getElementsByTagName("head")[0]
    body = document.getElementsByTagName("body")[0]
    link = document.createElement("link")
    href = document.createAttribute("href")
    novaDiv = document.createElement("div")
    idNovaDiv = document.createAttribute("id")
    idNovaDiv.nodeValue = "footer-brasil"
    novaDiv.setAttributeNode idNovaDiv
  # conteudoFooter definido no footer-brasil-1.yaml e atribuido pelo assetgen
    novaDiv.innerHTML = conteudoFooter
    scripts = document.getElementsByTagName('script')
    myScript = scripts[ scripts.length - 1 ]
    query = myScript.src.replace(/^[^\?]+\??/,'')
    Pairs = query.split(/[;&]/)
    val = "cor"
    if Pairs.length is 1
      KeyVal = Pairs[0].split("=")
      if KeyVal.length is 2
        key = unescape(KeyVal[0])
        val = unescape(KeyVal[1])
        val = val.replace(/\+/g, " ")
    list = ["azul", "amarelo", "verde", "branco"]
    if val is "cor"
      val = "verde"
    if list.indexOf(val) is -1
      val = "verde"

    classNovaDiv = document.createAttribute("class")
    classNovaDiv.nodeValue = "footer-brasil-"+val
    novaDiv.setAttributeNode classNovaDiv
    body.insertBefore(novaDiv, body.lastChild)
  #    src.nodeValue = "http://barra.brasil.gov.br/estilo-barra.css";
  #    href.nodeValue = "http://189.9.137.173/estilo-barra.css";
  #    href.nodeValue = "static/estilo-barra.css"

  window._footerbrasil =
    insere_css: (css) ->
        style = document.createElement("style")
        tipo = document.createAttribute("type")
        tipo.nodeValue = "text/css"
        media = document.createAttribute("media")
        media.nodeValue = "all"
        style.setAttributeNode tipo
        style.setAttributeNode media

        if style.styleSheet #Hack para IE8
          style.styleSheet.cssText = css
        else
          style.appendChild document.createTextNode(css)
        head = document.getElementsByTagName("head")[0]
        head.appendChild style



  divBarra = document.getElementById("barra-brasil")
  if divBarra
    divBarra.removeAttribute "style"
  # conteudoBarra definido no barra-brasil-1.yaml e atribuido pelo assetgen
    divBarra.innerHTML = conteudoBarra
    head = document.getElementsByTagName("head")[0]

  window._barrabrasil =
    insere_css: (css) ->
        style = document.createElement("style")
        tipo = document.createAttribute("type")
        tipo.value = "text/css"
        media = document.createAttribute("media")
        media.value = "all"
        style.setAttributeNode tipo #Para IE8. Quando suporte cair utilizar setAttribute "type","text/css"
        style.setAttributeNode media #Para IE8. Quando suporte cair utilizar setAttribute "media","all"
        
        if style.styleSheet #Hack para IE8
            style.styleSheet.cssText = css
        else
            style.appendChild document.createTextNode(css)
        
        head.appendChild style


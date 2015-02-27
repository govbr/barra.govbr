  divBarra = document.getElementById("barra-brasil")
  if divBarra
    divBarra.removeAttribute "style"
  # conteudoBarra definido no barra-brasil-1.yaml e atribuido pelo assetgen
    divBarra.innerHTML = conteudoBarra
    head = document.getElementsByTagName("head")[0]

  window._barrabrasil =
    insere_css: (css) ->
        style = document.createElement("style")
        style.setAttribute "type","text/css"
        style.setAttribute "media","all"
        
        if style.styleSheet #Hack para IE8
            style.styleSheet.cssText = css
        else
            style.appendChild document.createTextNode(css)
        
        head.appendChild style


  divFooter = document.getElementById("footer-brasil")
  if divFooter
    divFooter.innerHTML = conteudoFooter
    
  window._footerbrasil =
    insere_css: (css) ->
        style = document.createElement("style")
        style.setAttribute "type","text/css"
        style.setAttribute "media","all"

        if style.styleSheet #Hack para IE8
          style.styleSheet.cssText = css
        else
          style.appendChild document.createTextNode(css)
        head = document.getElementsByTagName("head")[0]
        head.appendChild style



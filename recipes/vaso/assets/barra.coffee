  d = document
  divBarra = d.getElementById("barra-brasil")
  if divBarra
    divBarra.removeAttribute "style"
  # conteudoBarra definido no barra-brasil-1.yaml e atribuido pelo assetgen
    divBarra.innerHTML = conteudoBarra
    head = d.getElementsByTagName("head")[0]

  getOrgaoContent = ->
    metas = d.getElementsByTagName('meta')
    i = 0
    while i < metas.length
      if metas[i].getAttribute('property') == 'creator.productor'
        return '&orgao='+ metas[i].getAttribute('content')
      i++
    ''

  link = d.getElementById('barra-brasil-orgao')
  link.setAttribute 'href', 'http://www.servicos.gov.br/?pk_campaign=barrabrasil'+getOrgaoContent()


  window._barrabrasil =
    insere_css: (css) ->
        style = document.createElement("style")
        style.setAttribute "type","text/css"
        style.setAttribute "media","all"
        style.appendChild d.createTextNode(css)
        
        head.appendChild style

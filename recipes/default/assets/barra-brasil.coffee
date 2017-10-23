  divBarra = document.getElementById("barra-brasil")
  if divBarra
    divBarra.removeAttribute "style"
  # conteudoBarra definido no barra-brasil-1.yaml e atribuido pelo assetgen
    divBarra.innerHTML = conteudoBarra
    head = document.getElementsByTagName("head")[0]

  getOrgaoContent = ->
    metas = document.getElementsByTagName 'meta' 
    i = 0
    while i < metas.length
      if metas[i].getAttribute('property') == 'creator.productor'
        return '&orgao='+ metas[i].getAttribute('content')
      i++
    ''

  link = document.getElementById('barra-brasil-orgao')
  link.setAttribute 'href', 'http://www.servicos.gov.br/?pk_campaign=barrabrasil'+getOrgaoContent()

  window._barrabrasil =
    insere_css: (css) ->
        style = document.createElement "style"
        style.setAttribute "type","text/css"
        style.setAttribute "media","all"
        style.appendChild document.createTextNode(css)
        
        head.appendChild style

  loadFile = (sURL, fCallback) ->
    oReq = new XMLHttpRequest
    oReq.arguments = Array::slice.call(arguments, 2)
    oReq.open 'POST', sURL, true
    oReq.setRequestHeader 'Content-Type', 'application/x-www-form-urlencoded'
    param = 'url='+window.location.href 
    oReq.send param
    return

  loadFile 'http://eselo-prd.brazilsouth.cloudapp.azure.com:8080/buscar-avaliacao'


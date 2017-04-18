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
  
  xhrSuccess = ->
    @callback.apply this, @arguments
    return

  xhrError = ->
    console.error @statusText
    return

  loadFile = (sURL, fCallback) ->
    oReq = new XMLHttpRequest
    oReq.callback = fCallback
    oReq.arguments = Array::slice.call(arguments, 2)
    oReq.onload = xhrSuccess
    oReq.onerror = xhrError
    oReq.open 'POST', sURL, true
    oReq.setRequestHeader 'Content-Type', 'application/x-www-form-urlencoded'
    param = 'url=http://asesweb.governoeletronico.gov.br/ases' 
    window.location.href 
    oReq.send param
    return

  add_eselo = () ->
    response = JSON.parse @responseText
    if response.valor
        eselo = document.getElementById "eselo"
        eselo.setAttribute 'href', response.urlResultado
        eselo.setAttribute 'title', 'Avaliado em: '+ new Date(response.dataAvaliacao).toLocaleString()
        eselo.setAttribute 'aria-label', 'Avaliação de acessibilidade do site' + window.location.href
        eselo.innerHTML = '\u267F '+response.valor
        document.getElementById("lista-barra-brasil").className += " list-eselo"
    return

  loadFile 'http://189.9.137.162:8080/eselo/buscar-avaliacao', add_eselo

  window._barrabrasil =
    insere_css: (css) ->
        style = document.createElement "style"
        style.setAttribute "type","text/css"
        style.setAttribute "media","all"
        style.appendChild document.createTextNode(css)
        
        head.appendChild style

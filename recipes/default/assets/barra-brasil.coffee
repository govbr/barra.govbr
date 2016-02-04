  divBarra = document.getElementById("barra-brasil")
  if divBarra
    divBarra.removeAttribute "style"
  # conteudoBarra definido no barra-brasil-1.yaml e atribuido pelo assetgen
    divBarra.innerHTML = conteudoBarra
    head = document.getElementsByTagName("head")[0]

  getOrgaoContent = ->
    metas = document.getElementsByTagName('meta')
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
        style = document.createElement("style")
        style.setAttribute "type","text/css"
        style.setAttribute "media","all"
        style.appendChild document.createTextNode(css)
        
        head.appendChild style

  if 'undefined' != typeof window.jQuery
    jQuery(document).ready ($) ->
    animateAedes = undefined
    calcSpeed = undefined
    makeNewPosition = undefined
    maxX = undefined
    maxY = undefined
    minX = undefined
    minY = undefined
    precisaGirar = undefined

    makeNewPosition = ->
      newX = undefined
      newY = undefined
      newX = Math.floor((maxX - minX) * Math.random()) + minX
      newY = Math.floor((maxY - minY) * Math.random()) + minY
      {
        left: newX
        top: newY
      }

    precisaGirar = (newq, oldq, mosquito) ->
      newq.left > oldq.left and !mosquito.hasClass('flipAE') or newq.left < oldq.left and mosquito.hasClass('flipAE')

    animateAedes = (mosquito) ->
      angle = undefined
      newq = undefined
      oldq = undefined
      origAngle = undefined
      speed = undefined
      if !mosquito[0]
        return console.log('Morreu.')
      newq = makeNewPosition()
      oldq = mosquito.offset()
      origAngle = mosquito[0].angle or 0
      angle = Math.atan2(newq.top - (oldq.top), newq.left - (oldq.left)) / Math.PI * 180 - 90
      if precisaGirar(newq, oldq, mosquito)
        mosquito.removeClass('flyAE').addClass 'rotateAE'
      setTimeout (->
        if newq.left > oldq.left
          mosquito.addClass 'flipAE'
        else
          mosquito.removeClass 'flipAE'
        mosquito.removeClass('rotateAE').addClass 'flyAE'
        return
      ), 60
      speed = calcSpeed(oldq, newq)
      mosquito.animate {
        left: newq.left
        top: newq.top
      }, speed, ->
        setTimeout (->
          animateAedes mosquito
          return
        ), 100
        return
      return

    calcSpeed = (prev, next) ->
      dist = undefined
      x = undefined
      y = undefined
      x = Math.abs(prev.left - (next.left))
      y = Math.abs(prev.top - (next.top))
      dist = Math.sqrt(x * x + y * y)
      Math.log(dist / 10 + 1) * 900

    $('head').append '<style type="text/css">' + '.flipAE { transform: scaleX(-1); }' + '.aegypti { display: block; z-index:9999; position:absolute; width: 60px; height: 50px; margin: 2% auto; background: url("http://hackerativismo.github.io/viral-aedes-aegypti/aedes.png")' + 'left center; }' + '.flyAE { animation: play .2s steps(6) infinite; }' + '.aegypti { cursor: url("http://hackerativismo.github.io/viral-aedes-aegypti/raquete.png") 30 35, pointer; }' + '@keyframes play { 100% { background-position: -360px; } }' + '.rotateAE { background-position: 180px; }' + '@media (min-width: 940px) { body #aegypti-intervencao #aegypti-close { width: 42px; height: 42px; margin-left: 348px; top: 42px; left: 50%; } }' + '#aegypti-intervencao { width: 100%; margin-top: -140px; z-index:9998; position: fixed; top: 50%; text-align: center; }' + '#aegypti-intervencao #aegypti-banner:focus { outline: none !important; }' + '#aegypti-intervencao #aegypti-close { width: 4.4%; height: 12%; display: block; position: absolute; top: 12.4%; left: 87.2%; overflow: hidden; text-indent: -999999px; }' + '#aegypti-intervencao img { width: 100%; max-width: 939px;' + '</style>'
    minY = 20
    maxY = 200
    minX = 50
    maxX = $(document.body).width() - 100
    jQuery(document).ready ($) ->
      i = undefined
      i = 0
      while i < 3
        setTimeout (->
          mosquito = undefined
          mosquito = $('<a href="http://combateaedes.saude.gov.br/"' + ' target="_blank" class="aegypti flyAE"' + ' id="aegypti' + i + '" style="top:-90px"></a>').appendTo(document.body)
          mosquito.css left: makeNewPosition().left + 'px'
          mosquito.click ->
            if !$('#aegypti-intervencao').length
              $(document.body).append '<div id="aegypti-intervencao"><a href="http://combateaedes.saude.gov.br/" id="aegypti-banner" target="_blank" title="Faça sua parte"><img src="http://hackerativismo.github.io/viral-aedes-aegypti/aviso.png" alt="Não adianta apenas matar o mosquito. Não podemos deixar ele nascer. E isso depende de todos nós." /></a><a href="#" id="aegypti-close" title="Fechar">Fechar</a></div>'
              $('#aegypti-intervencao #aegypti-banner').focus()
              $('#aegypti-intervencao a').on 'click', ->
                $(this).parent().fadeOut()
                $('.aegypti').css 'display', 'none'
                return
            else
              $('#aegypti-intervencao').fadeIn()
              $('#aegypti-intervencao #aegypti-banner').focus()
            mosquito.remove()
            mosquito[0] = null
            false
          mosquito.mouseover ->
            mosquito.stop()
            return
          mosquito.mouseout ->
            animateAedes mosquito
            return
          animateAedes mosquito
          return
        ), (i * 2) ** 2 * 1000
        i++
      return
    return

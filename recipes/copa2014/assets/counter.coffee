window._barrabrasil.copa_counter = () ->
    r = undefined
    t = undefined
    c = undefined
    h = undefined
    e = undefined
    a = undefined
    r = document.getElementById("counter-barra-brasil")
    t = new Date()
    c = new Date(2014, 5, 12, 0, 0, 0)
    h = ""
    e = String(Math.round(Math.abs((t.getTime() - c.getTime()) / (24 * 60 * 60 * 1000))) + 1)
    a = (e).split("")

    i = 0

    while i < a.length
      h += "<span>" + a[i] + "</span>"
      i++
    if t.getTime() < c.getTime()
      if parseInt(e) > 1
        r.innerHTML = "Faltam " + h + " dias para a Copa"
      else r.innerHTML = "Amanh&atilde; come&ccedil;a a Copa!"  if parseInt(e) is 1
    return

  copa_counter()
  return

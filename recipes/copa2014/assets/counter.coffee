window._barrabrasil.copa_counter = () ->
    r = undefined
    t = undefined
    c = undefined
    h = undefined
    e = undefined
    a = undefined
    r = document.getElementById("counter-barra-brasil")
    t = new Date()
    c = new Date(2014, 5, 12, 23, 59, 59)
    h = ""
    e = String(Math.round(Math.abs((t.getTime() - c.getTime()) / (24 * 60 * 60 * 1000))))
    a = e.split("")

    i = 0

    while i < a.length
        h += "<span>" + a[i] + "</span>"
        i++
    r.innerHTML = h
    return

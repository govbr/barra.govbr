_gaq = _gaq or []
_gaq.push ["_setAccount", "UA-34001692-4"]
_gaq.push ["_setDomainName", "gov.br"]
_gaq.push ["_trackPageview"]
(->
  ga = document.createElement("script")
  ga.type = "text/javascript"
  ga.async = true
  ga.src = ((if "https:" is document.location.protocol then "https://ssl" else "http://www")) + ".google-analytics.com/ga.js"
  s = document.getElementsByTagName("script")[0]
  s.parentNode.insertBefore ga, s
)()

  u = ((if ("https:" is document.location.protocol) then "https" else "http")) + "://189.9.150.35/piwik/"
  _paq.push [
    "setTrackerUrl"
    u + "piwik.php"
  ]
  _paq.push [
    "setSiteId"
    1
  ]
  d = document
  g = d.createElement("script")
  s = d.getElementsByTagName("script")[0]
  g.type = "text/javascript"
  g.defer = true
  g.async = true
  g.src = u + "piwik.js"
  s.parentNode.insertBefore g, s


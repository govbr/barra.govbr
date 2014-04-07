  head = document.getElementsByTagName("head")[0]
  novoScript = document.createElement("script")
  tipo = document.createAttribute("type")
  tipo.nodeValue = "text/javascript"
  src = document.createAttribute("src")
  src.nodeValue = "//coletajavascript.serpro.gov.br/estatistica.js"
  novoScript.setAttributeNode tipo
  novoScript.setAttributeNode src
  head.appendChild novoScript

!function(){var e,a,t,r,i,s,o,l='<div id="wrapper-barra-brasil"><div class="brasil-flag"><a href="http://brasil.gov.br" class="link-barra">Brasil</a></div><span class="acesso-info"><a href="http://brasil.gov.br/barra#acesso-informacao" class="link-barra">Acesso &agrave; informa&ccedil;&atilde;o</a></span><ul class="list"><li class="list-item first"><a href="http://brasil.gov.br/barra#participe" class="link-barra">Participe</a></li><li class="list-item"><a href="http://www.servicos.gov.br/" class="link-barra">Servi&ccedil;os</a></li><li class="list-item"><a href="http://www.planalto.gov.br/legislacao" class="link-barra">Legisla&ccedil;&atilde;o</a></li><li class="list-item last last-item"><a href="http://brasil.gov.br/barra#orgaos-atuacao-canais" class="link-barra">Canais</a></li></ul></div>';a=document.getElementById("barra-brasil"),a&&(a.parentNode.removeChild(a),t=document.getElementsByTagName("head")[0],e=document.getElementsByTagName("body")[0],s=document.createElement("link"),r=document.createAttribute("href"),o=document.createElement("div"),i=document.createAttribute("id"),i.nodeValue="barra-brasil",o.setAttributeNode(i),o.innerHTML=l,e.insertBefore(o,e.childNodes[0])),window._barrabrasil={insere_css:function(e){var a,r,i;return r=document.createElement("style"),i=document.createAttribute("type"),i.nodeValue="text/css",a=document.createAttribute("media"),a.nodeValue="all",r.setAttributeNode(i),r.setAttributeNode(a),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)),t.appendChild(r)}};var t,d,n,c;t=document.getElementsByTagName("head")[0],d=document.createElement("script"),c=document.createAttribute("type"),c.nodeValue="text/javascript",n=document.createAttribute("src"),n.nodeValue="//coletajavascript.serpro.gov.br/estatistica.js",d.setAttributeNode(c),d.setAttributeNode(n),t.appendChild(d)}(),window._barrabrasil.insere_css('#barra-brasil div,#barra-brasil a,#barra-brasil ul,#barra-brasil li{margin:0;padding:0;border:0;font-size:100%;font-family:inherit;vertical-align:baseline}#barra-brasil ul{list-style:none}@font-face{font-family:"Open Sans";font-style:normal;font-weight:700;src:local("Open Sans Bold"),local("OpenSans-Bold"),url("//barra.brasil.gov.br/static/opensans-bold.woff") format("woff")}#barra-brasil{height:32px;background:#f1f1f1;font-weight:bold;font-size:12px;line-height:32px;font-family:"Open Sans",Arial,Helvetica,sans-serif}#barra-brasil a{text-decoration:none}div#wrapper-barra-brasil{position:relative;overflow:hidden;margin:0 auto;width:100%;max-width:960px}#barra-brasil .brasil-flag{float:left;padding:7px 0 6px;width:115px;height:19px;border-right:2px solid #dfdfdf}#barra-brasil .brasil-flag .link-barra{display:block;padding-left:42px;width:43px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAATCAIAAAABJ4pRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABINJREFUeNqUVFtsFFUYPrfdmdnLbLe021baQqWUtdJKL5QiASPiNVqC0TYqUWLShJQmRH3RqPHFRKJvQqIPQNSAAcMDptGEiKjYpLZIkSqGXqjdFlppd3vb7c7Ozpxz/M+2wZD44snszOzJnP//vv///g9XnNiXtNISI1gYq4eUEu4CC7SyiLpJgtSOIJKg/1ySB3x+NmsvJLNpgVUwlAu08iIkzi2pUhHIAa/q1L9p7l6YWmmHEOSBWJD6LixwJ7DDAKR06c6imQOVYxoRyEV4BR3JBYfvqNqBtILrSGNEKgoCsVxWDMmxgAOADeDjQsP+oHbo1egk7B+Mju/vq7kwVYhohsAxoiogiIM5hBaSUIBFfS21WRcOSwUHOwgTqoJR+O0pv31u56XmUKrvt4o/RyNrjVRHw40iLdU9Hck4DPBQxOQKK/XQqQa7nGNb8UICSUoE4y4rCyweqh164b7Jk12N737x2NjtfMAeCDit268e7jj7yOqfX++p+ebvQk5coAB8BQIMroqaf7xt3p4TUATgxj0Y0wOVN96uHomE3I+Ob37zSJvUHURshjySIZ4JPLhp+IcPj3h1eSZ2zxu/R8cXDeThuSLJkGZSY/fGjGOrenG9xlz8vPnK/g0xEwprl52PH9ryUGRLk1lfXWqGCcE0lUqOjxeHVy01141V+5Mvlk+lOLmcAOwC6OpMo8FnqlOCh2j2taqRE1sHKk2LuFJq6NveumNd9f0Dt2IjC1aGVKwzdz1cUryaxSasW9Oo/dFfoaEB6jxdOl2Xt3BtwYw7Xh/VmQNNcNHj5fH3N40CQgnNAAUQMjgh+y/dpIblN9j14fHuHqEFvPUP5L3Svp4mHNtGmgbaVF1oWZNIi8GXextALUpEhLqnJ0o3f9fcEw9iD3RFCaUiMmvmG/lhI50VBQX6ujX5ju3+dHHm1Mmb9dGsxyRKSwylHNLRt2HvL42O4C5IhsLsgEII74+Hd1zY+s5AdMklguMnmkaLwn9RGgr7dSfLk5ZreGhJUdD0+oz0ZxSOMNQ1VdB4fscnw5VCiOUBpb7d91vcklBJJpDwXpwOn50qKdXs2tLZpoqJU99XxVPBbMayXRnOK/Dp5p5tZzpbu0cT+sErG9/6o2rW9iLKQbOget2jQbgay3UIJrlhlJSK6Yz3dKx4dD74Ut3Ivu2X5xe8CSvopdm1kdh7e7/sfO7Ho4PlrT0NvTMhTISaaRhUoImITr244Njz8WwSVKOMhBI1hdIBMQuXlARShxuvPbt+3k0gx9GMsDVp0c7emq8nSiSFjzkVlCuKfHl+Q0aQai21Gb4E7SA59wDWGLLBg+Kk6/lqrKw/4dtWOLfKn/74+r2t3fVX5/IwcyExIBAKFFWOhskyWVx4tG3GmUfKCFRbOHYBNjiC6hBkBTrQRl+mSLeHZkOYOXeMRxIFCb6SME5gYJiGvH7MPn0q5wBCgqkgF4xBEVfdhksTyMmNpFT/chJQJQbkgitE8o73gRe4HsRYe/RJy86IFYtU1pVzSqxC/J8F5fMz/z8CDAAkCSSg0qSX5AAAAABJRU5ErkJggg==") 8px center no-repeat;text-transform:uppercase;line-height:19px}#barra-brasil .acesso-info{position:absolute;left:130px}#barra-brasil .list{position:absolute;top:0;right:0}#barra-brasil .list .first{border-left:2px solid #dfdfdf}#barra-brasil .list-item{display:inline-block;padding:0 15px 0 13px;height:32px;border-right:2px solid #dfdfdf}#barra-brasil .link-barra{color:#606060}@media screen and (max-width: 668px){#barra-brasil .list{top:-100px}}@media screen and (min-width: 960px){#wrapper-barra-brasil{width:960px}}'),!function(){var e,a,t,r,i,s,o,l,d,n,c,b,m,p,g,A='<div id="wrapper-footer-brasil"><a href="http://www.acessoainformacao.gov.br/"><span class="logo-acesso-footer"/></a></div>';i=document.getElementById("footer-brasil"),i&&(i.parentNode.removeChild(i),s=document.getElementsByTagName("head")[0],t=document.getElementsByTagName("body")[0],n=document.createElement("link"),o=document.createAttribute("href"),b=document.createElement("div"),l=document.createAttribute("id"),l.nodeValue="footer-brasil",b.setAttributeNode(l),b.innerHTML=A,p=document.getElementsByTagName("script"),c=p[p.length-1],m=c.src.replace(/^[^\?]+\??/,""),a=m.split(/[;&]/),g="cor",1===a.length&&(e=a[0].split("="),2===e.length&&(d=unescape(e[0]),g=unescape(e[1]),g=g.replace(/\+/g," "))),"cor"===g&&(g="verde"),"verde"!==g&&"azul"!==g&&"amarelo"!==g&&"branco"!==g&&(g="verde"),r=document.createAttribute("class"),r.nodeValue="footer-brasil-"+g,b.setAttributeNode(r),t.insertBefore(b,t.lastChild)),window._footerbrasil={insere_css:function(e){var a,t,r;return t=document.createElement("style"),r=document.createAttribute("type"),r.nodeValue="text/css",a=document.createAttribute("media"),a.nodeValue="all",t.setAttributeNode(r),t.setAttributeNode(a),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),s=document.getElementsByTagName("head")[0],s.appendChild(t)}}}(),window._footerbrasil.insere_css('.footer-brasil-verde{background:none repeat scroll 0% 0% #1a5027;padding:1em 0px;max-width:100%}.footer-brasil-amarelo{background:none repeat scroll 0% 0% #f5c516;padding:1em 0px;max-width:100%}.footer-brasil-azul{background:none repeat scroll 0% 0% #3b69b3;padding:1em 0px;max-width:100%}.footer-brasil-branco{background:none repeat scroll 0% 0% #fff;padding:1em 0px;max-width:100%}div#wrapper-footer-brasil{position:relative;overflow:hidden;margin:0 auto;width:100%;max-width:960px}#wrapper-footer-brasil .logo-acesso-footer{float:left;width:107px;background:url("data:image/png;base64,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") center no-repeat;text-transform:uppercase;height:49px}div#wrapper-footer-brasil{position:relative;overflow:hidden;margin:0 auto;width:100%;max-width:960px}@media screen and (min-width: 960px){#wrapper-footer-brasil{width:960px}}');
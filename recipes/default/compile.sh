#!/bin/sh
export PATH=$PATH:../../node_modules/.bin/
variable-replacer assets/conteudo-barra_i18n.html assets/conteudo-barra.html    --data=assets/i18n/traducao_pt_BR.json
variable-replacer assets/conteudo-barra_i18n.html assets/conteudo-barra-fr.html --data=assets/i18n/traducao_fr.json
variable-replacer assets/conteudo-barra_i18n.html assets/conteudo-barra-es.html --data=assets/i18n/traducao_es.json
variable-replacer assets/conteudo-barra_i18n.html assets/conteudo-barra-en.html --data=assets/i18n/traducao_en.json
../../venv/bin/assetgen ./barra-brasil-1.yaml
../../venv/bin/assetgen ./barra-brasil-2.yaml
../../venv/bin/assetgen ./footer-brasil-1.yaml
../../venv/bin/assetgen ./footer-brasil-2.yaml
../../venv/bin/assetgen ./barra-brasil-final.yaml


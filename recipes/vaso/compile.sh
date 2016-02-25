#!/bin/sh
export PATH=$PATH:../../node_modules/.bin/
coffeescript-concat ./assets/campanha.coffee -I ./assets/ -o ./assets/barra-brasil.coffee
../../venv/bin/assetgen ./barra-brasil-1.yaml
../../venv/bin/assetgen ./barra-brasil-2.yaml
../../venv/bin/assetgen ./footer-brasil-1.yaml
../../venv/bin/assetgen ./footer-brasil-2.yaml
../../venv/bin/assetgen ./barra-brasil-final.yaml


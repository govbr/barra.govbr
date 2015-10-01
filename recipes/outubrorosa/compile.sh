#!/bin/sh
export PATH=$PATH:../../node_modules/.bin/
../../venv/bin/assetgen ./barra-brasil-1.yaml
../../venv/bin/assetgen ./barra-brasil-2.yaml
#../../venv/bin/assetgen ./footer-brasil-1.yaml
#../../venv/bin/assetgen ./footer-brasil-2.yaml
../../venv/bin/assetgen ./barra-brasil-final.yaml


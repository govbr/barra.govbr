#!/bin/bash
set -e -x -o pipefail
export DEBIAN_FRONTEND='noninteractive'

sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update

apt-get install -y \
  python-dev \
  python-pip \
  nodejs \
  ruby

pip install \
  Flask \
  config \
  assetgen

npm install -g \
  coffee-script \
  uglify-js \
  express \
  ejs \
  zombie \
  mocha \
  chai

gem install sass

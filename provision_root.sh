#!/bin/bash
set -e -x -o pipefail
export DEBIAN_FRONTEND='noninteractive'

sudo apt-get update

apt-get install -y \
  git \
  python-dev \
  python-pip \
  python-virtualenv \
  ruby

gem install sass


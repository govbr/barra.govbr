#!/bin/bash
set -e -x -o pipefail
export DEBIAN_FRONTEND='noninteractive'

apt-get update

apt-get install -y \
  apt-transport-https \
  ca-certificates \
  curl \
  git \
  linux-image-extra-$(uname -r) \
  linux-image-extra-virtual \
  python-dev \
  python-pip \
  python-virtualenv \
  ruby

curl -fsSL https://yum.dockerproject.org/gpg | sudo apt-key add -

add-apt-repository \
       "deb https://apt.dockerproject.org/repo/ \
       ubuntu-$(lsb_release -cs) \
       main"

apt-get update

apt-get -y install docker-engine

usermod -aG docker ubuntu

curl -L "https://github.com/docker/compose/releases/download/1.10.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose
  
gem install sass


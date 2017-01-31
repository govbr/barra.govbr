#!/bin/bash
set -e -x -o pipefail
export DEBIAN_FRONTEND='noninteractive'

cd /home/$(whoami)

# Installing nvm
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

# This enables NVM without a logout/login
export NVM_DIR="/home/"$(whoami)"/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

# Install a node and alias
nvm install node
nvm alias default node

rm -Rf barra-govbr/
GIT_SSL_NO_VERIFY=true git clone http://portal.softwarepublico.gov.br/gitlab/govbr/barra-govbr.git

cd barra-govbr

PROFILE=default make test

#!/bin/sh
echo ""
if [ -n "$1" ] && test -d "recipes/$1"
then
    cd recipes/$1
    sh ./compile.sh
    python ../../app/barrabrasil.py $1
else
    echo "Error. Profile $1 does not exist."
fi

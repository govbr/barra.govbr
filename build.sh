#!/bin/sh
echo ""
if [ -n "$1" ]
then
    profile=$1
else
    profile='default'
fi

if test -d "recipes/$profile"
then
    cd recipes/$profile
    sh ./compile.sh
    cd ../../app
    python barrabrasil.py $profile
else
    echo "Error. Profile $1 does not exist."
fi

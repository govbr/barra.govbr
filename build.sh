#!/bin/sh
echo ""
echo ""
if test -f "recipes/$1"
then
    sh recipes/$1/compile.sh
    cp recipes/$1/build/barra-brasil.js app/templates/$1/
else
    echo "Error. Profile $1 does not exist."
fi

#!/bin/sh
echo ""
echo ""
if test -f "recipes/$1"
then
    sh recipes/$1/compile.sh
else
    echo "Error. Profile $1 does not exist."
fi

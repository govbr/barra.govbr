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
    touch profile
    echo 'profile :' $profile > profile
    echo 'date : "'$(date -R)'"'>> profile
	 mkdir templates/$profile
    cp templates/$profile/* static/ #Copiando enquanto a barra é estática.
    python barrabrasil.py 
else
    echo "Error. Profile $1 does not exist."
fi

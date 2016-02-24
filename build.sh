#!/bin/sh
echo ""
if [ -n "$1" ]
then
    profile=$1
else
    profile=$(cat app/profile | awk 'FNR == 1 {print $3}')
fi

if test -d "recipes/$profile"
then
    cd recipes/$profile
	 if test ! -d "../../templates/$profile"
	 then
			ln -s ../../recipes/$profile/build ../../app/templates/$profile
	 fi	
    sh ./compile.sh
    cd ../../app
    touch profile
    echo 'profile :' $profile > profile
    echo 'date : "'$(date -R)'"'>> profile
    cp templates/$profile/barra-brasil.js static/ #Copiando enquanto a barra é estática.
else
    echo "Erro. O profile '$profile' não existe."
fi

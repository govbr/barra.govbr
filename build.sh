#!/bin/sh
echo ""
if [ -n "$1" ]
then
    profile=$1
else
    profile="default"
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
    cp templates/$profile/barra-brasil-en.js static/ #Copiando enquanto a barra é estática.
    cp templates/$profile/barra-brasil-fr.js static/ #Copiando enquanto a barra é estática.
    cp templates/$profile/barra-brasil-es.js static/ #Copiando enquanto a barra é estática.
    cp templates/$profile/barra-brasil.js ../docker/public_html/barra.js.pt-br #Copiando enquanto a barra é estática.
    cp templates/$profile/barra-brasil-en.js ../docker/public_html/barra.js.en #Copiando enquanto a barra é estática.
    cp templates/$profile/barra-brasil-fr.js ../docker/public_html/barra.js.fr #Copiando enquanto a barra é estática.
    cp templates/$profile/barra-brasil-es.js ../docker/public_html/barra.js.es #Copiando enquanto a barra é estática.
    cp templates/exemplo.html ../docker/public_html/index.html #Copiando enquanto a barra é estática.
    cp static/opensans-bold.woff ../docker/public_html/static/ #Copiando enquanto a barra é estática.
    cp static/jquery-2.1.3.min.js ../docker/public_html/static/jquery.js #Copiando enquanto a barra é estática.
    echo "Copiado"
else
    echo "Erro. O profile '$profile' não existe."
fi

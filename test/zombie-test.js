var chai = require("chai"), plugin = require("chai-jq");
chai.use(plugin);

var expect = require("chai").expect,
	Browser = require("zombie");

describe("Testes de conteúdo de HTML da barra", function() {
	var browser, barraUrl, barraFonte, barraJS;
	barraUrl = "http://localhost/";
   barraFonte = barraUrl + "static/opensans-bold.woff";
   barraJS = barraUrl +"barra.js";

	beforeEach(function() {
		browser = new Browser();
		browser.runScripts = true;
		browser.headers = {};
	});

	it("trocar o conteúdo do #barra-brasil pelo correto em pt-BR", function(done) {
			browser.headers['Accept-Language'] = 'pt-BR';
			browser.visit(barraUrl, function() {
         var inner_barra = browser.document.getElementById("barra-brasil");
			expect(inner_barra.innerHTML).to.equal("<div id=\"wrapper-barra-brasil\"><div class=\"brasil-flag\"><a href=\"http://brasil.gov.br\" class=\"link-barra\">Brasil</a></div><span class=\"acesso-info\"><a href=\"http://www.servicos.gov.br/?pk_campaign=barrabrasil&amp;orgao=http://estruturaorganizacional.dados.gov.br/id/unidade-organizacional/2981\" class=\"link-barra\" id=\"barra-brasil-orgao\">Serviços</a></span><nav><ul class=\"list\"><li><a href=\"#\" id=\"menu-icon\"></a></li><li class=\"list-item first\"><a href=\"http://brasil.gov.br/barra#participe\" class=\"link-barra\">Participe</a></li><li class=\"list-item\"><a href=\"http://brasil.gov.br/barra#acesso-informacao\" class=\"link-barra\">Acesso à informação</a></li><li class=\"list-item\"><a href=\"http://www.planalto.gov.br/legislacao\" class=\"link-barra\">Legislação</a></li><li class=\"list-item last last-item\"><a href=\"http://brasil.gov.br/barra#orgaos-atuacao-canais\" class=\"link-barra\">Canais</a></li></ul></nav><a class=\"logo-vlibras\" href=\"http://www.vlibras.gov.br/\" aria-label=\"Acessível em Libras\"></a></div>");
			done();
		});
   });

	it("trocar o conteúdo do #barra-brasil pelo correto em en", function(done) {
			browser.headers['Accept-Language'] = 'en';
			browser.visit(barraUrl, function() {
         var inner_barra = browser.document.getElementById("barra-brasil");
			expect(inner_barra.innerHTML).to.equal("<div id=\"wrapper-barra-brasil\"><div class=\"brasil-flag\"><a href=\"http://brasil.gov.br\" class=\"link-barra\">Brazil</a></div><span class=\"acesso-info\"><a href=\"http://www.servicos.gov.br/?pk_campaign=barrabrasil&amp;orgao=http://estruturaorganizacional.dados.gov.br/id/unidade-organizacional/2981\" class=\"link-barra\" id=\"barra-brasil-orgao\">Services</a></span><nav><ul class=\"list\"><li><a href=\"#\" id=\"menu-icon\"></a></li><li class=\"list-item first\"><a href=\"http://brasil.gov.br/barra#participe\" class=\"link-barra\">Participate</a></li><li class=\"list-item\"><a href=\"http://brasil.gov.br/barra#acesso-informacao\" class=\"link-barra\">Information access</a></li><li class=\"list-item\"><a href=\"http://www.planalto.gov.br/legislacao\" class=\"link-barra\">Legislation</a></li><li class=\"list-item last last-item\"><a href=\"http://brasil.gov.br/barra#orgaos-atuacao-canais\" class=\"link-barra\">Information channels</a></li></ul></nav><a class=\"logo-vlibras\" href=\"http://www.vlibras.gov.br/\" aria-label=\"Acessible in Brazilian Sign Language\"></a></div>");
			done();
		});
   });

	it("trocar o conteúdo do #barra-brasil pelo correto em es", function(done) {
			browser.headers['Accept-Language'] = 'es';
			browser.visit(barraUrl, function() {
         var inner_barra = browser.document.getElementById("barra-brasil");
			expect(inner_barra.innerHTML).to.equal("<div id=\"wrapper-barra-brasil\"><div class=\"brasil-flag\"><a href=\"http://brasil.gov.br\" class=\"link-barra\">Brasil</a></div><span class=\"acesso-info\"><a href=\"http://www.servicos.gov.br/?pk_campaign=barrabrasil&amp;orgao=http://estruturaorganizacional.dados.gov.br/id/unidade-organizacional/2981\" class=\"link-barra\" id=\"barra-brasil-orgao\">Servicios</a></span><nav><ul class=\"list\"><li><a href=\"#\" id=\"menu-icon\"></a></li><li class=\"list-item first\"><a href=\"http://brasil.gov.br/barra#participe\" class=\"link-barra\">Participar</a></li><li class=\"list-item\"><a href=\"http://brasil.gov.br/barra#acesso-informacao\" class=\"link-barra\">Acceso a la información</a></li><li class=\"list-item\"><a href=\"http://www.planalto.gov.br/legislacao\" class=\"link-barra\">Legislación</a></li><li class=\"list-item last last-item\"><a href=\"http://brasil.gov.br/barra#orgaos-atuacao-canais\" class=\"link-barra\">Canales de información</a></li></ul></nav><a class=\"logo-vlibras\" href=\"http://www.vlibras.gov.br/\" aria-label=\"Acesso a la Libras\"></a></div>");
			done();
		});
   });

	it("trocar o conteúdo do #barra-brasil pelo correto em fr", function(done) {
			browser.headers['Accept-Language'] = 'fr';
			browser.visit(barraUrl, function() {
         var inner_barra = browser.document.getElementById("barra-brasil");
			expect(inner_barra.innerHTML).to.equal("<div id=\"wrapper-barra-brasil\"><div class=\"brasil-flag\"><a href=\"http://brasil.gov.br\" class=\"link-barra\">Brésil</a></div><span class=\"acesso-info\"><a href=\"http://www.servicos.gov.br/?pk_campaign=barrabrasil&amp;orgao=http://estruturaorganizacional.dados.gov.br/id/unidade-organizacional/2981\" class=\"link-barra\" id=\"barra-brasil-orgao\">Prestations de service</a></span><nav><ul class=\"list\"><li><a href=\"#\" id=\"menu-icon\"></a></li><li class=\"list-item first\"><a href=\"http://brasil.gov.br/barra#participe\" class=\"link-barra\">Prende part</a></li><li class=\"list-item\"><a href=\"http://brasil.gov.br/barra#acesso-informacao\" class=\"link-barra\">Accès à l'information</a></li><li class=\"list-item\"><a href=\"http://www.planalto.gov.br/legislacao\" class=\"link-barra\">Législation</a></li><li class=\"list-item last last-item\"><a href=\"http://brasil.gov.br/barra#orgaos-atuacao-canais\" class=\"link-barra\">Les canaux d'information</a></li></ul></nav><a class=\"logo-vlibras\" href=\"http://www.vlibras.gov.br/\" aria-label=\"Accessible en brésilien langue des signes\"></a></div>");
			done();
		});
   });
	
   it("trocar o conteúdo do #footer-brasil pelo correto", function(done) {
		   browser.visit(barraUrl, function() {
         var inner_footer = browser.document.getElementById("footer-brasil");
			expect(inner_footer.innerHTML).to.equal("<div id=\"wrapper-footer-brasil\"><a href=\"http://www.acessoainformacao.gov.br/\"><span class=\"logo-acesso-footer\"></span></a><a href=\"http://www.brasil.gov.br/\"><span class=\"logo-brasil-footer\"></span></a></div>");
			done();
		});
	});

   it("A fonte deve estar respondendo", function(done) {
		   browser.visit(barraFonte, function() {
			expect(browser.response.headers._headers[10]).to.include.members(['etag']);
			expect(browser.response.headers._headers[11]).to.include.members(['access-control-allow-origin', '*']);
			expect(browser.response.headers._headers[12]).to.include.members(["content-type","application/x-font-woff"]);
         expect(browser.response.status).to.equal(200);
			done();
		});
	});

   it("Cabeçalhos HTTP do barra.js devem estar ok", function(done) {
			browser.headers['Accept-Encoding'] = 'gzip';		   
			browser.visit(barraJS, function() {
			expect(browser.response.headers._headers[9]).to.include.members(['content-encoding', 'gzip']);
			expect(browser.response.headers._headers[10]).to.include.members(['cache-control','max-age=604800, public']);
			expect(browser.response.headers._headers[12]).to.include.members(['etag']);
			expect(browser.response.headers._headers[13]).to.include.members(['access-control-allow-origin', '*']);
         expect(browser.response.status).to.equal(200);
			done();
		});
	});

   it("Barra responde 304 com etag", function(done) {
			browser.visit(barraJS, function() {

			browser.headers['If-Modified-Since'] = browser.response.headers._headers[7][1];
			browser.visit(barraJS, function() {
	         expect(browser.response.status).to.equal(304);
				done();
			});
		});
	});

   it("a barra deve ter o css correto para visualizacao maior que 960px");

   it("a barra deve ter o css correto para visualização menor que 960px");

   it("o rodapé deve ter o css correto", function(done) {
		browser.visit(barraUrl, function() {
         var $ = browser.window.$;

         var logo_acesso_footer = $("#wrapper-footer-brasil a span");
         expect(logo_acesso_footer).to.have.$class("logo-acesso-footer");

         var logo_brasil_footer = $("#wrapper-footer-brasil a").next().children();
         expect(logo_brasil_footer).to.have.$class("logo-brasil-footer");

			done();
		});
	});
});

var chai = require("chai"), plugin = require("chai-jq");
chai.use(plugin);

var expect = require("chai").expect,
	Browser = require("zombie"),
	app = require("./app");

describe("Testes de conteúdo de HTML da barra", function() {
	var server, browser, barraUrl;
	barraUrl = "http://localhost:3000/";
	before(function() {
		server = app.listen(3000);
	});

	beforeEach(function() {
		browser = new Browser();
		browser.runScripts = true;
	});

	after(function() {
		// depois dos testes fechar o servidor
		server.close();
	});

	it("trocar o conteúdo do #barra-brasil pelo correto", function(done) {
			browser.visit(barraUrl, function() {
         var inner_barra = browser.document.getElementById("barra-brasil");
			expect(inner_barra.innerHTML).to.equal("<div id=\"wrapper-barra-brasil\"><div class=\"brasil-flag\"><a href=\"http://brasil.gov.br\" class=\"link-barra\">Brasil</a></div><span class=\"acesso-info\"><a href=\"http://www.servicos.gov.br/?pk_campaign=barrabrasil&amp;orgao=http://estruturaorganizacional.dados.gov.br/id/unidade-organizacional/2981\" class=\"link-barra\" id=\"barra-brasil-orgao\">Serviços</a></span><nav><ul class=\"list\"><li><a href=\"#\" id=\"menu-icon\"></a></li><li class=\"list-item first\"><a href=\"http://brasil.gov.br/barra#participe\" class=\"link-barra\">Participe</a></li><li class=\"list-item\"><a href=\"http://brasil.gov.br/barra#acesso-informacao\" class=\"link-barra\">Acesso à informação</a></li><li class=\"list-item\"><a href=\"http://www.planalto.gov.br/legislacao\" class=\"link-barra\">Legislação</a></li><li class=\"list-item last last-item\"><a href=\"http://brasil.gov.br/barra#orgaos-atuacao-canais\" class=\"link-barra\">Canais</a></li></ul></nav><a class=\"logo-vlibras\" href=\"http://www.vlibras.gov.br/\" aria-label=\"Acessível em Libras\"></a></div>");
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

var expect = require("chai").expect, assert = require("chai").assert,
	Browser = require("zombie"),
	app = require("./app");

describe("Testes de conteúdo de HTML da barra", function() {
	var server, browser, barraUrl;
	barraUrl = "http://localhost:3000/";
	before(function() {
		// before ALL the tests, start our node server (on a test port, 3001)

		server = app.listen(3000);
	});

	beforeEach(function() {
		// before EACH test, create a new zombie browser
		// 
		// some useful options when things go wrong:
		// debug: true  =  outputs debug information for zombie
		// waitDuration: 500  =  will only wait 500 milliseconds
		//   for the page to load before moving on
		browser = new Browser();
      browser.runScripts = true;
	});

	after(function() {
		// after ALL the tests, close the server
		server.close();
	});

	it("trocar o conteúdo do #barra-brasil pelo correto", function(done) {
		browser.visit(barraUrl, function() {

         var inner_barra = browser.document.getElementById("barra-brasil");
			console.log(inner_barra.classList);
			expect(inner_barra.innerHTML).to.equal("<div id=\"wrapper-barra-brasil\"><div class=\"brasil-flag\"><a href=\"http://brasil.gov.br\" class=\"link-barra\">Brasil</a></div><span class=\"acesso-info\"><a href=\"http://brasil.gov.br/barra#acesso-informacao\" class=\"link-barra\">Acesso à informação</a></span><nav><a href=\"#\" id=\"menu-icon\"></a><ul class=\"list\"><a href=\"http://brasil.gov.br/barra#participe\" class=\"link-barra\"><li class=\"list-item first\">Participe</li></a><a href=\"http://www.servicos.gov.br/?pk_campaign=barrabrasil\" class=\"link-barra\"><li class=\"list-item\">Serviços</li></a><a href=\"http://www.planalto.gov.br/legislacao\" class=\"link-barra\"><li class=\"list-item\">Legislação</li></a><a href=\"http://brasil.gov.br/barra#orgaos-atuacao-canais\" class=\"link-barra\"><li class=\"list-item last last-item\">Canais</li></a></ul></nav></div>");
			done();
		});
   });
	
   it("trocar o conteúdo do #footer-brasil pelo correto", function(done) {
		browser.visit(barraUrl, function() {

         var inner_barra = browser.document.getElementById("footer-brasil");
			assert(inner_barra.innerHTML === "<div id=\"wrapper-footer-brasil\"><a href=\"http://www.acessoainformacao.gov.br/\"><span class=\"logo-acesso-footer\"></span></a><a href=\"http://www.brasil.gov.br/\"><span class=\"logo-brasil-footer\"></span></a></div>",
				"Conteúdo do#footer-brasil deve ser o provido pela barra.js");

			done();
		});

	});
});

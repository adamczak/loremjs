describe("ipsum service", function() {
	var service;

	beforeEach(function() {
		module("ipsum");
		inject(function(ipsumService) {
			service = ipsumService;
		});
	})

	it("should return a number of words", function() {
		var actual = service.words(5);
		expect(actual.split(" ").length).toBe(5);
	});

	it("should return sentences", function() {
		var actual = service.sentences(5);
		expect(actual.length > 0).toBe(true);
	});

	it("should return paragraphs", function() {
		var actual = service.paragraphs(5);
		expect(actual.length > 0).toBe(true);
	});
});

describe("ipsumWords directive", function() {
	var elem
		,scope
		,compiled;

	beforeEach(function() {
		module("ipsum");
	
		inject(function($rootScope, $compile) {
			compile = $compile;
			scope = $rootScope;
			var html = "<div ipsum-words='10'></div>";
			elem = angular.element(html);

			compiled = $compile(elem)(scope);

			scope.$digest();
			scope.$apply();
		});

	});

	it("should set the text to the number of words", function() {
		expect(elem.text().split(" ").length).toBe(10);
	});

})


describe("ipsumSentences directive", function() {
	var elem
		,scope
		,compiled;

	beforeEach(function() {
		module("ipsum");
	
		inject(function($rootScope, $compile) {
			compile = $compile;
			scope = $rootScope;
			var html = "<div ipsum-sentences='10'></div>";
			elem = angular.element(html);

			compiled = $compile(elem)(scope);

			scope.$digest();
			scope.$apply();
		});

	});

	it("should set the text to the number of words", function() {
		expect(elem.text().split(" ").length).not.toBe(1);
	});

})


describe("ipsumParagraphs directive", function() {
	var elem
		,scope
		,compiled;

	beforeEach(function() {
		module("ipsum");
	
		inject(function($rootScope, $compile) {
			compile = $compile;
			scope = $rootScope;
			var html = "<div ipsum-paragraphs='10'></div>";
			elem = angular.element(html);

			compiled = $compile(elem)(scope);

			scope.$digest();
			scope.$apply();
		});

	});

	it("should set the text to the number of words", function() {
		expect(elem.text().split(" ").length).not.toBe(1);
	});

})

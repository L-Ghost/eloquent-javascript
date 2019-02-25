require('../../app/triangle');

describe("Triangle String Creation", function() {

	describe("should create triangle with specific size", function() {

		it("should return 4 lines asterisk triangle", function() {
 			expect(generateTriangle(4, "*")).toBe("*\n**\n***\n****");
		});
		
		it("should return 7 lines hashtag triangle", function() {
 			expect(generateTriangle(7, "#")).toBe("#\n##\n###\n####\n#####\n######\n#######");
		});

	});

});

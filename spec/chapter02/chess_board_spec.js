require('../../app/chess_board');

describe("Chess Board String Creation", function() {

	describe("should get board with specific size", function() {

		it("should return 4x4 asterisk board", function() {
 			expect(generateBoard(4, "*")).toBe(" * *\n* * \n * *\n* * ");
		});
		
		it("should return 6x6 money board", function() {
 			expect(generateBoard(6, "$")).toBe(" $ $ $\n$ $ $ \n $ $ $\n$ $ $ \n $ $ $\n$ $ $ ");
		});

		it("should return 8x8 hashtag board", function() {
			expect(generateBoard(8, "#")).toBe(" # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # ");
		});

	});

});

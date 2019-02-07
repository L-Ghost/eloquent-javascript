
generateBoard = function(n, ch) {
	let board = "";
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (i % 2 == 0) {
				board += (j % 2 != 0) ? ch : " "; // first char must be space
			} else {
				board += (j % 2 == 0) ? ch : " "; // first char must be custom char
			}
		}
		if (i + 1 != n) board += "\n"; // do not add new line to last line
	}
	return board;
}

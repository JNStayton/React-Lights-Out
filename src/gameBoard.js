const gameBoard = {
	create(nrows, ncols, chance) {
		let initialBoard = [];
		//TODO:
		for (let y = 0; y < nrows; y++) {
			let row = [];
			for (let x = 0; x < ncols; x++) {
				row.push(Math.random() < chance);
			}
			initialBoard.push(row);
		}
		return initialBoard;
	}
};

export default gameBoard;

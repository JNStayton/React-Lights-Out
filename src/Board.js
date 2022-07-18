import React, { useState } from 'react';
import Cell from './Cell';
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows = 3, ncols = 3, chanceLightStartsOn = 0.5 }) {
	const [ board, setBoard ] = useState(createBoard());

	/** create a board nrows high/ncols wide, each cell randomly lit or unlit */
	function createBoard() {
		let initialBoard = [];
		//TODO:
		for (let y = 0; y < nrows; y++) {
			let row = [];
			for (let x = 0; x < ncols; x++) {
				row.push(Math.random() < chanceLightStartsOn);
			}
			initialBoard.push(row);
		}
		return initialBoard;
	}

	/* Check if the player has won */
	//TODO:
	function hasWon() {
		return board.every((row) => row.every((cell) => cell === false));
	}

	/* Flip cells around a given cell */
	function flipCellsAround(coord) {
		setBoard((oldBoard) => {
			const [ y, x ] = coord.split('-').map(Number);

			const flipCell = (y, x, newBoard) => {
				// if this coord is actually on board, flip it

				if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
					newBoard[y][x] = !newBoard[y][x];
				}
			};

			//TODO: make a copy of the board and flip the cells in it, then return it
			const newBoard = oldBoard.map((row) => row.slice());

			flipCell(y, x, newBoard);
			flipCell(y, x - 1, newBoard);
			flipCell(y, x + 1, newBoard);
			flipCell(y - 1, x, newBoard);
			flipCell(y + 1, x, newBoard);

			return newBoard;
		});
	}

	// if the game is won, just show a winning msg & render nothing else
	//TODO
	if (hasWon()) {
		return <p>You Win!</p>;
	}

	// make table board: rows of Cell components
	//TODO
	let tableBoard = [];

	for (let y = 0; y < nrows; y++) {
		let row = [];
		for (let x = 0; x < ncols; x++) {
			let coord = `${y}-${x}`;
			//render a Cell component for each cell, passing along T/F for whether the cell is lit, the coord as the key, and flipCellsAroundMe as a callback of flipCellsAround(coord)
			row.push(
				<Cell coord={coord} key={coord} isLit={board[y][x]} flipCellsAroundMe={() => flipCellsAround(coord)} />
			);
		}
		//push the table row onto the table board with the y value as the key for the row
		tableBoard.push(<tr key={y}>{row}</tr>);
	}

	//return board
	//TODO
	return (
		<table className="Board">
			<tbody>{tableBoard}</tbody>
		</table>
	);
}

export default Board;

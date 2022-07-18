import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from './Board';
import gameBoard from './gameBoard';

beforeEach(() => {
	jest
		.spyOn(gameBoard, 'create')
		.mockImplementation(() => [ [ true, true, true ], [ true, true, true ], [ true, true, true ] ]);
});

it('renders without crashing', () => {
	render(<Board />);
});

it('matches snapshot', () => {
	const { asFragment } = render(<Board />);
	expect(asFragment()).toMatchSnapshot();
});

it('handles button clicks', () => {
	const { getByTestId } = render(<Board />);
	const coord = getByTestId('1-1');
	const top = getByTestId('0-1');
	const left = getByTestId('1-0');
	const right = getByTestId('1-2');
	const bottom = getByTestId('2-1');
	expect(coord).toHaveClass('Cell Cell-lit');
	expect(top).toHaveClass('Cell Cell-lit');
	expect(bottom).toHaveClass('Cell Cell-lit');
	expect(left).toHaveClass('Cell Cell-lit');
	expect(right).toHaveClass('Cell Cell-lit');
	fireEvent.click(coord);
	expect(coord).toHaveClass('Cell');
	expect(top).toHaveClass('Cell');
	expect(right).toHaveClass('Cell');
	expect(bottom).toHaveClass('Cell');
	expect(left).toHaveClass('Cell');
});

import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board';

it('renders without crashing', () => {
	render(<Board />);
});

it('handles button clicks', () => {
	const coord = getByTestId('1-1');
	//how do I pre-set the coords to true or false?
});

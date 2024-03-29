/*
 * MIT License
 *
 * Copyright (c) 2023 Luke Myers
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { style } from '@vanilla-extract/css';

export const footer = style({
	margin: '3rem',
	'@media': {
		'(min-width: 1024px)': {
			marginLeft: '6rem',
			marginRight: '6rem'
		},
		'(min-width: 1920px)': {
			marginLeft: 'auto',
			marginRight: 'auto',
			width: '75%'
		}
	}
});

export const nav = style({
	alignItems: 'center',
	display: 'flex',
	flex: '0 1 auto',
	flexDirection: 'column',
	gap: '1.5rem',
	whiteSpace: 'nowrap',
	'@media': {
		'(min-width: 640px)': {
			flexDirection: 'row'
		}
	}
});

export const child = style({
	display: 'flex',
	flexDirection: 'column',
	flexWrap: 'wrap',
	flex: '0 1 auto',
	gap: '1.5rem',
	textAlign: 'center',
	whiteSpace: 'nowrap',
	'@media': {
		'(min-width: 640px)': {
			flexDirection: 'row'
		}
	}
});

export const left = style([
	child,
	{
		marginBottom: '1.5rem',
		'@media': {
			'(min-width: 640px)': {
				marginBottom: 'none',
				marginRight: 'auto'
			}
		}
	}
]);

export const right = style([child, {}]);

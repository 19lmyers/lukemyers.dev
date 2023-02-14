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

import {globalStyle, style} from '@vanilla-extract/css';
import {themeContract} from '$lib/theme';

const card = style({
	borderRadius: '1.5rem',
	minWidth: '250px',
	width: 'min-content',
	height: 'min-content',
	flex: '1 1 auto',
	'@media': {
		'(min-width: 640px)': {
			minWidth: '400px'
		}
	}
});

export const elevated = style([
	card,
	{
		boxShadow: themeContract.elevation.level1
		/*
		':hover': {
			boxShadow: themeContract.elevation.level2
		},
		':focus': {
			boxShadow: themeContract.elevation.level1
		},
		':active': {
			boxShadow: themeContract.elevation.level1
		}
		*/
	}
]);

export const filled = style([
	card,
	{
		'@media': {
			'(prefers-color-scheme: light)': {
				backgroundColor: themeContract.colorSchemes.light.surfaceVariant,
				color: themeContract.colorSchemes.light.onSurfaceVariant
			},
			'(prefers-color-scheme: dark)': {
				backgroundColor: themeContract.colorSchemes.dark.surfaceVariant,
				color: themeContract.colorSchemes.dark.onSurfaceVariant
			}
		}
	}
]);

export const outlined = style([
	card,
	{
		'@media': {
			'(prefers-color-scheme: light)': {
				outlineColor: themeContract.colorSchemes.light.outline
			},
			'(prefers-color-scheme: dark)': {
				outlineColor: themeContract.colorSchemes.dark.outline
			}
		},
		outlineStyle: 'solid',
		outlineWidth: '0.0625rem'
	}
]);

export const picture = style({
	'@media': {
		'(prefers-color-scheme: light)': {
			backgroundColor: themeContract.colorSchemes.light.primaryContainer
		},
		'(prefers-color-scheme: dark)': {
			backgroundColor: themeContract.colorSchemes.dark.primaryContainer
		}
	}
});

globalStyle(`${picture} img`, {
	display: 'flex',
	width: '100%',
	height: '100%',
	maxHeight: '35svh',
	objectFit: 'cover',
	'@media': {
		screen: {
			borderRadius: '1.5rem'
		},
		'(min-width: 640px)': {
			maxHeight: '30svh'
		}
	}
});

export const content = style({
	padding: '1.5rem'
});

export const actions = style({
	marginTop: '1rem',
	display: 'flex',
	justifyContent: 'flex-end'
});

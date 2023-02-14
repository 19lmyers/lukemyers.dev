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
import { themeContract } from '$lib/theme';

const a = style({
	textDecoration: 'inherit'
});

export const link = style([
	a,
	{
		'@media': {
			'(prefers-color-scheme: light)': {
				color: themeContract.colorSchemes.light.primary,
				':hover': {
					color: themeContract.colorSchemes.light.tertiary,
					boxShadow: `inset 0 0 0 ${themeContract.colorSchemes.light.tertiary}, 0 3px 0 ${themeContract.colorSchemes.light.tertiary};`
				}
			},
			'(prefers-color-scheme: dark)': {
				color: themeContract.colorSchemes.dark.primary,
				':hover': {
					color: themeContract.colorSchemes.dark.tertiary,
					boxShadow: `inset 0 0 0 ${themeContract.colorSchemes.dark.tertiary}, 0 3px 0 ${themeContract.colorSchemes.dark.tertiary};`
				}
			}
		}
	}
]);

export const disabledLink = style([
	a,
	{
		cursor: 'not-allowed',
		opacity: '38%'
	}
]);

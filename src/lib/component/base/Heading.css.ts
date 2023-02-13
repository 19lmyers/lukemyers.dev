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

export const heading = style({
	'@media': {
		'(prefers-color-scheme: light)': {
			color: themeContract.colorSchemes.light.primary
		},
		'(prefers-color-scheme: dark)': {
			color: themeContract.colorSchemes.dark.primary
		}
	},
	fontFamily: themeContract.typography.heading.family,
	fontWeight: themeContract.typography.heading.weight,
	letterSpacing: themeContract.typography.heading.letterSpacing,
	selectors: {
		'&[data-level="1"]': {
			fontSize: '3.75rem',
			lineHeight: '1',
			marginBottom: '1rem',
			'@media': {
				'(min-width: 1280px)': {
					fontSize: '6rem'
				}
			}
		},
		'&[data-level="2"]': {
			fontSize: '2.25rem',
			lineHeight: '2.25rem',
			marginBottom: '1rem',
			'@media': {
				'(min-width: 1280px)': {
					fontSize: '3rem',
					lineHeight: '1'
				}
			}
		},
		'&[data-level="3"]': {
			fontSize: '1.5rem',
			lineHeight: '2rem',
			marginBottom: '0.5rem'
		}
	}
});

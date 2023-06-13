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

import { globalStyle, style } from '@vanilla-extract/css';
import { themeContract } from '$lib/theme';

export const header = style({
	borderRadius: '1.5rem',
	margin: '1.5rem',
	'@media': {
		'(prefers-color-scheme: light)': {
			color: themeContract.colorSchemes.light.onSurfaceVariant,
			backgroundColor: themeContract.colorSchemes.light.surfaceVariant
		},
		'(prefers-color-scheme: dark)': {
			color: themeContract.colorSchemes.dark.onSurfaceVariant,
			backgroundColor: themeContract.colorSchemes.dark.surfaceVariant
		},
		'screen and (min-width: 640px)': {
			width: 'auto',
			margin: '2rem 4rem 3rem',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center'
		},
		'screen and (min-width: 640px) and (prefers-color-scheme: light)': {
			color: themeContract.colorSchemes.light.onSurface,
			backgroundColor: 'transparent'
		},
		'screen and (min-width: 640px) and (prefers-color-scheme: dark)': {
			color: themeContract.colorSchemes.dark.onSurface,
			backgroundColor: 'transparent'
		}
	}
});

export const card = style({
	padding: '1.5rem',
	minWidth: '250px',
	width: 'auto',
	overflowWrap: 'normal',
	'@media': {
		'screen and (min-width: 640px)': {
			minWidth: '300px',
			padding: '2rem',
			marginLeft: '3rem',
			marginRight: '3rem',
			flexDirection: 'column'
		},
		'screen and (min-width: 1024px)': {
			marginLeft: '6rem',
			marginRight: '6rem'
		},
		'screen and (min-width: 1280px)': {
			minWidth: '400px'
		},
		'screen and (min-width: 640px) and (prefers-color-scheme: light)': {
			color: themeContract.colorSchemes.light.onSurfaceVariant,
			backgroundColor: themeContract.colorSchemes.light.surfaceVariant
		},
		'screen and (min-width: 640px) and (prefers-color-scheme: dark)': {
			color: themeContract.colorSchemes.dark.onSurfaceVariant,
			backgroundColor: themeContract.colorSchemes.dark.surfaceVariant
		}
	}
});

export const overlay = style({
	padding: '1.5rem',
	minWidth: '250px',
	overflowWrap: 'normal',
	'@media': {
		'screen and (min-width: 640px)': {
			minWidth: '300px',
			padding: '2rem',
			width: 'min-content',
			height: 'min-content',
			borderRadius: '1.5rem',
			transform: 'translateX(2.5svw)',
			zIndex: 1
		}
	}
});

export const picture = style({
	display: 'flex',
	width: '100%',
	height: '100%',
	minWidth: '50svw',
	maxHeight: '75svh',
	aspectRatio: '4/3',
	'@media': {
		screen: {
			borderRadius: '1.5rem'
		},
		'(prefers-color-scheme: light)': {
			backgroundColor: themeContract.colorSchemes.light.primaryContainer,
			color: themeContract.colorSchemes.light.onPrimaryContainer
		},
		'(prefers-color-scheme: dark)': {
			backgroundColor: themeContract.colorSchemes.dark.primaryContainer,
			color: themeContract.colorSchemes.dark.onPrimaryContainer
		},
		'screen and (min-width: 640px)': {
			transform: 'translateX(-10svw)'
		}
	}
});

globalStyle(`${picture} img`, {
	width: '100%',
	height: 'inherit',
	objectFit: 'cover',
	'@media': {
		screen: {
			borderRadius: '1.5rem'
		}
	}
});

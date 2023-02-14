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

import {assignInlineVars} from '@vanilla-extract/dynamic';

import {themeContract} from './contract.css';
import {themeTokensFromHex, themeTokensFromImage} from './tokens';

export function dynamicColorTheme(hexColor: string) {
	const tokens = themeTokensFromHex(hexColor);
	return assignInlineVars(themeContract, tokens).toString();
}

export async function dynamicImageTheme(
	fetch: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>,
	imagePath: string
) {
	const image = await fetch(imagePath);
	const data = await image.arrayBuffer();

	const tokens = await themeTokensFromImage(data);
	return assignInlineVars(themeContract, tokens).toString();
}

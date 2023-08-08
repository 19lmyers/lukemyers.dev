<!--
  - MIT License
  -
  - Copyright (c) 2023 Luke Myers
  -
  - Permission is hereby granted, free of charge, to any person obtaining a copy
  - of this software and associated documentation files (the "Software"), to deal
  - in the Software without restriction, including without limitation the rights
  - to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  - copies of the Software, and to permit persons to whom the Software is
  - furnished to do so, subject to the following conditions:
  -
  - The above copyright notice and this permission notice shall be included in all
  - copies or substantial portions of the Software.
  -
  - THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  - IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  - FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  - AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  - LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  - OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  - SOFTWARE.
  -->
<script lang="ts">
	import { Section } from '$lib/component';

	import { CardStyle } from './types';
	import { actions, content, elevated, filled, outlined, picture } from './Card.css';

	export let style = CardStyle.Filled;

	let styleClass: string;
	if (style === CardStyle.Filled) {
		styleClass = filled;
	} else if (style === CardStyle.Outlined) {
		styleClass = outlined;
	} else {
		styleClass = elevated;
	}
</script>

<Section className={styleClass}>
	{#if $$slots.image}
		<picture class={picture}>
			<slot name="image" />
		</picture>
	{/if}
	<div class={content}>
		<slot name="content" />
		{#if $$slots.actions}
			<div class={actions}>
				<slot name="actions" />
			</div>
		{/if}
	</div>
</Section>

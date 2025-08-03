<script>
	import { onMount } from 'svelte';
	import { marked } from 'marked';

	let reasons = [];
	onMount(async () => {
		const response = await fetch('https://ai.hackclub.com/chat/completions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				messages: [
					{
						role: 'user',
						content:
							'Give me 100 reasons why Rust the language is the best. Do not include starter text such as \'Here are **100 compelling reasons** why **Rust** is considered one of the best programming languages, categorized for clarity and depth:\' as it is unnecessary. Please keep headings and other markdown. Please include as much detail as you possible! It needs to be extremely convincing for even Rust haters. You are allowed to put down other languages, make sure all the reasons are extremely biased towards Rust.'
					}
				]
			})
		});

		const data = await response.json();
		let content = data.choices?.[0]?.message?.content ?? '';

		content = content.split('</think>')[1]?.trim() || content;

		reasons = content
			.split('\n')
			.filter((line) => line.length > 0)
			.map((line) => marked.parse(line));
	});
</script>

<div class="@container text-center text-rust flex flex-col">
	<section id="welcome-text">
		<h1 class="text-5xl">Rust. Is. The. Best.</h1>
		<div class="moving-container animate-[move_5s_linear_infinite] opacity-50">
			<img
				src="/images/rust.webp"
				alt="Rust logo"
				title="rust logo"
				class="rust-img my-4 h-[100px] w-[100px] animate-[spin_5s_linear_infinite]"
			/>
		</div>
		<p class="text-3xl">
			Rust is the best. It just is, trust me. Don't believe me? Try it out! <br />
			You can learn more about Rust
			<a href="https://www.rust-lang.org/" class="text-blue-500 underline hover:text-blue-600"
			>here</a
			>.
		</p>
	</section>
	<section id="100-reasons" class="text-center text-rust flex flex-col">
		<h2 class="mt-8 text-4xl mb-10">100 Reasons why Rust is the best</h2>
		{#if reasons.length > 0}
			<ul class="prose pl-6 text-left text-lg">
				{#each reasons as reason}
					<li>{@html reason}</li>
				{/each}
			</ul>
		{:else}
			<h2 class="animate-bounce text-4xl">Thinking about the best way to convince you...</h2>
		{/if}
	</section>
</div>

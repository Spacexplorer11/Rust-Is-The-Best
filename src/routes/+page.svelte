<script>
	import { marked } from 'marked';
	import staticReasons from '$lib/reasons.json';

	let reasons_markdown = $derived(
		staticReasons
			.filter((line) => line.trim().length > 0)
			.map((line) => marked.parse(line))
	);
</script>

<div class="@container text-center text-rust flex mt-20 flex-col">
	<section id="welcome-text">
		<h1 class="text-5xl"><span
			class="bg-amber-50/70 rounded-xl inline-block max-w-fit overflow-hidden p-[0.5em] whitespace-normal ">Rust. Is. The. Best.</span>
		</h1>
		<div class="moving-container animate-[move_5s_linear_infinite] mb-10">
			<img
				src="/images/rust.webp"
				alt="Rust logo"
				title="rust logo"
				class="rust-img my-4 h-25 w-25 animate-[spin_5s_linear_infinite]"
			/>
		</div>
		<p class="text-3xl mb-10">
			<span class="bg-amber-50/70 rounded-xl inline-block max-w-fit overflow-hidden p-[0.5em] whitespace-normal ">
			Rust is the best. It just is, trust me. Don't believe me? Try it out! <br>
			</span>
		</p>
		<p class="text-3xl mb-10">
			<span class="bg-amber-50/70 rounded-xl inline-block max-w-fit overflow-hidden p-[0.5em] whitespace-normal ">
			You can learn more about Rust
			<a href="https://www.rust-lang.org/" class="text-blue-500 underline hover:text-blue-600"
			>here</a
			>.
							</span>
		</p>
	</section>
	<section id="100-reasons" class="text-center text-rust flex flex-col min-w-full">
		<h2 class="text-4xl mb-10"><span
			class="bg-amber-50/70 rounded-xl inline-block max-w-fit overflow-hidden p-[0.5em] whitespace-normal ">100 Reasons why Rust is the best</span>
		</h2>
		{#if reasons_markdown.length > 0}
			<ul class="prose pl-6 text-lg mb-10 min-w-full">
				{#each reasons_markdown as reason}
					{#if reason !== '<hr>\n'}
					<li><span
						class="bg-amber-50/70 rounded-xl inline-block max-w-fit overflow-hidden p-[0.5em] whitespace-normal ">{@html reason}</span>
					</li>
					{:else}
						<hr>
					{/if}
				{/each}
			</ul>
		{:else}
			<h2 class="animate-bounce text-4xl p-4"><span
				class="bg-amber-50/70 rounded-xl inline-block max-w-fit overflow-hidden p-[0.5em] whitespace-normal ">Thinking about the best way to convince you...</span>
			</h2>
		{/if}
	</section>
</div>
<div style="position: absolute; top: 20px; left: 10px; z-index: 1000;">
	<iframe src="https://github.com/sponsors/Spacexplorer11/button" title="Sponsor Spacexplorer11" height="32"
	        width="114" style="border: 0; border-radius: 6px;"></iframe>
</div>
<div style="position: absolute; top: 10px; right: 10px; z-index: 1000;">
	<a href="https://www.buymeacoffee.com/spacexplorer11" target="_blank" style="cursor: pointer;">
		<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee"
		     style="height: 60px !important;width: 217px !important;">
	</a>
</div>

import { AI_API_KEY } from "$env/static/private";
export async function load() {
	const response = await fetch('https://ai.hackclub.com/proxy/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${AI_API_KEY}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			model: "google/gemini-2.5-flash-lite-preview-09-2025",
			messages: [
				{
					role: "user",
					content: "Give me 100 reasons why Rust is the best programming language, with use of persuasive, salesmanship, and marketing techniques & language."
				},
			],
			stream: false,
		})
	});
	const data = await response.json();

	return { reasons: data.choices[0].message.content };
}
// const elements = Array.from(document.querySelectorAll('code:not([class])'));
// elements.forEach((el) => {
// 	const innerText = el.firstChild
// 	window.RunKit.createNotebook({
// 		element: el,
// 		gutterStyle: el.getAttribute("data-gutter"),
// 		source: innerText.textContent,
// 		// Remove the text content of the pre tag after the embed has loaded
// 		onLoad: () => innerText.remove()
// 	})
// });
class RunKitEmbed extends HTMLElement {
	constructor() {
		super();
		const source = this.textContent.trim();
		const wrapper = document.createElement('div');
		wrapper.style = "margin: 20pt";
		this.textContent = "";
		const tempCodePlaceholder = document.createElement('pre');
		tempCodePlaceholder.textContent = source;

		window.RunKit.createNotebook({
			element: wrapper,
			source,
			onLoad: () => {
				tempCodePlaceholder.remove()
			}
		});
		this.appendChild(wrapper);
		this.appendChild(tempCodePlaceholder);
	}
}
customElements.define('rk-embed', RunKitEmbed);

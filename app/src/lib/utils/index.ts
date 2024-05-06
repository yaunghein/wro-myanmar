export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}

export function formatMMK(value: number) {
	let formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	return formatted + ' MMK';
}

export function cleanText(text: string = '') {
	const invisibleCharsRegex = /[\u200B\u200C\u200D\uFEFF]/g;
	return text.replace(invisibleCharsRegex, '');
}

export function clickOutside(node: HTMLElement, callback: () => void) {
	const onClick = (event: any) => {
		if (!node.contains(event.target)) {
			callback();
		}
	};
	document.body.addEventListener('click', onClick);

	return {
		destroy() {
			document.body.removeEventListener('click', onClick);
		}
	};
}

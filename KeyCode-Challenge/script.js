const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
	console.log(e);
	insert.innerHTML = `
		<div class="key">
			${e.key === ' ' ? 'Space' : e.key}
			<small>Key Pressed</small>
		</div>
		<div class="key">
			${e.keyCode}
			<small>KeyCode</small>
		</div>
		<div class="key">
			${e.code}
			<small>Code</small>
		</div>
	`
});
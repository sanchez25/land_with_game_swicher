window.addEventListener('load', function () {

    function toggleMenu(){
        document.querySelector('.menu_mobile').classList.toggle('show');
        document.querySelector('.body').classList.toggle('active');
    }

    let burgerBtn = document.querySelector('.burger img');
                
	if (burgerBtn) {
		burgerBtn.addEventListener('click', toggleMenu);	
	}

	document.querySelectorAll('.menu_mobile a').forEach(anchor => {
		anchor.addEventListener('click', function() {
			document.querySelector('.menu_mobile').classList.remove('show');
			document.querySelector('.body').classList.remove('active');
		});
	});

	// Switcher

	const switcher = document.getElementById('touch-switch');
	const text = document.getElementById('not-touch');
	let countClick = parseInt(localStorage.getItem('countClick')) || 0;

	function showImage() {
		document.querySelector('.touch__block').innerHTML = '<img class="cats" src="img/cats.webp" alt="cats">';
	}

	if (countClick >= 5) {
		showImage();
	}

	switcher.addEventListener('change', function () {
		countClick++;
		localStorage.setItem('countClick', countClick);

		switch (countClick) {
			case 1:
				text.textContent = 'Seriously! You touched everything!';
				document.querySelector('.slider').style.backgroundColor = '#6D29F6';
				break;
			case 2:
				text.textContent = 'This will end very badly!';
				document.querySelector('.slider').style.backgroundColor = '#FFCB21';
				break;
			case 3:
				text.textContent = 'Are you still waiting for something?';
				document.querySelector('.slider').style.backgroundColor = '#0064E5';
				break;
			case 4:
				text.textContent = 'I warned you many times!';
				document.querySelector('.slider').style.backgroundColor = '#E50000';
				break;
			case 5:
				showImage();
				break;
			default:
				countClick = 0;
				localStorage.setItem('countClick', countClick);
		}
	});
})









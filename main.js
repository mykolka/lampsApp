let benefitBtn = document.getElementById("benefitBtn");
	

benefitBtn.addEventListener('click', () => {	
	let benefitSection = document.getElementById("benefitBox"),
		closeBtn = document.getElementById("close");

	benefitSection.style.display = 'flex';
	closeBtn.addEventListener("click", () => {
		benefitSection.style.display = 'none';
	})
})
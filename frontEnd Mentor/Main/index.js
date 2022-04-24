const submitCtn = document.getElementById('submitCtn');
const thxCtn = document.getElementById('thxCtn');
const button = document.getElementById('submitBtn');
const rateNumber = document.getElementById('rateNmber');

let selectedValue = null;

//let a = 1;
//let b = "1";
//if (a == b) {
//	alert("==");
//}
//if (a === b) {
//	alert("===");
//}


button.addEventListener('click', function() {
	if (selectedValue !== null) {
		rateNumber.innerHTML = selectedValue;
		submitCtn.style.display = 'none';
		thxCtn.style.display = 'grid';
	} else {
		alert("select value");
	}
});

const rateArray = document.getElementsByClassName('rateNmbers');
//for (const plop of rateArray) {	
//}
//for (const i in rateArray) {
//	const plop = rateArray[i];
//}

for (const plop of rateArray) {
	plop.addEventListener('click', function() {
		selectedValue = plop.value;
		for (const plop2 of rateArray) {
			plop2.classList.remove('selected');
		}
		plop.classList.add('selected');
	});
}

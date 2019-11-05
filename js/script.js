function incrToOne() {
	let elem = document.getElementById("myprogressbar");
	let p = elem.style.width;
	p = p.slice(0, -1);

	if (p <= 99) {

		elem.style.width = +p + 1 + "%";
		$("#myprogressbar").text(+p + 1 + "%");
	}
}

function incrToThree() {
	let elem = document.getElementById("myprogressbar");
	let p = elem.style.width;
	p = p.slice(0, -1);

	if (p <= 97) {

		elem.style.width = +p + 3 + "%";
		$("#myprogressbar").text(+p + 3 + "%");
	}
}

function incrToSeven() {
	let elem = document.getElementById("myprogressbar");
	let p = elem.style.width;
	p = p.slice(0, -1);

	if (p <= 93) {

		elem.style.width = +p + 7 + "%";
		$("#myprogressbar").text(+p + 7 + "%");
	}
}

function resetBar() {
	$("#myprogressbar").width("0%");
	$("#myprogressbar").text("0%");
}

$("#button1").click(incrToOne);
$("#button-3").click(incrToThree);
$("#button-7").click(incrToSeven);
$("#button-reset").click(resetBar);
$("document").ready(function () {

	$('.first-button').on('click', function () {

		$('.animated-icon1').toggleClass('open');
	});
	$('.second-button').on('click', function () {

		$('.animated-icon2').toggleClass('open');
	});
	$('.third-button').on('click', function () {

		$('.animated-icon3').toggleClass('open');
	});
});


$(document).ready(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 300) {
			$(".black").css("transition:", "background-color .8s ease");
			$(".black").css("background", "black");

		} else {
			$(".black").css("background", "");
		}


	})
})


$(document).ready(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll < 600 && scroll > 50) {
			$(".black").css("transition:", "opacity 1s ease-out");
			$(".black").css("opacity", "0");

		} else {
			$(".black").css("opacity", "1");
		}


	})
})
$(document).ready(function () {


	var modal = document.getElementById("myModal");


	var btn1 = document.getElementById("gumb1");
	var btn2 = document.getElementById("gumb2");
	var btn3 = document.getElementById("gumb3");
	var btn4 = document.getElementById("gumb4");


	var span = document.getElementsByClassName("close")[0];


	btn1.onclick = function () {
		modal.style.display = "block";
		document.getElementById("KatNaslov").innerHTML = "Crni Humor";

	}
	btn2.onclick = function () {
		modal.style.display = "block";
		document.getElementById("KatNaslov").innerHTML = "Kratki vicevi ";


	}
	btn3.onclick = function () {
		modal.style.display = "block";
		document.getElementById("KatNaslov").innerHTML = "Mujo i Haso";

	}
	btn4.onclick = function () {
		modal.style.display = "block";
		document.getElementById("KatNaslov").innerHTML = "Vicevi o Čak Norisu";

	}


	span.onclick = function () {
		modal.style.display = "none";
	}


	window.onclick = function (event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
});


$(function () {

	$("form[name='slanje']").validate({

		rules: {
			ime: {
				required: true,
				minlength: 3,
				maxlength: 15,
			},
			naziv_vica: {
				required: true,
				maxlength: 30,

			},
			kategorija: {
				required: true,
			},
			tekst: {
				required: true,
				maxlength: 250,

			},
			rating: {
				required: true,


			},

		},

		messages: {
			ime: {
				required: "Molimo vas unesite vaše ime ili nadimak!",
				minlength: "Ime mora sadržavati barem 3 slova!",
				maxlength: "Ime može sadržavati maksimalno 15 slova!",
			},
			naziv_vica: {
				required: "Molimo vas unesite naziv vica!",
				maxlength: "Naziv vica može sadržavati maksimalno 30 slova!",

			},
			kategorija: {
				required: "Molimo vas odaberite kategoriju vašeg vica!",
			},
			tekst: {
				required: "Molimo vas unesite sadržaj vašeg vica!",
				maxlength: "Tekst vica može sadržavati maksimalno 250 slova!",

			},
			rating: {
				required: "Molimo vas odaberite kvalitetu vašeg vica!",


			},

		},

		submitHandler: function (form) {
			form.submit();
		}


	});


});
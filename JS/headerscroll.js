// For the header scroll
window.onscroll = function() {headerScroll()};

	function headerScroll() {

		var header = document.getElementById('header');
		var logo = document.getElementById('holologo');
		var imgdiv = document.getElementById('imgdiv')
		var i;
		var links = document.getElementsByClassName('headerlinks');


		for (i = 0; i < links.length; i++) {

			if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {

				header.classList.add("scroll");
				header.classList.remove("scrollback");
				header.style.backgroundColor = "white";
				header.style.transition = "all 0.5s";
				links[i].classList.add("scroll");

			}

			else {

				header.classList.remove("scroll");
				header.classList.add("scrollback");
				header.style.backgroundColor =  "transparent";
				header.style.transition = "all 0.5s";
				links[i].classList.remove("scroll");


			}
		}
	}


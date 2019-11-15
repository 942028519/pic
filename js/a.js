	let button_one = document.getElementsByClassName("button_one");
	let button_two = document.getElementsByClassName("button_two");
	let button_three = document.getElementsByClassName("button_three");
	let button_four = document.getElementsByClassName("button_four");
	let small = document.getElementsByClassName("small");
	button_one[0].onmouseover = function() {
		if (parseInt(small[0].style.left) >= 0) {
			small[0].style.left =parseInt(small[0].style.left) - 400 + "px";
		} else{
			small[0].style.left =parseInt(small[0].style.left) + "px" ;
		}
	}
	button_two[0].onmouseover = function() {
		if (parseInt(small[0].style.left) >= -400 && parseInt(small[0].style.left) < 0) {
			small[0].style.left = parseInt(small[0].style.left) - 400 + "px";
		} else{
			small[0].style.left =parseInt(small[0].style.left) + "px" ;
		}
	}
	button_three[0].onmouseover = function() {
		if (parseInt(small[0].style.left) >= -800 && parseInt(small[0].style.left) < -400) {
			small[0].style.left = parseInt(small[0].style.left) - 400 + "px";
		} else{
			small[0].style.left =parseInt(small[0].style.left) + "px" ;
		}
	}
	button_four[0].onmouseover = function myFunction() {
		if (parseInt(small[0].style.left) >= -1200 && parseInt(small[0].style.left) < -800) {
			small[0].style.left = parseInt(small[0].style.left) - 400 + "px";
		}  else{
			small[0].style.left ="0px" ;
		}
	}






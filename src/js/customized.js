console.log("* customized.js exist *");

let logo = document.getElementById("logo");

window.addEventListener("scroll", function(event) {
	let top = this.scrollY,
		left =this.scrollX;


		if( top== 0) {
			logo.setAttribute("style", `left: 50vw; top: 10px`);
		} else if( top < 120) {
			logo.setAttribute("style", `left: 7vw; top: 10px`);
		} else if ( top < 400 ) {
			logo.setAttribute("style", `left: 7vw; top: ${top+100}px`)
		} else if ( top < 1200 ) {
			logo.setAttribute("style", `left: 7vw; top: ${top+100}px`)
		} 
		else if ( top < 1550 ) {
			logo.setAttribute("style", `left: 47vw; top: ${top+100}px`)
		} 
		else if ( top < 1600 ) {
			logo.setAttribute("style", `left: 47vw; top: ${top+40}px`)
		} 
		else if ( top < 1750 ) {
			logo.setAttribute("style", `left: 4vw; top: ${top+100}px`)
		}
		else if ( top < 2750 ) {
			logo.setAttribute("style", `left: 4vw; top: ${top+100}px`)
		}

		else if ( top < 4000 ) {
			logo.setAttribute("style", `left: 90vw; top: ${top+100}px`)
		}

		else if ( top < 4620 ) {
			logo.setAttribute("style", `left: 85vw; top: ${top+100}px`)
		}


		else if ( top < 4620 ) {
			logo.setAttribute("style", `left: 94vw; opacity: 0; top: ${top+100}px`)
		}
		else if ( top < 4800 ) {
			logo.setAttribute("style", `left: 94vw; opacity: 0; top: ${top+100}px`)
		}

		else if ( top < 4900 ) {
			logo.setAttribute("style", `left: -10vw; opacity: 0; top: ${top+150}px`)
		}


		else if ( top < 4960 ) {
			logo.setAttribute("style", `left: 10vw; opacity: 1; top: ${top+150}px`)
		}

		
		else if ( top < 5100 ) {
			logo.setAttribute("style", `left: 90vw; opacity: 1; top: ${top+100}px`)
		}


		else if ( top < 6200 ) {
			logo.setAttribute("style", `left: 90vw; opacity: 1; top: ${top+100}px`)
		}

		else if ( top < 6500 ) {
			logo.setAttribute("style", `left: 50vw; opacity: 1; top: ${top+100}px`)
		}


		console.clear();

		console.log( "top", top );
		console.log( "left", left );

}, false);

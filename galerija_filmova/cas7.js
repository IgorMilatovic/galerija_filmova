

// var documenT = {

// 	html: {
		
// 		head: {

// 			hdel1: {

// 				charset: "UTF-8",
// 				tip: "meta"
// 			},

// 			hdel2: {

// 				name: "viewport",
// 				content: "width=device-width, initial-scale=1.0",
// 				tip: "meta"
// 			},

// 			hdel3 : {

// 				sadrzaj: "DOM manipulacija",
// 				tip: "title"				
// 			}
// 		},

// 		body: {

// 			bdel1: {

// 				id: "naslov",
// 				sadrzaj: "Zdravo DOM",
// 				tip: "h1"
// 			},

// 			bdel2: {
				
// 				bdel2_1: {

// 					sadrzaj: "Dobrodošli",
// 					tip: "h1"
// 				},
	    
// 				bdel2_2: {

// 					src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Heckert_GNU_white.svg/64px-Heckert_GNU_white.svg.png",
// 					tip: "img"
// 				},

// 				bdel2_3: {

// 					sadrzaj: "HTML struktura je razgranata. Deca elementi se nalaze unutar roditeljskih elemenata.",
// 					tip: "p"
// 				},

// 				tip: "div"
// 			},

// 			bdel3: {

// 				id: "prazno",
// 				tip: "div"
// 			},

// 			bdel4: {

// 				class: "prvi-pasus",
// 				sadrzaj: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae eaque impedit id, distinctio, quasi aperiam vitae vel eos, cum deserunt dolorum dolores non magni fuga expedita possimus! Modi, quidem vero!",
// 				tip: "p"
// 			},

// 			bdel5: {

// 				sadrzaj: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae eaque impedit id, distinctio, quasi aperiam vitae vel eos, cum deserunt dolorum dolores non magni fuga expedita possimus! Modi, quidem vero!",
// 				tip: "p"
// 			},

// 			bdel6: {

// 				sadrzaj: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae eaque impedit id, distinctio, quasi aperiam vitae vel eos, cum deserunt dolorum dolores non magni fuga expedita possimus! Modi, quidem vero!",
// 				tip: "p"
// 			},

// 			bdel7: { 

// 				src: "cas7.js",
// 				tip:"script"
// 			}
// 		}
// 	}
// };


// // / ---------------------------------------------

// var doc = [];

// function iterate(obj) {
    
//     for (var property in obj) {
     
// 		// if (obj.hasOwnProperty(property)) {
            
//             if (typeof obj[property] == "object") {

//             	console.log(property + ": " + Object.keys(obj[property]));
                
//              //    doc.push(property + ": " + Object.keys(obj[property]));
                
//                 iterate(obj[property]);
//             }
            
//             else {
                
//                 // if (obj[property] == "meta")
//                 	// console.log(obj);
                
//                 console.log(property + ": " + obj[property])
//                 // doc.push(property + ": " + obj[property]); 
// 			}
//         // }
//     }
// };

// iterate(documenT);
// console.log(doc);




// ---------------------------------------------

// DODAVANJE I UKLANJANJE ELEMENATA ************************************

// var dodaj = document.querySelector("#dodaj");

// var ukloni = document.querySelector(".ukloni");

// var mene = document.querySelector(".mene");

// ukloni.removeChild(mene); 
// // ukloni

// dodaj.appendChild(mene);
// // dodaj


// var para = document.createElement("p");
	
// 	var node = document.createTextNode(boja);
	
// 	para.appendChild(node);

// 	var element = $("#result");
	
// 	element.appendChild(para);

// -----------------------------------------------

// DOGADJAJI (onclick primer) *********************************************

// var $ = function (selector) {
//     return document.querySelector(selector);
//   }; 

// var box = $('#prazno');
// var naslov = $('#naslov');
					
// function crvena() {
// 	this.style.backgroundColor = '#c00';
// }

// function plava() {
// 	this.style.backgroundColor = '#00f';
// }

// var text = 'bicu programer';
// var h = document.createElement("h3");
// var n = document.createTextNode(text);

// function txt() {
// 	h.appendChild(n);
// 	this.appendChild(h);
// 	h.style.marginLeft = "38px";
// }

// function noTxt() {
// 	this.removeChild(h);
// }

// box.onmousedown = crvena;
// box.onmouseup = plava;
// box.onmouseover = txt;
// box.onmouseout = noTxt;


// box.addEventListener('mousedown', crvena, false);
// box.addEventListener('mouseup', plava);
// box.addEventListener('mouseover', txt);
// box.addEventListener('mouseout', noTxt);

// ------------------------------------------------------------------

// *** FILMOVI ***

// var $ = function (selector) {
// 	return document.querySelector(selector);
// };

// var poljeFilm = $('#dodajFilm');

// var poljeGodina = $('#dodajGodinu');

// var poljeUrl = $('#dodajUrl')

// var dugme = $('#dugmic');

// var bigBox = $('#big_box');

// function addFilm (event) {
// 	// console.log(event)
// 	event.preventDefault()

// 	// div nosac filma
// 	var box = document.createElement("div");
// 	box.setAttribute('class', 'box');
	

// 	// paragraf ime filma
// 	var film = document.createTextNode(poljeFilm.value);
// 	var paraFilm = document.createElement("p");
// 	paraFilm.appendChild(film);

// 	// console.log(paraFilm);

// 	// paragraf ime filma
// 	var godina = document.createTextNode(poljeGodina.value);
// 	var paraGodina = document.createElement("p");
// 	paraGodina.appendChild(godina);

// 	// console.log(paraGodina);

// 	// plakat filma
// 	var plakat = document.createElement("img");
// 	plakat.setAttribute('src', poljeUrl.value);
// 	plakat.setAttribute('alt', 'plakat filma');

// 	// console.log(plakat);

// 	// dodavanje elemenata u div nosac filma
// 	box.appendChild(paraFilm);
// 	box.appendChild(paraGodina);
// 	box.appendChild(plakat);


// 	// dodavanje nosaca filma u div galeriju filmova
// 	bigBox.appendChild(box);


// };

// // pozivanje funkcije
// dugme.addEventListener('click', addFilm);


// --------------------------------------------------------------

// AJAX GET i PRIKAZ U GALERIJI

var film = new XMLHttpRequest();

film.open("GET", "https://baza-filmova.herokuapp.com/filmovi/");

film.responseType = 'text';
film.send();

// var filmObjReceiverArr;
// var proba;
                                                                                                                                                                                                                                                                                                                                                                        																																																																																																																																																																																																																																	
film.onload = function () {
	var filmStr = film.response;
	var filmObjReceiverArr = JSON.parse(filmStr);

	var $ = function (selector) {
		return document.querySelector(selector);
	};

	var bigBox = $('#big_box');
	var dugme = $('#dugmic');
	
	function dodajFilmoveUgaleriju () {
		
		for (i = 0; i < filmObjReceiverArr.length - 1; i++) {
			
			// uzimanje podataka o filmu
			var naziV = document.createTextNode(filmObjReceiverArr[i].naziv);
			var godinA = document.createTextNode(filmObjReceiverArr[i].godina);
			var slikA = filmObjReceiverArr[i].slika;

			// mali div nosac filma
			var box = document.createElement("div");
				box.setAttribute('class', 'box');
			
			// paragraf naziv
			var paraNaziv = document.createElement("p");
				paraNaziv.appendChild(naziV);
			
			// paragraf godina
			var paraGodina = document.createElement("p");
				paraGodina.appendChild(godinA)
			
			// sredjivanje margine zbog simetrije sa elementima ostalih box-ova 
			// jer se naziv lomi u dva reda i gura godinu i sliku ka dole
			if (i == 14) {
				paraGodina.style.marginTop = '-4px';
			};
			
			// slika
			var plakat = document.createElement("img");
				plakat.setAttribute('src', slikA);
				plakat.setAttribute('alt', 'plakat filma');
				plakat.setAttribute('class', 'slika');

			// ubacivanje podataka o filmu u div nosac filma
			box.appendChild(paraNaziv);
			box.appendChild(paraGodina);
			box.appendChild(plakat);

			// ubacivanje nosaca filma u galeriju filmova
			bigBox.appendChild(box);
		}
	};
	
	dodajFilmoveUgaleriju();
	
	// funkcija dodavanja filmova povezana sa clickom buttona (ZA UPOTREBU OTKOMENTARISATI <button> U HTML FILE-U)
	// dugme.addEventListener('click', dodajF);
};






// ----------------------------------------------------------------

// AJAX POST

// function makeRequest(event) {
	
// event.preventDefault()
	
// 	var film = new XMLHttpRequest();

// 	var poljeFilm = $('#dodajFilm');
// 	var poljeGodina = $('#dodajGodinu');
// 	var poljeUrl = $('#dodajUrl');
// 	film.open("POST", "https://baza-filmova.herokuapp.com/dodaj/");
// 	film.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	
// 	film.onreadystatechange = function() {
// 	    if(film.readyState == 4 && film.status == 200) {
// 	        alert(film.responseText);
// 	    };
// 	};

// 	film.send('naziv=' + poljeFilm.value + '&godina=' + poljeGodina.value + '&slika=' + poljeUrl.value);

// };


// dugme.addEventListener('click', makeRequest);

   
// ------------------------------------

// `  backtick

// ---------------------------------

// 	var doc = [];
	
// 	function iterate(obj) {
   
//     for (var property in obj) {
     
// 		if (typeof obj[property] == "object") {

//         	// console.log(property + ": " + Object.keys(obj[property]));
            
//          //    doc.push(property + ": " + Object.keys(obj[property]));
            
//             iterate(obj[property]);
//         }
        
//         else {
            
//             if (obj[property] == "1982")
//             	console.log(obj);
            
//             // console.log(property + ": " + obj[property])
//             // doc.push(property + ": " + obj[property]); 
// 		}
//     }
// };

// iterate(filmObj);
// console.log(doc);






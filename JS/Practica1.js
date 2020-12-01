/**
 * Defino la función teclaPulsada la cual mostrará un mensaje al pulsar
 * correctamentre la combinación, cambiando el fondo y dejando el texto en vacío.
 **/
function teclaPulsada( evento ) {

	tecla = evento.keyCode;

	console.log( "tecla = " + tecla );

	if ( evento.altKey && tecla == 123 ) {

		console.log( "Has presionado el alt + F12" );
		document.getElementById( "fondo" )
		.src = "IMG/Homer.png";
		document.getElementById( "texto" )
		.textContent = "";


	}
}

//Evento que la acción y la función.
document.addEventListener( "keyup", teclaPulsada );

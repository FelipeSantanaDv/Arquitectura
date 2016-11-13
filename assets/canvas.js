
					
			function comenzar(){
							
			lienzo = document.getElementById('canvas');
		 	ctx = lienzo.getContext('2d');

			//Dejamos todo preparado para escuchar los eventos
			document.addEventListener('mousedown',pulsaRaton,false);
			document.addEventListener('mousemove',mueveRaton,false);
			document.addEventListener('mouseup',levantaRaton,false);

			//Creo las variables para el color y grosor
			color = "#333";
			grosor = 7;

			}

			function cambioColor(reciboColor){
				//Guardo en color el color seleccionado
				color = "#" + reciboColor;
				//Cambio de color el boton de relleno de fondo
				document.getElementById('rellenoFondo').style.background = color;
			}

			function cambioGrosor(reciboGrosor){
				//Guardo el grosor recibido
				grosor = reciboGrosor;
			}

			function cambioFondo(){
				document.getElementById('canvas').style.background = color;
			}
			

			function pulsaRaton(capturo){
				estoyDibujando = true;
				//Indico que vamos a dibujar
				ctx.beginPath();

				ctx.lineWidth = grosor;
				//Averiguo las coordenadas X e Y por donde va pasando el raton
				ctx.moveTo(capturo.clientX,capturo.clientY);
			}

			function mueveRaton(capturo){
				if(estoyDibujando){
					//indicamos el color de la linea
					ctx.strokeStyle = color;
					//Por donde vamos dibujando
					ctx.lineTo(capturo.clientX,capturo.clientY);
					ctx.stroke();
				}
			}

			function levantaRaton(capturo){
				//Indico que termino el dibujo
				ctx.closePath();
				estoyDibujando = false;
			}

		
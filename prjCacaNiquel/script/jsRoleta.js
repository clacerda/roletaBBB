let nSort = 0;
			let slt1, slt2, slt3, slt4;			
			
		    
			
			function aleatorio(inferior,superior){ 
				numPossibilidades = superior - inferior; 
				let num = Math.random() * numPossibilidades;
				num = Math.floor(num);
				return parseInt(inferior) + num;
				
			}
			
			function getRandomInt(min, max) {
           		min = Math.ceil(min);
           		max = Math.floor(max);
           		return Math.floor(Math.random() * (max - min)) + min;
           	}
			
			function gerarPlacar(tpSort){ 
								let p = document.getElementById("lblmsgm"); 
								p.innerHTML= " ";
								let numSort = 0;
								let sort1 = 0;
								let sort2 = 0;
								let sort3 = 0;
								let sort4 = 0;
								
						        document.getElementById('escud1').src = 'img/roleta.gif'; 
						        document.getElementById('escud2').src = 'img/roleta.gif'; 
						        document.getElementById('escud3').src = 'img/roleta.gif';  
								
								 numSort = getRandomInt(1,4);
								
								let time =  500;
								let slot = "";
								let slots = ["escud1","escud2","escud3"];
								for(i = 0; i <= slots.length -1; i ++){ 
									//
									if (tpSort === "E"){
									 nSort = numSort;
									}else{
									 nSort = aleatorio(1,4);
									}
									time += 500;
									slot = slots[i];					
									
									switch (nSort) {									 
									   case 1:
						        	   cont=setTimeout("document.getElementById('" + slot + "').src = 'img/manu.jpg' ", time); 
						        	   sort1 ++;
						        	   break;
						        	   case 2:
						        	   cont=setTimeout("document.getElementById('" + slot + "').src = 'img/thelma.jpg'", time); 
						        	   sort2 ++;
						        	   break;
						        	   case 3:
						        	   cont=setTimeout("document.getElementById('" + slot + "').src = 'img/rafa.jpg' ", time); 
						        	   sort3 ++;
						        	   break; 
									}
								}
								
								setTimeout("verificaPremio( " + sort1 + "," + sort2 + ", " + sort3 + ")", 2200);
						 
			}
			
			function verificaPremio(sort1, sort2, sort3, sort4) {
				//verifica se ganhou algum prêmio
				
				
				let p = document.getElementById("lblmsgm"); 
				//inicio dos premios maiores
				if (sort1 === 3){ 
				
					p.innerHTML= 'Quem vai para o paredão é o FULANO1';
					document.getElementsByTagName("FULANO1")[0].innerText = 'FULANO1';
				}
				
				else if (sort2 === 3){
					p.innerHTML= 'Quem vai para o paredão é o FULANO2';
					document.getElementsByTagName("FULANO2")[0].innerText = 'FULANO2';
				}
				
				else if (sort3 === 3){
					p.innerHTML= 'Quem vai para o paredão é o FULANO3';
					document.getElementsByTagName("FULANO3")[0].innerText = 'FULANO3';
				}
			 
				else  {
				    p.innerHTML= "Tente novamente";
				}
				//fim dos prêmios maiores
			}
			
			let contador = 0;
			function Contador(){
			  contador ++ ;
			  divisor(contador);
			  return contador;
			}	
						
			function divisor (contador) {
			   if(contador % 3 === 0){
				  return true;
				}else{
				return false;
				}
			}
			
			function jogar() {
			 
						let count = Contador(); 
						 
								// Function para processar slots
								GeraPropaganda();
								
								if(divisor(count)){
									 gerarPlacar("E");
									} else { 
									 gerarPlacar("R");
								 }
								 
					}
			function GeraPropaganda(){
			
								// Gerar propagandas de acordo com sorteio.
								let  numSort = getRandomInt(1,5);
								 	
									switch (numSort) {									 
									   case 1:
						        	   document.getElementById('bannerhtm1').src = 'img/img1'; 
									   document.getElementById('linkhtm1').href = '';
						        	   break;
						        	   case 2:
						        	   document.getElementById('bannerhtm1').src = 'img/img2'; 
									   document.getElementById('linkhtm1').href = '';
						        	   break;
									   case 3:
						        	   document.getElementById('bannerhtm1').src = 'img/img3'; 
									   document.getElementById('linkhtm1').href = '';
						        	   break;
									    case 4:
						        	   document.getElementById('bannerhtm1').src = 'img/img4'; 
									   document.getElementById('linkhtm1').href = '';
						        	   break;
							}
					
						}

					
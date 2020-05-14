        var jogador=prompt("Digite a opção: " + "\n" + "Pedra - Papel - Tesoura");
        

        if ((jogador != "Pedra") && (jogador != "Papel") && (jogador != "Tesoura")
	&& (jogador != "PEDRA") && (jogador != "PAPEL") && (jogador != "TESOURA")
	&& (jogador != "pedra") && (jogador != "papel") && (jogador != "tesoura"))
            {
            alert("OPÇÃO INVÁLIDA");
            }else {


        var min = Math.ceil(min);
        var max = Math.floor(max);
    
        var resultado = Math.floor(Math.random() * 3);

        if(jogador == "Pedra" && resultado == 0){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Empate");
        }else if (jogador == "Papel" && resultado == 0){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Papel cobriu Pedra");
        }else if (jogador == "Tesoura" && resultado == 0){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Pedra quebrou tesoura");
        }
            
        
        if(jogador == "Pedra" && resultado == 1){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Papel cobriu Pedra");
        }else if (jogador == "Papel" && resultado == 1){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Empate");
        }else if (jogador == "Tesoura" && resultado == 1){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Tesoura cortou papel");
        }

        if(jogador == "Pedra" && resultado == 2){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Pedra quebrou tesoura");
        }else if (jogador == "Papel" && resultado == 2){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Tesoura cortou papel");
        }else if (jogador == "Tesoura" && resultado == 2){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Empate");
        }
    }

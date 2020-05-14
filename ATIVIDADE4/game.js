        var jogador=prompt("Digite a opção: " + "\n" + "Pedra | Papel | Tesoura");
        

        if ((jogador != "Pedra") && (jogador != "Papel") && (jogador != "Tesoura")
			&& (jogador != "PEDRA") && (jogador != "PAPEL") && (jogador != "TESOURA")
			&& (jogador != "pedra") && (jogador != "papel") && (jogador != "tesoura"))
            {
            alert("OPÇÃO INVÁLIDA");
            }else {


        var min = Math.ceil(min);
        var max = Math.floor(max);
    
        var resultado = Math.floor(Math.random() * 3);

        if(jogador == "Pedra" || jogador == "PEDRA" || jogador == "pedra" && resultado == 0){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Empate");
        }else if (jogador == "Papel" || jogador == "PAPEL" || jogador == "papel" && resultado == 0){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Papel cobriu Pedra");
        }else if (jogador == "Tesoura" || jogador == "TESOURA" || jogador == "tesoura" && resultado == 0){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Pedra quebrou tesoura");
        }
            
        
        if(jogador == "Pedra" || jogador == "PEDRA" || jogador == "pedra" && resultado == 1){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Papel cobriu Pedra");
        }else if (jogador == "Papel" || jogador == "PAPEL" || jogador == "papel" && resultado == 1){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Empate");
        }else if (jogador == "Tesoura" || jogador == "TESOURA" || jogador == "tesoura" && resultado == 1){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Tesoura cortou papel");
        }

        if(jogador == "Pedra" || jogador == "PEDRA" || jogador == "pedra" == 2){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Pedra quebrou tesoura");
        }else if (jogador == "Papel" || jogador == "PAPEL" || jogador == "papel" && resultado == 2){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Tesoura cortou papel");
        }else if (jogador == "Tesoura" || jogador == "TESOURA" || jogador == "tesoura" && resultado == 2){
            alert("Você é " + jogador + "\n" + "RESULTADO: " + "Empate");
        }
    }

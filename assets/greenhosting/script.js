function carregaLista() {
    var listagem = {
        site01: {
            nome: "GreenGeeks >",
            imagem: "img/planta-01.png",
            descricao:
                "GreenGeeks é um grande player no mundo da hospedagem na web, que compensa com sucesso três vezes sua pegada de carbono. Seus planos são acessíveis e ricos em recursos, tornando a marca uma ótima escolha.",
        },
        
        site02: {
            nome: "IPage >",
            imagem: "img/planta-02.png",
            descricao:
                "O iPage oferece o plano de hospedagem ecologicamente correto mais acessível, mas sem recursos, portanto, planeje pagar mais por backups ou um site comercial.",
        },
        site03: {
            nome: "HostPapa >",
            imagem: "img/planta-03.png",
            descricao: "HostPapa é um serviço web simples que é bom para pequenos sites que desejam escolher uma plataforma de hospedagem mais ecológica.",
 

        },
        site04: {
            nome: "A2 Hosting >",
            imagem: "img/planta-04.png",
            descricao: "O A2 Hosting é econômico, não prejudica o meio ambiente e oferece muito suporte ao cliente.",


        },
        site05: {
            nome: "Greenhost >",
            imagem: "img/planta-05.png",
            descricao: "Esta empresa holandesa de hospedagem alimenta-se de energia eólica renovável (sem pagar por créditos de energia para compensar seu uso de carbono!) E não aumentará seu preço fixo anual depois que você chegar ao final do período promocional.",


        },
        bio06: {
            nome: "FatCow >",
            imagem: "img/planta-06.png",
            descricao: "Embora a interface do FatCow possa lembrá-lo da Internet de anos atrás, essa plataforma de hospedagem ainda é uma ótima opção ecológica para o seu site, especialmente se você quiser ajuda extra com o processo de configuração.",


        },

    };
    
    var content = document.getElementById("content");

    for (var site in listagem) {
        content.innerHTML += 
        '<div class="card">' + 
        '<img src="' + 
        listagem[site].imagem + 
        '""/>' +
        "<details>" +  
        "<summary>" +
         listagem[site].nome +
        "</summary>" +
        "<p>" +
        listagem[site].descricao +
        "</p>" +
        "</details>" +
         "</div>";

    
    };

}


carregaLista();
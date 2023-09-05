 // https://typebot.io/my-typebot-2zwblcs

 async function chatInteraction() {
    async function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function addCheckIcon() {
      var svgString = `<svg id="checkIcon" class="checkIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.626 24.684" style="position: absolute;bottom: 0;right: 5px;" height="20" width="18">
        <g id="Grupo_1" data-name="Grupo 1" transform="translate(-708.9 -601.383)">
          <path id="Caminho_6" data-name="Caminho 6" d="M728.035,623.468l1.382,1.482,17.929-20.334" transform="translate(-1.937 -1.117)" fill="none" stroke="#07c654" stroke-linecap="round" stroke-width="3"></path>
          <path id="Caminho_7" data-name="Caminho 7" d="M712.017,616.07l7.088,8.039,17.757-20.14" transform="translate(-1 -0.469)" fill="none" stroke="#07c654" stroke-linecap="round" stroke-width="3"></path>
        </g>
      </svg>`;

      var tempContainer = document.createElement('div');
      tempContainer.innerHTML = svgString;

      var svgElement = tempContainer.firstChild;
      return svgElement;
    }

    function loadingWave() {
      return `
        <div class="wave">
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>
        </div>
      `;
    }

    
    function calculateElementWidth(text) {
      const averageCharacterWidth = 8.6; // Valor aproximado da largura de um caractere em pixels
      const screenWidth = window.innerWidth;
      let calculatedWidth;

      if (screenWidth < 567) {
        calculatedWidth = screenWidth - 40;
      } else {
        const widthFromText = text.length * averageCharacterWidth;
        calculatedWidth = Math.min(widthFromText, 684);
      }

      return calculatedWidth;
    }

    async function addVideoInChat(videoURL) {
      var textElement = document.createElement('div');
      textElement.setAttribute("id", "chat-text-video");
      textElement.classList.add("textConversa");

      var video = document.createElement('iframe');
      video.src = videoURL;
      video.controls = true;
      video.muted = false;
      video.height = 240;
      video.width = 320;

      var checkIcon = await addCheckIcon();

      document.getElementById("chatbox").appendChild(textElement);
      
      textElement.innerHTML = loadingWave(); // Loading
      await delay(1000);
      textElement.querySelector('.wave').remove(); // Remove oading
      await delay(400);

      textElement.appendChild(video);
      textElement.style.width = "fit-content";
      textElement.appendChild(checkIcon);

      delay(1500);
      scrollDown();
    }

    async function addAudioInChat(audioSrc) {
      const delay = ms => new Promise(res => setTimeout(res, ms));

      var textElement = document.createElement('div');
      textElement.setAttribute("id", "chat-text");
      textElement.classList.add("textConversa");

      var audioContainer = document.createElement('div');
      audioContainer.classList.add("audio-container"); // Adicione uma classe para o contêiner de áudio

      var audio = document.createElement('audio');
      audio.setAttribute("controls", "controls");
      audio.setAttribute("autoplay", "autoplay");
      audio.setAttribute("src", audioSrc);
      var checkIcon = await addCheckIcon();

      document.getElementById("chatbox").appendChild(textElement);

      textElement.innerHTML = loadingWave(); // Loading
      await delay(1000);
      textElement.querySelector('.wave').remove(); // Remove oading
      await delay(400);
      audioContainer.appendChild(audio); // Coloque o áudio dentro do contêiner

      textElement.appendChild(audioContainer); // Adicione o contêiner de áudio ao elemento de texto
      textElement.appendChild(checkIcon);
      textElement.style.width = "fit-content";

      delay(1500);
      scrollDown();
    }


    async function addImageInChat(imageSrc) {
      const delay = ms => new Promise(res => setTimeout(res, ms));

      var textElement = document.createElement('div');
      textElement.setAttribute("id", "chat-text");
      textElement.classList.add("textConversa");

      var image = document.createElement('img');
      image.setAttribute("src", imageSrc);
      image.onload = () => {
        image.classList.add("loaded"); // Add the "loaded" class to trigger the transitions
      };
      var checkIcon = await addCheckIcon();

      document.getElementById("chatbox").appendChild(textElement);

      textElement.innerHTML = loadingWave(); // Loading
      await delay(2000);
      textElement.querySelector('.wave').remove(); // Remove oading
      await delay(400);
      textElement.appendChild(image);
      textElement.appendChild(checkIcon);
      textElement.style.width = "fit-content";

      await delay(1000);
      scrollDown();
    }

    async function addTextInChat(text) {
      const delay = ms => new Promise(res => setTimeout(res, ms));
      var textElement = document.createElement('div');
      textElement.setAttribute("id", "chat-text");
      textElement.classList.add("textConversa");

      var p = document.createElement('p');
      var checkIcon = await addCheckIcon();
      var newWidth = calculateElementWidth(text);
      
      document.getElementById("chatbox").appendChild(textElement);

      textElement.innerHTML = loadingWave(); // Loading
      await delay(2000);
      textElement.querySelector('.wave').remove(); // Remove oading
      textElement.style.width = newWidth + 'px'; // adiciona largura no container do texto

      await delay(400);
      textElement.appendChild(p); // Adiciona o elemento P
      textElement.appendChild(checkIcon);
      p.innerHTML  = text; // Adiciona o texto

      await delay(1000);
      scrollDown();
    }

    async function addInputText(placeholder, storageName, func) {
      var div = document.createElement('div');
      div.setAttribute("id", "chat-user-input");
      div.setAttribute("class", "chat-user-input");

      var input = document.createElement('input');
      input.setAttribute("id", "text")
      input.setAttribute("placeholder", placeholder);
      input.classList.add("inputStyle");

      div.appendChild(input);

      var button = document.createElement('button');
      button.classList.add("form-control");
      button.innerHTML = "Enviar";
      button.onclick = function() {
        var inputValue = input.value;
        localStorage.setItem(storageName, inputValue);
        input.disabled = true;
        button.disabled = true;
        func();
      };

      div.appendChild(button);

      document.getElementById("chatbox").appendChild(div);

      await delay(500);
      scrollDown();
    }

    async function linkDeCompra() {
      var div = document.createElement('div');
      div.setAttribute("class", "chat-user-button");

      var bt = document.createElement("button");
      bt.classList.add("form-control");
      bt.innerHTML = "COMPRAR AGORA!";

      bt.addEventListener("click", function () {
        window.open('https://go.perfectpay.com.br/PPU38CM69OP', '_blank');
      });

      div.appendChild(bt);

      document.getElementById("chatbox").appendChild(div);

      delay(1000);
      scrollDown();
    }

    async function typeWriter(txt, div) {
      let i = 0;

      typeWriterHandler = () => {
        txt = txt.slice(1);
        typeWriter(txt, div);
      }
      if (i < txt.length) {
        div.innerHTML += txt.charAt(i)
        i++;
        setTimeout(typeWriterHandler, 20);
      }
    }

    async function scrollDown() {
      var objDiv = document.getElementById("chatbox");
      objDiv.scrollTo({
        top: objDiv.scrollHeight + 100,
        behavior: "smooth"
      });

      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }

    async function createButton(buttonText1, buttonText2, func) {
      var div = document.createElement('div');
      div.setAttribute("class", "chat-user-button");

      var button1 = document.createElement('button');
      button1.classList.add("form-control");
      button1.innerHTML = buttonText1;
      button1.onclick = async function () {
        button1.disabled = true; // Desativa o botão após o clique
        if (button2) {
          button2.disabled = true; // Desativa o botão após o clique
        }
        await func(); // Chama a função passada como argumento
      };

      div.appendChild(button1);

      var button2 = null;
      if (buttonText2) {
        button2 = document.createElement('button');
        button2.classList.add("form-control");
        button2.innerHTML = buttonText2;
        button2.onclick = async function () {
          button1.disabled = true; // Desativa o botão após o clique
          button2.disabled = true; // Desativa o botão após o clique
          await func(); // Chama a função passada como argumento
        };
        div.appendChild(button2);
      }

      document.getElementById("chatbox").appendChild(div);
      
      await delay(500);
      scrollDown();
    }


 
    // ************************************** O CHAT COMEÇA AQUI **************************************

    async function primeiroChat() {
      addVideoInChat("https://www.youtube.com/embed/zKqarsxDg0c?si=EyxehG48QBC6E_Tk");
      await delay(2000);
      addTextInChat("Olá, seja bem vindo ao <b>Feirão Limpa Nome Serasa!</b>");

      // Adiciona texto no chat
      await delay(2000);
      addTextInChat("Gostaria de aproveitar os <b>últimos dias</b> do Feirão Limpa Nome Serasa, <b>quitar suas dívidas</b> e ter seu <b>nome limpo novamente</b>?");

      // Adiciona botão na tela
      await delay(2000);
      createButton("EU QUERO!", null, segundoChat);
    }

    // ************************************** Segundo Chat **************************************
    async function segundoChat() {
      await delay(2000);
      addImageInChat("https://s3.fr-par.scw.cloud/typebot/public/typebots/cll3u3ixb004umo0ffzpq4hti/blocks/ixanzkk0wflf1gfvpzzyy3w7?v=1691591968901");

      await delay(2000);
      addAudioInChat("https://s3.fr-par.scw.cloud/typebot/public/typebots/cll3u3ixb004umo0ffzpq4hti/blocks/zposc07a7qgg0uxhf25z4cyp?v=1691591984570");

      await delay(2000);
      addTextInChat("O <b>Feirão Limpa Nome</b> foi extendido para te ajudar a se livrar de uma vez por todas das suas dívidas.");

      await delay(2000);
      addTextInChat("Aqui na <b>Serasa</b> o atendimento é online, simples e rápido.");

      await delay(2000);
      addTextInChat("Negocie dívidas com as seguintes empresas:");

      await delay(2000);
      addImageInChat("https://s3.fr-par.scw.cloud/typebot/public/typebots/cll3u3ixb004umo0ffzpq4hti/blocks/blopbb1to52sb7tl6oeg47jz?v=1691592034187");

      await delay(2000);
      addTextInChat("Para continuar, por favor informe seu <b>CPF:</b>");

      await delay(2000);
      await addInputText('Digite seu CPF aqui', 'cpf', terceiroChat);

    }

    // ************************************** Terceiro Chat **************************************
    async function terceiroChat() {
      await delay(2000);
      await addInputText('Digite o seu NOME COMPLETO', 'nomeCompleto', quartoAssunto);
    }

    // ************************************** Quarto Chat **************************************
    async function quartoAssunto() {
      await delay(2000);
      addTextInChat("<i>Por favor, aguarde enquanto nosso sistema analisa as informações...</i>");
      
      await delay(2000);
      addImageInChat("https://s3.fr-par.scw.cloud/typebot/public/typebots/cll3u3ixb004umo0ffzpq4hti/blocks/f1yx7dvi0t44nfhqedfohybh?v=1691592125266");
      
      var cpf = localStorage.getItem('cpf');
      var nomeCompleto = localStorage.getItem('nomeCompleto');
      await delay(2000);
      addTextInChat("Identificamos <b>pendências</b> no sistema relacionadas a valores que variam entre <b>R$898,74 a R$9.742,94</b> no <b>NOME " + nomeCompleto +"</b> e <b>CPF " + cpf + "</b>. De acordo com nossos registros, a situação está atualmente <b>Negativada!</b>");

      await delay(2000);
      addTextInChat("Boas notícias "+ nomeCompleto +", <b>SOMENTE HOJE</b> você recebeu um <b>SUPER DESCONTO de 98%</b> para quitar sua dívida");

      await delay(2000);
      addTextInChat("Você gostaria de <b>quitar sua dívida por apenas R$ 56,97 à vista</b> ou <b>11x R$ R$6,15 no cartão</b> e ter seu <b>nome limpo novamente</b>?");

      await delay(2000);
      createButton("SIM QUERO QUITAR MINHAS DÍVIDAS!", null, quintoAssunto);
    }

    // ************************************** Quinto Chat **************************************
    async function quintoAssunto() {
      var cpf = localStorage.getItem('cpf');
      await delay(2000);
      addTextInChat("Lembrando que o <b>não pagamento</b> do acordo pode <b>ocasionar restrições ainda maiores em seu CPF " + cpf + "</b>!");

      await delay(2000);
      addTextInChat("Após o pagamento, o Serasa pede até <b>2 horas</b> para quitar suas dívidas com os credores e você terá seu CPF regularizado novamente!");

      await delay(2000);
      createButton("QUERO LIMPAR MEU NOME", null, sextoAssunto);
    }

    // ************************************** Sexto Chat **************************************
    async function sextoAssunto() {
      await delay(2000);
      addTextInChat("<i>Aguarde um instante, você será redirecionado ao pagamento...</i>");

      await delay(8000);
      window.location = 'https://go.perfectpay.com.br/PPU38CMSR1H'; // Pagina de compra
     
      // linkDeCompra();
    }

    primeiroChat();
  }
  chatInteraction();
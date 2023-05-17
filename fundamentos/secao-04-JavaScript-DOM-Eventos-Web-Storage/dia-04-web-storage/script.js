// Cor de fundo da tela:
window.onload = () => { //primeiro tem que chamar o window.onload para carregar a página antes. Depois, cria uma função com o parâmetro que está relacionado com o que eu quero. Chama o elemento.Define o que você deseja modificar no estilo. O localStorage.setItem serve para colocar as alterações no local storage e ficar registrado. O 'background' foi o nome que decidi dar para minha chave, e o color é o meu valor(parâmetro)
    const backgroundColor = (color) => {
        let content = document.querySelector(".content");
        content.style.backgroundColor = color;
        localStorage.setItem('background', color);
    };
    // Nesta função estamos desenvolvendo o evento que desejo. Cria-se uma variável com o elemento chamando o botão que está no HTML. Como é um array, para percorrer criamos um for. Pega essa variável no index e adiciona o evento. O (event.target.innerHTML) me diz apenas o nome do botão que eu desejo e para aparecer de acordo com as cores que eu tenho, chama-se a função de início que foi definida os estilos.
    let backgroundButton = document.querySelectorAll('#background-color>button');
    for (let index = 0; index < backgroundButton.length; index += 1) {
        backgroundButton[index].addEventListener('click', (event) => {
            backgroundColor(event.target.innerHTML)
        });
    };


    // Cor do texto:
    const colorParagraph = (color) => {
        let paragraph = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraph.length; index += 1) {
            paragraph[index].style.color = color;
            localStorage.setItem('colorParagraph', color);
        }
    };
    let colorParagraphButton = document.querySelectorAll('#font-color>button');
    for (let index = 0; index < colorParagraphButton.length; index += 1) {
        colorParagraphButton[index].addEventListener('click', (event) => {
            colorParagraph(event.target.innerHTML);
        })
    }



    // Tamanho da fonte:
    const fontSize = (size) => {
        let paragraph = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraph.length; index += 1) {
            paragraph[index].style.fontSize = size;
            localStorage.setItem('fontSize', size);
        }
    };
    let fontSizeButton = document.querySelectorAll('#font-size>button');
    for (let index = 0; index < fontSizeButton.length; index += 1) {
        fontSizeButton[index].addEventListener('click', (event) => {
            fontSize(event.target.innerHTML);
        });
    }


    // Espaçamento entre linhas:
    const lineHeight = (height) => {
        let paragraph = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraph.length; index += 1) {
            paragraph[index].style.lineHeight = height;
            localStorage.setItem('lineHeight', height);
        }
    };
    const lineHeightButton = document.querySelectorAll('#line-height>button');
    for (let index = 0; index < lineHeightButton.length; index += 1) {
        lineHeightButton[index].addEventListener('click', (event) => {
            lineHeight(event.target.innerHTML)
        });
    }



    // Tipo de fonte:
    const fontFamily = (family) => {
        let paragraph = document.querySelectorAll('.paragraph');
        for (let index = 0; index < paragraph.length; index += 1) {
            paragraph[index].style.fontFamily = family;
            localStorage.setItem('fontFamily', family);
        }
    };
    const fontFamilyButton = document.querySelectorAll('#font-family>button');
    for (let index = 0; index < fontFamilyButton.length; index += 1) {
        fontFamilyButton[index].addEventListener('click', (event) => {
            fontFamily(event.target.innerHTML)
        });
    }

    // como salvar as alterações no site depois que der o refresh:
    const initialize = () => {
        let background = localStorage.getItem('background'); // 'background' é a chave definida no localStorage.
        backgroundColor(background); // backgroundColor é a função definida lá no inicio. (background) é a função definida para resgatar no localStorage.

        let fontColor = localStorage.getItem('colorParagraph');
        colorParagraph(fontColor);

        let size = localStorage.getItem('fontSize');
        fontSize(size);

        let height = localStorage.getItem('lineHeight');
        lineHeight(height);

        let font = localStorage.getItem('fontFamily');
        fontFamily(font);









    }
    console.log(initialize()); // não esquecer de chamar a função!
}
function createElementInside(location, elementType, elementID, elementClass) {
    let elementCreated = document.createElement(elementType);
    if (elementID != undefined) {
        elementCreated.setAttribute("id", elementID);
    }

    if (elementClass != undefined) {
        elementCreated.setAttribute("class", elementClass);
    }
    
    document.querySelector(location).appendChild(elementCreated);
}

function fillHeader() {
    //creating elements
    createElementInside("header", "img");
    createElementInside("header", "h1", "header-h1");

    //setting attributes
    document.querySelector("header img").setAttribute("src", "assets/cats.jpg");
    document.querySelector("#header-h1").innerHTML = "GATOS";
}
fillHeader()

function fillMain () {
    function fillFirstSection() {
        //creating elements
        createElementInside("main", "section", "firstSection");
        createElementInside("#firstSection", "p", "firstSection-p");

        //setting attributes
        document.querySelector("#firstSection-p").innerHTML = "O gato (Felis Silvestris Catus) é um animal da família dos Felídeos, muito popular como animal de estimação. Ocupando o topo da cadeia alimentar, é um predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetos.";
        createElementInside("#firstSection", "p", "firstSection-p2");
        document.querySelector("#firstSection-p2").innerHTML = "Abaixo veremos algumas raças de gatos:";
    }
    fillFirstSection()

    function fillSecondSection() {
        //creating elements
        createElementInside("main", "section", "secondSection", "sectionImgLeft");
        createElementInside("#secondSection", "h3", "secondSection-h3");
        createElementInside("#secondSection", "div", "secondSection-container");
        createElementInside("#secondSection-container", "img", "secondSection-img");
        createElementInside("#secondSection-container", "p", "secondSection-p");

        //setting attributes
        document.querySelector("#secondSection-h3").innerHTML = "Gato-de-bengala"
        document.querySelector("#secondSection-img").setAttribute("src", "assets/bengalCat.jpg")
        document.querySelector("#secondSection-p").innerHTML = "O gato-de-bengala, ou Bengal, é uma recente raça de gato americana, que originou-se do cruzamento seletivo entre gatos domésticos e o gato-leopardo asiático (Prionailurus bengalensis), que habita regiões próximas ao Golfo de Bengala. O qual pode também ser domesticado, embora uma licença seja requerida na maior parte dos países. Sabe-se que o gato-leopardo tem o mesmo número de cromossomos que um gato doméstico, aspecto essencial que permitiu que os acasalamentos produzissem crias férteis."
    }
    fillSecondSection()

    function fillThirdSection() {
        //creating elements
        createElementInside("main", "section", "thirdSection", "sectionImgRight");
        createElementInside("#thirdSection", "h3", "thirdSection-h3");
        createElementInside("#thirdSection", "div", "thirdSection-container");
        createElementInside("#thirdSection-container", "img", "thirdSection-img");
        createElementInside("#thirdSection-container", "p", "thirdSection-p");

        //setting attributes
        document.querySelector("#thirdSection-h3").innerHTML = "British Shorthair"
        document.querySelector("#thirdSection-img").setAttribute("src", "assets/britishShorthair.jpg")
        document.querySelector("#thirdSection-p").innerHTML = "Gato de pelo curto inglês (em inglês: British Shorthair) é uma raça de gatos de origem britânica. É mais conhecida por sua pelagem cinza e olhos cobres vibrantes. É provavelmente a mais antiga raça de gato, e uma das mais populares. O British Shorthair, também chamado de padrão britânico, é uma das raças de gatos mais antigas do mundo. Gatos do Egito, levados pelo Exército Romano para a Inglaterra por volta de 400 a.C, acasalaram com espécies nativas da região, produzindo posteriormente uma raça robusta e forte, que rapidamente se adaptaram à terra e ao clima."
    }
    fillThirdSection()

    function fillFourthSection() {
        //creating elements
        createElementInside("main", "section", "fourthSection", "sectionImgLeft");
        createElementInside("#fourthSection", "h3", "fourthSection-h3");
        createElementInside("#fourthSection", "div", "fourthSection-container");
        createElementInside("#fourthSection-container", "img", "fourthSection-img");
        createElementInside("#fourthSection-container", "p", "fourthSection-p");

        //setting attributes
        document.querySelector("#fourthSection-h3").innerHTML = "Maine Coon"
        document.querySelector("#fourthSection-img").setAttribute("src", "assets/maineCoon.jpg")
        document.querySelector("#fourthSection-p").innerHTML = "Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos. É considerada a raça de pelo mais antiga, além de ser a maior de todas as raças de gato do mundo. Foi reconhecida como raça oficial no estado norte-americano do Maine, onde era famoso pela sua capacidade de caçar ratos e tolerar climas rigorosos. Também é conhecido como 'o gigante gentil'."
    }
    fillFourthSection()

    function fillFifthSection() {
        //creating elements
        createElementInside("main", "section", "FifthSection", "sectionImgRight");
        createElementInside("#FifthSection", "h3", "FifthSection-h3");
        createElementInside("#FifthSection", "div", "FifthSection-container");
        createElementInside("#FifthSection-container", "img", "FifthSection-img");
        createElementInside("#FifthSection-container", "p", "FifthSection-p");

        //setting attributes
        document.querySelector("#FifthSection-h3").innerHTML = "Munchkin"
        document.querySelector("#FifthSection-img").setAttribute("src", "assets/munchkin.jpg")
        document.querySelector("#FifthSection-p").innerHTML = "O gato Munchkin é uma raça recente de gatos caracterizada por suas pernas curtas, que são causadas por uma mutação genética. Muita controvérsia surgiu quando a raça foi reconhecida pela The International Cat Association (TICA) em 1995 com críticas demonstrando preocupação a respeito de problemas com a saúde e mobilidade dos animais. O nome 'munchkin' é derivado dos pequenos habitantes do País dos Munchkins na obra O Maravilhoso Mágico de Oz do escritor L. Frank Baum."
    }
    fillFifthSection()

    function fillSixthSection() {
        //creating elements
        createElementInside("main", "section", "sixthSection", "sectionImgLeft");
        createElementInside("#sixthSection", "h3", "sixthSection-h3");
        createElementInside("#sixthSection", "div", "sixthSection-container");
        createElementInside("#sixthSection-container", "img", "sixthSection-img");
        createElementInside("#sixthSection-container", "p", "sixthSection-p");

        //setting attributes
        document.querySelector("#sixthSection-h3").innerHTML = "Ragdoll"
        document.querySelector("#sixthSection-img").setAttribute("src", "assets/ragdoll.jpg")
        document.querySelector("#sixthSection-p").innerHTML = "Ragdoll é uma raça de gato desenvolvida nos Estados Unidos durante a década de 1950. Com seu porte gigante, temperamento dependente, dócil e uma pelagem cheia, é um animal de características marcantes. Sua criação se deu a partir com uma gata branca, com características de Angorá e gatos Sagrado da Birmânia. Hoje em dia é uma das raças mais apreciadas nos Estados Unidos."
    }
    fillSixthSection()
}
fillMain()

function fillFooter() {
    //creating elements
    createElementInside("footer", "p", "footer-p")

    //setting attributes
    document.querySelector("#footer-p").innerHTML = "Feito por Felype Nascimento, amante de gatos."
    
}

fillFooter()

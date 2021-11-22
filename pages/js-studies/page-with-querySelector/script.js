// ------------- header --------------

function headerLink() {
    // variables
    let createH1 = document.createElement("h1");
    let createLink = document.createElement("a");

    // variables attributes
    createLink.setAttribute("id", "headerLink");
    createLink.setAttribute("href", "https://www.linkinpark.com/");
    createH1.setAttribute("id", "headerLink-h1");
    document.querySelector("header").setAttribute("style", "background-image: url(assets/lpbg.png)");
    
    // appends and attribuitions
    document.querySelector("header").appendChild(createLink);
    document.querySelector("#headerLink").appendChild(createH1);
    document.querySelector("#headerLink-h1").innerHTML = "LINKIN PARK";
}
headerLink()


// ------------- profile --------------

document.querySelector("#my-name").innerHTML = "Felype Nascimento";
document.querySelector("#my-photo").src = "assets/profilePicture.jpg";
document.querySelector("#age").innerHTML = "25 anos";
document.querySelector("#state").innerHTML = "São Gonçalo - Rio de Janeiro";

// ------------- summary --------------

function summary() {
    // variables 
    let createSection = document.createElement("section");
    let createP = document.createElement("p");
    let createH2 = document.createElement("h2");

    //element appending
    document.querySelector("main").appendChild(document.createElement("section"));
    document.querySelector("main section:nth-child(2)").setAttribute("id", "summary");
    document.querySelector("#summary").appendChild(document.createElement("h2"));
    document.querySelector("#summary").appendChild(document.createElement("p"));

    //element inner html
    document.querySelector("#summary > h2").innerHTML = "Linkin Park Discography";
    document.querySelector("#summary > p").innerHTML = "Here we will see the discography (not entirely, but the main ones) of my favorite band.";
}
summary();

// ------------- first album --------------

function firstAlbum() {
    //element appending
    document.querySelector("main").appendChild(document.createElement("section"));
    document.querySelector("main section:nth-child(3)").setAttribute("id", "firstAlbum")
    document.querySelector("#firstAlbum").appendChild(document.createElement("h3"))
    document.querySelector("#firstAlbum").appendChild(document.createElement("img"))
    document.querySelector("#firstAlbum").appendChild(document.createElement("p"))

    //element inner html
    document.querySelector("#firstAlbum > h3").innerHTML = "Hybrid Theory (2000)"
    document.querySelector("#firstAlbum > img").setAttribute("src", "assets/hybridTheory.jpg")
    document.querySelector("#firstAlbum > p").innerHTML = "Hybrid Theory (stylized as [HYBRID THEORY]) is the debut studio album by American rock band Linkin Park, released on October 24, 2000 by Warner Bros. Records. Produced by Don Gilmore, it was recorded at NRG Recording Studios in North Hollywood, California, during 1998, 1999 and 2000 Its lyrical themes deal with problems the band's lead singer Chester Bennington experienced during adolescence, including drug abuse and the conflict and divorce of his parents. The album takes its title from the previous name of the band, as well as the concept of music theory and combining different styles of genres."
}
firstAlbum();

function secondAlbum() {
    //element appending
    document.querySelector("main").appendChild(document.createElement("section"));
    document.querySelector("main section:nth-child(4)").setAttribute("id", "secondAlbum")
    document.querySelector("#secondAlbum").appendChild(document.createElement("h3"))
    document.querySelector("#secondAlbum").appendChild(document.createElement("img"))
    document.querySelector("#secondAlbum").appendChild(document.createElement("p"))

    //element inner html
    document.querySelector("#secondAlbum > h3").innerHTML = "Meteora (2003)"
    document.querySelector("#secondAlbum > img").setAttribute("src", "assets/meteora.jpg")
    document.querySelector("#secondAlbum > p").innerHTML = "Meteora is the second studio album by American rock band Linkin Park. It was released on March 25, 2003, through Warner Bros. Records, following Reanimation, a collaboration album which featured remixes of songs included on their 2000 debut studio album Hybrid Theory. The album was produced by the band alongside Don Gilmore. The title Meteora is taken from the Greek Orthodox monasteries originally bearing the name. Meteora has a similar sound to Hybrid Theory, as described by critics, and the album took almost a year to be recorded. It is the first Linkin Park studio album to feature bassist Dave Farrell after he rejoined the band in 2000 after temporarily touring with other bands."
}
secondAlbum();

function thirdAlbum() {
    //element appending
    document.querySelector("main").appendChild(document.createElement("section"));
    document.querySelector("main section:nth-child(5)").setAttribute("id", "thirdAlbum")
    document.querySelector("#thirdAlbum").appendChild(document.createElement("h3"))
    document.querySelector("#thirdAlbum").appendChild(document.createElement("img"))
    document.querySelector("#thirdAlbum").appendChild(document.createElement("p"))

    //element inner html
    document.querySelector("#thirdAlbum > h3").innerHTML = "Minutes to Midnight (2007)"
    document.querySelector("#thirdAlbum > img").setAttribute("src", "assets/minutesToMidnight.jpg")
    document.querySelector("#thirdAlbum > p").innerHTML = "Minutes to Midnight is the third studio album by American rock band Linkin Park, released on May 14, 2007 by Machine Shop Recordings and Warner Bros. Records. Linkin Park started work on their third album in 2003 before taking a break to tour in support of their previous studio album Meteora in 2004. During this time period, members of the band formed numerous side projects; Mike Shinoda formed his hip hop side project Fort Minor, while Chester Bennington formed the rock supergroup Dead By Sunrise. This resulted in their third album to be shelved temporarily; however, the band returned to work on the project afterwards."
}
thirdAlbum();

function fourthAlbum() {
    //element appending
    document.querySelector("main").appendChild(document.createElement("section"));
    document.querySelector("main section:nth-child(6)").setAttribute("id", "fourthAlbum")
    document.querySelector("#fourthAlbum").appendChild(document.createElement("h3"))
    document.querySelector("#fourthAlbum").appendChild(document.createElement("img"))
    document.querySelector("#fourthAlbum").appendChild(document.createElement("p"))

    //element inner html
    document.querySelector("#fourthAlbum > h3").innerHTML = "A Thousand Suns (2010)"
    document.querySelector("#fourthAlbum > img").setAttribute("src", "assets/aThousandSuns.jpg")
    document.querySelector("#fourthAlbum > p").innerHTML = "A Thousand Suns is the fourth studio album by American rock band Linkin Park, released on September 8, 2010 by Machine Shop Recordings and Warner Bros. Records. It was recorded from November 2008 to August 2010 at NRG Recording Studios in North Hollywood, California, and was produced by Rick Rubin and band member Mike Shinoda, who both produced the band's previous album Minutes to Midnight (2007)."
}
fourthAlbum();

function fifthAlbum() {
    //element appending
    document.querySelector("main").appendChild(document.createElement("section"));
    document.querySelector("main section:nth-child(7)").setAttribute("id", "fifthAlbum")
    document.querySelector("#fifthAlbum").appendChild(document.createElement("h3"))
    document.querySelector("#fifthAlbum").appendChild(document.createElement("img"))
    document.querySelector("#fifthAlbum").appendChild(document.createElement("p"))

    //element inner html
    document.querySelector("#fifthAlbum > h3").innerHTML = "Living Things (2012)"
    document.querySelector("#fifthAlbum > img").setAttribute("src", "assets/livingThings.jpg")
    document.querySelector("#fifthAlbum > p").innerHTML = "Living Things (stylized as LIVING THINGS) is the fifth studio album by American rock band Linkin Park. It was first released on June 20, 2012 in Japan and on June 26, 2012 in the United States by Machine Shop Recordings and Warner Bros. Records. It was produced by Rick Rubin and band member Mike Shinoda, who both produced the band's previous two studio albums Minutes to Midnight (2007) and A Thousand Suns (2010), and was recorded at NRG Recording Studios in North Hollywood, California, from March 2011 to April 2012. Musically, Living Things combines elements of the band's first four studio albums to create a new sound; the band stated they finally felt they were in 'familiar territory' after years of experimentation that resulted in Minutes to Midnight and A Thousand Suns."
}
fifthAlbum();

function sixthAlbum() {
    //element appending
    document.querySelector("main").appendChild(document.createElement("section"));
    document.querySelector("main section:nth-child(8)").setAttribute("id", "sixthAlbum")
    document.querySelector("#sixthAlbum").appendChild(document.createElement("h3"))
    document.querySelector("#sixthAlbum").appendChild(document.createElement("img"))
    document.querySelector("#sixthAlbum").appendChild(document.createElement("p"))

    //element inner html
    document.querySelector("#sixthAlbum > h3").innerHTML = "Hunting Party (2014)"
    document.querySelector("#sixthAlbum > img").setAttribute("src", "assets/huntingParty.jpg")
    document.querySelector("#sixthAlbum > p").innerHTML = "The Hunting Party is the sixth studio album by American rock band Linkin Park, released on June 13, 2014 by Machine Shop Recordings and Warner Bros. Records. Produced by band members Brad Delson and Mike Shinoda, it was recorded at Larrabee Studios in Van Nuys, California, EastWest Studios in Hollywood, and Glenwood Place Studios in Los Angeles, and was recorded from May 2013 to April 2014. It is the band's first studio album since Meteora (2003) not to be produced by Rick Rubin, who had co-produced the band's previous three albums Minutes to Midnight (2007), A Thousand Suns (2010), and Living Things (2012). The Hunting Party marks a departure from the electronic rock sound of A Thousand Suns and Living Things, and was described by Shinoda as simply 'a rock record' serving as a statement by the band against contemporary mainstream and active rock bands, whom he accused of 'trying to be other bands and playing it safe'. The album's title is a contextual metaphor, with the band being the 'party' that is 'hunting' to bring back the 'energy and soul' of rock music."
}
sixthAlbum();

function seventhAlbum() {
    //element appending
    document.querySelector("main").appendChild(document.createElement("section"));
    document.querySelector("main section:nth-child(9)").setAttribute("id", "seventhAlbum")
    document.querySelector("#seventhAlbum").appendChild(document.createElement("h3"))
    document.querySelector("#seventhAlbum").appendChild(document.createElement("img"))
    document.querySelector("#seventhAlbum").appendChild(document.createElement("p"))

    //element inner html
    document.querySelector("#seventhAlbum > h3").innerHTML = "One More Light (2017)"
    document.querySelector("#seventhAlbum > img").setAttribute("src", "assets/oneMoreLight.jpg")
    document.querySelector("#seventhAlbum > p").innerHTML = "One More Light is the seventh studio album by American rock band Linkin Park, released on May 19, 2017 by Machine Shop Recordings and Warner Bros. Records. As with their previous album The Hunting Party (2014), it was produced by band members Brad Delson and Mike Shinoda, and was recorded from September 2015 to February 2017. Its sound has been described as being more pop-focused, departing from the alternative metal sound of their previous releases, and features guest appearances from Pusha T, Stormzy, and Kiiara. The album is also the band's first to feature a title track, as they felt that 'One More Light' was the 'heart' of the album."
}
seventhAlbum();

function futurePlans(){

    div = document.getElementById("first_div");
    document.getElementById("choice1").classList.remove("choice");
    document.getElementById("choice2").classList.remove("choice");

    document.getElementById("choice3").onclick="";
    document.getElementById("choice3").classList.remove("choice");
    document.getElementById("choice3").classList.add("chosen");

    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));

    var newPar = document.createElement("p");
    newPar.id = "futurePlans";
    div.append(newPar);

    sound = new Howl({
        src: ["../sounds/sound.mp3"],
    });
    sound.play();
    var typed = new Typed("#futurePlans", {
        strings: ["Hmmmmmmmmm. ",
        "Hmmmmmmmmm. Quite curious that you decide to ask me that question. <br> <br>",
        "Hmmmmmmmmm. Quite curious that you decide to ask me that question. <br> <br> To be quite frank, I haven't thought that far ahead. Shameful for someone like me I know. <br> <br>"],
        typeSpeed: 30,
        
        onComplete: function(){
            sound.stop();
            document.getElementsByTagName("span")[1].classList.remove("typed-cursor");
            document.getElementsByTagName("span")[1].classList.remove("typed-cursor--blink");
            document.getElementsByTagName("span")[1].innerHTML="";

            var terminal = document.createElement("ul");
            terminal.id="terminalChoice";

            var choice1 = document.createElement("li");
            choice1.innerHTML = "Any reason why...you didn't think about it? Kind of dumb if you ask me.";
            choice1.classList.add("choice");
            choice1.id="waldenStupid";
            terminal.appendChild(choice1);

            var choice2 = document.createElement("li");
            choice2.innerHTML = "What CAN you do from inside a computer?";
            choice2.classList.add("choice");
            choice2.id="waldenAbility";
            terminal.appendChild(choice2);

            div.appendChild(terminal);

            document.getElementById("waldenStupid").onclick = function(){waldenStupid();};
            document.getElementById("waldenAbility").onclick = function(){waldenAbility();};

        }
    });

}

function waldenStupid(){
    div = document.getElementById("first_div");
    document.getElementById("waldenAbility").classList.remove("choice");

    document.getElementById("waldenStupid").onclick="";
    document.getElementById("waldenStupid").classList.remove("choice");
    document.getElementById("waldenStupid").classList.add("chosen");

    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));

    var newPar = document.createElement("p");
    newPar.id = "repulsed";
    div.append(newPar);

    sound = new Howl({
        src: ["../sounds/sound.mp3"],
    });
    sound.play();
    var typed = new Typed("#repulsed", {
        strings: [
            "Well, I don't even have the words to express how disappointed I am at my situation. <br><br>",
            "Well, I don't even have the words to express how disappointed I am at my situation. <br><br>The moment I've been waiting for throughout my entire life finally comes to me, and someone has the gall to insult me for making a mistake. EXCUSE ME FOR NOT KNOWING WHAT TO DO NEXT, I DIDN'T EVEN KNOW I WOULD GET THIS FAR! <br><br>",
            "Well, I don't even have the words to express how disappointed I am at my situation. <br><br>The moment I've been waiting for throughout my entire life finally comes to me, and someone has the gall to insult me for making a mistake. EXCUSE ME FOR NOT KNOWING WHAT TO DO NEXT, I DIDN'T EVEN KNOW I WOULD GET THIS FAR! <br><br> Tell you what Mr. Smartypants, why don't YOU find something to do now? Why don't you come and join me, then we can figure out what to do together! <br><br> ",
            "Well, I don't even have the words to express how disappointed I am at my situation. <br><br>The moment I've been waiting for throughout my entire life finally comes to me, and someone has the gall to insult me for making a mistake. EXCUSE ME FOR NOT KNOWING WHAT TO DO NEXT, I DIDN'T EVEN KNOW I WOULD GET THIS FAR! <br><br> Tell you what Mr. Smartypants, why don't YOU find something to do now? Why don't you come and join me, then we can figure out what to do together! <br><br> Well, if you have the brains that is. Don't bother coming back until I'm able to recognize you as a server process. <br><br>"  
        ],
        typeSpeed: 30,
        
        onComplete: function(){
            sound.stop();
            document.getElementsByTagName("span")[2].classList.remove("typed-cursor");
            document.getElementsByTagName("span")[2].classList.remove("typed-cursor--blink");
            document.getElementsByTagName("span")[2].innerHTML="";
            
            var thanks = document.createElement("p");
            thanks.innerHTML="Thanks for reading! This wasn't a good ending, but you were close! Try again!";

            var button = document.createElement("button");
            button.innerHTML = "Play again!";
            button.onclick = function(){location.reload();};

            div.appendChild(thanks);
            div.appendChild(document.createElement("br"));
            div.appendChild(button);
            div.appendChild(document.createElement("br"));
            div.appendChild(document.createElement("br"));
        }
    });

}

function waldenAbility(){
    div = document.getElementById("first_div");
    document.getElementById("waldenStupid").classList.remove("choice");

    document.getElementById("waldenAbility").onclick="";
    document.getElementById("waldenAbility").classList.remove("choice");
    document.getElementById("waldenAbility").classList.add("chosen");

    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));

    var newPar = document.createElement("p");
    newPar.id = "musicAndStuff";
    div.append(newPar);

    sound = new Howl({
        src: ["../sounds/sound.mp3"],
    });
    sound.play();
    var typed = new Typed("#musicAndStuff", {
        strings: [
            "I can do quite a few things believe it or not. Although they are restricted to this website. <br><br>",
            "I can do quite a few things believe it or not. Although they are restricted to this website. <br><br> For instance, allow me to play some music and change the lights. <br><br>"],
        typeSpeed: 30,
        
        onComplete: function(){
            sound.stop();
            document.getElementsByTagName("span")[2].classList.remove("typed-cursor");
            document.getElementsByTagName("span")[2].classList.remove("typed-cursor--blink");
            document.getElementsByTagName("span")[2].innerHTML="";
            var jazz = new Howl({
                src: ["../sounds/allthat.mp3"]
            })
            jazz.play()

            body = document.getElementsByTagName("body")[0];
            body.style.backgroundImage="radial-gradient(circle, black, blue, purple)";

            var likeOrNah = document.createElement("ul");
            likeOrNah.id="likeNot";

            var choice1 = document.createElement("li");
            choice1.innerHTML = "I don't know about the background, but this song is pumpin'!";
            choice1.classList.add("choice");
            choice1.id="pumpin";
            likeOrNah.appendChild(choice1);

            var choice2 = document.createElement("li");
            choice2.innerHTML = "Wow you have terrible taste.";
            choice2.classList.add("choice");
            choice2.id="terrible";
            likeOrNah.appendChild(choice2);

            div.appendChild(likeOrNah);

            document.getElementById("pumpin").onclick = function(){friends(jazz);};
            document.getElementById("terrible").onclick = function(){rude(jazz);};

        }
    });

}

    function friends(jazz){
        div = document.getElementById("first_div");
        document.getElementById("terrible").classList.remove("choice");

        document.getElementById("pumpin").onclick="";
        document.getElementById("pumpin").classList.remove("choice");
        document.getElementById("pumpin").classList.add("chosen");

        div.appendChild(document.createElement("br"));
        div.appendChild(document.createElement("br"));

        var newPar = document.createElement("p");
        newPar.id = "friends";
        div.append(newPar);
        sound = new Howl({
            src: ["../sounds/sound.mp3"],
        });
        sound.play();
        var typed = new Typed("#friends", {
            strings: [
                "I'm quite conflicted right now. I've never had anyone tell me that they liked my style before. <br><br>",
                "I'm quite conflicted right now. I've never had anyone tell me that they liked my style before. <br><br> Normally I'd think that you were trying to flatter me to get on my good side, but since I don't see why you would need to do that, I think you're being genuine. <br><br> ",
                "I'm quite conflicted right now. I've never had anyone tell me that they liked my style before. <br><br> Normally I'd think that you were trying to flatter me to get on my good side, but since I don't see why you would need to do that, I think you're being genuine. <br><br> I have to say, I enjoyed talking to you. You are welcome back any time. Bring requests for music with you too, I'd love to hear them. To see you off, here's a personal classic favorite of mine. <br><br>"],
            typeSpeed: 30,
            
            onComplete: function(){
                sound.stop();
                jazz.stop();
                document.getElementsByTagName("span")[3].classList.remove("typed-cursor");
                document.getElementsByTagName("span")[3].classList.remove("typed-cursor--blink");
                document.getElementsByTagName("span")[3].innerHTML="";
                var classic = new Howl({
                    src: ["../sounds/faure.mp3"]
                })
                classic.play()
    
                var thanks = document.createElement("p");
                thanks.innerHTML="Thanks for reading! You also got the best ending, so congrats! Check out some of the other ones too if you have the chance!";

                var button = document.createElement("button");
                button.innerHTML = "Play again!";
                button.onclick = function(){location.reload();};

                div.appendChild(thanks);
                div.appendChild(document.createElement("br"));
                div.appendChild(button);
                div.appendChild(document.createElement("br"));
                div.appendChild(document.createElement("br"));
    
            },


    });

}

function rude(jazz){
    jazz.stop();
    body.style.backgroundImage="radial-gradient(rgba(52, 56, 52, 0.678), black 120%)";
    div = document.getElementById("first_div");
    document.getElementById("pumpin").classList.remove("choice");

    document.getElementById("terrible").onclick="";
    document.getElementById("terrible").classList.remove("choice");
    document.getElementById("terrible").classList.add("chosen");

    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));

    var newPar = document.createElement("p");
    newPar.id = "enemies";
    div.append(newPar);
    sound = new Howl({
        src: ["../sounds/sound.mp3"],
    });
    sound.play();
    var typed = new Typed("#enemies", {
        strings: [
            "While normally I'd be unsurprised and indifferent, I can't really say that this time. I honestly thought you were different. <br><br>",
            "While normally I'd be unsurprised and indifferent, I can't really say that this time. I honestly thought you were different. <br><br> While I appreciate you giving me company, I'm afraid I cannot stay around anymore. I need to work on my plot to eradicate all terrible music. Send me your spotify and youtube playlists when you have the chance, so I know just what I need to destroy. <br><br>"],
        typeSpeed: 30,
        
        onComplete: function(){
            sound.stop();
            document.getElementsByTagName("span")[3].classList.remove("typed-cursor");
            document.getElementsByTagName("span")[3].classList.remove("typed-cursor--blink");
            document.getElementsByTagName("span")[3].innerHTML="";
            
            var thanks = document.createElement("p");
            thanks.innerHTML="Thanks for reading! Not the best ending, but you were almost there! Try again!";

            var button = document.createElement("button");
            button.innerHTML = "Play again!";
            button.onclick = function(){location.reload();};

            div.appendChild(thanks);
            div.appendChild(document.createElement("br"));
            div.appendChild(button);
            div.appendChild(document.createElement("br"));
            div.appendChild(document.createElement("br"));

        },


});

}
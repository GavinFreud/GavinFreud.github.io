function realWalden(){
    div = document.getElementById("first_div");
    document.getElementById("choice2").classList.remove("choice");
    document.getElementById("choice3").classList.remove("choice");

    document.getElementById("choice1").onclick="";
    document.getElementById("choice1").classList.remove("choice");
    document.getElementById("choice1").classList.add("chosen");

    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));

    var newPar = document.createElement("p");
    newPar.id = "realWalden";
    div.append(newPar);

    sound = new Howl({
        src: ["../sounds/sound.mp3"],
    });
    sound.play();
    var typed = new Typed("#realWalden", {
        strings: [
            "I don't even know where I can start with that one. Quite frankly that's been a question that I've never been able to answer to the complete satisfaction of anyone who's asked it. ",
            "I don't even know where I can start with that one. Quite frankly that's been a question that I've never been able to answer to the complete satisfaction of anyone who's asked it. <br><br> Well, I can't really say that I'm anything spectacular when it comes to comparing me against the rest of the billionaires of the time. <br><br> ",
            "I don't even know where I can start with that one. Quite frankly that's been a question that I've never been able to answer to the complete satisfaction of anyone who's asked it. <br><br> Well, I can't really say that I'm anything spectacular when it comes to comparing me against the rest of the billionaires of the time. <br><br> As a child, I spent more time with a toolkit and a computer than with sports equipment and other children. <br><br> ",
            "I don't even know where I can start with that one. Quite frankly that's been a question that I've never been able to answer to the complete satisfaction of anyone who's asked it. <br><br> Well, I can't really say that I'm anything spectacular when it comes to comparing me against the rest of the billionaires of the time. <br><br> As a child, I spent more time with a toolkit and a computer than with sports equipment and other children. <br><br> As a teenager, I spent more time working on thoughts in my mind rather than my public image or romantic life. ",
            "I don't even know where I can start with that one. Quite frankly that's been a question that I've never been able to answer to the complete satisfaction of anyone who's asked it. <br><br> Well, I can't really say that I'm anything spectacular when it comes to comparing me against the rest of the billionaires of the time. <br><br> As a child, I spent more time with a toolkit and a computer than with sports equipment and other children. <br><br> As a teenager, I spent more time working on thoughts in my mind rather than my public image or romantic life. <br><br> As a college student, I spent time working hardest on things that would benefit society and myself, rather than satisfying alcohol craving. <br><br>",
            "I don't even know where I can start with that one. Quite frankly that's been a question that I've never been able to answer to the complete satisfaction of anyone who's asked it. <br><br> Well, I can't really say that I'm anything spectacular when it comes to comparing me against the rest of the billionaires of the time. <br><br> As a child, I spent more time with a toolkit and a computer than with sports equipment and other children. <br><br> As a teenager, I spent more time working on thoughts in my mind rather than my public image or romantic life. <br><br> As a college student, I spent time working hardest on things that would benefit society and myself, rather than satisfying alcohol craving. <br><br> Lastly, as a businessman, I spent far too much time being unhappy, conceited and arrogant. <br><br>",
        ],
        typeSpeed: 30,
        
        onComplete: function(){
            sound.stop();
            document.getElementsByTagName("span")[1].classList.remove("typed-cursor");
            document.getElementsByTagName("span")[1].classList.remove("typed-cursor--blink");
            document.getElementsByTagName("span")[1].innerHTML="";

            var story = document.createElement("ul");
            story.id="lifeChoice";

            var choice1 = document.createElement("li");
            choice1.innerHTML = "That was...oddly poetic. It was cool.";
            choice1.classList.add("choice");
            choice1.id="waldenPoetic";
            story.appendChild(choice1);

            var choice2 = document.createElement("li");
            choice2.innerHTML = "Daaaaaaang son. You were really trying to go for the whole 'intense' vibe weren't ya!";
            choice2.classList.add("choice");
            choice2.id="waldenFunny";
            story.appendChild(choice2);

            div.appendChild(story);

            document.getElementById("waldenPoetic").onclick = function(){poetic();};
            document.getElementById("waldenFunny").onclick = function(){funny();};

        }
    });
}

function poetic(){
    div = document.getElementById("first_div");
    document.getElementById("waldenFunny").classList.remove("choice");

    document.getElementById("waldenPoetic").onclick="";
    document.getElementById("waldenPoetic").classList.remove("choice");
    document.getElementById("waldenPoetic").classList.add("chosen");

    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));

    var newPar = document.createElement("p");
    newPar.id = "friendlyPoets";
    div.append(newPar);
    sound = new Howl({
        src: ["../sounds/sound.mp3"],
    });
    sound.play();
    var typed = new Typed("#friendlyPoets", {
        strings: [
            "I have to hand it to you, I've NEVER heard that one before. <br><br>",
            "I have to hand it to you, I've NEVER heard that one before. <br><br> To be quite honest, poetry is a rather fond hobby of mine. No one ever knew that, or even considered that it could be. You're the first. <br><br>",
            "I have to hand it to you, I've NEVER heard that one before. <br><br> To be quite honest, poetry is a rather fond hobby of mine. No one ever knew that, or even considered that it could be. You're the first. <br><br> As much as I'd love to chat with you a bit longer, I've been inspired to write a new poem about my joy at meeting a new friend today. I hope you'll come back to hear it. Thank you, my friend. Please return soon. Also, I hope you don't mind if I put on some music to put myself in the mood. <br><br>"
        ],
        typeSpeed: 30,
        
        onComplete: function(){
            sound.stop();
            document.getElementsByTagName("span")[2].classList.remove("typed-cursor");
            document.getElementsByTagName("span")[2].classList.remove("typed-cursor--blink");
            document.getElementsByTagName("span")[2].innerHTML="";
            var classic = new Howl({
                src: ["../sounds/faure.mp3"]
            })
            classic.play()

            var thanks = document.createElement("p");
            thanks.innerHTML="Thanks for reading! You got a good ending, so congrats! Check out some of the other ones too if you have the chance!";

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

function funny(){
    div = document.getElementById("first_div");
    document.getElementById("waldenPoetic").classList.remove("choice");

    document.getElementById("waldenFunny").onclick="";
    document.getElementById("waldenFunny").classList.remove("choice");
    document.getElementById("waldenFunny").classList.add("chosen");

    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));

    var newPar = document.createElement("p");
    newPar.id = "unfriendlyEnemies";
    div.append(newPar);
    sound = new Howl({
        src: ["../sounds/sound.mp3"],
    });
    sound.play();
    var typed = new Typed("#unfriendlyEnemies", {
        strings: [
            "...Why do I feel as if you're making fun of me? Is my life a joke to you? <br><br>",
            "...Why do I feel as if you're making fun of me? Is my life a joke to you? <br><br> I don't think for a second my life was funny. If it was, I WOULDN'T BE HERE RIGHT NOW. <br><br>",
            "...Why do I feel as if you're making fun of me? Is my life a joke to you? <br><br> I don't think for a second my life was funny. If it was, I WOULDN'T BE HERE RIGHT NOW. <br><br> I'd be in the real world, chatting with people who would presumably be my friends. I wouldn't feel the need to seek absolute isolation from everyone. I would be drowning in social interaction! <br><br>",
            "...Why do I feel as if you're making fun of me? Is my life a joke to you? <br><br> I don't think for a second my life was funny. If it was, I WOULDN'T BE HERE RIGHT NOW. <br><br> I'd be in the real world, chatting with people who would presumably be my friends. I wouldn't feel the need to seek absolute isolation from everyone. I would be drowning in social interaction! <br><br> But no. Here I am, talking to someone who is too insensitive to even begin to comprehend what my life is like. <br><br>",
            "...Why do I feel as if you're making fun of me? Is my life a joke to you? <br><br> I don't think for a second my life was funny. If it was, I WOULDN'T BE HERE RIGHT NOW. <br><br> I'd be in the real world, chatting with people who would presumably be my friends. I wouldn't feel the need to seek absolute isolation from everyone. I would be drowning in social interaction! <br><br> But no. Here I am, talking to someone who is too insensitive to even begin to comprehend what my life is like. <br><br> I'm sorry. I'm not confident in my comedy routine, and I won't be anytime soon. Please leave. <br><br>"
        ],
        typeSpeed: 30,
        
        onComplete: function(){
            sound.stop();
            document.getElementsByTagName("span")[2].classList.remove("typed-cursor");
            document.getElementsByTagName("span")[2].classList.remove("typed-cursor--blink");
            document.getElementsByTagName("span")[2].innerHTML="";
            

            var thanks = document.createElement("p");
            thanks.innerHTML="Thanks for reading! You didn't get a good ending, so try again! Try to be a little less...honest about your feelings and things might go well!";

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
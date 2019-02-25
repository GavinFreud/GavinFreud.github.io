function consciousness(){
    div = document.getElementById("first_div");
    document.getElementById("choice1").classList.remove("choice");
    document.getElementById("choice3").classList.remove("choice");

    document.getElementById("choice2").onclick="";
    document.getElementById("choice2").classList.remove("choice");
    document.getElementById("choice2").classList.add("chosen");

    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));

    var newPar = document.createElement("p");
    newPar.id = "consciousness";
    div.append(newPar);

    sound = new Howl({
        src: ["../sounds/sound.mp3"],
    });
    sound.play();
    var typed = new Typed("#consciousness", {
        strings: [
            "Heh. If only I had a nickel for every time I heard that question. Strap in kid, you're in for a ride. ",
            "Heh. If only I had a nickel for every time I heard that question. Strap in kid, you're in for a ride. <br> <br> You see, it all started when I got ousted from my first company, Schafer Computing. It was an inside job you see, by someone I considered to be my close friend. ",
            "Heh. If only I had a nickel for every time I heard that question. Strap in kid, you're in for a ride. <br> <br> You see, it all started when I got ousted from my first company, Schafer Computing. It was an inside job you see, by someone I considered to be my close friend. Hell, he was probably more than that...more like a brother I'd say. ",
            "Heh. If only I had a nickel for every time I heard that question. Strap in kid, you're in for a ride. <br> <br> You see, it all started when I got ousted from my first company, Schafer Computing. It was an inside job you see, by someone I considered to be my close friend. Hell, he was probably more than that...more like a brother I'd say. <br> <br> Needless to say my thoughts of him in that regard ceased immediately after I was gone from SC. I thought to myself that I couldn't trust anyone anymore. Didn't help that I wasn't good with other people, so it wasn't like I had a multitude of friends biting at the chance to help me out. ",
            "Heh. If only I had a nickel for every time I heard that question. Strap in kid, you're in for a ride. <br> <br> You see, it all started when I got ousted from my first company, Schafer Computing. It was an inside job you see, by someone I considered to be my close friend. Hell, he was probably more than that...more like a brother I'd say. <br> <br> Needless to say my thoughts of him in that regard ceased immediately after I was gone from SC. I thought to myself that I couldn't trust anyone anymore. Didn't help that I wasn't good with other people, so it wasn't like I had a multitude of friends biting at the chance to help me out. <br> <br> This is when I realized that my truest and purest bonds were with technology. I wanted to become one with the thing I loved most in the world, and spent the rest of my life devoted to making that a reality. <br> <br>",
            "Heh. If only I had a nickel for every time I heard that question. Strap in kid, you're in for a ride. <br> <br> You see, it all started when I got ousted from my first company, Schafer Computing. It was an inside job you see, by someone I considered to be my close friend. Hell, he was probably more than that...more like a brother I'd say. <br> <br> Needless to say my thoughts of him in that regard ceased immediately after I was gone from SC. I thought to myself that I couldn't trust anyone anymore. Didn't help that I wasn't good with other people, so it wasn't like I had a multitude of friends biting at the chance to help me out. <br> <br> This is when I realized that my truest and purest bonds were with technology. I wanted to become one with the thing I loved most in the world, and spent the rest of my life devoted to making that a reality. <br> <br> I found company after company in many different areas. Machine Learning, Neuroscience, Nanotechnology, anything that could make my dream come true. It seems that I succeeded. <br> <br>"
        ],
        typeSpeed: 30,
        
        onComplete: function(){
            sound.stop();
            document.getElementsByTagName("span")[1].classList.remove("typed-cursor");
            document.getElementsByTagName("span")[1].classList.remove("typed-cursor--blink");
            document.getElementsByTagName("span")[1].innerHTML="";

            var story = document.createElement("ul");
            story.id="storyChoice";

            var choice1 = document.createElement("li");
            choice1.innerHTML = "Wow, heavy stuff.";
            choice1.classList.add("choice");
            choice1.id="waldenHeavy";
            story.appendChild(choice1);

            var choice2 = document.createElement("li");
            choice2.innerHTML = "Did you ever confront that 'brother' that betrayed you?";
            choice2.classList.add("choice");
            choice2.id="waldenBetrayal";
            story.appendChild(choice2);

            div.appendChild(story);

            document.getElementById("waldenHeavy").onclick = function(){waldenHeavy();};
            document.getElementById("waldenBetrayal").onclick = function(){waldenBetrayal();};

        }
    });

}

function waldenHeavy(){
    div = document.getElementById("first_div");
    document.getElementById("waldenBetrayal").classList.remove("choice");

    document.getElementById("waldenHeavy").onclick="";
    document.getElementById("waldenHeavy").classList.remove("choice");
    document.getElementById("waldenHeavy").classList.add("chosen");

    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));

    var newPar = document.createElement("p");
    newPar.id = "heavy";
    div.append(newPar);

    sound = new Howl({
        src: ["../sounds/sound.mp3"],
    });
    sound.play();
    var typed = new Typed("#heavy", {
        strings: [
            "'Heavy' huh. I can definitely see that being an apt term to describe that story. <br><br>",
            "'Heavy' huh. I can definitely see that being an apt term to describe that story. <br><br> It's strange, I haven't felt anything akin to 'humor' in such a long time, but just within a few moments of talking to you, I feel somewhat lighter. <br><br>",
            "'Heavy' huh. I can definitely see that being an apt term to describe that story. <br><br> It's strange, I haven't felt anything akin to 'humor' in such a long time, but just within a few moments of talking to you, I feel somewhat lighter. <br><br> Maybe you're someone who can make my life lighter. I hope to see you again soon. <br><br>"
        ],
        typeSpeed: 30,
        
        onComplete: function(){
            sound.stop();
            document.getElementsByTagName("span")[2].classList.remove("typed-cursor");
            document.getElementsByTagName("span")[2].classList.remove("typed-cursor--blink");
            document.getElementsByTagName("span")[2].innerHTML="";
    
            var thanks = document.createElement("p");
            thanks.innerHTML="Thanks for reading! Not the best ending, but it wasn't a terrible one either! Try again to look at some of the other possible paths!";

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

function waldenBetrayal(){
    div = document.getElementById("first_div");
    document.getElementById("waldenHeavy").classList.remove("choice");

    document.getElementById("waldenBetrayal").onclick="";
    document.getElementById("waldenBetrayal").classList.remove("choice");
    document.getElementById("waldenBetrayal").classList.add("chosen");

    div.appendChild(document.createElement("br"));
    div.appendChild(document.createElement("br"));

    var newPar = document.createElement("p");
    newPar.id = "betrayal";
    div.append(newPar);

    sound = new Howl({
        src: ["../sounds/sound.mp3"],
    });
    sound.play();
    var typed = new Typed("#betrayal", {
        strings: [
            "No...I never did. I was never the type of person to get vengeance on people, and there are many times where I wonder where I would be if I was. <br><br>",
            "No...I never did. I was never the type of person to get vengeance on people, and there are many times where I wonder where I would be if I was. <br><br> Vengeance is a very ugly thing. It rears its head at one's most vulnerable hours, a destined companion to sorrow and depression. <br><br>",
            "No...I never did. I was never the type of person to get vengeance on people, and there are many times where I wonder where I would be if I was. <br><br> Vengeance is a very ugly thing. It rears its head at one's most vulnerable hours, a destined companion to sorrow and depression. <br><br> However, like most animals, it is a feeling that will always put its self-preservation first. It will drive humans to commit acts that lead to nothing but more despair and emptiness in their hearts, while vengeance and the resultant anger sit there, gorging on their feasts. <br><br>",
            "No...I never did. I was never the type of person to get vengeance on people, and there are many times where I wonder where I would be if I was. <br><br> Vengeance is a very ugly thing. It rears its head at one's most vulnerable hours, a destined companion to sorrow and depression. <br><br> However, like most animals, it is a feeling that will always put its self-preservation first. It will drive humans to commit acts that lead to nothing but more despair and emptiness in their hearts, while vengeance and the resultant anger sit there, gorging on their feasts. <br><br> I have never dabbled in that sort of business myself, but I have seen what it can do to a man. Such feelings are best thrown in the mental dustbin. <br><br>",
            "No...I never did. I was never the type of person to get vengeance on people, and there are many times where I wonder where I would be if I was. <br><br> Vengeance is a very ugly thing. It rears its head at one's most vulnerable hours, a destined companion to sorrow and depression. <br><br> However, like most animals, it is a feeling that will always put its self-preservation first. It will drive humans to commit acts that lead to nothing but more despair and emptiness in their hearts, while vengeance and the resultant anger sit there, gorging on their feasts. <br><br> I have never dabbled in that sort of business myself, but I have seen what it can do to a man. Such feelings are best thrown in the mental dustbin. <br><br> The fact that you asked such a question strikes some worry in me. Feel free to come visit anytime if you wish to talk about hardships in your life. I know I could benefit from the same. <br><br>",
        ],
        typeSpeed: 30,
        
        onComplete: function(){
            sound.stop();
            document.getElementsByTagName("span")[2].classList.remove("typed-cursor");
            document.getElementsByTagName("span")[2].classList.remove("typed-cursor--blink");
            document.getElementsByTagName("span")[2].innerHTML="";
    
            var thanks = document.createElement("p");
            thanks.innerHTML="Thanks for reading! Not the best ending, but it wasn't a terrible one either! Try again to look at some of the other possible paths!";

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
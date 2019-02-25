

function playSound(){
    
    var div = document.getElementById("first_div");

    var new_par = document.createElement("p");
    sound = new Howl({
        src: ["../sounds/sound.mp3"],
    });
    sound.play();
    new_par.id="demo";
    div.innerHTML="";
    div.appendChild(new_par);
    
    var typed = new Typed("#demo", {
        strings: ["Oh. I see you found my journal. <br> <br> Hello there. ", "Oh. I see you found my journal. <br> <br> Hello there. My name is Walden Schafer. ",
        "Oh. I see you found my journal. <br> <br> Hello there. My name is Walden Schafer. If you're reading this, then it is most likely that my human body is no longer functioning. ",
        "Oh. I see you found my journal. <br> <br> Hello there. My name is Walden Schafer. If you're reading this, then it is most likely that my human body is no longer functioning. For me to have attained this level of self-awareness, I had to have attempted to upload my consciousness. It seems that I have succeeded. <br>",
        "Oh. I see you found my journal. <br> <br> Hello there. My name is Walden Schafer. If you're reading this, then it is most likely that my human body is no longer functioning. For me to have attained this level of self-awareness, I had to have attempted to upload my consciousness. It seems that I have succeeded. <br> Now that I introduced myself, what do you want to talk about? <br> <br>"],
        typeSpeed: 30
        ,
        /*
        onStart: function(){
            console.log("kjashdglksadhglksdahglkasd");
            
            
        },
        */
        onTypingPaused: function(){
            sound.stop();
        },
        onTypingResumed: function(){
            sound.start();
        },
        onComplete: function(){
            sound.stop();
            document.getElementsByTagName("span")[0].classList.remove("typed-cursor");
            document.getElementsByTagName("span")[0].classList.remove("typed-cursor--blink");
            document.getElementsByTagName("span")[0].innerHTML="";
            choice();

        }
    });

}

function choice(){

    var div = document.getElementById("first_div");
    var par = document.createElement("ul");
    par.id="choice";

    var choice1 = document.createElement("li");
    choice1.innerHTML = "What were you like in real life?";
    choice1.classList.add("choice");
    choice1.id="choice1";
    par.appendChild(choice1);

    var choice2 = document.createElement("li");
    choice2.innerHTML = "Why did you upload your consciousness into a computer?";
    choice2.classList.add("choice");
    choice2.id="choice2";
    par.appendChild(choice2);

    var choice3 = document.createElement("li");
    choice3.innerHTML = "What are your plans for the future now that you're in a computer?";
    choice3.classList.add("choice");
    choice3.id="choice3";
    par.appendChild(choice3);

    div.appendChild(par);
    
    document.getElementById("choice1").onclick = function(){realWalden();};
    document.getElementById("choice2").onclick = function(){consciousness();};
    document.getElementById("choice3").onclick = function(){futurePlans();};
}


function deleteElement(id){
    element = document.getElementById(id);
    element.parentNode.remove(element);
}


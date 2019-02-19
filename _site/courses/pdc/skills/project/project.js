
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
        "Oh. I see you found my journal. <br> <br> Hello there. My name is Walden Schafer. If you're reading this, then it is most likely that my human body is no longer functioning. For me to have attained this level of self-awareness, I had to have attempted to upload my consciousness. It seems that I have succeeded."],
        typeSpeed: 30,
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

        }
    });
    //setTimeout(sound.stop(), 3000);
    sound.play();
/*
    var par = document.createElement("p");
    par.id="Walden";
    div.appendChild(par);
    typed = new Typed("#Walden", {
        strings: ["My name is Walden Schafer. If you're reading this, then it is most likely that my human body is no longer functioning. For me to have attained this level of self-awareness, I had to have attempted to upload my consciousness. It seems that I have succceeded. "],
        typeSpeed: 40,
        onComplete: function(){
            sound.stop();
        }
    })
    */








}

function write(statement, object, i){
    
    speed = 50;
    if(i < statement.length) {
        document.getElementById(object).innerHTML += statement.charAt(i);
        i++;
        setTimeout(write(statement, object, i), 50000000);
    }
}
var typer = function(html_element, text, period){
    this.element = html_element;
    this.textToDisplay = text;
    this.loopNum = 0;
    this.time = period;
    this.textDisplay = "";
    this.tick();
    this.isDeleting = false;
    this.typeSpeed = 150;
};

var writingTag = false;

typer.prototype.tick = function(){
    var i = this.loopNum % this.textToDisplay.length;
    var fullText = this.textToDisplay[i];


    if(this.isDeleting){
        this.textDisplay = fullText.substring(0, this.textDisplay.length - 1);
    }
    else{
        this.textDisplay = fullText.substring(0, this.textDisplay.length + 1);
    }

    var that = this;
    var delta = this.typeSpeed - Math.random() * 100;

    if(writingTag){
        delta = 0;
    }

    if(this.textDisplay.length > 0){

        var currentChar = this.textDisplay.length - 1;

        if(!this.isDeleting){
            if(fullText[currentChar + 1]  === "<"){
            delta = 0;
            writingTag = true;
            }
            else if(fullText[currentChar]  === ">"){
                delta = this.typeSpeed - Math.random() * 100;
                writingTag = false;
            }
        }

        if(this.isDeleting){
            if(fullText[currentChar]  === ">"){
            delta = 0;
            writingTag = true;
            }
            else if(fullText[currentChar]  === "<"){
                delta = this.typeSpeed - Math.random() * 100;
                writingTag = false;
            }
        }

    }


    if(this.isDeleting){
        delta/=3;
    }

    if(!this.isDeleting && this.textDisplay === fullText)
    {
        delta = this.time;
        this.isDeleting = true;
    }
    else if(this.isDeleting && this.textDisplay === ""){
        this.isDeleting = false;
        this.loopNum++;
        writingTag = false;
        delta = this.typeSpeed - Math.random() * 100;
    }

    let reg1 = /`/gi //<
        reg2 = /˹/gi //<span>
        reg3 = /˺/gi //</span>
        reg4 = /↵/gi
        reg5 = /⬑/gi
        reg6 = /⬏/gi
        textDisplayReplaced1 = this.textDisplay.replace(reg1,  "<").replace(reg2,  "<span>").replace(reg3,  "</span>").replace(reg4, "<br>").replace(reg5, '<a href="https://www.youtube.com/watch?v=T1XgFsitnQw" target="_blank">').replace(reg6, "</a>");

    this.element.innerHTML = textDisplayReplaced1;

    setTimeout(
        function()
        {
            that.tick();
        }, delta
    );
};

window.onload = function(){
    var textArray1 = [
        "Console.​Write​Line​(“˹Hi (^∇^)!˺”);",
        "print('˹​I’m Liam Mulhern˺')",
        "std::cout ``​ “​˹Engineer,​ Computer Scientist, and...˺”;",
        "console​.​log(​“˹Certified Geek :p˺”);",
        "System​.​out​.​println​(“˹So Go On!.. Have A Look˺”);",
        "Serial.​println​(“˹Loading​...˺”);",
        "printf(“⬑​You're still here? It's Over. Go Home. Go...⬏”);  ",
        "std::exit(˹​Null˺);",
        "Program.​restart();"
    ];

    var textArray2 = [
        "Console.​Write​Line​(“˹Hi (^∇^)!˺”); ↵↵print('˹I’m Liam Mulhern˺')",
        "std::cout ``​ “˹Aspiring Engineer, Computer Scientist, and...˺”;",
        "console​.​log​(“˹Certified Geek :p˺”);",
        "System​.​out​.​println​(“˹So Go On!.. Have A Look Around!˺”);",
        "Serial.​println​(“˹Loading​...˺”);",
        "$(“body”).append​(“⬑​You're still here? It's Over. Go Home. Go...⬏”);      ",
        "std::exit​(˹​Null˺);",
        "Program.​restart();"
    ];

    var element1 = document.getElementById('typewriter');

    new typer(element1, textArray1, 2000);

    var element2 = document.getElementById('typewriter2');

    new typer(element2, textArray2, 2000);
    
};
// Formatting
//-----------------------------------------------------
const OUTPUT_STRING = "  ";

var glow = function(text) {
  return "[[g;#EEEEEE;]" + text + "]";
};

var titleText = function(text) {
  return "[[u;inherit;]" + text + "]";
};

function teal(message) {
  return "[[gb;teal;black]" + message + "]";
}
//-----------------------------------------------------

var banner = teal(
  "|\t		         _          __     _     _                       \t|\n" +
    "|\t                (_)        / _|   | |   | |                      \t|\n" +
    "|\t   ___ _ __ __ _ _  __ _  | |_ ___| | __| |_ __ ___   __ _ _ __  \t|\n" +
    "|\t  / __| '__/ _` | |/ _` | |  _/ _ \\ |/ _` | '_ ` _ \\ / _` | '_ \\ \t|\n" +
    "|\t | (__| | | (_| | | (_| | | ||  __/ | (_| | | | | | | (_| | | | |\t|\n" +
    "|\t  \\___|_|  \\__,_|_|\\__, | |_| \\___|_|\\__,_|_| |_| |_|\\__,_|_| |_|\t|\n" +
    "|\t                    __/ |                                        \t|\n" +
    "|\t      \u00A9 " +
    getYear() +
    "       |___/                                         \t|\n\n\n"
);

var welcomeMessage =
  "Welcome to my site fellow humans and bots. \nType 'help' to view a list of available commands.\n";
var starWarsMessage =
  "Star Wars: Episode IV produced by Simon Jansen (http://www.asciimation.co.nz)\nPress ctrl + z to stop.";
// Boolean to keep track of whether Star Wars is animating
var play = false;

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}

// Just a little helper function so I don't have to continually update my age
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function getYear() {
  var today = new Date();
  return today.getFullYear();
}

var commands = {
  help: function() {
    this.echo(" ");

    this.echo(
      "Wow, I thought the only people who would visit this site would be bots and spammers, guess I was wrong."
    );
    this.echo(
      "Just type any of the commands below to get some more info. You can even type a few letters and press [tab] to autocomplete."
    );
    this.echo(" ");

    this.echo(
      OUTPUT_STRING + glow("about") + "              - Stop stalking me"
    );
    this.echo(
      OUTPUT_STRING +
        glow("projects") +
        "           - Yeah, I've made some cool stuff before"
    );
    this.echo(
      OUTPUT_STRING +
        glow("skills") +
        "             - I'm pretty good at some things"
    );
    this.echo(
      OUTPUT_STRING + glow("awards") + "             - A bit of boasting"
    );
    this.echo(
      OUTPUT_STRING +
        glow("repo") +
        "               - Take a look at some of my work"
    );

    this.echo(" ");
    this.echo(
      OUTPUT_STRING +
        glow("download_CV") +
        "        - Check out my CV [pdf - 172KB]"
    );
    this.echo(" ");

    this.echo(
      OUTPUT_STRING + glow("contact") + "            - Bring on the spam"
    );
    this.echo(
      OUTPUT_STRING + glow("credits") + "            - Thanks for the help"
    );
    this.echo(" ");
    this.echo(
      OUTPUT_STRING + glow("all") + "                - Tell me everything"
    );
    this.echo(" ");
    this.echo(
      "P.S. There's a pretty awesome command that I haven't told you about - see if you can find it!"
    );
    this.echo("Hint: Check out the source code.");

    this.echo(" ");
  },

  repo: function() {
    this.echo(" ");
    this.echo(OUTPUT_STRING + "https://github.com/craig-feldman");
    this.echo(OUTPUT_STRING + "https://bitbucket.org/fldcra001");
    this.echo(" ");
  },

  about: function() {
    this.echo(" ");

    this.echo("Hey there! Thanks for taking such a keen interest in me.");
    this.echo("Hopefully you're not gonna spam or stalk me...");
    this.echo(
      "Okay, I guess if you must stalk me, just give me fair warning so I can look presentable when you arrive at my door."
    );
    this.echo(" ");

    this.echo(
      "Right, so, where to begin? Well, my parents met in... Nah, just kidding."
    );
    this.echo(
      "As you probably know, my name is " + glow("Craig Feldman") + "."
    );
    this.echo(
      "I'm a " +
        getAge("1992/12/23") +
        " year old " +
        glow("Computer Scientist") +
        " born and bred in the beautiful South Africa and currently living in Cape Town."
    );
    this.echo(
      "I graduated with distinction from University of Cape Town and have an MSc degree from the University of Oxford, where I was awarded a full academic scholarship."
    );
    this.echo("Nowadays I'm developing a method to download food... I wish!");
    this.echo(
      "Some of my interests include " +
        glow("machine learning, computer security, and cryptography") +
        ". I'm also pretty into fly fishing!"
    );


    this.echo(" ");
    this.echo(
      "My previous formal work experience includes working on asset management software (Fundamental Software - https://www.fundamental.net), as well as working for a content creation app (Over - https://madewithover.com)."
    );

    this.echo(" ");
    this.echo(
      "I am currently focusing on some personal projects, but please feel free to get in touch with me to discuss any cool opportunities!"
    );
    this.echo(
      "My contact details can be found by typing 'contact', and if you would like to check out my CV, simply type 'download_CV'."
    );
    this.echo(" ");
  },

  projects: function() {
    this.echo(" ");
    this.echo("I'm always working on comp sciey (not really a word) things.");
    this.echo(
      "Why don't you check out a few of my public repos. Just type 'repo' to get the links."
    );
    this.echo(
      "or check out my university honours project at http://pubs.cs.uct.ac.za/honsproj/cgi-bin/view/2015/feldman_meyer.zip/index.html - this one took a while!"
    );
    this.echo(" ");
  },

  skills: function() {
    this.echo(" ");
    this.echo(
      OUTPUT_STRING +
        glow("Kotlin") +
        "             ##  [[g;#00DE12;]#################################################]  ##"
    );
    this.echo(
      OUTPUT_STRING +
        glow("Java") +
        "               ##  [[g;#42D100;]###############################################]    ##"
    );
    this.echo(
      OUTPUT_STRING +
        glow("C# & C++") +
        "           ##  [[g;#5BD100;]############################################]       ##"
    );
    this.echo(
      OUTPUT_STRING +
        glow("Python") +
        "             ##  [[g;#D16200;]###########]                                        ##"
    );
    this.echo(
      OUTPUT_STRING +
        glow("GCP") +
        "                ##  [[g;#99D100;]#########################################]          ##"
    );
    this.echo(
      OUTPUT_STRING +
        glow("Web Dev") +
        "            ##  [[g;#D1B900;]############################]                       ##"
    );
    this.echo(" ");
  },

  contact: function() {
    this.echo(" ");
    this.echo(OUTPUT_STRING + glow("Email  			") + " - craig.feldy@gmail.com");
    this.echo(
      OUTPUT_STRING + glow("Smoke signals  	") + " - General Cape Town region"
    );
    this.echo(OUTPUT_STRING + glow("myspace			") + " - just kidding");
    this.echo(" ");
  },

  credits: function() {
    this.echo(" ");
    this.echo(OUTPUT_STRING + "Site built by " + glow("me"));
    this.echo(
      OUTPUT_STRING +
        "Using " +
        glow("Jquery Terminal Emulator") +
        " by " +
        glow("Jakub Jankiewicz") +
        " (http://terminal.jcubic.pl)"
    );
    this.echo(
      OUTPUT_STRING +
        "Thanks to " +
        glow("Ronnie Pyne") +
        " for some inspiration (http://www.ronniepyne.com)"
    );
    this.echo(" ");
  },

  awards: function() {
    this.echo(" ");
    this.echo("|\t" + glow("2016"));
    this.echo("|  - " + "University of Oxford full scholarship");
    this.echo(
      "|  \t " +
        "Standard Bank Africa Derek Cooper Scholarship (http://graduate.standardbank.com/standimg/Graduate/DerekCooperAfricaScholarship.html)"
    );
    this.echo(" ");

    this.echo(" ");
    this.echo("|\t" + glow("2015"));
    this.echo("|  - " + "Dean's Merit List");
    this.echo(" ");

    this.echo("|\t" + glow("2014"));
    this.echo("|  - " + "Dean's Merit List");
    this.echo("|  - " + "BSG Prize (Best 3rd year Computer Science student)");
    this.echo(
      "|  - " + "Class Medal (1st place) for all 3 Computer Science courses"
    );
    this.echo("|  - " + "Commerce Faculty Scholarship");
    this.echo(" ");

    this.echo("|\t" + glow("2013"));
    this.echo("|  - " + "Dean's Merit List");
    this.echo("|  - " + "Computer Science Merit Award (top 5%)");
    this.echo("|  - " + "Class Medal for Inferential Statistics");
    this.echo("|  - " + "Computer Science Merit Award (top 5%)");
    this.echo("|  - " + "Commerce Faculty Scholarship");
    this.echo(" ");

    this.echo("|\t" + glow("2012"));
    this.echo("|  - " + "Dean's Merit List");
    this.echo("|  - " + "Computer Science Merit Award (top 5%)");
    this.echo(" ");
  },

  download_CV: function() {
    downloadURI(
      "downloads/Craig Feldman - Curriculum Vitae (web).pdf",
      "Craig Feldman - Curriculum Vitae.pdf"
    );
  },

  all: function() {
    this.clear();
    this.exec("about");
    this.exec("projects");
    this.exec("skills");
    this.exec("awards");
    this.exec("repo");
    this.exec("contact");
    this.exec("credits");
  },

  // Wohoo you found the pretty awesome command that I didn't tell you about.
  star_wars: function() {
    initStarWars(this);
  }
};

//-----------------------------------------------------------

$(function () {
    var isTyping = false;
    function typed(finish_typing) {
    return function (term, message, delay) {
        isTyping = true;
        var prompt = term.get_prompt();
        var c = 0;
        if (message.length > 0) {
          term.set_prompt("");
        var interval = setInterval(function () {
            term.insert(message[c++]);
            if (c == message.length) {
              clearInterval(interval);
              // execute in next interval
            setTimeout(function () {
                // swap command with prompt
                finish_typing(term, message, prompt);
                isTyping = false;
              }, delay);
            }
          }, delay);
        }
      };
    }

  var typed_message = typed(function (term, message, prompt) {
      term.set_command("");
      term.echo(message);
      term.set_prompt(prompt);
    });

    $("body").terminal(commands, {
      greetings: banner,
      prompt: "> ",
      completion: true,
      checkArity: false,
    clear: false,

    onInit: function (term) {
      typed_message(term, welcomeMessage, 0, function () {});
      },

    keydown: function (e) {        
        // ctrl-z - Stop Star Wars
        if (e.which == 90 && e.ctrlKey) {
          play = false;
          return false;
        }

        if (play) {
          return false;
        }

        if (isTyping) {
          return false;
        }
      },

    keypress: function (e, term) {
      console.log("keypress: " + e.which);
      },

    onFocus: function (term) {
      console.log("terminal has gained focus");
    },

    onBlur: function () {
      console.log("terminal has lost focus");
    },
    });
});

// ---------------------------- STAR WARS

var frames = [];
var LINES_PER_FRAME = 14;
var DELAY = 67;

initStarWars = function(term) {
  if (frames.length == 0 && play == false) {
    term.echo("Loading...");
    $.getScript("js/star_wars.js").done(function() {
      play = true;
      var lines = star_wars.length;
      for (var i = 0; i < lines; i += LINES_PER_FRAME) {
        frames.push(star_wars.slice(i, i + LINES_PER_FRAME));
      }

      playStarWars(term);
    });
  } else {
    // frames have already been loaded
    play = true;
    playStarWars(term);
  }
};

playStarWars = function(term, delay) {
  var i = 0;
  var next_delay;
  if (delay == undefined) {
    delay = DELAY;
  }

  function display() {
    if (i == frames.length) {
      i = 0;
    }

    term.clear();

    if (frames[i][0].match(/[0-9]+/)) {
      next_delay = frames[i][0] * delay;
    } else {
      next_delay = delay;
    }
    term.echo(frames[i++].slice(1).join("\n") + "\n");
    if (play) {
      setTimeout(display, next_delay);
    } else {
      term.clear();
      i = 0;
    }
  }

  display();
};

// Thank you - come again.

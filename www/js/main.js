// Formatting
//-----------------------------------------------------
const OUTPUT_STRING = "  ";

var glow = function (text) {
  return "[[g;#EEEEEE;]" + text + "]";
};

var titleText = function (text) {
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

const welcomeMessage = `Welcome to my site fellow humans and bots.
Type 'help' to view a list of available commands.
`;
const starWarsMessage = `Star Wars: Episode IV produced by Simon Jansen (http://www.asciimation.co.nz)
Press ctrl + z to stop.`;
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
const messages = {
  repo: `
${OUTPUT_STRING} https://github.com/craig-feldman
${OUTPUT_STRING} https://bitbucket.org/fldcra001
`,
  help: `
Wow, I thought the only people who would visit this site would be bots and spammers, guess I was wrong.
Just type any of the commands below to get some more info. You can even type a few letters and press [tab] to autocomplete.

${OUTPUT_STRING}${glow("about")}              - Stop stalking me
${OUTPUT_STRING}${glow(
    "projects"
  )}           - Yeah, I've made some cool stuff before
${OUTPUT_STRING}${glow("skills")}             - I'm pretty good at some things
${OUTPUT_STRING}${glow("awards")}             - A bit of boasting
${OUTPUT_STRING}${glow("repo")}               - Take a look at some of my work

${OUTPUT_STRING}${glow("download_cv")}        - Check out my CV [pdf - 172KB]

${OUTPUT_STRING}${glow("contact")}            - Bring on the spam
${OUTPUT_STRING}${glow("credits")}            - Thanks for the help

${OUTPUT_STRING}${glow("all")}                - Tell me everything

P.S. There's a pretty awesome command that I haven't told you about - see if you can find it!
Hint: Check out the source code.
`,
  about: `
Hey there! Thanks for taking such a keen interest in me.
Hopefully you're not gonna spam or stalk me...
Okay, I guess if you must stalk me, just give me fair warning so I can look presentable when you arrive at my door.

Right, so, where to begin? Well, my parents met in... Nah, just kidding.
As you probably know, my name is ${glow("Craig Feldman")}.
I'm a ${getAge("1992/12/23")} year old ${glow(
    "Computer Scientist"
  )} born and bred in the beautiful South Africa and currently living in Cape Town.
I graduated with distinction from University of Cape Town and have an MSc degree from the University of Oxford, where I was awarded a full academic scholarship.
Nowadays I'm developing a method to download food... I wish!
Some of my interests include ${glow(
    "machine learning, computer security, and cryptography"
  )}. I'm also pretty into fly fishing!

My previous formal work experience includes working on asset management software (Fundamental Software - https://www.fundamental.net), as well as working for a content creation app (Over - https://madewithover.com).

I am currently focusing on some personal projects, but please feel free to get in touch with me to discuss any cool opportunities!
My contact details can be found by typing 'contact', and if you would like to check out my CV, simply type 'download_CV'.
`,
  projects: `
I'm always working on comp sciey (not really a word) things.
Why don't you check out a few of my public repos? Just type 'repo' to get the links.
You can also check out my university honours project at http://pubs.cs.uct.ac.za/honsproj/cgi-bin/view/2015/feldman_meyer.zip/index.html - this one took a while!
`,
  skills: `
${OUTPUT_STRING}${glow(
    "Kotlin"
  )}             ##  [[g;#00DE12;]#################################################]  ##
${OUTPUT_STRING}${glow(
    "Java"
  )}               ##  [[g;#42D100;]###############################################]    ##
${OUTPUT_STRING}${glow(
    "C# & C++"
  )}           ##  [[g;#5BD100;]############################################]       ##
${OUTPUT_STRING}${glow(
    "Python"
  )}             ##  [[g;#D16200;]###########]                                        ##
${OUTPUT_STRING}${glow(
    "GCP"
  )}                ##  [[g;#99D100;]#########################################]          ##
${OUTPUT_STRING}${glow(
    "Web Dev"
  )}            ##  [[g;#D1B900;]############################]                       ##
`,
  contact: `
${OUTPUT_STRING}${glow("Email")}            - craig.feldy@gmail.com
${OUTPUT_STRING}${glow("Smoke signals")}    - general Cape Town region
${OUTPUT_STRING}${glow("myspace")}          - just kidding
`,
  credits: `
${OUTPUT_STRING}Site built by ${glow("me")}
${OUTPUT_STRING}Using ${glow("JQuery Terminal Emulator")} by ${glow(
    "Jakub Jankiewicz"
  )} (http://terminal.jcubic.pl)
${OUTPUT_STRING}Thanks to ${glow(
    "Ronnie Pyne"
  )} for some inspiration (http://www.ronniepyne.com)
`,
  awards: `
|\t${glow("2016")}
|  - University of Oxford full scholarship
|  - Standard Bank Africa Derek Cooper Scholarship (http://graduate.standardbank.com/standimg/Graduate/DerekCooperAfricaScholarship.html)

|\t${glow("2015")}
|  - Dean's Merit List

|\t${glow("2014")}
|  - Dean's Merit List
|  - BSG Prize (Best 3rd year Computer Science student)
|  - Class Medal (1st place) for all 3 Computer Science courses
|  - Commerce Faculty Scholarship

|\t${glow("2013")}
|  - Dean's Merit List
|  - Computer Science Merit Award (top 5%)
|  - Class Medal for Inferential Statistics
|  - Computer Science Merit Award (top 5%)
|  - Commerce Faculty Scholarship

|\t${glow("2012")}
|  - Dean's Merit List
|  - Computer Science Merit Award (top 5%)
`,
};

var commands = {
  help: function () {
    this.echo(messages.help);
  },

  repo: function () {
    this.echo(messages.repo);
  },

  about: function () {
    this.echo(messages.about);
  },

  projects: function () {
    this.echo(messages.projects);
  },

  skills: function () {
    this.echo(messages.skills);
  },

  contact: function () {
    this.echo(messages.contact);
  },

  credits: function () {
    this.echo(messages.credits);
  },

  awards: function () {
    this.echo(messages.awards);
  },

  download_CV: function () {
    downloadURI(
      "downloads/Craig Feldman - Curriculum Vitae (web).pdf",
      "Craig Feldman - Curriculum Vitae.pdf"
    );
  },

  all: function () {
    this.clear();
    this.exec("about");
    this.exec("projects");
    this.exec("skills");
    this.exec("awards");
    this.exec("repo");
    this.exec("contact");
    this.exec("credits");
  },

  clear: function () {
    this.clear();

    this.echo(banner);
    play ? this.echo(starWarsMessage + "\n\n") : this.echo(welcomeMessage);
  },

  // Wohoo you found the pretty awesome command that I didn't tell you about.
  star_wars: function () {
    initStarWars(this);
  },
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

initStarWars = function (term) {
  if (frames.length == 0 && play == false) {
    term.echo("Loading...");
    $.getScript("js/star_wars.js").done(function () {
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

playStarWars = function (term, delay) {
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

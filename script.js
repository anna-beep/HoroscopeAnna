
var signs = ["Capricorn", "Aquarius", "Pisces", "Aries","Tarus", "Gemini", "Cancer", "LEo", "Virgo", "Libra", " Scorpio", "Sagittarius", "Not Possible"];

var yourHoroscope = ["a Goat - because you are a determined animal who rises up the path by taking advantage of every foothold. Always climbing.",
    "a Water-Bearer - symbolically, the water represents truth, which you deliver freely and fairly to the world. A truth-sayer!",
    "two fishes tied to one another, swimming in opposite directions- because you swim amidst shifting emotional currents, and are plagued by both conflicting desires and extremes of temperament.",
    "a Ram - because of your brave, tenacious ability to climb to the top of the mountain, no matter what.",
    "a Bull - because of your resilience and stubbornness! And, like a bull, you can be both frighteningly fierce or serenely gentle.",
    "a Twin - because of your duality, versatility and ability to talk twice as fast and say twice as much as everyone else.",
    "a Crab - because you are secretive and guarded. A hard shell protects the soft flesh beneath (your extreme emotional sensitivity).",
    "a Lion - because of your regal and noble personality, you love to lead and naturally protect those they perceive as being vulnerable.",
    "a Virgin - because of your pure intentions, and their modest, conscientious nature. You’re often pictured holding a sheaf of wheat which symbolises the fertilisation of ideas / skills to benefit the world.",
    "a Scales - because you are ALL about balance. Keeping everything on an even keel and behaving with fairness are their driving motivations.",
    "a Scorpion - because you are kinda’ dangerous, a secretive creature which can poison its enemies if riled… beware!",
    "an Archer - because you aim high and true, love the outdoors and enjoy the thrill of the case.",
    "you messed up that's not an actual day"];

var image = ["images/download.jpg", "images/download-1.jpg", "images/download-2.jpg", "images/download-3.jpg", "images/download-4.jpg", "images/download-5.jpg", "images/download-6.jpg", "images/download-7.jpg", "images/download-8.jpg", "images/download-9.jpg", "images/download-10.jpg", "images/download-11.jpg", "images/don'ts.jpg", ]

function go(){

    var month = document.getElementById('months').value;
    var day = document.getElementById('dayN').value;
    var username = document.getElementById('username').value;
    var s = yourSign(month, day);

    document.getElementById('message').innerHTML = username + ", you are a " + signs[s] + "," + yourHoroscope[s] + ".";
    document.getElementById('sign').src = image[s];


}

function yourSign (month, day) {

    if (month == 0) {
        if (day >= 19) {
            return 1;
        } else if (day < 19) {
            return 0;
        }
    }
    if (month == 1) {
        if (day >= 28) {
            return 12;
        } else if (day >= 18) {
            return 2;
        } else if (day < 18) {
            return 1;
        }
    }
    if (month == 2) {
        if (day >= 20) {
            return 3;
        } else if (day < 20) {
            return 2;
        }
    }
    if (month == 3) {
        if (day >= 30) {
            return 12;
        } else if (day >= 19) {
            return 4;
        } else if (day < 19) {
            return 3;
        }

    }
    if (month == 4) {
        if (day >= 20) {
            return 5;
        } else if (day < 20) {
            return 4;
        }

    }
    if (month == 5) {
        if (day >= 30) {
            return 12;
        } else if (day >= 20) {
            return 6;
        } else if (day < 20) {
            return 5;
        }

    }
    if (month == 6) {
        if (day >= 22) {
            return 7;
        } else if (day < 22) {
            return 6;
        }

    }
    if (month == 7) {
        if (day >= 22) {
            return 8;
        } else if (day < 22) {
            return 7;
        }

    }
    if (month == 8) {
        if (day >= 30) {
            return 12;
        } if (day >= 22) {
            return 9;
        } else if (day < 22) {
            return 8;
        }

    }
    if (month == 9) {
        if (day >= 22) {
            return 10;
        } else if (day < 22) {
            return 9;
        }

    }
    if (month == 10) {
        if (day >= 30) {
            return 12;
        } else if (day >= 21) {
            return 11;
        } else if (day < 21) {
            return 10;
        }

    }
    if (month == 11) {
        if (day >= 21) {
            return 11;
        } else if (day < 21) {
            return 0;
        }
    }

}



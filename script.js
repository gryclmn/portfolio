var textEl = document.getElementById("text");
var randNum = 0;
var intervalId = setInterval(changeText, 3000);

var alternateText = [
    "CSS",
    "Databases",
    "Dev",
    "Development",
    "Getting stuff done",
    "HTML",
    "jQuery",
    "MySQL",
    "PHP",
    "Problem Solving"
];

/*
 * Get a random int between two given ints.
 * The maximum is exclusive and the minimum is inclusive.
 *
 * @param int min
 * @param int max
 *
 * @return int
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

/*
 * Change the text of textEl, called by intervalId
 *
 * @return void
 */
function changeText() {
    textEl.textContent = alternateText[getRandomInt(0, alternateText.length)];
}

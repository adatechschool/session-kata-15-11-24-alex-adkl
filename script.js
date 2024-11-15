// let wordArray = [""];
// let morseArray = [];

// const latinWord = document.getElementById("latinWord")
// const morseResult = document.getElementById("morseResult")
// const latinButton = document.getElementById("OkLatinButton")
// let latinInput = document.getElementById("LatinWord").value

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..',
    ' ': '  '
}

const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H",
    '  ': "/"
}

function getLatinCharacterList(text){
   return (text.split(""));
}

function translateLatinCharacter(character){
    return(latinToMorse[character]);
}

function encode(text){
    let wordArray = getLatinCharacterList(text);
    let resultMorse = " ";
    wordArray.forEach((element) => resultMorse += translateLatinCharacter(element)); 
    console.log(resultMorse);
    // morseResult.innerText = resultMorse
}

function getMorseCharacterList(text){
    return(text.split(" "));
}
 
function translateMorseCharacter(character){
    return(morseToLatin[character]);
}
 
function decode(text){
    let morseArray = getMorseCharacterList(text);
    let resultLatin = "";
    morseArray.forEach((element) => resultLatin += translateMorseCharacter(element)); 
    console.log(resultLatin);
}


encode("HELLO WORLD")
decode(".- -... -.-.")
decode(". ... ... .- .. . ... ... .- ..")

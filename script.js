let wordArray = [""];

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
	'Z':'--..'
}

function getLatinCharacterList(text){
   return (text.split(""))
}

function translateLatinCharacter(character){
    console.log(latinToMorse[character])
}

function encode(text){
    wordArray = getLatinCharacterList(text)
    wordArray.forEach((element) => translateLatinCharacter(element)) 
}


encode("HELLOWORLD")

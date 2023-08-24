const handelPass=()=>{
    const pass=generatePassword();
    document.getElementById('floatingPassword').value = pass;
}
// Constants for character sets
const DIGITS = '0123456789';
const LOCASE_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
const UPCASE_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const SYMBOLS = '@#$%=?:./|~>*()<';


const generatePassword = () => {
    const MAX_LEN = 16;
    const combinedList = DIGITS + UPCASE_CHARACTERS + LOCASE_CHARACTERS + SYMBOLS;

    
    const randDigit = getRandomChar(DIGITS);
    const randUpper = getRandomChar(UPCASE_CHARACTERS);
    const randLower = getRandomChar(LOCASE_CHARACTERS);
    const randSymbol = getRandomChar(SYMBOLS);

    
    let tempPass = randDigit + randUpper + randLower + randSymbol;

    
    for (let i = 0; i < MAX_LEN - 4; i++) {
        tempPass += getRandomChar(combinedList);
    }

    
    const tempPassArray = tempPass.split('');
    shuffleArray(tempPassArray);
    const password = tempPassArray.join('');

    return password;
};


const getRandomChar = (charSet) => {
    return charSet[Math.floor(Math.random() * charSet.length)];
};


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};



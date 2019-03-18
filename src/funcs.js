export default function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

//-----cookies

//export default function setCookie(name, value)
//export default function deleteCookie(name)
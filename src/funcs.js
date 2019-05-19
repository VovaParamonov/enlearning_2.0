function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

//-----cookies
// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        //"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        "(?:^|; )" + name + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(cookie, value) {
    let date = new Date();
    date.setDate(date.getDate() + 365);
    date = date.toUTCString();
    document.cookie = `${cookie}=${value};path=/;expires=${date}`;
}

function deleteCookie(cookie) {
    let date = new Date(0).toUTCString();
    document.cookie = `${cookie}=;path=/;expires=${date}`
}

export { randomInteger, getCookie, setCookie, deleteCookie }
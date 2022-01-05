function saveHighScore(key,data) {
    localStorage.setItem(key,data);
}
function loadHighScore(key) {
    if (localStorage.hasOwnProperty(key)){
        let data = localStorage.getItem(key);
        return data
    }else {
        return 0;
    }
}
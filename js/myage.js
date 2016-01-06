function getAge(dateString) {
    var birthday = +new Date(dateString);
    return ((Date.now() - birthday) / (31557600000));
};
function pad(number, length) {

    var str = '' + number;
    while (str.length < length) {
        str = str + '0';
    }

    return str;

}
function getDanielsAge()
{
    return pad((~~(getAge(new Date(1995,09,28,0,0,0,0)) * 100000000.0)) / 100000000.0, 11);
};
setInterval(change, 1);
function change() {
    document.getElementById('myage').innerHTML=getDanielsAge();
}

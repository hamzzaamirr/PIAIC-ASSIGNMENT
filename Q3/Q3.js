var mystring = "HaMzA aMiR";
console.log(mystring.toLowerCase());
console.log(mystring.toUpperCase());
console.log(titlename(mystring));
function titlename(str) {
    var mytitlestring = str.toLowerCase().split(" ");
    for (var i = 0; i < mytitlestring.length; i++) {
        mytitlestring[i] = mytitlestring[i].charAt(0).toUpperCase() + mytitlestring[i].slice(1);
    }
    return mytitlestring.join(" ");
}

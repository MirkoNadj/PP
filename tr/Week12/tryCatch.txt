console.log('prva linija')
console.log('druga linija')


function testpass(pass) {
    var pass = (document.getElementById("inputpass").value);
try {    
    console.log(pass)
    if (pass !== '123') {
    throw new Error("Wrong Password");
    }
} catch (err) {
    console.log(err.message)
}
}
console.log('cetvrta linija')
console.log('peta linija');




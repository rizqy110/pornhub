function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

var ero = getUrlParam('ero',null);
var ero2 = getUrlParam('ero2',null);
var ero3 = getUrlParam('ero3',null);

var estream = "<meta http-equiv='refresh' content='0; url=https://4healthblogs.blogspot.com/?mero1="+ ero +"'>";
var e2stream = "<meta http-equiv='refresh' content='0; url=https://4healthblogs.blogspot.com/?mero2="+ ero2 +"'>";
var e3stream = "<meta http-equiv='refresh' content='0; url=https://4healthblogs.blogspot.com/?mero3="+ ero3 +"'>";
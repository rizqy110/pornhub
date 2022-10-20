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

var estream = "<video class='p-a' id='plyr' autoplay='' controls='' controlslist='nodownload' playsinline='' webkit-playsinline='' src='https://video1.tizam.cc/"+ ero +".mp4' type='video/mp4'></Video>";
var e2stream = "<video class='p-a' id='plyr' autoplay='' controls='' controlslist='nodownload' playsinline='' webkit-playsinline='' src='https://video2.tizam.cc/"+ ero2 +".mp4' type='video/mp4'></Video>";
var e3stream = "<video class='p-a' id='plyr' autoplay='' controls='' controlslist='nodownload' playsinline='' webkit-playsinline='' src='https://video3.tizam.cc/"+ ero3 +".mp4' type='video/mp4'></Video>";
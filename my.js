var temp = new Date();
function checktime(){
    var now = new Date(),
        diff = new Date(now -temp);
    document.getElementById("timer").innerText = diff.Myformat();
}

Date.prototype.Myformat = function(){
    return ("0"+this.getUTCMinutes()).slice(-2)+":"+("0"+this.getUTCSeconds()).slice(-2)
}
setInterval(checktime, 1000);
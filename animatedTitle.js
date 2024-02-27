function setTitlebar(position) {
    var titlemessage = "grece"; 
    var titlespeed = 500;
    if(position < titlemessage.length) {
        position = position + 1;
        titlepart = titlemessage.substr(0, position);
        document.title = titlepart;
        setTimeout("setTitlebar("+position+")", titlespeed);
    }
    else setTimeout("setTitlebar("+0+")", titlespeed);
}
setTitlebar(0);
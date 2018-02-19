function quick(url){
newWindow=window.open(url,'name','width=900,height=1300,titlebar=no,scrollbars=yes');
newWindow.focus(); 
return false;}

function copy(selector) {
var $temp = $("<div>");
$("body").append($temp);
$temp.attr("contenteditable", true)
.html($(selector).html()).select()
.on("focus", function() { document.execCommand('selectAll', false, null) })
.focus();
document.execCommand("copy");
$temp.remove();
return false;
}

function performSearchh() {
    var searchTerm = encodeURIComponent(document.getElementById('searchField5').value);
            window.open('http://directory.corp.intranet/emd/search.html?f_simple=' + searchTerm, 'new_window_1');
}

function performSear() {
    var searchTerm = encodeURIComponent(document.getElementById('searchField3').value);
            window.open('https://bminew.corp.intranet/bmi/search/results.html?search=' + searchTerm, 'new_window_1');
}
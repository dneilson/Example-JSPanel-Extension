    function copy(selector) {
        var $temp = $("<div>");
        $("body").append($temp);
        $temp.attr("contenteditable", true)
            .html($(selector).html()).select()
            .on("focus", function() { document.execCommand('selectAll', false, null) })
            .focus();
        document.execCommand("copy");
        $temp.remove();
    }

function confluence() {
var searchTerm = encodeURIComponent(document.getElementById('searchField3').value);
window.open('https://sofiinc.atlassian.net/wiki/dosearchsite.action?cql=siteSearch+~+"' + searchTerm + '"+and+space+%3D+"GEN"+and+lastmodified+>%3D+now(%27-1y%27)&queryString=' + searchTerm , 'new_window_3');
return false;};

function performSearc() {
var searchTerm = encodeURIComponent(document.getElementById('searchField2').value);
window.open('https://internal.sofi.com/c/customer/summary/' + searchTerm , 'new_window_3');
return false;
}
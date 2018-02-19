var s = document.createElement('script');
s.src = chrome.extension.getURL("js/pagescripts.js");
(document.head||document.documentElement).appendChild(s);
s.parentNode.removeChild(s);

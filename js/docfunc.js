var s = document.createElement('script');
s.src = chrome.extension.getURL("js/popupscripts.js");
(document.head||document.documentElement).appendChild(s);
s.parentNode.removeChild(s);


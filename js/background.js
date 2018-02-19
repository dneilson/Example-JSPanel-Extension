			chrome.storage.sync.get('searchbox', function (data) {
					chrome.storage.sync.set({searchbox: 'on'});
			})
			chrome.storage.sync.get('quickinfo', function (data) {
					chrome.storage.sync.set({quickinfo: 'on'});
			})
			chrome.storage.sync.get('salesforceside', function (data) {
					chrome.storage.sync.set({salesforceside: 'on'});
			})
chrome.runtime.onMessage.addListener(
	function (request, tab) {
		function myListener(tab) {
			chrome.storage.sync.get('state', function (data) {	
				})
			}	
		chrome.tabs.onUpdated.addListener(myListener);
		if (request.greeting == "salesforceside") {
			chrome.storage.sync.get('salesforceside', function (data) {
				if (data.salesforceside === 'on') {
					chrome.storage.sync.set({
						salesforceside: 'off'
					});
				} else {
					chrome.storage.sync.set({
						salesforceside: 'on'
					});
				}
			})
		}

		if (request.greeting == "quickinfo") {
			chrome.storage.sync.get('quickinfo', function (data) {
				if (data.quickinfo === 'on') {
					chrome.storage.sync.set({
						quickinfo: 'off'
					});
					console.log('Quick Info: Off');
				} else {
					chrome.storage.sync.set({
						quickinfo: 'on'
					});
					console.log('Quick Info: On');
				}
			})
		}
		if (request.greeting == "searchbox") {
			chrome.storage.sync.get('searchbox', function (data) {
				if (data.searchbox === 'on') {
					chrome.storage.sync.set({
						searchbox: 'off'
					});
					console.log('Search Section: Off');
				} else {
					chrome.storage.sync.set({
						searchbox: 'on'
					});
					console.log('Search Section: On');
				}
			})
		}
	}
)
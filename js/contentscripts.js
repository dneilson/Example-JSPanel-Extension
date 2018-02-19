var PS = jQuery.noConflict();
(function (PS) {
PS.fn.unwrapUntil = function () {
    var arg = arguments[0],
        type = typeof arguments[0];
    if (type === "number") {
        //Argument is a number, remove that number of ancestor elements
        PS.each(this, function () {
            var PSthis = PS(this);
            for (var i = 0; i < arg; i++) {
                PSthis.unwrap();
            }
        });
    } else if (type === "string") {
        //Argument is a selector string, remove ancestor elements until the parent matches the selector
        PS.each(this, function () {
            var PSthis = PS(this);
            if (PSthis.closest(arg).length > 0) {
                while (PSthis.parent(arg).length === 0) {
                    PSthis.unwrap();
                }
            }
        });
    } else if (type === "object") {
        //Argument is an object, remove ancestor elements until the parent is equal to that object
        PS.each(this, function () {
            var PSthis = PS(this);
            if (PSthis.closest(arg).length > 0) {
                while (PSthis.parent()[0] !== arg[0]) {
                    PSthis.unwrap();
                }
            }
        });
    }
    return this;
};
})(jQuery);
var ftb = '<div style="white-space: nowrap;text-decoration: underline; font-style: italic; font-weight: bold; flex:1 1 auto;padding:5px 0 0 0;"><a style="color: #00ff43;" target="_blank" href="mailto:zxzsab1@gmail.com">Created By David Neilson</a>, This simply showcases what are possibilities.</div><button type="button" class="btn btn-outline-danger btn-close jsPanel-ftr-btn">Close</button>';
var ftbnavbar = '<div style="white-space: nowrap;text-decoration: underline; font-style: italic; font-weight: bold; flex:1 1 auto;padding:5px 0 0 0;">By <a style="color: #00ff43;" target="_blank" href="mailto:zxzsab1@gmail.com">DNeilson</a></div><button type="button" class="btn btn-outline-danger jsPanel-ftr-btn">Close</button>';
var smallpanel = {
syncMargins: true,
boxShadow: 2,
headerControls: {
    smallify: "remove",
    maximize: "remove",
},
contentSize: '850 auto',
iconfont: ['custom-smallify', 'custom-unsmallify', 'custom-minimize', 'custom-normalize', 'custom-maximize', 'custom-close'],
position: {
    my: 'center-top',
    at: 'center-top',
    offsetY: 100
},
footerToolbar: ftb,
callback: function (panel) {
    PS(this).find(".jsPanel-hdr").css({'border-bottom': '1px solid white','background-color': 'rgb(46, 46, 46)','box-sizing': 'border-box','vertical-align': 'baseline','font-weight': '400','border-top-left-radius': '3px','border-top-right-radius': '3px','font-size': '18px','display': 'flex','flex-direction': 'column','overflow': 'hidden'});
    PS(this).find(".jsPanel-ftr").css({'color': 'white','border-top': '1px solid white','background-color': 'rgb(46, 46, 46)','box-sizing': 'border-box','vertical-align': 'baseline','font-weight': '400','border-bottom-left-radius': '3px','border-bottom-right-radius': '3px','font-size': '14px','overflow': 'hidden'});
    PS(this).addClass("windowsizecontrol");
    PS(this).find(".jsPanel-content").css({'border-top': '1px solid rgb(255, 255, 255)','padding': '10px','font-size': '1.5rem','pointer-events': 'inherit','border': '0','box-sizing': 'border-box','vertical-align': 'baseline','font-weight': '400','background': 'rgb(236, 238, 241)','color': '#000','position': 'relative','overflow-y': 'scroll'});
    PS(this).find("h3.jsPanel-title").css({'color': 'rgb(255, 255, 255)'});
    PS(this).find(".jsPanel-controlbar").contents().contents().css({'color': 'rgb(255, 255, 255)'});
    PS(this).find(".jsPanel-ftr").addClass('ps');
    PS(this).find(".jsPanel-hdr .s-glyph02").css({'color': 'rgb(0, 255, 90)'});
    PS('.btn-close').click(function () {
        panel.close();
    });
}
};


var alttrigger = '<div id="alttrig" style="z-index: 500;box-shadow: inset 0px 0px 5px 0px black;width: 40px;height: 40px;background-color: #00adff87;border: 1px solid black;;cursor: pointer;margin: 0;position: fixed !important;right: -24px !important;left: unset !important;top: 45% !important;zoom: 1 !important; transform: scale(1.5)rotate(45deg);"></div>';
PS("body").prepend(alttrigger);
PS("#alttrig").click(function () {
var newsearchcontainer = ['<div id="searchboxcontainer" style="box-shadow: black 0px 0px 10px 1px inset;border: 1px ridge grey;background: rgb(64, 64, 64);display: flex;flex-direction: column;padding: 3px;zoom: 0.8;"><form style="padding-top: 4px;" id="scriptform" class="navbar-form navbar-left" onsubmit="performSearchh(); return false;"><input class="font-weight-bold btn btn-sm" placeholder="Corp Dir" id="searchField5"></form><form id="scriptform" class="navbar-form navbar-left" onsubmit="performSear(); return false;"><input class="font-weight-bold btn btn-sm" placeholder="BMI" id="searchField3"></form></div>'];
var bstabcontents = [
            '<div id="bstabs" style="padding: 5px 5px 5px 5px; display: flex;flex-direction: row;flex-wrap: wrap;">' +
            '<a href="bootstraptabs">Quick Info</a>' +
            '<a href="acronyms">Acronyms</a>' +
            '</div>'];
jsPanel.create({
    headerTitle: 'Tools',
    headerLogo: '<div id="options" href="optionspage" style="cursor: pointer;"><a style="box-shadow: none;color: white;margin: 1px;zoom: 1.5;position: absolute;top: 0;"><i class="fa fa-spin fa-cog"></i></a></div>',
    //position: {my: 'right-bottom',at: 'right-bottom',autoposition: 'down',offsetX: -15,offsetY: -650},
		position: {
    of:      'window',
	at:      'center-right',
    my:      'center-right',
	offsetX: -15,
	offsetY: 450,
	},
    syncMargins: true,
    resizeit: false,
    boxShadow: 2,
    animateIn: 'animated bounceInUp',
    animateOut: 'animated bounceOutUp',
    headerControls: {
        maximize: 'remove',
        minimize: 'remove',
        normalize: 'remove',
        smallifyrev: 'remove',
        smallify: 'remove',
    },
    contentSize: '200 min-content',
    theme: '#212020 filled',
    footerToolbar: ftbnavbar,
    iconfont: ['custom-smallify', 'custom-unsmallify', 'custom-minimize', 'custom-normalize', 'custom-maximize', 'custom-close'],
    id: 'navigationalbar',
    content: '<div class="ps" id="receiver"/>',
    callback: function (panel) {
        PS(this).find("div#receiver").append(bstabcontents);
        chrome.storage.sync.get('searchbox', function (data) {
            if (data.searchbox === 'on') {
        PS('#navigationalbar').find(".jsPanel-content .ps").prepend(newsearchcontainer);
            }
        })
        PS(this).find(".jsPanel-ftr").addClass('ps');
        PS(this).find(".jsPanel-content, .jsPanel-content .ps").css({'border-top': '0','background-color': 'rgb(46, 46, 46)'});
        PS(this).find(".jsPanel-content, .jsPanel-content .ps a").css({'margin': '1px','width': '-webkit-fill-available'});
        PS(this).find("div#bstabs, div#quickjiratables").contents().addClass('btn-primary text-center btn p-sm-1 font-weight-bold');
        PS(this).find("div#bstabs, div#quickjiratables").contents().css({'margin': '1px','width': '-webkit-fill-available'});
        PS(this).css({'border-bottom-left-radius': '5px','border-bottom-right-radius': '5px','border-top-left-radius': '5px','border-top-right-radius': '5px','border-width': '1px','border-style': 'solid','border-color': 'white'});
        PS(this).find(".jsPanel-hdr").css({'border-bottom': '1px solid white','background-color': 'rgb(46, 46, 46)','box-sizing': 'border-box','vertical-align': 'baseline','font-weight': '400','border-top-left-radius': '5px','border-top-right-radius': '5px','font-size': '18px','display': 'flex','flex-direction': 'column','overflow': 'hidden'});
        PS(this).find(".jsPanel-hdr .s-glyph02").css({'color': 'rgb(0, 255, 0)'});
        PS(this).find(".jsPanel-ftr").css({'color': 'white','background-color': 'rgb(46, 46, 46)','box-sizing': 'border-box','vertical-align': 'baseline','font-weight': '400','border-bottom-left-radius': '3px','border-bottom-right-radius': '3px','font-size': '14px','overflow': 'hidden'});
        PS('#navigationalbar').find('button.btn.btn-outline-danger').click(function () {
            PS('#navigationalbar').css({'animation-name':'bounceOutUp','animation-duration':'1s','animation-fill-mode':'both'})
            setTimeout(function () {
                PS('#navigationalbar').remove();
            }, 1000)
        });
        }
})
    
PS("#options, #bstabs a").click(function (e) {
    var link = PS(e.relatedTarget),
        $this = PS(this),
        source = $this.attr('href');
    var sourceid = ('div#' + source);
    jsPanel.create({
        config: smallpanel,
        id: source,
        contentAjax: {
            url: (chrome.extension.getURL('Pages/' + source + '.html')),
            method: 'GET',
            evalscripttags: true,
            "crossDomain": true,
            done: function (panel) {
                panel.content.innerHTML = this.responseText;
                panel.setHeaderTitle(PS('#' + source).find('.nav-link.active').text());

                PS('#myTab a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                    e.target // newly activated tab
                    PS(e.relatedTarget).removeClass('active show'); // previous active tab
                })
                setTimeout(function () {
                    PS('a[data-toggle="tab"]').on('click', function () {
                        PS('#myTab').find('.active').not(this).removeClass('active').parent().removeClass('active');
                    })
                }, 1500)
                PS('a[data-toggle="tab"]').on('hidden.bs.tab', function () {
                    PS('#' + source).find('.tab-pane:not(.active) iframe').remove();
                });
                PS('#' + source).find(".jsPanel-content a.nav-link").click(function () {
                    PS('#' + source).css('height', 'min-content');
                    PS('#' + source).find(".jsPanel, .jsPanel-content").css('height', 'min-content');
                });
                PS('#' + source).find('a[data-toggle="tab"]', '#myTab').on('click', function (e) {
                    panel.setHeaderTitle(e.target.textContent);
                });
                
                PS("div#bootstraptabs").find(".mytables").addClass('w-100');
                /* ==================Crud================== */
                PS("div#crudtools").css('min-width', '1070px');
                /* ==================Links================== */
                PS("#bstablinks .tab-content .tab-pane a, #sqalinks .tab-content .tab-pane a").each(function () {
                    PS(this).addClass('btn-outline-info btn font-weight-bold');
                    PS(this).css({'margin': '1px 1px 1px 1px','width': 'calc(50% - 4px)','contain': 'content'});
                    setTimeout(function () {
                        PS(this).removeClass('active show');
                    }, 750);
                });
                PS("h4.cannedresponseheaders").css('margin', '3px 0px');
                /* =================Canned Word Links =========== */
                PS("div#psstuff").find("#cannedwordz a").each(function () {
                    PS(this).addClass('btn-outline-primary btn font-weight-bold');
                    PS(this).css({'margin': '1px 1px 1px 1px','text-align': 'left','padding': '2px'});
                });
				/* ================= Making use of Heading Bar =========== */
				var headingbaritem = PS(sourceid).find('.jsPanel-hdr-toolbar');
				var theitemtomove = PS(sourceid).find('.jsPanel-content #myTab');
				PS(theitemtomove).appendTo(headingbaritem).parent().addClass('active ps').css({'background':'inherit'});
                /*-=-=-=-=-=-=-=-=-=Iframed Content Stuff=-=-=-=-=-=-=-=-=-=-*/
                PS('#' + source).find('.jsPanel-content .ps').css({'height':'inherit','width':'-webkit-fill-available'})

            },
            always: function () {
                PS('#' + source).find(".jsPanel-ftr").addClass('ps');
            }
        },
        callback: function (panel) {
            PS(this).addClass("windowsizecontrol");
            PS(this).css('border', '1px solid white');
                setTimeout(function () {
                    var fluidboxheight = PS('div#optionspage .jsPanel-content').find('.container-fluid').css('height');
                    PS('#'+source).find('.jsPanel-content').css({'min-height': fluidboxheight});    
                    PS('#'+source).find('.jsPanel-content .ps').css({'height':'min-content'});
                }, 300)
            
            //PS("#bstablinks, #bstablinks .jsPanel-content, #sqalinks, #sqalinks .jsPanel-content").css({'width': '1000px'});
            setTimeout(function () {
                PS('a[data-toggle=tab]').on("click", function () {
                    PS('ul#myTab').find('.active').not(this).removeClass('active');
                    setTimeout(function () {
                        PS(".tab-pane").not('.tab-pane.fade.active.show').find('iframe').remove();
                    }, 200);
                })
            }, 1500)
            PS('.btn-close').click(function () {
                panel.close();
            });
            PS(this).find('.jsPanel-content').css({'width':'-webkit-fill-available'})
            PS(this).find(".jsPanel-hdr").css({'border-bottom': '1px solid white','background-color': 'rgb(46, 46, 46)','box-sizing': 'border-box','vertical-align': 'baseline','font-weight': '400','border-top-left-radius': '3px','border-top-right-radius': '3px','font-size': '18px','display': 'flex','flex-direction': 'column','overflow': 'hidden'});
            PS(this).find(".jsPanel-ftr").css({'color': 'white','border-top': '1px solid white','background-color': 'rgb(46, 46, 46)','box-sizing': 'border-box','vertical-align': 'baseline','font-weight': '400','border-bottom-left-radius': '3px','border-bottom-right-radius': '3px','font-size': '14px','overflow': 'hidden'});
            PS(this).find(".jsPanel-content").css({'border-top': '1px solid rgb(255, 255, 255)','padding': '0px','font-size': '1.5rem','pointer-events': 'inherit','border': '0','box-sizing': 'border-box','vertical-align': 'baseline','font-weight': '400','background': 'rgb(236, 238, 241)','color': '#000','position': 'relative','overflow-y': 'auto'});
            PS(this).find("h3.jsPanel-title").css({'color': 'rgb(255, 255, 255)'});
            PS(this).find(".jsPanel-controlbar").contents().contents().css({'color': 'rgb(255, 255, 255)'});
            
            PS(this).find(".jsPanel-hdr .s-glyph02").css({'color': 'rgb(0, 255, 90)'});
            PS('.psbtn-close').click(function () {
                panel.close();
            });
        },
    resizeit: {
        resize: function () {
    var containheight = PS('#' + source).find('.jsPanel-content .ps').css('height');
    
    PS('#' + source).find('.jsPanel-content').css('height', containheight);
    PS('#' + source).find('.jsPanel-content').parent().css('height', 'fit-content');
    }
    }
    })
    return false;
})
    
//<!-- Aesthic Functions -->
    PS("div#quickjiratables").hide();
    PS("#ticketdropdown").click(function () {
        PS("div#quickjiratables").stop().slideToggle(150);
    });
    PS("div#linktogglecontainer ul").hide();
    PS("div#linktogglecontainer").click(function () {
        PS("div#linktogglecontainer ul:visible").stop().slideUp(150);
        PS(this).find("ul").stop().slideToggle(150);
    });
    PS("div#linktogglecontainer ul li a").click(function () {
        PS(this).parent().parent().stop().slideToggle(150);
    });
    PS("div#navigationalbar button.btn.btn-outline-danger, div#navigationalbar .jsPanel-btn.jsPanel-btn-close, div#toolpanelrestorer button.btn.btn-close").click(function () {
        PS("div#toolpanelrestorer, #alttrig").stop().delay(450).animate({
            'right': '-20px'
        }, 450);
    });
    });
    PS("div#toolpanelrestorer, #alttrig").click(function () {
    PS("div#toolpanelrestorer, #alttrig").stop().animate({
        'right': '-70px'
    }, 250);
    setTimeout(function () {
        PS("#ticketdropdown").toggleClass('disabled');
    }, 750);
    });
// ==UserScript==
// @name         Fb Auto Invite
// @namespace    https://www.richardev.com
// @version      0.5.1
// @description  Facebook Add Friends Script
// @author       richardev
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
};

! function() {
    "use strict";
    var e = 1;
    document.getElementById("fbSearchResultsBox").scrollIntoView(!0);
    var l = setInterval(function() {
            var e, l = document.querySelectorAll(".layerCancel");
            for (e = 0; e < l.length; ++e){
             l[e].click();
             sleepFor((Math.round(Math.random() * 5) + 2)*1000);
             }
        }, 100),
        t = setInterval(function() {
            var n = document.querySelectorAll(".FriendRequestAdd");
            e < n.length ? (n[e].scrollIntoView(!0), window.scrollBy(0, 96.5), n[e].click(), e++) : (clearInterval(t), clearInterval(l), window.location.reload(!1))
        }, 10000)
}();

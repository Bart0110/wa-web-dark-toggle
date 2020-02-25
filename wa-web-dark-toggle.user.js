// ==UserScript==
// @name         WhatsApp dark theme switcher enabler
// @version      0.1
// @description  Adds WhatsApp dark theme switcher
// @author       You
// @match        https://web.whatsapp.com/*
// @grant        none
// ==/UserScript==

/**
Part of this code contains code seen in github.com/m4heshd/whatsapp-desktop-dark
License:
`MIT License

Copyright (c) 2019 Mahesh Bandara Wijerathna

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
*/

(function() {
    'use strict';

    let enabled = false;
    function waitFor(selector) {
        return new Promise(function (res) {
            waitForElementToDisplay(selector, 300);
            function waitForElementToDisplay(selector, time) {
                if (document.querySelector(selector) != null) {
                    res();
                } else {
                    setTimeout(function () {
                        waitForElementToDisplay(selector, time);
                    }, time);
                }
            }
        });
    }

    function addBtn() {
        let switchBtn = '<div class="_3j8Pd"><div role="button" id="wadark" title="Switch Dark/Light mode"><span data-icon="dark-switch" class><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z" /></svg></span></div><span></span></div>';

        document.querySelector('._3j8Pd').parentElement.insertAdjacentHTML('afterbegin', switchBtn);

        document.getElementById("wadark").parentElement.onclick = function () {
            if (enabled) {
                document.body.classList.remove('dark');
            } else {
                document.body.classList.add('dark');
            }

            enabled = !enabled;
        };
    }

    waitFor('._3j8Pd').then(addBtn);
})();

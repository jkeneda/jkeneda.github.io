---
layout: post
title:  "Disable the profileFullScreen issue on TexanConnect"
date:   2022-08-28 18:39:18 -0500
categories: TexanConnect
---

Do you sometimes get fullscreen pop-ups with student info when hovering over student names in TexanConnect rosters?  Yeah, me too.  (It happens by default when the screen width is small.)  Here's a way to disable that.

In Firefox or Chrome, install either the Tampermonkey or Greasemonkey extension.  This lets you add your own code to specific websites.

In TamperMonkey or GreaseMonkey, copy and paste the following code:

{% highlight javascript %}
// ==UserScript==
// @name         Disable profileFullScreen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Stops the student information card from being a fullscreen pop up.
// @author       jkeneda
// @match        https://elluciansso.southplainscollege.edu/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=southplainscollege.edu
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('@media only screen and (max-width:62rem) {.profileFullScreen { display: none!important; }}');
})();
{% endhighlight %}

With that script enabled, you shouldn't get any more fullscreen pop-ups when you hover over a student's name.
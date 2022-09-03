---
layout: post
title:  "Disable profileFullScreen on TexanConnect"
date:   2022-08-28 18:39:18 -0500
categories: TexanConnect SPC
---

Do you sometimes get fullscreen pop-ups with student info when hovering over student names in TexanConnect rosters?  Yeah, me too.  (It happens by default when the window width is relatively small.)  Here's a way to disable the fullscreen pop-up.

---

### Stoppin the Fullscreen Poppin:
#### Step 1
In Firefox or Chrome, install the Tampermonkey extension ([Firefox link](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/), [Chrome link](chrome://extensions/?id=dhdgffkkebhmkfjojejmpbldmpobfkfo)).  This extension lets you add your own code to specific websites.

#### Step 2
Click the button below to copy this code:

{% include codeHeader.html %}
```javascript
// ==UserScript==
// @name         Disable profileFullScreen
// @version      0.1
// @description  Stops the student information card from being a fullscreen pop up.
// @author       Josh Keneda
// @match        https://elluciansso.southplainscollege.edu/*
// @match        https://ellucianss1.southplainscollege.edu/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('@media only screen and (max-width:62rem)
    {.profileFullScreen { display: none!important; }}');
})();
```

#### Step 3
Navigate to the options page for the Tampermonkey add-on/extension.  In Firefox, you can go to `☰ > Add-ons and Themes > Tampermonkey ⋯ > Options`.  In Chrome, you go to `⋮ > More Tools > Extensions > Tampermonkey Details > Extension Options`.

#### Step 4
From the Tampermonkey settings page, click the far left `+` button tab (next to the Installed Userscripts tab) to add your own new script.  

#### Step 5
Paste the code you copied above over their sample code and then hit `Ctrl + s` to save your new script.  You're done!

---

With that script enabled, you shouldn't get any more fullscreen pop-ups when you hover over a student's name.  You will still get the smaller, less invasive student profile pop-ups whenever your window size is large enough.

<script src="/assets/scripts/copyCode.js"></script>
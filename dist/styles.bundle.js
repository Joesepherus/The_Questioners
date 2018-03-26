webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\nimg {\n\twidth: 100%;\n}\n.todolist, .QaA {\n    margin-top: 30px;\n}\n.navbar {\n    margin-bottom: 0px;\n}\nbody {\n    background-color: #18BC9C;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: 18px!important;\n}\n.btn {\n    font-size: 18px!important;\n}\nselect {\n    font-size: 18px!important;\n}\n.aboutParagraphs {\n    background-color: #2C3E50;\n    height: 50px !important;\n    vertical-align: middle;\n    padding-top: 10px;\n    padding-left: 10px;\n}\nb {\n    color: #2C3E50;\n}\n/* navbar */\n.navbar-default {\n    background-color: #2C3E50/*#048e16*/;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n    color: lightblue;\n    background-color: #18BC9C;\n}\n.navbar-default .navbar-nav > li > a,\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n    color: lightblue;\n}\n.navbar-default .navbar-nav > li > a {\n    color: white;\n}\ndiv.hamburger {\n    width: 30px;\n    height: 3px;\n    background-color: black;\n\tmargin: 6px 15px;\n}\n.testing {\n    margin-right: 10px;\n}\ndiv.dropdown{\n\t\n}\ndiv.dropdown:click > .dropdown-menu {\n    display: block;\n}\n.dropbtn {\n    background-color: #18BC9C;\n    color: white;\n\tpadding: 1px;\n    border: none;\n\tcursor: pointer;\n\tmargin-top: 7px;\t\n}\n.dropbtn2 {\n\tpadding: 1px;\n    border: none;\n\tcursor: pointer;\n    margin-top: 7px;\t\n    border: solid;\n    border-color: black;\n}\n.aboutDiv {\n  overflow: auto;\n}\n.aboutDropbtn2 {\n\tpadding: 1px;\n    border: none;\n\tcursor: pointer;\n}\n.dropbtn:hover, .dropbtn:focus {\n    background-color: #3e8e41;\n}\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n.dropdown-content {\n    display: none;\n    position: relative;\n    background-color: #e2e1df;\n    overflow: auto;\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n    border: solid;\n    border-color: black;\n    margin-top: 13px;\n    margin-right: 10px;    \n    padding: 5px 10px 0px 10px;\n}\n.dropdown-content2 {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 500px;\n    overflow: auto;\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n    color: black;\n}\n.dropdown-content2 a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n.dropdown-content2 a:hover {\n\tbackground-color: #f1f1f1\n}\n.aboutDropdown-content {\n    display: none;\n    position: relative;\n    overflow: auto;\n    z-index: 1;\n    margin-top: 10px;\n    margin-right: 0px;    \n    padding: 5px 10px 0px 10px;\n}\n.aboutDropdown-content2 {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 500px;\n    overflow: auto;\n    z-index: 1;\n    color: black;\n}\n.aboutDropdown-content2 a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n.aboutDropdown-content2 a:hover {\n\tbackground-color: #f1f1f1\n}\n.show {\n\tdisplay:block;\n}\nli.hamburger {\n\tpadding-right: 15px;\n}\n/* Include the padding and border in an element's total width and height */\n/** {\n    box-sizing: border-box;\n}*/\n/* Remove margins and padding from the list */\nul.default {\n    margin: 0;\n    padding-right: 0;\n}\n/* Style the list items */\nul li.default {\n    cursor: pointer;\n    position: relative;\n    padding: 12px 8px 12px 50px;\n    background: #eee;\n    font-size: 18px;\n    -webkit-transition: 0.2s;\n    transition: 0.2s;\n    list-style: none; \n  /* make the list items unselectable */\n    /*-webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;*/\n}\nul.aboutDefault {\n    margin: 0;\n    padding-right: 0;\n}\n/* Style the list items */\nul li.aboutDefault {\n    cursor: pointer;\n    position: relative;\n    padding: 12px 8px 12px 10px;\n    font-size: 22px;\n    -webkit-transition: 0.2s;\n    transition: 0.2s;\n    list-style: none; \n  /* make the list items unselectable */\n    /*-webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;*/\n    margin-bottom: 50px;\n    border: 1px solid #2C3E50;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    background-color:  #6ce271 ;\n}\n/* Set all odd list items to a different color (zebra-stripes) */\n/*ul li:nth-child(odd).default {\n    background-color: white ;\n}*/\n/* Darker background-color on hover */\nul li:hover.default {\n    opacity: 0.70;\n    border-color: black;\n}\n/* When clicked on, add a background color and strike out text */\nul li.completed,  ul li.passed{\n    background-color: white;\n    color: black;\n    text-decoration: line-through;\n}\nul li.removed, ul li.failed {\n    background-color: #696a69 !important;\n    color: black;\n}\nul li.work, ul li.javascript  {\n    background-color: blueviolet;\n    color: black;\n}\nul li.personal, ul li.css {\n    background-color: #ffc900;\n    color: black;\n}\nul li.school, ul li.html {\n    background-color: #048E16;\n    color: black;\n}\nul li.project, ul li.html {\n  background-color: #533A71;\n  color: black;\n}\nul li.learn, ul li.html {\n  background-color: #D1751F;\n  color: black;\n}\nul li.watchLater, ul li.DataStructures  {\n    background-color: #900C3E;\n    color: black;\n}\ndiv.work-content, div.javascript-content{\n    background-color: #915aff;    \n}\ndiv.personal-content, div.css-content {\n    background-color: #ffd94b;\n}\ndiv.school-content, div.html-content {\n    background-color: #12b20d;\n}\ndiv.project-content, div.html-content {\n  background-color: #7d5ca5;\n}\ndiv.learn-content, div.html-content {\n  background-color: #E88F22;\n}\ndiv.watchLater-content, div.DataStructures-content {\n    background-color: #C70039;\n}\ndiv.removed-content, div.failed-content {\n    background-color: #a1a1a1;\n}\n/* Style the close button */\n.closeBtn {\n    position: absolute;\n    right: 0;\n    top: 0;\n    padding: 12px 16px 18px 16px;\n    height: 49px;\n}\n.closeBtnDRO {\n    position: relative;\n    right: 0;\n    top: 0;\n    padding: 12px 16px 18px 16px;\n    cursor: pointer;\n    \n}\n/* Style the close button */\n.check {\n    position: absolute;\n    left: 0;\n    top: 0;\n    padding: 12px 16px 12px 16px;\n}\n.addBtnDRO {\n    position: relative;\n    left: 0;\n    top: 0;\n    padding: 12px 16px 12px 16px;\n    cursor: pointer;\n}\n.closeBtn:hover, .closeBtnDRO:hover {\n    background-color: red;\n    color: white;\n}\n.check:hover, .addBtnDRO:hover {\n    background-color: #1b55fb ;\n    color: white;\n}\n/* Style the header */\n.header {\n    background-color: green;\n    padding: 30px 40px;\n    color: white;\n    text-align: center;\n}\n/* Clear floats after the header */\n.header:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n/* Style the input */\ninput {\n    border: none;\n    width: 75%;\n    padding: 10px;\n    float: left;\n    font-size: 16px;\n    color: black;\n}\n/* Style the \"Add\" button */\n.addBtn {\n    margin-top: 20px;\n    margin-bottom: 5px;\n}\n.w3-card-4, .w3-hover-shadow:hover {\n    -webkit-box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);\n            box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);\n}\n.w3-green,.w3-hover-green:hover {\n    color:#fff!important;background-color:#4CAF50!important\n}\n.w3-container{\n    padding:0.01em 16px;\n}\n.w3-input {\n    padding:8px;\n    display:block;\n    border:none;\n    border-bottom:1px solid #ccc;\n    width:100%\n}\n.dropPara {\n    border-bottom: 1px solid black;\n    text-decoration: none;       \n    margin-top: 10px;     \n    margin-bottom: 10px;     \n}\n.selector {\n    margin-top: 13px;\n    margin-left: 9px;\n}\nselect {\n    border: 1px solid #111;\n    background: transparent;\n    width: 150px;\n    padding: 5px 35px 5px 5px;\n    font-size: 16px;\n    border: 1px solid #ccc;\n    height: 34px;\n    background: url('down-arrow-circle-hi.3cd3d41273417c387525.png') 96% / 15% no-repeat #eee;\n\tcursor: pointer;\n  \n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n/* CAUTION: IE hackery ahead */\nselect::-ms-expand { \n    display: none; /* remove default arrow on ie10 and ie11 */\n}\n/* target Internet Explorer 9 to undo the custom arrow */\n@media screen and (min-width:0\\0) {\n    select {\n        background:none\\9;\n        padding: 5px\\9;\n    } \n}\nbutton.deleteBtn, button.editBtn, button.detailsBtn {\n    margin-bottom: 10px;\n}\n.calendar {\n    width: 800px;\n    height: 370px;\n}\n.event {\n    color: blue;\n    border: 2px solid blue;\n}\n.ui-datepicker {\n    width: 800px; /*what ever width you want*/\n    height: 370px;\n}\ndiv.ui-datepicker\n{\n    font-size: 25px;\n}\n.newTaskForm{\n    height: 250px;  \n    background-color: #f1f0eb; \n}\n.aboutNewTaskForm{\n    height: 370px;  \n    background-color: #f1f0eb; \n}\n.newTaskType {\n    margin-top: 10px;\n}\n.close {\n    width: 50px;\n    height: 30px;\n}\n.modal-body {\n    height: 270px;\n}\n.footer-bottom {\n    background-color: #2C3E50 /*#048e16*/;\n    min-height: 20px;\n    width: 100%;\n    border-top: 2px solid #DDDDDD;\n}\n.copyright {\n    color: #fff;\n    font-size: 20px;\n    vertical-align: middle;\n\tpadding-top: 10px;\n}\n.design {\n    color: #fff;\n    text-align: right;\n}\n.design a {\n    color: #fff;\n}\n.social:hover {\n     -webkit-transform: scale(1.1);\n     -moz-transform: scale(1.1);\n     -o-transform: scale(1.1);\n }\n.social {\n     -webkit-transform: scale(0.8);\n     /* Browser Variations: */\n     \n     -moz-transform: scale(0.8);\n     -o-transform: scale(0.8);\n     -webkit-transition-duration: 0.5s;\n     -moz-transition-duration: 0.5s;\n     -o-transition-duration: 0.5s;\n }\n/*\n    Multicoloured Hover Variations\n*/\n#social-fb:hover {\n     color: #3B5998;\n }\n#social-tw:hover {\n     color: #4099FF;\n }\n#social-gp:hover {\n     color: #d34836;\n }\n#social-em:hover {\n     color: #f39c12;\n }\n#social-gh:hover {\n     color: #545454;\n }\n.createdDate a {\n    background-color: #4CAF50 !important;\n}\n.completedDate a {\n    border: solid 3px #f0f !important;\n}\n.ui-state-highlight {\n    color: orange !important;\n    outline-color: yellow;\n    outline-style: solid;\n}\nimg.TheQ {\n    width: 30px;\n}\na.TheQ {\n    padding-top: 8px !important;\n}\n/* ===== ABOUT WEBSITE ===== */\nheader.masthead {\n  padding-top: 50px !important;\n  padding-bottom: 50px;\n  text-align: center;\n  color: white;\n}\nheader.masthead img {\n    display: block;\n    margin: 0 auto 20px; }\nheader.masthead .intro-text .name {\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: 2em;\n    font-weight: 500;\n    display: block;\n    margin-top: 50px;\n     }\nheader.masthead .intro-text .skills {\n    font-size: 1.25em;\n    font-weight: 300; \n    font-family: Georgia, 'Times New Roman', Times, serif;\n    \n}\n.background {\n    background-color: rgba(24, 188, 156, 0.7);\n    margin-top: 20px;\n}\n@media (min-width: 768px) {\n  header.masthead {\n    padding-top: 100px;\n    padding-bottom: 100px; }\n    header.masthead .intro-text .name {\n      font-size: 4.75em; }\n    header.masthead .intro-text .skills {\n      font-size: 1.75em; } }\nsection.success {\n  color: white;\n    padding-bottom: 20px;\n  \n}\nr.star-light,\nhr.star-primary {\n  max-width: 250px;\n  margin: 25px auto 30px;\n  padding: 0;\n  text-align: center;\n  border: none;\n  border-top: solid 5px; }\nhr.star-light:after,\nhr.star-primary:after {\n  font-family: FontAwesome;\n  font-size: 2em;\n  position: relative;\n  top: -.8em;\n  display: inline-block;\n  padding: 0 0.25em;\n  content: '\\f005'; }\nhr.star-light {\n  border-color: white; }\nhr.star-light:after {\n  color: white;\n  background-color: #18BC9C; }\nimg.TheQAbout {\n    width: 20% !important;\n    height: 50% !important;\n\n}\n/* Bounce In */\n.hvr-bounce-in {\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-transform: perspective(1px) translateZ(0);\n  transform: perspective(1px) translateZ(0);\n  -webkit-box-shadow: 0 0 1px transparent;\n          box-shadow: 0 0 1px transparent;\n  -webkit-transition-duration: 0.5s;\n  transition-duration: 0.5s;\n}\n.hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {\n  -webkit-transform: scale(1.2);\n  transform: scale(1.2);\n  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n}\n.QaAPara {\n    width: 100%;\n    white-space: -moz-pre-wrap; /* Firefox */\n    white-space: -pre-wrap; /* ancient Opera */\n    white-space: -o-pre-wrap; /* newer Opera */\n    white-space: pre-wrap; /* Chrome; W3C standard */\n    word-wrap: break-word; /* IE */\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n.newspaper {\n    -webkit-column-count: 2; /* Chrome, Safari, Opera */ /* Firefox */\n    column-count: 2;\n}\n.badge {\n    margin-bottom: 10px;\n}\n.aboutPara {\n    width: 100%;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: 16px;\n    float: left;\n    padding: 0 10px 0 10px;\n    text-align: justify;\n}\n.calendarImg {\n    width: 10%;\n    height: 15%;\n}\n.img-thumbnail {\n    margin-left: 50px;\n    margin-top: 150px;\n}\n@media only screen and (max-width: 1200px) {\n  .img-thumbnail {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 0px;\n    width: 50%;\n  }\n\n  .pull-right {\n    float: none!important;\n  }\n}\n.skillsIT {\n    width: 130px!important;\n    height: 130px!important;\n    padding: 20px 0 20px 0;\n}\n.divSkillsIT {\n    width: 700px!important;\n}\nh2.name {\n    color: #2C3E50;\n    font-weight: bold;\n    text-decoration: underline;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\nh3 {\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n.aboutHeader2 {\n    background-color: #2C3E50;\n    text-align: center;\n    -ms-flex-item-align: center;\n        -ms-grid-row-align: center;\n        align-self: center;\n    margin-left: auto;\n    margin-right: auto;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n.aboutHeader {\n    background-color: #2C3E50;\n    height: 100px !important; \n    font-family: Georgia, 'Times New Roman', Times, serif;\n    \n}\n.parallax {\n    /* The image used */\n    background-image: url('/assets/img/wallpaper.jpg');\n\n    /* Full height */\n    height: 100%; \n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.parallax2 {\n    /* The image used */\n    background-image: url('/assets/img/wallpaper2.jpg');\n\n    /* Full height */\n    height: 100%; \n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.parallax3 {\n    /* The image used */\n    background-image: url('/assets/img/wallpaper4.jpg');\n\n    /* Full height */\n    height: 100%; \n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n.parallax4 {\n    /* The image used */\n    background-image: url('/assets/img/wallpaper5.jpg');\n\n    /* Full height */\n    height: 100%; \n\n    /* Create the parallax scrolling effect */\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n/* Turn off parallax scrolling for tablets and phones. Increase the pixels if needed */\n@media only screen and (max-device-width: 1024px) {\n    .parallax {\n        background-attachment: scroll;\n    }\n    .parallax2 {\n        background-attachment: scroll;\n    }\n    .parallax3 {\n        background-attachment: scroll;\n    }\n    .parallax4 {\n        background-attachment: scroll;\n    }\n}\n.detailsModal {\n    min-height: 480px;\n}\n.modal-title {\n    color: white;\n}\n.editQaABody {\n    height: 350px;\n}\n.editQaADescription {\n    height: 100px;\n}\ntextarea {\n    resize: none;\n}\n.checkImg {\n    width: 20px;\n    height: 20px;\n    display: none;\n}\n.calendarText {\n    height: 200px;\n}\n/* POST ANGULAR 5 */\n.navbar-default {\n  background-image: none;\n}\n.search {\n  width: 500px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border: 2px solid #ccc;\n  border-radius: 4px;\n  font-size: 16px;\n  background-color: white;\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAACYktHRAD/h4/MvwAAAAl2cEFnAAABKgAAASkAUBZlMQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0wNC0xMFQwNjo1OTowNy0wNzowMI5BiVEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTMtMDQtMTBUMDY6NTk6MDctMDc6MDD/HDHtAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABF0RVh0VGl0bGUAc2VhcmNoLWljb27Cg+x9AAACKklEQVQ4T6WUSavqQBCFK+2sII7gShFXLpUsBBHFf+1KcAQFwaWiolsnnBDn++4p0iHRqPDuByFJd/Wp6qrqVn5+IQP3+52m0ymtVis6Ho885na7KRgMUiKR4O9vmEQHgwGNx2NyOp0khCBFUXgcJo/Hg67XK8ViMcpkMjz+Dl200+nQZrMhh8PBE4gYQgDidrudvzEOm2KxyP9WsCginM1mHKEUS6VSFA6HOWI4G41GPAfx2+1GgUCAVFXVZMwovwY/lUqFPB4PiyFn+XxemzbT6/VovV6z8Ol0olwux+LPCBQFEQKIvhME2WyWbWGHFCD/VghUGVvE1rDlb6TTabbFmuVyqY2aEWgbFALeI5GINvyeUCjEtlgju+IZoRWfkS30CURoxFJUNjMEt9stf38CNjJKIFvNiMBJgTebzcZt843hcMhCELWqPBDxeJwulwtvC/3X7/e1qVfgFD0rC5tMJrUZM8Lr9VI0GmVBRDCfz6nZbHI/Sna7HXW7XZpMJtxSiBIP1lmhH9NqtaqfGKQDTmQREBnSgwfmMqfYYblc1o+2xHShtNttLgSiee4EmMEp3hDBPJzikimVSuRyuTTLJ1GwWCz4pCB3UhiL/X4/Hw50C5zjLSM+n898weCogxdRIzAGxigAdtNqtV6EC4UC+Xy+z6Kf2O/31Gg0TMK4ZBDxf4uCw+FA9XpdF0aaUOg/iQLcHbVaTb/p0Cl/FgXIJ/oYnaCqKv0DC6dltH6Ks84AAAAASUVORK5CYII=');\n  background-position: 10px 10px; \n  background-repeat: no-repeat;\n  padding: 12px 20px 12px 40px;\n  -webkit-transition: width 0.4s ease-in-out, margin 0.4s ease-in-out;\n  transition: width 0.4s ease-in-out, margin 0.4s ease-in-out;\n  margin: 10px 0px 10px 220px;\n}\n.search:focus {\n  width: 100%;\n  margin: 10px 0px 10px 0px;\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map
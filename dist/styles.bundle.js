webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\r\nimg {\r\n\twidth: 100%;\r\n}\r\n.todolist, .QaA {\r\n    margin-top: 30px;\r\n}\r\n.navbar {\r\n    margin-bottom: 0px;\r\n}\r\nbody {\r\n    background-color: #18BC9C;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-size: 18px!important;\r\n}\r\n.btn {\r\n    font-size: 18px!important;\r\n}\r\nselect {\r\n    font-size: 18px!important;\r\n}\r\n.aboutParagraphs {\r\n    background-color: #2C3E50;\r\n    height: 50px !important;\r\n    vertical-align: middle;\r\n    padding-top: 10px;\r\n    padding-left: 10px;\r\n}\r\nb {\r\n    color: #2C3E50;\r\n}\r\n/* navbar */\r\n.navbar-default {\r\n    background-color: #2C3E50/*#048e16*/;\r\n}\r\n.navbar-default .navbar-nav > .active > a,\r\n.navbar-default .navbar-nav > .active > a:hover,\r\n.navbar-default .navbar-nav > .active > a:focus {\r\n    color: lightblue;\r\n    background-color: #18BC9C;\r\n}\r\n.navbar-default .navbar-nav > li > a,\r\n.navbar-default .navbar-nav > li > a:hover,\r\n.navbar-default .navbar-nav > li > a:focus {\r\n    color: lightblue;\r\n}\r\n.navbar-default .navbar-nav > li > a {\r\n    color: white;\r\n}\r\ndiv.hamburger {\r\n    width: 30px;\r\n    height: 3px;\r\n    background-color: black;\r\n\tmargin: 6px 15px;\r\n}\r\n.testing {\r\n    margin-right: 10px;\r\n}\r\ndiv.dropdown{\r\n\t\r\n}\r\ndiv.dropdown:click > .dropdown-menu {\r\n    display: block;\r\n}\r\n.dropbtn {\r\n    background-color: #18BC9C;\r\n    color: white;\r\n\tpadding: 1px;\r\n    border: none;\r\n\tcursor: pointer;\r\n\tmargin-top: 7px;\t\r\n}\r\n.dropbtn2 {\r\n\tpadding: 1px;\r\n    border: none;\r\n\tcursor: pointer;\r\n    margin-top: 7px;\t\r\n    border: solid;\r\n    border-color: black;\r\n}\r\n.aboutDropbtn2 {\r\n\tpadding: 1px;\r\n    border: none;\r\n\tcursor: pointer;\r\n}\r\n.dropbtn:hover, .dropbtn:focus {\r\n    background-color: #3e8e41;\r\n}\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n.dropdown-content {\r\n    display: none;\r\n    position: relative;\r\n    background-color: #e2e1df;\r\n    overflow: auto;\r\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n    border: solid;\r\n    border-color: black;\r\n    margin-top: 13px;\r\n    margin-right: 10px;    \r\n    padding: 5px 10px 0px 10px;\r\n}\r\n.dropdown-content2 {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 500px;\r\n    overflow: auto;\r\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n    color: black;\r\n}\r\n.dropdown-content2 a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n.dropdown-content2 a:hover {\r\n\tbackground-color: #f1f1f1\r\n}\r\n.aboutDropdown-content {\r\n    display: none;\r\n    position: relative;\r\n    overflow: auto;\r\n    z-index: 1;\r\n    margin-top: 10px;\r\n    margin-right: 0px;    \r\n    padding: 5px 10px 0px 10px;\r\n}\r\n.aboutDropdown-content2 {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 500px;\r\n    overflow: auto;\r\n    z-index: 1;\r\n    color: black;\r\n}\r\n.aboutDropdown-content2 a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n.aboutDropdown-content2 a:hover {\r\n\tbackground-color: #f1f1f1\r\n}\r\n.show {\r\n\tdisplay:block;\r\n}\r\nli.hamburger {\r\n\tpadding-right: 15px;\r\n}\r\n/* Include the padding and border in an element's total width and height */\r\n/** {\r\n    box-sizing: border-box;\r\n}*/\r\n/* Remove margins and padding from the list */\r\nul.default {\r\n    margin: 0;\r\n    padding-right: 0;\r\n}\r\n/* Style the list items */\r\nul li.default {\r\n    cursor: pointer;\r\n    position: relative;\r\n    padding: 12px 8px 12px 50px;\r\n    background: #eee;\r\n    font-size: 18px;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n    list-style: none; \r\n  /* make the list items unselectable */\r\n    /*-webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;*/\r\n}\r\nul.aboutDefault {\r\n    margin: 0;\r\n    padding-right: 0;\r\n}\r\n/* Style the list items */\r\nul li.aboutDefault {\r\n    cursor: pointer;\r\n    position: relative;\r\n    padding: 12px 8px 12px 10px;\r\n    font-size: 22px;\r\n    -webkit-transition: 0.2s;\r\n    transition: 0.2s;\r\n    list-style: none; \r\n  /* make the list items unselectable */\r\n    /*-webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;*/\r\n    margin-bottom: 50px;\r\n    border: 1px solid #2C3E50;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    background-color:  #6ce271 ;\r\n}\r\n/* Set all odd list items to a different color (zebra-stripes) */\r\n/*ul li:nth-child(odd).default {\r\n    background-color: white ;\r\n}*/\r\n/* Darker background-color on hover */\r\nul li:hover.default {\r\n    opacity: 0.70;\r\n    border-color: black;\r\n}\r\n/* When clicked on, add a background color and strike out text */\r\nul li.completed,  ul li.passed{\r\n    background-color: white;\r\n    color: black;\r\n    text-decoration: line-through;\r\n}\r\nul li.removed, ul li.failed {\r\n    background-color: #696a69 !important;\r\n    color: black;\r\n}\r\nul li.work, ul li.javascript  {\r\n    background-color: blueviolet;\r\n    color: black;\r\n}\r\nul li.personal, ul li.css {\r\n    background-color: #ffc900;\r\n    color: black;\r\n}\r\nul li.school, ul li.html {\r\n    background-color: #048E16;\r\n    color: black;\r\n}\r\nul li.project, ul li.html {\r\n  background-color: #533A71;\r\n  color: black;\r\n}\r\nul li.learn, ul li.html {\r\n  background-color: #D1751F;\r\n  color: black;\r\n}\r\nul li.watchLater, ul li.DataStructures  {\r\n    background-color: #900C3E;\r\n    color: black;\r\n}\r\ndiv.work-content, div.javascript-content{\r\n    background-color: #915aff;    \r\n}\r\ndiv.personal-content, div.css-content {\r\n    background-color: #ffd94b;\r\n}\r\ndiv.school-content, div.html-content {\r\n    background-color: #12b20d;\r\n}\r\ndiv.project-content, div.html-content {\r\n  background-color: #7d5ca5;\r\n}\r\ndiv.learn-content, div.html-content {\r\n  background-color: #E88F22;\r\n}\r\ndiv.watchLater-content, div.DataStructures-content {\r\n    background-color: #C70039;\r\n}\r\ndiv.removed-content, div.failed-content {\r\n    background-color: #a1a1a1;\r\n}\r\n/* Style the close button */\r\n.closeBtn {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    padding: 12px 16px 18px 16px;\r\n    height: 49px;\r\n}\r\n.closeBtnDRO {\r\n    position: relative;\r\n    right: 0;\r\n    top: 0;\r\n    padding: 12px 16px 18px 16px;\r\n    cursor: pointer;\r\n    \r\n}\r\n/* Style the close button */\r\n.check {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    padding: 12px 16px 12px 16px;\r\n}\r\n.addBtnDRO {\r\n    position: relative;\r\n    left: 0;\r\n    top: 0;\r\n    padding: 12px 16px 12px 16px;\r\n    cursor: pointer;\r\n}\r\n.closeBtn:hover, .closeBtnDRO:hover {\r\n    background-color: red;\r\n    color: white;\r\n}\r\n.check:hover, .addBtnDRO:hover {\r\n    background-color: #1b55fb ;\r\n    color: white;\r\n}\r\n/* Style the header */\r\n.header {\r\n    background-color: green;\r\n    padding: 30px 40px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n/* Clear floats after the header */\r\n.header:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n/* Style the input */\r\ninput {\r\n    border: none;\r\n    width: 75%;\r\n    padding: 10px;\r\n    float: left;\r\n    font-size: 16px;\r\n    color: black;\r\n}\r\n/* Style the \"Add\" button */\r\n.addBtn {\r\n    margin-top: 20px;\r\n    margin-bottom: 5px;\r\n}\r\n.w3-card-4, .w3-hover-shadow:hover {\r\n    -webkit-box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);\r\n            box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);\r\n}\r\n.w3-green,.w3-hover-green:hover {\r\n    color:#fff!important;background-color:#4CAF50!important\r\n}\r\n.w3-container{\r\n    padding:0.01em 16px;\r\n}\r\n.w3-input {\r\n    padding:8px;\r\n    display:block;\r\n    border:none;\r\n    border-bottom:1px solid #ccc;\r\n    width:100%\r\n}\r\n.dropPara {\r\n    border-bottom: 1px solid black;\r\n    text-decoration: none;       \r\n    margin-top: 10px;     \r\n    margin-bottom: 10px;     \r\n}\r\n.selector {\r\n    margin-top: 13px;\r\n    margin-left: 9px;\r\n}\r\nselect {\r\n    border: 1px solid #111;\r\n    background: transparent;\r\n    width: 150px;\r\n    padding: 5px 35px 5px 5px;\r\n    font-size: 16px;\r\n    border: 1px solid #ccc;\r\n    height: 34px;\r\n    background: url('down-arrow-circle-hi.3cd3d41273417c387525.png') 96% / 15% no-repeat #eee;\r\n\tcursor: pointer;\r\n  \r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n}\r\n/* CAUTION: IE hackery ahead */\r\nselect::-ms-expand { \r\n    display: none; /* remove default arrow on ie10 and ie11 */\r\n}\r\n/* target Internet Explorer 9 to undo the custom arrow */\r\n@media screen and (min-width:0\\0) {\r\n    select {\r\n        background:none\\9;\r\n        padding: 5px\\9;\r\n    } \r\n}\r\nbutton.deleteBtn, button.editBtn, button.detailsBtn {\r\n    margin-bottom: 10px;\r\n}\r\n.calendar {\r\n    width: 800px;\r\n    height: 370px;\r\n}\r\n.event {\r\n    color: blue;\r\n    border: 2px solid blue;\r\n}\r\n.ui-datepicker {\r\n    width: 800px; /*what ever width you want*/\r\n    height: 370px;\r\n}\r\ndiv.ui-datepicker\r\n{\r\n    font-size: 25px;\r\n}\r\n.newTaskForm{\r\n    height: 250px;  \r\n    background-color: #f1f0eb; \r\n}\r\n.aboutNewTaskForm{\r\n    height: 370px;  \r\n    background-color: #f1f0eb; \r\n}\r\n.newTaskType {\r\n    margin-top: 10px;\r\n}\r\n.close {\r\n    width: 50px;\r\n    height: 30px;\r\n}\r\n.modal-body {\r\n    height: 270px;\r\n}\r\n.footer-bottom {\r\n    background-color: #2C3E50 /*#048e16*/;\r\n    min-height: 20px;\r\n    width: 100%;\r\n    border-top: 2px solid #DDDDDD;\r\n}\r\n.copyright {\r\n    color: #fff;\r\n    font-size: 20px;\r\n    vertical-align: middle;\r\n\tpadding-top: 10px;\r\n}\r\n.design {\r\n    color: #fff;\r\n    text-align: right;\r\n}\r\n.design a {\r\n    color: #fff;\r\n}\r\n.social:hover {\r\n     -webkit-transform: scale(1.1);\r\n     -moz-transform: scale(1.1);\r\n     -o-transform: scale(1.1);\r\n }\r\n.social {\r\n     -webkit-transform: scale(0.8);\r\n     /* Browser Variations: */\r\n     \r\n     -moz-transform: scale(0.8);\r\n     -o-transform: scale(0.8);\r\n     -webkit-transition-duration: 0.5s;\r\n     -moz-transition-duration: 0.5s;\r\n     -o-transition-duration: 0.5s;\r\n }\r\n/*\r\n    Multicoloured Hover Variations\r\n*/\r\n#social-fb:hover {\r\n     color: #3B5998;\r\n }\r\n#social-tw:hover {\r\n     color: #4099FF;\r\n }\r\n#social-gp:hover {\r\n     color: #d34836;\r\n }\r\n#social-em:hover {\r\n     color: #f39c12;\r\n }\r\n#social-gh:hover {\r\n     color: #545454;\r\n }\r\n.createdDate a {\r\n    background-color: #4CAF50 !important;\r\n}\r\n.completedDate a {\r\n    border: solid 3px #f0f !important;\r\n}\r\n.ui-state-highlight {\r\n    color: orange !important;\r\n    outline-color: yellow;\r\n    outline-style: solid;\r\n}\r\nimg.TheQ {\r\n    width: 30px;\r\n}\r\na.TheQ {\r\n    padding-top: 8px !important;\r\n}\r\n/* ===== ABOUT WEBSITE ===== */\r\nheader.masthead {\r\n  padding-top: 50px !important;\r\n  padding-bottom: 50px;\r\n  text-align: center;\r\n  color: white;\r\n}\r\nheader.masthead img {\r\n    display: block;\r\n    margin: 0 auto 20px; }\r\nheader.masthead .intro-text .name {\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-size: 2em;\r\n    font-weight: 500;\r\n    display: block;\r\n    margin-top: 50px;\r\n     }\r\nheader.masthead .intro-text .skills {\r\n    font-size: 1.25em;\r\n    font-weight: 300; \r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    \r\n}\r\n.background {\r\n    background-color: rgba(24, 188, 156, 0.7);\r\n    margin-top: 20px;\r\n}\r\n@media (min-width: 768px) {\r\n  header.masthead {\r\n    padding-top: 100px;\r\n    padding-bottom: 100px; }\r\n    header.masthead .intro-text .name {\r\n      font-size: 4.75em; }\r\n    header.masthead .intro-text .skills {\r\n      font-size: 1.75em; } }\r\nsection.success {\r\n  color: white;\r\n    padding-bottom: 20px;\r\n  \r\n}\r\nr.star-light,\r\nhr.star-primary {\r\n  max-width: 250px;\r\n  margin: 25px auto 30px;\r\n  padding: 0;\r\n  text-align: center;\r\n  border: none;\r\n  border-top: solid 5px; }\r\nhr.star-light:after,\r\nhr.star-primary:after {\r\n  font-family: FontAwesome;\r\n  font-size: 2em;\r\n  position: relative;\r\n  top: -.8em;\r\n  display: inline-block;\r\n  padding: 0 0.25em;\r\n  content: '\\f005'; }\r\nhr.star-light {\r\n  border-color: white; }\r\nhr.star-light:after {\r\n  color: white;\r\n  background-color: #18BC9C; }\r\nimg.TheQAbout {\r\n    width: 20% !important;\r\n    height: 50% !important;\r\n\r\n}\r\n/* Bounce In */\r\n.hvr-bounce-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  -webkit-transform: perspective(1px) translateZ(0);\r\n  transform: perspective(1px) translateZ(0);\r\n  -webkit-box-shadow: 0 0 1px transparent;\r\n          box-shadow: 0 0 1px transparent;\r\n  -webkit-transition-duration: 0.5s;\r\n  transition-duration: 0.5s;\r\n}\r\n.hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\r\n}\r\n.QaAPara {\r\n    width: 100%;\r\n    white-space: -moz-pre-wrap; /* Firefox */\r\n    white-space: -pre-wrap; /* ancient Opera */\r\n    white-space: -o-pre-wrap; /* newer Opera */\r\n    white-space: pre-wrap; /* Chrome; W3C standard */\r\n    word-wrap: break-word; /* IE */\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n.newspaper {\r\n    -webkit-column-count: 2; /* Chrome, Safari, Opera */ /* Firefox */\r\n    column-count: 2;\r\n}\r\n.badge {\r\n    margin-bottom: 10px;\r\n}\r\n.aboutPara {\r\n    width: 100%;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    font-size: 16px;\r\n    float: left;\r\n    padding: 0 10px 0 10px;\r\n    text-align: justify;\r\n}\r\n.calendarImg {\r\n    width: 10%;\r\n    height: 15%;\r\n}\r\n.img-thumbnail {\r\n    margin-left: 50px;\r\n    margin-top: 150px;\r\n}\r\n.skillsIT {\r\n    width: 130px!important;\r\n    height: 130px!important;\r\n    padding: 20px 0 20px 0;\r\n}\r\n.divSkillsIT {\r\n    width: 700px!important;\r\n}\r\nh2.name {\r\n    color: #2C3E50;\r\n    font-weight: bold;\r\n    text-decoration: underline;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\nh3 {\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n.aboutHeader2 {\r\n    background-color: #2C3E50;\r\n    text-align: center;\r\n    -ms-flex-item-align: center;\r\n        -ms-grid-row-align: center;\r\n        align-self: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n.aboutHeader {\r\n    background-color: #2C3E50;\r\n    height: 100px !important; \r\n    font-family: Georgia, 'Times New Roman', Times, serif;\r\n    \r\n}\r\n.parallax {\r\n    /* The image used */\r\n    background-image: url('/css/img/wallpaper.jpg');\r\n\r\n    /* Full height */\r\n    height: 100%; \r\n\r\n    /* Create the parallax scrolling effect */\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.parallax2 {\r\n    /* The image used */\r\n    background-image: url('/css/img/wallpaper2.jpg');\r\n\r\n    /* Full height */\r\n    height: 100%; \r\n\r\n    /* Create the parallax scrolling effect */\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.parallax3 {\r\n    /* The image used */\r\n    background-image: url('/css/img/wallpaper4.jpg');\r\n\r\n    /* Full height */\r\n    height: 100%; \r\n\r\n    /* Create the parallax scrolling effect */\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n.parallax4 {\r\n    /* The image used */\r\n    background-image: url('/css/img/wallpaper5.jpg');\r\n\r\n    /* Full height */\r\n    height: 100%; \r\n\r\n    /* Create the parallax scrolling effect */\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n/* Turn off parallax scrolling for tablets and phones. Increase the pixels if needed */\r\n@media only screen and (max-device-width: 1024px) {\r\n    .parallax {\r\n        background-attachment: scroll;\r\n    }\r\n    .parallax2 {\r\n        background-attachment: scroll;\r\n    }\r\n    .parallax3 {\r\n        background-attachment: scroll;\r\n    }\r\n    .parallax4 {\r\n        background-attachment: scroll;\r\n    }\r\n}\r\n.detailsModal {\r\n    min-height: 480px;\r\n}\r\n.modal-title {\r\n    color: white;\r\n}\r\n.editQaABody {\r\n    height: 350px;\r\n}\r\n.editQaADescription {\r\n    height: 100px;\r\n}\r\ntextarea {\r\n    resize: none;\r\n}\r\n.checkImg {\r\n    width: 20px;\r\n    height: 20px;\r\n    display: none;\r\n}\r\n.calendarText {\r\n    height: 200px;\r\n}\r\n/* POST ANGULAR 5 */\r\n.navbar-default {\r\n  background-image: none;\r\n} "

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
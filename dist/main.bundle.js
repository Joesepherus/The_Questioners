webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<header class=\"masthead parallax\">\n  <div class=\"container\">\n    <img class=\"img-fluid hvr-bounce-in TheQAbout\"\n    src=\"../assets/img/TheQ-2-transparent.png\" alt=\"\">\n    <div class=\"intro-text background\">\n      <span class=\"name aboutHeader\">The Questioners</span>\n      <hr>\n      <p class=\"skills\">Is a WEB application used for storing/creating/editing\n      and deleting tasks and many more.</p>\n      <p class=\"skills\">Built on a RESTful API server using Express, MongoDB and\n      AngularJS.</p>\n      <p class=\"skills\">It contains two main sections: To-do list and\n      QaA(Questions and Answers).</p>\n      <p class=\"skills\">Actively in development is a new section called\n      Blog.</p>\n    </div>\n  </div>\n</header>\n\n<!-- About Section -->\n<section class=\"success parallax2\" id=\"about\">\n  <div class=\"w3-container aboutHeader2\">\n    <h2 class=\"text-center\">About</h2>\n  </div>\n  <div class=\"container background\">\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-lg-6 ml-auto aboutDiv\">\n        <h3 class=\"aboutParagraphs\">To-do list</h3>\n        <p class=\"aboutPara \">Contains adding, checking, removing and\n        permanently deleting tasks. Each task has a title, description and type\n        with it's own defined color. Currently there are available only 3 types:\n          <b>work, personal, school and watch later</b>. Checking means\n          completing tasks, which visualy adds a line through text of the task.\n          It is also possible to edit tasks. Tasks have 3 states: inprogress,\n          completed and removed. It is possible to filter tasks by their type or\n          state. Furthermore tasks have dates of their creation and completion.\n          Deleting task permanently means deleting it off the database to never\n          be retrieved again.\n        </p>\n      </div>\n      <div class=\"col-lg-6 mr-auto aboutDiv\">\n        <h3 class=\"aboutParagraphs\">QaA</h3>\n        <p class=\"aboutPara \">Questions and answers is what it sounds like, a\n        bunch of questions with answers to them. Additionaly every QaA has a\n        type, to identify where it belongs to. In the present it serves as a\n        learning tool, that works as follows: users see the question and try to\n        think of an answer, afterwards they can click on the question and an\n        answer will pop up, so that they can verify if their answer was right.\n          <br>\n          <br> Coming soon: checking by input if you have answered the question\n          correctly or wrongly. Counter with how many times you have answered\n          the question correctly. Ability to disable the question, so user won't\n          see it anymore.\n        </p>\n      </div>\n      <div class=\"col-lg-6 mr-auto aboutDiv\">\n        <h3 class=\"aboutParagraphs\">Flashcards</h3>\n        <p class=\"aboutPara \">Coming soon: Cards would be taken from the QaA.\n        Every card would have \"priority\", which would increase every time a user\n        knows the answer to the card(question) and decreases when he doesn't\n        know the answer. The user would \"randomly\" get these cards shown to him\n        one by one and the priority decides how likely it is he will get the\n        certain card. Also the user will have the ability to disable cards, so\n        if he already knows or dislikes the card(question) he won't get it in\n        his learning anymore.\n        </p>\n      </div>\n      <div class=\"col-lg-6 mr-auto aboutDiv\">\n        <h3 class=\"aboutParagraphs\">Blog</h3>\n        <p class=\"aboutPara \">Coming soon...</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- About Section -->\n<section class=\"success parallax3\" id=\"about\">\n  <div class=\"w3-container aboutHeader2\">\n    <h2 class=\"text-center aboutHeader2\">Technologies used</h2>\n  </div>\n  <div class=\"container background\">\n    <hr>\n    <div class=\"row\">\n      <div style=\"text-align: center;\">\n        <div style=\"display: inline-block; text-align: left\">\n          <p class=\"aboutPara\">\n            NodeJS - javascript on the server.\n            <br> Express - web framework, that has a webserver to handle our\n            requests.\n            <br> MongoDB - for data storage.\n            <br> AngularJS - client-side javascript framework for MVC.\n            <br> Bootstrap - HTML, CSS and JS framework for responsive websites.\n          </p>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n\n\n<!-- About Section -->\n<section class=\"success parallax4\" id=\"about\">\n  <div class=\"w3-container aboutHeader2\">\n    <h2 class=\"text-center aboutHeader2\">Meet the author</h2>\n  </div>\n  <div class=\"container background\">\n\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <img class=\"img-thumbnail\" src=\"../assets/img/me.jpg\">\n      </div>\n      <div class=\"col-lg-7 ml-auto pull-right\">\n        <h2 class=\"name\">Jozef Maloch</h2>\n        <h3> Introduction:</h3>\n        <p class=\"aboutPara\">\n          I am currently a student at Slovak University of Technology in\n          Bratislava. I'll be minoring in IT at 2018. Webdevelopment is where my\n          passion is. Designing new and useful things has always made me happy.\n          As a child I liked drawing, giving life to random drawings is amazing.\n          For relaxing I like to listen to all kinds of songs(music is just\n          delightful), watch movies/TV series or play a video game.\n        </p>\n        <h3>These are the technologies I use most of the time:</h3>\n        <div class=\"divSkillsIT\">\n          <svg class=\"skillsIT img-fluid hvr-bounce-in\" viewBox=\"0 0 128 128\">\n            <path fill=\"#E44D26\" d=\"M27.854 116.354l-8.043-90.211h88.378l-8.051\n            90.197-36.192 10.033z\"></path>\n            <path fill=\"#F16529\" d=\"M64 118.704l29.244-8.108\n            6.881-77.076h-36.125z\"></path>\n            <path fill=\"#EBEBEB\" d=\"M64\n            66.978h-14.641l-1.01-11.331h15.651v-11.064h-27.743l.264 2.969 2.72\n            30.489h24.759zM64\n            95.711l-.049.013-12.321-3.328-.788-8.823h-11.107l1.55 17.372 22.664\n            6.292.051-.015z\"></path>\n            <path d=\"M28.034\n            1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.816\n            7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.855\n            1.627h5.862l3.607 5.911\n            3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867\n            5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.591\n            1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z\"></path>\n            <path fill=\"#fff\" d=\"M63.962 66.978v11.063h13.624l-1.284\n            14.349-12.34 3.331v11.51l22.682-6.286.166-1.87\n            2.6-29.127.27-2.97h-2.982zM63.962\n            44.583v11.064h26.725l.221-2.487.505-5.608.265-2.969z\"></path>\n          </svg>\n          <svg class=\"img-fluid hvr-bounce-in skillsIT\" viewBox=\"0 0 128 128\">\n            <path fill=\"#131313\" d=\"M89.234 5.856h-7.384l7.679\n            8.333v3.967h-15.816v-4.645h7.678l-7.678-8.333v-3.971h15.521v4.649zm-18.657\n            0h-7.384l7.679\n            8.333v3.967h-15.817v-4.645h7.679l-7.679-8.333v-3.971h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839h-13.632v-16.949h13.632v4.839z\"></path>\n            <path fill=\"#1572B6\" d=\"M27.613 116.706l-8.097-90.813h88.967l-8.104\n            90.798-36.434 10.102-36.332-10.087z\"></path>\n            <path fill=\"#33A9DC\" d=\"M64.001 119.072l29.439-8.162\n            6.926-77.591h-36.365v85.753z\"></path>\n            <path fill=\"#fff\" d=\"M64\n            66.22h14.738l1.019-11.405h-15.757v-11.138h27.929000000000002l-.267\n            2.988-2.737 30.692h-24.925v-11.137z\"></path>\n            <path fill=\"#EBEBEB\" d=\"M64.067\n            95.146l-.049.014-12.404-3.35-.794-8.883h-11.178999999999998l1.561\n            17.488 22.814 6.333.052-.015v-11.587z\"></path>\n            <path fill=\"#fff\" d=\"M77.792 76.886l-1.342 14.916-12.422\n            3.353v11.588l22.833-6.328.168-1.882 1.938-21.647h-11.175z\"></path>\n            <path fill=\"#EBEBEB\" d=\"M64.039\n            43.677v11.136999999999999h-26.903000000000002l-.224-2.503-.507-5.646-.267-2.988h27.901zM64\n            66.221v11.138h-12.247l-.223-2.503-.508-5.647-.267-2.988h13.245z\"></path>\n          </svg>\n          <svg class=\"img-fluid hvr-bounce-in skillsIT\" viewBox=\"0 0 128 128\">\n            <path fill=\"#F0DB4F\" d=\"M1.408\n            1.408h125.184v125.185h-125.184z\"></path>\n            <path fill=\"#323330\" d=\"M116.347\n            96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32\n            4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724\n            5.402-3.498 5.391-3.475\n            9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902\n            2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332\n            17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234\n            7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688\n            2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198\n            31.76 8.746 35.83-5.176.165-.478\n            1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0\n            6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175\n            2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52\n            5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499\n            16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915\n            2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z\"></path>\n          </svg>\n          <svg class=\"img-fluid hvr-bounce-in skillsIT\" viewBox=\"0 0 128 128\">\n            <path fill=\"#B3B3B3\" d=\"M63.81 1.026l-59.257 20.854 9.363 77.637\n            49.957 27.457 50.214-27.828 9.36-77.635z\"></path>\n            <path fill=\"#A6120D\" d=\"M117.536\n            25.998l-53.864-18.369v112.785l45.141-24.983z\"></path>\n            <path fill=\"#DD1B16\" d=\"M11.201 26.329l8.026 69.434 44.444\n            24.651v-112.787z\"></path>\n            <path fill=\"#F2F2F2\" d=\"M78.499 67.67l-14.827 6.934h-15.628l-7.347\n            18.374-13.663.254 36.638-81.508 14.827\n            55.946zm-1.434-3.491l-13.295-26.321-10.906\n            25.868h10.807l13.394.453z\"></path>\n            <path fill=\"#B3B3B3\" d=\"M63.671 11.724l.098 26.134 12.375\n            25.888h-12.446l-.027 10.841 17.209.017 8.042 18.63\n            13.074.242z\"></path>\n          </svg>\n          <svg class=\"img-fluid hvr-bounce-in skillsIT\" viewBox=\"0 0 128 128\">\n            <path fill=\"#5B4282\" d=\"M9.531 112.586h4.161c1.896 0 3.273.27\n            4.129.81.857.54 1.285 1.398 1.285 2.575 0 .799-.188 1.454-.563\n            1.966s-.874.82-1.496.924v.091c.848.189 1.459.543 1.834 1.061s.563\n            1.207.563 2.067c0 1.22-.44 2.171-1.322 2.854-.881.683-2.078\n            1.024-3.59 1.024h-5.001v-13.372zm2.835 5.296h1.646c.768 0 1.325-.119\n            1.669-.356.345-.238.517-.631.517-1.18\n            0-.512-.187-.879-.562-1.102s-.968-.334-1.779-.334h-1.491v2.972zm0\n            2.25v3.485h1.848c.78 0 1.356-.149\n            1.729-.448s.558-.756.558-1.372c0-1.109-.793-1.665-2.378-1.665h-1.757zM34.252\n            119.254c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719\n            1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925\n            1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.087\n            1.183 1.631 2.885 1.631 5.104zm-9.758 0c0 1.494.283 2.619.851\n            3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503\n            3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552\n            1.139s-.859 1.885-.859 3.379zM49.161 119.254c0 2.213-.549\n            3.915-1.646 5.104s-2.67 1.784-4.719\n            1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925\n            1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.086\n            1.183 1.631 2.885 1.631 5.104zm-9.759 0c0 1.494.283 2.619.851\n            3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503\n            3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552\n            1.139s-.859 1.885-.859 3.379zM57.09\n            125.958h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zM70.671\n            122.245c0 1.208-.434 2.159-1.303 2.854-.869.695-2.078 1.043-3.626\n            1.043-1.427 0-2.689-.269-3.786-.805v-2.634c.902.402 1.666.686\n            2.291.851s1.196.247 1.715.247c.622 0 1.099-.119\n            1.431-.356.333-.238.499-.591.499-1.061\n            0-.262-.073-.495-.219-.7-.146-.204-.361-.401-.645-.59s-.861-.491-1.733-.905c-.817-.384-1.43-.753-1.838-1.107-.409-.354-.735-.765-.979-1.234-.244-.47-.366-1.019-.366-1.646\n            0-1.183.401-2.113 1.203-2.79s1.91-1.015 3.325-1.015c.695 0 1.358.082\n            1.989.247.631.165 1.291.396 1.98.695l-.915\n            2.204c-.713-.292-1.303-.497-1.77-.613-.467-.116-.925-.174-1.376-.174-.537\n            0-.948.125-1.235.375-.287.25-.43.576-.43.979 0\n            .25.058.468.174.654.116.186.3.366.553.54.253.174.852.486 1.797.938\n            1.25.598 2.107 1.197 2.57 1.797s.694 1.334.694 2.206zM78.254\n            125.958h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zM86.778\n            120.827v5.131h-2.835v-13.372h3.896c1.817 0 3.161.331\n            4.033.992.872.662 1.308 1.667 1.308 3.014 0 .787-.216 1.486-.649\n            2.099s-1.046 1.093-1.838 1.44c2.012 3.006 3.323 4.948 3.933\n            5.826h-3.146l-3.192-5.131h-1.51zm0-2.305h.915c.896 0 1.558-.149\n            1.985-.448s.64-.769.64-1.409c0-.634-.218-1.085-.654-1.354-.436-.268-1.111-.402-2.026-.402h-.86v3.613zM104.494\n            125.958l-.97-3.183h-4.875l-.97 3.183h-3.055l4.719-13.426h3.466l4.738\n            13.426h-3.053zm-1.647-5.561c-.896-2.884-1.401-4.515-1.514-4.893-.113-.378-.193-.677-.242-.896-.201.78-.777\n            2.71-1.729 5.789h3.485zM118.469 116.757c0 1.439-.45 2.54-1.349\n            3.301-.899.763-2.178 1.144-3.837\n            1.144h-1.216v4.756h-2.835v-13.372h4.271c1.622 0 2.855.349 3.7\n            1.047.844.699 1.266 1.74 1.266 3.124zm-6.402 2.122h.933c.872 0\n            1.524-.172 1.957-.517.433-.345.649-.846.649-1.504\n            0-.665-.182-1.156-.544-1.473-.363-.317-.932-.476-1.706-.476h-1.29v3.97zM73.951\n            56.759c-1.983-.653-4.838-.759-8.565-.759h-13.386v20h14.424c2.502 0\n            4.259-.249 5.271-.437 1.783-.318 3.274-.93 4.472-1.676 1.198-.744\n            2.183-1.869 2.955-3.293.771-1.424 1.158-3.087 1.158-4.951\n            0-2.184-.559-3.98-1.677-5.59-1.117-1.611-2.668-2.642-4.652-3.294zM71.895\n            48.147c1.97-.586 3.455-1.646 4.452-3.003.999-1.357 1.498-3.103\n            1.498-5.154\n            0-1.943-.466-3.675-1.398-5.154-.932-1.478-2.263-2.481-3.992-3.027-1.732-.544-4.7-.809-8.906-.809h-11.549v18h12.507c3.435\n            0 5.897-.399 7.388-.853zM117\n            16.126c0-7.802-6.325-14.126-14.127-14.126h-77.746c-7.802 0-14.127\n            6.324-14.127 14.126v77.748c0 7.802 6.325 14.126 14.127\n            14.126h77.746c7.802 0 14.127-6.324 14.127-14.126v-77.748zm-30.43\n            57.144c-1.157 2.356-2.589 4.173-4.292 5.451-1.704 1.277-3.841\n            2.446-6.41 3.098-2.569.653-5.717 1.181-9.444\n            1.181h-22.424v-59h22.065c4.473 0 8.059.62 10.761 1.804 2.703 1.185\n            4.818 3.021 6.351 5.483 1.53 2.463 2.296 5.046 2.296 7.735 0\n            2.502-.68 4.861-2.036 7.071-1.358 2.21-3.408 3.995-6.15 5.352 3.54\n            1.038 6.263 2.811 8.166 5.313 1.903 2.503 2.855 5.458 2.855\n            8.866-.001 2.742-.579 5.291-1.738 7.646z\"></path>\n          </svg>\n          <svg class=\"img-fluid hvr-bounce-in skillsIT\" viewBox=\"0 0 128 128\">\n            <path fill=\"#0868AC\" d=\"M27.758 20.421c-7.352 10.565-6.437\n            24.312-.82\n            35.54l.411.798.263.506.164.291.293.524c.174.307.353.612.536.919l.306.504c.203.326.41.65.622.973l.265.409c.293.437.592.872.901\n            1.301l.026.033.152.205c.267.368.542.732.821\n            1.093l.309.393c.249.313.502.623.759.934l.29.346c.345.406.698.812\n            1.057 1.208l.021.022.041.045c.351.383.71.758 1.075\n            1.133l.344.347c.282.284.569.563.858.841l.351.334c.387.364.777.722\n            1.176 1.07l.018.016.205.174c.351.305.708.605\n            1.068.902l.442.353c.294.235.591.468.89.696l.477.361c.33.243.663.482.999.717l.363.258.101.072c.318.22.645.431.97.642l.42.28c.5.315\n            1.007.628 1.519.93l.42.237c.377.217.756.431\n            1.14.639l.631.326.816.424.188.091.334.161c.427.204.858.405\n            1.293.599l.273.122c.498.218 1.001.427\n            1.508.628l.368.144c.469.182.945.359 1.423.527l.179.062c.524.184\n            1.054.353 1.587.52l.383.114c.542.164 1.079.358 1.638.462 35.553\n            6.483 45.88-21.364 45.88-21.364-8.674 11.3-24.069 14.28-38.656\n            10.962-.553-.125-1.089-.298-1.628-.456l-.406-.124c-.526-.161-1.049-.33-1.568-.51l-.215-.077c-.465-.164-.924-.336-1.382-.513l-.388-.152c-.501-.198-1-.405-1.492-.62l-.298-.133c-.423-.191-.842-.384-1.259-.585l-.364-.175c-.327-.159-.65-.328-.974-.495l-.649-.341c-.395-.21-.782-.43-1.167-.654l-.394-.219c-.513-.303-1.019-.615-1.52-.932l-.41-.273c-.363-.234-.725-.473-1.081-.719l-.349-.245c-.344-.242-.685-.489-1.022-.738l-.453-.343c-.31-.237-.618-.476-.922-.721l-.411-.33c-.388-.318-.771-.64-1.149-.969l-.126-.105c-.409-.359-.811-.728-1.208-1.098l-.34-.328c-.294-.279-.584-.561-.868-.851l-.34-.34c-.362-.37-.717-.745-1.065-1.126l-.053-.057c-.368-.402-.728-.813-1.08-1.229l-.283-.336c-.263-.316-.523-.638-.777-.961l-.285-.355c-.307-.397-.605-.793-.898-1.195-8.098-11.047-11.008-26.283-4.535-38.795M50.578\n            11.519c-5.316 7.65-5.028 17.893-.88 25.983.695 1.356 1.477 2.673\n            2.351 3.925.796 1.143 1.68 2.501 2.737 3.418.383.422.784.834 1.193\n            1.238l.314.311c.397.385.801.764 1.218\n            1.132l.05.043.012.012c.462.405.939.794 1.423\n            1.178l.323.252c.486.372.981.738 1.489\n            1.087l.043.033.68.447.322.213c.363.233.73.459\n            1.104.676l.156.092c.322.185.648.367.975.545l.347.18.682.354.103.047c.469.23.941.453\n            1.424.663l.314.13c.386.163.775.323 1.167.473l.5.184c.356.132.712.253\n            1.072.373l.484.155c.511.158 1.017.359 1.549.448 27.45 4.547\n            33.787-16.588 33.787-16.588-5.712 8.228-16.775 12.153-28.58\n            9.089-.524-.138-1.042-.288-1.555-.449l-.467-.151c-.365-.117-.728-.243-1.087-.374l-.491-.183c-.394-.152-.784-.309-1.171-.473l-.315-.133c-.485-.211-.962-.434-1.432-.666l-.718-.365-.414-.213c-.306-.166-.61-.338-.909-.514l-.217-.123c-.372-.217-.738-.44-1.1-.672l-.332-.221-.712-.472c-.506-.349-.999-.714-1.484-1.085l-.334-.264c-5.167-4.079-9.263-9.655-11.21-15.977-2.041-6.557-1.601-13.917\n            1.935-19.891M69.771 4.868c-3.134 4.612-3.442 10.341-1.267 15.435\n            2.293 5.407 6.992 9.648 12.477\n            11.66l.682.235.3.096c.323.102.644.22.978.282 15.157 2.929\n            19.268-7.777 20.362-9.354-3.601 5.185-9.653 6.43-17.079\n            4.627-.586-.142-1.231-.354-1.796-.555-.725-.259-1.439-.553-2.134-.886-1.318-.634-2.575-1.402-3.741-2.282-6.645-5.042-10.772-14.659-6.436-22.492\"></path>\n            <path fill=\"#131B28\" d=\"M66.359 96.295h-4.226c-.234\n            0-.467.188-.517.417l-1.5 6.94-1.5\n            6.94c-.049.229-.282.417-.516.417h-2.991c-2.959\n            0-2.617-2.047-2.011-4.851l.018-.085.066-.354.012-.066.135-.72.145-.771.154-.785.682-3.332.683-3.332c.047-.23-.107-.419-.341-.419h-4.337c-.234\n            0-.466.188-.514.418l-.933 4.424-.932 4.425-.002.006-.086.412c-1.074\n            4.903-.79 9.58 5.048 9.727l.17.003h9.163c.234 0\n            .467-.188.516-.417l1.976-9.289\n            1.976-9.29c.049-.23-.103-.417-.338-.418zM21.103 96.246h-4.64c-.235\n            0-.469.188-.521.416l-.44 1.942-.44\n            1.942c-.051.229.098.416.333.416h4.676c.235 0\n            .468-.188.518-.417l.425-1.941.425-1.941c.049-.229-.101-.417-.336-.417zM19.757\n            102.29h-4.677c-.234 0-.469.188-.521.416l-.657 2.91-.656\n            2.909-.183.834-.631 2.97-.63 2.971c-.049.229-.15.599-.225.821 0\n            0-.874 2.6-2.343\n            2.57l-.184-.004-1.271-.023h-.001c-.234-.003-.469.18-.524.407l-.485\n            2.039-.484 2.038c-.055.228.093.416.326.42.833.01 2.699.031 3.828.031\n            3.669 0 5.604-2.033 6.843-7.883l1.451-6.714\n            1.361-6.297c.049-.227-.103-.415-.337-.415zM105.874\n            100.716l-.194-.801-.191-.82-.097-.414c-.38-1.477-1.495-2.328-3.917-2.328l-3.77-.004-3.472-.005h-3.907c-.234\n            0-.466.188-.515.417l-.173.816-.204.964-.057.271-1.759 8.24-1.67\n            7.822c-.05.23-.066.512-.038.626.028.115.479.209.713.209h3.524c.235 0\n            .532-.042.66-.094s.317-.513.364-.742l.626-3.099.627-3.1.001-.005.084-.413.76-3.56.671-3.144c.05-.229.281-.416.515-.417l11.089-.005c.235.002.383-.185.33-.414zM120.149\n            93.476l-.854.003h-3.549c-.235 0-.536.159-.667.353l-7.849\n            11.498c-.132.194-.283.166-.335-.062l-.578-2.533c-.052-.229-.287-.416-.522-.416h-5.045c-.235\n            0-.374.184-.31.409l2.261 7.921c.064.226.069.596.011.824l-.985\n            3.833c-.059.228.085.413.32.413h4.987c.234 0\n            .474-.186.532-.413l.986-3.833c.058-.229.221-.567.363-.755l12.742-16.911c.142-.188.065-.341-.169-.339l-1.339.008zM80.063\n            103.395v-.004c-.029.254-.264.441-.499.441h-6.397c-.222\n            0-.334-.15-.301-.336l.006-.015-.004.002.003-.021.029-.109c.611-1.624\n            1.855-2.69 4.194-2.69 2.634-.001 3.148 1.285 2.969\n            2.732zm-1.877-7.384c-8.211 0-10.157 4.984-11.249 10.015-1.091\n            5.128-.998 9.921 7.5\n            9.921h1.03l.256-.001h.06l1.02-.003h.018c2.244-.009 4.495-.026\n            5.406-.033.233-.004.461-.191.509-.42l.344-1.681.067-.327.41-2.006c.047-.229-.106-.418-.341-.418h-7.639c-3.039\n            0-3.941-.807-3.608-3.181h12.211l-.001.001.008-.001c.194-.003.374-.137.445-.315l.029-.106-.001.001c1.813-6.839\n            1.293-11.445-6.474-11.446zM39.376 103.369l-.116.409v.001l-.922\n            3.268-.922 3.267c-.063.227-.308.411-.543.411h-4.88c-3.702\n            0-4.604-2.896-3.702-7.166.901-4.368 2.668-7.083 6.312-7.358\n            4.98-.376 5.976 3.126 4.773 7.168zm3.348 7.105s2.301-5.588\n            2.823-8.814c.713-4.319-1.45-10.585-9.804-10.585-8.306 0-11.914\n            5.981-13.29 12.484-1.376 6.55.427 12.293 8.686 12.246l6.516-.024\n            6.089-.022c.234-.002.474-.188.534-.414l1.061-4.046c.059-.228-.084-.414-.319-.416l-1.017-.006-1.017-.006c-.199-.001-.313-.131-.289-.302l.027-.095zM83.844\n            106.733c0 .155-.125.281-.28.281-.154 0-.28-.126-.28-.281\n            0-.154.125-.279.28-.279.155 0 .28.125.28.279z\"></path>\n          </svg>\n          <svg class=\"img-fluid hvr-bounce-in skillsIT\" viewBox=\"0 0 128 128\">\n            <path\n            d=\"M126.67,98.44c-4.56,1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89,76,81.85,85.2,75.14,94.77c-2.4,3.42-4.92,4.91-9.4,3.7L92.66,62.34,67.6,29.71c4.31-.84,7.29-.41,9.93,3.45,5.83,8.52,12.26,16.63,18.67,25.21C102.65,49.82,109,41.7,115,33.26c2.41-3.42,5-4.72,9.33-3.46-3.28,4.35-6.49,8.63-9.72,12.88-4.36,5.73-8.64,11.53-13.16,17.14-1.61,2-1.35,3.3.09,5.19C109.9,76,118.16,87.1,126.67,98.44Z\"></path>\n            <path\n            d=\"M1.33,61.74c.72-3.61,1.2-7.29,2.2-10.83,6-21.43,30.6-30.34,47.5-17.06C60.93,41.64,63.39,52.62,62.9,65H7.1c-.84,22.21,15.15,35.62,35.53,28.78,7.15-2.4,11.36-8,13.47-15,1.07-3.51,2.84-4.06,6.14-3.06-1.69,8.76-5.52,16.08-13.52,20.66-12,6.86-29.13,4.64-38.14-4.89C5.26,85.89,3,78.92,2,71.39c-.15-1.2-.46-2.38-.7-3.57Q1.33,64.78,1.33,61.74ZM7.2,60.25H57.63c-.33-16.06-10.33-27.47-24-27.57C18.63,32.56,7.85,43.7,7.2,60.25Z\"></path>\n          </svg>\n          <svg class=\"img-fluid hvr-bounce-in skillsIT\" viewBox=\"0 0 128 128\">\n            <path fill=\"#83CD29\" d=\"M114.325 80.749c-.29\n            0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227\n            1.198-.545.059-.033.136-.021.197.015l2.035\n            1.209c.074.041.179.041.246\n            0l7.937-4.581c.075-.042.122-.127.122-.215v-9.16c0-.09-.047-.173-.123-.219l-7.934-4.577c-.074-.042-.171-.042-.245\n            0l-7.933 4.578c-.076.045-.125.131-.125.218v9.16c0\n            .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105\n            1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0\n            .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82\n            0-1.828-.496l-2.081-1.198c-.515-.298-.832-.854-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587c.502-.283\n            1.169-.283 1.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16c0\n            .595-.319 1.148-.833 1.448l-7.937\n            4.582c-.252.147-.539.223-.834.223M116.778 74.438c-3.475\n            0-4.202-1.595-4.202-2.932 0-.126.103-.229.23-.229h1.026c.115 0\n            .21.082.228.194.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378\n            2.383-1.266\n            0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601\n            1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96\n            2.777.006.064-.017.127-.06.176-.044.045-.104.073-.168.073h-1.031c-.107\n            0-.201-.075-.223-.179-.248-1.1-.848-1.451-2.479-1.451-1.825\n            0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323\n            3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724\"></path>\n            <path fill=\"#404137\" d=\"M97.982\n            68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856c-.315-.183-.703-.184-1.019-.002l-8.416\n            4.859c-.314.182-.508.517-.508.88v9.716c0 .365.196.703.514.884l8.363\n            4.765c.308.177.686.178.997.006l5.058-2.812c.161-.09.261-.258.262-.44.001-.184-.097-.354-.256-.445l-8.468-4.86c-.159-.091-.256-.259-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52c.156-.091.35-.091.507\n            0l2.637 1.52c.158.091.255.258.255.439v2.396c0\n            .183.097.351.254.441.158.091.352.091.51-.001l5.039-2.932\"></path>\n            <path fill=\"#83CD29\" d=\"M88.984 67.974c.061-.034.135-.034.195\n            0l1.615.933c.06.035.097.1.097.169v1.865c0\n            .07-.037.134-.097.169l-1.615.932c-.06.035-.135.035-.195\n            0l-1.614-.932c-.061-.035-.098-.099-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933\"></path>\n            <path fill=\"#404137\" d=\"M67.083 71.854c0 .09-.048.174-.127.22l-2.89\n            1.666c-.079.046-.176.046-.254\n            0l-2.89-1.666c-.079-.046-.127-.13-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668c.079-.047.176-.047.255\n            0l2.891\n            1.668c.078.046.126.131.126.221v3.338zm.781-24.716c-.157-.087-.349-.085-.505.006-.155.092-.251.258-.251.438v12.915c0\n            .126-.068.244-.177.308-.11.063-.246.063-.356\n            0l-2.108-1.215c-.314-.181-.701-.181-1.015 0l-8.418\n            4.858c-.315.182-.509.518-.509.881v9.719c0 .363.194.698.508.881l8.418\n            4.861c.314.182.702.182 1.017\n            0l8.42-4.861c.314-.183.508-.518.508-.881v-24.227c0-.368-.2-.708-.521-.888l-5.011-2.795\"></path>\n            <path fill=\"#83CD29\" d=\"M38.238 59.407c.314-.182.702-.182 1.016\n            0l8.418 4.857c.314.182.508.518.508.881v9.722c0\n            .363-.194.699-.508.881l-8.417 4.861c-.314.181-.702.181-1.017\n            0l-8.415-4.861c-.314-.182-.508-.518-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857\"></path>\n            <path fill=\"#404137\" d=\"M22.93\n            65.064c0-.366-.192-.702-.508-.883l-8.415-4.843c-.144-.084-.303-.127-.464-.133h-.087c-.16.006-.32.049-.464.133l-8.416\n            4.843c-.313.181-.509.517-.509.883l.018 13.04c0\n            .182.095.351.254.439.156.094.349.094.505\n            0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226c.158-.093.332-.137.508-.137.174\n            0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0\n            .363.195.696.509.882l5 2.864c.157.094.353.094.508 0\n            .155-.089.252-.258.252-.439l.019-13.04\"></path>\n          </svg>\n          <svg class=\"img-fluid hvr-bounce-in skillsIT\" viewBox=\"0 0 128 128\">\n            <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M64 1.512c-23.493\n            0-42.545 19.047-42.545 42.545 0 18.797 12.19 34.745 29.095 40.37\n            2.126.394 2.907-.923 2.907-2.047 0-1.014-.04-4.366-.058-7.92-11.837\n            2.573-14.334-5.02-14.334-5.02-1.935-4.918-4.724-6.226-4.724-6.226-3.86-2.64.29-2.586.29-2.586\n            4.273.3 6.523 4.385 6.523 4.385 3.794 6.504 9.953 4.623 12.38\n            3.536.383-2.75 1.485-4.628\n            2.702-5.69-9.45-1.075-19.384-4.724-19.384-21.026 0-4.645 1.662-8.44\n            4.384-11.42-.442-1.072-1.898-5.4.412-11.26 0 0 3.572-1.142 11.7\n            4.363 3.395-.943 7.035-1.416 10.65-1.432 3.616.017 7.258.49 10.658\n            1.432 8.12-5.504 11.688-4.362 11.688-4.362 2.316 5.86.86 10.187.418\n            11.26 2.728 2.978 4.378 6.774 4.378 11.42 0 16.34-9.953\n            19.938-19.427 20.99 1.526 1.32 2.886 3.91 2.886 7.88 0 5.692-.048\n            10.273-.048 11.674 0 1.13.766 2.458 2.922 2.04 16.896-5.632\n            29.07-21.574 29.07-40.365C106.545 20.56 87.497 1.512 64\n            1.512z\"></path>\n            <path d=\"M37.57\n            62.596c-.095.212-.428.275-.73.13-.31-.14-.482-.427-.382-.64.09-.216.424-.277.733-.132.31.14.486.43.38.642zm-.524-.388M39.293\n            64.52c-.203.187-.6.1-.87-.198-.278-.297-.33-.694-.124-.884.208-.188.593-.1.87.197.28.3.335.693.123.884zm-.406-.437M40.97\n            66.968c-.26.182-.687.012-.95-.367-.262-.377-.262-.83.005-1.013.264-.182.684-.018.95.357.262.385.262.84-.005\n            1.024zm0 0M43.268\n            69.336c-.233.257-.73.188-1.093-.163-.372-.343-.475-.83-.242-1.087.237-.257.736-.185\n            1.102.163.37.342.482.83.233 1.086zm0 0M46.44\n            70.71c-.104.334-.582.485-1.064.344-.482-.146-.796-.536-.7-.872.1-.336.582-.493\n            1.067-.342.48.144.795.53.696.87zm0 0M49.92\n            70.965c.013.35-.396.642-.902.648-.508.012-.92-.272-.926-.618\n            0-.354.4-.642.908-.65.506-.01.92.272.92.62zm0 0M53.16\n            70.414c.06.342-.29.694-.793.787-.494.092-.95-.12-1.014-.46-.06-.35.297-.7.79-.792.503-.088.953.118\n            1.017.466zm0 0\"></path>\n            <path d=\"M24.855 108.302h-10.7a.5.5 0 0 0-.5.5v5.232a.5.5 0 0 0\n            .5.5h4.173v6.5s-.937.32-3.53.32c-3.056 0-7.327-1.116-7.327-10.508\n            0-9.393 4.448-10.63 8.624-10.63 3.614 0 5.17.636\n            6.162.943.31.094.6-.216.6-.492l1.193-5.055a.468.468 0 0\n            0-.192-.39c-.403-.288-2.857-1.66-9.058-1.66-7.144 0-14.472\n            3.038-14.472 17.65 0 14.61 8.39 16.787 15.46 16.787 5.854 0\n            9.405-2.502 9.405-2.502.146-.08.162-.285.162-.38v-16.316a.5.5 0 0\n            0-.5-.5zM79.506 94.81H73.48a.5.5 0 0 0-.498.503l.002\n            11.644h-9.392V95.313a.5.5 0 0 0-.497-.503H57.07a.5.5 0 0\n            0-.498.503v31.53c0 .277.224.503.498.503h6.025a.5.5 0 0 0\n            .497-.504v-13.486h9.392l-.016 13.486c0 .278.224.504.5.504h6.038a.5.5\n            0 0 0 .497-.504v-31.53c0-.278-.22-.502-.497-.502zM32.34\n            95.527c-2.144 0-3.884 1.753-3.884 3.923 0 2.167 1.74 3.925 3.884\n            3.925 2.146 0 3.885-1.758 3.885-3.925\n            0-2.17-1.74-3.923-3.885-3.923zM35.296 105.135H29.29c-.276\n            0-.522.284-.522.56v20.852c0 .613.382.795.876.795h5.41c.595 0\n            .74-.292.74-.805v-6.346-14.553a.5.5 0 0 0-.498-.502zM102.902\n            105.182h-5.98a.5.5 0 0 0-.496.504v15.46s-1.52 1.11-3.675\n            1.11-2.727-.977-2.727-3.088v-13.482a.5.5 0 0\n            0-.497-.504h-6.068a.502.502 0 0 0-.498.504v14.502c0 6.27 3.495 7.804\n            8.302 7.804 3.944 0 7.124-2.18 7.124-2.18s.15 1.15.22\n            1.285c.07.136.247.273.44.273l3.86-.017a.502.502 0 0 0\n            .5-.504l-.003-21.166a.504.504 0 0 0-.5-.502zM119.244 104.474c-3.396\n            0-5.706 1.515-5.706 1.515V95.312a.5.5 0 0 0-.497-.503H107a.5.5 0 0\n            0-.5.503v31.53a.5.5 0 0 0 .5.503h4.192c.19 0\n            .332-.097.437-.268.103-.17.254-1.454.254-1.454s2.47 2.34 7.148\n            2.34c5.49 0 8.64-2.784 8.64-12.502s-5.03-10.988-8.428-10.988zm-2.36\n            17.764c-2.073-.063-3.48-1.004-3.48-1.004v-9.985s1.388-.85\n            3.09-1.004c2.153-.193 4.228.458 4.228 5.594 0 5.417-.935 6.486-3.837\n            6.398zM53.195 122.12c-.263 0-.937.107-1.63.107-2.22\n            0-2.973-1.032-2.973-2.368v-8.866h4.52a.5.5 0 0 0 .5-.504v-4.856a.5.5\n            0 0 0-.5-.502h-4.52l-.007-5.97c0-.227-.116-.34-.378-.34h-6.16c-.238\n            0-.367.106-.367.335v6.17s-3.087.745-3.295.805a.5.5 0 0\n            0-.36.48v3.877a.5.5 0 0 0 .497.503h3.158v9.328c0 6.93 4.86 7.61 8.14\n            7.61 1.497 0 3.29-.48\n            3.586-.59.18-.067.283-.252.283-.453l.004-4.265a.51.51 0 0\n            0-.5-.502z\"></path>\n          </svg>\n        </div>\n        <h3> Personal projects:</h3>\n        <p class=\"aboutPara\">\n          <b>The Questioners</b> - is the one you are viewing right now. A WEB\n          application used for storing/creating/editing and deleting tasks and\n          many more. Built on a RESTful API server using Express, MongoDB and\n          AngularJS. It contains two main sections: To-do list and QaA(Questions\n          and Answers).\n        </p>\n        <p class=\"aboutPara\">\n          <b>Bookstore</b> - is a WEB application used for\n          storing/creating/editing and deleting books. Built on a RESTful API\n          server using Express, MongoDB and AngularJS.\n        </p>\n        <p class=\"aboutPara\">\n          <b>Javascript</b> canvas game - is a school project, made entirely in\n          JS canvas. A simple shoot em up game.\n        </p>\n        <p class=\"aboutPara\">\n          <b>Restaurant</b> - is a school project. A Postgres database connected\n          with Java about employees, customers, orders and many more.\n        </p>\n        <p class=\"aboutPara\">\n          <b>ASM assignment #2</b> - is a school project based on system\n          programming in C and interprocessor communication.\n        </p>\n      </div>\n\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_1_jquery__("#about").addClass('active');
            document.title = "The Questioners";
        });
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__qaa_qaa_component__ = __webpack_require__("./src/app/qaa/qaa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__qaa_create_qaa_create_component__ = __webpack_require__("./src/app/qaa-create/qaa-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__qaa_delete_qaa_delete_component__ = __webpack_require__("./src/app/qaa-delete/qaa-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__qaa_edit_qaa_edit_component__ = __webpack_require__("./src/app/qaa-edit/qaa-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__qaa_edit_modal_qaa_edit_modal_component__ = __webpack_require__("./src/app/qaa-edit-modal/qaa-edit-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__todo_todo_component__ = __webpack_require__("./src/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__todo_create_todo_create_component__ = __webpack_require__("./src/app/todo-create/todo-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__todo_edit_modal_todo_edit_modal_component__ = __webpack_require__("./src/app/todo-edit-modal/todo-edit-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__todo_edit_todo_edit_component__ = __webpack_require__("./src/app/todo-edit/todo-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__todo_delete_todo_delete_component__ = __webpack_require__("./src/app/todo-delete/todo-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__words_words_component__ = __webpack_require__("./src/app/words/words.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__words_create_words_create_component__ = __webpack_require__("./src/app/words-create/words-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__words_edit_words_edit_component__ = __webpack_require__("./src/app/words-edit/words-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__words_edit_modal_words_edit_modal_component__ = __webpack_require__("./src/app/words-edit-modal/words-edit-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__words_delete_words_delete_component__ = __webpack_require__("./src/app/words-delete/words-delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__turnip_turnip_component__ = __webpack_require__("./src/app/turnip/turnip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var appRoutes = [
    {
        path: 'qaa',
        component: __WEBPACK_IMPORTED_MODULE_5__qaa_qaa_component__["a" /* QaaComponent */],
        data: { title: 'QaA' }
    },
    {
        path: 'todo',
        component: __WEBPACK_IMPORTED_MODULE_11__todo_todo_component__["a" /* TodoComponent */],
        data: { title: 'To-do list' }
    },
    {
        path: 'words',
        component: __WEBPACK_IMPORTED_MODULE_16__words_words_component__["a" /* WordsComponent */],
        data: { title: 'Words' }
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_21__about_about_component__["a" /* AboutComponent */],
        data: { title: 'About' }
    },
    {
        path: 'blog',
        component: __WEBPACK_IMPORTED_MODULE_26__blog_blog_component__["a" /* BlogComponent */],
        data: { title: 'Blog' }
    },
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__qaa_qaa_component__["a" /* QaaComponent */],
                __WEBPACK_IMPORTED_MODULE_7__qaa_create_qaa_create_component__["a" /* QaaCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_8__qaa_delete_qaa_delete_component__["a" /* QaaDeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_9__qaa_edit_qaa_edit_component__["a" /* QaaEditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__qaa_edit_modal_qaa_edit_modal_component__["a" /* QaaEditModalComponent */],
                __WEBPACK_IMPORTED_MODULE_11__todo_todo_component__["a" /* TodoComponent */],
                __WEBPACK_IMPORTED_MODULE_12__todo_create_todo_create_component__["a" /* TodoCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_13__todo_edit_modal_todo_edit_modal_component__["a" /* TodoEditModalComponent */],
                __WEBPACK_IMPORTED_MODULE_14__todo_edit_todo_edit_component__["a" /* TodoEditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__todo_delete_todo_delete_component__["a" /* TodoDeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_16__words_words_component__["a" /* WordsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__words_create_words_create_component__["a" /* WordsCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_18__words_edit_words_edit_component__["a" /* WordsEditComponent */],
                __WEBPACK_IMPORTED_MODULE_19__words_edit_modal_words_edit_modal_component__["a" /* WordsEditModalComponent */],
                __WEBPACK_IMPORTED_MODULE_20__words_delete_words_delete_component__["a" /* WordsDeleteComponent */],
                __WEBPACK_IMPORTED_MODULE_21__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_22__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_23__turnip_turnip_component__["a" /* TurnipComponent */],
                __WEBPACK_IMPORTED_MODULE_24__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_25__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__blog_blog_component__["a" /* BlogComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container todolist\">\n  <div class=\"row\">\n    <ul *ngIf=\"orderedList.length > 1\" class=\"col-md-12\" id=\"myUL\">\n      <div *ngFor=\"let list of orderedList\">\n        <li>\n          <strong>{{list.date}}</strong>\n        </li>\n        <p>QaAs:</p>\n        <div *ngIf=\"list.qaa\">\n          <li *ngFor=\"let qaa of list.qaa\">\n            {{qaa.title}}\n          </li>\n        </div>\n        <p>Todos:</p>\n        <div *ngIf=\"list.todo\">\n            <li *ngFor=\"let todo of list.todo\">\n              {{todo.title}}\n            </li>\n          </div>\n      </div>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogComponent = /** @class */ (function () {
    function BlogComponent(http) {
        this.http = http;
        this.qaaAll = [];
        this.orderedList = [];
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        function compare(a, b) {
            return a.id - b.id;
        }
        var date = new Date();
        var dateISO = date.toISOString();
        this.http.get('/api/qaa-date/' + dateISO).subscribe(function (data) {
            _this.qaaAll = data;
            _this.qaaAll.sort(compare);
            _this.groupingItemsByDate(_this.qaaAll, "qaa");
            console.log(_this.orderedList);
        });
        this.http.get('/api/todo-date/' + dateISO).subscribe(function (todo) {
            _this.todoAll = todo;
            _this.todoAll.sort(compare);
            _this.groupingItemsByDate(_this.todoAll, "todo");
            console.log(_this.orderedList);
        });
    };
    BlogComponent.prototype.groupingItemsByDate = function (items, type) {
        var today = new Date();
        var itemsOfDay = [];
        var k = 0;
        for (var i = 0; i < 10; i++) {
            var start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
            var end = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i + 1);
            console.log(items.length);
            for (var j = 0; j < items.length; j++) {
                var items_date = new Date(items[j].create_date);
                if (items_date > start && items_date < end) {
                    itemsOfDay.push(items[j]);
                }
            }
            if (itemsOfDay.length != 0) {
                console.log(itemsOfDay);
                if (this.orderedList[k] === undefined) {
                    this.orderedList[k] = ({ date: start, todo: [], qaa: [] });
                }
                else {
                    this.orderedList[k].date = start;
                }
                console.log(this.orderedList[i]);
                console.log(i);
                if (type == "todo") {
                    this.orderedList[k++].todo = (itemsOfDay);
                }
                if (type == "qaa") {
                    this.orderedList[k++].qaa = (itemsOfDay);
                }
                itemsOfDay = [];
                console.log(this.orderedList);
            }
        }
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blog',
            template: __webpack_require__("./src/app/blog/blog.component.html"),
            styles: [__webpack_require__("./src/app/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, input) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el) {
                return el.title.toLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'FilterPipe',
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-bottom\">\n  <div class=\"container\">\n    <div class=\"copyright pull-left\">\n      © 2017, Created by Jozef Maloch\n    </div>\n    <div class=\"design pull-right\">\n      <div class=\"center-block\">\n        <a href=\"https://github.com/Joesepherus\">\n          <i id=\"social-gh\" class=\"fa fa-github-square fa-3x social\"></i>\n        </a>\n        <a href=\"https://www.facebook.com/JoesMaloch\">\n          <i id=\"social-fb\" class=\"fa fa-facebook-square fa-3x social\"></i>\n        </a>\n        <a href=\"https://twitter.com/TQs_Joesepherus\">\n          <i id=\"social-tw\" class=\"fa fa-twitter-square fa-3x social\"></i>\n        </a>\n        <a href=\"https://plus.google.com/u/1/+Joesepherus\">\n          <i id=\"social-gp\" class=\"fa fa-google-plus-square fa-3x social\"></i>\n        </a>\n        <a href=\"mailto:jozefmaloch@gmail.com\">\n          <i id=\"social-em\" class=\"fa fa-envelope-square fa-3x social\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n        aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"> </span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul id=\"myTab\" class=\"nav navbar-nav\">\n        <li class=\"hamburger\">\n          <div class=\"testing\">\n            <div id=\"droppero\" class=\"dropbtn\">\n              <div class=\"hamburger\"> </div>\n              <div class=\"hamburger\"></div>\n              <div class=\"hamburger\"></div>\n              <div id=\"myDropdown\" class=\"dropdown-content2\">\n                <h3 class=\"aboutParagraphs\">Calendar</h3>\n                <div id=\"dt\" class=\"calendar\">\n                </div>\n                <div>\n                  <h3 class=\"aboutParagraphs\">Notes</h3>\n                  <textarea class=\"w3-input calendarText\" id=\"inputName\" cols=\"40\" rows=\"1\"></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n        </li>\n        <li id=\"about\">\n          <a class=\"navbar-brand TheQ\" href=\"/about\">\n            <img alt=\"TheQ\" src=\"assets/img/TheQ-transparent.png\" class=\"TheQ\n                hvr-bounce-in\">\n          </a>\n        </li>\n        <li id=\"todolist\">\n          <a href=\"/todo\">To-do list</a>\n        </li>\n        <li id=\"QaA\">\n          <a href=\"/qaa\">QaA</a>\n        </li>\n        <li id=\"flashcards\">\n          <a class=\"nav-item nav-link\" data-toggle=\"tab\" href=\"/flashcards\">Flashcards</a>\n        </li>\n        <li id=\"words\">\n          <a href=\"/words\">Words</a>\n        </li>\n        <li id=\"DRO\">\n          <a class=\"nav-item nav-link\" data-toggle=\"tab\" href=\"/DRO\">DRO</a>\n        </li>\n        <li id=\"Blog\">\n          <a href=\"/blog\">Blog</a>\n        </li>\n        <app-turnip></app-turnip>\n      </ul>\n    </div>\n    <!--/.nav-collapse -->\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/qaa-create/qaa-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/qaa-create/qaa-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"w3-card-4\">\n    <div class=\"w3-container w3-green\">\n      <h2>New QaA</h2>\n    </div>\n    <form name=\"newTaskForm\" id=\"newTaskForm\" class=\"w3-container\n    aboutNewTaskForm\" method=\"post\" (ngSubmit)=\"addQaA()\" #qaaForm=\"ngForm\">\n      <p>\n        <label class=\"newTaskType\">Question:</label>\n        <textarea class=\"w3-input\" name=\"newTaskTitle\" cols=\"40\" rows=\"1\"\n        [(ngModel)]=\"qaa.title\" name=\"title\" required></textarea>\n      </p>\n      <p>\n        <label class=\"newTaskType\">Answer:</label>\n        <textarea class=\"w3-input\" name=\"newTaskDescription\" cols=\"40\" rows=\"3\"\n        [(ngModel)]=\"qaa.description\" name=\"description\" required></textarea>\n      </p>\n      <div>\n        <label class=\"newTaskType\">Type:</label>\n      </div>\n      <select [(ngModel)]=\"qaa.type\" name=\"type\" required>\n        <option value=\"\"></option>\n        <option value=\"Javascript\">Javascript</option>\n        <option value=\"HTML\">HTML</option>\n        <option value=\"CSS\">CSS</option>\n        <option value=\"Data structures\">Data structures</option>\n        <option value=\"Other\">Other</option>\n      </select>\n    </form>\n    <button class=\"col-md-2 addBtn btn btn-success\" form=\"newTaskForm\"\n    type=\"submit\" [disabled]=\"!qaaForm.form.valid\">Submit</button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/qaa-create/qaa-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaaCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QaaCreateComponent = /** @class */ (function () {
    function QaaCreateComponent(http) {
        this.http = http;
        this.qaa = { id: '', create_date: (new Date).toISOString() };
    }
    QaaCreateComponent.prototype.ngOnInit = function () {
    };
    QaaCreateComponent.prototype.addQaA = function () {
        var _this = this;
        this.http.get('/api/qaa-latest').subscribe(function (data) {
            _this.latest = data;
            console.log(data);
            var newQaa = _this.qaa;
            newQaa.id = (++_this.latest.id).toString();
            newQaa.create_date = (new Date).toISOString();
            console.log(newQaa);
            _this.qaa = { id: '', create_date: (new Date).toISOString() };
            _this.qaaAll.push(newQaa);
            _this.http.post('/api/qaa', newQaa)
                .subscribe(function (res) {
            }, function (err) {
                console.log(err);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaCreateComponent.prototype, "qaaAll", void 0);
    QaaCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-qaa-create',
            template: __webpack_require__("./src/app/qaa-create/qaa-create.component.html"),
            styles: [__webpack_require__("./src/app/qaa-create/qaa-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QaaCreateComponent);
    return QaaCreateComponent;
}());



/***/ }),

/***/ "./src/app/qaa-delete/qaa-delete.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/qaa-delete/qaa-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-danger btn-md deleteBtn\"\n(click)=\"deleteQaa(qaa.id, qaa)\">Delete</button>"

/***/ }),

/***/ "./src/app/qaa-delete/qaa-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaaDeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QaaDeleteComponent = /** @class */ (function () {
    function QaaDeleteComponent(http) {
        this.http = http;
        this.qaa = {};
    }
    QaaDeleteComponent.prototype.ngOnInit = function () {
    };
    QaaDeleteComponent.prototype.deleteQaa = function (id) {
        var index = this.qaaAll.map(function (e) { return e.id; }).indexOf(id);
        var index2 = this.qaaShow.map(function (e) { return e.id; }).indexOf(id);
        console.log(this.qaaAll[index]);
        this.http.delete('/api/qaa/' + this.qaaAll[index].create_date)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
        this.qaaAll.splice(index, 1);
        this.qaaShow.splice(index2, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaDeleteComponent.prototype, "qaaAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaDeleteComponent.prototype, "qaaShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaDeleteComponent.prototype, "qaa", void 0);
    QaaDeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-qaa-delete',
            template: __webpack_require__("./src/app/qaa-delete/qaa-delete.component.html"),
            styles: [__webpack_require__("./src/app/qaa-delete/qaa-delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QaaDeleteComponent);
    return QaaDeleteComponent;
}());



/***/ }),

/***/ "./src/app/qaa-edit-modal/qaa-edit-modal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/qaa-edit-modal/qaa-edit-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Trigger the modal with a button -->\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div id=\"editModalHeader\" class=\"modal-header\">\n          <button type=\"button\" class=\"close\"\n          data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Edit QaA</h4>\n        </div>\n        <div class=\"modal-body editQaABody\">\n          <form *ngIf=\"qaa\" id=\"editTaskForm\" class=\"w3-container\" method=\"post\"\n          (ngSubmit)=\"editQaa(qaa.id)\">\n            <p>\n              <label class=\"newTaskType\">Title:</label>\n              <textarea class=\"w3-input\" name=\"editTitle\" cols=\"40\" rows=\"1\"\n              [(ngModel)]=\"qaa.title\" name=\"title\" required></textarea>\n            </p>\n            <p>\n              <label class=\"newTaskType\">Description:</label>\n              <textarea class=\"w3-input editQaADescription\"\n              name=\"editDescription\" cols=\"40\" rows=\"1\"\n              [(ngModel)]=\"qaa.description\" name=\"description\"\n              required></textarea>\n            </p>\n            <div>\n              <label class=\"newTaskType\">Type</label>\n            </div>\n            <select name=\"editType\" id=\"editSelect\"\n            (change)=\"changeColor($event)\" [(ngModel)]=\"qaa.type\"\n            name=\"type\" required>\n              <option value=\"\"></option>\n              <option value=\"Javascript\">Javascript</option>\n              <option value=\"HTML\">HTML</option>\n              <option value=\"CSS\">CSS</option>\n              <option value=\"Data structures\">Data structures</option>\n              <option value=\"Other\">Other</option>\n            </select>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"col-md-2 editBtn btn btn-success\"\n          form=\"editTaskForm\" type=\"submit\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\"\n          data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/qaa-edit-modal/qaa-edit-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaaEditModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QaaEditModalComponent = /** @class */ (function () {
    function QaaEditModalComponent(http) {
        this.http = http;
        this.qaa = {};
    }
    QaaEditModalComponent.prototype.ngOnInit = function () {
    };
    QaaEditModalComponent.prototype.editQaa = function (id) {
        console.log(id);
        this.http.put('/api/qaa/' + id, this.qaa)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaEditModalComponent.prototype, "qaaAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaEditModalComponent.prototype, "qaa", void 0);
    QaaEditModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-qaa-edit-modal',
            template: __webpack_require__("./src/app/qaa-edit-modal/qaa-edit-modal.component.html"),
            styles: [__webpack_require__("./src/app/qaa-edit-modal/qaa-edit-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QaaEditModalComponent);
    return QaaEditModalComponent;
}());



/***/ }),

/***/ "./src/app/qaa-edit/qaa-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/qaa-edit/qaa-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<button id=\"modalButton\" type=\"button\" class=\"modal-button btn btn-info btn-md\neditBtn\" data-toggle=\"modal\" data-target=\"#myModal\"\n(click)=\"editModalForm($event, testing)\">Edit</button>"

/***/ }),

/***/ "./src/app/qaa-edit/qaa-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaaEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QaaEditComponent = /** @class */ (function () {
    function QaaEditComponent(http) {
        this.http = http;
        this.testing = {};
        this.test = {};
        this.updateTesting = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.numberOfLi = 7;
    }
    QaaEditComponent.prototype.ngOnInit = function () {
    };
    // giving modal form placeholder values for each input txt
    QaaEditComponent.prototype.editModalForm = function ($event, elem) {
        var li = document.getElementsByTagName("LI");
        var i;
        console.log(elem);
        console.log(this.testing);
        this.test = elem;
        this.updateTesting.emit(this.test);
        for (i = this.numberOfLi; i < this.qaaAll.length; i++) {
            if (this.qaaAll[i]._id == elem._id) {
                this.test = elem;
            }
        }
        this.elem = $event.target;
        // change the header color to the type of the task
        switch (__WEBPACK_IMPORTED_MODULE_2_jquery__(this.elem).closest("li")[0].children[1].children[0].innerHTML) {
            case "Javascript":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', 'blueviolet');
                break;
            case "CSS":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#ffc900');
                break;
            case "HTML":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#048E16');
                break;
            case "Data structures":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#900C3E');
                break;
            case "Other":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#FFFF');
                break;
        }
    };
    QaaEditComponent.prototype.changeColor = function ($event) {
        console.log($event);
        var liToChange = this.elem.closest("li");
        var modalElem = $event.target;
        var liClasses = __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange).attr('class').split(' ');
        if (liClasses.length > 2) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange).removeClass(liClasses.pop());
        }
        var liContentClasses = __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange.children[2]).attr('class').split(' ');
        if (liContentClasses.length > 1) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange.children[2]).removeClass(liContentClasses.pop());
        }
        // change the header color to the type of the task
        switch (modalElem.value) {
            case "Javascript":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', 'blueviolet');
                liToChange.classList.add("javascript");
                liToChange.children[2].classList.add("javascript-content");
                break;
            case "CSS":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#ffc900');
                liToChange.classList.add("css");
                liToChange.children[2].classList.add("css-content");
                break;
            case "HTML":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#048E16');
                liToChange.classList.add("html");
                liToChange.children[2].classList.add("html-content");
                break;
            case "Data structures":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#900C3E');
                liToChange.classList.add("DataStructures");
                liToChange.children[2].classList.add("DataStructures-content");
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaEditComponent.prototype, "qaaAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaEditComponent.prototype, "testing", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], QaaEditComponent.prototype, "test", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], QaaEditComponent.prototype, "updateTesting", void 0);
    QaaEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-qaa-edit',
            template: __webpack_require__("./src/app/qaa-edit/qaa-edit.component.html"),
            styles: [__webpack_require__("./src/app/qaa-edit/qaa-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QaaEditComponent);
    return QaaEditComponent;
}());



/***/ }),

/***/ "./src/app/qaa/qaa.component.css":
/***/ (function(module, exports) {

module.exports = ".QaAPara {\n    width: 100%;\n    white-space: -moz-pre-wrap; /* Firefox */\n    white-space: -pre-wrap; /* ancient Opera */\n    white-space: -o-pre-wrap; /* newer Opera */\n    white-space: pre-wrap; /* Chrome; W3C standard */\n    word-wrap: break-word; /* IE */\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\n.editQaABody {\n    height: 350px;\n}\n\n.editQaADescription {\n    height: 100px;\n}\n"

/***/ }),

/***/ "./src/app/qaa/qaa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container QaA\">\n  <div class=\"row\">\n    <app-qaa-create [qaaAll]=\"qaaAll\"></app-qaa-create>\n\n    <div class=\"col-md-10\">\n      <h2>QaA</h2>\n    </div>\n\n    <div class=\"col-md-1 selector\">\n      <select id=\"selector\" (change)=\"select($event)\">\n        <option value=\"all\" selected=\"selected\">all</option>\n        <option value=\"HTML\">HTML</option>\n        <option value=\"CSS\">CSS</option>\n        <option value=\"Javascript\">Javascript</option>\n        <option value=\"Data structures\">Data structures</option>\n        <option value=\"Other\">Other</option>\n      </select>\n    </div>\n\n    <div class=\"col-md-12\">\n      <p>Number of QaA: {{ qaaShow.length }}</p>\n    </div>\n\n    <div class=\"col-md-3\">\n      <a (click)=\"scrollToTheEndOfPage()\">Scroll to the bottom</a>\n    </div>\n\n    <div class=\"col-md-12 searchDiv\">\n      <input class=\"search\" type=\"text\" [(ngModel)]=\"queryString\" id=\"search\"\n      placeholder=\"Search by question\"\n      (ngModelChange)=searchChange()>\n    </div>\n    \n    <ul class=\"col-md-12\" id=\"myUL\">\n      <div *ngFor=\"let qaa of qaaShow.reverse(); let\n      last = last; let i = index\" [ngClass]=\"isLast(last)\">\n        <li (click)=\"dropFunction($event)\" class=\"aboutDefault aboutDropbtn2\">\n          <div class=\"col-md-12 QaAPara\">{{ qaa.title }}</div>\n          <div class=\"col-md-12\">\n            <span class=\"label label-default\">{{ qaa.type }}</span>\n          </div>\n          <div class=\"aboutDropdown-content\" id=\"drop\">\n            <div class=\"col-md-8\">\n              <p class=\"dropPara QaAPara\">{{ qaa.description }}</p>\n            </div>\n            <div class=\"pull-right col-md-4\">\n              <span class=\"badge\">Posted {{ qaa.create_date }}</span>\n              <br>\n              <app-qaa-edit [qaaAll]=\"qaaAll\" [(testing)]=\"qaaShow[i]\"\n              (updateTesting)=\"onNotify($event)\"></app-qaa-edit>\n              <br>\n              <app-qaa-delete [(qaaShow)]=\"qaaShow\" [qaaAll]=\"qaaAll\" [qaa]=\"qaa\"></app-qaa-delete>\n            </div>\n          </div>\n        </li>\n      </div>\n    </ul>\n\n    <div class=\"col-md-3\">\n      <a (click)=\"scrollToTheStartOfPage()\">Scroll to the top</a>\n    </div>\n\n  </div>\n</div>\n\n<app-qaa-edit-modal [qaa]=\"test\"></app-qaa-edit-modal>"

/***/ }),

/***/ "./src/app/qaa/qaa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QaaComponent = /** @class */ (function () {
    function QaaComponent(http) {
        this.http = http;
        this.qaa = {};
        this.qaas = {};
        this.numberOfLi = 8;
        this.qaaAll = [];
        this.qaaShow = [];
    }
    QaaComponent.prototype.onNotify = function (val) {
        console.log(val);
        this.test = val;
    };
    QaaComponent.prototype.ngOnInit = function () {
        var _this = this;
        function compare(a, b) {
            return a.id - b.id;
        }
        this.http.get('/api/qaa').subscribe(function (data) {
            console.log(data);
            _this.qaaAll = data;
            _this.qaaAll.sort(compare);
            _this.qaaShow = _this.qaaAll;
        });
        __WEBPACK_IMPORTED_MODULE_2_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#QaA").addClass('active');
            document.title = "QaA - Questions and Answers";
        });
    };
    QaaComponent.prototype.scrollToTheEndOfPage = function () {
        window.scrollTo(0, document.body.scrollHeight);
    };
    QaaComponent.prototype.scrollToTheStartOfPage = function () {
        window.scrollTo(0, 0);
    };
    QaaComponent.prototype.isLast = function (check) {
        if (check == true) {
            var li = document.getElementsByTagName("LI");
            var i;
            this.numberOfQaA = li.length - this.numberOfLi;
            for (i = this.numberOfLi; i < li.length; i++) {
                switch (li[i].children[1].children[0].innerHTML) {
                    case "Javascript":
                        li[i].classList.add("javascript");
                        li[i].children[2].classList.add("javascript-content");
                        break;
                    case "HTML":
                        li[i].classList.add("html");
                        li[i].children[2].classList.add("html-content");
                        break;
                    case "CSS":
                        li[i].classList.add("css");
                        li[i].children[2].classList.add("css-content");
                        break;
                    case "Data structures":
                        li[i].classList.add("DataStructures");
                        li[i].children[2].classList.add("DataStructures-content");
                }
                /*switch(li[i].children[1].children[0].innerHTML){
                  case "passed":
                    li[i].classList.add("passed");
                    break;
                  case "failed":
                    li[i].classList.add("failed");
                    li[i].children[1].classList.add("failed-content");
                    break;
                }*/
                /*if(li[i].children[2].children[4].innerHTML == "") {
                  li[i].children[2].children[4].innerHTML = "not completed";
                }*/
            }
        }
    };
    // switching between selected values
    QaaComponent.prototype.dropFunction = function ($event) {
        var elem = $event.target;
        if (elem.tagName !== "LI") {
            elem = __WEBPACK_IMPORTED_MODULE_2_jquery__(elem).closest("li")[0];
        }
        elem.children[2].classList.toggle("show");
    };
    QaaComponent.prototype.select = function ($event) {
        var typeSelected = $event.target.value;
        if (typeSelected === 'all') {
            this.qaaShow = this.qaaAll;
        }
        else {
            this.qaaShow = [];
            for (var i = 0; i < this.qaaAll.length; i++) {
                if (this.qaaAll[i].type === typeSelected) {
                    this.qaaShow.push(this.qaaAll[i]);
                }
            }
        }
    };
    QaaComponent.prototype.searchChange = function () {
        if (this.queryString) {
            var input_1 = this.queryString.toLowerCase();
            this.qaaShow = [];
            this.qaaShow = this.qaaAll.filter(function (el) {
                return el.title.toLowerCase().indexOf(input_1) > -1;
            });
        }
        else {
            this.qaaShow = this.qaaAll;
        }
    };
    QaaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-qaa',
            template: __webpack_require__("./src/app/qaa/qaa.component.html"),
            styles: [__webpack_require__("./src/app/qaa/qaa.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QaaComponent);
    return QaaComponent;
}());



/***/ }),

/***/ "./src/app/todo-create/todo-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-create/todo-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"w3-card-4\">\n    <div class=\"w3-container w3-green\">\n      <h2>New task</h2>\n    </div>\n    <form name=\"newTaskForm\" id=\"newTaskForm\" class=\"w3-container newTaskForm\"\n    method=\"post\" (ngSubmit)=\"addTodo(todo)\" #todoForm=\"ngForm\">\n      <p>\n        <label class=\"newTaskType\">Title:</label>\n        <input class=\"w3-input\" name=\"newTaskTitle\" id=\"inputTitle\" type=\"text\"\n        [(ngModel)]=\"todo.title\" name=\"title\" required>\n      </p>\n      <p>\n        <label class=\"newTaskType\">Description:</label>\n        <input class=\"w3-input\" name=\"newTaskDescription\" id=\"inputDescription\"\n        type=\"text\" [(ngModel)]=\"todo.description\" name=\"description\" required>\n      </p>\n      <div>\n        <label class=\"newTaskType\">Type:</label>\n      </div>\n      <select [(ngModel)]=\"todo.type\" name=\"type\" required>\n        <option value=\"\"></option>\n        <option value=\"work\">work</option>\n        <option value=\"personal\">personal</option>\n        <option value=\"school\">school</option>\n        <option value=\"project\">project</option>\n        <option value=\"learn\">learn</option>\n        <option value=\"watch later\">watch later</option>\n      </select>\n    </form>\n    <button class=\"col-md-2 addBtn btn btn-success\" form=\"newTaskForm\"\n    type=\"submit\" [disabled]=\"!todoForm.form.valid\">Submit</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/todo-create/todo-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoCreateComponent = /** @class */ (function () {
    function TodoCreateComponent(http) {
        this.http = http;
        this.todo = {
            state: {},
            id: {},
            create_date: (new Date).toISOString()
        };
    }
    TodoCreateComponent.prototype.ngOnInit = function () {
    };
    TodoCreateComponent.prototype.addTodo = function () {
        var _this = this;
        this.http.get('/api/todo-latest').subscribe(function (data) {
            _this.latest = data;
            console.log(data);
            var newTodo = _this.todo;
            newTodo.state = 'inprogress';
            newTodo.id = (++_this.latest.id).toString();
            newTodo.create_date = (new Date).toISOString();
            _this.todo = { state: '', id: '', create_date: (new Date).toISOString() };
            _this.todoAll.push(newTodo);
            _this.http.post('/api/todo', newTodo)
                .subscribe(function (res) {
            }, function (err) {
                console.log(err);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoCreateComponent.prototype, "todoAll", void 0);
    TodoCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-create',
            template: __webpack_require__("./src/app/todo-create/todo-create.component.html"),
            styles: [__webpack_require__("./src/app/todo-create/todo-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TodoCreateComponent);
    return TodoCreateComponent;
}());



/***/ }),

/***/ "./src/app/todo-delete/todo-delete.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-delete/todo-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-danger btn-md deleteBtn\"\n(click)=\"deleteTodo(todo.id, todo)\">Delete</button>"

/***/ }),

/***/ "./src/app/todo-delete/todo-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoDeleteComponent = /** @class */ (function () {
    function TodoDeleteComponent(http) {
        this.http = http;
        this.todo = {};
    }
    TodoDeleteComponent.prototype.ngOnInit = function () {
    };
    TodoDeleteComponent.prototype.deleteTodo = function (id) {
        var index = this.todoAll.map(function (e) { return e.id; }).indexOf(id);
        this.http.delete('/api/todo/' + this.todoAll[index].create_date)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
        this.todoAll.splice(index, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoDeleteComponent.prototype, "todoAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoDeleteComponent.prototype, "todo", void 0);
    TodoDeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-delete',
            template: __webpack_require__("./src/app/todo-delete/todo-delete.component.html"),
            styles: [__webpack_require__("./src/app/todo-delete/todo-delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TodoDeleteComponent);
    return TodoDeleteComponent;
}());



/***/ }),

/***/ "./src/app/todo-edit-modal/todo-edit-modal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-edit-modal/todo-edit-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Trigger the modal with a button -->\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"editModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div id=\"editModalHeader\" class=\"modal-header\">\n          <button type=\"button\" class=\"close\"\n          data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Edit Task</h4>\n        </div>\n        <div class=\"modal-body\">\n          <form *ngIf=\"todo\" id=\"editTaskForm\" class=\"w3-container\"\n          method=\"post\" (ngSubmit)=\"editTodo(todo.id)\">\n            <p>\n              <label class=\"newTaskType\">Title:</label>\n              <input id=\"test_input\" class=\"w3-input\" name=\"title\"\n              type=\"text\" [(ngModel)]=\"todo.title\" required>\n            </p>\n            <p>\n              <label class=\"newTaskType\">Description:</label>\n              <input class=\"w3-input\" name=\"description\"\n              [(ngModel)]=\"todo.description\" type=\"text\" required>\n            </p>\n            <div>\n              <label class=\"newTaskType\">Type</label>\n            </div>\n            <select name=\"type\" id=\"editSelect\" [(ngModel)]=\"todo.type\"\n            required>\n              <option value=\"\"></option>\n              <option value=\"work\">work</option>\n              <option value=\"personal\">personal</option>\n              <option value=\"school\">school</option>\n              <option value=\"project\">project</option>\n              <option value=\"learn\">learn</option>\n              <option value=\"watch later\">watch later</option>\n            </select>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"col-md-2 editBtn btn btn-success\" form=\"editTaskForm\"\n          type=\"submit\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\"\n          data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/todo-edit-modal/todo-edit-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoEditModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoEditModalComponent = /** @class */ (function () {
    function TodoEditModalComponent(http) {
        this.http = http;
        this.todo = {};
    }
    TodoEditModalComponent.prototype.ngOnInit = function () {
    };
    TodoEditModalComponent.prototype.editTodo = function (id) {
        var index = this.todoAll.map(function (e) { return e.id; }).indexOf(id);
        this.http.put('/api/todo/' + this.todoAll[index].id, this.todoAll[index])
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoEditModalComponent.prototype, "todoAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoEditModalComponent.prototype, "todo", void 0);
    TodoEditModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-edit-modal',
            template: __webpack_require__("./src/app/todo-edit-modal/todo-edit-modal.component.html"),
            styles: [__webpack_require__("./src/app/todo-edit-modal/todo-edit-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TodoEditModalComponent);
    return TodoEditModalComponent;
}());



/***/ }),

/***/ "./src/app/todo-edit/todo-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-edit/todo-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<button id=\"modalButton\" type=\"button\" class=\"modal-button btn btn-info btn-md\neditBtn\" data-toggle=\"modal\" data-target=\"#editModal\"\n(click)=\"editModalForm($event, testing)\">Edit</button>"

/***/ }),

/***/ "./src/app/todo-edit/todo-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoEditComponent = /** @class */ (function () {
    function TodoEditComponent(http) {
        this.http = http;
        this.testing = {};
        this.test = {};
        this.updateTesting = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.numberOfLi = 7;
    }
    TodoEditComponent.prototype.ngOnInit = function () {
    };
    // giving modal form placeholder values for each input txt
    TodoEditComponent.prototype.editModalForm = function ($event, elem) {
        var li = document.getElementsByTagName("LI");
        var i;
        console.log(elem);
        console.log(this.testing);
        this.test = elem;
        this.updateTesting.emit(this.test);
        for (i = this.numberOfLi; i < this.todoAll.length; i++) {
            if (this.todoAll[i]._id == elem._id) {
                this.test = elem;
            }
        }
        this.elem = $event.target;
        // change the header color to the type of the task
        switch (elem.type) {
            case "work":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', 'blueviolet');
                break;
            case "personal":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#ffc900');
                break;
            case "school":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#048E16');
                break;
            case "project":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#533A71');
                break;
            case "learn":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#D1751F');
                break;
            case "watch later":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#900C3E');
                break;
        }
    };
    TodoEditComponent.prototype.changeColor = function ($event) {
        console.log($event);
        var liToChange = this.elem.closest("li");
        var modalElem = $event.target;
        var liClasses = __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange).attr('class').split(' ');
        if (liClasses.length > 1) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange).removeClass(liClasses.pop());
        }
        var liContentClasses = __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange.children[2]).attr('class').split(' ');
        if (liContentClasses.length > 1) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(liToChange.children[2]).removeClass(liContentClasses.pop());
        }
        // change the header color to the type of the task
        switch (modalElem.value) {
            case "Javascript":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', 'blueviolet');
                liToChange.classList.add("javascript");
                liToChange.children[2].classList.add("javascript-content");
                break;
            case "CSS":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#ffc900');
                liToChange.classList.add("css");
                liToChange.children[2].classList.add("css-content");
                break;
            case "HTML":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#048E16');
                liToChange.classList.add("html");
                liToChange.children[2].classList.add("html-content");
                break;
            case "Data structures":
                __WEBPACK_IMPORTED_MODULE_2_jquery__("#editModalHeader").css('background', '#900C3E');
                liToChange.classList.add("DataStructures");
                liToChange.children[2].classList.add("DataStructures-content");
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoEditComponent.prototype, "todoAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoEditComponent.prototype, "testing", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TodoEditComponent.prototype, "test", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], TodoEditComponent.prototype, "updateTesting", void 0);
    TodoEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo-edit',
            template: __webpack_require__("./src/app/todo-edit/todo-edit.component.html"),
            styles: [__webpack_require__("./src/app/todo-edit/todo-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TodoEditComponent);
    return TodoEditComponent;
}());



/***/ }),

/***/ "./src/app/todo/todo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container todolist\">\n  <div class=\"row\">\n    <app-todo-create [todoAll]=\"todoAll\"></app-todo-create>\n\n    <div class=\"col-md-10\">\n      <h2>Tasks</h2>\n    </div>\n\n\n    <div class=\"col-md-1 selector\">\n      <select id=\"selector\" (change)=\"select($event)\">\n        <option value=\"all\">all</option>\n        <option value=\"inprogress\">inprogress</option>\n        <option value=\"completed\">completed</option>\n        <option value=\"removed\">removed</option>\n        <option value=\"work\">work</option>\n        <option value=\"personal\">personal</option>\n        <option value=\"personal\">school</option>\n        <option value=\"project\">project</option>\n        <option value=\"learn\">learn</option>\n        <option value=\"watch later\">watch later</option>\n      </select>\n    </div>\n\n    <div class=\"col-md-12\">\n      <p ng-model=\"numberOfQaA\">Number of todos: {{todoShow.length}}\n      </p>\n    </div>\n    <ul class=\"col-md-12\" id=\"myUL\">\n      <div *ngFor=\"let todo of todoShow.reverse(); let last = last; let i =\n      index\" [ngClass]=\"isLast(last)\">\n        <li (click)=\"dropFunction($event)\" class=\"default dropbtn2\">\n          <div>\n            <img class=\"checkImg\" src=\"..\\..\\assets\\img\\check2.png\">\n            <img class=\"checkImg\" src=\"..\\..\\assets\\img\\disable.png\">\n            <img class=\"checkImg\" src=\"..\\..\\assets\\img\\clock.png\">\n            <span>{{todo.title}}</span>\n          </div>\n          <div class=\"dropdown-content\" id=\"drop\">\n            <p class=\"label label-default\">Posted {{todo.create_date}}</p>\n            <p class=\"label label-default\">{{todo.type}}</p>\n            <p class=\"label label-default\">{{todo.state}}</p>\n            <p class=\"dropPara\">{{todo.description}}</p>\n            <div class=\"modal-button\">\n              <app-todo-edit [todoAll]=\"todoAll\" [testing]=\"todoAll[i]\"\n              (updateTesting)=\"onNotify($event)\"></app-todo-edit>\n\n              <app-todo-delete [todoAll]=\"todoAll\"\n              [todo]=\"todo\"></app-todo-delete>\n            </div>\n          </div>\n          <span class=\"closeBtn\" (click)=\"removeTask($event,\n          todo)\">&#215;</span>\n          <span class=\"check\" (click)=\"checkTask($event, todo)\">&#x2713;</span>\n        </li>\n      </div>\n\n    </ul>\n\n    <app-todo-edit-modal [todo]=\"test\" [todoAll]=\"todoAll\"></app-todo-edit-modal>\n\n\n  </div>\n</div>\n<br>"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoComponent = /** @class */ (function () {
    function TodoComponent(http) {
        this.http = http;
        this.numberOfLi = 8;
        this.isLast = function (check) {
            if (check == true) {
                var li = document.getElementsByTagName("LI");
                var i;
                this.numberOfTodo = li.length - this.numberOfLi;
                for (i = this.numberOfLi; i < li.length; i++) {
                    switch (li[i].children[1].children[1].innerHTML) {
                        case "work":
                            li[i].classList.add("work");
                            li[i].children[1].classList.add("work-content");
                            break;
                        case "personal":
                            li[i].classList.add("personal");
                            li[i].children[1].classList.add("personal-content");
                            break;
                        case "school":
                            li[i].classList.add("school");
                            li[i].children[1].classList.add("school-content");
                            break;
                        case "project":
                            li[i].classList.add("project");
                            li[i].children[1].classList.add("project-content");
                            break;
                        case "learn":
                            li[i].classList.add("learn");
                            li[i].children[1].classList.add("learn-content");
                            break;
                        case "watch later":
                            li[i].classList.add("watchLater");
                            li[i].children[1].classList.add("watchLater-content");
                            var org_html = li[i].children[1].children[0].innerHTML;
                            var new_html = "<a href=" +
                                this.todoAll[this.todoAll.length - i + 5].description + ">"
                                + this.todoAll[this.todoAll.length - i + 5].description + "</a>";
                            li[i].children[1].children[0].innerHTML = new_html;
                            break;
                    }
                    switch (li[i].children[1].children[2].innerHTML) {
                        case "completed":
                            //li[i].classList.add("completed");  
                            li[i].children[0].children[0].style.display = "inline";
                            break;
                        case "removed":
                            // li[i].classList.add("removed");
                            // li[i].children[1].classList.add("removed-content");
                            li[i].children[0].children[1].style.display = "inline";
                            break;
                        case "inprogress":
                            li[i].children[0].children[2].style.display = "inline";
                            break;
                    }
                    if (li[i].children[1].children[4].innerHTML == "") {
                        li[i].children[1].children[4].innerHTML = "not completed";
                    }
                }
            }
        };
        this.todoAll = [];
        this.todoShow = [];
    }
    TodoComponent.prototype.onNotify = function (val) {
        console.log(val);
        this.test = val;
    };
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/todo').subscribe(function (data) {
            _this.todoAll = data;
            _this.todoShow = _this.todoAll;
        });
        __WEBPACK_IMPORTED_MODULE_2_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#todolist").addClass('active');
            document.title = "To-do list";
        });
    };
    // Click on a close button to hide the current list item
    TodoComponent.prototype.removeTask = function ($event, todo) {
        var elem = $event.target;
        var li = elem.parentElement;
        if (li.children[1].children[2].innerHTML != "removed") {
            li.children[1].children[2].innerHTML = "removed";
            li.children[0].children[1].style.display = "inline";
            li.children[0].children[2].style.display = "none";
            li.children[0].children[0].style.display = "none";
        }
        else {
            li.children[1].children[2].innerHTML = "inprogress";
            li.children[0].children[1].style.display = "none";
            li.children[0].children[2].style.display = "inline";
        }
        if (todo.state != "removed") {
            todo.state = "removed";
            todo.completed_date = new Date();
            this.http.put('api/todo/removed/' + todo.id, todo)
                .subscribe(function (res) {
            }, function (err) {
                console.log(err);
            });
        }
        else {
            todo.state = "inprogress";
            todo.completed_date = new Date();
            this.http.put('api/todo/inprogress/' + todo.id, todo)
                .subscribe(function (res) {
            }, function (err) {
                console.log(err);
            });
        }
    };
    TodoComponent.prototype.checkTask = function ($event, todo) {
        var elem = $event.target;
        var li = elem.parentElement;
        // li.classList.toggle('completed');
        if (li.children[1].children[2].innerHTML != "completed") {
            li.children[1].children[2].innerHTML = "completed";
            li.children[0].children[0].style.display = "inline";
            li.children[0].children[1].style.display = "none";
            li.children[0].children[2].style.display = "none";
        }
        else {
            li.children[1].children[2].innerHTML = "inprogress";
            li.children[0].children[0].style.display = "none";
            li.children[0].children[2].style.display = "inline";
        }
        if (todo.state != "completed") {
            todo.state = "completed";
            todo.completed_date = new Date();
            this.http.put('/api/todo/completed/' + todo.id, todo)
                .subscribe(function (res) {
            }, function (err) {
                console.log(err);
            });
        }
        else {
            todo.state = "inprogress";
            todo.completed_date = new Date();
            this.http.put('/api/todo/inprogress/' + todo.id, todo)
                .subscribe(function (res) {
            }, function (err) {
                console.log(err);
            });
        }
    };
    // for pagination WIP
    /*myApp.filter('startFrom', function () { return function (input, start) {
      start = +start; //parse to int if (typeof input == "undefined") { return;
        }
        return input.slice(start);
      }
    });*/
    TodoComponent.prototype.dropFunction = function ($event) {
        var elem = $event.target;
        if (elem.tagName !== "LI") {
            elem = __WEBPACK_IMPORTED_MODULE_2_jquery__(elem).closest("li")[0];
        }
        elem.children[1].classList.toggle("show");
    };
    TodoComponent.prototype.select = function ($event) {
        var typeSelected = $event.target.value;
        if (typeSelected === 'all') {
            this.todoShow = this.todoAll;
        }
        else {
            this.todoShow = [];
            for (var i = 0; i < this.todoAll.length; i++) {
                if (this.todoAll[i].type === typeSelected ||
                    this.todoAll[i].state === typeSelected) {
                    this.todoShow.push(this.todoAll[i]);
                }
            }
        }
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-todo',
            template: __webpack_require__("./src/app/todo/todo.component.html"),
            styles: [__webpack_require__("./src/app/todo/todo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/turnip/turnip.component.css":
/***/ (function(module, exports) {

module.exports = ".popup {\r\n  position: relative;\r\n  display: inline-block;\r\n  border-bottom: 1px dotted black;\r\n  height: 50px;\r\n}\r\n\r\n.popup .popup-box {\r\n  visibility: hidden;\r\n  width: 120px;\r\n  background-color: black;\r\n  color: #fff;\r\n  text-align: center;\r\n  border-radius: 6px;\r\n  padding: 5px 0;\r\n  position: absolute;\r\n  z-index: 1;\r\n  left: 50%;\r\n  margin-left: -60px;\r\n}\r\n\r\n.popup .popup-box::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 100%;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: column wrap;\r\n          flex-flow: column wrap;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  border-width: 5px;\r\n  border-style: solid;\r\n  border-color: transparent transparent #2C3E50 transparent;\r\n}\r\n\r\n.popup-text {\r\n  padding: 12px 15px 15px 15px;\r\n  height: 50px;\r\n  color: white;\r\n}\r\n\r\n.turnip-input {\r\n  width: 80%;\r\n  margin: 10px;\r\n}\r\n\r\n.turnip-align-input {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: column wrap;\r\n          flex-flow: column wrap;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}"

/***/ }),

/***/ "./src/app/turnip/turnip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\">\n  <p class=\"popup-text\" (click)=\"showDiv()\">Turnip</p>\n  <div [ngStyle]=\"isDivVisible ? {'visibility':'visible'} : {'visibility':'hidden'}\" class=\"popup-box\">\n    <div class=\"turnip-align-input\">\n    <input class=\"w3-input turnip-input\" name=\"title\" id=\"inputTitle\" type=\"text\" [(ngModel)]=\"newAction.title\" placeholder=\"action's title\"\n      name=\"title\" [readonly]=\"inputReadonly\" required>\n    </div>\n    <button id=\"start\" type=\"button\" class=\"modal-button btn btn-info btn-md\n      editBtn\" (click)=\"start()\">Turnip</button>\n    <span id=\"display-turnip\"></span>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/turnip/turnip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurnipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TurnipComponent = /** @class */ (function () {
    function TurnipComponent(http) {
        this.http = http;
        this.isDivVisible = true;
        this.newAction = {
            id: {},
            title: '',
            start: {},
            end: '',
        };
        this.inputReadonly = false;
    }
    TurnipComponent.prototype.ngOnInit = function () {
        var _this = this;
        var start = document.getElementById("start");
        var dis = document.getElementById("display-turnip");
        var finishTime;
        var timerLength = 0;
        dis.innerHTML = "Time: " + timerLength;
        this.Update = function () {
            finishTime = localStorage.getItem('myTime');
            var timeLeft = (+new Date() - finishTime);
            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            if (days) {
                dis.innerHTML = "Time: " + days + "d" + hours + "h" + ":" + minutes + "m" + ":" + seconds + "s";
            }
            dis.innerHTML = "Time: " + hours + "h" + ":" + minutes + "m" + ":" + seconds + "s";
            _this.timeoutID = window.setTimeout(_this.Update, 500);
        };
        var time = localStorage.getItem('myTime');
        if (time !== undefined && time !== "" && time !== null && time !== '') {
            this.newAction.title = localStorage.getItem('actionTitle');
            this.inputReadonly = true;
            if (this.Update) {
                this.Update();
            }
        }
        else {
            localStorage.clear();
            localStorage.setItem('myTime', '');
        }
    };
    TurnipComponent.prototype.showDiv = function () {
        if (this.isDivVisible == false) {
            this.isDivVisible = true;
        }
        else {
            this.isDivVisible = false;
        }
    };
    TurnipComponent.prototype.start = function () {
        var _this = this;
        var time = localStorage.getItem('myTime');
        if (time === '') {
            this.http.get('/api/action-latest').subscribe(function (data) {
                _this.latest = data;
                _this.newAction.start = new Date();
                if (data == null) {
                    _this.newAction.id = 0;
                }
                else {
                    _this.newAction.id = (++_this.latest.id).toString();
                }
                _this.http.post('/api/action', _this.newAction)
                    .subscribe(function (res) {
                }, function (err) {
                    console.log(err);
                });
            });
            localStorage.setItem('myTime', (new Date()).getTime().toString());
            localStorage.setItem('actionTitle', this.newAction.title);
            this.inputReadonly = true;
            if (this.Update) {
                this.Update();
            }
        }
        else {
            localStorage.setItem('myTime', '');
            this.http.get('/api/action-latest').subscribe(function (data) {
                data["end"] = new Date();
                _this.http.put('/api/action/' + data["id"], data)
                    .subscribe(function (res) {
                }, function (err) {
                    console.log(err);
                });
            });
            if (this.timeoutID != undefined) {
                window.clearTimeout(this.timeoutID);
            }
        }
    };
    ;
    TurnipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-turnip',
            template: __webpack_require__("./src/app/turnip/turnip.component.html"),
            styles: [__webpack_require__("./src/app/turnip/turnip.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TurnipComponent);
    return TurnipComponent;
}());



/***/ }),

/***/ "./src/app/words-create/words-create.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/words-create/words-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\n  <div class=\"w3-card-4\">\n      <div class=\"w3-container w3-green\">\n          <h2>New Word</h2>\n      </div>\n      <form name=\"newTaskForm\" id=\"newTaskForm\" class=\"w3-container\n      aboutNewTaskForm\" method=\"post\" (ngSubmit)=\"addWords()\"\n      #wordsForm=\"ngForm\">\n          <p>\n              <label class=\"newTaskType\">Word:</label>\n              <textarea class=\"w3-input\" name=\"word\" cols=\"40\" rows=\"1\"\n              [(ngModel)]=\"words.word\" required></textarea>\n          </p>\n          <p>\n              <label class=\"newTaskType\">Description:</label>\n              <textarea class=\"w3-input\" name=\"description\" cols=\"40\" rows=\"3\"\n              [(ngModel)]=\"words.description\" required></textarea>\n          </p>\n          <div>\n              <label class=\"newTaskType\">Translation:</label>\n              <textarea class=\"w3-input\" name=\"translation\" cols=\"40\" rows=\"1\"\n              [(ngModel)]=\"words.translation\" required></textarea>\n\n          </div>\n      </form>\n      <button class=\"col-md-2 addBtn btn btn-success\" form=\"newTaskForm\"\n      type=\"submit\" [disabled]=\"!wordsForm.form.valid\">Submit</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/words-create/words-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordsCreateComponent = /** @class */ (function () {
    function WordsCreateComponent(http) {
        this.http = http;
        this.words = { id: '', create_date: (new Date).toISOString() };
        this.newWords = { id: '' };
    }
    WordsCreateComponent.prototype.ngOnInit = function () {
    };
    WordsCreateComponent.prototype.addWords = function () {
        var _this = this;
        this.http.get('/api/words-latest').subscribe(function (data) {
            _this.latest = data;
            console.log(data);
            var newWords = _this.words;
            newWords.id = (++_this.latest.id).toString();
            newWords.create_date = (new Date).toISOString();
            _this.words = { id: '', create_date: (new Date).toISOString() };
            _this.wordsAll.push(newWords);
            _this.http.post('/api/words', newWords)
                .subscribe(function (res) {
            }, function (err) {
                console.log(err);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsCreateComponent.prototype, "wordsAll", void 0);
    WordsCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-words-create',
            template: __webpack_require__("./src/app/words-create/words-create.component.html"),
            styles: [__webpack_require__("./src/app/words-create/words-create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WordsCreateComponent);
    return WordsCreateComponent;
}());



/***/ }),

/***/ "./src/app/words-delete/words-delete.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/words-delete/words-delete.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn btn-danger btn-md deleteBtn\"\n(click)=\"deleteWords(words.id, words)\">Delete</button>"

/***/ }),

/***/ "./src/app/words-delete/words-delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsDeleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordsDeleteComponent = /** @class */ (function () {
    function WordsDeleteComponent(http) {
        this.http = http;
        this.words = {};
    }
    WordsDeleteComponent.prototype.ngOnInit = function () {
    };
    WordsDeleteComponent.prototype.deleteWords = function (id) {
        var index = this.wordsAll.map(function (e) { return e.id; }).indexOf(id);
        this.http.delete('/api/words/' + this.wordsAll[index].create_date)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
        this.wordsAll.splice(index, 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsDeleteComponent.prototype, "wordsAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsDeleteComponent.prototype, "words", void 0);
    WordsDeleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-words-delete',
            template: __webpack_require__("./src/app/words-delete/words-delete.component.html"),
            styles: [__webpack_require__("./src/app/words-delete/words-delete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WordsDeleteComponent);
    return WordsDeleteComponent;
}());



/***/ }),

/***/ "./src/app/words-edit-modal/words-edit-modal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/words-edit-modal/words-edit-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- Trigger the modal with a button -->\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div id=\"editModalHeader\" class=\"modal-header\">\n          <button type=\"button\" class=\"close\"\n          data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Edit Word</h4>\n        </div>\n        <div class=\"modal-body editQaABody\">\n          <form *ngIf=\"words\" id=\"editTaskForm\" class=\"w3-container\"\n          method=\"post\" (ngSubmit)=\"editWords(words.id)\">\n            <p>\n              <label class=\"newTaskType\">Word:</label>\n              <textarea class=\"w3-input\" name=\"word\" cols=\"40\" rows=\"1\"\n              [(ngModel)]=\"words.word\" required></textarea>\n            </p>\n            <p>\n              <label class=\"newTaskType\">Description:</label>\n              <textarea class=\"w3-input editQaADescription\"\n              name=\"description\" cols=\"40\" rows=\"1\"\n              [(ngModel)]=\"words.description\" required></textarea>\n            </p>\n            <p>\n              <label class=\"newTaskType\">Translation:</label>\n              <textarea class=\"w3-input editQaADescription\"\n              name=\"translation\" cols=\"40\" rows=\"1\"\n              [(ngModel)]=\"words.translation\" required></textarea>\n            </p>\n          </form>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"col-md-2 editBtn btn btn-success\"\n          form=\"editTaskForm\" type=\"submit\">Submit</button>\n          <button type=\"button\" class=\"btn btn-default\"\n          data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/words-edit-modal/words-edit-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsEditModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordsEditModalComponent = /** @class */ (function () {
    function WordsEditModalComponent(http) {
        this.http = http;
        this.words = {};
    }
    WordsEditModalComponent.prototype.ngOnInit = function () {
    };
    WordsEditModalComponent.prototype.editWords = function (id) {
        this.http.put('/api/words/' + id, this.words)
            .subscribe(function (res) {
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsEditModalComponent.prototype, "wordsAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsEditModalComponent.prototype, "words", void 0);
    WordsEditModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-words-edit-modal',
            template: __webpack_require__("./src/app/words-edit-modal/words-edit-modal.component.html"),
            styles: [__webpack_require__("./src/app/words-edit-modal/words-edit-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WordsEditModalComponent);
    return WordsEditModalComponent;
}());



/***/ }),

/***/ "./src/app/words-edit/words-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/words-edit/words-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<button id=\"modalButton\" type=\"button\" class=\"modal-button btn btn-info btn-md\neditBtn\" data-toggle=\"modal\" data-target=\"#myModal\"\n(click)=\"editModalForm($event, testing)\">Edit</button>"

/***/ }),

/***/ "./src/app/words-edit/words-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WordsEditComponent = /** @class */ (function () {
    function WordsEditComponent(http) {
        this.http = http;
        this.testing = {};
        this.test = {};
        this.updateTesting = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.numberOfLi = 7;
    }
    WordsEditComponent.prototype.ngOnInit = function () {
    };
    // giving modal form placeholder values for each input txt
    WordsEditComponent.prototype.editModalForm = function ($event, elem) {
        var li = document.getElementsByTagName("LI");
        var i;
        console.log(elem);
        console.log(this.testing);
        this.test = elem;
        this.updateTesting.emit(this.test);
        for (i = this.numberOfLi; i < this.wordsAll.length; i++) {
            if (this.wordsAll[i]._id == elem._id) {
                this.test = elem;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsEditComponent.prototype, "wordsAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsEditComponent.prototype, "testing", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], WordsEditComponent.prototype, "test", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], WordsEditComponent.prototype, "updateTesting", void 0);
    WordsEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-words-edit',
            template: __webpack_require__("./src/app/words-edit/words-edit.component.html"),
            styles: [__webpack_require__("./src/app/words-edit/words-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WordsEditComponent);
    return WordsEditComponent;
}());



/***/ }),

/***/ "./src/app/words/words.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/words/words.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container QaA\">\n  <div class=\"row\">\n\n    <app-words-create [wordsAll]=\"wordsAll\"></app-words-create>\n\n    <div class=\"col-md-10\">\n      <h2>All Words</h2>\n    </div>\n\n    <div class=\"col-md-12\">\n      <p>Number of Words: {{ wordsAll.length }}</p>\n    </div>\n\n    <div class=\"col-md-3\">\n      <a (click)=\"scrollToTheEndOfPage()\">Scroll to the bottom</a>\n    </div>\n\n    <ul class=\"col-md-12\" id=\"myUL\">\n      <div *ngFor=\"let words of wordsAll.reverse(); let last = last; let i =\n      index\">\n        <li (click)=\"dropFunction($event)\" class=\"aboutDefault aboutDropbtn2\">\n          <div class=\"col-md-12 QaAPara\">{{words.word}}</div>\n          <div class=\"aboutDropdown-content\" id=\"drop\">\n            <div class=\"col-md-8\">\n              <p class=\"dropPara QaAPara\">{{words.description}}</p>\n            </div>\n            <div class=\"col-md-8\">\n              <p class=\"dropPara QaAPara\">{{words.translation}}</p>\n            </div>\n            <div class=\"pull-right col-md-4\">\n              <span class=\"badge\">Posted {{words.create_date}}</span>\n              <br>\n              <app-words-edit [wordsAll]=\"wordsAll\" [testing]=\"wordsAll[i]\"\n              (updateTesting)=\"onNotify($event)\"></app-words-edit>\n              <br>\n              <app-words-delete [wordsAll]=\"wordsAll\"\n              [words]=\"words\"></app-words-delete>\n            </div>\n          </div>\n        </li>\n      </div>\n    </ul>\n\n    <div class=\"col-md-3\">\n      <a (click)=\"scrollToTheStartOfPage()\">Scroll to the top</a>\n    </div>\n\n  </div>\n</div>\n\n<app-words-edit-modal [words]=\"test\"></app-words-edit-modal>\n"

/***/ }),

/***/ "./src/app/words/words.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WordsComponent = /** @class */ (function () {
    function WordsComponent(http) {
        this.http = http;
        this.word = {};
        this.words = {};
        this.numberOfLi = 8;
        this.wordsAll = [];
    }
    WordsComponent.prototype.onNotify = function (val) {
        console.log(val);
        this.test = val;
    };
    WordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/words').subscribe(function (data) {
            _this.wordsAll = data;
        });
        __WEBPACK_IMPORTED_MODULE_2_jquery__(document).ready(function () {
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#Words").addClass('active');
            document.title = "Words";
        });
    };
    WordsComponent.prototype.scrollToTheEndOfPage = function () {
        window.scrollTo(0, document.body.scrollHeight);
    };
    WordsComponent.prototype.scrollToTheStartOfPage = function () {
        window.scrollTo(0, 0);
    };
    WordsComponent.prototype.dropFunction = function ($event) {
        var elem = $event.target;
        if (elem.tagName !== "LI") {
            elem = __WEBPACK_IMPORTED_MODULE_2_jquery__(elem).closest("li")[0];
        }
        elem.children[1].classList.toggle("show");
    };
    WordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-words',
            template: __webpack_require__("./src/app/words/words.component.html"),
            styles: [__webpack_require__("./src/app/words/words.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WordsComponent);
    return WordsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    stylesheet = document.getElementById("style");
    
    
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    stylename = stylesheet.getAttribute("href");
   
    // 1 (c) Determine new stylesheet file name
    if (stylename == "style1.css") {
        stylename = "style2.css";
    }
    else {
        stylename = "style1.css";
    }
   
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    stylesheet.setAttribute("href", stylename);


    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("stylesheetname", stylename)
  
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    stylesheet = localStorage.getItem("stylesheetname")
    if (stylesheet == null) {
        stylesheetElement.setAttribute("href", "style1.css")
    }
    else {
        // 2 (b) get html style element by ID
        stylesheetElement = document.getElementById("style");
        
        // 2 (c) replace href attribute of html element.
        stylesheetElement.setAttribute("href", stylesheet);
    }
}



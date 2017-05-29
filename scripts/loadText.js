/*jslint browser:true */
/*jslint devel: true */
(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', function () {
        // Load skillsets
        loadAjax("JSON/skillset.json");
        loadAjax("JSON/profile.json");
        // loadAjax("JSON/other.json");
        loadAjax("JSON/experience.json");
        loadAjax("JSON/education.json");
        loadAjax("JSON/personality.json");
        
        
    }, false);

    // Calls html render functions based on object data type
    function renderHTML(data){
        switch (data.type) {
        case "skills":
            renderSkillset(data);
            break;
        case "profile":
            renderParagraph(data, "profile");
            break;
        case "other":
            renderParagraph(data, "other");
            break;
        case "experience":
            renderDateList(data, "experience");
            break;
        case "education":
            renderDateList(data, "education");
            break;
        case "personality":
            renderLeftRightBlocks(data);
            break;
        }
    }
    // Loads json, calls renderHTML with loaded data
    function loadAjax(fileName) {
        var ajaxRequest = new XMLHttpRequest();
        ajaxRequest.open('GET', fileName);
        ajaxRequest.onload = function () {
            var data = JSON.parse(ajaxRequest.responseText);
            renderHTML(data);
            return data;
        };

        ajaxRequest.send();
    }

    // Renders skillsets to id="personalSkills"
    function renderSkillset(data) {
        var htmlString = "";
        data.data.forEach(function (element) {
            htmlString += "<article>" + "<h3>" + element.category + "</h3>" + "<ul>";
            element.skills.forEach(function (element){
                htmlString += "<li>" + element + "</li>";
            }, this);
            htmlString += "</ul>" + "</article>";
        }, this);
        document.getElementById("personalSkills").insertAdjacentHTML('beforeend', htmlString);
        console.log("Skills loaded");
    }

    // Renders a paragraph in a given element
    function renderParagraph(data, domID) {
        var htmlString = "";
        htmlString += '<p class="descriptionText">' + data.data + '</p>';
        document.getElementById(domID).insertAdjacentHTML('beforeend', htmlString);
        console.log("Paragraph loaded - " + domID);
    }
    // Renders a dateList (experience, education, similar) in a given ID
    function renderDateList(data, domID) {
        var htmlString = '<div class="dateList">';
        data.data.forEach(function (element) {
            htmlString += "<article>" + "<div>";
            htmlString += "<h3> <strong>" + element.duty + "</strong>";
            if (element.place) {
                htmlString += ", " + element.place + "</h3>";
            }
            htmlString += "<h3>" + element.date + "</h3>";
            htmlString += "</div>";
            htmlString += "<p>" + element.description + "</p>";
            htmlString += "</article>";
        }, this);
        htmlString += '</div>';
        document.getElementById(domID).insertAdjacentHTML('beforeend', htmlString);
        console.log("DateList loaded - " + domID);
    }

    //leftRightBlocks
    function renderLeftRightBlocks(data){
        var htmlString = "";
        data.data.forEach(function(element){
            htmlString += "<article>";
            htmlString += "<h3><strong>"
            htmlString += element.trait;
            htmlString += "</strong></h3>";
            htmlString += "<p>" + element.description + "</p>"
            htmlString += "</article>"
        }, this);
        document.getElementById("leftRightBlocks").insertAdjacentHTML('beforeend', htmlString);
        console.log("Left/Right blocks loaded - " + "leftRightBlocks");
    }
})();
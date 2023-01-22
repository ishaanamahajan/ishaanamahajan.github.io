

<div class="tabs">
  <button class="tab-button" id="tab-button-1">About Me</button>
  <button class="tab-button" id="tab-button-2">Education</button>
  <button class="tab-button" id="tab-button-3">Experience</button>
  <button class="tab-button" id="tab-button-4">Skills</button>
  <div class="tab-content" id="tab-content-1">
    <p>About Me content goes here</p>
  </div>
  <div class="tab-content" id="tab-content-2">
    <p>Education content goes here</p>
  </div>
  <div class="tab-content" id="tab-content-3">
    <p>Experience content goes here</p>
  </div>
  <div class="tab-content" id="tab-content-4">
    <p>Skills content goes here</p>
  </div>
</div>


var tabButtons = document.querySelectorAll(".tab-button");
var tabContents = document.querySelectorAll(".tab-content");

function handleTabClick(event) {
  var tabButton = event.target;
  var tabContentId = tabButton.getAttribute("id").replace("tab-button-", "tab-content-");
  var tabContent = document.getElementById(tabContentId);

  // hide all tab contents
  tabContents.forEach(function(tc) {
    tc.style.display = "none";
  });

  // deactivate all tab buttons
  tabButtons.forEach(function(tb) {
    tb.classList.remove("active");
  });

  // activate clicked tab button
  tabButton.classList.add("active");

  // show clicked tab content
  tabContent.style.display = "block";
}

tabButtons.forEach(function(tb) {
  tb.addEventListener("click", handleTabClick);
});

// show the first tab content by default
tabContents[0].style.display = "block";
tabButtons[0].classList.add("active");

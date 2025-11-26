// Tabs for Dashboard
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.background = "#e8eef9";
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.style.background = "#2a6df4";
  evt.currentTarget.style.color = "#fff";
}

// Default dashboard tab
document.addEventListener("DOMContentLoaded", () => {
  const defaultTab = document.querySelector(".tab-btn");
  if (defaultTab) defaultTab.click();
});







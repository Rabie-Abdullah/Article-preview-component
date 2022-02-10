const social_icons = document.getElementById('social_icons');
const shareBtn = document.getElementById('share')

shareBtn.onclick = function() {
    if (social_icons.style.display !== "none") {
        social_icons.style.display = "none";
      } else {
        social_icons.style.display = "block";
      }
}
var titles = document.getElementsByClassName('jobtitle');
for (var i = 0, l = titles.length; i < l; i++) {
  title = titles[i].innerText;
  titles[i].innerText = title + " - " + i + "% of this job will be automated"
}

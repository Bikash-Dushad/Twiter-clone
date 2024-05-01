document.getElementById("changingbtn").addEventListener("click", function () {
    let weeklyViews = document.querySelectorAll(".weeklyviews");
    let dailyViews = document.querySelectorAll(".dailyviews");
    let button = document.getElementById("changingbtn");

    if (button.innerHTML === "Show Daily") {
      weeklyViews.forEach(function (view) {
        view.style.display = 'none';
      });
      dailyViews.forEach(function (view) {
        view.style.display = 'block';
      });
      button.innerHTML = "Show Weekly";
    } else {
      weeklyViews.forEach(function (view) {
        view.style.display = 'block';
      });
      dailyViews.forEach(function (view) {
        view.style.display = 'none';
      });
      button.innerHTML = "Show Daily";
    }
  });
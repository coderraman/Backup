function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // Finish this function
  let viewsNum;
  if (views <= 100000) {
    viewsNum = views / 100000;
  } else if (views > 1000) {
    viewsNum = views / 1000 + "k";
  } else {
    viewsNum = views;
  }

  let html = `<div class="card">
      <div class="imag">
        <img src="${thumbnail}" alt="" />
        <div class="duration">
${duration}      
  </div>
      </div>
      <div class="text">
        <h1>
         ${tittle}
        </h1>
        <p> ${cName}.  ${viewstr}  views.
         ${monthsOld} months ago</p>
      </div>
  </div>`;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);

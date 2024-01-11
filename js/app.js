const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const moiveBox = document.querySelector("#movie-box");

function showMovies(data) {
  moiveBox.innerHTML = "";
  data.forEach((result) => {
    const imagePath =
      result.poster_path === null
        ? "img/image-missing.png"
        : IMGPATH + result.poster_path;
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
                <img src="${imagePath}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                        <h2> ${result.original_title}  </h2>
                        <span> ${result.vote_average} <span>
                    </div>
                    <h3>Overview:</h3>
                    <p> 
                        ${result.overview}
                    </p>
                 </div>
            `;
    moiveBox.appendChild(box);
  });
}

document.querySelector("#search").addEventListener("keyup", function (event) {
  if (event.target.value !== "") {
    showMovies(
      data.filter((d) =>
        d.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  } else {
    showMovies(data);
  }
});

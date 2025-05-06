<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>名偵探柯南電影特輯</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      background: #f5f5f5;
    }
    header {
      background: #002147;
      color: white;
      padding: 20px;
      text-align: center;
    }
    #search-bar {
      padding: 20px;
      text-align: center;
    }
    #search-input {
      width: 60%;
      padding: 10px;
      font-size: 16px;
    }
    .movies {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    .movie-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .movie-card:hover {
      transform: scale(1.02);
    }
    .movie-card img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    .movie-info {
      padding: 15px;
    }
    .movie-title {
      font-weight: bold;
      font-size: 18px;
    }
    .movie-year {
      font-size: 14px;
      color: #888;
    }

    #detail-page {
      display: none;
      padding: 20px;
      max-width: 800px;
      margin: auto;
      background: white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
      border-radius: 10px;
    }

    #detail-page img {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 20px;
    }

    #back-button {
      margin-top: 20px;
      padding: 10px 20px;
      background: #002147;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

  </style>
</head>
<body>
  <header>
    <h1>名偵探柯南電影特輯</h1>
  </header>

  <div id="search-bar">
    <input type="text" id="search-input" placeholder="輸入電影名稱或關鍵字搜尋...">
  </div>

  <div id="movie-list" class="movies"></div>

  <div id="detail-page">
    <img id="detail-image" src="" alt="電影圖">
    <h2 id="detail-title"></h2>
    <p id="detail-year"></p>
    <p id="detail-desc"></p>
    <button id="back-button">← 返回主畫面</button>
  </div>

  <script>
    const movies = [
      {
        title: "引爆摩天樓",
        year: "1997",
        desc: "柯南首部劇場版，一場與時間賽跑的爆炸危機。",
        image: "https://upload.wikimedia.org/wikipedia/zh/7/7e/Detective_Conan_The_Time-Bombed_Skyscraper.jpg"
      },
      {
        title: "迷宮的十字路",
        year: "2003",
        desc: "前往京都的旅程中，揭開古老之謎與武士的過去。",
        image: "https://upload.wikimedia.org/wikipedia/zh/2/2b/Detective_Conan_Crossroad_in_the_Ancient_Capital.jpg"
      },
      {
        title: "零的執行人",
        year: "2018",
        desc: "公安降谷零登場，牽扯政治與陰謀的高智商對決。",
        image: "https://upload.wikimedia.org/wikipedia/zh/e/ed/Detective_Conan_Zero_the_Enforcer.jpg"
      }
    ];

    const movieList = document.getElementById("movie-list");
    const searchInput = document.getElementById("search-input");
    const detailPage = document.getElementById("detail-page");

    function renderMovies(data) {
      movieList.innerHTML = '';
      data.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
          <img src="${movie.image}" alt="${movie.title}">
          <div class="movie-info">
            <div class="movie-title">${movie.title}</div>
            <div class="movie-year">${movie.year}</div>
            <p>${movie.desc}</p>
          </div>
        `;
        card.addEventListener('click', () => showDetail(movie));
        movieList.appendChild(card);
      });
    }

    function showDetail(movie) {
      detailPage.style.display = 'block';
      movieList.style.display = 'none';
      document.getElementById("search-bar").style.display = "none";

      document.getElementById("detail-image").src = movie.image;
      document.getElementById("detail-title").textContent = movie.title;
      document.getElementById("detail-year").textContent = movie.year;
      document.getElementById("detail-desc").textContent = movie.desc;
    }

    document.getElementById("back-button").addEventListener('click', () => {
      detailPage.style.display = 'none';
      movieList.style.display = 'grid';
      document.getElementById("search-bar").style.display = "block";
    });

    searchInput.addEventListener('input', () => {
      const keyword = searchInput.value.toLowerCase();
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(keyword) ||
        movie.desc.toLowerCase().includes(keyword)
      );
      renderMovies(filtered);
    });

    // 初始顯示全部電影
    renderMovies(movies);
  </script>
</body>
</html>

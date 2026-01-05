---
title: "Habits"
permalink: /habits/
author_profile: true
---

{% include base_path %}

<style>
.habits-card-container {
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  margin-top: 1em;
}

.habits-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1em 1.2em;
  transition: box-shadow 0.3s ease;
}

.habits-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.habits-card details {
  width: 100%;
}

.habits-card summary {
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 0;
  color: #333;
  border-bottom: 2px solid #1976d2;
  padding-bottom: 0.3em;
  cursor: pointer;
  list-style: none;
  position: relative;
  padding-right: 2em;
  user-select: none;
}

.habits-card summary::-webkit-details-marker {
  display: none;
}

.habits-card summary::before {
  content: '▶';
  position: absolute;
  right: 0;
  color: #1976d2;
  font-size: 0.8em;
  transition: transform 0.3s ease;
  top: 50%;
  transform: translateY(-50%);
}

.habits-card details[open] summary::before {
  transform: translateY(-50%) rotate(90deg);
}

.habits-card details[open] summary {
  margin-bottom: 0.8em;
}

.habits-card-content {
  color: #555;
  line-height: 1.6;
}

.habits-card-content ul {
  margin: 0;
  padding-left: 1.5em;
}

.habits-card-content li {
  margin-bottom: 0.3em;
}

.painting-image-container {
  display: flex;
  gap: 1em;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow-x: auto;
}

.painting-image-item {
  flex: 0 0 auto;
  text-align: center;
  cursor: pointer;
  min-width: 200px;
}

.painting-image-item img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.painting-image-item img:hover {
  transform: scale(1.05);
}

/* Modal for enlarged image */
.painting-modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  cursor: pointer;
}

.painting-modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.painting-modal-close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}

.painting-modal-close:hover {
  color: #fff;
}

@media (max-width: 768px) {
  .habits-card {
    padding: 0.8em 1em;
  }
  
  .painting-image-item {
    min-width: 150px;
  }
  
  .painting-image-item img {
    width: 150px;
    height: 150px;
  }
}
</style>

Apart from academic research, I have some habits to relax myself and get energy from daily life!
Let's check if you have the same habits with me:

<div class="habits-card-container">
  
  <div class="habits-card">
    <details open>
      <summary>Movies</summary>
      <div class="habits-card-content">
        <p style="margin-bottom: 1em; font-weight: 500;">I enjoy fantastic stories in different types of movies. Here are some of my favorite movies:</p>
        <div style="display: flex; gap: 1em; flex-wrap: nowrap; justify-content: flex-start; overflow-x: auto;">
          <div style="flex: 0 0 auto; text-align: center; min-width: 120px;">
            <a href="https://www.imdb.com/title/tt1037850" target="_blank" rel="noopener noreferrer" style="display: inline-block;">
              <img src="/images/secret-2007-poster.jpg" alt="Secret (2007)" style="width: 120px; height: 180px; object-fit: cover; border-radius: 4px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            </a>
          </div>
          <div style="flex: 0 0 auto; text-align: center; min-width: 120px;">
            <a href="https://www.imdb.com/title/tt0133093" target="_blank" rel="noopener noreferrer" style="display: inline-block;">
              <img src="/images/The-Matrix-1999.jpg" alt="The Matrix 1-3" style="width: 120px; height: 180px; object-fit: cover; border-radius: 4px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            </a>
          </div>
          <div style="flex: 0 0 auto; text-align: center; min-width: 120px;">
            <a href="https://www.imdb.com/title/tt0111786" target="_blank" rel="noopener noreferrer" style="display: inline-block;">
              <img src="/images/In-the-heat-of-the-sun-1994.jpg" alt="In the Heat of the Sun (1994)" style="width: 120px; height: 180px; object-fit: cover; border-radius: 4px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            </a>
          </div>
          <div style="flex: 0 0 auto; text-align: center; min-width: 120px;">
            <a href="https://www.imdb.com/title/tt9581076" target="_blank" rel="noopener noreferrer" style="display: inline-block;">
              <img src="/images/So-Long-My-Son-2019-poster.jpg" alt="So Long, My Son (2019)" style="width: 120px; height: 180px; object-fit: cover; border-radius: 4px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            </a>
          </div>
          <div style="flex: 0 0 auto; text-align: center; min-width: 120px;">
            <a href="https://www.imdb.com/title/tt0110080" target="_blank" rel="noopener noreferrer" style="display: inline-block;">
              <img src="/images/love-letter-1995.jpg" alt="Love Letter (1995)" style="width: 120px; height: 180px; object-fit: cover; border-radius: 4px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            </a>
          </div>
          <div style="flex: 0 0 auto; text-align: center; min-width: 120px;">
            <a href="https://www.imdb.com/title/tt6751668" target="_blank" rel="noopener noreferrer" style="display: inline-block;">
              <img src="/images/Parasite-2019.png" alt="Parasite (2019)" style="width: 120px; height: 180px; object-fit: cover; border-radius: 4px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            </a>
          </div>
          <div style="flex: 0 0 auto; text-align: center; min-width: 120px;">
            <a href="https://www.imdb.com/title/tt1375666" target="_blank" rel="noopener noreferrer" style="display: inline-block;">
              <img src="/images/Inception-2010.jpg" alt="Inception (2010)" style="width: 120px; height: 180px; object-fit: cover; border-radius: 4px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            </a>
          </div>
        </div>
      </div>
    </details>
  </div>

  <div class="habits-card">
    <details>
      <summary>Painting</summary>
      <div class="habits-card-content">
        <p style="margin-bottom: 1em; font-weight: 500;">I enjoy drawing illustrations of cute subjects.</p>
        <div class="painting-image-container">
          <div class="painting-image-item" onclick="openPaintingModal('/images/painting_1.jpg')">
            <img src="/images/painting_1.jpg" alt="Painting 1">
          </div>
          <div class="painting-image-item" onclick="openPaintingModal('/images/painting_2.jpg')">
            <img src="/images/painting_2.jpg" alt="Painting 2">
          </div>
          <div class="painting-image-item" onclick="openPaintingModal('/images/painting_3.jpg')">
            <img src="/images/painting_3.jpg" alt="Painting 3">
          </div>
          <div class="painting-image-item" onclick="openPaintingModal('/images/painting_4.jpg')">
            <img src="/images/painting_4.jpg" alt="Painting 4">
          </div>
        </div>
      </div>
      
      <!-- Modal for enlarged image -->
      <div id="paintingModal" class="painting-modal" onclick="closePaintingModal()">
        <span class="painting-modal-close">&times;</span>
        <img class="painting-modal-content" id="paintingModalImg" src="" alt="Enlarged painting">
      </div>
      
      <script>
      function openPaintingModal(imgSrc) {
        var modal = document.getElementById("paintingModal");
        var modalImg = document.getElementById("paintingModalImg");
        modal.style.display = "block";
        modalImg.src = imgSrc;
      }
      
      function closePaintingModal() {
        var modal = document.getElementById("paintingModal");
        modal.style.display = "none";
      }
      
      // Close modal when clicking outside the image
      window.onclick = function(event) {
        var modal = document.getElementById("paintingModal");
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
      
      // Close modal with Escape key
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
          closePaintingModal();
        }
      });
      </script>
    </details>
  </div>

  <div class="habits-card">
    <details>
      <summary>E-Games</summary>
      <div class="habits-card-content">
        <div style="display: flex; gap: 2em; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 250px;">
            <p style="font-weight: 600; margin-bottom: 0.8em; color: #333;">Computer Games:</p>
            <div style="display: flex; flex-direction: column; gap: 0.5em;">
              <div style="display: flex; align-items: center; gap: 0.8em;">
                <img src="/images/lol-logo.png" alt="League of Legends" style="width: 40px; height: 40px; object-fit: contain; border-radius: 4px;" onerror="this.style.display='none'">
                <span>League of Legends</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.8em;">
                <img src="/images/Asphalt_Legends_logo.png" alt="Asphalt Legends" style="width: 40px; height: 40px; object-fit: contain; border-radius: 4px;" onerror="this.style.display='none'">
                <span>Asphalt Legends</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.8em;">
                <img src="/images/it-takes-two-logo.png" alt="It Takes Two" style="width: 40px; height: 40px; object-fit: contain; border-radius: 4px;" onerror="this.style.display='none'">
                <span>It Takes Two</span>
              </div>
            </div>
          </div>
          <div style="flex: 1; min-width: 250px;">
            <p style="font-weight: 600; margin-bottom: 0.8em; color: #333;">Mobile Games:</p>
            <div style="display: flex; flex-direction: column; gap: 0.5em;">
              <div style="display: flex; align-items: center; gap: 0.8em;">
                <img src="/images/Honor_of_Kings_Logo.png" alt="Honor of Kings" style="width: 40px; height: 40px; object-fit: contain; border-radius: 4px;" onerror="this.style.display='none'">
                <span>Honor of Kings</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.8em;">
                <img src="/images/sky-children-logo.png" alt="Sky: Children of the Light" style="width: 40px; height: 40px; object-fit: contain; border-radius: 4px; background-color: transparent;">
                <span>Sky: Children of the Light</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.8em;">
                <img src="/images/wild-rift-logo.png" alt="League of Legends: Wild Rift" style="width: 40px; height: 40px; object-fit: contain; border-radius: 4px;" onerror="this.style.display='none'">
                <span>League of Legends: Wild Rift</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </details>
  </div>

  <div class="habits-card">
    <details>
      <summary>Sports</summary>
      <div class="habits-card-content">
        <div style="display: flex; gap: 2em; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 200px;">
            <div style="display: flex; flex-direction: column; gap: 0.5em;">
              <div style="display: flex; align-items: center; gap: 0.8em;">
                <i class="fas fa-table-tennis" style="font-size: 24px; color: #ff6b6b; width: 40px; text-align: center;"></i>
                <span>Ping-pong</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.8em;">
                <i class="fas fa-basketball-ball" style="font-size: 24px; color: #ffa500; width: 40px; text-align: center;"></i>
                <span>Basketball</span>
              </div>
            </div>
          </div>
          <div style="flex: 1; min-width: 200px;">
            <div style="display: flex; flex-direction: column; gap: 0.5em;">
              <div style="display: flex; align-items: center; gap: 0.8em;">
                <span style="font-size: 24px; color: #4ecdc4; width: 40px; text-align: center; display: inline-block;">🏸</span>
                <span>Badminton</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.8em;">
                <i class="fas fa-swimmer" style="font-size: 24px; color: #45b7d1; width: 40px; text-align: center;"></i>
                <span>Swimming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </details>
  </div>

</div>

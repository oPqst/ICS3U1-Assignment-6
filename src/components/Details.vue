<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const props = defineProps({ movieId: { type: Number, required: true } });
const response = ref(null);

onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/movie/${props.movieId}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`);
});
</script>

<template>
  <div v-if="response" class="movie-detail">
    <div class="movie-poster-container">
      <img :src="`https://image.tmdb.org/t/p/w500${response.data.poster_path}`" alt="Movie Poster"
        class="movie-poster" />
      <p class="tag-line">{{ response.data.tagline }}</p>
    </div>
    <div class="movie-details">
      <h1 class="movie-title">{{ response.data.original_title }}</h1>
      <p class="movie-overview">{{ response.data.overview }}</p>
      <p class="movie-release-date">Release Date: 📆 {{ response.data.release_date }}</p>
      <p class="origin-country">Origin Country: 🗺️ {{ response.data.origin_country[0] }}</p>
      <p class="vote-average">Vote Average: ⭐ {{ response.data.vote_average }}</p>
      <a class="movie-site" :href="response.data.homepage" target="_blank">Official Movie Site</a>
    </div>
  </div>
  <div v-if="response" class="trailers">
    <h2 class="trailers-title">Trailers</h2>
    <div class="trailers-container">
      <div v-for="trailer in response.data.videos.results" :key="trailer.id" class="trailer-tile">
        <a :href="`https://www.youtube.com/watch?v=${trailer.key}`" target="_blank">
          <img :src="`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`" alt="Trailer"
            class="trailer-thumbnail" /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.movie-detail {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  margin: 40px auto;
  padding: 40px;
  background: linear-gradient(to bottom, #424242, #212121);
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  color: #f5f5f5;
  font-family: 'Bebas Neue';
}

.movie-poster-container {
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.movie-poster {
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
}

.tag-line {
  font-style: italic;
  color: #ffc107;
  font-size: 1.4rem;
  text-align: center;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
}

.movie-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.movie-title {
  font-family: 'Monoton', cursive;
  color: #ffc107;
  font-size: 3rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
}

.movie-overview {
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: justify;
  color: #e0e0e0;
}

.movie-release-date,
.origin-country,
.vote-average {
  font-size: 1.1rem;
  color: #ffcc00;
}

.movie-site {
  font-size: 1.1rem;
  width: fit-content;
  display: inline-block;
  background: #ffc107;
  color: black;
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.movie-site:hover {
  background: #ffcc33;
  color: white;
  transform: translateY(-2px);
}

.trailers {
  margin-top: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}

.trailers-title {
  font-family: 'Monoton', cursive;
  text-align: center;
  color: #ffc107;
  font-size: 2.5rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
  margin-bottom: 20px;
}

.trailers-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.trailer-tile {
  width: 180px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s, box-shadow 0.3s;
}

.trailer-tile:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7);
}

.trailer-thumbnail {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 15px;
}
</style>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useStore } from '../store';
import { useRouter } from 'vue-router';

const props = defineProps(["genres"]);
const router = useRouter();
const store = useStore();
const selectedGenre = ref(12);
const response = ref(null);

async function getMovieByGenre() {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${selectedGenre.value}`);
}

function getMovieDetails(id) {
  router.push(`/movies/${id}`);
}

onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${selectedGenre.value}`);
});
</script>

<template>
  <div class="genre-heading">
    <h1>🎬 Featured Movies by Genre 🎥</h1>
  </div>

  <div class="genre-selector">
    <select v-model="selectedGenre" @change="getMovieByGenre">
      <option v-for="genre of genres" :value="genre.id">{{ genre.genreName }}</option>
    </select>
  </div>

  <div class="movie-container">
    <div v-if="response" v-for="movie in response.data.results" :key="movie.id" class="movie-item"
      @click="getMovieDetails(movie.id)">
      <div class="movie-banners">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" :alt="movie.title" />
      </div>
      <div class="movie-description">
        <h3>{{ movie.title }}</h3>
        <p>Release Date: {{ movie.release_date }}</p>
        <button @click.stop="store.cart.set(movie.id, {
          title: movie.original_title,
          url: movie.poster_path,
          overview: movie.overview,
          release_date: movie.release_date,
          vote_average: movie.vote_average
        })" class="buy-button">
          {{ store.cart.has(movie.id) ? 'Added!' : 'Buy!' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.genre-heading {
  font-family: 'Monoton', cursive;
  color: white;
  background: linear-gradient(to bottom, #323232, rgba(0, 0, 0, 0.639));
  text-align: center;
  padding: 30px;
}

.genre-selector {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  width: 100%;
}

.genre-selector select option {
  background-color: #ffcc00;
  color: black;
}

.genre-selector select {
  padding: 12px;
  font-size: 1.1rem;
  border-radius: 5px;
  background-color: #ffcc002f;
  color: white;
  border: 2px solid #ffcc00;
  text-align: center;
  width: 250px;
  transition: background-color 0.3s, border 0.3s;
}

.genre-selector select:hover {
  background-color: #ffcc002f;
}

.movie-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}

.movie-item {
  margin: 15px;
  border-radius: 20px;
  width: 30%;
  height: 100%;
  overflow: hidden;
  transition: 0.3s;
  border: 3px solid #ffc1078d;
  cursor: pointer;
}

.movie-banners img {
  width: 100%;
  height: 500px;
  transition: 0.3s;
}

.movie-item:hover {
  transform: scale(1.03);
}

.movie-banners img:hover {
  filter: brightness(50%);
}

.movie-description {
  font-family: 'Oswald', sans-serif;
  padding: 20px;
  color: white;
  background-color: rgba(28, 20, 20, 0.731);
  text-align: center;
  font-family: 'Bebas Neue';
}

.buy-button {
  margin-top: 10px;
  background-color: #ffcc00;
  padding: 8px 20px;
  border-radius: 5px;
  color: black;
  border: none;
  font-family: 'Bebas Neue', sans-serif;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.2s;
}

.buy-button:hover {
  background-color: #ffc107;
  transform: translateY(-2px);
}
</style>

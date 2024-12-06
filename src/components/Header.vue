<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="navbar">
    <RouterLink to="/" class="logo-link"><img src="/src/assets/logo.png" class="logo" /></RouterLink>
    <ul>
      <li>
        <RouterLink to="/movies">New Movies</RouterLink>
      </li>
      <li><a href="">TV Shows</a></li>
      <li><a href="">Actors</a></li>
      <li>
        <RouterLink to="/register" class="su-button">SIGN UP</RouterLink>
      </li>
      <li>
        <RouterLink to="/login" class="su-button">SIGN IN</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.navbar {
  background-color: #1c1c1c;
  font-family: 'Roboto', sans-serif;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar ul {
  list-style-type: none;
  display: flex;
  align-items: center;
}

.navbar li {
  margin: 0 10px;
  font-weight: bold;
}

.navbar a {
  text-decoration: none;
  font-size: 16px;
  transition: 0.3s;
  color: white;
}

.navbar a:hover {
  color: #FFD700;
}

.logo {
  width: 150px;
  height: auto;
}

.su-button {
  background-color: transparent;
  color: white;
  border: 2px solid #E6B800;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;
  border-radius: 30px;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}

.su-button:hover {
  background: #E6B800;
  font-weight: bold;
  transform: scale(1.2);
  color: white;
}
</style>
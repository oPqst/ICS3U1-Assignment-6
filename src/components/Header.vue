<script setup>
import { RouterLink } from 'vue-router';
import { useStore } from '../store';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const logout = () => {
  router.push('/');
  store.$reset();
};
</script>

<template>
  <div class="navbar">
    <RouterLink to="/" class="logo-link">
      <img src="/src/assets/logo.png" class="logo" />
    </RouterLink>
    <ul>
      <div v-if="store.email">
        <li class="welcome-message">
          Welcome, {{ store.firstName }}!
        </li>
      </div>
      <li>
        <RouterLink to="/movies">New Movies</RouterLink>
      </li>
      <li><a href="">TV Shows</a></li>
      <li><a href="">Actors</a></li>

      <li v-if="!store.email">
        <RouterLink to="/register" class="su-button">SIGN UP</RouterLink>
      </li>
      <li v-if="!store.email">
        <RouterLink to="/login" class="su-button">SIGN IN</RouterLink>
      </li>

      <div v-else="" class="user-options">
        <li>
          <RouterLink to="/cart" class="su-button">Cart</RouterLink>
        </li>
        <li>
          <RouterLink to="/settings" class="su-button">Settings</RouterLink>
        </li>
        <li>
          <button @click="logout" class="su-button">Logout</button>
        </li>
      </div>
    </ul>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron');

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

.user-options {
  display: flex;
  align-items: center;

}

.welcome-message {
  font-size: 25px;
  color: #E6B800;
  margin-right: 20px;
  font-family: 'Orbitron', sans-serif;
}
</style>

<script setup>
import { useStore } from '../store';

const store = useStore();
</script>

<template>
  <div class="cart-container">
    <div class="cart">
      <h1 class="cart-title">Shopping Cart</h1>
      <div v-if="store.cart.size > 0" class="cart-items">
        <div v-for="([key, value]) in store.cart" :key="key" class="item">
          <img :src="`https://image.tmdb.org/t/p/w500${value.url}`" class="item-poster" />
          <div class="item-details">
            <h2 class="item-title">{{ value.title }}</h2>
            <p class="item-description">{{ value.overview }}</p>
            <p class="item-release-date">Release Date: 📆 {{ value.release_date }}</p>
            <p class="item-vote-average">Vote Average: ⭐ {{ value.vote_average }}</p>
            <button @click="store.cart.delete(key)" class="remove-button">Remove</button>
          </div>
        </div>
      </div>
      <div v-else class="empty-cart-message">
        Your cart is empty.
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.cart-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.cart {
  padding: 30px;
  background: #121212;
  color: #fff;
  font-family: 'Bebas Neue', sans-serif;
  flex-grow: 1;
}

.cart-title {
  font-family: 'Monoton', cursive;
  color: #ffcc00;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: #333;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
}

.item:hover {
  transform: scale(1.025);
}

.item-poster {
  width: 240px;
  height: 360px;
  border-radius: 8px;
  object-fit: cover;
}

.item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item-title {
  font-size: 1.8rem;
  color: #e0e0e0;
}

.item-description {
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 10px;
}

.item-release-date,
.item-origin-country,
.item-vote-average {
  font-size: 1rem;
  color: #e0e0e0;
}

.remove-button {
  background-color: #ffcc00;
  padding: 8px 25px;
  border-radius: 5px;
  color: #000;
  border: none;
  font-family: 'Bebas Neue', sans-serif;
  cursor: pointer;
  display: inline-block;
  width: fit-content;
  font-weight: bold;
  font-size: 1.3rem;
  transition: background-color 0.3s, transform 0.2s;
}

.remove-button:hover {
  background-color: #ffb700;
  transform: translateY(-2px);
}

.empty-cart-message {
  font-size: 1.5rem;
  color: #e0e0e0;
  text-align: center;
  margin-top: 20px;
}
</style>

<script setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import { useStore } from '../store';
import { ref } from 'vue';

const store = useStore();
const firstName = ref(store.firstName ? store.firstName : '');
const lastName = ref(store.lastName ? store.lastName : '');

const saveChanges = () => {
  store.firstName = firstName.value;
  store.lastName = lastName.value;
  alert('Changes saved!');
};
</script>

<template>
  <Header />
  <div class="hero">
    <div class="form-container">
      <h2>⚙️ Settings ⚙️</h2>
      <div class="user-info">
        <label for="firstName">Change First Name:</label>
        <input v-model="firstName" id="firstName" type="text" placeholder="First Name" class="input-field" />
        <label for="lastName">Change Last Name:</label>
        <input v-model="lastName" id="lastName" type="text" placeholder="Last Name" class="input-field" />
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="store.email" readonly placeholder="Email" class="input-field" />
        <button @click="saveChanges()" class="button login">Save Changes</button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/hero.jpg);
  height: 90vh;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  opacity: 70%;
  color: white;
}

.form-container {
  background: rgba(28, 20, 20, 0.8);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.7);
  text-align: center;
  font-size: 18px;
  width: 90%;
  max-width: 600px;
  font-family: 'Bebas Neue';
  color: white;
}

.form-container h2 {
  font-family: 'Bebas Neue';
  color: #FFD700;
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 10px 15px;
  margin: 10px 0;
  border: 2px solid #E6B800;
  border-radius: 8px;
  background: transparent;
  color: white;
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;
}

.input-field::placeholder {
  color: #B0B0B0;
}

.input-field:focus {
  outline: none;
  border-color: #FFD700;
}

.input-field:disabled {
  background-color: rgba(0, 0, 0, 0.3);
}

.button.login {
  background-color: #E6B800;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 20px;
  transition: 0.3s;
  cursor: pointer;
  width: 100%;
  font-family: 'Bebas Neue';
}

.button.login:hover {
  background-color: #FFD700;
  color: black;
  transform: scale(1.1);
}
</style>

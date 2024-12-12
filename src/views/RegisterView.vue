<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { ref } from 'vue';
import { useStore } from '../store';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const rePassword = ref('');

const validateForm = () => {
  if (password.value !== rePassword.value) {
    return 'Passwords do not match.';
  }
};

const handleSubmit = (event) => {
  event.preventDefault();

  const errorMessage = validateForm();
  if (errorMessage) {
    alert(errorMessage); 
    return;
  }

  else{

    store.firstName = firstName.value,
    store.lastName = lastName.value,
    store.email = email.value,
    store.password = password.value,
    router.push('/movies');
  }

  };

</script>

<template>
  <Header />
  <div class="hero">
    <div class="form-container">
      <h2>Create an Account</h2>
      <form @submit="handleSubmit">
        <input v-model="firstName" type="text" placeholder="First Name" class="input-field" required>
        <input v-model="lastName" type="text" placeholder="Last Name" class="input-field" required>
        <input v-model="email" type="email" placeholder="Email" class="input-field" required>
        <input v-model="password" type="password" placeholder="Password" class="input-field" required>
        <input v-model="rePassword" type="password" placeholder="Re-enter Password" class="input-field" required>
        <button type="submit" class="button register">Register</button>
      </form>
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
  width: 90%;
  max-width: 400px;
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
  font-family: 'Bebas Neue';
}

.input-field::placeholder {
  color: #B0B0B0;
}

.input-field:focus {
  outline: none;
  border-color: #FFD700;
}

.button.register {
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

.button.register:hover {
  background-color: #FFD700;
  color: black;
  transform: scale(1.1);
}
</style>

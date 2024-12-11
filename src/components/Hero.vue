<template>
  <div class="hero">
    <div class="content">
      <p>🎞️ STREAM FLIX 🎞️</p>
      <h1>Watch <strong>FREE</strong> Movies, TV Shows, & More.</h1>
      <h2>Transformers - Press to WATCH NOW 🍿</h2>
      <button class="watch-btn" type="button">WATCH NOW!</button>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/src/assets/hero.jpg);
  height: 90vh;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content {
  max-width: 60%;
  color: white;
  position: relative;
}

.content p {
  font-size: 40px;
  font-weight: 900;
  color: #E6B800;
}

.content h1 {
  font-size: 50px;
  line-height: 1.2;
}

strong {
  color: #E6B800;
  font-weight: 800;
}

.watch-btn {
  margin-top: 2rem;
  border: 2px solid #E6B800;
  color: #fff;
  font-size: 16px;
  padding: 15px 40px;
  font-weight: bold;
  background-color: transparent;
  border-radius: 20px;
  transition: 0.4s;
}

.watch-btn:hover {
  background: #E6B800;
  transform: scale(1.2);
}
</style>
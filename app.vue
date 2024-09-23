<template>
  <section class="relative bg-cover bg-center align-middle m-auto min-h-screen flex items-center justify-center" style="background-image: url('https://source.unsplash.com/random/1600x900');">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black opacity-60"></div>

    <div class="relative text-center max-w-3xl px-6 py-10 z-10">
      <!-- Heading -->
      <h1 class="text-7xl md:text-9xl font-extrabold text-white mb-6 animate-fade-in-down drop-shadow-lg leading-tight">
        Welcome to Nuxt.js
      </h1>
      <!-- Subtitle -->
      <p class="text-xl md:text-3xl text-gray-200 opacity-90 mb-8 animate-fade-in drop-shadow-md">
        Build stunning web apps with Nuxt.js and Tailwind CSS effortlessly.
      </p>
      <!-- Button -->
      <button class="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-4 px-12 rounded-full shadow-xl hover:from-blue-700 hover:to-purple-800 transition duration-300 transform hover:scale-110 animate-fade-in-up focus:outline-none focus:ring-4 focus:ring-blue-300">
        Get Started
      </button>
    </div>
  </section>
</template>

<script setup>
// No additional logic required for this example
</script>

<style>
@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in-down {
  animation: fade-in-down 1.2s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 1.2s ease-out;
}

.animate-fade-in {
  animation: fade-in 1.2s ease-out;
}

/* Additional style enhancements */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  font-family: 'Inter', sans-serif;
}

button:focus {
  outline: none;
}
</style>

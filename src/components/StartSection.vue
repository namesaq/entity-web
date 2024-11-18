<script setup>

</script>

<template>
  <section>
    <div class="bg-wrapper">
      <img src="../assets/images/image_vadim_2.png" alt="Example Image" class="background-image">
      <div class="text-wrapper">
        <h1>LOOK ALIKE</h1>
        <h2>Фотограф</h2>
      </div>
    </div>

  </section>
</template>


<style scoped>
section {
  width: 100%;
  height: 100vh; /* Занимаем всю высоту экрана */
}


.bg-wrapper {
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.bg-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-wrapper .text-wrapper {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 80px;
  font-weight: 800;
}

h2 {
  font-size: 40px;
  font-weight: 600;
}

.hero {
  flex: 1; /* Хедер занимает часть пространства */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.4); /* Полупрозрачный фон, если текст плохо читается */
}

.images {
  flex: 1; /* Картинка или другая секция занимает оставшуюся часть */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; /* Расстояние между изображениями */
}

.images img {
  max-width: 100%;
  height: auto;
  object-fit: cover; /* Масштабируем изображение, чтобы оно хорошо вписывалось */
}
</style>

<template>
  <section class="portfolio">
    <div class="container">
      <h2>Портфолио</h2>
      <div class="portfolio-gallery">
        <div class="portfolio-item">
          <img src="../assets/images/wedding.png" alt="Свадебная фотосессия">
          <p>Свадебная фотосессия</p>
        </div>
        <div class="portfolio-item">
          <img src="../assets/images/portrait.png" alt="Портретная фотосессия">
          <p>Портретная фотосессия</p>
        </div>
        <div class="portfolio-item">
          <img src="../assets/images/nature.png" alt="Фотосессия на природе">
          <p>Фотосессия на природе</p>
        </div>
        <div class="portfolio-item">
          <img src="../assets/images/Creative_Portrait.png" alt="Творческая портретная фотосессия">
          <p>Творческая портретная фотосессия</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio {
  padding: 40px;
  background-color: #f9f9f9;
  display: flex;          /* Используем flexbox */
  flex-direction: column; /* Выстраиваем все элементы в колонку */
  align-items: center;    /* Центрируем все элементы по горизонтали */
  justify-content: center; /* Центрируем по вертикали */
  text-align: center;      /* Центрируем текст */
}

.portfolio h2 {
  font-size: 32px;
  margin-bottom: 20px;
}


.portfolio-gallery {
  display: flex;
  gap: 20px; /* Устанавливаем промежуток между элементами */
}

.portfolio-item {
  width: calc(50% - 15px); /* Задаем ширину элемента 50% от родительского контейнера с учетом промежутка */
  text-align: center;
}

.portfolio-item img {
  width: 40vh; /* Картинки занимают 100% ширины своего родителя */
  height: 40vh; /* Фиксированная высота изображения */
  object-fit: cover; /* Картинка будет покрывать весь блок без искажения */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.portfolio-item p {
  margin-top: 10px;
  font-size: 30px;
  color: #333;
}

.portfolio-item img:hover {
  transform: scale(1.05);
}


</style>

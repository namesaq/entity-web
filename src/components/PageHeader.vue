<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Состояние класса хедера
const headerContentClass = ref("header-content--regular");

// Функция для изменения класса хедера
const changeHeaderContentClass = () => {
  if (window.scrollY > 50) {
    headerContentClass.value = "header-content--scrolled";
  } else {
    headerContentClass.value = "header-content--regular";
  }
};

// Добавление обработчика scroll при монтировании компонента
onMounted(() => {
  window.addEventListener("scroll", changeHeaderContentClass);
});

// Удаление обработчика scroll при размонтировании компонента
onUnmounted(() => {
  window.removeEventListener("scroll", changeHeaderContentClass);
});
</script>

<template>
  <header>
    <div :class="headerContentClass">
      <!-- Социальные ссылки -->
      <div class="social-links">
        <a href="https://vk.com" target="_blank" class="social-link" aria-label="ВКонтакте">
          <img src=../assets/icons/vk.svg alt="ВКонтакте" />
        </a>
        <a href="https://t.me/Coconutanita" target="_blank" class="social-link" aria-label="Telegram">
          <img src="../assets/icons/telegram.svg" alt="Telegram" />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" class="social-link" aria-label="WhatsApp">
          <img src="../assets/icons/whatsapp.svg" alt="WhatsApp" />
        </a>
      </div>

      <!-- Навигация -->
      <nav class="nav-wrapper">
        <router-link to="/portfolio" class="nav-item">Портфолио</router-link>
        <router-link to="/services" class="nav-item">Услуги</router-link>
        <router-link to="/about" class="nav-item">О нас</router-link>
        <router-link to="/contacts" class="nav-item">Контакты</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Хедер */
header {
  position: fixed;
  top: 0;
  width: 100%;
  background: transparent;
  z-index: 20;
}

.header-content--regular {
  background: transparent;
  transition: background-color 0.4s ease;
}

.header-content--scrolled {
  background: white;
  transition: background-color 0.4s ease;
}

/* Контент хедера */
.header-content--regular, .header-content--scrolled {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  color: #000000;
  padding: 20px;
  z-index: 223423423424;
}

.social-links {
  position: absolute;
  right: 20px;
  top: 10px;
  display: flex;
  gap: 8px;
}

/* Навигация */
.nav-wrapper {
  top: 20px;
  display: flex;
  gap: 20px;
  justify-content: center;
}

/* Навигационные ссылки */
.nav-item {
  font-size: 25px; /* Размер шрифта */
  font-weight: 600;
  color: #000000;
  text-decoration: none;
  position: relative; /* Для правильного позиционирования псевдо-элемента */
  padding-bottom: 5px; /* Небольшой отступ снизу для линии */
  transition: color 0.3s;
}

/* Псевдо-элемент для белой линии */
.nav-item::after {
  content: ''; /* Создаем пустой элемент */
  position: absolute; /* Позиционируем его относительно родителя */
  bottom: 0; /* Помещаем внизу */
  left: 0; /* Начинаем от левого края */
  width: 0; /* Начальная ширина линии (невидима) */
  height: 2px; /* Толщина линии */
  background-color: rgba(152, 145, 145, 0.68); /* Белый цвет линии */
  transition: width 0.5s ease-in-out; /* Анимация увеличения ширины */
}

/* При наведении на ссылку линия расширяется */
.nav-item:hover::after {
  width: 100%; /* Линия растягивается на всю ширину ссылки */
}

.nav-item:hover {
  color: #655e5d; /* Цвет текста при наведении */
}
</style>

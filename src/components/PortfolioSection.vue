<template>
  <section class="portfolio">
    <div class="container">
      <h2>Портфолио</h2>
      <div class="portfolio-gallery">
        <div class="portfolio-item" v-for="(item, index) in slides" :key="index">
          <div class="image-wrapper">
            <button class="arrow left-arrow" @click="prevSlide(index)">‹</button>
            <img :src="item.images[item.current]" :alt="item.alt">
            <button class="arrow right-arrow" @click="nextSlide(index)">›</button>
          </div>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          text: "Свадебная фотосессия",
          alt: "Свадебная фотосессия",
          images: [
            "../assets/images/wedding.png",
            "../assets/images/wedding2.png",
            "../assets/images/wedding3.png",
          ],
          current: 0,
        },
        {
          text: "Портретная фотосессия",
          alt: "Портретная фотосессия",
          images: [
            "../assets/images/portrait.png",
            "../assets/images/portrait2.png",
            "../assets/images/portrait3.png",
          ],
          current: 0,
        },
        {
          text: "Фотосессия на природе",
          alt: "Фотосессия на природе",
          images: [
            "../assets/images/nature.png",
            "../assets/images/nature2.png",
            "../assets/images/nature3.png",
          ],
          current: 0,
        },
        {
          text: "Творческая портретная фотосессия",
          alt: "Творческая портретная фотосессия",
          images: [
            "../assets/images/Creative_Portrait1.png",
            "../assets/images/Creative_Portrait2.png",
            "../assets/images/Creative_Portrait3.png",
          ],
          current: 0,
        },
      ],
    };
  },
  methods: {
    nextSlide(index) {
      const slide = this.slides[index];
      slide.current = (slide.current + 1) % slide.images.length;
    },
    prevSlide(index) {
      const slide = this.slides[index];
      slide.current = (slide.current - 1 + slide.images.length) % slide.images.length;
    },
  },
};
</script>

<style scoped>
.portfolio {
  margin-top: 40px;
  background-color: #f9f9f9;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.portfolio h2 {
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;
}

.portfolio-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: center;
}

.portfolio-item {
  width: 350px;
  text-align: center;
}

.image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.portfolio-item img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.portfolio-item img:hover {
  transform: scale(1.1);
}

.portfolio-item p {
  margin-top: 15px;
  font-size: 18px;
  color: #555;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: none;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.arrow:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.left-arrow {
  left: -20px;
}

.right-arrow {
  right: -20px;
}
</style>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import StartSection from "@/components/StartSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
</script>

<template>
  <PageHeader />
  <main>
    <StartSection />
    <PortfolioSection />
  </main>
</template>

<style scoped>
main {
  flex: 1;
}
</style>

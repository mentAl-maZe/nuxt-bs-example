<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-laravel-booking-suedtirol-example
      </h1>
      <h2 class="subtitle">
        Example repo to reproduce integration issue
      </h2>
      <BookingWidget :accommodation-id="9797" :source="587" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import Logo from '@/components/Logo.vue'
import BookingWidget from '@/components/BookingWidget.vue'

@Component({
  components: {
    Logo,
    BookingWidget
  }
})
export default class extends Vue {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
  <div id="app">
    <Navbar v-if="!isHome"/>
    
    <div class="content">
			<main class="content-wrapper">
				<section class="container">
          <router-view></router-view>
        </section>
			</main>
			<Footer v-if="!isHome"/>
		</div>
  </div>
</template>

<script>
import Navbar from '@/layouts/Navbar.vue'
import Footer from '@/layouts/Footer.vue'
export default {
  name: 'app',
  components: { Navbar, Footer },
  computed: {
    isHome() {
      let is_home
      if ( this.$route.name === 'Home' ) {
        is_home = true
      }
      return is_home
    }
  }
}
</script>

<style src="./assets/css/flexboxgrid.min.css"></style>
<style src="./assets/css/siarie.css"></style>

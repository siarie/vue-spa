<template>
  <div class="box text-center">
    <div class="box-wrapper">
      <div class="image-box">
        <img src="@/assets/logo.png" alt="Aspari" />
      </div>
      <div class="text">
        <h2>
          {{ fullname }}
          <br />
          <span>{{ profession }}</span>
        </h2>
      </div>
      <div class="m-1">
        <router-link class="btn btn-default" v-for="(data, index) in frontMenu" :key="index" :to="data.path">{{ data.name }}</router-link>
      </div>
      <hr class="hrline" />
      <div class="links">
        <ul class="social">
          <li v-for="(data, index) in social_link" :key="index">
            <a v-bind:href="data.url" target="_blank">
                {{ data.name }}
              <!-- <i data-feather="facebook">facebook</i> -->
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Vue Single Page Application',
  name: "home",
  data() {
      return {
        fullname: 'Your Name',
        profession: 'Profession',
          social_link: [
              {
                  name  : 'facebook',
                  url   : 'https://facebook.com/'
              },
              {
                  name  : 'twitter',
                  url   : 'https://twitter.com/'
              },
              {
                  name  : 'linkedin',
                  url   : 'https://linkedin.com/'
              },
              {
                  name  : 'github',
                  url   : 'https://github.com/'
              }
          ],

          frontMenu : [
              { name: 'Menu1', path: '/menu1'},
              { name: 'Menu2', path: '/menu2'},
              { name: 'Menu3', path: '/menu3'},
              // { name: 'Friends', path: '/story'}
          ]
      }
  }
};
</script>
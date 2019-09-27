<template>
  <nav class="navbar sticky">
    <div class="container flex">
      <router-link class="brand" :to="'/'">{{ siteTitle }}</router-link>

      <input type="checkbox" class="hidden" id="nav" :checked="checked"/>
      <label for="nav" class="nav-btn">
        <i></i>
        <i></i>
        <i></i>
      </label>
      <div class="nav-wrapper">
        <ul class="nav-list">
          <li class="nav-item" v-for="(data, index) in items" :key="index">
            <router-link class="nav-link" :to="data.path">{{ data.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
			siteTitle: 'Brand',
			checked: false,
      items: [
        { name: "Menu1", path: "/menu1" },
        { name: "Menu2", path: "/menu2" },
        { name: "Menu3", path: "/menu3" }
      ]
    };
  }
};
</script>
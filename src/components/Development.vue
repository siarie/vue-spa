<template>
<div class="row card mt-2">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="header text-center">
            {{ title }}
        </div>
        <div class="body">{{ content }}</div>
        <div class="footer text-center">
            <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" /></a><br />This content is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
        </div>
    </div>
</div>
</template>

<script>
export default {
  title () {
      return `${this.title} - Vue SPA`
  },
  name: "Development",
  data() {
      return {
          title: 'Single Page Application with Vue',
          content: 'This project is under development'
      }
  }
};
</script>
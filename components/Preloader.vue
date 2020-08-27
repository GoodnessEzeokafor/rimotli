<template>
  <transition name="appear" mode="in-out">
    <div v-if="loading" class="loader">
      <img src="~/assets/logo.png" alt="">
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Preloader',
  data: () => ({
    loading: true
  }),
  mounted () {
    setTimeout(() => {
      this.finish()
    }, 500)
  },
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .loader {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    z-index: 980;
    background: url("~assets/auth_bg.png");
  }

  .appear-enter {
    //transform: scaleX(0);
    opacity: 0;
  }

  .appear-enter-active {
    transition: all .5s ease;
  }

  .appear-leave {
  }

  .appear-leave-active {
    //transform: scaleX(0);
    opacity: 0;
    transition: all .5s ease-in-out;
  }
</style>

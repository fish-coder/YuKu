<template>
  <div id="app">
    <!-- <navigation></navigation> -->
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// import Navigation from '@/components/Navigation'
export default {
  name: 'App',
  components: {
    // Navigation
  }
}
</script>

<style lang="less">
body {
  margin: 0px;
  padding: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.el-submenu [class^='fa'] {
  vertical-align: baseline;
  margin-right: 10px;
}

.el-menu-item [class^='fa'] {
  vertical-align: baseline;
  margin-right: 10px;
}

.toolbar {
  background: #f2f2f2;
  padding: 10px;
  margin: 10px 0px;
  .el-form-item {
    margin-bottom: 10px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

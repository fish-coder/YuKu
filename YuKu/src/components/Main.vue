<style lang="less" scoped>
@import '~@/assets/styles/variables';

.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .header {
    height: 60px;
    line-height: 60px;
    background: @color-primary;
    color: @font-color-primary;
    .logo {
      height: 60px;
      font-size: 22px;
      padding-left: 20px;
      padding-right: 20px;
      border-color: rgba(238, 241, 146, 0.3);
      border-right-width: 1px;
      border-right-style: solid;
    }
    .tap {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-left: 10px;
      .item-tap {
        text-align: center;
        cursor: pointer;
        .link-tap {
          color: rgba(255, 255, 255, 1);
        }
      }
    }
    .userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      .userinfo-inner {
        cursor: pointer;
        color: @font-color-primary;
        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
      }
    }
  }
  .main {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    aside {
      flex: 0 0 230px;
      width: 230px;
      .el-menu {
        height: 100%;
      }
    }
    .menu-expanded {
      flex: 0 0 230px;
      width: 230px;
    }
    .content-main {
      flex: 1;
      overflow-y: scroll;
      padding: 20px;
      .breadcrumb-container {
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
}
</style>

<template>
  <el-row class="container">
    <el-col
      :span="24"
      class="header"
    >
      <el-col
        style="width: 230px;"
        class="logo"
      >
        logo
      </el-col>
      <el-col :span="10">
        <div class="tap">
          <router-link
            tag="div"
            to="/"
            class="item-tap"
          >
            <span class="link-tab">基础服务管理</span>
          </router-link>
          <router-link
            tag="div"
            to="/third-party"
            class="item-tap"
          >
            <span class="link-tab">第三方数据合作管理</span>
          </router-link>
          <router-link
            tag="div"
            to="/data-collection"
            class="item-tap"
          >
            <span class="link-tab">数据收集管理</span>
          </router-link>
          <router-link
            tag="div"
            to="/data-provision"
            class="item-tap"
          >
            <span class="link-tab">数据提供服务管理</span>
          </router-link>
        </div>
      </el-col>
      <el-col
        :span="4"
        class="userinfo"
      >
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner"><img :src="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548168330072&di=ebf3e540756536de3c975fd9d1bba0c8&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F7a899e510fb30f24c5c78f25c295d143ad4b03b2.jpg'" />管理员一</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item
              divided
              @click.native="logout"
            >退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col
      :span="24"
      class="main"
    >
      <aside class="menu-expanded">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          unique-opened
          router
        >
          <template v-for="(item, index) in $router.options.routes">
            <el-submenu
              :key="index"
              :index="index+''"
              v-if="!item.leaf&&item.path=='/'"
            >
              <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
              <el-menu-item
                v-for="child in item.children"
                :index="child.path"
                :key="child.path"
                v-if="!child.hidden"
              >{{child.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item
              v-if="item.leaf&&item.children.length>0&&item.path=='/'"
              :index="item.children[0].path"
              :key="item.children[0].path"
            ><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
          </template>
        </el-menu>
      </aside>
      <section class="content-main">
        <div class="grid-content bg-purple-light">
          <el-col
            :span="24"
            class="breadcrumb-container"
          >
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb
              separator="/"
              class="breadcrumb-inner"
            >
              <el-breadcrumb-item
                v-for="item in $route.matched"
                :key="item.path"
              >
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col
            :span="24"
            class="content-wrapper"
          >
            <transition
              name="fade"
              mode="out-in"
            >
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

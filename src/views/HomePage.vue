<template>
  <el-row class="container" style="height: 100%">
    <v-header :user="user"></v-header>
    <el-col :span="24" class="main">
      <el-row>
        <!-- <el-menu :default-active="$route.path" class="mar-l el-menu-vertical-demo el-col el-col-3" light router>
          <template v-for="(item,index) in $router.options.routes[0].children" v-if="!item.hidden">
            <el-menu-item :index="item.path" ><i class="fa" :class="item.class"></i>{{item.name}}</el-menu-item>
          </template>
        </el-menu> -->
        <el-menu
          default-active="1"
          class="mar-l el-menu-vertical-demo el-col el-col-3"
         
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
         
          <el-menu-item index="index">
            <i class="el-icon-menu"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item index="novel" >
            <i class="el-icon-document"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <!-- <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item> -->
        </el-menu>
        <section class="contentCon">
          <el-col :span="21" :offset="3" class="content-wrapper">
            <transition>
              <router-view></router-view>   <!--路由出口 -->
            </transition>
          </el-col>
        </section>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
import header from "./header/header.vue";
const ERR_OK = "000";
export default {
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.$http.get("/api/user").then((response) => {
      response = response.data;
      if (response.code === ERR_OK) {
        this.user = response.datas;
      }
    });
  },
  beforeCreate() {
    // if (this.$route.path === "/") {
    //   this.$router.push({ path: "/index" });
    // }
  },
  mounted(){
  },
  components: {
    "v-header": header,
  },
};
</script>
<style>
/* fa图标右侧需要流出空白 elementUI图标已自带样式 */

body {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  background-color: #f2f2f2;
}
.menu,
.el-menu {
  height: 100%;
  background-color: #e6e6e6;
  position: fixed;
  float: left;
}

.container {
  padding-top: 80px;
  height: 100%;
}

.container .main {
  padding: 0;
}

.container ul li.el-menu-item {
  font-size: 100%;
}

.container .mar-l {
  padding: 0;
}

.container .content-wrapper {
  padding: 20px;
}
</style>


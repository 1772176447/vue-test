<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
<template>
  <div>
    <Layout>
      <div class="layout">
       
        <Headers />
        <Layout :style="{height:windowHeight}">
          <Sider ref="side1" hide-trigger collapsible :collapsed-width="76" v-model="isCollapsed">
            <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>Item 1
                </template>
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
                <MenuItem name="1-3">Option 3</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>Item 1
                </template>
                <MenuItem name="2-1">Option 1</MenuItem>
                <MenuItem name="2-2">Option 2</MenuItem>
                <MenuItem name="2-3">Option 3</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>Item 1
                </template>
                <MenuItem name="3-1">Option 1</MenuItem>
                <MenuItem name="3-2">Option 2</MenuItem>
                <MenuItem name="3-3">Option 3</MenuItem>
              </Submenu>
              <Submenu name="4">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>Item 1
                </template>
                <MenuItem name="4-1">Option 1</MenuItem>
                <router-link to="dialog">
                  <MenuItem name="4-2">dialog</MenuItem>
                </router-link>
                <router-link to="books">
                  <MenuItem name="4-3">message</MenuItem>
                </router-link>
              </Submenu>
            </Menu>
          </Sider>
          <Layout>
            <!-- <Header :style="{padding: 0}" class="layout-header-bar"> -->
            <!-- <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon> -->
            <!-- </Header> -->

            <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
              <router-view />
            </Content>
          </Layout>
        </Layout>
      </div>
    </Layout>
  </div>
</template>
<script>
import Headers from "./Header";
export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  components: {
    Headers
  },
  computed: {
    windowHeight() {
      return document.documentElement.clientHeight + "px";
    },
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
   
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>

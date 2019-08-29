<style lang="less" scoped>
.logo{
    width: 200px;
    font-size: 32px;
    color: white;
    background: rgb(120, 167, 221);
    float: left;
}
</style>
<template>
<div>
    <Row>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
          <div class="logo">仰天望</div>
        <MenuItem name="1">
            <Icon type="ios-paper"/>
            内容管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
        </Menu>
     </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light',
                logo:require('../static/imgs/logo.jpg')
            }
        }
    }
</script>

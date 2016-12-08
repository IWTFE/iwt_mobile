<template>
    <div id="app">
        <transition name="bounce">
            <router-view></router-view>
        </transition>
    </div>
</template>

export default {
name:'app',
data() {
    return {
selected: '外卖'
};
}
};

<style>
	@import "../node_modules/font-awesome/css/font-awesome.min.css";
	@import "../node_modules/flex.css/dist/flex.css";


	body {

		margin: 0px;
		padding: 0px;
		font-family: "微软雅黑";
		font-weight: 400;
		-webkit-font-smoothing: antialiased;
	}

	#app {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}

	.el-submenu [class^=fa] {
		vertical-align: baseline;
		margin-right: 10px;
	}

	.el-menu-item [class^=fa] {
		vertical-align: baseline;
		margin-right: 10px;
	}
</style>


<script setup>
</script>

<template>
    <div id="viewContainer">
        <el-container>
            <el-aside width="1050px">
                <img src="../assets/DataTalk_white.png" id="logo">
                <div id="mainTitleContainer">
                    AI
                </div>
                <div id="twoTitle">
                    让复杂的生活更简单
                </div>

                <div id="bottomTitle">
                    <span class="title-help">
                        <a class="help-text" href="https://www.a.com" target="_blank">帮助中心</a>
                        <span class="line"></span>
                        <span class="mod-new-reg-copyright">2024&nbsp;©DataTalk</span>
                    </span>
                </div>
            </el-aside>

            <el-main id="mainContainer">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<style scoped>
#viewContainer {
    background-image: url(../assets/pic_mountain.jpg);
    background-size: cover;
    height: 100vh;
    width: 100vw;
    margin: 0;
    background-position: center;
    background-repeat: no-repeat;
}

#logo{
    max-height: 40px;
    float: left;
    margin-left: 70px;
    margin-top: 70px;
}

#mainContainer {
    margin-top: 140px;
}

#mainTitleContainer {
    font-size: 65px;
    font-weight: bold;
    color: white;
    margin-top: 300px;
    margin-left: 180px;
}

#twoTitle {
    font-size: 40px;
    color: white;
    margin-left: 180px;
    letter-spacing: 3.81px;
    font-weight: 300;
}

#bottomTitle {
    margin-top: 420px;
    margin-left: 90px;
    font-size: 14px;
    color: #fff;
}

.title-help {
    font-size: 14px;
    color: #fff;
}

.help-text {
    text-decoration: none;
    color: #fff;
}

.line {
    display: inline-block;
    width: 2px;
    height: 12px;
    filter: alpha(opacity = 78);
    opacity: .78;
    margin: 0 12px 0 13px;
    background: #fff;
    position: relative;
    top: 1px;
}
</style>
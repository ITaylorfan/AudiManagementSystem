<template>
    <div class="wrapper">
        <h1>404 Not Found!</h1>
        <div class="image-wrapper">
            <img src="@/assets/images/404.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    

}
</script>


<style lang="scss" scoped>
    .wrapper{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        //background-color: yellow;
        .image-wrapper{
            width: 1128px;
            height: 600px;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
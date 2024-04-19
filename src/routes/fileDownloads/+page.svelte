<script>

</script>

<div class="main">
    <div class="cont">
        <div class="item1">
            <img src="/game1_img.PNG" alt="game1" style="width: 200px; height:100%; margin-right:10px;">
            <h1 style="color: black; width:100%;">Death From Above</h1>
            <div class="text">
                heheheha
            </div>
        </div>
    </div>
</div>

<style>
    .main{
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .cont{
        width: 95%;
        height: 85vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        margin: 10px;
        margin-left: 30px;
        margin-right: 30px;
        gap: 5px;
        column-gap: 35px;
    }
    .item1{
        display: flex;
        height: 100%;
        background-color: white;
        border-color: black;
        border-width: 10px;
        opacity: 60%;
    }
    .text{
        color:black;
    }
</style>
<script>

</script>

<div class="main">
    <div class="cont">
        <div class="item1">
            <img src="" alt="game1" style="width: 150px; height:100%;">
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
        background-color: white;
        border-color: black;
        border-width: 10px;
        opacity: 60%;
    }
</style>
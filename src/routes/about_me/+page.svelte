<script>

</script>

<div class="main">
    <div class="main_page">
        <div class="image"></div>
        <div class="text_frame">
            <h2>Linus Scott</h2>
            Jag är en 17-årig student på majabeskows gymnasium. 
            Jag studerar teknik-linjen med inriktning av Information och medie-teknik.
            Jag spenderar mycket tid med att spela dataspel och gör även egna spel.
        </div>
        <div class="text_data">
            
        </div>
    </div>
</div>

<style>
    .main{
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 90vh;
        
    }
    .main_page{
        display: grid;
        grid-template-columns: 4fr 6fr;
        grid-template-rows: 4fr 6fr;
        margin-top: 2%;
        width: 40%;
        height: 90%;
        background-color: rgb(255, 255, 255, 0.5);
        border-color: black;
        border-width: 10px;
        border-radius: 20px;
        flex-wrap: wrap;
    }
    .image{
        background-image: url(pfp.jpg);
        background-size: contain;
        width: 100%;
        height: 100%;
        border-color: black;
        border-radius: 10px 0px 0px 0px;
    }
    .text_frame{
        width: 100%;
        height: 100%;
        color: black;
        margin: 5px 5px 5px 5px;
        font-size: medium;
    }
    .text_data{
        color: black;
        margin-left: 3px;
        width: 100%;
        height: 100%;
    }
    h2{
        text-align: center;
    }
</style>
<script>

</script>

<div class="main">
    <div class="main_page">
        <div class="text_frame">
            <div>
                <h2>Linus Scott</h2>
                <p>
                    Jag är en 17-årig elev på majabeskows gymnasium. 
                    Jag studerar teknik-linjen med inriktning av Information och medie-teknik.
                    Jag spenderar mycket tid med att spela dataspel och gör även egna spel.
                </p>
            </div>
            <div style="display: flex;">
                <img src="/pfp.jpg" alt="pfp" class="image" style="border-radius: 10px 0px 0px 10px;">
                <img src="/pfp.jpg" alt="nonexistant" class="image" style="border-radius: 0px 10px 10px 0px;">
            </div>
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
        background-size: contain;
        width: 19vw;
    }
    .text_frame{
        display: grid;
        grid-template-rows: 3fr 4fr;
        width: 98%;
        height: 98%;
        color: black;
        margin: 5px 5px 5px 5px;
        font-size: medium;
    }
    h2{
        text-align: center;
    }
</style>
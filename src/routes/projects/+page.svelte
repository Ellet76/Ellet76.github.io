<script>

</script>

<div class="main">
    <div class="cont">
        <div class="item1">
            <img src="/game1_img.PNG" alt="Game 1" style="width: 200px; height:100%; margin-right:10px;">
            <div class="game_info" style="width: 90%px;">
                <h1 style="color: black; width:100%; height:30px;">Death From Above</h1>
                <div class="text">
                    Ett Spel där man ska undvika de fallande objekten. Det har fungerande upgraderingar och musik.
                    Upgraderingarna inkluderar en teleport, temporär odödlighet och en speedup. 
                    Spelet är även helt gjort i python med en modul som heter pygame.
                </div>
                <br>
                <a href="https://ellet76.itch.io/" style="color: Blue; ">Download Here</a>
            </div>
        </div>
        <div class="item1">
            <img src="/game2_img.png" alt="Game 2" style="width: 200px; height:100%; margin-right:10px;">
            <div class="game_info" style="width: 90%px;">
                <h1 style="color: black; width:100%; height:30px;">Fuctori</h1>
                <div class="text">
                    Ett Fabriks-spel där målet är att flytta och processa resurser från ena sidan till den andra. 
                    Spelet har inte så mycket funktionalitet eftersom det var gjort över en Game-jam. 
                    Alla Sprites var gjorta av Linus Scott och Musiken var gjord av Irma Zimmerman.
                </div>
                <br>
                <a href="https://ellet76.itch.io/" style="color: Blue; ">Download Here</a>
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
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        margin: 10px;
        margin-left: 30px;
        margin-right: 30px;
        gap: 5px;
        column-gap: 35px;
    }
    .item1{
        display: flex;
        flex-direction: row;
        height: 100%;
        background-color: white;
        border-color: black;
        border-width: 10px;
        opacity: 60%;
    }

    .text{
        color:black;
        text-align: left;
    }
    a:hover{
        font-weight: 100;
    }
</style>
const { response } = require("express");

const router = (app ) => {
    const gamesController = require("../controllers/game");
    app.get("/game", gamesController.getAllgames);
    app.get("/game/:id", gamesController.getgameById);
    app.post("/game/add", gamesController.addgame);
    app.post("/game/delete/:id", gamesController.deletegame);

    const playerController = require("../controllers/player");
    app.get("/player", playerController.getAllPlayers);
    app.get("/player/:id", playerController.getPlayerById);
    app.post("/player/add", playerController.addPlayer);
    app.post("/player/delete/:id", playerController.deletePlayer);
    

    app.get("/", (request, response) => {
        response.render("../views/pages/home", {title: "home page"});
    });

    app.get("/games", gamesController.getAllgames);

    app.get("/addgame", (request, response) => {
        response.render("../views/pages/addgame", {title: "add game"});
    });
    

    app.get("/player", (request, response) => {
        response.render("../views/pages/player", {title: "player"});
    });
    app.get("/addplayer", (request, response) => {
        response.render("../views/pages/addplayer", {title: "add player"});
    });



}

module.exports = router;
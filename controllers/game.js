
const pool = require("../data/config");

const getAllgames = (request, response) => {
    pool.query(` SELECT * FROM game `, (error, result) => {

        if (error){
            throw error;
        }

        console.log(result);


        response.render("../views/pages/games", {
            title: "games",
            gamesArray: result
        });
    });
};
const getgameById = (request, response, next) => {
    const id = request.params.id;
    pool.query(`SELECT * FROM game WHERE game_id = ?`, 
  id, (error, result) => {
            if (error){
                throw error;
            }
 
            console.log(result);
            response.render("../views/pages/game", {
                game: result[0],
                title: "game"
            });
        });
        
};
const addgame = (request, response, next) => {
    console.log(request.body);
    pool.query("INSERT INTO game SET ?", request.body, (error, result) => {
        if (error){
            throw error;
        }
        response.redirect(`/game`);
    });
};
const editGame = (request, response, next) => {
    const id = request.params.id;
 
    console.log(request.body);  
    pool.query(`UPDATE game SET ? WHERE game_id = ?`,
	  [request.body, id], (error, result) => {
        if (error) {
            throw error;
        }
        response.redirect(`/games`);
    });
};
const deletegame = (request, response, next) => {
    const id = request.params.id;
 
    pool.query(`DELETE FROM game WHERE game_id = ?`, 
  id, (error, result) => {
        if (error){
            throw error;
        }
        console.log(request.body);
        response.redirect(`/game`);
    });
};



module.exports = {
    getAllgames,
    getgameById,
    addgame,
    deletegame,
    editGame,
};
const pool = require("../data/config");

const getAllPlayers = (request, response) => {
    pool.query(` SELECT * FROM player `, (error, result) => {

        if (error){
            throw error;
        }

        console.log(result);


        response.render("../views/pages/players", {
            title: "players",
            playerArray: result
        });
    });
};
const getPlayerById = (request, response, next) => {
    const id = request.params.id;
    pool.query(`SELECT * FROM player WHERE player_id = ?`, 
  id, (error, result) => {
            if (error){
                throw error;
            }
 
            console.log(result);
            response.render("../views/pages/player", {
                player: result[0],
                title: "player"
            });
        });
};
const addPlayer = (request, response, next) => {
    console.log(request.body);
    pool.query("INSERT INTO player SET ?", request.body, (error, result) => {
        if (error){
            throw error;
        }
        response.redirect(`/player`);
    });
};

const editPlayer = (request, response, next) => {
    const id = request.params.id;
 
    console.log(request.body);  
    pool.query(`UPDATE player SET ? WHERE player_id = ?`,
	  [request.body, id], (error, result) => {
        if (error) {
            throw error;
        }
        response.redirect(`/player`);
    });
};

const deletePlayer = (request, response, next) => {
    const id = request.params.id;
 
    pool.query(`DELETE FROM player WHERE player_id = ?`, 
  id, (error, result) => {
        if (error){
            throw error;
        }
        console.log(request.body);
        response.redirect(`/player`);
    });
};



module.exports = {
    getAllPlayers,
    getPlayerById,
    addPlayer,
    deletePlayer,
    editPlayer,
};
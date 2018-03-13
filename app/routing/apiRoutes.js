var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);
        
        //Here we take the result of teh user's survey POST and parse it.
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores); //This is the issue, we don't know whaqt this is.

        //This variable will calculate the diffeerence between the user's score
        //and the score of each user in the database
        var totalDifference = 0;

        //Loop through all possibilities in the database.
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            //Then loop through all the scores of each friend
            for (var j = 0; j < friends[i].scores[j]; j++){
                totalDifference += Math.abs(parseInt(userScores[j])- parseInt(friends[i].scores[j]));

                if (totalDifference <= bestMatch.friendDifference){
                    
                }
            }
        }

    });
}
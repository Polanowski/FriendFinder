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

        //Here we take the result of the user's survey POST and parse it.
        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference = 0;

        //Loop through all possibilities in the database.
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            //Then loop through all the scores of each friend
            for (var j = 0; j < friends[i].scores[j]; j++){
                totalDifference += Math.abs(parseInt(userScores[j])- parseInt(friends[i].scores[j]));

                if (totalDifference <= bestMatch.friendDifference){
                   //Reset the bestMatch to be the new friend.
                   bestMatch.name = friends[i].name;
                   bestMatch.photo = friends[i].photo;
                   bestMatch.friendDifference = totalDifference;
                }
            }
        }

        //Finally save the user's data to the database. 
        //This has to happen after the check otherwise the database will always return that the user is the user's best friend.
        friends.push(userData);

        //Return the JSON with the user's bestMatch. This will be used by the HTML in the next page
        res.json(bestMatch);

    });
}
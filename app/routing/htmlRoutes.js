var path = request("path");

module.exports = function(app){
    
    //Route to the survey page
    app.get("/survey",function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    //Route to the home page
    app.get("/home",function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}

//
module.exports = app => {

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        )
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept ,authorization");
        if (req.method === 'OPTIONS') {
            res.header(
                "Access-Control-Allow-Methods",
                "GET, POST, OPTIONS, PUT, PATCH, DELETE"
            )
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept ,authorization");
            return res.status(200).json({});

        }
        next();
    });
   
    const onBoardController=require('../controller/onBoardController');
   
    app.post("/getUserMachine",onBoardController.getUserMachine);
    app.post("/createUserMachine",onBoardController.createUserMachine);
    app.post("/getUserMachineById",onBoardController.getUserMachineByID);
    app.put("/updateUserMachine",onBoardController.updateMachine);


  };
  



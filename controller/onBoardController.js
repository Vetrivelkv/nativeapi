
const jwt = require("jsonwebtoken");
const mysqlConnection = require("../dbconfig");



exports.createUserMachine = async (req, res) => {
     let uniqueId=req.body.uniqueId
     console.log(req.body)
     const params={
         machineName:req.body.machineName,
         mobile1:req.body.mobile,
         isActive:1,
         role:'machine',
         isbusy:0,
         uniqueId:req.body.uniqueId,
         otp:'123456'         

     }
     console.log(uniqueId)
    try {
        mysqlConnection.query('INSERT INTO machines (machineid,machinename,mobile1,isactive,otp,isbusy,uniqueid,role) VALUES (uuid(),"' + params.machineName + '","' + params.mobile1 + '","' + params.isActive + '",' + params.otp + ',' + params.isbusy + ',"'+params.uniqueId+'","'+params.role+'")', (err, result) => {        
            if (!err) {                
                res.status(200).send({
                    message: "fetched Successfully",
                    data: result
                });
            }
            else {
                console.log(err.sqlMessage);
                res.status(200).send({
                    error: err.sqlMessage,
                });
            }
        })


    } catch (err) {
        res.status(500).send({
            message: " Failed. Due to Error : " + err,
        });
    }
};


exports.getUserMachineByID = async (req, res) => {
    let machineId=req.body.machineId
    console.log(machineId)
   try {
       mysqlConnection.query(`SELECT * FROM machines where machineid='${machineId}'`, (err, result) => {
           if (!err) {                
               res.status(200).send({
                   message: "fetched Successfully",
                   data: result
               });
           }
           else {
               console.log(err);
               res.status(500).send({
                   message: " Failed. Due to Error : " + err,
               });
           }
       })


   } catch (err) {
       res.status(500).send({
           message: " Failed. Due to Error : " + err,
       });
   }
};




exports.getUserMachine = async (req, res) => {
    let uniqueId=req.body.uniqueId
    console.log(uniqueId)
   try {
       mysqlConnection.query(`SELECT * FROM machines where uniqueid='${uniqueId}'`, (err, result) => {
           if (!err) {                
               res.status(200).send({
                   message: "fetched Successfully",
                   data: result
               });
           }
           else {
               console.log(err);
               res.status(500).send({
                   message: " Failed. Due to Error : " + err,
               });
           }
       })


   } catch (err) {
       res.status(500).send({
           message: " Failed. Due to Error : " + err,
       });
   }
};


exports.updateMachine = function(req, res) {
    try {
        const params={
            machineId:req.body.machineId,
            machineName:req.body.machineName,
            mobile1:req.body.mobile
        }
        console.log(params)
      mysqlConnection.query( "UPDATE machines SET machinename=?,mobile1=? WHERE machineid = ?", [params.machineName,params.mobile1, params.machineId], (err, result) => {        
            if (!err) {
                res.status(200).send({
                    message: "User Updated Successfully"                    
                });
            }
            else {
                console.log(err.sqlMessage);
                res.status(200).send({
                    error: err.sqlMessage,
                });
            }
        })

    }
    catch (err) {
        res.status(500).send({
            message: " User updation Failed. Due to Error : " + err,
        });
    }
}
//update user


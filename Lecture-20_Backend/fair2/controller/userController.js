const userModel=require("../model/userModel");
// const plans = require("../model/plans.json");
module.exports.createUser = function createUser(req, res) {
  console.log("Actual function ran");
  const user = req.body;
  user.id = plans.length + 1;
  users.push(user);
  fs.writeFileSync("./data/users.json", JSON.stringify(users));
  res.status(201).json({
    status: "user created",
    data: user
  });
};
module.exports.getAllUser =async function getAllUser(req, res) {
  // findone(x) give first matching of x
  //find(x) give all matchings of x
  // find() give all documents
  const users=await userModel.find().select("+password");
  res.status(200).json({
    status: "all users recieved",
    data: users
  });
};
module.exports.getUser = async function getUser(req, res) {
  const id= req.params.id ||req.id;//const {id}= req.params ||req; 
  //Not work b/z some time re.params give empty object then it donot check for req
  const user=await userModel.findById(id);
  res.json({
    status: "successfull",
    user
    // data: users[id - 1]
  });
};
module.exports.updateUser = function updateUser(req, res) {
  const id = req.params.id;
  const originaluser = users[id - 1];
  const toupdateData = req.body;
  const keys = [];
  for (let key in toupdateData) {
    keys.push(key);
  }
  for (let i = 0; i < keys.length; i++) {
    originaluser[keys[i]] = toupdateData[keys[i]];
  }
  fs.writeFileSync("./data/users.json", JSON.stringify(users));

  res.status(200).json({
    status: "update request recieved",
    data: originaluser
  });
};
module.exports.deleteUser = function deleteUser(req, res) {
  const { id } = req.params;
  const user = users.splice(id - 1, 1);
  fs.writeFileSync("./data/plans.json", JSON.stringify(users));
  res.status(200).json({
    status: "user Deleted",
    data: user
  });
};
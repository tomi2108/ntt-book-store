const User = require("../db/models/User");

const getUser = async (username,password) => {
  const user = await User.findOne({ where: { username } });
  if (user){
    if (user.password === password){
      return user;
    }else{
      return null;
    }
  }else{
    throw new Error("User not found");
  }

};

const createUser = async (user) => {
  const userRegistered = await User.findOne({ where: { username: user.username } });
  if(userRegistered){
    throw new Error("User already registered");
  }else{
    const newUser = await User.create(user);
    return newUser;
  }

};


module.exports = { getUser,createUser };

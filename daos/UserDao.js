/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This DAO handles database access for the users collection
 */

import userModel from "../mongoose/users/UserModel.js";

class UserDao{

    async findAllUsers(){
        return await userModel.find();
    }

    async findUserByUsername(username){
        return await userModel.findOne({username:username});
    }

    async registerUser(user){
        return await userModel.create(user);
    }

    async updateUser(uid, user){
        return await userModel.updateOne({_id:uid}, {$set:user})
    }

    async deleteUser(uid){
        return await userModel.deleteOne({_id:uid})
    }
}

export default UserDao;
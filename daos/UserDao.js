/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This DAO handles database access for the users collection
 */

import userModel from "../mongoose/users/UserModel.js";

export const findAllUsers = async() => {
    return await userModel.find();
}

export const findUserByUsername = async(username) => {
    return await userModel.findOne({ username: username });
}

export const registerUser = async(user) =>{
    return await userModel.create(user);
}

export const updateUser = async(uid, user) =>{
    return await userModel.updateOne({ _id: uid }, { $set: user })
}

export const deleteUser = async(uid) => {
    return await userModel.deleteOne({ _id: uid })
}

/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file Schema for our User
 */

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    //Here is where we outline what fields we want
    firstname: {type:String, default: ""},
    lastname: {type:String, default: ""},
    username: {type:String, required:true},
    password: {type:String, required:true},
    email: {type:String, default:""},
    joinedDate: { type: Date, default: Date.now },
    accountType: { type: String, default: 'CONNOISSEUR', enum: ['CONNOISSEUR', 'BARTENDER', 'ADMIN'] },
    //The fields below are set to default but depending on which user you are, you only be able to access a specific subset
    favoriteDrink: {type: String, default: ""},
    yearsOfExperience: {type: Number, default: 0},
    currentWorkplace: {type: String, default: ""},
    internalUsername: {type: String, default: ""},
}, {collection: "users"});

export default UserSchema;
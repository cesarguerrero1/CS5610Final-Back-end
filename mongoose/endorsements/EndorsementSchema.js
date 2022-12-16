/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file Schema for our Endorsement
 */

import mongoose from "mongoose";

const EndorsementSchema = new mongoose.Schema({
    endorser: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    cocktail: {type: mongoose.Schema.Types.ObjectId, ref: 'CocktailModel'} || {type:String, default: ""},
    endorsementDate: {type:Date,default:Date.now}
}, {collection: "endorsements"});

export default EndorsementSchema;
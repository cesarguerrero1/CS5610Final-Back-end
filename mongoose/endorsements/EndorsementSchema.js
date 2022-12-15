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
    cocktail: {type: mongoose.Schema.Types.ObjectId, ref: 'CocktailModel'},
    endorsementDate: {type:Date,default:Date.now}
})

export default EndorsementSchema;
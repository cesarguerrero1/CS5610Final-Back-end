/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file Schema for our Tour
 */

import mongoose from "mongoose";
import alcoholEnum from "../alcoholEnum.js";

const TourSchema = new mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    creationDate: {type:Date, default: Date.now},
    mainAlcohol: {type:String, default:"TEQUILA", enum: alcoholEnum},
    drinkName: {type:String, default:"NA"},
    tourTitle: {type:String, default:""},
    tourBody: {type:String, default:""}
}, {collection: "tours"});

export default TourSchema;
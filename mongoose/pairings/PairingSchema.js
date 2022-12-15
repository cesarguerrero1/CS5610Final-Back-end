/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file Schema for our Pairing
 */

import mongoose from "mongoose";
import alcoholEnum from "../alcoholEnum";

const PairingSchema = new mongoose.Schema({
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    firstMainAlcohol: {type:String, default:"TEQUILA", enum: alcoholEnum},
    firstDrinkName: {type:String, default:""},
    secondMainAlcohol: {type:String, default:"GIN", enum: alcoholEnum},
    secondDrinkName: {type:String, default:""},
    thirdMainAlcohol: {type:String, default:"VODKA", enum: alcoholEnum},
    thirdDrinkName: {type:String, default:""},
    creationDate: {type:Date, default: Date.now},
    pairingTitle: {type:String, default:""},
    pairingDescription: {type:String, default:""}
})

export default PairingSchema;
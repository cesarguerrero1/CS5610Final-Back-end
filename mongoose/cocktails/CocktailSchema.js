/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file Schema for our Cocktail
 */

import mongoose from "mongoose";
import alcoholEnum from "../alcoholEnum";

const CocktailSchema = new mongoose.Schema({
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    mainAlcohol: {type:String, default:"TEQUILA", enum: alcoholEnum},
    drinkName: {type:String, default:"NA"},
    recommendedServingGlass: {type:String, default:"Shot Glass"},
    ingredients: {type:[String], default:["ingredient1", "ingredient2", "ingredient3", "ingredient4", "ingredient5"]},
    ingredientsMeasurements: {type:[String], default:["ingredient1 Measurements", "ingredient2 Measurements", "ingredient3 Measurements", "ingredient4 Measurements", "ingredient5 Measurements"]},
    instructions: {type:String, default:"Instructions go here"},
    creationDate: {type:Date, default: Date.now}
}, {collection: "cocktails"});

export default CocktailSchema;
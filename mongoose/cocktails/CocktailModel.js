/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file Model for Cocktail
 */

import mongoose from "mongoose";
import CocktailSchema from "./CocktailSchema";

export default CocktailModel = mongoose.model('CocktailModel', CocktailSchema);
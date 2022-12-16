/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This DAO handles database access for the cocktails collection
 */

import cocktailModel from "../mongoose/cocktails/CocktailModel.js";

export const findAllCocktails = async() => {
    return await cocktailModel.find().populate("createdBy").exec();
}

export const createCocktail = async(cocktail) => {
    return await cocktailModel.create(cocktail);
}

export const deleteCocktail = async(cid) => {
    return await cocktailModel.deleteOne({_id:cid})
}
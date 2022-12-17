/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file Schema for our Review
 */

import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    cocktail: {type: String, default:''},
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    comment: {type: String, default:''},
    postedDate: {type: Date, default:Date.now}
}, {collection: "reviews"});

export default ReviewSchema;
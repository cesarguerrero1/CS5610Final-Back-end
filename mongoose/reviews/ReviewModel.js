/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file Model for Review
 */

import mongoose from "mongoose";
import ReviewSchema from "./ReviewSchema.js";

const ReviewModel = mongoose.model('ReviewModel', ReviewSchema);

export default ReviewModel;
/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file Model for Tour
 */

import mongoose from "mongoose";
import TourSchema from "./TourSchema.js";

const TourModel = mongoose.model('TourModel', TourSchema);

export default TourModel;
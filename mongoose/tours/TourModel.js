/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file Model for Tour
 */

import mongoose from "mongoose";
import TourSchema from "./TourSchema";

export default TourModel = mongoose.model('TourModel', TourSchema);
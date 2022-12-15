/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file Model for Endorsement
 */

import mongoose from "mongoose";
import EndorsementSchema from "./EndorsementSchema";

export default EndorsementModel = mongoose.model('EndorsementModel', EndorsementSchema);
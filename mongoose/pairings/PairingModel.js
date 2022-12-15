/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file Model for Pairing
 */

import mongoose from "mongoose";
import PairingSchema from "./PairingSchema.js";

const PairingModel = mongoose.model('PairingModel', PairingSchema);

export default PairingModel;
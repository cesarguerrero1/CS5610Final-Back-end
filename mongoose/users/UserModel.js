/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file Model for our User
 */

import mongoose from "mongoose";
import UserSchema from "./UserSchema";

export default UserModel = mongoose.model('UserModel', UserSchema);

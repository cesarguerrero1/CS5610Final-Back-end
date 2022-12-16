/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This DAO handles database access for the pairings collection
 */

import pairingModel from "../mongoose/pairings/PairingModel.js"

export const findAllPairings = async() => {
    return await pairingModel.find().populate("createdBy").exec();
}

export const createPairing = async(pairing) => {
    return await pairingModel.create(pairing);
}

export const deletePairing = async(pid) => {
    return await pairingModel.deleteOne({_id:pid})
}


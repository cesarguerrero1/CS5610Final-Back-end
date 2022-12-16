/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This DAO handles database access for the endorsements collection
 */

import endorsementModel from "../mongoose/endorsements/EndorsementModel.js"

export const findAllEndorsements = async() => {
    return await endorsementModel.find().populate("endorser").exec();
}

export const createEndorsement = async(endorsement) => {
    return await endorsementModel.create(endorsement);
}

export const deleteEndorsement = async(eid) => {
    return await endorsementModel.deleteOne({_id:eid})
}
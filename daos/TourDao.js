/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This DAO handles database access for the tours collection
 */

import tourModel from "../mongoose/tours/TourModel.js"

export const findAllTours = async() => {
    return await tourModel.find().populate("author").exec();
}

export const createTour = async(tour) => {
    return await tourModel.create(tour);
}

export const deleteTour = async(tid) => {
    return await tourModel.deleteOne({_id:tid})
}

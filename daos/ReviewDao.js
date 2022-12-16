/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This DAO handles database access for the reviews collection
 */

import reviewModel from "../mongoose/reviews/ReviewModel.js"

export const findAllReviews = async() => {
    return await reviewModel.find().populate("author").exec();
}

export const createReview = async(review) => {
    return await reviewModel.create(review);
}

export const deleteReview = async(rid) => {
    return await reviewModel.deleteOne({_id:rid})
}
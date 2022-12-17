/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This controller will handle the routes for interacting with our reviews collection in the database
 */

import * as reviewDao from "../daos/ReviewDao.js"

const ReviewController = (app) => {

    app.get('/reviews', findAllReviews);
    app.post('/reviews', createReview);
    app.delete('/reviews/:rid', deleteReview);

    async function findAllReviews(req, res){
        const reviews = await reviewDao.findAllReviews();
        return res.json(reviews);
    }

    async function findAllMyReviews(req, res){
        const reviews = await reviewDao.findAllMyReviews();
        return res.json(reviews);
    }

    async function createReview(req, res){
        const newReview = await reviewDao.createReview(req.body);
        return res.json(newReview);
    }

    async function deleteReview(req, res){
        const status = await reviewDao.deleteReview(req.params.rid);
        return res.send(status);
    }

}

export default ReviewController;
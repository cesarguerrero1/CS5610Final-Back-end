/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This controller will handle the routes for interacting with our tours collection in the database
 */

import * as tourDao from "../daos/TourDao.js"

const TourController = (app) => {

    app.get('/tours', findAllTours);
    app.post('/tours', createTour);
    app.delete('/tours/:tid', deleteTour);

    async function findAllTours(req, res){
        const tours = await tourDao.findAllTours();
        return res.json(tours);
    }

    async function createTour(req, res){
        const newTour = await tourDao.createTour(req.body);
        return res.json(newTour);
    }

    async function deleteTour(req, res){
        const status = await tourDao.deleteTour(req.params.tid);
        return res.send(status);
    }
}

export default TourController;
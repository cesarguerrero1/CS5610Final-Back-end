/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This controller will handle the routes for interacting with our endorsements collection in the database
 */

import * as endorsementDao from "../daos/EndorsementDao.js"

const EndorsementController = (app) => {

    app.get('/endorsements', findAllEndorsements);
    app.get('/users/:uid/endorsements', findAllMyEndorsements);
    app.post('/endorsements', createEndorsement);
    app.delete('/endorsements/:eid', deleteEndorsement);

    async function findAllEndorsements(req, res){
        const endorsements = await endorsementDao.findAllEndorsements();
        return res.json(endorsements);
    }

    async function findAllMyEndorsements(req, res){
        const endorsements = await endorsementDao.findAllMyEndorsements(req.params.uid);
        return res.json(endorsements);
    }

    async function createEndorsement(req, res){
        const newEndorsement = await endorsementDao.createEndorsement(req.body);
        return res.json(newEndorsement);
    }

    async function deleteEndorsement(req, res){
        const status = await endorsementDao.deleteEndorsement(req.params.eid);
        return res.send(status);
    }
}

export default EndorsementController;
/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This controller will handle the routes for interacting with our pairings collection in the database
 */

import * as pairingDao from "../daos/PairingDao.js"

const PairingController = (app) => {
    app.get('/pairings', findAllPairings);
    app.post('/pairings', createPairing);
    app.delete('/pairings/:pid', deletePairing);

    async function findAllPairings(req, res){
        const pairings = await pairingDao.findAllPairings();
        return res.json(pairings);
    }

    async function createPairing(req, res){
        const newPairing = await pairingDao.createPairing(req.body);
        return res.json(newPairing);
    }

    async function deletePairing(req, res){
        const status = await pairingDao.deletePairing(req.params.pid);
        return res.send(status);
    }
}

export default PairingController;
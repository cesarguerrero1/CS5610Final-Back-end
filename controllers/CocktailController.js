/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This controller will handle the routes for interacting with our cocktail collection in the database
 */

import * as cocktailDao from "../daos/CocktailDao.js"

const CocktailController = (app) => {

    app.get('/cocktails', findAllCocktails);
    app.get('/users/:uid/cocktails', findMyCocktails);
    app.post('/cocktails', createCocktail);
    app.delete('/cocktails/:cid', deleteCocktail);

    async function findAllCocktails(req, res){
        const cocktails = await cocktailDao.findAllCocktails();
        return res.json(cocktails);
    }

    async function findMyCocktails(req, res){
        const cocktails = await cocktailDao.findMyCocktails(req.params.uid);
        return res.json(cocktails);
    }

    async function createCocktail(req, res){
        const newCocktail = await cocktailDao.createCocktail(req.body);
        return res.json(newCocktail);
    }

    async function deleteCocktail(req, res){
        const status = await cocktailDao.deleteCocktail(req.params.cid);
        return res.send(status);
    }

}

export default CocktailController;
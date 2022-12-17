/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This controller will handle the authentication routes for our application
 */

//We are going to use encryption to handle the passwords
import bcrypt from "bcrypt";
const saltRounds = 10;
import * as userDao from "../daos/UserDao.js";

const AuthenticationController = (app) => {

    //HTTP ENDPOINTS
    app.post("/api/auth/profile", profile);
    app.post("/api/auth/login", login);
    app.post("/api/auth/logout", logout);

    //Check to see if a user is logged in
    async function profile(req, res){
        let profile = req.session['profile'];
        
        if(profile){
            //Grab the newest iteration! 
            const user = await userDao.findUserByUsername(profile.username);
            profile = user;
            return res.json(profile);
        }else{
            //403 Error means nothing exists
            return res.sendStatus(403);
        }
    }

    //Attempt to log the user in and thus create a session
    async function login(req, res){
        //We need to see the credentials of the person attempting to login
        const user = req.body;
        const username = user.username;
        const password = user.password;

        //Look in our database to see if the given user exists
        const existingUser = await userDao.findUserByUsername(username);

        //If the user doesn't exist then ERROR!
        if(!existingUser){
            return res.sendStatus(403);
        }
        
        //Check their password hash!
        const match = await bcrypt.compare(password, existingUser.password);
        if(match){
            req.session['profile'] = existingUser;
            return res.json(existingUser);
        }else{
            return res.sendStatus(403);
        }
    }

    //Erase the current session as the user is logging out
    function logout(req, res){
        req.session.destroy(() => {});
        return res.sendStatus(200); 
    }

}

export default AuthenticationController;
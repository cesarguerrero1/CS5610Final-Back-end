/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This controller will handle the routes for interacting with our users collection in the database
 */
import bcrypt from "bcrypt";
const saltRounds = 10;
import * as userDao from "../daos/UserDao.js"

const UserController = (app) => {


    app.get('/users', findAllUsers);
    app.get('/users', findUserByUsername);
    app.post('/users', registerUser);
    app.put('/users/:uid', updateUser);
    app.delete('/users/:uid', deleteUser);

    async function findAllUsers(req, res) {
        const users = await userDao.findAllUsers();
        return res.json(users);
    }

    async function findUserByUsername(req, res) {
        const user = await userDao.findUserByUsername(req.body.username);
        return res.json(user);
    }

    async function registerUser(req, res) {
        const newUser = req.body;
        const existingUser = await userDao.findUserByUsername(req.body.username);

        //If the user already exists then say request denied (ERROR: 403)
        if (existingUser) {
            return res.sendStatus(403);
        } else {
            //We don't want to save the actual password in the database!!!
            const password = newUser.password;
            const hash = await bcrypt.hash(password, saltRounds);
            newUser.password = hash;
            //Make our new user
            const insertedUser = await userDao.registerUser(newUser);
            return res.json(insertedUser);
        }
    }

    async function updateUser(req, res) {
        const status = await userDao.updateUser(req.params.uid, req.body);
        return res.send(status);
    }

    async function deleteUser(req, res) {
        const status = await userDao.deleteUser(req.params.uid);
        return res.send(status);
    }

}

export default UserController;
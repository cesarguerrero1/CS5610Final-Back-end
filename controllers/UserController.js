/**
 * Cesar Guerrero
 * 12/14/22
 * CS5610 - Final Project
 * 
 * @file This controller will handle the routes for interacting with our users collection in the database
 */



class UserController{

    constructor(app, userDao){

        this.app = app;
        this.userDao = userDao;

        //HTTP ENDPOINTS
        this.app.get('/users', this.findAllUsers);
        this.app.get('/users', this.findUserByUsername);
        this.app.post('/users', this.registerUser);
        this.app.put('/users/:uid', this.updateUser);
        this.app.delete('/users/:uid', this.deleteUser);
    }

    async findAllUsers(req, res){
        const users = await this.userDao.findAllUsers();
        return res.json(users);
    }

    async findUserByUsername(req, res){
        const user = await this.userDao.findUserByUsername(req.body.username);
        return res.json(user);
    }

    async registerUser(req, res){
        const newUser = req.body;
        const existingUser = await this.userDao.findUserByUsername(req.body.username);

        //If the user already exists then say request denied (ERROR: 403)
        if(existingUser){
            return res.sendStatus(403);
        }else{
            //We don't want to save the actual password in the database!!!
            const password = newUser.password;
            const hash = await bcrypt.hash(password, saltRounds);
            newUser.password = hash;
            //Make our new user
            const insertedUser = await this.userDao.registerUser(newUser);
            return res.json(insertedUser);
        }
    }

    async updateUser(req, res){
        const status = await this.userDao.updateUser(req.params.uid, req.body);
        return res.send(status);
    }

    async deleteUser(req, res){
        const status = await this.userDao.deleteUser(req.params.uid);
        return res.send(status);
    }

}

export default UserController;
import User from "../model/User.js" ;   

export const addUser = async (request, response) => {
    try {

        // // check users aready exist or not
        let exist = await User.findOne({ googleId : request.body.googleId });
        if(exist) {
            response.status(200).json('User already Exist');
            return;
        }

        const newUser = new User(request.body);
        await newUser.save();
        response.status(200).json('user saved successfully');
    } 
    catch (error) {
        response.status(500).json(error);
    }
}

//  // ▶️ getUsers

export const getUsers = async (request, response) => {
    try {
        // // fetch the user from the database
       const users = await User.find({});
       response.status(200).json(users);
    } 
    catch (error) {
        response.status(500).json(error);
    }
}
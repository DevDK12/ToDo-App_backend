import User from '../models/user.js'
import CatchAsync from "../error/catchAsync.js";
import AppError from "../error/appError.js";











export const getUser = CatchAsync(async (req, res, next) => {

    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) throw new AppError('No user found', 400);


    res.status(200).json({
        status: 'success',
        data: {
            user
        }
    })

});




import mongoose from "mongoose";
import validator from "validator";

import { Model } from "mongoose";
import { ITask } from "../types/TaskTypes.js";



const Schema = mongoose.Schema;







const TaskSchema = new Schema<ITask>({
    _id: {
        type: String,
        required: [true, 'ID is required'],
    },
    msg: {
        type: String,
        required: [true, 'Msg is required'],
    },

    date: {
        type: Date,
        required: [true, "Deadline date is required"],
    },
    isFinished: {
        type: Boolean,
        default: false,
    },
    tags: {
        type:  [{
            msg: String,
            _id: String,
        }],
        default: []
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
},

    {
        timestamps: true
    }
)




const Task = mongoose.model<ITask>('Task', TaskSchema);


export default Task;



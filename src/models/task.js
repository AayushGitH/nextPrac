import mongoose, { Schema } from "mongoose"

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    addedDate: {
        type: Date,
        default: Date.now(),
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        required: true
    },
    userId: {
        type: mongoose.ObjectId,
        required: true
    }
})

// This will create a collection named tasks
export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema)
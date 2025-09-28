import mongoose from "mongoose";

const entrySchema = mongoose.Schema({
    student: {
        type: mongoose.Types.ObjectId,
        ref: "Student"
    },

    destination: {
        type: String,
        default: "Una market"
    },

    Leaving_date: {
        type: String, // Store formatted date as a string
        default: () => formatDate(new Date()),
    },
    Leaving_time: {
        type: String, // Store only the time as a string
        default: () => new Date().toLocaleTimeString('en-GB').slice(0,5),
    },
    Arrival_date: {
        type: String, // Store formatted date as a string
        default: null,
    },
    Arrival_time: {
        type: String, // Store only the time as a string
        default: null,
    },
});


const Entry = mongoose.model("Entry", entrySchema);
export default Entry;
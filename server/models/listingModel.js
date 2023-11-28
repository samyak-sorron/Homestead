import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const houseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Owner',
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rent: {
        type: Number,
        required: true
    },    
    rooms: {
        type: String,
        required: true
    },    
    bathrooms: {
        type: String,
        required: true
    },
    leaseLength: {
        type: String,
        required: true
    },
    dateAvailable: {
        type: Date,
        required: true
    },
    amenities: [
        {
            type: String,
            required: true
        }
    ]
});

const propertyModel = mongoose.model('House', houseSchema);

export default propertyModel
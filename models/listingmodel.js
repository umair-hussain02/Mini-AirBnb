const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: { // Corrected spelling
        type: String,
    },
    image_url: {
        type: String,
        default: "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        set: (v) => v.trim() === "" ? "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" : v,
    },
    price: {
        type: Number,
        required: true,
    },
    location: { // Corrected spelling
        type: String,
    },
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
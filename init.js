const mongoose = require('mongoose');
const Listing = require('./models/listingmodel');
const URL = 'mongodb://127.0.0.1:27017/airbnb';

const allListing = [
    {
      title: "Live like Bollywood star Janhvi Kapoor",
      description: "My most cherished childhood memories are of spending summers with my family at our coastal oasis in Chennai, India. This home has always felt like a sanctuary, and I want to share that same feeling with my fans...",
      image_url: "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "50",
      location: "Mumbai",
    },
    {
      title: "Explore the Mystical Ghats with a Local Guide",
      description: "Join me on a spiritual journey through the sacred ghats of Varanasi. We'll start at dawn with a boat ride on the Ganges, followed by a walk through the narrow lanes of this ancient city...",
      image_url: "https://images.pexels.com/photos/417960/pexels-photo-417960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "75",
      location: "Varanasi",
    },
    {
      title: "Culinary Delights: A Cooking Class in Jaipur",
      description: "Experience the rich flavors of Rajasthan by joining our traditional cooking class in Jaipur. Learn how to prepare classic dishes like dal bati churma and gatte ki sabzi...",
      image_url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "40",
      location: "Jaipur",
    },
    {
      title: "Yoga Retreat in the Himalayas",
      description: "Escape to the serene mountains of Rishikesh for a rejuvenating yoga retreat. Practice yoga and meditation with experienced instructors while surrounded by the breathtaking beauty of the Himalayas...",
      image_url: "https://images.pexels.com/photos/3658395/pexels-photo-3658395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "100",
      location: "Rishikesh",
    },
    {
      title: "Backwater Bliss: Houseboat Stay in Kerala",
      description: "Cruise through the tranquil backwaters of Kerala on a luxurious houseboat. Enjoy freshly prepared local cuisine and watch the world drift by from the comfort of your private deck...",
      image_url: "https://images.pexels.com/photos/2533090/pexels-photo-2533090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "120",
      location: "Alleppey",
    },
    {
      title: "A Day in the Life of a Mumbai Dabbawala",
      description: "Experience the organized chaos of Mumbai's famous dabbawala system. Follow these dedicated lunchbox deliverymen as they navigate the city's bustling streets...",
      image_url: "https://images.pexels.com/photos/3378991/pexels-photo-3378991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "30",
      location: "Mumbai",
    },
    {
      title: "Tea Plantation Tour in Darjeeling",
      description: "Discover the art of tea-making on this exclusive tour of Darjeeling's famous tea plantations. Meet the farmers, learn about the tea-making process, and sample some of the finest teas in the world...",
      image_url: "https://images.pexels.com/photos/1575931/pexels-photo-1575931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "60",
      location: "Darjeeling",
    },
    {
      title: "Desert Safari in Jaisalmer",
      description: "Embark on a thrilling desert safari in the golden sands of Jaisalmer. Ride a camel into the dunes, witness a spectacular sunset, and enjoy a traditional Rajasthani dinner under the stars...",
      image_url: "https://images.pexels.com/photos/1916813/pexels-photo-1916813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "80",
      location: "Jaisalmer",
    },
    {
      title: "A Night in a Palace: Stay at the Udaipur Lake Palace",
      description: "Live like royalty for a night in the stunning Lake Palace of Udaipur. Enjoy unparalleled views of Lake Pichola, dine on gourmet cuisine, and unwind in luxury...",
      image_url: "https://images.pexels.com/photos/3018856/pexels-photo-3018856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "300",
      location: "Udaipur",
    },
    {
      title: "Mumbai Street Food Tour",
      description: "Explore the vibrant street food scene of Mumbai with a local food expert. Taste iconic dishes like vada pav, pav bhaji, and pani puri at the best stalls in the city...",
      image_url: "https://images.pexels.com/photos/2773947/pexels-photo-2773947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "20",
      location: "Mumbai",
    },
    {
      title: "Trekking Adventure in the Western Ghats",
      description: "Challenge yourself with a trek through the lush forests and rolling hills of the Western Ghats. This adventure offers stunning views, wildlife sightings, and a chance to connect with nature...",
      image_url: "https://images.pexels.com/photos/2395204/pexels-photo-2395204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "70",
      location: "Western Ghats",
    },
    {
      title: "Sunset Cruise on the Ganges in Kolkata",
      description: "Enjoy a peaceful evening on the Ganges River with a sunset cruise in Kolkata. Marvel at the city’s iconic landmarks as they glow in the golden light of the setting sun...",
      image_url: "https://images.pexels.com/photos/3531894/pexels-photo-3531894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "50",
      location: "Kolkata",
    },
    {
      title: "Explore the Temples of Khajuraho",
      description: "Step back in time with a guided tour of the ancient temples of Khajuraho. Learn about the intricate carvings and the history of this UNESCO World Heritage site...",
      image_url: "https://images.pexels.com/photos/2556033/pexels-photo-2556033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "55",
      location: "Khajuraho",
    },
    {
      title: "Ride the Toy Train in Shimla",
      description: "Take a scenic ride on the historic Kalka-Shimla toy train, winding through the lush mountains of Himachal Pradesh. This UNESCO World Heritage railway offers breathtaking views...",
      image_url: "https://images.pexels.com/photos/3627416/pexels-photo-3627416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "25",
      location: "Shimla",
    },
    {
      title: "Elephant Experience in Jaipur",
      description: "Spend a day at an elephant sanctuary near Jaipur. Learn about these magnificent animals, feed them, and even enjoy a gentle ride through the surrounding countryside...",
      image_url: "https://images.pexels.com/photos/3018712/pexels-photo-3018712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "90",
      location: "Jaipur",
    },
    {
      title: "Spiritual Retreat in the Sacred City of Varanasi",
      description: "Immerse yourself in the spirituality of Varanasi with a retreat focused on meditation, yoga, and exploration of the city’s sacred sites. Connect with the ancient traditions of India...",
      image_url: "https://images.pexels.com/photos/416004/pexels-photo-416004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "110",
      location: "Varanasi",
    },
];


main().then(()=>{
    console.log('DB Connected Successfull.');
    
}).catch((err)=>{
    console.log('Some issue is occur in DB connection', err);
    
})
async function main() {
    await mongoose.connect(URL);
}

Listing.insertMany(allListing);
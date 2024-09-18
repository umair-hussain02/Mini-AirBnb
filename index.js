//        ============== CONSTANTS =============
const express = require('express'); 
const app = express();  
const port = 3000; 
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const Listing = require('./models/listingmodel');
const URL = 'mongodb://127.0.0.1:27017/airbnb';
const path = require('path');
const ejsMate = require('ejs-mate');


//     ============== CONNECTING DATABASE =============
main().then(()=>{
    console.log('DB Connected Successfull.');
    
}).catch((err)=>{
    console.log('Some issue is occur in DB connection', err);
    
})
async function main() {
    await mongoose.connect(URL);
}


//        ============== MIDDLEWARES =============
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs" )
app.engine('ejs', ejsMate)







//        ============== APP ROUTES =============
app.get('/', async (req, res) => { 
    let allListing = await Listing.find();
    
  res.render("home.ejs",{allListing});
});

app.get("/creat-Listing",
  (req,res)=>{
    res.render('createListing')
  }
)

app.post('/new',
  (req,res)=>{
    let {title, description,image_url, price, location } =req.body;
    let newListing = new Listing({
      title: title,
      description: description,
      image_url: image_url, 
      price: price,
      location: location,
    })
    newListing.save()
    .then(() => {
      console.log('Listing has been created..');
      res.redirect("/");  // Redirect should be inside the then block to ensure it only happens after saving
  })
  .catch((err) => {
      console.log(err);
      res.status(500).send("Error saving Listing");  // It's a good practice to send an error response if something goes wrong
  });
  }
)

app.get('/:id/listing-detail',
  async(req,res) =>{
    let {id} = req.params;
    let place = await Listing.findById(id);    
    
    res.render('listingDetails', {place})
  }
)


//        ============== APP SETUP =============

app.listen(port, () => { 
  console.log(`Server is running on port ${port} | http://localhost:3000/`);
});
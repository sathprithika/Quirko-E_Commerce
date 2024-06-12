
const express=require('express')
const mongoose=require('mongoose') 
const cors=require('cors')
const { ClothModel, AccessoriesModel, DecorModel, ElectronicsModel, SportsModel, ArtsModel, CartModel, BuyModel, PayModel } = require('./models/schema');



const app = express()
app.use(express.json())
app.use(cors())
async function connectdb(){
  try{
await mongoose.connect("mongodb+srv://sathprithika:prithi4@cluster0.newjhtz.mongodb.net/quirko?retryWrites=true&w=majority&appName=Cluster0");
console.log("db connnection success")
         const x= 4000;
         app.listen(x,function(){
             console.log(`starting port ${x}...`)
         })
     }
     catch(err){
        console.log("db not connected: "+err);
    }
}
connectdb();

// Add clothes 
app.post('/addclothes', async (req, res) => {
  try {
      const { id, image, cloth_name, description, size, rating, price } = req.body;
      
      const cloth = new ClothModel({
          id,
          image,
          cloth_name,
          description,
          size,
          rating,
          price
      });
      await cloth.save();
      res.status(201).json({ message: "Clothes added successfully" });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.get('/getallclothes', async (req, res) => {
    try {
      const clothes = await ClothModel.find();
      res.json(clothes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Add accessories 
app.post('/addaccessories', async (req, res) => {
    try {
        const { id, image, name, description, rating, price } = req.body;
        
        const accessories = new AccessoriesModel({
            id,
            image,
            name,
            description,
            rating,
            price
        });
        await accessories.save();
        res.status(201).json({ message: "accessories added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/getallaccessories', async (req, res) => {
      try {
        const accessories = await AccessoriesModel.find();
        res.json(accessories);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });


// Add accessories 
app.post('/adddecor', async (req, res) => {
    try {
        const { id, image, name, description, rating, price } = req.body;
        
        const decor = new DecorModel({
            id,
            image,
            name,
            description,
            rating,
            price
        });
        await decor.save();
        res.status(201).json({ message: "decor added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/getalldecor', async (req, res) => {
      try {
        const decor = await DecorModel.find();
        res.json(decor);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });


// Add electronics
app.post('/addelectronics', async (req, res) => {
    try {
        const { id, image, name, description, rating, price } = req.body;
        
        const electronics = new ElectronicsModel({
            id,
            image,
            name,
            description,
            rating,
            price
        });
        await electronics.save();
        res.status(201).json({ message: "electronics added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/getallelectronics', async (req, res) => {
      try {
        const electronics = await ElectronicsModel.find();
        res.json(electronics);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

//sports
app.post('/addsports', async (req, res) => {
    try {
        const { id, image, name, description, rating, price } = req.body;
        
        const sports = new SportsModel({
            id,
            image,
            name,
            description,
            rating,
            price
        });
        await sports.save();
        res.status(201).json({ message: "sports added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/getallsports', async (req, res) => {
      try {
        const sports = await SportsModel.find();
        res.json(sports);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

//arts
app.post('/addarts', async (req, res) => {
    try {
        const { id, image, name, description, rating, price } = req.body;
        
        const arts = new ArtsModel({
            id,
            image,
            name,
            description,
            rating,
            price
        });
        await arts.save();
        res.status(201).json({ message: "arts added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/getallarts', async (req, res) => {
      try {
        const arts = await ArtsModel.find();
        res.json(arts);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });





//cart
app.post('/addcart', async (req, res) => {
    try {
        const { id, image, name, description, rating, price, quantity } = req.body;
        
        const cart = new CartModel({
            id,
            image,
            name,
            description,
            rating,
            price,
            quantity
        });
        await cart.save();
        res.status(201).json({ message: "cart items added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/getallcarts', async (req, res) => {
    try {
      const carts = await CartModel.find();
      res.json(carts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.delete('/deletecart/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const deletedCart = await CartModel.findOneAndDelete({ id: id });
      if (!deletedCart) {
        return res.status(404).json({ message: "Cart not found" });
      }
      res.json({ message: "Cart deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.patch('/increasequantity/:id', async (req, res) => {
    try {
      const cart = await CartModel.findOneAndUpdate(
        { id: req.params.id }, // Filter by cartId
        { $inc: { quantity: 1 } }, // Increment quantity by 1
        { new: true }
      );
      if (!cart) {
        return res.status(404).json({ message: 'Cart item not found' });
      }
      return res.json(cart); // Respond with the updated cart item
    } catch (err) {
      console.error('Error increasing quantity:', err);
      return res.status(400).json({ message: err.message });
    }
  });
  
  app.patch('/decreasequantity/:id', async (req, res) => {
    try {
      const cart = await CartModel.findOneAndUpdate(
        { id: req.params.id }, // Filter by cartId
        { $inc: { quantity: -1 } }, // Decrease quantity by 1
        { new: true }
      );
      if (!cart) {
        return res.status(404).json({ message: 'Cart item not found' });
      }
      return res.json(cart); // Respond with the updated cart item
    } catch (err) {
      console.error('Error decreasing quantity:', err);
      return res.status(400).json({ message: err.message });
    }
  });


//buy
// app.post('/addbuy', async (req, res) => {
//     try {
//         const { id, fullName, streetAddress, city, pincode, state, phoneNumber, country, countryCode} = req.body;
        
//         const buy = new BuyModel({
//           id,
//           fullName, 
//           streetAddress,  
//           city, 
//           pincode, 
//           state, 
//           phoneNumber, 
//           country, 
//           countryCode
            
//         });
//         await buy.save();
//         res.status(201).json({ message: "Buy added successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
//   });
  
app.post('/addbuy', async (req, res) => {
    try {
      const {
         // Assuming the frontend sends the full cloth object
        id,
        fullName,
        streetAddress,
        city,
        pincode,
        state,
        phoneNumber,
        country,
        countryCode,
        quantity,
        selectedSize,
        items
      } = req.body;
  
  
  
      // Create a new buy object with delivery information and cloth reference
      const newBuy = new BuyModel({
         // Set the cloth reference
        id,
        fullName,
        streetAddress,
        city,
        pincode,
        state,
        phoneNumber,
        country,
        countryCode,
        quantity,
        selectedSize,
        items
      });
  
      // Save the buy object to the database
      await newBuy.save();
  
      res.status(201).json({ message: 'Order placed successfully', order: newBuy });
    } catch (error) {
      console.error('Error placing order:', error);
      res.status(500).json({ error: 'An error occurred while placing the order' });
    }
  });


  //pay
  app.post('/addpay', async (req, res) => {
    try {
        const { id, cardName, cardNumber, expiryDate, cvv} = req.body;
        
        const pay = new PayModel({
          id,
          cardName, 
          cardNumber, 
          expiryDate, 
          cvv
          
            
        });
        await pay.save();
        res.status(201).json({ message: "Payment added successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  });


//with id
app.get('/getclothes/:id', async (req, res) => {
    try {
      const cloth = await ClothModel.findOne({ id: req.params.id });
      if (!cloth) {
        return res.status(404).json({ error: 'Cloth not found' });
      }
      res.json(cloth);
    } catch (error) {
      console.error('Error fetching cloth:', error);
      res.status(500).json({ error: 'An error occurred while fetching the cloth' });
    }
  });
  
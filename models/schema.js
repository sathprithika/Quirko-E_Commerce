const mongoose=require('mongoose')

//clothes
const ClothSchema=new mongoose.Schema({
    id :String,
    image : String,
    name : String,
    description :String,
    size : String,
    rating: String,
    price: String  
    

})

const ClothModel=mongoose.model("clothes",ClothSchema)

//accessories
const AccessoriesSchema=new mongoose.Schema({
    id :String,
    image : String,
    name : String,
    description :String,
    rating: String,
    price: String  
    

})

const AccessoriesModel=mongoose.model("accessories",AccessoriesSchema)

//decor
const DecorSchema=new mongoose.Schema({
    id :String,
    image : String,
    name : String,
    description :String,
    rating: String,
    price: String  
    

})

const DecorModel=mongoose.model("homedecors",DecorSchema)

//electronics
const ElectronicsSchema=new mongoose.Schema({
    id :String,
    image : String,
    name : String,
    description :String,
    rating: String,
    price: String  
    

})

const ElectronicsModel=mongoose.model("electronics",ElectronicsSchema)

//sports
const SportsSchema=new mongoose.Schema({
    id :String,
    image : String,
    name : String,
    description :String,
    rating: String,
    price: String  
    

})

const SportsModel=mongoose.model("sports",SportsSchema)

//arts
const ArtsSchema=new mongoose.Schema({
    id :String,
    image : String,
    name : String,
    description :String,
    rating: String,
    price: String  
    

})

const ArtsModel=mongoose.model("arts",ArtsSchema)


//cart
const CartSchema=new mongoose.Schema({
    id :String,
    image : String,
    name : String,
    description :String,
    rating: String,
    price: String,
    quantity: Number
    

})

const CartModel=mongoose.model("carts",CartSchema)

//buy
const BuySchema=new mongoose.Schema({
    id : String,
    fullName:String ,
    streetAddress: String,
    city: String,
    pincode: String,
    state: String,
    phoneNumber: String,
    country: String,
    countryCode:String,
    quantity: Number,
    selectedSize: String,
    items: [ClothSchema]
    

})

const BuyModel=mongoose.model("buys",BuySchema)

//pay
const PaySchema=new mongoose.Schema({
    id : String,
    cardName: String,
    cardNumber:  Number,
    expiryDate: String,
    cvv: Number

})

const PayModel=mongoose.model("payments",PaySchema)


module.exports={ClothModel:ClothModel,
AccessoriesModel:AccessoriesModel,
DecorModel:DecorModel,
ElectronicsModel:ElectronicsModel,
SportsModel:SportsModel,
ArtsModel:ArtsModel,
CartModel:CartModel,
BuyModel:BuyModel,
PayModel:PayModel

};
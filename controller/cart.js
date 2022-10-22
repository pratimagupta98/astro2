const Cart = require("../models/cart");
const resp = require("../helpers/apiResponse");
const Astroproduct = require("../models/astroproduct");



exports.addtoCart = async (req, res) => {
    const {shipping_address, astro_product} = req.body;
     const getastroproduct = await Astroproduct.findOne({ _id: req.body.astro_product });
    console.log("getastroproduct",getastroproduct)
    if (getastroproduct ) {
       const price  =getastroproduct.price
      console.log(price)
      let gstotal =0

      gstotal = price *18/100
      console.log("gstotal",gstotal)
      total_amt =price + gstotal
     // gsttotal = (price*product_qty) +(product_price*product_qty)
      
    
    const newaddCart = new Cart({
      
      shipping_address:shipping_address,
      astro_product: astro_product,
    })
  
    newaddCart.save()
     
        .then((data) => {
          res.status(200).json({
            status: true,
            msg: "Order Detail ",
            data: data,
           //total: sum,
           total_amt:total_amt
          
          });
        }) 
    
        .catch((error) => {
          res.status(200).json({
            status: false,
            msg: "error",
            error: error,
          });
        });
    
  }  
  }
  
  exports.getoneCart = async (req, res) => {
    await Cart.findOne({ _id: req.params.id }).populate("shipping_address")
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
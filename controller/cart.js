exports.addtocartproduct = async (req, res) => {


    const {cartId, product, product_price, product_qty, color, size } = req.body;
  
    let total_qty = 0;
     for (let i = 0; i < product.length; i++) {
       total_qty = total_qty + product[i].product_qty;
     }
     let sum = 0;
    let total_amount = 0;
    for (let i = 0; i < product.length; i++) {
     // total_amount =total_amount + product[i].product_price;
      //sum = sum + total_amount * total_qty;
    }
    //comment
    console.log();
     
     const getproduct = await Product.findOne({ _id: req.body.product });
    console.log(getproduct)
    if (getproduct) {
      const gstrate = await Gstrate.findOne({ _id: getproduct.gstrate });
      const value  =gstrate.value
      console.log(value)
      let gsttotal =0
      //gstttl = value + parseInt(product_price)
      gsttotal = (value*product_qty) +(product_price*product_qty)
      
    
    const addtoCart = new Cart({
      cartId : cartId,
      customer: req.userId,
     // gstrate: gstrate.value,
      product: product,
      product_price: product_price,
      product_qty: product_qty,
      color: color,
      size: size,
      gsttotal:gsttotal
    });
  
    const findexist = await Cart.findOne({
      $and: [
        {cartId : cartId},
        { customer: req.userId },
        { product: product },
        { color: color },
        { size: size },
        
      ],
    });
    if (findexist) {
      await Cart.findOneAndUpdate(
        {
          $and: [
            { customer: req.userId },
            { product: product },
            { color: color },
            { size: size },
          ],
        },
        { $set: {product_qty :findexist.product_qty + product_qty} },
  
        { new: true }
      )
        .then((data) => {
          res.status(200).json({
            status: true,
            msg: "cart updated",
            data: data,
           //total: sum,
          //  gst_total:gsttotal
          
          });
        })
    
        .catch((error) => {
          res.status(200).json({
            status: false,
            msg: "error",
            error: error,
          });
        });
    
  } else {
      addtoCart.save(function (err, data) {
        if (err) {
          res.status(400).json({
            status: false,
            msg: "Error Occured",
            error: err,
          });
        } else {
          res.status(200).json({
            status: true,
            msg: "Product added to cart",
            data: data,
            total_qty: product_qty,
             //total_amt : product_price,
             gst_total:gsttotal
  
          });
        }
      });
    }
  }
  }
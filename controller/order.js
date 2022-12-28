const Order = require("../models/order");
const resp = require("../helpers/apiResponse");

exports.AddOrder = async (req, res) => {
    const { cartId, orderId,razorpay_payment_id,status } = req.body
    const cus_orderId = "ORDC" + Date.now();
   // console.log("cus_orderId", cus_orderId)
   let d = new Date().toLocaleDateString()
//    console.log('Today is: ' + d.toLocaleDateString());
//    var today = moment(d).format('DD-MM-YYYY');
//    console.log("Today",today)
    const newOrder = new Order({
        cartId: cartId,
        orderId: cus_orderId,
        razorpay_payment_id:razorpay_payment_id,
        date: d,
        status:status
    })
console.log(newOrder)
    
     
if((req.body.razorpay_payment_id)!==undefined || (req.body.razorpay_payment_id) !=null ||(req.body.razorpay_payment_id) || ''){
    newOrder.save()
    .then((data) =>{
        res.status(200).json({
    
                    status: true,
                    msg: "Product Ordered",
                    data: data,
        })
    })
}else{
    res.status(400).json({
                        status: false,
                        msg: "error",
                       
                    });
}
}


exports.getoneOrder = async (req, res) => {
    await Order.findOne({_id:req.params.id})
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };
const ChatWallet = require("../models/chatWallet");
const resp = require("../helpers/apiResponse");
const Astrologer = require("../models/astrologer");
const Minutecharge = require("../models/min_charges");
const User = require("../models/users");



exports.addChatWallet = async (req, res) => {
    const {userid,astroid,recharge_planId} = req.body;

const newChatWallet = new ChatWallet({
    userid:userid,
    astroid:astroid,
    recharge_planId:recharge_planId

})
const getoneastro = await Astrologer.findOne({_id:req.body.astroid})
//console.log("ASTRO",getoneastro)
if(getoneastro){
const getcharge = getoneastro.callCharge
console.log("CALLCHARGE",getcharge)

 const getplanchrge = await Minutecharge.findOne({_id:req.body.recharge_planId})
 console.log("MIN PLAN",getplanchrge)
 if(getplanchrge){
 const getplan = getplanchrge.minute
 console.log("getplan",getplan)

 const getuserdetail = await User.findOne({_id:req.body.userid})
 //console.log("GETUSER",getuserdetail)
 if(getuserdetail){
    let totalamt = getcharge*getplan
    console.log("TOTAL AMT WAS DEDUCTED",totalamt)
 const getwalletamt = getuserdetail.amount
 console.log("WALLET AMT",getwalletamt)
 let  newamt=0
 if (getwalletamt>totalamt){
console.log("success")

newamt =getwalletamt - totalamt
console.log("camt",getwalletamt)
console.log("new",newamt)
newChatWallet.save()
        .then((data) => {
          res.status(200).json({
            status: true,
            msg: "success",
            data: data,
            // callCharge:getoneastro.callCharge,
            // minute:
          });
        }) 
        .catch((error) => {
          res.status(400).json({
            status: false,
            msg: "error",
            error: error,
          });
        });
        const finduserAndupdate = await User.findOneAndUpdate(
  
            { _id: req.body.userid },
            
            { $set: {amount:newamt } },
           
          //     { amount: currntamt },
               
          // { $set: {status:"success"} },
          { new: true },
          )
          if(finduserAndupdate){
console.log("UPDATE USER AMOUNT",finduserAndupdate)

          }
        //   const getplan = getplanchrge.minute
        //   console.log("getplan",getplan) //45
//         var d = new Date()
//         var time = d.toLocaleTimeString()
//         ;console.log(time);

//           const findastroAndupdate = await Astrologer.findOneAndUpdate(
  
//             { _id: req.body.astroid },
            
//             { $set: {status:newamt } },
           
//           //     { amount: currntamt },
               
//           // { $set: {status:"success"} },
//           { new: true },
//           )
//           if(finduserAndupdate){
// console.log("UPDATE USER AMOUNT",finduserAndupdate)

//           }


 }else{
    console.log("INSUFFICIENT BALANCE")
    res.status(201).json({
        status:false,
        msg:"Insufficient belence"
    })
 }

 }else{
    console.log("ERROR")
    res.status(400).json({
        status:false,
        msg :"Something Went Wrong"
    })
 }
 }else{
console.log("error")
res.status(400).json({
    status:false,
    msg :"Something Went Wrong"
})
 }

}else{
    console.log("error")
    res.status(400).json({
        status:false,
        msg :"Something Went Wrong"
    })
}
    

  }  

  
  exports.getoneCart = async (req, res) => {
   const getone= await Cart.findOne({ _id: req.params.id }).populate("shipping_address").populate("astroId")
   //.populate("astroid")
   .populate({
    path: "astroId",
    populate: {
      path: "astroid",
    },
  })
  .populate({
    path: "astroId",
    populate: {
      path: "product",
    },
  })
  .populate({
    path: "astroId",
    populate: {
      path: "category",
    },
  }).populate("productid")
//console.log("strng",getone)
  //  if(getone){
  //   const astropro = getone.astro_product
  //   console.log("pp",astropro)
  //   const price  =astropro.price
  //     console.log(price)
  //     let gstotal =0

  //     gstotal = price *18/100
  //     console.log("gstotal",gstotal)
  //     total_amt =price + gstotal


  //     res.status(200).json({
  //       status: true,
  //       msg: "success",
  //       data: getone,
  //     //  gsttotal: gsttotal, 
  //     total_amt :total_amt    
  //     });
     
  //  }else{
  //   res.status(400).json({
  //     status: false,
  //     msg: "error",
  //     error: "error",
  //   });
  

  .then((data) => resp.successr(res, data))
   .catch((error) => resp.errorr(res, error));
   }
    
     
     // gsttotal = (price*product_qty) +(product_price*product_qty)
      // .then((data) => resp.successr(res, data))
      // .catch((error) => resp.errorr(res, error));
  exports.cartbycustomer = async (req, res) => {
    //await Cart.remove()
    const findone = await Cart.find({userid: req.userId })
      // .populate("customer")
     if (findone) {
    const findall = await Product.find({ product: req.params.id })
    console.log(findall)
    const value = findall.value
      console.log(findall)
      if (findall) {
        const getgst = await Gstrate.findOne({ gstrate: findall.gstrate });
       let value = getgst.value
       console.log(getgst)
  console.log(value)
  
      let sum = 0;
      //const value = 0
       for (let i = 0; i < findone.length; i++) {
        let element_price = findone[i].product_price;
        let element_qty = findone[i].product_qty;
         
      //  let element_gst = findone[i].gsttotal;
         sum =(element_price * element_qty);
        // let sum = 0;
        // sum =  (element_price * element_qty);
        //  gsttotal = value +(element_price*element_qty)
        //   console.log(gsttotal)
       }
      res.status(200).json({
        status: true,
        msg: "success",
        data: findone,
      //  gsttotal: gsttotal, 
    //  ttl :gsttotal    
      });
    } else {
      res.status(400).json({
        status: false,
        msg: "error",
        error: "error",
      });
    }
  }
   }


   exports.getOneChatWallet = async (req, res) => {
    await ChatWallet.findOne({userid:req.params.id}).populate("userid").populate("astroid").populate("recharge_planId")
      .sort({ createdAt: -1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };

  exports.completed_order = async (req, res) => {

    // const findone =  await Cart.find({
    //   $and: [{ userId: req.params.userId}, { status: "Completed" }],
    // })
    await Cart.find({$and: [{ userId: req.params.id}, { status: "Completed" }]}).populate({
      path: "astroId",
      populate: {
        path: "astroid",
      },
    })
    .populate("shipping_address")
      .sort({ createdAt: -1 })
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  };



  exports.dltMany = async (req, res) => {
    await Cart.deleteMany()
      .then((data) => resp.deleter(res, data))
      .catch((error) => resp.errorr(res, error));
  };

  exports.pending_order = async (req, res, next) => {
    const finddetails = await Ordertable.find({
      $and: [{ seller: req.sellerId }, { status: "Pending" }],
    })
      .populate("customer")
      .populate("product")
      .then((result) => {
        res.status(200).json({
          status: true,
          msg: "success",
          data: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          status: false,
          msg: "error",
          error: error,
        });
      });
  };
  
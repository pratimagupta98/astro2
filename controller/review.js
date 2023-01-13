const Review = require("../models/review");
const Astrologer = require("../models/astrologer");

exports.addreview = async(req,res)=>{
    const {userid,astroid,rating,comment}  = req.body

 
    const newReview  = new Review({
        userid: userid ,
        astroid:astroid,
        rating : rating,
        comment :comment
        
    })
   
    // const getastro = await Astrologer.findOne({_id:req.body.astroid})
    // if(getastro){
    //   console.log("astro",getastro)
    //   const avg= getastro.avg_rating
    //   console.log("avg",avg)

    // }
    
        newReview
        .save()
        .then(
          res.status(200).json({
            status: true,
            msg: "success",
            data: newReview,
          })
        )
  
        .catch((error) => {
          res.status(400).json({
            status: false,
            msg: "error",
            error: error,
          });
        });
    }
 // };


  
  exports.totalcomment = async(req,res) =>{
    await Review.countDocuments().then((data)=>{
      res.status(200).json({
        status: true,
        totalcomment: data,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: false,
        msg: "error",
        error: error,
      });
    })
  }

exports.allRevieAstro =async(req,res)=>{
    const findall =await Review.find({astroid:req.params.id}).sort({sortorder:1}).populate("userid").populate("astroid")
    if(findall){
        res.status(200).json({
            status:true,
            msg:"success",
            data:findall
        })
    }else{
        res.status(400).json({
            status:false,
            msg:"error",
            error:"error"
        })
    }

}

  exports.getonereviewproduct = async(req,res) => {
    const findall =await Review.find({product:req.params.id})
    .populate("customer").populate("product")
    if(findall){
        res.status(200).json({
            status:true,
            msg:"success",
            data:findall
        })
    }else{
        res.status(400).json({
            status:false,
            msg:"error",
            error:"error"
        })
    }

  }


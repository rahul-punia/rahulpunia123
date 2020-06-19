const reviewModel=require("../model/reviewModel");
const factory=require("../utility/factory");
// createReview,getAllReviews
// async function createReview(req,res){
//     try{
//         const review=await reviewModel.create(req.body);
//         res.status(201).json({
//             review
//         })
//     }catch(err){
//         res.status(200).json({
//             err:err.message
//         })
//     }
// }

// async function getAllReviews(req,res){
//     try{
//      const reviews=await reviewModel.find().populate("plan");
//     //  .populate({  Error
//     //     path: "user",
//     //     select: "name profileImage"
//     // })
//      res.status(201).json({
//          reviews
//      })
//     }catch(err){
//         res.status(200).json({
//             err:err.message
//         })
//     }
// }

// module.exports.createReview=createReview;
// module.exports.getAllReviews=getAllReviews;

module.exports.getReview=factory.getElement(reviewModel);
module.exports.getAllReviews=factory.getAllElement(reviewModel);
module.exports.updateReview=factory.updateElement(reviewModel);
module.exports.deleteReview=factory.deleteElement(reviewModel);
module.exports.createReview=factory.createElement(reviewModel);
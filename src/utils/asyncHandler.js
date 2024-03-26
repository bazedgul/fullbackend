const asyncHandler = (requestHandler)=>{
// promise method 
(req,res,next) =>{
    Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
}
}

export {asyncHandler};



// try and catch Method 
// const asyncHandler = (fn) => async (req,res,next) => {
// try {
//     await 
// } catch (error) {
//     res.status(err.code || 500).json({\
//         success: false,
//         message: err.message
//     })
// }
// }
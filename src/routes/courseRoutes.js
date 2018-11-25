const express=require("express");
const courseRouter=express.Router();
function route(navlinks,navdropdown,list){
    courseRouter.route("/").get((req,res)=>{res.render("courseRoutes",{title:"COURSES",nav})});
        return courseRouter;

}
module.exports=route;
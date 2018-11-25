const express=require("express");
const aboutusRouter=express.Router();
function route(navlinks,navdropdown,list){
    aboutusRouter.route('/aboutus').get((req,res)=>{{res.render("aboutusRoutes",{title:"aboutus",navlinks,navdropdown,list})}});
        return aboutusRouter;

}
module.exports=route;
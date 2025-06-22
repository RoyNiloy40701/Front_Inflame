const { Schema, model } = require("mongoose");
const { Children } = require("react");
const { models } = require("mongoose");

const CommentsSchema = new Schema({
    name:{type:String, required:true},
    email:{type:String}, 
    title:{type:String},
    contentpera:{type:String}, 
    maincomment:{type:String},
    createdAt:{type:Date, default:Date.now},
    blog:{type:Schema.Types.ObjectId, ref:"Blog", required:true},
    parent:{type:Schema.Types.ObjectId, ref:"Comment", default:null},
    children:{type:Schema.Types.ObjectId, ref:"Comment"},
    parentName:{type:String, default:""},
})

export const Comments = models.Comment || model("Comment", CommentsSchema);
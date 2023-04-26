const mongoose = require("mongoose");

//---[ WEB ]---
// UserModel
const UserSchema = new mongoose.Schema({
	login: String || null,
	email: String || null,
	password: String || null,
	role: String || null
}, { versionKey: false });
const UserModel = mongoose.model("Users", UserSchema);
//---
const PostSchema = new mongoose.Schema({
	id: Number || null,
	author: String || null,
	text: String || null,
	imgUrl: String || null,
	likes: Number || null,
	likesId: String || null
}, { versionKey: false });
const PostModel = mongoose.model("Posts", PostSchema);
//--
const LikesSchema = new mongoose.Schema({
	likes: {
		of: {
			post: Boolean || null,
			author: String || null
		},
		type: Array || null
	}
}, { versionKey: false });
const LikesModel = mongoose.model("Likes", LikesSchema);
//---
const CommentSchema = new mongoose.Schema({
	comments: {
		of: {
			author: String || null,
			text: String || null,
			likesId: String || null,
			type: Object || null
		},
		type: Array || null
	} || null
}, { versionKey: false });
const CommentsModel = mongoose.model("Comments", CommentSchema);
//---
const VariablesSchema = new mongoose.Schema({
	lastPostId: Number || null
}, { versionKey: false });
const VariablesModel = mongoose.model("Variables", VariablesSchema);

module.exports = { UserModel, PostModel, CommentsModel, LikesModel, VariablesModel };
const express = require("express");
const fs = require("fs");
const axios = require("axios");
const router = express.Router();
const config = require("./config.json");
const DBH = require("./DB/DBH.js")
const posts = require("./data.json")

router.use(express.json());


// Posts

console.log(`/web/variables GET: ${config.api.get.lastPosts}`)
if (config.api.get.lastPosts) {
	router.get("/web/variables", (req, res) => {
		res.send(DBH.variables)

	})
} else {
	router.get("/web/variables", (req, res) => {
		res.send({ "error": "EROUTEISOFF" });
	})
}

console.log(`/web/lastposts GET: ${config.api.get.lastPosts}`)
if (config.api.get.lastPosts) {
	router.get("/web/lastposts/:amount", (req, res) => {

		let amount = Number(req.params.amount)

		if (!amount) {
			return res.send("EBADPARAMS")
		}

		DBH.getLastPosts({ amount: amount }).then(posts => {
			res.send(posts)
		}).catch(e => {
			console.log(e)
			res.send({ "error": e })
		})
	})
} else {
	router.get("/web/lastposts", (req, res) => {
		res.send({ "error": "EROUTEISOFF" });
	})
}

console.log(`/web/posts/:CUSTOM GET: ${config.api.get.posts}`)
if (config.api.get.posts) {
	router.get("/web/posts/:id", (req, res) => {
		let id = req.params.id;

		id = Number(id)

		console.log(id)

		if (typeof id != "number") {
			return res.send("EBADPARAMS");
		}

		DBH.getPost({ id: id }).then(post => {
			res.send(post);
		}).catch(e => {
			res.send({ "error": e })
		})

	})
} else {
	router.get("/web/posts", (req, res) => {
		res.send({ "error": "EROUTEISOFF" });
	})
}

// FS

console.log(`/FS GET: ${config.api.get.FSPath}`)
if (config.api.get.FSPath) {
	router.get("/FS", (req, res) => {
		console.log(req.query.dir)
		if (!req.query) { return res.send({ "error": "EBADPARAMS" }) }
		fs.readdir("./public" + req.query.dir, (err, result) => {
			let PathData = []

			console.log(req.query.dir)
			console.log("./public" + req.query.dir)

			result.forEach(element => {
				PathData.push({
					dir: (element.includes(".") ?
						`https://rancor.space${req.query.dir}/${element}` :
						`/instruments/FS?dir=${req.query.dir}/${element}`),
					file: element
				})
			});

			res.send({ "data": PathData })
		})
	})
} else {
	router.get("/FS", (req, res) => {
		res.send({ "error": "EROUTEISOFF" });
	})
};

// REDIRECTS

console.log(`/r/:CUSTOM GET ${config.api.redirect.custom}`)
if (config.api.redirect.custom) {
	router.get("/r/:id", (req, res) => {
		const id = req.params.id;
		DBH.getRedirectUrl({ id: id }).then(RUrl => {
			RUrl.redirected += 1;
			res.redirect(RUrl.url);
		}).catch(e => {
			if (e == "no-redirectUrl") { res.send({ "error": "EWRONGID" }) }
		})
	})
} else {
	router.get("/r/", (req, res) => {
		res.send({ "error": "EROUTEISOFF" })
	})
}

// Web AUTH

console.log(`/web/user POST: ${config.api.post.user}`)
if (config.api.post.user) {
	router.post("/web/user", (req, res) => {

		if (!req.body.method) {
			return res.send({ "error": "ENOMETHOD" })
		}

		if (!req.body.auth && !req.body.jwt) {
			return res.send({ "error": "EBADPARAMS" })
		}

		let auth = req.body.auth

		switch (req.body.method) {
			case "login": {
				DBH.getUserWithJWT({
					auth: auth,
					jwt: req.body.jwt
				}).then(authWithJWT => {

					res.send(authWithJWT)

				}).catch(e => {

					res.send({ "error": e });

				})
			} break;

			case "register": {
				DBH.createUserWithJWT({
					auth: auth,
					jwt: req.body.jwt
				}).then(authWithJWT => {

					res.send(authWithJWT)

				}).catch(e => {

					res.send({ "error": e });

				})
			} break;

			case "update": {
				DBH.updateUserWithJWT({
					auth: auth,
					jwt: req.body.jwt,
					update: req.body.update
				}).then(data => {

					res.send(data)

				}).catch(e => {
					res.send({ "error": e })
				})
			} break;

			case "jwt": {
				DBH.getUserWithJWT({
					jwt: req.body.jwt
				}).then(authWithJWT => {
					res.send(authWithJWT)
				}).catch(e => {

					res.send({ "error": e });

				})
			} break;


			default: {
				return res.send({ "error": "EWRONGDATAMETHOD" })
			}
		}
	})

} else {
	router.post("/web/user", (req, res) => {
		res.send({ "error": "EROUTEISOFF" })
	})
}

// posts

console.log(`/web/posts POST: ${config.api.post.user}`)
if (config.api.post.user) {
	router.post("/web/posts", (req, res) => {

		if (!req.body.method) {
			return res.send({ "error": "ENOMETHOD" })
		}
		let auth = req.body.auth

		switch (req.body.method) {
			case "getPosts": {
				res.send(posts)
			} break;

			case "createPost": {
				DBH.JWTVerify({ jwt: req.body.jwt }).then(jwt => {
					DBH.createPost({
						auth: jwt,
						post: {
							text: req.body.post.text,
							url: req.body.post.imgUrl
						}
					}).then(Post => {
						res.send(Post)

					}).catch(e => {
						console.log(e)
						res.send({ "error": e })
					})
				})
			} break;
			default: {
				return res.send({ "error": "EWRONGDATAMETHOD" })
			}
		}
	})
} else {
	router.post("/web/posts", (req, res) => {
		res.send({ "error": "EROUTEISOFF" })
	})
}
module.exports = { router, DBH }
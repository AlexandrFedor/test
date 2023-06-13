/*
.___  ___     _   _   ,   __  _ ____  _    ____ ____
| _ \| _ \   | |_| | / \ |  \| |  _ \| |  | ___| __ \
||_| | _ <   |  _  |/ _ \| . ' | |_| | |__| ___|    /
|___/|___/   |_| |_|_/ \_|_|\__|____/|____|____|_|\_\

MongoDB + mongoose  :  0.5a
*/

const JWT = require("jsonwebtoken");
const mongoose = require("mongoose");

/** class representing a DBH */
class DBH {
	/**
	 * Create an instance of DataBase Handler
	 * @author happy-mama
	 * @version 0.5a
	 */
	constructor() {
		this.cache = {
			users: new Map(),
			posts: new Map(),
			likes: new Map(),
			comments: new Map(),
			jwt: new Map(),
		};
		this.variables;
		this.schemas = require("./schemas.js");
		this.JWTS = "";
	}

	/**
	 * Initiates a connection to MongoDB
	 * @param {Object} config an Object
	 * @param {String} config.user account login
	 * @param {String} config.password account password
	 * @param {String} config.host DB ip
	 * @param {String} config.database name of DB
	 * @param {String} config.JWTS JWT secret
	 * @return {Promise<void>} `void`
	 */
	init(config) {
		return new Promise((result, reject) => {

			if (!config.JWTS) {
				reject("ENOJWTS")
			}

			if (!(config.database || config.host || config.password || config.user)) {
				reject("ENOCONFIGPROPERIES")
			}

			mongoose.connect(`mongodb://${config.user}:${config.password}@${config.host}/${config.database}?retryWrites=true`).then(() => {
				this.JWTS = config.JWTS;
				console.log("[DB]: CONNECTED");

				setInterval(() => {
					this.cacheSave();
				}, 1000 * 60 * 10);

				this.schemas.VariablesModel.findOne().then(variables => {
					this.variables = variables

					result();
				}).catch(e => { reject(e) })


			}).catch(e => { reject(e); });
		});
	}

	//-----------
	// @typedef's
	//-----------

	/**
	 * DBH MongoDB object id
	 * @typedef {String} DBH_MongoDBObjectId
	 */

	/**
	 * DBH user login
	 * @typedef {String} DBH_login
	 */

	/**
	 * DBH user email
	 * @typedef {String} DBH_email
	 */

	/**
	 * DBH password
	 * @typedef {String} DBH_password
	 */

	/**
	 * DBH jwt string
	 * @typedef {string} DBH_JWT
	 */

	/**
	 * DBH user update object
	 * @typedef DBH_UserUpdate
	 * @property {DBH_login|null} login - user login
	 * @property {DBH_email|null} email - user email
	 * @property {DBH_password|null} password - user password
	 */

	/**
	 * DBH Auth object
	 * @typedef DBH_Auth
	 * @property {DBH_login|null} login - user login
	 * @property {DBH_email|null} email - user email
	 * @property {DBH_password} password - user password
	 */

	/**
	 * DBH Auth with MongoDB id
	 * @typedef DBH_AuthID
	 * @property {DBH_login} login - user login
	 * @property {DBH_email} email - user email
	 * @property {DBH_password} password - user password
	 * @property {DBH_MongoDBObjectId} _id - user MongoDB id
	 */

	/**
	 * DBH returns Promise Auth
	 * @typedef DBH_PromiseAuth
	 * @property {DBH_AuthID} auth - user data
	 */

	/**
	 * DBH returns Promise JWT
	 * @typedef {DBH_JWT} DBH_PromiseJWT - JWT token
	 */

	/**
	 * DBH Promise with Auth Object and JWT token
	 * @typedef DBH_PromiseAuthWithJWT
	 * @property {DBH_AuthID} auth - user data
	 * @property {DBH_PromiseJWT} jwt - jwt token
	 */

	/**
	 * DBH Post Id
	 * @typedef DBH_PostId
	 * @property {Number} id
	 */

	/**
	 * DBH url
	 * @typedef DBH_url
	 * @property {String} url
	 */

	/**
	 * DBH post
	 * @typedef DBH_Post
	 * @property {DBH_PostId} id DBH Post Id
	 * @property {DBH_MongoDBObjectId} authorId MongoDB Id
	 * @property {String} text Post text
	 * @property {DBH_url} imgUrl Post image url
	 * @property {number} likes Post likes Number
	 * @property {DBH_PostId} likesId Post likes id
	 */

	/**
	 * DBH comment
	 * @typedef DBH_Comment
	 * @property {DBH_MongoDBObjectId} author
	 * @property {String} text
	 * @property {DBH_PostId} likesId
	 */

	/**
	 * DBH comments
	 * @typedef {DBH_Comment[]} DBH_Comments
	 */

	/**
	 * DBH like
	 * @typedef DBH_Like
	 * @property {Boolean} post Post or Comment
	 * @property {DBH_MongoDBObjectId} authorId MongoDB Object Id
	 */

	/**
	 * DBH likes
	 * @typedef {DBH_Like[]} DBH_Likes
	 */

	//--------------
	//public methods
	//--------------

	/**
	 * create post
	 * @param {object} opts
	 * @param {DBH_AuthID} opts.auth
	 * @param {object} opts.post
	 * @param {String} opts.post.text
	 * @param {DBH_url} opts.post.url
	 * @returns {Promise<DBH_Post[]>}
	 */
	createPost(opts) {
		return new Promise((result, reject) => {

			this.variables.lastPostId++

			let post = new this.schemas.PostModel({
				id: this.variables.lastPostId,
				author: opts.auth.decoded._id,
				text: opts.post.text || null,
				imgUrl: opts.post.url,
				likes: 0,
				likesId: "сделай лайки"
			})
			console.log(opts.auth)
			post.save().then(() => {

				this.variables.save()

				result(post)

			}).catch(e => {
				this.variables.lastPostId--
				reject(e)
			})

		})
	}
	/**
	 * Get <amount> last posts
	 * @param {object} opts
	 * @param {number} opts.amount amount of last posts
	 * @returns {Promise<DBH_Post[]>}
	 */
	getLastPosts(opts) {
		return new Promise(async (result, reject) => {

			let posts = []
			let i = 20

			while (i) {

				await this.getPost({ id: opts.amount }).then(post => {
					posts.push(post)

					opts.amount--

					if (opts.amount) {
						i--
					} else {
						i = 0
					}
				}).catch(e => {
					opts.amount--
					i--
					// return reject(e)
				})
			}
			result(posts)
		})
	}

	/**
	 * Get post Object from DB or cache
	 * @param {object} opts
	 * @param {DBH_PostId} opts.id
	 * @returns {Promise<DBH_Post>}
	 */
	getPost(opts) {
		return new Promise((result, reject) => {

			this.cachePost({ id: opts.id ? opts.id : undefined }).then(data => {
				return result(data);
			}).catch(e => {
				if (e == "ENOCACHEPOST") {

					this.findPost({ id: opts.id ? opts.id : undefined }).then(data => {

						this.schemas.UserModel.findById(data.author).then(author => {
							data.author = author.login
							return result(data);
						}).catch(e => { reject(e) })

					}).catch(e => { return reject(e); })

				} else {
					return reject(e);
				}
			});

		});
	};

	/**
	 * Get `User` Object from `DBH Cache`
	 * @param {Object} opts
	 * @param {DBH_PostId} opts.id post Id
	 * @returns {}
	 */
	cachePost(opts) {
		return new Promise((result, reject) => {

			let post = this.cache.posts.get(opts.id)

			if (post) {
				result(post)
			} else {
				reject("ENOCACHEPOST")
			}

		})
	};

	/**
	 * Finds post from MongoDB
	 * @param {Object} opts
	 * @param {DBH_PostId} opts.id
	 * @returns {Promise<DBH_Post>}
	 */
	findPost(opts) {
		return new Promise((result, reject) => {

			let query = {
				"id": opts.id
			}

			this.schemas.PostModel.findOne(query).then(post => {

				if (!post) {
					return reject("ENOPOST");
				} else {

					this.cache.posts.set(opts.id, post);

					return result(post);

				}

			}).catch(e => { return reject(e) });

		})
	}

	/**
	 * Updates user in DB
	 * @param {Object} opts
	 * @param {DBH_JWT} opts.jwt
	 * @param {DBH_AuthID} opts.auth
	 * @param {DBH_UserUpdate} opts.update
	 * @returns {Promise<DBH_PromiseAuth>}
	 */
	updateUser(opts) {
		return new Promise((result, reject) => {

			this.getUser({ auth: opts.auth, jwt: opts.jwt }).then(oldData => {

				let temp = {
					login: oldData.auth.login,
					email: oldData.auth.email
				}

				oldData.auth.login = opts.update.login || oldData.auth.login || "";
				oldData.auth.email = opts.update.email || oldData.auth.email || "";
				oldData.auth.password = opts.update.password || oldData.auth.password || "";

				this.authCheck(oldData.auth).then(_data => {

					this.findUser({ auth: opts.update, ignoreCheck: true }).then(fData => {

						if ((fData.auth.login == temp.login) && (fData.auth.email == temp.email)) {

							this.cache.users.delete(fData.auth._id);
							this.cache.users.delete(fData.auth._id);

							_data.auth.save()

							return result(_data);

						} else {
							return reject("EPARAMSBUSY");
						}

					}).catch(e => {

						if (e != "ENOUSER") {
							return reject(e + "3");
						}

						this.cache.users.delete(_data.auth._id);
						this.cache.users.delete(_data.auth._id);

						_data.auth.save()

						return result(_data);

					})

				}).catch(e => { return reject(e); })

			}).catch(e => { return reject(e); })

		})
	}

	/**
	 * Updates user in db and returns JWT
	 * @param {Object} opts
	 * @param {DBH_JWT} opts.jwt
	 * @param {DBH_AuthID} opts.auth
	 * @param {DBH_UserUpdate} opts.update
	 * @returns {Promise<DBH_PromiseAuthWithJWT>}
	 */
	updateUserWithJWT(opts) {
		return new Promise((result, reject) => {

			this.updateUser({ jwt: opts.jwt, auth: opts.auth, update: opts.update }).then(data => {

				this.JWTCreate({ auth: data.auth }).then(jwt => {

					return result({
						auth: data.auth,
						jwt: jwt
					});

				}).catch(e => { return reject(e); });

			}).catch(e => { return reject(e); });

		})
	}

	/**
	 * Get `JWT` Object from `JWT` token
	 * @param {Object} opts
	 * @param {DBH_JWT} opts.jwt JWT token
	 * @returns {Promise<DBH_AuthID>} Auth user Object
	 */
	JWTVerify(opts) {
		return new Promise((result, rejeсt) => {

			let decoded = this.cache.jwt.get(opts.jwt);

			if (decoded) {

				return result(decoded);

			} else {

				JWT.verify(opts.jwt, this.JWTS, (err, decoded) => {
					if (err) {

						if (err.name = "TokenExpiredError") {

							return rejeсt("EJWTEXPIRED");

						} else {
							return rejeсt(err);
						}

					}

					this.cache.jwt.set(opts.jwt, decoded);
					return result(decoded);

				})

			}

		});
	};

	/**
	 * Create `JWT` token
	 * @param {object} opts
	 * @param {DBH_AuthID} opts.auth auth wtith MongoDB Object id
	 * @returns {Promise<DBH_JWT>} `JWT` token
	 */
	JWTCreate(opts) {
		return new Promise((result) => {

			if (!(opts.auth._id || opts.auth.email || opts.auth.login || opts.auth.password)) {
				return reject("EBADAUTHDATA")
			}

			let decoded = {
				login: opts.auth.login,
				password: opts.auth.password,
				email: opts.auth.email,
				_id: opts.auth._id
			}

			let coded = JWT.sign({ decoded }, this.JWTS, {
				expiresIn: 1000 * 60 * 60 * 24 * 7
			});

			this.cache.jwt.set(coded, { decoded });

			return result(coded);
		})
	};

	/**
	 * Get user Object from DB or cache via JWT token or Auth Object
	 * @param {object} opts
	 * @param {DBH_JWT | null} opts.jwt JWT token
	 * @param {DBH_AuthID | null} opts.auth Auth user ID
	 * @returns {Promise<DBH_PromiseAuth>} Auth user Object
	 */
	getUser(opts) {
		return new Promise((result, reject) => {
			this.cacheUser({ jwt: opts.jwt, _id: opts.auth ? opts.auth._id : undefined }).then(data => {
				return result(data);
			}).catch(e => {
				if (e == "ENOCACHEUSER") {

					this.findUser({ jwt: opts.jwt, auth: opts.auth }).then(data => {

						return result(data);

					}).catch(e => { return reject(e); })

				} else {
					return reject(e);
				}
			});

		});
	};

	/**
	 * Sends a request to DB to find user
	 * @param {Object} opts
	 * @param {DBH_JWT | null} opts.jwt JWT token
	 * @param {DBH_Auth | null} opts.auth Auth user Object
	 * @param {boolean} opts.ignoreCheck ignore users check before find user
	 * @returns {Promise<DBH_PromiseAuth>}
	 */
	findUser(opts) {
		return new Promise((result, reject) => {

			this.identifyCheck({
				auth: opts.auth,
				jwt: opts.jwt,
				ignore: opts.ignoreCheck
			}).then(() => {

				if (opts.jwt) { // find via jwt

					this.JWTVerify({ jwt: opts.jwt }).then(decoded => {

						decoded = decoded.decoded

						let query = {}

						if (decoded.login) {
							Object.assign(query, { "login": decoded.login });
						}

						if (decoded.email) {
							Object.assign(query, { "email": decoded.email });
						}

						if (decoded.password) {
							Object.assign(query, { "password": decoded.password });
						}

						this.schemas.UserModel.findOne(query).then(user => {

							if (!user) {
								return reject("ENOUSER");
							} else {

								this.cache.users.set(user._id, user);

								return result({ auth: user });

							}

						}).catch(e => { return reject(e) });

					}).catch(e => { return reject(e); });

				} else { // find via Auth

					let query = {}

					if (opts.auth.login) {
						Object.assign(query, { "login": opts.auth.login });
					}

					if (opts.auth.email) {
						Object.assign(query, { "email": opts.auth.email });
					}

					if (opts.auth.password) {
						Object.assign(query, { "password": opts.auth.password });
					}

					this.schemas.UserModel.findOne(query).then(user => {

						if (!user) {
							return reject("ENOUSER");
						} else {

							this.cache.users.set(user._id, user);

							return result({ auth: user });
						}

					}).catch(e => { return reject(e) });

				}

			}).catch(e => { return reject(e); })

		});
	}

	/**
	 * Get `User` Object from `DBH Cache`
	 * @param {Object} opts
	 * @param {DBH_JWT | null} opts.jwt jwt token
	 * @param {DBH_MongoDBObjectId | null} opts._id Auth User ID
	 * @returns {Promise<DBH_PromiseAuth> | null} Auth user Object
	 */
	cacheUser(opts) {
		return new Promise((result, reject) => {

			if (opts.jwt) { // get user via jwt

				this.jwtCheck(opts.jwt).then(jwt => {

					let user = this.cache.jwt.get(jwt)

					if (user) {
						return result({ auth: user });
					} else {
						return reject("ENOCACHEUSER");
					}

				}).catch(e => { return reject(e); })

			}

			if (opts._id) { // get user via Auth ID

				this.authIDCheck(opts._id).then(_id => {

					let user = this.cache.users.get(_id);

					if (user) {
						return result({ auth: user });
					} else {
						return reject("ENOCACHEUSER");
					}

				}).catch(e => { return reject(e); })

			}

			return reject("ENOCACHEUSER");

		})
	};

	/**
	 * Create user Object and Save to DB
	 * @param {object} opts
	 * @param {DBH_Auth} opts.auth Auth user Object
	 * @returns {Promise<DBH_PromiseAuth>} Auth user Object
	 */
	createUser(opts) {
		return new Promise((result, reject) => {

			this.identifyCheck({
				auth: opts.auth,
				jwt: opts.jwt
			}).then(() => {

				this.schemas.UserModel.findOne({
					"$or": [
						{
							"login": opts.auth.login
						}, {
							"email": opts.auth.email
						}
					]
				}).then(user => {

					if (user) {
						return reject("EPARAMSBUSY");
					}

					user = new this.schemas.UserModel({
						login: opts.auth.login || null,
						email: opts.auth.email || null,
						password: opts.auth.password,
						role: 'user'
					})

					user.save();

					this.cache.users.set(user._id, user);

					return result({ auth: user });

				}).catch(e => { return reject(e); });

			}).catch(e => { return reject(e); })

		});
	};

	/**
	 * Create user Object with JWT token and Save to DB
	 * @param {object} opts
	 * @param {DBH_Auth} opts.auth Auth user Object
	 * @returns {Promise<DBH_PromiseAuthWithJWT>} Auth user Object
	 */
	createUserWithJWT(opts) {
		return new Promise((result, reject) => {

			this.createUser({ jwt: opts.jwt, auth: opts.auth }).then(data => {

				this.JWTCreate({ auth: data.auth }).then(jwt => {

					return result({
						auth: data.auth,
						jwt: jwt
					});

				}).catch(e => { return reject(e); });

			}).catch(e => { return reject(e); });

		})
	}

	/**
	 * Get user Object with JWT token from DB or cache via JWT token or Auth Object
	 * @param {object} opts
	 * @param {DBH_JWT | null} opts.jwt JWT token
	 * @param {DBH_Auth | null} opts.auth Auth user Object
	 * @returns {Promise<DBH_PromiseAuthWithJWT>} Auth user Object
	 */
	getUserWithJWT(opts) {
		return new Promise((result, reject) => {

			this.getUser({ jwt: opts.jwt, auth: opts.auth }).then(data => {

				this.JWTCreate({ auth: data.auth }).then(jwt => {

					return result({
						auth: data.auth,
						jwt: jwt
					})

				}).catch(e => { return reject(e); })

			}).catch(e => { return reject(e); })

		})
	}

	/**
	 * Checks Auth Object and JWT token
	 * @param {Object} opts
	 * @param {DBH_AuthID} opts.auth
	 * @param {DBH_JWT} opts.jwt
	 * @param {DBH_MongoDBObjectId} opts._id
	 * @param {boolean} opts.ignore
	 * @returns {Promise<DBH_PromiseAuthWithJWT>}
	 */
	identifyCheck(opts) {
		return new Promise(async (result, reject) => {

			if (opts.ignore) {
				return result("ignored");
			}

			let checks = 0

			if (!opts.auth && !opts.jwt && !opts._id) {
				return reject("ENOIDENTIFYDATA");
			}

			if (opts._id) {

				await this.authIDCheck(opts._id).catch(e => { return reject(e); })
				checks++

			}

			if (opts.auth) {

				await this.authCheck(opts.auth).catch(e => { return reject(e); })
				checks++

			}

			if (opts.jwt) {

				await this.jwtCheck(opts.jwt).catch(e => { return reject(e); })
				checks++

			}

			if (!checks) {
				return reject("EIDENTIFYEMPTY")
			} else {
				return result(opts);
			}
		})
	}

	/**
	 * Checks MongoDB Object ID
	 * @param {DBH_AuthID} _id 
	 */
	authIDCheck(_id) {
		return new Promise((result, reject) => {

			if (!_id) {
				return reject("ENOID");
			}

			if (typeof _id != "string") {
				return reject("EIDISNOTASTRING");
			}

			return result(_id);

		});
	}

	/**
	 * Checks JWT token
	 * @param {DBH_JWT} jwt
	 * @returns {Promise<DBH_PromiseJWT>}
	 */
	jwtCheck(jwt) {
		return new Promise((result, reject) => {

			if (!jwt) {
				return reject("ENOJWT");
			}

			if (typeof jwt != "string") {
				return reject("JWTISNOTASTRING");
			}

			return result(jwt);

		})
	}

	/**
	 * Checks auth DBH Object
	 * @param {DBH_AuthID} auth
	 * @returns {Promise<DBH_PromiseAuth>}
	 */
	authCheck(auth) {
		return new Promise((result, reject) => {

			if (!auth) {
				return reject("ENOAUTH")
			}

			auth.email = auth.email || ""
			auth.login = auth.login || ""
			auth.password = auth.password || ""

			if ((!auth.email && !auth.login) || !auth.password) {
				return reject("EBADAUTHDATA");
			}

			if (auth.email.length == 0 && auth.login.length == 0 && auth.password.length == 0) {
				return reject("YASO.SU")
			}

			if (typeof auth.login != "string" || typeof auth.email != "string" || typeof auth.password != "string") {
				return reject("EAUTHDATAISNOTASTRING")
			}

			return result({ auth })

		})
	}

	/**
	 * Saves and clearing all DBH cache
	 * @returns {boolean} true
	 */
	cacheSave() {
		this.cache.users.forEach(user => { user.save() });
		this.cache.users.clear();

		this.cache.jwt.clear();
		return true;
	}

}

module.exports = new DBH();
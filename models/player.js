var orm = require('../config/orm.js');

var player = {
	update: function (objColVals, condition, cb) {
		orm.update('players', objColVals, condition, function (res) {
			cb(res);
		})
	}
};

module.exports = player;
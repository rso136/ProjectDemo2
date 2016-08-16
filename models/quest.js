var orm = require('../config/orm.js');

var quest = {
	all: function (cb) {
		orm.all('quests', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	create: function (cols, vals, cb) {
		orm.create('quests', cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.update('quests', objColVals, condition, function (res) {
			cb(res);
		});
	},
	leftJoin: function(callback) {
		orm.leftJoin('*', 'quests', 'players', 'playerID', 'playerID', function (res) {
			callback(res);
		})
	}
};

module.exports = quest;
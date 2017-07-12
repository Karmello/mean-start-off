var r = require(global.paths.root + '/requires');

var SitcomSchema = new r.mongoose.Schema({
	label: { type: String, required: true },
	year: { type: String, required: true },
	header: { type: String, required: true },
	stars: [],
	reviews: { type: Number, required: true, default: 0 },
	comments: { type: Number, required: true, default: 0 },
	description: { type: String, required: true }
}, { versionKey: false });

SitcomSchema.methods = {};
SitcomSchema.statics = {};

SitcomSchema.pre('validate', function(next) { next(); });
SitcomSchema.pre('save', function(next) { next(); });
SitcomSchema.post('remove', function(doc) {});

module.exports = SitcomSchema;
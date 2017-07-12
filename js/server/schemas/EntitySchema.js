var r = require(global.paths.root + '/requires');

var EntitySchema = new r.mongoose.Schema({
	field1: { type: String, required: true }
}, { versionKey: false });

EntitySchema.methods = {};
EntitySchema.statics = {};

EntitySchema.pre('validate', function(next) { next(); });
EntitySchema.pre('save', function(next) { next(); });
EntitySchema.post('remove', function(doc) {});

module.exports = EntitySchema;
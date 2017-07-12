// jshint esversion: 6

let conn = new Mongo();
let db = conn.getDB('test');

db.collection.drop();
db.collection.insert();
// jshint esversion: 6

let conn = new Mongo();
let db = conn.getDB('test');

db.sitcoms.drop();

db.sitcoms.insert([
    {
        "label": "Friends",
        "year": "1994 - 2004",
        "header": "Friends",
        "stars": [
            "Jennifer Aniston",
            "Lisa Kudrow",
            "Courteney Cox"
        ],
        "reviews": 622,
        "comments": 200,
        "description": "About #1"
    },
    {
        "label": "The Big Bang Theory",
        "year": "2011 - 2012",
        "header": "The Big Bang Theory",
        "stars": [
            "Johnny Galecki",
            "Jim Parsons "
        ],
        "reviews": 300,
        "comments": 12,
        "description": "About #2"
    }
]);
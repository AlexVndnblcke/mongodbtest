module.exports = (assert, db, model, call) => {
	console.log(db.collection('collection'));
	db.collection('collection').insertOne(model,(err,res)=>{
			assert.equal(err, null);
			assert.equal(1,res.insertedCount);
			console.log("Inserted 1 documents into the collection");
			call(res);
		});
}

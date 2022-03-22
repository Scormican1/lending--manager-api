const { connectDb } = require("../dbConnect");

exports.getList = (req, res) => {
  const db = connectDb();
  db.collection("ItemsBorrowed")
    .get()
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => {
        let item = doc.data();
        item.id = doc.id;
        return item;
      });

      res.send(items);
    })
    .catch(console.error);
};

exports.newRecord = (req, res) => {
  const db = connectDb();
  // const record = req.body;
  db.collection("ItemsBorrowed")
    .add(req.body)
    .then(doc => res.status(201).send({data: doc.id}))
    .catch(err => res.status(500).send(err));
};

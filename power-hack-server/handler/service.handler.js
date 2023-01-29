const Billing = require("../models/Billing");

const serviceHandler = {}


serviceHandler.getAllBill = async (req, res, next) => {

  try {
    const billings = await Billing.find();
    res.status(200).send(billings);
  } catch (err) {
    res.status(500).json(err.me);
  }

}

serviceHandler.addBill = async (req, res, next) => {

  try {
    const billing = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      paid: req.body.payableAmunt
    }
    const newBilling = new Billing(billing)
    newBilling.save(function (err, doc) {
      if (!err) {
        res.status(200).send(doc);
        console.log(doc)
      }
    });

  } catch (err) {
    res.status(500).json(err);
  }

}

serviceHandler.updateBilling = (req, res, next) => {
  const updateDoc = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    paid: req.body.payableAmunt
  }
  Billing.findByIdAndUpdate({ _id: req.params.id }, updateDoc,
    (err, docs) => {
      if (err) {
        res.status(500).send(`There was a problem while updating your doc!`)
        throw err
      } else {
        res.status(200).send(docs)
      }
    });
};

serviceHandler.deleteBilling = (req, res, next) => {
  Billing.deleteOne({ _id: req.params.id })
    .then(function () {
      res.status(200).send("Billing successfully deleted")
    }).catch(function (err) {
      console.log(err);
      res.status(500).send("There was a server side error!")
    });
};







module.exports = serviceHandler
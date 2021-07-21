const Fabrique = require("../model/fabriqueModels");

module.exports = {
  //add_fabrique

  addFabrique: async (req, res) => {
    const nom = req.body.nom;
    const formateur = req.body.formateur;
    const apprenants = req.body.apprenants;
    const description = req.body.description;
    try {
      fabrique = new Fabrique({
        nom,
        formateur,
        apprenants,
        description,
      });
      await fabrique.save();
      res.json(fabrique);
    } catch (error) {
      console.error(error.message);
    }
  },
  getFabrique: async (req, res) => {
    try {
      const fabrique = await Fabrique.find();
      res.json(fabrique);
    } catch (error) {
      console.error(error.message);
    }
  },
  deleteFabrique: async (req, res) => {
    try {
      const fabrique = await Fabrique.findByIdAndDelete(req.params.id);
      res.json(fabrique);
    } catch (error) {
      console.error(error.message);
    }
  },
  updateFabrique: async (req, res) => {
    try {
      const fabrique = await Fabrique.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(fabrique);
    } catch (error) {
      console.error(error.message);
    }
  },
};

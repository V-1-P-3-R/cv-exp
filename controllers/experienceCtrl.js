const Experience = require('../models/Experience');

exports.createExperience = async (req, res) => {
  try {
    const exp = new Experience(req.body);
    await exp.save();
    res.status(201).json(exp);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear experiencia' });
  }
};

exports.getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ startDate: -1 });
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener experiencias' });
  }
};

exports.getExperienceById = async (req, res) => {
  try {
    const exp = await Experience.findById(req.params.id);
    if (!exp) return res.status(404).json({ error: 'Experiencia no encontrada' });
    res.json(exp);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener experiencia' });
  }
};

exports.updateExperience = async (req, res) => {
  try {
    const exp = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!exp) return res.status(404).json({ error: 'Experiencia no encontrada' });
    res.json(exp);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar experiencia' });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    const exp = await Experience.findByIdAndDelete(req.params.id);
    if (!exp) return res.status(404).json({ error: 'Experiencia no encontrada' });
    res.json({ message: 'Experiencia eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar experiencia' });
  }
};


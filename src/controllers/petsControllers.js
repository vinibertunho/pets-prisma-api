import * as petsModels from "../models/petsModels.js";

export const getAllPets = async (req, res) => {
  try {
    const Pet = await petsModels.AllPets();

    if (!Pet || Pet.length === 0) {
      res.status(404).json({ message: "Nenhum pet encontrado" });
      return;
    }
    res.status(200).json(Pet);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar pets" });
  }
};


export const getPetById = async (req, res) => {
  const { id } = req.params;
  try {
    const Pet = await petsModels.PetById(id);

    if (!Pet) {
      res.status(404).json({ message: "Pet não encontrado" });
      return;
    }
    res.status(200).json(Pet);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar Pet por ID" });
  }
};



import * as petsModels from "../models/petsModels.js";

export const getAllPets = async (req, res) => {
  const Pet = await petsModels.AllPets();

  if (!Pet || Pet.length === 0) {
    res.status(404).json({ message: "Nenhum pet encontrado" });
    return;
  }
  res.status(200).json(Pet);
};

export const getPetById = async (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.status(400).json({ error: "ID inválido" });
    return;
  }

  const Pet = await petsModels.PetById(id);

  if (!Pet) {
    res.status(404).json({ message: "Pet não encontrado" });
    return;
  }
  res.status(200).json(Pet);
};

// POST /pets
export const createPet = async (req, res) => {
  const { name, species, age } = req.body;

  // validação simples (ajuste os campos conforme seu schema)
  if (!name || !species || age === undefined) {
    res
      .status(400)
      .json({ error: "Dados obrigatórios ausentes: name, species, age" });
    return;
  }

  const newPet = await petsModels.CreatePet({ name, species, age });
  res.status(201).json(newPet);
};

// PUT /pets/:id
export const updatePet = async (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.status(400).json({ error: "ID inválido" });
    return;
  }

  const updateData = req.body;
  if (!updateData || Object.keys(updateData).length === 0) {
    res.status(400).json({ error: "Nenhum campo para atualizar" });
    return;
  }

  // verifica existência antes de tentar atualizar (evita erro no update)
  const existing = await petsModels.PetById(id);
  if (!existing) {
    res.status(404).json({ message: "Pet não encontrado" });
    return;
  }

  const updatedPet = await petsModels.UpdatePet(id, updateData);
  res.status(200).json(updatedPet);
};

// DELETE /pets/:id
export const deletePet = async (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.status(400).json({ error: "ID inválido" });
    return;
  }

  const existing = await petsModels.PetById(id);
  if (!existing) {
    res.status(404).json({ message: "Pet não encontrado" });
    return;
  }

  await petsModels.DeletePet(id);
  res.status(200).json({ message: "Pet removido com sucesso" });
};

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
    console.error("Erro ao buscar todos os pets:", error); // Log para debug
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const getPetById = async (req, res) => {
  try {
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
  } catch (error) {
    console.error(`Erro ao buscar pet com ID ${req.params.id}:`, error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

// POST /pets
export const createPet = async (req, res) => {
  try {
    const { name, species, age } = req.body;

    // validação simples
    if (!name || !species || age === undefined) {
      res
        .status(400)
        .json({ error: "Dados obrigatórios ausentes: name, species, age" });
      return;
    }

    const newPet = await petsModels.CreatePet({ name, species, age });
    res.status(201).json(newPet);
  } catch (error) {
    console.error("Erro ao criar pet:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

// PUT /pets/:id
export const updatePet = async (req, res) => {
  try {
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

    // verifica existência antes de tentar atualizar
    const existing = await petsModels.PetById(id);
    if (!existing) {
      res.status(404).json({ message: "Pet não encontrado" });
      return;
    }

    const updatedPet = await petsModels.UpdatePet(id, updateData);
    res.status(200).json(updatedPet);
  } catch (error) {
    console.error(`Erro ao atualizar pet com ID ${req.params.id}:`, error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

// DELETE /pets/:id
export const deletePet = async (req, res) => {
  try {
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
  } catch (error) {
    console.error(`Erro ao deletar pet com ID ${req.params.id}:`, error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
};

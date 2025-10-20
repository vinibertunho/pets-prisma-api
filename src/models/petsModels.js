import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const AllPets = async () => {
    return await prisma.pet.findMany();
    };

export const PetById = async (id) => {
    return await prisma.pet.findUnique({
        where: { id: Number(id) },
    });
};
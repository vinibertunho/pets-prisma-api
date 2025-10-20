import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const petData = [
  { nome: "Max", especie: "Cachorro", idade: 3, dono: "Ana Silva" },
  { nome: "Miau", especie: "Gato", idade: 5, dono: "Bruno Costa" },
  { nome: "Rex", especie: "Cachorro", idade: 1, dono: "Carla Dias" },
  { nome: "Fofura", especie: "Gato", idade: 8, dono: "Daniel Rocha" },
  { nome: "Lola", especie: "Cachorro", idade: 2, dono: "Elisa Mendes" },
  { nome: "Pingo", especie: "Pássaro", idade: 1, dono: "Fábio Neves" },
  { nome: "Estrela", especie: "Gato", idade: 4, dono: "Gabriela Lima" },
  { nome: "Thor", especie: "Cachorro", idade: 7, dono: "Henrique Souza" },
  { nome: "Bolinha", especie: "Hamster", idade: 0, dono: "Isabela Alves" },
  { nome: "Pandora", especie: "Cachorro", idade: 6, dono: "João Ferreira" },
  { nome: "Amora", especie: "Gato", idade: 2, dono: "Karina Gomes" },
  { nome: "Zeca", especie: "Pássaro", idade: 3, dono: "Lucas Pereira" },
  { nome: "Luna", especie: "Cachorro", idade: 4, dono: "Mariana Santos" },
  { nome: "Simba", especie: "Gato", idade: 6, dono: "Nelson Oliveira" },
  { nome: "Billy", especie: "Cachorro", idade: 9, dono: "Patrícia Vieira" },
  { nome: "Ariel", especie: "Peixe", idade: 1, dono: "Ricardo Nunes" },
  { nome: "Snoopy", especie: "Cachorro", idade: 5, dono: "Sofia Borges" },
  { nome: "Whiskey", especie: "Gato", idade: 1, dono: "Thiago Martins" },
  { nome: "Toby", especie: "Cachorro", idade: 2, dono: "Ursula Castro" },
  { nome: "Pipoca", especie: "Coelho", idade: 3, dono: "Victor Ramos" },
];

async function main() {
  console.log("🚀 Iniciando o seeding de pets...");

  // Limpa os dados antigos
  await prisma.pet.deleteMany();
  console.log("🧹 Tabela limpa com sucesso!");

  // Insere os novos registros
  await prisma.pet.createMany({
    data: petData,
  });

  console.log(`✅ Seeding concluído: ${petData.length} pets criados.`);
}

main()
  .catch((e) => {
    console.error("❌ Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

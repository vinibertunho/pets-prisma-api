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

  { nome: "Nina", especie: "Gato", idade: 3, dono: "Wagner Lima" },
  { nome: "Rudy", especie: "Cachorro", idade: 4, dono: "Patrícia Moraes" },
  { nome: "Lili", especie: "Gato", idade: 2, dono: "Renato Ferreira" },
  { nome: "Kiko", especie: "Pássaro", idade: 2, dono: "Sandra Pinto" },
  { nome: "Nemo", especie: "Peixe", idade: 1, dono: "Otávio Costa" },
  { nome: "Fiona", especie: "Coelho", idade: 2, dono: "Paula Ribeiro" },
  { nome: "Scooby", especie: "Cachorro", idade: 8, dono: "Ricardo Almeida" },
  { nome: "Garfield", especie: "Gato", idade: 7, dono: "Bianca Rocha" },
  { nome: "Zeus", especie: "Cachorro", idade: 10, dono: "Marcos Lima" },
  { nome: "Mila", especie: "Gato", idade: 1, dono: "Clara Souza" },
  { nome: "Oliver", especie: "Gato", idade: 4, dono: "Diego Santos" },
  { nome: "Cookie", especie: "Hamster", idade: 0, dono: "Elaine Moraes" },
  { nome: "Bella", especie: "Cachorro", idade: 3, dono: "Fernando Araújo" },
  { nome: "Maggie", especie: "Cachorro", idade: 5, dono: "Gisele Fernandes" },
  { nome: "Rio", especie: "Pássaro", idade: 2, dono: "Heitor Cardoso" },
  { nome: "Turtle", especie: "Tartaruga", idade: 12, dono: "Inês Duarte" },
  { nome: "Spike", especie: "Cachorro", idade: 6, dono: "Júlio Pires" },
  { nome: "Shadow", especie: "Gato", idade: 9, dono: "Karla Teixeira" },
  { nome: "Pepper", especie: "Pássaro", idade: 4, dono: "Larissa Nascimento" },
  { nome: "Bingo", especie: "Cachorro", idade: 2, dono: "Marcelo Pinto" },

  { nome: "Rusty", especie: "Gato", idade: 5, dono: "Nádia Barros" },
  { nome: "Bubbles", especie: "Peixe", idade: 1, dono: "Otto Mendes" },
  { nome: "Coco", especie: "Cachorro", idade: 4, dono: "Paulo Santos" },
  { nome: "Mushu", especie: "Gato", idade: 3, dono: "Quésia Lopes" },
  {
    nome: "Gizmo",
    especie: "Porquinho-da-Índia",
    idade: 1,
    dono: "Roberta Silva",
  },
  { nome: "Sasha", especie: "Cachorro", idade: 7, dono: "Samir Oliveira" },
  { nome: "Tofu", especie: "Coelho", idade: 2, dono: "Tatiana Carvalho" },
  { nome: "Koda", especie: "Cachorro", idade: 1, dono: "Ubiratan Gomes" },
  { nome: "Loki", especie: "Gato", idade: 2, dono: "Valéria Mendonça" },
  {
    nome: "Sherlock",
    especie: "Cachorro",
    idade: 11,
    dono: "Wellington Castro",
  },
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

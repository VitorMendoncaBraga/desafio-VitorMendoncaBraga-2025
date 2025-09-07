class AbrigoAnimais {
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const animaisDisponiveis = [
      "Rex",
      "Mimi",
      "Fofo",
      "Zero",
      "Bola",
      "Bebe",
      "Loco",
    ];
    const brinquedosValidos = [
      "RATO",
      "BOLA",
      "LASER",
      "CAIXA",
      "NOVELO",
      "SKATE",
    ];
    const animais = [
      {
        name: "Rex",
        type: "cão",
        toys: ["RATO", "BOLA"],
      },
      {
        name: "Mimi",
        type: "gato",
        toys: ["BOLA", "LASER"],
      },
      {
        name: "Fofo",
        type: "gato",
        toys: ["BOLA", "RATO", "LASER"],
      },
      {
        name: "Zero",
        type: "gato",
        toys: ["RATO", "BOLA"],
      },
      {
        name: "Bola",
        type: "cão",
        toys: ["CAIXA", "NOVELO"],
      },
      {
        name: "Bebe",
        type: "cão",
        toys: ["LASER", "RATO", "BOLA"],
      },
      {
        name: "Loco",
        type: "jabuti",
        toys: ["SKATE", "RATO"],
      },
    ];
    try {
      const brinquedosPessoa1List = brinquedosPessoa1.split(",");
      const brinquedosPessoa2List = brinquedosPessoa2.split(",");
      const ordemAnimaisList = ordemAnimais.split(",");

      let animalDaIteraçaoAntiga = "";
      let brinquedoDaIteraçaoAntigaPessoa1 = "";
      let brinquedoDaIteraçaoAntigaPessoa2 = "";
      const animalPessoa1 = ordemAnimaisList[0]
      const animalPessoa2 = ordemAnimaisList[1]

      if(ordemAnimaisList.lenght > 2){
        return {
          erro: "Não pode levar mais 3 aniam" 
        }
      }

      // Conferindo se os animais são válidos
      ordemAnimaisList.forEach((animal) => {
        if (!animaisDisponiveis.includes(animal)) {
          throw new Error(animal + " é um animal inválido");
        }

        if (animal == animalDaIteraçaoAntiga) {
          throw new Error("Animal inválido");
        }

        animalDaIteraçaoAntiga = animal;
      });
      // Conferindo se os brinquedos da pessoa 1 são válidos
      brinquedosPessoa1List.forEach((brinquedo) => {
        if (!brinquedosValidos.includes(brinquedo)) {
          throw new Error("Brinquedo inválido");
        }

        if (brinquedo == brinquedoDaIteraçaoAntigaPessoa1) {
          throw new Error("Brinquedo inválido (Duplicado)");
        }

        brinquedoDaIteraçaoAntigaPessoa1 = brinquedo;
      });
      // Conferindo se os brinquedos da pessoa 2 são válidos
      brinquedosPessoa2List.forEach((brinquedo) => {
        if (!brinquedosValidos.includes(brinquedo)) {
          throw new Error("Brinquedo inválido");
        }

        if (brinquedo == brinquedoDaIteraçaoAntigaPessoa2) {
          throw new Error("Brinquedo inválido (Duplicado)");
        }

        brinquedoDaIteraçaoAntigaPessoa2 = brinquedo;
      });

      const resultado = []

      


    } catch (error) {
      console.log(error);
    }
  }
}

export { AbrigoAnimais as AbrigoAnimais };

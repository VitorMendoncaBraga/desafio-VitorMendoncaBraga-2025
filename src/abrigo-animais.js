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

    const brinquedosPessoa1List = brinquedosPessoa1.split(",");
    const brinquedosPessoa2List = brinquedosPessoa2.split(",");
    const ordemAnimaisList = ordemAnimais.split(",");
    const ordemAniamaisListSort = ordemAnimaisList.sort();
    // Conferindo se os animais são válidos

    let setAnimais = new Set();
    for (let animal of ordemAnimaisList) {
      if (!animaisDisponiveis.includes(animal) || setAnimais.has(animal)) {
        return {
          erro: "Animal inválido",
        };
      }

      setAnimais.add(animal);
    }

    // Conferindo se os brinquedos da pessoa 1 são válidos
    let setBrinquedosPessoa1 = new Set();
    for (let brinquedo of brinquedosPessoa1List) {
      if (
        !brinquedosValidos.includes(brinquedo) ||
        setBrinquedosPessoa1.has(brinquedo)
      ) {
        return {
          erro: "Brinquedo inválido",
        };
      }
      setBrinquedosPessoa1.add(brinquedo);
    }
    // Conferindo se os brinquedos da pessoa 2 são válidos
    let setBrinquedosPessoa2 = new Set();
    for (let brinquedo of brinquedosPessoa2List) {
      if (
        !brinquedosValidos.includes(brinquedo) ||
        setBrinquedosPessoa2.has(brinquedo)
      ) {
        return {
          erro: "Brinquedo inválido",
        };
      }

      setBrinquedosPessoa2.add(brinquedo);
    }

    const resultado = {
      lista: [],
    };

    const animaisAdotadosPessoa1 = [];
    const animaisAdotadosPessoa2 = [];

    function verificandoOrdem(brinquedosPessoaX, brinquedosFavoritosAnimal) {
      let index = 0;

      for (let brinquedo of brinquedosPessoaX) {
        if (brinquedo === brinquedosFavoritosAnimal[index]) {
          index++;
        }
        if (index === brinquedosFavoritosAnimal.length) {
          return true;
        }
      }

      return false;
    }

    function verificandoCompatibilidade(
      brinquedosPessoaX,
      brinquedosFavoritosAnimal,
      nomeAnimal,
      animaisAdotadosPessoaX
    ) {
      if(nomeAnimal != "Loco"){
        const ordemValida = verificandoOrdem(
          brinquedosPessoaX,
          brinquedosFavoritosAnimal
        );
        if (!ordemValida) {
          return false;
        }
      }
      else{
        if(animaisAdotadosPessoaX.length == 0){
          return false
        }
      }

      for (let brinquedo of brinquedosFavoritosAnimal) {
        if (!brinquedosPessoaX.has(brinquedo)) {
          return false;
        }
      }
      return true;
    }

    // Verificando os brinquedos favoritos de cada animal selecionado
    setAnimais.forEach((animal) => {
      const brinquedosFavoritos = animais.find(
        (pet) => pet.name == animal
      ).toys;
      console.log(brinquedosFavoritos);

      const pessoa1Disponivel = verificandoCompatibilidade(
        setBrinquedosPessoa1,
        brinquedosFavoritos
      );
      const pessoa2Disponivel = verificandoCompatibilidade(
        setBrinquedosPessoa2,
        brinquedosFavoritos
      );
      console.log("Pessoa 1 disponível: " + pessoa1Disponivel);
      console.log("Pessoa 2 disponível: " + pessoa2Disponivel);

      if (
        (pessoa1Disponivel && pessoa2Disponivel) ||
        (!pessoa1Disponivel && !pessoa2Disponivel)
      ) {
        return resultado.lista.push(`${animal} - abrigo`);
      }

      if (pessoa1Disponivel) {
        if (
          animaisAdotadosPessoa1.length == 3 ||
          animaisAdotadosPessoa1.includes("Mimi" || "Fofo" || "Zero")
        ) {
          return resultado.lista.push(`${animal} - abrigo`);
        }

        animaisAdotadosPessoa1.push(animal);
        return resultado.lista.push(`${animal} - pessoa 1`);
      }
      if (
        animaisAdotadosPessoa2.length == 3 ||
        animaisAdotadosPessoa2.includes("Mimi" || "Fofo" || "Zero")
      ) {
        return resultado.lista.push(`${animal} - abrigo`);
      }
      animaisAdotadosPessoa2.push(animal);
      return resultado.lista.push(`${animal} - pessoa 2`);
    });

    return resultado;
  }
}

export { AbrigoAnimais as AbrigoAnimais };

import { Injectable } from '@angular/core';
import { Path } from '../interface/path.interface';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  // Defina a estrutura dos caminhos e escolhas do jogo
  private paths: Record<string, Path> = {
    sabedoria: {
      title: "O Caminho da Sabedoria",
      description: "Leo encontra uma sala antiga com inscrições mágicas. Embora ele não tenha aptidão para magia, sente que essas inscrições podem ajudar.",
      choices: [
        { text: "Estudar as inscrições para tentar entender os segredos mágicos.", consequence: "Leo descobre que a sala foi feita por uma raça antiga de elfos, aliados aos anões no passado. Ele pode usar esse conhecimento para desbloquear passagens secretas que o levam de volta ao seu reino.", nextPath: "sabedoria-inscricoes" },
        { text: "Ignorar as inscrições e seguir em frente pela dungeon.", consequence: "Leo segue e encontra um artefato mágico que pode lhe conceder grande poder ou atraí-lo para um caminho perigoso.", nextPath: "sabedoria-artefato" },
      ],
    },
    "sabedoria-inscricoes": {
      title: "Inscrições Mágicas",
      description: "Leo detem um feitiço poderoso das inscrições.",
      choices: [
        { text: "Usar o conhecimento das inscrições para manipular as passagens e fugir.", consequence: "Leo encontra uma saida", nextPath: "encruzilhada" },
        { text: "Arriscar e abrir uma sala proibida que pode ter tesouros ou armadilhas.", consequence: "Leo morre em uma armadilha", nextPath: "fim" },
      ],
    },
    "sabedoria-artefato": {
      title: "Artefato Antigo",
      description: "Leo encontra um artefato que emite uma luz brilhante.",
      choices: [
        { text: "Usar o artefato para enfrentar qualquer inimigo que encontrar.", consequence: "Ele ganha uma nova habilidade e segue seu caminho", nextPath: "encruzilhada" },
        { text: "Destruir o artefato, desconfiando do poder que ele concede.", consequence: "Ele continua sua jornada um pouco arrependido", nextPath: "encruzilhada" },
      ],
    },
    "sabedoria-magia": {
      title: "Magia em Ação",
      description: "Leo agora pode usar o feitiço em sua próxima decisão.",
      choices: [
        { text: "Usar magia para escapar de um perigo", consequence: "Ele escapa com sucesso!", nextPath: "encruzilhada" },
        { text: "Usar magia para ajudar um amigo", consequence: "Ele se torna um herói!", nextPath: "encruzilhada" },
      ],
    },
    "sabedoria-destino-alterado": {
      title: "Destinos Alterados",
      description: "As coisas mudaram após a destruição das inscrições.",
      choices: [
        { text: "Explorar as mudanças", consequence: "Ele descobre novos caminhos", nextPath: "encruzilhada" },
        { text: "Voltar atrás", consequence: "Leo se arrepende de sua escolha", nextPath: "encruzilhada" },
      ],
    },
    // Caminho de Sobrevivência
    sobrevivencia: {
      title: "O Caminho da Sobrevivência",
      description: "Leo se encontra em uma bifurcação com dois túneis. Um tem sinais de pegadas recentes de anões o outro parece levar a uma parte mais profunda da dungeon.",
      choices: [
        { text: "Seguir as pegadas, presumindo que são de seus aliados.", consequence: "Leo encontra um grupo de anões sobreviventes, mas eles estão em uma situação crítica, presos por monstros.", nextPath: "sobrevivencia-abrigado" },
        { text: "Explorar o túnel mais profundo, acreditando que pode levar a uma saída.", consequence: "Leo sente um calafio mas continua descendo", nextPath: "sobrevivencia-comida" },
      ],
    },
    "sobrevivencia-abrigado": {
      title: "Seguir as pegadas",
      description: " Leo encontra um grupo de anões sobreviventes, mas eles estão em uma situação crítica, presos por monstros.",
      choices: [
        { text: "Ajudar os anões a derrotar os monstros e sair juntos.", consequence: "Ele encontra uma saída", nextPath: "encruzilhada" },
        { text: "Deixar os anões e usar a distração para fugir sozinho, aumentando suas chances de sobrevivência, mas à custa de outros.", consequence: "Leo encontra uma saida a custa da vida de seus colegas", nextPath: "encruzilhada" },
      ],
    },
    "sobrevivencia-comida": {
      title: "Explorar o túnel mais profundo",
      description: " Leo se depara com uma área abandonada da dungeon, cheia de perigos, mas também repleta de materiais valiosos.",
      choices: [
        { text: "Recolher os materiais e tentar criar uma arma poderosa para se defender.", consequence: "Leo agora porta os Kit mais foda da dungeon", nextPath: "encruzilhada" },
        { text: "Evitar os materiais, temendo que a área esteja amaldiçoada, e seguir por outro caminho.", consequence: "O caminho que Leo escolheu desmorona em sua cabeça", nextPath: "fim" },
      ],
    },
    // Caminho da Tentação
    tentacao: {
      title: "O Caminho da Tentação",
      description: "Leo encontra uma sala onde um espírito antigo lhe oferece um pacto: poder em troca de sua alma ou algo valioso.",
      choices: [
        { text: "Aceitar o pacto para obter grande força e garantir sua saída.", consequence: "Leo ganha habilidades poderosas, mas começa a perder sua humanidade. Ele pode continuar nesse caminho em busca de mais poder", nextPath: "tentacao-poder" },
        { text: "Recusar o pacto, temendo as consequências.", consequence: "Ele mantém seus valores", nextPath: "tentacao-valores" },
      ],
    },
    "tentacao-poder": {
      title: "O Poder Aceito",
      description: "Leo recebe um novo poder, mas a um custo.",
      choices: [
        { text: "Usar o poder para dominar a dungeon e se tornar o novo senhor do lugar", consequence: "Leo fica completamente broken", nextPath: "fimtirano" },
        { text: "Lutar contra a influência maligna e tentar escapar antes que sua alma seja consumida.", consequence: "Leo é puxado para um portal pelo espírito", nextPath: "encruzilhada" },
      ],
    },
    "tentacao-valores": {
      title: "Valores Mantidos",
      description: "O espírito fica furioso e coloca uma maldição em Leo. Ele terá que encontrar uma forma de quebrar essa maldição antes que o tempo acabe.",
      choices: [
        { text: "Buscar uma relíquia antiga que pode curar sua maldição", consequence: "Leo segue procurando a reliquia pelas salas da dungeon", nextPath: "encruzilhada" },
        { text: "Tentar quebrar a maldição sozinho, enfrentando os desafios que surgem no caminho.", consequence: "Leo segue explorando as salas da dungeon", nextPath: "encruzilhada" },
      ],
    },
    "encruzilhada": {
      title: "A Encruzilhada da Dungeon",
      description: "Leo chega ao coração da dungeon.",
      choices: [
        { text: "Explorar a sala e tentar entender sua importância.",
          consequence: "Leo encontra o Guardião que bloqueia a passagem.",
          nextPath: "guardiao" },
        { text: "Procurar uma saída rapidamente.",
          consequence: "Leo encontra o Guardião que bloqueia a passagem.",
          nextPath: "guardiao" },
      ],
    },
    "guardiao": {
      title: "O Guardião da Encruzilhada",
      description: "Um poderoso guardião bloqueia a passagem. Leo precisa escolher entre força ou inteligência para avançar.",
      choices: [
        { text: "Usar poder (artefato, materiais ou pacto) para derrotar o guardião.", consequence: "A dungeon se torna mais violenta e traiçoeira.", nextPath: "reino-esquecido" },
        { text: "Resolver o enigma para convencer o guardião a deixá-lo passar.", consequence: "A dungeon se torna menos perigosa, mas mais desafiadora mentalmente.", nextPath: "reino-esquecido" },
      ],
    },
    "reino-esquecido": {
      title: "O Reino Esquecido",
      description: "Leo encontra uma cidade anã perdida, onde seu destino final será decidido.",
      choices: [
        { text: "Usar o conhecimento dos elfos ou o poder do artefato para abrir os portões e obter ajuda.", consequence: "Leo ganha aliados para enfrentar o desafio final.", nextPath: "final-choice" },
        { text: "Negociar com os habitantes usando materiais valiosos ou ajudando a derrotar monstros locais.", consequence: "Leo ganha recompensas e acesso à saída.", nextPath: "final-choice" },
        { text: "Aceitar a orientação do espírito do pacto e buscar o item necessário para selar seu destino.", consequence: "Leo está mais perto de completar seu pacto, para bem ou para mal.", nextPath: "final-choice" },
      ],
    },
    "final-choice": {
      "title": "Escolha Final: Os Destinos Entrelaçados",
      "description": "Leo descobre três rotas para retornar ao reino, mas cada uma apresenta desafios únicos alinhados com suas escolhas anteriores.",
      "choices": [
        {
          "text": "Seguir o Path of Light",
          "requirement": "Ter seguido o Caminho da Sabedoria.",
          "consequence": "Leo deve utilizar o conhecimento adquirido nas antigas passagens élficas para encontrar a saída.",
          "nextPath": "light-path",
          "finalOutcome": "Leo retorna ao reino dos anões como um herói, trazendo sabedoria ou relíquias importantes."
        },
        {
          "text": "Seguir o Path of Strength",
          "requirement": "Ter seguido o Caminho da Sobrevivência.",
          "consequence": "Leo enfrenta uma criatura colossal que guarda a saída, testando sua força e determinação.",
          "nextPath": "strength-path",
          "finalOutcome": "Leo retorna como um guerreiro endurecido, possivelmente salvando seu reino, mas a um custo pessoal elevado."
        },
        {
          "text": "Seguir o Path of Darkness",
          "requirement": "Ter seguido o Caminho da Tentação.",
          "consequence": "Leo encontra um atalho direto ao reino, mas precisa sacrificar algo de grande importância.",
          "nextPath": "darkness-path",
          "finalOutcome": "Leo retorna ao reino como alguém corrompido pelo poder ou completamente transformado."
        }
      ]
    },
    fim: {
      title: "Fim do Jogo",
      description: "Obrigado por jogar! Você fez suas escolhas.",
      choices: [] // Não há mais escolhas no fim do jogo
    },
    fimtirano: {
      title: "Fim do Jogo",
      description: "Obrigado por jogar! Você fez suas escolhas.",
      choices: [] // Não há mais escolhas no fim do jogo
    }
  };

  getPath(id: string): Path {
    return this.paths[id];
  }
}




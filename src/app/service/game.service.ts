import { Injectable } from '@angular/core';
import { StoryService } from './story.service';
import { Choice } from '../interface/choice.interface';
import { Path } from '../interface/path.interface';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private history: Choice[] = []; // Armazena o histórico das escolhas
  private currentPathName: string = ''; // Armazena o nome do caminho atual
  private currentRequirement: string | undefined = ''; // Armazena o requisito atual

  constructor(private storyService: StoryService) {}

  // Inicia o jogo, define o caminho inicial e limpa o histórico
  startGame(initialPath: string) {
    if (!this.storyService.getPath(initialPath)) {
      throw new Error(`Caminho inicial inválido: ${initialPath}`);
    }

    this.history = [];
    this.currentPathName = initialPath; // Define o caminho inicial
  }

   // Método para definir o requisito com base no caminho
   setCurrentRequirement(pathName: string): void {
    switch (pathName) {
      case 'path-wisdom':
        this.currentRequirement = 'Ter seguido o Caminho da Sabedoria.';
        break;
      case 'path-survival':
        this.currentRequirement = 'Ter seguido o Caminho da Sobrevivência.';
        break;
      case 'path-temptation':
        this.currentRequirement = 'Ter seguido o Caminho da Tentação.';
        break;
      default:
        this.currentRequirement = ''; // Nenhum requisito
    }
  }

  getCurrentRequirement(): string | undefined {
    return this.currentRequirement;
  }

  // Registra uma escolha e move para o próximo caminho
  recordChoice(choice: Choice | undefined) {
    if (choice) {
      this.history.push(choice);
      this.currentPathName = this.getNextPath(choice);

      // Redireciona para a tela de fim quando o jogo termina
      if (this.currentPathName === 'fim' || this.currentPathName === 'fimtirano') {
        window.location.href = '/end';
      }
    }
  }

  // Obtém o próximo caminho a partir da escolha
  private getNextPath(choice: Choice): string {
    return choice.nextPath || 'fim'; // Retorna o próximo caminho se disponível
  }

  // Retorna o caminho atual (Path) baseado no currentPathName
  getCurrentPath(): Path | null {
    const path = this.storyService.getPath(this.currentPathName);
    console.log('Caminho Atual:', path); // Log para verificar o caminho atual
    return path;
  }

  getFinalOutcome(): string {
    const lastChoice = this.history[this.history.length - 1];
    return lastChoice?.finalOutcome || 'O destino de Leo permanece incerto.';
  }

  meetsRequirement(requirement: string | undefined): boolean {
    if (!requirement) {
      return true; // Se não houver requisito, assume-se que o requisito foi atendido.
    }

    if (requirement === "Ter seguido o Caminho da Sabedoria.") {
      return this.history.some(choice => choice.text === "Escavar a parede");
    } else if (requirement === "Ter seguido o Caminho da Sobrevivência.") {
      return this.history.some(choice => choice.text === "Seguir andando");
    } else if (requirement === "Ter seguido o Caminho da Tentação.") {
      return this.history.some(choice => choice.text === "Pular no portal");
    }
    return false; // Caso contrário, retorna false se não corresponder a nenhum requisito.
  }

  // Método para habilitar ou desabilitar o botão com base no requisito
  canChooseOption(requirement: string | undefined): boolean {
    return this.meetsRequirement(requirement); // Verifica se o requisito foi atendido.
  }

  // Retorna o histórico de escolhas
  getHistory(): Choice[] {
    return this.history;
  }
}

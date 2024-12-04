import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../service/game.service';
import { Path } from '../../interface/path.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-path-wisdom',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './path-wisdom.component.html',
  styleUrl: './path-wisdom.component.css'
})
export class PathWisdomComponent implements OnInit {
  currentPath: Path | null = null;
  currentPathData: any;

  constructor(public router: Router, public gameService: GameService) {}

  ngOnInit(): void {
    // Inicia o jogo e obtém o caminho atual
    const initialPath = 'sabedoria';
    this.gameService.startGame(initialPath); // Inicia o jogo com o caminho de sabedoria
    this.currentPath = this.gameService.getCurrentPath(); // Atualiza o caminho atual
    this.gameService.setCurrentRequirement('path-wisdom'); // Define o requisito para o caminho da sabedoria
  }

  onChoiceSelected(nextPath: string | undefined): void {
    if (nextPath) {
      const choice = this.currentPath?.choices.find(choice => choice.nextPath === nextPath);
      if (choice) {
        this.gameService.recordChoice(choice); // Registra a escolha
        this.currentPath = this.gameService.getCurrentPath(); // Atualiza o caminho atual

        // Verifica se não há mais escolhas e redireciona para a tela de fim
        if (!this.currentPath?.choices?.length) {
          this.router.navigate(['/end']);
        }
      }
    }
  }

  navigateToNext(choice: string): void {
    // Navega para o próximo caminho com base na escolha
    this.router.navigate([choice]);
  }
}



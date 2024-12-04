import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Path } from '../../interface/path.interface';
import { Router } from '@angular/router';
import { GameService } from '../../service/game.service';

@Component({
  selector: 'app-path-survival',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './path-survival.component.html',
  styleUrl: './path-survival.component.css'
})
export class PathSurvivalComponent {
  currentPath: Path | null = null;

  constructor(public router: Router, public gameService: GameService) {}

  ngOnInit(): void {
    // Inicia o caminho e define o cenário atual]
    const initialPath = 'sobrevivencia'
    this.gameService.startGame(initialPath);
    this.currentPath = this.gameService.getCurrentPath();
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
    this.router.navigate([choice]);
  }
}

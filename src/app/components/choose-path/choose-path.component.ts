import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Path } from '../../interface/path.interface';
import { GameService } from '../../service/game.service';
import { Choice } from '../../interface/choice.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choose-path',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './choose-path.component.html',
  styleUrls: ['./choose-path.component.css'],
})

export class ChoosePathComponent {
  currentPath: string = '';
  currentPathData: Path | null = null;
  selectedPath: string | null = null; // Armazena o caminho selecionado

  constructor(public gameService: GameService, private router: Router) {}

  startGame(path: string) {
    this.selectedPath = path; // Armazena o caminho escolhido
    this.router.navigate([`/${path}`])
    // this.gameService.startGame(path);
    // this.updateCurrentPath();
  }

  updateCurrentPath() {
    this.currentPathData = this.gameService.getCurrentPath();
  }

  onChoiceSelected(choice: Choice) {
    this.gameService.recordChoice(choice);
    this.updateCurrentPath();
  }

  selectPath(path: string) {
    this.currentPath = path;
    // Aqui você pode armazenar o caminho selecionado em um serviço ou no estado global
    // E redirecionar para o primeiro evento do caminho ou um componente específico
    console.log(`Caminho selecionado: ${this.currentPath}`);
    // Exemplo de redirecionamento
    // this.router.navigate(['/first-event', { path: this.currentPath }]);
  }

  reset() {
    this.router.navigate([''])
  }
}

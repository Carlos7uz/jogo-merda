import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Path } from './interface/path.interface';
import { StoryService } from './service/story.service';
import { CommonModule } from '@angular/common';
import { GameService } from './service/game.service';
import { Choice } from './interface/choice.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentPathData: Path | null = null;

  constructor(public gameService: GameService, private router: Router) {}

  ngOnInit() {
    // Não inicia o jogo aqui. Isso será feito após a escolha do caminho
  }

  // Chamado quando o jogador inicia o jogo após escolher o caminho
  startGame(path: string) {
    this.gameService.startGame(path);
    this.updateCurrentPath();
  }

  updateCurrentPath() {
    this.currentPathData = this.gameService.getCurrentPath();
  }

  onChoiceSelected(choice: Choice) {
    this.gameService.recordChoice(choice);
    this.updateCurrentPath();
  }
}

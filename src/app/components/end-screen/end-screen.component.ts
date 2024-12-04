import { Component, OnInit } from '@angular/core';
import { Choice } from '../../interface/choice.interface';
import { GameService } from '../../service/game.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-end-screen',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './end-screen.component.html',
  styleUrl: './end-screen.component.css'
})
export class EndScreenComponent implements OnInit {
  history: Choice[] = []; // Armazena o histórico das escolhas

  constructor(public gameService: GameService, public router: Router) {}

  ngOnInit(): void {
    this.history = this.gameService.getHistory(); // Obtém o histórico do jogo
  }
}

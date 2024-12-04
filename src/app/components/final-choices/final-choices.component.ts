import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GameService } from '../../service/game.service';

@Component({
  selector: 'app-final-choices',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './final-choices.component.html',
  styleUrl: './final-choices.component.css'
})
export class FinalChoicesComponent {

  constructor(public gameService: GameService) {}

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.css'
})
export class StartScreenComponent {

  constructor(private router: Router) {}

  startGame() {
    // Lógica para iniciar o jogo, pode ser uma navegação para o primeiro caminho ou a tela de escolha
    console.log('Iniciando o jogo...');
    this.router.navigate(['/choose-path']);
    // Aqui você pode redirecionar para a tela de seleção de caminho, por exemplo:
    // this.router.navigate(['/choose-path']);
  }
}

export interface Choice {
  text: string;
  requirement?: string;
  consequence: string;
  nextPath?: string; // Caminho a seguir após a escolha
  finalOutcome?: string;
}

import { Routes } from '@angular/router';
import { PathWisdomComponent } from './components/path-wisdom/path-wisdom.component';
import { PathSurvivalComponent } from './components/path-survival/path-survival.component';
import { PathTemptationComponent } from './components/path-temptation/path-temptation.component';
import { CrossroadComponent } from './components/crossroad/crossroad.component';
import { FinalChoicesComponent } from './components/final-choices/final-choices.component';
import { StartScreenComponent } from './components/start-screen/start-screen.component';
import { ChoosePathComponent } from './components/choose-path/choose-path.component';
import { EndScreenComponent } from './components/end-screen/end-screen.component';

export const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'choose-path', component: ChoosePathComponent },
  { path: 'path-wisdom', component: PathWisdomComponent },
  { path: 'path-survival', component: PathSurvivalComponent },
  { path: 'path-temptation', component: PathTemptationComponent },
  { path: 'crossroad', component: CrossroadComponent },
  { path: 'final-choices', component: FinalChoicesComponent },
  { path: 'end', component: EndScreenComponent },

];

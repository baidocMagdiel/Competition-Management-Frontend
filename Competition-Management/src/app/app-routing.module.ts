import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'club',
    loadChildren: () => import('./feature/club/club.module').then(m => m.ClubModule)
  },
  {
    path: 'athlete/:id',
    loadChildren: () => import('./feature/athlete/athlete.module').then(m => m.AthleteModule)
  },
  {
    path: 'management',
    loadChildren: () => import('./feature/management/management.module').then(m => m.ManagementModule)
  },
  {
    path: 'competition/:id',
    loadChildren: () => import('./feature/competition/competition.module').then(m => m.CompetitionModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./feature/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./feature/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./core/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

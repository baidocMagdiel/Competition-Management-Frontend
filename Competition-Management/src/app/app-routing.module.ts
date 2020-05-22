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
    path: 'athlete',
    loadChildren: () => import('./feature/athlete/athlete.module').then(m => m.AthleteModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

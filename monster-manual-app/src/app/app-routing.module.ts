import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMonstersComponent, MonsterDetailsComponent } from './views';
import { MonstersResolver, MonsterResolver } from './resolvers';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/monsters'
  },
  // {
  //   path: '',
  //   component: HomeComponent,
  //   data: {
  //     title: 'Home'
  //   }
  // },
  {
    path: 'monsters',
    component: AllMonstersComponent,
    data: {
      title: 'All Monsters'
    },
    resolve: {
      monsterList: MonstersResolver
    }
  },
  {
    path: 'monsters/:name',
    component: MonstserDetailsComponent,
    data: {
      title: 'Monster Details'
    },
    resolve: {
      character: MonsterResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MonstersResolver]
})
export class AppRoutingModule { }

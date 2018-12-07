import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { AllMonstersComponent } from './views/all-monsters/all-monsters.component';
import { MonsterDetailsComponent } from './views/monster-details/monster-details.component';
import { NewMonsterComponent } from './views/new-monster/new-monster.component';
import { MonsterFormComponent } from './components/monster-form/monster-form.component';
import { EditMonsterComponent } from './views/edit-monster/edit-monster.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AllMonstersComponent,
    MonsterDetailsComponent,
    NewMonsterComponent,
    MonsterFormComponent,
    EditMonsterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

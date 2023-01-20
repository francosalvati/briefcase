import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { ProyectComponent } from './proyect/proyect.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FrancoComponent } from './franco/franco.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MeComponent } from './components/me/me.component';
import { CardComponent } from './components/card/card.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProyectComponent,
    NavComponent,
    ContactComponent,
    HomeComponent,
    FrancoComponent,
    SkillsComponent,
    MeComponent,
    CardComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

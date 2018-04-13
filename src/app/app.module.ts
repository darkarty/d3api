import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {HttpClientModule} from '@angular/common/http';
import {GetProfileService} from './get-profile.service';
import { SeasonalComponent } from './seasonal/seasonal.component';
import { NonseasonalComponent } from './nonseasonal/nonseasonal.component';
import { EnterBattletagComponent } from './enter-battletag/enter-battletag.component';
import { GeneralInformationComponent } from './general-information/general-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    SeasonalComponent,
    NonseasonalComponent,
    EnterBattletagComponent,
    GeneralInformationComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetProfileService],
  bootstrap: [AppComponent]
})

export class AppModule { }

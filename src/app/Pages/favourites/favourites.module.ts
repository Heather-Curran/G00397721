import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouritesPageRoutingModule } from './favourites-routing.module';

import { GameCardComponent } from 'src/app/Components/game-card/game-card.component';

import { FavouritesPage } from './favourites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouritesPageRoutingModule
  ],
  declarations: [FavouritesPage,GameCardComponent]
})
export class FavouritesPageModule {}

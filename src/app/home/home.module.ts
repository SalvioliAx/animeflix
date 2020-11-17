import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from "../../app/shared/shared.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatGridListModule,
  ]
})
export class HomeModule { 
}

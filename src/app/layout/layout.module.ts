import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NavShellComponent } from './nav-shell/nav-shell.component';
import { LayoutModule as LMM } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from "../../app/shared/shared.module";



@NgModule({
  declarations: [NavShellComponent],
  imports: [
    CommonModule,
    LMM,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    SharedModule,
  ],
  exports: [NavShellComponent]
})
export class LayoutModule { }

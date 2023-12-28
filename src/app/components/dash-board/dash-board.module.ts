import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board.component';
import { DashboardRoutingModule } from './dash-board-routing.module';

@NgModule({
    declarations: [
        DashBoardComponent
    ],
    imports: [
        CommonModule,DashboardRoutingModule
    ],
    exports: [
        DashBoardComponent
    ]
})
export class DashboardModule { }

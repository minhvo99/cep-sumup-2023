import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumupComponent } from './sumup.component';

const routes: Routes = [
    {
        path: '',
        component: SumupComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SumupRoutingModule { }

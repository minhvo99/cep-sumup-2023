import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=> import("./components/sumup/sumup.module").then(m => m.SumupModule)
  }, 
  {
    path: "dash-board",
    loadChildren: ()=> import("./components/dash-board/dash-board.module").then(m => m.DashboardModule)
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

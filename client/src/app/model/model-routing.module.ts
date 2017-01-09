import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelComponent } from './model.component';

const ModelRoutes: Routes = [
  { path: 'model', component: ModelComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ModelRoutes)
  ],
  exports: [RouterModule]
})
export class ModelRoutingModule {   
}

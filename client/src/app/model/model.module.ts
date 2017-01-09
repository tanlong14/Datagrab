import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelComponent } from './model.component';
import { ModelRoutingModule } from './model-routing.module';

@NgModule({
  imports: [CommonModule, ModelRoutingModule],
  declarations: [ModelComponent],
  exports: [ModelComponent]
})
export class ModelModule { }
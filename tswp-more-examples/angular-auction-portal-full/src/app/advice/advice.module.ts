import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'

import { AdviceRoutingModule } from './advice-routing.module';
import { AdvicesPageComponent } from './advices-page/advices-page.component';


@NgModule({
  declarations: [AdvicesPageComponent],
  imports: [
    CommonModule,
    AdviceRoutingModule,
    SharedModule
  ]
})
export class AdviceModule { }

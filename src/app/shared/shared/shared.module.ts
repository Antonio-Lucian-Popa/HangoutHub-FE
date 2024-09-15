import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


const COMPONENTS: any[] = [];
const NB_MODULES: any[] = [
  ReactiveFormsModule
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    ...NB_MODULES
  ],
  exports: [...NB_MODULES, ...COMPONENTS]
})
export class SharedModule { }

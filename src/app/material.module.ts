import { NgModule } from '@angular/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule
 } from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MaterialModule {}

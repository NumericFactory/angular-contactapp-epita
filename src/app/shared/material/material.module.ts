import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  exports : [
    MatProgressBarModule,
    MatTabsModule,
    MatSnackBarModule 
  ]
 
})
export class MaterialModule { }
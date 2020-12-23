import { NgModule } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
//import   '@angular/material/MatButtonModule';

// import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  imports: [
    // MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatChipsModule,
    ShowHidePasswordModule
  ],
  exports: [MatTooltipModule,MatChipsModule,  ShowHidePasswordModule],
})

export class LoginLayoutModule {}

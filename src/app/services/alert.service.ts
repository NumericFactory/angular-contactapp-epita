import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class AlertService {

  constructor(private _snackBar:MatSnackBar) { }

  showSnackbar(msg) {
     this._snackBar.open(msg, 'fermer',{
      duration: 5 * 1000,
    });
  }

}
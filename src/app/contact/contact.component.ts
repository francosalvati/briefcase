import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }


  copy(){
    navigator.clipboard.writeText('francosalvati98@gmail.com');
    this.openSnackBar();
  }

  openSnackBar() {
    this._snackBar.open('gmail copiado', 'ok');
  }
}

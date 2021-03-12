import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  taskArr:any=[
    {
      title:'',

    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

    openDialog(){
      const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

}

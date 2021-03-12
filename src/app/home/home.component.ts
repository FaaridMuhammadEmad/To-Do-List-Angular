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
      taskTitle:'Faarid',
      taskDetails:'abc',
      dueDate:'12/01/2020'
    },
    {
      taskTitle:'Ali',
      taskDetails:'def',
      dueDate:'12/01/2020'
    },
    {
      taskTitle:'Ahmed',
      taskDetails:'gef',
      dueDate:'12/01/2020'
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

    openDialog(){
      const dialogRef = this.dialog.open(ModalComponent);
     // dialogRef.componentInstance.emitService.subscribe((emmitedValue) => {
        // do sth with emmitedValue
  //  });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

}

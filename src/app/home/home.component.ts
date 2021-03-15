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
      taskName:'Faarid',
      taskDetail:'This is my task',
      dueDate:'12/01/2020'
    },
    {
      taskName:'Ali',
      taskDetail:'asdad sdsddsdds adssdss assda sada',
      dueDate:'12/01/2020'
    },
    {
      taskName:'Ahmed',
      taskDetail:'gef',
      dueDate:'12/01/2020'
    }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

    openDialog(){
      const dialogRef = this.dialog.open(ModalComponent);
      dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result.data.taskName}`);
      this.taskArr.push(result.data)

    });
  }
  
  deleteTask(i:any){
    this.taskArr.splice(i, 1);  
  }

}

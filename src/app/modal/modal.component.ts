import { Component, OnInit,EventEmitter, Output,Inject,InjectionToken } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  
  taskForm:any;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<HomeComponent>,
    ) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      taskName:['hello',Validators.required],
      taskDetail:['asas',Validators.required],
      dueDate:['2002/10/10']
    })
  }

  get taskName(){
    return this.taskForm.get('taskName');
  }
  get taskDetail(){
    return this.taskForm.get('taskDetail');
  }
  get dueDate(){
    return this.taskForm.get('dueDate');
  }

  onSubmit(){
    // console.log(this.taskForm.value);
    this.dialogRef.close({data:this.taskForm.value});
  }

}

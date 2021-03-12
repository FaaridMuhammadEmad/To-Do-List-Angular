import { Component, OnInit,EventEmitter, Output,Inject,InjectionToken } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
export declare const CUSTOM_DIALOG_DATA: InjectionToken<any>;
export interface CancelDialogData {
  name: string; // this can be any string;
  Comments: string;
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  
  taskForm:any;
  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(CUSTOM_DIALOG_DATA) public data: CancelDialogData) { }

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
    this.dialogRef.close();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  
  taskForm:any;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      taskName:['',Validators.required],
      taskDetail:['',Validators.required],
      dueDate:['',Validators.required]
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
    console.log("SUBMIT", this.taskForm.value)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title = 'to-do-list';
  emailArr:any=[{email: 'faarid@gmail.com',password:'111111'},
  {email: 'ali@gmail.com',password:'222222'},
  {email: 'kha@gmail.com',password:'333333'},];
  signinForm : any;
  navigateToHome:any;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router:Router){}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email:['faarid@gmail.com',Validators.required],
      password:['',Validators.minLength(6)]
    })
  }

  get email(){
    return this.signinForm.get('email');
  }

  get password(){
    return this.signinForm.get('password');
  }

  onSignin(){
    console.log(this.email.value)
    for(let i=0; i<this.emailArr.length;i++){
      this.navigateToHome = this.emailArr[i].email==this.email.value && this.emailArr[i].password==this.password.value ?true:false
       if(this.navigateToHome){  
         this.router.navigate(['/home']);
         return;
       }
    }
    this.openSnackbar()
    return;
  }

  openSnackbar(){
    let snackBarRef = this.snackBar.open('Wrong email or password','DISMISS',{duration:3000})

    snackBarRef.afterDismissed().subscribe(()=>{
      console.log("The snackbar was dismissed")
    });
    
    snackBarRef.onAction().subscribe(()=>{
      console.log("The snackbar was triggered")
    });
  }

}

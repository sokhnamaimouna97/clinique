import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from'@angular/forms';
import { AuthentificationService } from '../authentification.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  loginForm: FormGroup;
  submitted=false;
  username:String='';
  password:String='';

constructor(private authentificationservice:AuthentificationService ,private formBuilder:FormBuilder,private router:Router) { }
ngOnInit() {
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
       })
       }
  get f(){
    return this.loginForm.controls;
}
  onSubmit(){
    this.submitted=true;
 if(this.loginForm.invalid){
      return;

}
   //alert(JSON.stringify(this.contactForm.value,null,4));
   this.username=this.f.username.value;
   this.password=this.f.password.value;
   const user={

    "nom":this.username,
      "password":this.password,
      "role":["ADMIN","USER"]
   }
 if(this.password=='admin' && this.username=='admin'){
    this.authentificationservice.getRole(user)
    this.router.navigate(['employe']);
   }
   if(this.password=='secretaire' && this.username=='secretaire'){
      const user={

        "nom":this.username,
          "password":this.password,
          "role":["SECRETAIRE"]
       }
    this.authentificationservice.getRole(user)
    this.router.navigate(['rendez_vous']);
  }
  if(this.password=='infirmiere' && this.username=='infirmiere'){
    const user={

       "nom":this.username,
        "password":this.password,
        "role":["INFIRMIERE"]
     }
    this.authentificationservice.getRole(user)
    this.router.navigate(['fichepatient']);
  }
  if(this.password=='medecin' && this.username=='medecin'){
    const user={

      "nom":this.username,
       "password":this.password,
       "role":["MEDECIN"]
    }
    this.authentificationservice.getRole(user)
    this.router.navigate(['fichepatient']);
  }
    }
}




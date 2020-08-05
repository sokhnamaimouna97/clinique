import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {
  contactForm: FormGroup;
  submitted=false;
  somme:String='';
  type:String='';
  numeropatient:String='';
  listesFiches:Array<any>=[];
  fiche:Array<any>=[]
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.contactForm=this.formBuilder.group({
      somme:['',Validators.required],
      type:['',Validators.required],
      numeropatient:['',Validators.required],



    })

  }
  get f(){
    return this.contactForm.controls;
}
  oneSubmit(){
    this.submitted=true;
    if(this.contactForm.invalid){
      return;
}
   // alert(JSON.stringify(this.contactForm.value,null,4));
   this.somme=this.contactForm.value.somme;
   this.type=this.contactForm.value.type;
   this.numeropatient=this.contactForm.value.numeropatient;

   const p={
    somme:this.somme,
    type:this.type,
    numeropatient:this.numeropatient

 }
this.fiche.push(p);
this.listesFiches=this.fiche;
this.contactForm.reset()
}
}


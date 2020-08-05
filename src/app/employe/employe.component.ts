import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employeForm: FormGroup;
  submitted=false;
  nom:String='';
  prenom:String='';
  code:String='';
  adresse:String='';
  fonction:String='';
  listesEmployes:Array<any>=[];
  employe:Array<any>=[];
  isAdd=true;
  isedit=false;

constructor(private formBuilder:FormBuilder) { }

ngOnInit() {
    this.employeForm=this.formBuilder.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      code:['',Validators.required],
      fonction:['',Validators.required],
      adresse:['',Validators.required],
   })
   this.isAdd=true;
  }
  get f(){
    return this.employeForm.controls;
 }
  onSubmit(){
    this.submitted=true;
    if(this.employeForm.invalid){
      return;
}
    if(this.isAdd){
      this.isedit=false;

 // alert(JSON.stringify(this.contactForm.value,null,4));
   this.nom=this.employeForm.value.nom;
   this.prenom=this.employeForm.value.prenom;
   this.code=this.employeForm.value.code;
   this.adresse=this.employeForm.value.adresse;
   this.fonction=this.employeForm.value.fonction;
    const p={
      nom:this.nom,
      prenom:this.prenom,
      code:this.code,
      adresse:this.adresse,
      fonction:this.fonction
}
   this.employe.push(p);
   this.listesEmployes=this.employe;
   this.employeForm.reset();
}

 }
  update(item){
    this.isAdd=false;
    this.isedit=true;
    this.f.nom.setValue(item.nom);
    this.f.prenom.setValue(item.prenom);
    this.f.fonction.setValue(item.fonction);
    this.f.adresse.setValue(item.adresse);
    this.f.code.setValue(item.code);

   }
  edit(it1){
    let tempo=[];
    for(let item of this.listesEmployes){
      if(it1.code==item.code){
        item.code=it1.code;
        item.nom=it1.nom;
        item.prenom=it1.prenom;
        item.adresse=it1.adresse;
        item.fonction=it1.fonction;
        }
      tempo.push(item);
   }
    this.listesEmployes=tempo;
  }
  delete(it1){
    for(let item of this.listesEmployes){
      if(it1.code==item.code){
        //console.log(this.listesEmployes.findIndex(x=>x==item));
       // console.log(this.listesEmployes.splice(this.listesEmployes.findIndex(x=>x==item),1));
        this.listesEmployes.splice(this.listesEmployes.findIndex(x=>x==item),1)
        }
   }
     }
     clickAdd(){
      this.isAdd=true;
      this.isedit=false;
   }
     clickEdit(){
      this.isAdd=false;
      this.isedit=true;
      if(this.isedit){
        this.nom=this.employeForm.value.nom;
        this.prenom=this.employeForm.value.prenom;
        this.code=this.employeForm.value.code;
        this.adresse=this.employeForm.value.adresse;
        this.fonction=this.employeForm.value.fonction;
        const p={
          nom:this.nom,
          prenom:this.prenom,
          code:this.code,
          adresse:this.adresse,
          fonction:this.fonction
             }
         this.edit(p);
         this.isAdd=false;
     }

     }
  }

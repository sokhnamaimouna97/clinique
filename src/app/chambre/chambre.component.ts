import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit {

  contactForm: FormGroup;
  submitted=false;
  numero:String='';
  nom:String='';
  listesFiches:Array<any>=[];
  fiche:Array<any>=[]
  isAdd=true;
  isedit=false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.contactForm=this.formBuilder.group({
      numero:['',Validators.required],
      nom:['',Validators.required],


    })
    this.isAdd=true;

  }
  get f(){
    return this.contactForm.controls;
}
  onSubmit(){
    this.submitted=true;
    if(this.contactForm.invalid){
      return;
}
      if(this.isAdd){
    this.isedit=false;

   // alert(JSON.stringify(this.contactForm.value,null,4));
   this.numero=this.contactForm.value.numero;
   this.nom=this.contactForm.value.nom;
   const p={
    numero:this.numero,
    nom:this.nom,
 }
this.fiche.push(p);
this.listesFiches=this.fiche;
this.contactForm.reset()
}
}
update(item){
  this.isAdd=false;
  this.isedit=true;
  this.f.nom.setValue(item.nom);
  this.f.numero.setValue(item.numero);

 }
edit(it1){
  let tempo=[];
  for(let item of this.listesFiches){
    if(it1.numero==item.numero){
      item.numero=it1.numero;
      item.nom=it1.nom;
      }
    tempo.push(item);
 }
  this.listesFiches=tempo;
}
delete(it1){
  for(let item of this.listesFiches){
    if(it1.numero==item.numero){
      //console.log(this.listesEmployes.findIndex(x=>x==item));
     // console.log(this.listesEmployes.splice(this.listesEmployes.findIndex(x=>x==item),1));
      this.listesFiches.splice(this.listesFiches.findIndex(x=>x==item),1)
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
      this.nom=this.contactForm.value.nom;
      this.numero=this.contactForm.value.numero;
      const p={
        nom:this.nom,
        numero:this.numero,
           }
       this.edit(p);
       this.isAdd=false;
   }

   }
}

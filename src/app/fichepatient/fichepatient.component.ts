import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-fichepatient',
  templateUrl: './fichepatient.component.html',
  styleUrls: ['./fichepatient.component.css']
})
export class FichepatientComponent implements OnInit {

  contactForm: FormGroup;
  submitted=false;
  numero:String='';
  dateconsultation:String='';
  information:String='';
  listesFiches:Array<any>=[];
  fiche:Array<any>=[];
  isAdd=true;
  isedit=false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.contactForm=this.formBuilder.group({
      numero:['',Validators.required],
      dateconsultation:['',Validators.required],
     information :['',Validators.required],

    })
    this.isAdd=true;

  }
  get f(){
    return this.contactForm.controls;

  }
  oneSubmit(){
    this.submitted=true;
    if(this.contactForm.invalid){
      return;

    }
    if(this.isAdd){
      this.isedit=false;
   // alert(JSON.stringify(this.contactForm.value,null,4));
   this.numero=this.contactForm.value.numero;
   this.dateconsultation=this.contactForm.value.dateconsultation;
   this.information=this.contactForm.value.information;

   const p={
    numero:this.numero,
    dateconsultation:this.dateconsultation,
    information:this.information


  }

 this.fiche.push(p);

 this.listesFiches=this.fiche;
 this.contactForm.reset()

  }
}
update(item){
  this.isAdd=false;
  this.isedit=true;
  this.f.numero.setValue(item.numero);
  this.f.dateconsultation.setValue(item.dateconsultation);
  this.f.information.setValue(item.information);


 }
edit(it1){
  let tempo=[];
  for(let item of this.listesFiches){
    if(it1.numero==item.numero){
      item.numero=it1.numero;
      item.dateconsultation=it1.dateconsultation;
      item.information=it1.information;
      }
    tempo.push(item);
 }
  this.listesFiches=tempo;
}
delete(it1){
  for(let item of this.listesFiches){
    if(it1.code==item.code){
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
      this.numero=this.contactForm.value.numero;
      this.dateconsultation=this.contactForm.value.dateconsultation;
      this.information=this.contactForm.value.information;
      const p={
        nom:this.numero,
        dateconsultation:this.dateconsultation,
        information:this.information,
           }
       this.edit(p);
       this.isAdd=false;
   }

   }


}

import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  contactForm: FormGroup;
  submitted=false;
  datedebut:String='';
  datefin:String='';
  listesFiches:Array<any>=[];
  fiche:Array<any>=[]
  numeropatient:String='';
  numeroemploye:String='';
  isAdd=true;
  isedit=false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.contactForm=this.formBuilder.group({
      datedebut:['',Validators.required],
      datefin:['',Validators.required],
      numeropatient:['',Validators.required],
      numeroemploye:['',Validators.required],
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
   this.datedebut=this.contactForm.value.datedebut;
   this.datefin=this.contactForm.value.datefin;
   this.numeropatient=this.contactForm.value.numeropatient;
   this.numeroemploye=this.contactForm.value.numeroemploye;


   const p={
    datedebut:this.datedebut,
    datefin:this.datefin,
    numeropatient:this.numeropatient,
    numeroemploye:this.numeroemploye,
}


 this.fiche.push(p);

 this.listesFiches=this.fiche;
 this.contactForm.reset()

 }
}
update(item){
  this.isAdd=false;
  this.isedit=true;
  this.f.numeropatient.setValue(item.numeropatient);
  this.f.numeroemploye.setValue(item.numeroemploye);
  this.f.datedebut.setValue(item.datedebut);
  this.f.datefin.setValue(item.datefin);

 }
edit(it1){
  let tempo=[];
  for(let item of this.listesFiches){
    if(it1.numeropatient==item.numeropatient){
      item.numeropatient=it1.numeropatient;
      item.numeroemploye=it1.numeroemploye;
      item.datedebut=it1.datedebut;
      item.datefin=it1.datefin;
      }
    tempo.push(item);
 }
  this.listesFiches=tempo;
}
delete(it1){
  for(let item of this.listesFiches){
    if(it1.numeropatient==item.numeropatient){
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
      this.contactForm.value.datedebut;
      this.contactForm.value.datefin;
      this.contactForm.value.numeropatient;
      this.contactForm.value.numeroemploye;
  const p={
    datedebut:this.datedebut,
    datefin:this.datefin,
    numeropatient:this.numeropatient,
    numeroemploye:this.numeroemploye,
}
       this.edit(p);
       this.isAdd=false;
   }

   }


}

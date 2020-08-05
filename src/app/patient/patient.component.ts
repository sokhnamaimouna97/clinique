import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patientForm: FormGroup;
  submitted=false;
  nom:String='';
  prenom:String='';
  code:String='';
  adresse:String='';
  telephone:String='';
  listesPatients:Array<any>=[];
  patient:Array<any>=[];
  isAdd=true;
  isedit=false;
  age;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.patientForm=this.formBuilder.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      code:['',Validators.required],
      telephone:['',Validators.required],
      adresse:['',Validators.required],


    })
    this.isAdd=true;

  }
  get f(){
    return this.patientForm.controls;

  }
  onSubmit(){
    this.submitted=true;
    if(this.patientForm.invalid){
      return;

    }
    if(this.isAdd){
      this.isedit=false;

   // alert(JSON.stringify(this.contactForm.value,null,4));
   this.nom=this.patientForm.value.nom;
   this.prenom=this.patientForm.value.prenom;
   this.code=this.patientForm.value.code;
   this.adresse=this.patientForm.value.adresse;
   this.telephone=this.patientForm.value.telephone;
    const p={
      nom:this.nom,
      prenom:this.prenom,
      code:this.code,
      adresse:this.adresse,
      telephone:this.telephone

    }

   this.patient.push(p);

   this.listesPatients=this.patient;
   this.patientForm.reset()
  }

  }
  update(item){
    this.isAdd=false;
    this.isedit=true;
    this.f.nom.setValue(item.nom);
    this.f.prenom.setValue(item.prenom);
    this.f.telephone.setValue(item.telephone);
    this.f.adresse.setValue(item.adresse);
    this.f.code.setValue(item.code);

   }
  edit(it1){
    let tempo=[];
    for(let item of this.listesPatients){
      if(it1.code==item.code){
        item.code=it1.code;
        item.nom=it1.nom;
        item.prenom=it1.prenom;
        item.adresse=it1.adresse;
        item.telephone=it1.telephone;
        }
      tempo.push(item);
   }
    this.listesPatients=tempo;
  }
  delete(it1){
    for(let item of this.listesPatients){
      if(it1.code==item.code){
        //console.log(this.listesEmployes.findIndex(x=>x==item));
       // console.log(this.listesEmployes.splice(this.listesEmployes.findIndex(x=>x==item),1));
        this.listesPatients.splice(this.listesPatients.findIndex(x=>x==item),1)
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
        this.nom=this.patientForm.value.nom;
        this.prenom=this.patientForm.value.prenom;
        this.code=this.patientForm.value.code;
        this.adresse=this.patientForm.value.adresse;
        this.telephone=this.patientForm.value.telephone;
        const p={
          nom:this.nom,
          prenom:this.prenom,
          code:this.code,
          adresse:this.adresse,
          telephone:this.telephone
             }
         this.edit(p);
         this.isAdd=false;
     }

     }


}

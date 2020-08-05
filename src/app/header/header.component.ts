import { Component, OnInit } from '@angular/core';
import { AuthentificationService} from '../authentification.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 user:any;

  constructor(private authentificationservice:AuthentificationService ) { }

  ngOnInit() {
    const user=this.authentificationservice.getUser()
    //console.log(user);
    console.log(JSON.parse(JSON.stringify(user)).role[0]);
}

}

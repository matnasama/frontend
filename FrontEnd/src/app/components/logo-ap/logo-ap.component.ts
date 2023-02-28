import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {

  isLogged = false;

  persona: persona = new persona("","","");
  constructor(private router:Router, private tokenService: TokenService, public personaService: PersonaService) {
    
  }
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else {
      this.isLogged = false;
    }
  }
  
  onLogOut():void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login'])
  }

}

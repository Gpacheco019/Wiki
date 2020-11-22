import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  over(){
    document.getElementById('surviver').innerHTML = "Sobreviva";
  }

  out(){
    console.log("teste");
  }

  constructor() { }

  ngOnInit(): void {
    
  }

 /*  buscarNome(){
    this.buttonSurviver = document.getElementById('surviver').onmouseover = function (){
      document.getElementById('surviver').innerHTML = "Sobreviva";
    };
 */



  

}

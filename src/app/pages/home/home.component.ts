import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  over(){
    
    console.log('over')
      var d = document.getElementById('surviver');

      d.innerHTML =  "sobreviva" + "<span class='material-icons'> double_arrow </span>"
  
  }

  out(){
    console.log('out')
            var d = document.getElementById('surviver');

            d.innerHTML =  " " + "<span class='material-icons'> double_arrow </span>"
        
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.sass']
})
export class StartPageComponent implements OnInit {
  public intervalVar; 

  constructor(public router: Router) {}

  ngOnInit() {
    
  }

  startTimer() {
    this.router.navigate(['/part-one']);
  }

  startAnimation() {
    let element = document.getElementsByTagName('img')[1]; 
    element.src = "../../assets/images/start.gif"; 
    this.intervalVar = setTimeout(function() {
      this.startTimer(); 
    }.bind(this), 800);
  }

}

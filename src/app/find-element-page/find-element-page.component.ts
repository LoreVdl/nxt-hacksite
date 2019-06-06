import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-element-page',
  templateUrl: './find-element-page.component.html',
  styleUrls: ['./find-element-page.component.sass']
})
export class FindElementPageComponent implements OnInit {
  private x; 
  private y; 
  private positionX;
  private positionY; 
  private positionXinPercent; 
  private positionYinPercent;
  public intervalVar;
  private audio1;  
  private audio2;  
  private audio3;  
  private audio4;  
  private audio5;  
  private mouseX = 0; 
  private mouseY = 0; 
  private mousePositionXinPercent;
  private mousePositionYinPercent;
  private sound1 = false; 
  private sound2 = false; 
  private sound3 = false; 
  private sound4 = false; 
  private sound5 = false; 

  constructor(private elRef: ElementRef, private router: Router) { }

  ngOnInit() {
    this.x = window.innerWidth - 200;
    this.y = window.innerHeight - 50; 
    this.positionX = Math.floor(Math.random() * this.x);
    this.positionY = Math.floor(Math.random() * this.y);
    this.positionXinPercent = (this.positionX / this.x) * 100;
    this.positionYinPercent = (this.positionY / this.y * 100);

    let div = document.getElementById("element"); 
    let img = document.createElement("img");

    img.src = "assets/images/ESCAPE.png"; 
    img.style.width = "10%";
    img.style.position = "absolute";
    img.style.cursor = "pointer";
    img.style.left = this.positionXinPercent.toString() + "%"; 
    img.style.top = this.positionYinPercent.toString() + "%"; 
    img.addEventListener("click", this.navigate.bind(this));
    div.appendChild(img);

    let div1 = document.getElementById("div1"); 
    let positionXinPercentDiv1 = this.positionXinPercent - 5; 
    let positionYinPercentDiv1 = this.positionYinPercent - 3; 
    div1.style.left = positionXinPercentDiv1.toString() + "%"; 
    div1.style.top = positionYinPercentDiv1.toString() + "%"; 

    let div2 = document.getElementById("div2"); 
    let positionXinPercentDiv2 = this.positionXinPercent - 12; 
    let positionYinPercentDiv2 = this.positionYinPercent - 10; 
    div2.style.left = positionXinPercentDiv2.toString() + "%"; 
    div2.style.top = positionYinPercentDiv2.toString() + "%"; 

    let div3 = document.getElementById("div3"); 
    let positionXinPercentDiv3 = this.positionXinPercent - 25; 
    let positionYinPercentDiv3 = this.positionYinPercent - 22; 
    div3.style.left = positionXinPercentDiv3.toString() + "%"; 
    div3.style.top = positionYinPercentDiv3.toString() + "%"; 

    let div4 = document.getElementById("div4"); 
    let positionXinPercentDiv4 = this.positionXinPercent - 35; 
    let positionYinPercentDiv4 = this.positionYinPercent - 32; 
    div4.style.left = positionXinPercentDiv4.toString() + "%"; 
    div4.style.top = positionYinPercentDiv4.toString() + "%"; 

    let div5 = document.getElementById("div5"); 
    let positionXinPercentDiv5 = this.positionXinPercent - 45.2; 
    let positionYinPercentDiv5 = this.positionYinPercent - 51; 
    div5.style.left = positionXinPercentDiv5.toString() + "%"; 
    div5.style.top = positionYinPercentDiv5.toString() + "%"; 

    this.audio1 = new Audio(); 
    this.audio1.src = "assets/sound/sound1.mp3";

    this.audio2 = new Audio(); 
    this.audio2.src = "assets/sound/2.mp3";

    this.audio3 = new Audio(); 
    this.audio3.src = "assets/sound/3.mp3";

    this.audio4 = new Audio(); 
    this.audio4.src = "assets/sound/4.mp3";

    this.audio5 = new Audio(); 
    this.audio5.src = "assets/sound/5.mp3";
  }

  makeSound1() {
    this.sound1 = true; 
    this.sound2 = false; 
    this.sound3 = false;
    this.sound4 = false; 
    this.sound5 = false; 

    this.intervalVar = setInterval(() => {
      if (this.sound1 === true) {  
        if(this.audio1.paused) {
          this.audio1.volume = 1; 
          this.audio1.play();
        } 
      }
    }, 0);
  }
  
  makeSound2() {
    this.sound1 = false; 
    this.sound2 = true; 
    this.sound3 = false;
    this.sound4 = false; 
    this.sound5 = false; 
  
    this.intervalVar = setInterval(() => {
      if (this.sound2 === true) {
        if (this.audio2.paused) {
          this.audio2.volume = 1; 
          this.audio2.play(); 
        }
      }
    }, 0);
  }

  makeSound3() {
    this.sound1 = false; 
    this.sound2 = false; 
    this.sound3 = true;
    this.sound4 = false; 
    this.sound5 = false; 
  
    this.intervalVar = setInterval(() => {
      if (this.sound3 === true) {
        if (this.audio3.paused) {
          this.audio3.volume = 1; 
          this.audio3.play(); 
        }
      }
    }, 0);
  }

  makeSound4() {
    this.sound1 = false; 
    this.sound2 = false; 
    this.sound3 = false;
    this.sound4 = true; 
    this.sound5 = false; 
  
    this.intervalVar = setInterval(() => {
      if (this.sound4 === true) {
        if (this.audio4.paused) {
          this.audio4.volume = 1; 
          this.audio4.play(); 
        }
      }
    }, 0);
  }

  makeSound5() {
    this.sound1 = false; 
    this.sound2 = false; 
    this.sound3 = false;
    this.sound4 = false; 
    this.sound5 = true; 
  
    this.intervalVar = setInterval(() => {
      if (this.sound5 === true) {
        if (this.audio5.paused) {
          this.audio5.volume = 1; 
          this.audio5.play(); 
        }
      }
    }, 0);
  }

  navigate() {
    this.router.navigateByUrl('');
  }
}

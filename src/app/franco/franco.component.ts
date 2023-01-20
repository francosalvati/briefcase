import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { interval, Subscription, timer } from 'rxjs';


@Component({
  selector: 'app-franco',
  templateUrl: './franco.component.html',
  styleUrls: ['./franco.component.css']
})
export class FrancoComponent implements OnInit {

  @ViewChild('meComponent') me!: ElementRef;
  @ViewChild('skillsComponent') skills!: ElementRef;

  private timer: any;
  private sub!: Subscription;
  public disabled: boolean;
  public changer: boolean;
  public contador: number;

  constructor(private renderer2: Renderer2) {
    this.disabled = false;
    this.changer = false;
    this.contador = 0;
  }

  ngOnInit(): void {
    this.setTime(this.disabled);
  }

  setTime(disabled: boolean) {
    // this.timer = interval(1000);
    // this.disabled = true
    // if(disabled == false){
    //   this.sub =  this.timer.subscribe((n: any) => {
    //     console.log(this.contador)
    //     this.contador++;
    //     if(this.contador % 10 == 0 && this.contador != 0){
    //       this.changeClass(this.changer);
    //     }
    //   });
    // }
  }

  stop(){
    if(this.disabled == true){
      this.sub.unsubscribe();
      this.disabled = false
    }else{
      this.setTime(this.disabled);
    }
  }

  changeClass(changer: boolean){
    const asMe = this.me.nativeElement;
    const asSkills = this.skills.nativeElement;

    if(changer == false){
      this.renderer2.addClass(asSkills, 'none');
      this.renderer2.removeClass(asMe, 'none');
      this.changer = true
    }else{
      this.renderer2.addClass(asMe, 'none');
      this.renderer2.removeClass(asSkills, 'none');
      this.changer = false
    }


  }

  next() {
    this.contador = 0
    this.changeClass(this.changer);
  }
}

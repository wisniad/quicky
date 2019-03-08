
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';

import { Component, ViewChild, OnInit } from '@angular/core';


import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface
} from 'ngx-swiper-wrapper';
import { Quick } from './Quick';



@Component({
  selector: 'app-quicky',
  templateUrl: './quicky.component.html',
  styleUrls: ['./quicky.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => jello', animate(1000, keyframes(kf.jello))),
      transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
      transition('* => rotateOutUpRight', animate(1000, keyframes(kf.rotateOutUpRight))),
      transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY))),
    ])
  ]
})
export class QuickyComponent implements OnInit {

  public show: boolean = true;

  public slides: Quick[] = [
    { nazwa: 'Burger', opis: 'jedzenie', godziny: '12:00', osoba: 'Izabela' },
    { nazwa: 'Papieros', opis: 'przerwa', godziny: '13:00', osoba: 'Damian' },
    { nazwa: 'Spacer', opis: 'aktywność', godziny: '14:00', osoba: 'Rafał' },
  ];

  public type: string = 'component';

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 3,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: false,
    spaceBetween: 60,
    loop: true,
    slideToClickedSlide: true

  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;


  constructor() { }

  ngOnInit() {
  }

  animationState: string;

  startAnimation(state) {
    console.log(state)
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

}

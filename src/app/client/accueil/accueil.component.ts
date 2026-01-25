import { Component, AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, AfterViewInit {

  chatbot = false;

  @ViewChild('notificationAudio') audioRef!: ElementRef<HTMLAudioElement>;

  ngOnInit(): void {
    setTimeout(() => {
      this.openChatbot();
    }, 5000);
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    const counters = document.querySelectorAll('.counter');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 75%',
        once: true
      }
    });

    counters.forEach((counter: any) => {
      const endValue = +counter.getAttribute('data-value');
      tl.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: endValue,
          duration: 2,
          ease: 'power1.out',
          snap: { innerText: 1 }
        },
        0
      );
    });

    new Splide('#media-splide', {
      type: 'loop',
      perPage: 1,
      gap: '2rem',
      autoplay: true,
      interval: 5000,
      pauseOnHover: true,
      arrows: true,
      pagination: true,
      breakpoints: {
        768: { perPage: 1 }
      }
    }).mount();
  }

  /** Ouvre le chatbot + joue le son */
  openChatbot() {
    this.chatbot = true;

    if (this.audioRef) {
      this.audioRef.nativeElement.currentTime = 0;
      this.audioRef.nativeElement.play().catch(() => {
        // évite les erreurs navigateur (autoplay policy)
      });
    }
  }

  closechatbot() {
    this.chatbot = false;
  }
}

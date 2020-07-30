import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
	anim: Animation;
	@ViewChild('square', { static: false }) square: ElementRef;
	isPlaying = false;

	constructor(private animationCntl: AnimationController) {}

	ngAfterViewInit() {
		this.anim = this.animationCntl.create('myanim');
		this.anim
			.addElement(this.square.nativeElement)
			.duration(1500)
			.easing('ease-out')
			.iterations(Infinity)
			.fromTo('transform', 'translate(0px)', 'translateX(300px)')
			.fromTo('opacity', 1, 0.2);
	}

	toggleAnimation() {
		if (this.isPlaying) {
      this.anim.stop();
		} else {
      this.anim.play();
		}
		this.isPlaying = !this.isPlaying;
	}
}

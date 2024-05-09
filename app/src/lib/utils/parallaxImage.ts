import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function (image: HTMLImageElement) {
	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.create({
		trigger: image,
		start: 'top bottom',
		end: 'bottom top',
		scrub: 1,
		animation: gsap.fromTo(image, { y: '-15%', scale: 1.25 }, { y: '15%', scale: 1.25 })
	});
}

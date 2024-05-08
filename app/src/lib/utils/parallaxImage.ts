import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function (image: HTMLImageElement) {
	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.create({
		trigger: image,
		start: 'top bottom',
		end: 'bottom top',
		scrub: 1.2,
		animation: gsap.fromTo(image, { y: '-5%', scale: 1 }, { y: '5%', scale: 1.1 })
	});
}

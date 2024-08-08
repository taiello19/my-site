import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;

  ngAfterViewInit(): void {
    const carouselElement = this.carousel.nativeElement;
    const images = Array.from(carouselElement.querySelectorAll('img')) as HTMLImageElement[];

    // Duplicate the images
    images.forEach(img => {
      const clone = img.cloneNode(true) as HTMLImageElement;
      carouselElement.appendChild(clone);
    });


    const totalWidth = images.length * (images[0].width + 40); 
    carouselElement.style.width = `${totalWidth * 2}px`; 
  }
}

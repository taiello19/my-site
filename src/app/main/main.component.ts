import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;
  expandedProjectIndex: number | null = null; 
  showScrollToTop: boolean = false;


  projects = [
    {
      name: 'Bell Artificial Intelligence Technician',
      blurb: 'Custom-built multi-modal language model used to troubleshoot various problems users of Bell Canada products may face.',
      points: [
        'Supports sending text, photos, and PDFs, then analyzes customer concerns to provide relevant and helpful responses to users.',
        'This project was made in collaboration with Bell Canada to reduce the training time needed for their internet technicians and also to prototype a customer-facing support agent.'
      ],
      github: 'https://github.com/taiello19/bait',
      youtube: 'https://www.youtube.com/watch?v=xYl0aiNbgQg&t=4s',
      image: 'assets/icons/bait.png'
    },
    {
      name: 'GJA Inc Website',
      blurb: 'Custom built website for Ottawa based landscape architecture company GJA Inc.',
      points: [
        'Designed and developed a website using Angular for Ottawa-based landscape architecture company Gja Inc.',
        'Worked with the client to elicit requirements and design/theme ideas.',
        'Hosted the website on cPanel and am continuing support, maintenance, and updates',
      ],
      github: 'https://github.com/taiello19/GJA',
      image: 'assets/icons/gja.png'
    },
    {
      name: 'UWOutlines',
      blurb: 'Course outline editing system with account creation and ChatGPT integration.',
      points: [
        'Allowed users to login and create accounts using a SQL database for storage',
        'ChatGPT integration to allow users to get live suggestions from ChatGPT to improve editing quality',
        'Allow users different access levels to the site based on permission level',
        'Ability to choose from a variety of different themes for the website.',
      ],
      youtube: 'https://www.youtube.com/watch?v=WsDy3XwIQYc&t=2s',
      image: 'assets/icons/western.png'
    },
    {
      name: 'Forest Veil: Rogues Echo',
      blurb: 'Deck-building Rogue-like game basesd on around a mysterious assassin and his battle with his emotional powers.',
      points: [
        'Designed and developped a full game using pygames.',
        'Applied game design principles to allow for a well designed game balance wise, with a fun experience for the player.',
        'Includes a fun and encapturing storyline for the user to stay interested.',
        'Designed with replayability in mind for better user experience.'
      ],
      github: 'https://github.com/taiello19/Forest-Veil-Rogues-Echo',
      image: 'assets/icons/fvre.ico'
    },
    {
      name: 'Client Server Black Jack',
      blurb: 'A fun game of black jack made in C# using the Client-Server model to allow multiple users.',
      points: [
        'Using sockets and threads implemented through C++ designed a client and server-based card game.',
        'Allowed multiple clients to open connections to the server and play the game at the same time.',
        'The server had a unique session for each client and was able to send and receive data.',
      ],
      github: 'https://github.com/taiello19/Csharp-Card-Game',
      image: 'assets/icons/cards.png'
    },
    // more project items can be added here
  ];

  ngAfterViewInit(): void {
    const carouselElement = this.carousel.nativeElement;
    const images = Array.from(carouselElement.querySelectorAll('img')) as HTMLImageElement[];

    images.forEach(img => {
      const clone = img.cloneNode(true) as HTMLImageElement;
      carouselElement.appendChild(clone);
    });

    const totalWidth = images.length * (images[0].width + 40); 
    carouselElement.style.width = `${totalWidth * 2}px`; 
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollToTop = window.pageYOffset > 300; 
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleProject(index: number): void {
    if (window.innerWidth > 500) { 
      if (this.expandedProjectIndex === index) {
        this.expandedProjectIndex = null;
      } else {
        this.expandedProjectIndex = index;
      }
    }
  }
}

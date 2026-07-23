import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  showScrollToTop: boolean = false;

  skillGroups = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', image: 'assets/icons/python.png' },
        { name: 'JavaScript / TypeScript', image: 'assets/icons/javascript.png' },
        { name: 'C / C++', image: '' },
        { name: 'SQL', image: 'assets/icons/sql.png' },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Angular', image: 'assets/icons/angular.png' },
        { name: 'React', image: 'assets/icons/react.png' },
        { name: 'Node.js', image: 'assets/icons/node.png' },
        { name: 'Flask', image: '' },
        { name: 'PyTorch', image: 'assets/icons/pytorch.png' },
        { name: 'TensorFlow', image: '' },
        { name: 'Pandas', image: 'assets/icons/pandas.png' },
      ]
    },
    {
      title: 'Cloud & Tools',
      skills: [
        { name: 'AWS', image: 'assets/icons/aws.png' },
        { name: 'GCP', image: 'assets/icons/gcp.png' },
        { name: 'Git', image: 'assets/icons/git.png' },
        { name: 'Linux / Unix', image: '' },
        { name: 'REST APIs', image: '' },
      ]
    },
  ];


  projects = [
    {
      name: 'AIBEL',
      featured: true,
      wordmark: 'AIBEL',
      blurb: 'An AI-powered case-study discussion platform used by Ivey Business School students to hold text and voice conversations with AI instructor and peer personas. Built at the Ivey Business School Foundation.',
      points: [
        'Awarded first place at the FOME Learning Design and Innovation Awards.',
        'Real-time voice built on the Gemini Live API with low-latency audio streaming and per-user session isolation under concurrent load.',
        'WebSocket layer backed by a Redis message bus for multi-user live discussions that scale audio sessions horizontally.',
        'Response-grounding layer — document retrieval plus parallel LLM passes for classification, learning-goal evaluation, and lesson progression — to reduce hallucinations.',
      ],
      tags: ['Python', 'Flask', 'Angular', 'Gemini Live API', 'Redis', 'WebSockets'],
      live: 'https://aibel.ivey.ca/',
      article: 'https://www.ivey.uwo.ca/news/news-ivey/2026/january/ivey-wins-international-learning-design-award-for-ai-boosted-case-learning-tool/',
      image: 'assets/icons/ivey.png'
    },
    {
      name: 'Bell AI Technician',
      featured: false,
      blurb: 'A custom multi-modal language model built in collaboration with Bell Canada to troubleshoot issues customers face with Bell products.',
      points: [
        'Accepts text, photos, and PDFs, then analyzes the customer concern to provide relevant, helpful support responses.',
        'Built to reduce the training time needed for Bell internet technicians and to prototype a customer-facing support agent.'
      ],
      tags: ['PyTorch', 'Python', 'Multi-modal LLM'],
      github: 'https://github.com/taiello19/bait',
      youtube: 'https://www.youtube.com/watch?v=xYl0aiNbgQg&t=4s',
      image: 'assets/icons/bait.png'
    },
    {
      name: 'GJA Inc Website',
      featured: false,
      blurb: 'A production website for Ottawa-based landscape architecture company GJA Inc.',
      points: [
        'Designed and developed the site in Angular, working directly with the client to elicit requirements and design ideas.',
        'Hosted on cPanel, with ongoing support, maintenance, and updates.',
      ],
      tags: ['Angular', 'cPanel'],
      github: 'https://github.com/taiello19/GJA',
      image: 'assets/icons/gja.png'
    },
    {
      name: 'UWOutlines',
      featured: false,
      blurb: 'A course-outline editing system with account creation and ChatGPT integration.',
      points: [
        'Login and account creation backed by a SQL database.',
        'ChatGPT integration giving users live suggestions to improve editing quality.',
        'Role-based access levels and multiple selectable site themes.',
      ],
      tags: ['SQL', 'OpenAI API'],
      youtube: 'https://www.youtube.com/watch?v=WsDy3XwIQYc&t=2s',
      image: 'assets/icons/uwoutline.png'
    },
    {
      name: 'Image Captioning AI Model',
      featured: false,
      wordmark: 'ML',
      blurb: 'A deep-learning model that generates natural-language captions for images.',
      points: [
        'Reviewed current captioning approaches across CNN, RNN, and Transformer architectures.',
        'Used transfer learning from pre-trained image recognition models to boost performance.',
        'Built a training pipeline in TensorFlow and PyTorch with data augmentation and hyperparameter tuning.',
      ],
      tags: ['TensorFlow', 'PyTorch', 'Python'],
      image: ''
    },
    {
      name: 'BiteWise AI',
      featured: false,
      blurb: 'A calorie-counting app that uses AI to help track meals.',
      points: [
        'Uses image captioning to recognize food in a photo and better estimate a meal\'s calories.',
        'NLP-based estimation that predicts calories from a text description of a meal.',
        'Simple, effective interface for tracking workouts and meals.',
      ],
      tags: ['NLP', 'Computer vision'],
      image: 'assets/icons/bitewiseai.png'
    },
    // more project items can be added here
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollToTop = window.pageYOffset > 300; 
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  get featuredProjects() {
    return this.projects.filter(p => p.featured);
  }

  get gridProjects() {
    return this.projects.filter(p => !p.featured);
  }

  // If a logo file is missing, fall back to the card's text wordmark.
  onProjectImageError(project: { image: string }): void {
    project.image = '';
  }

  // If a company logo is missing, fall back to the Western crest.
  onLogoError(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/icons/western.png';
  }
}

import { CommonModule } from '@angular/common';
import { Component, input, ViewChild, ElementRef } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { IMusicCard } from '../imusic-card/imusic-card.component';

@Component({
    selector: 'imusic-general-list',
    templateUrl: 'imusic-general-list.component.html',
    styleUrl: 'imusic-general-list.component.scss',
    imports: [CommonModule, IMusicCard, FontAwesomeModule]
})

export class IMusicGeneralList 
{
    @ViewChild('scrollElement', { static: false }) scrollElement!: ElementRef<HTMLDivElement>;
    public title = input.required();
    public iconArrowLeft = faChevronLeft;
    public iconArrowRight = faChevronRight;

    public scrollLeft(): void {
        if (!this.scrollElement) return;

        this.scrollElement.nativeElement.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    }

    public scrollRight(): void {
        if (!this.scrollElement) return;
        
        this.scrollElement.nativeElement.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    }
}
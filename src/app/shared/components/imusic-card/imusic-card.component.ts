import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'imusic-card',
    templateUrl: 'imusic-card.component.html',
    styleUrl: 'imusic-card.component.scss',
    imports: [CommonModule, FontAwesomeModule]
})

export class IMusicCard 
{
    public iconPlay = faPlay;
}
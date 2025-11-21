import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IMusicCard } from '../imusic-card/imusic-card.component';

@Component({
    selector: 'imusic-general-list',
    templateUrl: 'imusic-general-list.component.html',
    styleUrl: 'imusic-general-list.component.scss',
    imports: [CommonModule, IMusicCard]
})

export class IMusicGeneralList 
{
    public title = input.required();
}
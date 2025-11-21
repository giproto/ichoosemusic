import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IMusicCard } from "../../shared/components/imusic-card/imusic-card.component";

@Component({
    selector: 'home-page',
    templateUrl: 'home.page.html',
    styleUrl: 'home.page.scss',
    imports: [CommonModule, FontAwesomeModule, IMusicCard]
})

export class HomePage
{
    public iconSearch = faMagnifyingGlass;
}
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroList$: BehaviorSubject<Hero[]> = this.heroService.list$;

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.heroService.getAll();
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {id: 1, name: 'Superman', superPower: 'super-strong', address: 'DC'},
    {id: 2, name: 'Wonder Woman', superPower: 'beautiful', address: 'New York'},
    {id: 3, name: 'Batman', superPower: 'clever', address: 'cave'},
    {id: 4, name: 'Spider-Man', superPower: 'spinning web', address: 'wall'},
    {id: 5, name: 'Catwoman', superPower: 'jumping', address: 'cat litter'},
  ]

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([])

  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }
}

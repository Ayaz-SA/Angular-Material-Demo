import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-mat-input-module',
  templateUrl: './mat-input-module.component.html',
  styleUrls: ['./mat-input-module.component.scss']
})
export class MatInputModuleComponent implements OnInit {
  selectedTechnology: string;
  multipleSelectedTech: string;
  technology: string[] = ['Angular', 'NodeJs', 'React', 'Android']
  myControl: FormControl = new FormControl();
  filteredTechnology: Observable<string[]>;
  minDate = new Date();
  maxDate = new Date(2020, 5, 24)
  constructor() { }

  ngOnInit() {
    this.filteredTechnology = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.technology.filter(tech => tech.toLowerCase().includes(filterValue))
  }

  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }
}

import { Component, Input } from '@angular/core';
import { ICat } from '../../shared/interfaces/cat.interface';

@Component({
  selector: 'app-cat-item',
  templateUrl: './cat-item.component.html',
  styleUrls: ['./cat-item.component.scss']
})
export class CatItemComponent {
  @Input() cat!: ICat;
}

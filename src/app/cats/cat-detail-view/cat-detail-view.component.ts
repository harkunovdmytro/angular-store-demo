import { Component } from '@angular/core';
import { CatsRequestService } from '../../shared/services/cats-request.service';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-cat-detail-view',
  templateUrl: './cat-detail-view.component.html',
  styleUrls: ['./cat-detail-view.component.scss'],
})
export class CatDetailViewComponent {
  public imgLink$: Observable<string>;

  constructor(
    private catsService: CatsRequestService,
    private route: ActivatedRoute,
  ) {
    this.imgLink$ = this.route.params.pipe(
      filter(params => params?.['id']),
      map(({ id }) => {
        return `https://cdn2.thecatapi.com/images/${id}.jpg`;
      }),
    );
  }
}

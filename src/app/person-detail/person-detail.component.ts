import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonDetail, PersonDetailsService } from '../person-details.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {

  constructor(
    private personDetailService: PersonDetailsService,
    private route: ActivatedRoute
  ) {}

  personDetail?: PersonDetail;
  loading = false;
  error = false;

  ngOnInit(): void {
    const personId: number = parseInt(this.route.snapshot.params.id, 10);
    this.loading = true;

    this.personDetailService.getPersonDetails(personId, true).subscribe({
      error: () => {
        this.error = true;
        this.loading = false;
      },
      next: personDetail => {
        this.personDetail = personDetail;
        this.loading = false;
      }
    });
  }

}

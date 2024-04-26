import { Component } from '@angular/core';
import { NasaService } from '../../core/services/nasa.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-apod',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.css',
})
export class ApodComponent {
  public apodData: any;

  constructor(private nasaService: NasaService, private router: Router) {}

  ngOnInit(): void {
    this.nasaService.getAPOD().subscribe((data) => {
      console.log(data);
      this.apodData = data;
    });
  }

  navigate() {
    this.router.navigate(['/']);
  }
}

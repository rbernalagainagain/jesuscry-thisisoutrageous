import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MainLayoutComponent } from '@layout'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private readonly httpClient: HttpClient) {
    //api star wars
    this.httpClient.get('https://swapi.dev/api/people/1').subscribe((data) => {
      console.log(data)
    })
  }
}

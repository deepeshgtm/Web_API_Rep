// import { Component } from '@angular/core';
// import { RouterModule, RouterOutlet } from '@angular/router';
// import { NavbarComponent } from './navbar/navbar.component';
// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [NavbarComponent,HomeComponent,ProfileComponent,RouterModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'webapp';
// }

// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    template: `
        <h2>Fetched Data</h2>
        // <pre>{{ data | json }}</pre>
    `,
    styles: []
})
export class AppComponent implements OnInit {
    data: any; // To store the fetched data

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.fetchData();
    }

    // Function to fetch data from the API
    fetchData(): void {
        this.http.get('http://localhost:3000/').subscribe(
            (response) => {
                this.data = response;
            },
            (error) => {
                console.error('Error fetching data:', error);
            }
        );
    }
}

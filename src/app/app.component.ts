import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from "./features/gallery/gallery.component";

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, GalleryComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ladrillo-visto';
}

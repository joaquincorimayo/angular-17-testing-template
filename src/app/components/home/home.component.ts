import { Component } from '@angular/core';
import {TableModule} from "primeng/table";
import {MessagesModule} from "primeng/messages";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TableModule,
    MessagesModule,
    TooltipModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import {Component, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {MessagesModule} from "primeng/messages";
import {TooltipModule} from "primeng/tooltip";
import {CheckboxModule} from "primeng/checkbox";
import {MenuItem} from "primeng/api";
import {MenubarModule} from "primeng/menubar";

interface TestCase {
  testActions: string;
  expectedOutput: string;
  actualOutput: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TableModule,
    MessagesModule,
    TooltipModule,
    CheckboxModule,
    MenubarModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  testCases: TestCase[] = [];

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.getItems();
    this.addRow();
  }

  getItems(): void {
    this.items = [{
      label: 'New row',
      icon: 'pi pi-fw pi-plus',
      command: () => this.addRow()
    }, {
      label: 'Delete row',
      icon: 'pi pi-fw pi-trash',
      command: () => this.deleteRow()
    }];
  }

  private addRow(): void {
    this.testCases.push({
      testActions: '',
      expectedOutput: '',
      actualOutput: ''
    });
  }

  private deleteRow(): void {
    this.testCases.pop();
  }
}

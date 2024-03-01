import {Component, OnInit} from '@angular/core';
import {TableModule} from "primeng/table";
import {MessagesModule} from "primeng/messages";
import {TooltipModule} from "primeng/tooltip";
import {CheckboxModule} from "primeng/checkbox";
import {MenubarModule} from "primeng/menubar";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";

interface TestCase {
  step: number;
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
    RadioButtonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  testCasesList : TestCase[] = [];
  testResult: any;

  ngOnInit(): void {
    this.addRow();
    this.addRow();
    this.addRow();
    this.addRow();
  }

  addRow(): void {
    const newTestCase: TestCase = {
      step: this.testCasesList.length + 1,
      testActions: '',
      expectedOutput: '',
      actualOutput: ''
    };
    this.testCasesList.push(newTestCase);
  }

  deleteRow(): void {
    this.testCasesList.pop();
  }

  clearTable():void  {
    this.testCasesList.splice(0, this.testCasesList.length);
  }

}

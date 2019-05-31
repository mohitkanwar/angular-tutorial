import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  description: string;
  steps: Array<string>;


  ngOnInit(): void {
    this.title = 'Functional Component';
    this.description = 'In this component, we are going to read values from our angular component instead of hardcoding in the HTML File.'
    + ' Now, the template is responsible for creating the view structure, but what data is being displayed, the View doesn\'t need '
    + 'to worry about it.';
    this.steps = new Array();
    this.steps.push('Open the Appcomponent Class');
    this.steps.push('Create an atribute : title, and provide some description');
    this.steps.push('Use the attribute in the app.component.html file, in place of the hard-coded title');
    this.steps.push('Repeat the above two points for description');
    this.steps.push('Create an array called Steps');
    this.steps.push('Populate it with desired steps');
    this.steps.push('Use *ngFor directive to loop through the steps as part of li');


  }
}

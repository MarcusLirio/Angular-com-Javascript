import { Component } from '@angular/core';
import {ScriptService} from "./script.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Felipe';
  
  constructor(private _carrgarScript: ScriptService) { 
    _carrgarScript.carregar(["script"]);
  }

}

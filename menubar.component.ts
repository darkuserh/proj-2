import { Component, OnInit } from '@angular/core';
import { Route,Router} from '@angular/router';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit{
constructor(private router:Router){ }
   routes=this.router.config.map((route:Route)=>route?.path ||'Home')
pageTitle='Home'
  ngOnInit(): void {
    
  }
  changeRoute(route:string){
    this.pageTitle=route;
    const pathToGo=route==='Home'?'/':route;
    this.router.navigate([pathToGo]);
  }

}

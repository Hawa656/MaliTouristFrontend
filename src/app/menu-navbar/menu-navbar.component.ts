import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-navbar',
  templateUrl: './menu-navbar.component.html',
  styleUrls: ['./menu-navbar.component.scss']
})
export class MenuNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var nav = document.querySelector('nav');

    window.addEventListener('scroll', function(){
        if (window.pageYOffset > 100) {
  
            nav!.classList.add('bgscrollBar');
            nav!.style.backgroundColor='#000000';
            nav!.style.opacity='0.8'
            
        }else{
            nav!.classList.remove('bgscrollBar');
            nav!.style.backgroundColor='transparent';
        }
    })
  }

}

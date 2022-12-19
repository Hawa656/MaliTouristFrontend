import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-navbar',
  templateUrl: './menu-navbar.component.html',
  styleUrls: ['./menu-navbar.component.scss']
})
export class MenuNavbarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("MOn url: " + this.router.url);

    //if(this.route.snapshot)

    var nav = document.querySelector('nav');

    if(this.router.url == "/accueil"){
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
    }else{
      var nav = document.querySelector('nav');
      nav!.style.backgroundColor='#000000';

    }
    
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() itemCount
  constructor() { }

  ngOnInit() {
  }

  changeMode(mode)
  {
    if(mode == 'show')
    {
      localStorage.setItem("mode", "show")
    }
  }
}

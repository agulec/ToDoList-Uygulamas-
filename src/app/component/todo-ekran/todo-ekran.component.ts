import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-ekran',
  templateUrl: './todo-ekran.component.html',
  styleUrls: ['./todo-ekran.component.css']
})
export class TodoEkranComponent implements OnInit {

  constructor() { }

  yap=[    //Yapılacaklar Dizisi oluşturdum.
    {
      text:'Yapılacak 1',
      Tarih: new Date()
      
    },
    {
      text:'Yapılacak 2',
      Tarih: new Date()
    }
  ];

  ngOnInit() {
  }
  TodoEkle(todoyaz:HTMLInputElement){
   
 const abc = {
   text: todoyaz.value,
   Tarih:new Date()
 };
this.yap.push(abc);
todoyaz.value='';
  }

  Sil(z){
    const a=this.yap.indexOf(z);
    this.yap.splice(a,1);
  }
}

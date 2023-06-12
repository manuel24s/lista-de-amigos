import { Component } from '@angular/core';

@Component({
  selector: 'hola-mundo',
  template: '<h1> Mi lista de amigos </h1>',
  styles: ['h1 { background: #000000; color: #FFFFFF; text-shadow: 2px 2px 4px #A52A2A; text-align: center; }']
})
export class HolaMundoComponent {
}

@Component({
  selector: 'Nombre',
  template: "<h2 class='custom-text'>mi lista de amigos</h2>",
  styles: [".custom-text { background: linear-gradient(#0000FF, #0000FF), #000000; -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-align: center; }"],
})
export class Nombre {
}

@Component({
  selector: 'amigos',
  template: '<h2>saul<br>marleny<br>erick<br>luis<br>paulina</h2>',
  styles: ['h2 { background: #000000; color: #A52A2A; text-align: center; }']
})
export class amigos {
}


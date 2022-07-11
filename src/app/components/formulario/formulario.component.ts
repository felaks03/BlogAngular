import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/interface/noticia.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  arrNoticias: Noticia[] = []
  resultado:string = ""

  id: number = 2
  titulo: string = ""
  contenido: string = ""
  imagen: string = ""
  fecha: number = 0

  GuardarNoticia() {
    if(this.titulo !== "" && this.contenido !== "" && this.imagen !== "" && this.fecha !== 0) {
      this.arrNoticias.push({id: this.id, titulo: this.titulo, contenido: this.contenido, imagen: this.imagen, fecha: this.fecha})
      this.ActResultado()
      this.id++;
    }
  }

  CargarNoticiaInicial(){
    this.arrNoticias = [this.Noticia1, this.Noticia2]
    for (let i = 0; i < this.arrNoticias.length; i++) {
      this.resultado += "<li class='noticia'>" +
      "<h1 class='n_heading'>" + this.arrNoticias[i].titulo + "</h1>" +
      "<img class='n_image' alt='La imagen no se ha podido cargar, comprueba que la Url es correcta' src=" + this.arrNoticias[i].imagen + ">" +
      "<div class='n_text'>" + this.arrNoticias[i].contenido +
      "</div>" +
      "<p class='n_date'>" + this.arrNoticias[i].fecha + "</p>" +
      "</li>"
    }
  }

  ngOnInit(): void {
    this.CargarNoticiaInicial()
  }

  ActResultado() {
    this.resultado += "<li class='noticia'>" +
    "<h1 class='n_heading'>" + this.titulo + "</h1>" +
    "<img class='n_image' src=" + this.imagen + "alt='imagen1'>" +
    "<div class='n_text'>" + this.contenido +
    "</div>" +
    "<p class='n_date'>" + this.fecha + "</p>" +
    "</li>"
  }







  Noticia1 = {
  id: 1,
  titulo: "Quinto encierro de San Fermín: los de Cebada Gago siembran el terror en las calles de Pamplona y dejan al menos tres corneados",
  imagen: "https://images.ecestaticos.com/HBrbDYQ4bmVYdxiu0ZiMMvxFqHE=/0x0:2272x1515/1338x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F4b6%2F35a%2F217%2F4b635a2173c5c1725c2bb3dda9e3b3c3.jpg",
  contenido: "Correr el encierro de San Fermín no es cualquier cosa, aunque pueda parecerlo. Y correrlo con toros de Cebada Gago, menos aún. Y hoy se ha demostrado. Otra vez. El parte médico habla de al menos tres heridos por asta de toro: uno en una pierna en la zona de Telefónica y otros dos en la plaza, uno en la pierna izquierda y otro en la derecha. El encierro ha sido sólo para expertos desde los primeros metros. Se han olvidado los toros de los cabestros y han decidido coger la delantera, abrir el grupo a toda velocidad y buscar a los corredores que se atrevían a ponerse a su paso. Nada de acompañar como borreguitos, sino un galope terrible hasta Mercaderes, lanzando derrotes a todos lados, pillando desprevenidos a muchos de los mozos, que ni sabían por dónde venían las embestidas, como cuchillos voladores. Así se ha llegado hasta la curva de la Estafeta, donde dos toros castaños y uno negro han chocado violentamente contra el vallado. La Estafeta ha comenzado con un toro por delante y cuatro por detrás, la manada muy abierta, aunque sin posibilidad de aprovechar el rosario de toros para correr debido a la alta velocidad. Por detrás, otro de Cebada Gago acompañado por un cabestro. Carreras cortas pero muy intensas Mediada la Estafeta, todo ha comenzado a complicarse. Algunos resbalones de mozos y toros han roto más la manada. No caían los animales por debilidad, sino por exceso de ímpetu. Varios corredores han sido arrollados por la altísima velocidad de los cebadas, ya casi de uno en uno. En la llegada a Telefónica, con los toros más templados, se han multiplicado las miradas a los lados, las amenazas a las vallas y las embestidas. Uno de los toros ha decidido darse la vuelta antes de la entrada al callejón, un giro de 180 grados. Ahí ha embestido a un par de corredores y después varios se han chocado contra él. Otros dos toros han llegado y se han tragado a varios mozos. No se sabía quién embestía a quién, todo era una pintura barroca en la que se mezclaban piernas, pitones, hombres encima de toros y animales usando los pitones como expedicionarios en la jungla. Aquí ha habido un corneado. Cuando los dos castaños han entrado en el coso, han comenzado a dar la típica vuelta al ruedo y uno de ellos ha galopado hacia las tablas, donde ha embestido de forma brutal a un joven, con el que se ha ensañado. Con el otro pitón ha atravesado el gemelo de otro muchacho. Y no ha soltado la presa hasta que ha conseguido meterse en el burladero. Por detrás, el último toro de Cebada Gago ha llegado muy suelto, muy parado, con resbalones y miradas desde la última parte de la Estafeta. Ha habido amenazas a varios mozos, algunos un poco desubicados, aunque quienes finalmente han tirado del animal han sido algunos de los más habituales de esta zona, los que mejor se mueven con los toros sueltos. El encierro se ha cerrado en tres minutos en los que ha habido de todo, pero sobre todo emoción, riesgo... y sangre. El cartel de hoy. Las reses de Cebada Gago serán lidiadas por Juan Leal, Román y Colombo.",
  fecha: "11-7-2022"
}

  Noticia2 = {
  id: 2,
  titulo: "Quinto encierro de San Fermín: los de Cebada Gago siembran el terror en las calles de Pamplona y dejan al menos tres corneados",
  imagen: "https://images.ecestaticos.com/HBrbDYQ4bmVYdxiu0ZiMMvxFqHE=/0x0:2272x1515/1338x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F4b6%2F35a%2F217%2F4b635a2173c5c1725c2bb3dda9e3b3c3.jpg",
  contenido: "Correr el encierro de San Fermín no es cualquier cosa, aunque pueda parecerlo. Y correrlo con toros de Cebada Gago, menos aún. Y hoy se ha demostrado. Otra vez. El parte médico habla de al menos tres heridos por asta de toro: uno en una pierna en la zona de Telefónica y otros dos en la plaza, uno en la pierna izquierda y otro en la derecha. El encierro ha sido sólo para expertos desde los primeros metros. Se han olvidado los toros de los cabestros y han decidido coger la delantera, abrir el grupo a toda velocidad y buscar a los corredores que se atrevían a ponerse a su paso. Nada de acompañar como borreguitos, sino un galope terrible hasta Mercaderes, lanzando derrotes a todos lados, pillando desprevenidos a muchos de los mozos, que ni sabían por dónde venían las embestidas, como cuchillos voladores. Así se ha llegado hasta la curva de la Estafeta, donde dos toros castaños y uno negro han chocado violentamente contra el vallado. La Estafeta ha comenzado con un toro por delante y cuatro por detrás, la manada muy abierta, aunque sin posibilidad de aprovechar el rosario de toros para correr debido a la alta velocidad. Por detrás, otro de Cebada Gago acompañado por un cabestro. Carreras cortas pero muy intensas Mediada la Estafeta, todo ha comenzado a complicarse. Algunos resbalones de mozos y toros han roto más la manada. No caían los animales por debilidad, sino por exceso de ímpetu. Varios corredores han sido arrollados por la altísima velocidad de los cebadas, ya casi de uno en uno. En la llegada a Telefónica, con los toros más templados, se han multiplicado las miradas a los lados, las amenazas a las vallas y las embestidas. Uno de los toros ha decidido darse la vuelta antes de la entrada al callejón, un giro de 180 grados. Ahí ha embestido a un par de corredores y después varios se han chocado contra él. Otros dos toros han llegado y se han tragado a varios mozos. No se sabía quién embestía a quién, todo era una pintura barroca en la que se mezclaban piernas, pitones, hombres encima de toros y animales usando los pitones como expedicionarios en la jungla. Aquí ha habido un corneado. Cuando los dos castaños han entrado en el coso, han comenzado a dar la típica vuelta al ruedo y uno de ellos ha galopado hacia las tablas, donde ha embestido de forma brutal a un joven, con el que se ha ensañado. Con el otro pitón ha atravesado el gemelo de otro muchacho. Y no ha soltado la presa hasta que ha conseguido meterse en el burladero. Por detrás, el último toro de Cebada Gago ha llegado muy suelto, muy parado, con resbalones y miradas desde la última parte de la Estafeta. Ha habido amenazas a varios mozos, algunos un poco desubicados, aunque quienes finalmente han tirado del animal han sido algunos de los más habituales de esta zona, los que mejor se mueven con los toros sueltos. El encierro se ha cerrado en tres minutos en los que ha habido de todo, pero sobre todo emoción, riesgo... y sangre. El cartel de hoy. Las reses de Cebada Gago serán lidiadas por Juan Leal, Román y Colombo.",
  fecha: "11-7-2022"
}
}

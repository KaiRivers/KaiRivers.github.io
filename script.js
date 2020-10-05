function Product(name, img, descr, classname)
{
  this.name=name;
  this.img=img;
  this.descr=descr;
  this.classname=classname;
}
var prodarray = [];
var prod= new Product("Panneau publicitaire",
 "https://www.placegrenet.fr/wp-content/uploads/2019/07/UNEPubSurEspacePriveGrenobleS%C3%A9verineCattiaux_opt.jpg",
 "Panneau publicitaire", "product-img");
prodarray.push(prod);
var prod= new Product("Brochure",
 "https://image.freepik.com/free-vector/business-flyer-template_23-2147996730.jpg",
 "Brochure", "product-img");
prodarray.push(prod);

var prod= new Product("Cartes visite",
 "http://www.l-ascenseur.com/SC5jPjs/carte-de-visite-2.jpg",
 "Cartes visite", "product-img");
prodarray.push(prod);

var prod= new Product("Calendriers personalisés",
 "https://media.carteland.com/69817-thickbox_fr/bureau-paysage.jpg",
 "Calendriers personalisés", "product-img");
prodarray.push(prod);

var listOfProds = "";
prodarray.forEach(prod => listOfProds+= `<div class="col-lg-3 col-md-6">
  <div class="card">
    <div class="card-body">
      <img class=${prod.classname} src=${prod.img} alt="product">
    </div>
    <div class="card-footer">
      <p class="product-footer">${prod.descr}</p>
    </div>
  </div>
</div>`
);
console.log(listOfProds);
document.querySelector(".ImpressionContainer .row").innerHTML+=listOfProds;



prodarray= [];
var prod= new Product("Habillage de voitures",
 "",
 "Habillage de voitures", "product-img");
prodarray.push(prod);

var listOfProds = "";
prodarray.forEach(prod => listOfProds+= `<div class="col-lg-3 col-md-6">
  <div class="card">
    <div class="card-body">
      <img class=${prod.classname} src=${prod.img} alt="product">
    </div>
    <div class="card-footer">
      <p class="product-footer">${prod.descr}</p>
    </div>
  </div>
</div>`
);
console.log(listOfProds);
document.querySelector(".PubliciteContainer .row").innerHTML+=listOfProds;

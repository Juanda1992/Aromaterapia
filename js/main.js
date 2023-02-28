// espera 5 minutos (300000 ms) antes de mostrar el div adicional
setTimeout(function () {
    // crea un nuevo div
    const newDiv = document.createElement("div");
    const newDivContent =
      '<div class="newDiv text-center">' +
      '<img draggable="false" role="img" class="emoji" alt="⭐️" src="https://s.w.org/images/core/emoji/14.0.0/svg/2b50.svg">' +
      '<img draggable="false" role="img" class="emoji" alt="⭐️" src="https://s.w.org/images/core/emoji/14.0.0/svg/2b50.svg">' +
      '<img draggable="false" role="img" class="emoji" alt="⭐️" src="https://s.w.org/images/core/emoji/14.0.0/svg/2b50.svg">' +
      '<img draggable="false" role="img" class="emoji" alt="⭐️" src="https://s.w.org/images/core/emoji/14.0.0/svg/2b50.svg">' +
      '<img draggable="false" role="img" class="emoji" alt="⭐️" src="https://s.w.org/images/core/emoji/14.0.0/svg/2b50.svg">' +
      '<p class="paragrahp alumno">Valoración de 1184 Alumnos</p>' +
      '<img src="img/meditationn.png" alt="Placeholder Image" width="300px"; height="300px";>' +
      '<p class="paragrahp ocasion">EN ESTA OCASION ESPECIAL PODRÁS ACCEDER CON ESTA OFERTA</p>' +
      '<div class="divider"></div>' +
      '<p class="paragrahp value">NORMALMENTE VALUADO EN</p>' +
      '<p class="paragrahp value2">$997 USD</p>' +
      '<p class="paragrahp offer">En esta oferta especial de: 38 USD</p>' +
      '<img src="http://maestrodeseduccion.com/wp-content/uploads/2022/11/Descuento-aplie.png" alt="" title="Descuento-aplie" width="355" height="110" data-op3-attachment-id="91">' +
      '<p class="paragrahp">Tan pronto como presione "Quiero ser parte del código", podrá recibir un correo electrónico que le otorga acceso a método</p>' +
      '<div class="button"><a href="https://maestrodeseduccion.com/funnel/mtoss/mdsh/">¡SÍ! QUIERO INGRESAR Y TENER LA CLAVE PARA MANEJAR LA ANSIEDAD</a></div>' +
      '<p class="paragrahp available">Disponible para todo el mundo, puede pagar con tarjeta Débito o Crédito, PayPal</p>' +
      '<div><img src="http://maestrodeseduccion.com/wp-content/uploads/2022/04/img-payment-method-1.png" alt="" title="" width="340" height="44" data-op3-attachment-id=""></div>' +
      '<div><img src="http://maestrodeseduccion.com/wp-content/uploads/2022/11/185-1859778_banderas-de-latinoamerica-en-png-transparent-png-removebg-preview.png" alt="" title="185-1859778_banderas-de-latinoamerica-en-png-transparent-png-removebg-preview" width="360" height="100" data-op3-attachment-id="92"></div>' +
      '<p class="offer">APROVECHA EL 80% DE DESCUENTO</p>' +
      '<p class="paragrahp value">Solo por el día de HOY $39 - UN SOLO PAGO Y ACCESO DE POR VIDA</p>' +
      '<div><img src="http://maestrodeseduccion.com/wp-content/uploads/2022/04/garantia-7-dias-6564731.png" alt="" title="garantia-7-dias-6564731" width="200" height="218" data-op3-attachment-id="74"></div>' +
      '<p class="paragrahp value" style="margin-top:1em;">Tendrás acceso inmediato al contenido y si el programa no cumple tus expectativas te devolveremos todo dinero que tú pagaste...</p>' +
      "</div>" +
      '<div class="second-div">' +
      "<h4 class='offer text-center'>Resultados de nuestros Estudiantes en menos de 1 mes</h4>" +
      '<div class="card-deck">' +
      '<div class="card">' +
      '<img src="img/img3.jpeg" class="card-img-top" alt="..." class="card-img">' +
      '<div class="card-body">' +
      '<p class="card-text text-center">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>' +
      "</div>" +
      "</div>" +
      '<div class="card">' +
      '<img src="img/img3.jpeg" class="card-img-top" alt="..." class="card-img">' +
      '<div class="card-body">' +
      '<p class="card-text text-center">This card has supporting text below as a natural lead-in to additional content.</p>' +
      "</div>" +
      "</div>" +
      '<div class="card">' +
      '<img src="img/img3.jpeg" class="card-img-top" alt="..." class="card-img">' +
      '<div class="card-body">' +
      '<p class="card-text text-center">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>' +
      "</div>" +
      "</div>" +
      "</div>";

    ("</div>");

    // agrega el contenido que quieras en el div
    newDiv.innerHTML = newDivContent;
    // selecciona el elemento div con la clase "nuevo-div"
    const targetDiv = document.querySelector(".nuevo-div");
    // inserta el nuevo div después del elemento seleccionado
    targetDiv.insertAdjacentElement("afterend", newDiv);
  }, 9000);
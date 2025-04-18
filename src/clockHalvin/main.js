const span_price_btc = document.getElementById("span-price-btc");
const input_inversion_inicial = document.getElementById("inversion-inicial");
const input_result_equiv_btc = document.getElementById(
  "input-result-equiv-btc"
);
const data_halvin_now = {
  costoProducciónBTC: 60965,
  recompensaBloqueNow: 3.125,
  halvin_now_numero: 5,
  anio_halvin_actual: 2024,
};

const halvins = [
  {
    numero: 1,
    Year: 2008,
    Rewards: 50,
  },
  {
    numero: 2,
    Year: 2012,
    Rewards: 25,
  },
  {
    numero: 3,
    Year: 2016,
    Rewards: 12.5,
  },
  {
    numero: 4,
    Year: 2020,
    Rewards: 6.25,
  },
  {
    numero: 5,
    Year: 2024,
    Rewards: 3.125,
  },
  {
    numero: 6,
    Year: 2028,
    Rewards: 1.5625,
  },
  {
    numero: 7,
    Year: 2032,
    Rewards: 0.78125,
  },
  {
    numero: 8,
    Year: 2036,
    Rewards: 0.390625,
  },
  {
    numero: 9,
    Year: 2040,
    Rewards: 0.1953125,
  },
  {
    numero: 10,
    Year: 2044,
    Rewards: 0.09765625,
  },
  {
    numero: 11,
    Year: 2048,
    Rewards: 0.048828125,
  },
  {
    numero: 12,
    Year: 2052,
    Rewards: 0.0244140625,
  },
  {
    numero: 13,
    Year: 2056,
    Rewards: 0.01220703125,
  },
  {
    numero: 14,
    Year: 2060,
    Rewards: 0.006103515625,
  },
  {
    numero: 15,
    Year: 2064,
    Rewards: 0.0030517578125,
  },
  {
    numero: 16,
    Year: 2068,
    Rewards: 0.00152587890625,
  },
  {
    numero: 17,
    Year: 2072,
    Rewards: 0.000762939453125,
  },
  {
    numero: 18,
    Year: 2076,
    Rewards: 0.0003814697265625,
  },
  {
    numero: 19,
    Year: 2080,
    Rewards: 0.00019073486328125,
  },
  {
    numero: 20,
    Year: 2084,
    Rewards: 9.5367431640625e-5,
  },
  {
    numero: 21,
    Year: 2088,
    Rewards: 4.76837158203125e-5,
  },
  {
    numero: 22,
    Year: 2092,
    Rewards: 2.384185791015625e-5,
  },
  {
    numero: 23,
    Year: 2096,
    Rewards: 1.1920928955078125e-5,
  },
  {
    numero: 24,
    Year: 2100,
    Rewards: 5.9604644775390625e-6,
  },
  {
    numero: 25,
    Year: 2104,
    Rewards: 2.9802322387695312e-6,
  },
  {
    numero: 26,
    Year: 2108,
    Rewards: 1.4901161193847656e-6,
  },
  {
    numero: 27,
    Year: 2112,
    Rewards: 7.450580596923828e-7,
  },
  {
    numero: 28,
    Year: 2116,
    Rewards: 3.725290298461914e-7,
  },
  {
    numero: 29,
    Year: 2120,
    Rewards: 1.862645149230957e-7,
  },
  {
    numero: 30,
    Year: 2124,
    Rewards: 9.313225746154785e-8,
  },
  {
    numero: 31,
    Year: 2128,
    Rewards: 4.6566128730773926e-8,
  },
  {
    numero: 32,
    Year: 2132,
    Rewards: 2.3283064365386963e-8,
  },
  {
    numero: 33,
    Year: 2136,
    Rewards: 1.1641532182693481e-8,
  },
  {
    numero: 34,
    Year: 2140,
    Rewards: 5.820766091346741e-9,
  },
];

//URL para las peticiones API
const APIPriceBTC_1 = "https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT";

const APIPriceBTC_2 =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

let resultCallback = "";

const span_hal_now_nro = document.getElementById("span-halvin-now-nro");
const span_hal_now_anio = document.getElementById("span-halvin-now-anio");
const span_hal_now_reward = document.getElementById("span-halvin-now-reward");

const span_hal_jub_nro = document.getElementById("span-halvin-jub-nro");
const span_hal_jub_anio = document.getElementById("span-halvin-jub-anio");
const span_hal_jub_reward = document.getElementById("span-halvin-jub-reward");
const result_calc_formula = document.getElementById("result_calc-formula");
const result_calc_anio = document.getElementById("result-calc-anio");
const aside_calc_jub = document.getElementById("aside-calc-jub");
const span_price_BTC = document.getElementById("span-price-BTC");
span_hal_now_nro.textContent = `# ${data_halvin_now.halvin_now_numero}`;
span_hal_now_anio.textContent = data_halvin_now.anio_halvin_actual;
span_hal_now_reward.textContent = `${data_halvin_now.recompensaBloqueNow} btc`;

const init = async () => {
  const {
    bitcoin: { blocks },
  } = mempoolJS({
    hostname: "mempool.space",
  });
  const blocksTipHeight = await blocks.getBlocksTipHeight();
  let resultHeightBlock = JSON.stringify(blocksTipHeight, undefined, 2);
  console.log(resultHeightBlock);

  //blockText.textContent= ` Bloque ${resultHeightBlock} de 840.000  `
  const CurrentDate = Date.now(); //fecha actual
  let timeToHalvin = (1050000 - resultHeightBlock) * 10 * 60;
  let dateH = CurrentDate + timeToHalvin * 1000;
  console.log(dateH);

  $(document).ready(function () {
    var clock = $(".clock").FlipClock(timeToHalvin, {
      clockFace: "DailyCounter",
      autoStart: true,
      countdown: true,
    });
  });
};

init();

let priceBTC = 0;

//ejecuta las funciones async con las peticoines api luego de cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  console.log("content load");

 fetchFuncAsync(APIPriceBTC_1, APIPriceBTC_2)
    .then((precio) => {
      priceBTC = Number(precio);
      console.log(priceBTC);
      span_price_BTC.textContent = `$ ${new Intl.NumberFormat("es-Mx").format(
        priceBTC.toFixed(2)
      )}`;
      span_price_btc.textContent = `$ ${new Intl.NumberFormat("es-Mx").format(
        priceBTC.toFixed(2)
      )}`;

      return priceBTC;
    })
    .catch((error) => {
      console.error(
        "Las dos solicitudes API del precio de Bitcoin han fallado :(",
        error.message
      );
    });

  //traer el precio de un btc desde binance


});

function equivalenciaBTC() {
  aside_calc_jub.innerHTML = "";
  // INVERSION INICIAL INPUT DOLARES
  if (
    input_inversion_inicial.value != "" ||
    input_inversion_inicial.value != 0
  ) {
    if (priceBTC != "") {
      const resultEquivBTC = input_inversion_inicial.value / priceBTC;
      console.log(resultEquivBTC);
      input_result_equiv_btc.value = resultEquivBTC.toFixed(6);
    }
  } else {
    result_calc_formula.textContent = "";
  }
  // INVERSION INICIAL INPUT BTC

  const findHalvin = () => {
    if (
      priceBTC != "" &&
      input_inversion_inicial.value != "" &&
      input_result_equiv_btc.value != 0
    ) {
      function findRewards(halvins) {
        return halvins.Rewards <= input_result_equiv_btc.value;
      }
    }

    return (resultCallback = halvins.find(findRewards));
  };

  findHalvin();

  span_hal_jub_nro.textContent = `# ${resultCallback.numero}`;
  span_hal_jub_anio.textContent = `${resultCallback.Year}`;
  span_hal_jub_reward.textContent = `${resultCallback.Rewards.toFixed(9)} btc`;

  console.log(input_result_equiv_btc.value);

  ///VARIABLES FUNDAMENTALES PARA EL CÁLCUILO USANDO LA FÓRMULA

  const RI = data_halvin_now.recompensaBloqueNow;
  const CP = data_halvin_now.costoProducciónBTC;
  const NH = resultCallback.numero - data_halvin_now.halvin_now_numero;
  const RF = resultCallback.Rewards;
  const CurrentDate = Date.now();
  if (NH != "" && RF != 0 && RF != "") {
    const PBTC = ((RI * CP * Math.pow(2, NH)) / RF).toFixed(3);

    console.log("pbtc", PBTC);
    console.log(
      "equiv_inversion_inicial",
      Number(input_result_equiv_btc.value) * PBTC
    );
    /*el resultado de PBTC se multiplica por l aequivalencia en btc de la inversioin inicial para obtener el aproximado del valor de la inversion ṕara el año de la jubilación  */
    const inv_inicial_por_PBTC = new Intl.NumberFormat("es-Mx").format(
      (Number(input_result_equiv_btc.value) * PBTC).toFixed(2)
    );

    console.log(Number(inv_inicial_por_PBTC).toFixed(2));

    result_calc_formula.textContent = `$ ${inv_inicial_por_PBTC}`;
    result_calc_anio.textContent = `${resultCallback.Year} (${
      resultCallback.Year - new Date(CurrentDate).getFullYear()
    }años)
       `;

    /* TABLA ADICIONAL QUE MUESTRA EL EQUIVALENTE DE LA INVERSION INICIAL EN CADA HALVIN */

    for (let i = 5; i < halvins.length - 13; i++) {
      const child_aside = document.createElement("div");

      const calc_jub_aside =
        (RI *
          CP *
          Math.pow(2, halvins[i].numero - data_halvin_now.halvin_now_numero)) /
        halvins[i].Rewards;

      const rule_tree_calc_jub = Math.trunc(
        calc_jub_aside * Number(input_result_equiv_btc.value)
      );

      console.log(calc_jub_aside * Number(input_result_equiv_btc.value));

      child_aside.innerHTML = `<p>${halvins[i].Year} </p>
        <p class="p-largest-number ">${short_amounts(calc_jub_aside)}</p>
       
        <p class="p-largest-number">${short_amounts(rule_tree_calc_jub)}</p>`;
      aside_calc_jub.appendChild(child_aside);
    }
    function short_amounts(test_number) {
      let shortNumber_result = 0;

      const millon = 1000000;
      const billon = 1000000000000;
      const trillon = 1000000000000000000;

      const amount_init = test_number.toString().length;

      if (amount_init >= 7 && amount_init <= 12) {
        return (shortNumber_result = `$${format_amount(
          test_number / millon
        )} Millones`);
      } else if (amount_init >= 13 && amount_init <= 18) {
        return (shortNumber_result = `$${format_amount(
          test_number / billon
        )} Billones`);
      } else if (amount_init >= 19 && amount_init <= 21) {
        return (shortNumber_result = `$${format_amount(
          test_number / trillon
        )} Trillones`);
      } else {
        return (shortNumber_result = `$${format_amount(test_number)}`);
      }

      function format_amount(amount) {
        return new Intl.NumberFormat("es-Mx").format(amount.toFixed(1));
      }
    }
  }
}

input_inversion_inicial.oninput = equivalenciaBTC;
input_result_equiv_btc.oninput = equivalenciaBTC;

async function fetchFuncAsync(url1, url2) {
  try {
    const response = await fetch(url1);

    if (!response.ok) {
      throw new Error(
        `Error HTTP: ${response.status},INTENTANDO CON OTRO RECURSO...`
      );
    }

    const data = await response.json();
    const precio = data.price;
    console.log(`El precio actual de Bitcoin en BINANCE es: $${precio}`);
    return precio;
  } catch (error) {
    console.error("Error al obtener el precio desde Binance:", error.message);
    try {
      const response2 = await fetch(url2);

      if (!response2.ok) {
        throw new Error(
          `Error HTTP: ${response.status},INTENTANDO CON OTRO RECURSO...`
        );
      }

      const data = await response2.json();
      const precio = data.bitcoin.usd;
      console.log(`El precio 2 coingeko actual de Bitcoin es: $${precio}`);
      return precio;
    } catch (error) {
      console.error("Error al obtener el precio2:", error.message);
    }
  }
}

///calculadora de jubilacion

//millon 1,000,000
//min:7 -max:12
//billon 1,000,000,000,000
//min:13 max:18
//trillon  1,000,000,000,000,000,000
//min:19 max:22
//example 123456789012345678 hasta el año 2108

const father_cont_sli_books = document.getElementById("container-slider-books");
const libros = [
  {
    orden: "1",
    autor: "George S. Clason",
    nombre_libro: "EL HOMBRE MÁS RICO DE BABILONIA",
    link_cover: "https://i.ebayimg.com/images/g/HTMAAOSwXDZlQKbx/s-l1600.webp",
  },
  {
    orden: "2",
    autor: "Ayn Rand",
    nombre_libro: "LA REVELION DE ATLAS",
    link_cover:
      "https://cdn.kobo.com/book-images/Images/da121c46-e1b0-4c58-9316-cc6a1437e05b/300/300/False/image.jpg",
  },
  {
    orden: "3",
    autor: "Saifedean Ammous",
    nombre_libro: "EL PATRÓN BITCOIN",
    link_cover:
      "https://app.blancoynegrostore.com/img/products/2956/el-patron-bitcoin-saifedean-ammous-paidos-1698878173.jpg?w=1000&h=1500&fit=crop&fm=webp",
  },
  {
    orden: "4",
    autor: "Richard Wyckoff",
    nombre_libro: "EL MÉTODO WYCKOFF",
    link_cover:
      "https://0.academia-photos.com/attachment_thumbnails/54886383/mini_magick20220707-27688-b05ndc.png?1657245970",
  },
  {
    orden: "5",
    autor: "Benjamin Graham ",
    nombre_libro: "EL INVERSOR INTELIGENTE",
    link_cover:
      "https://www.aprendefinanzas.com.ec/wp-content/uploads/2022/03/el-inversor-inteligente-benjamin-graham-195x300.jpeg",
  },
  {
    orden: "6",
    autor: "Jhon Miller",
    nombre_libro: "BLACKROCK de Larry Fink",
    link_cover:
      "https://images.cdn2.buscalibre.com/fit-in/360x360/b6/93/b693932028168108e75f9322a3dc56cf.jpg",
  },
];

/*modal */

const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn_info = document.getElementById("btn_modal_info");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn_info.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*
CARROUSEL  



  /* etiqueta las imágenes pra poder rastrearlas, solo por conveniencia 
  let i = 1;
  for(let li of carousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
  }

  /* configuración 
  let width = 255; // ancho de las imágenes
  let count = 1; // conteo de las imágenes visibles

  let list = carousel.querySelector('ul');
  let listElems = carousel.querySelectorAll('li');

  let position = 0; // posición del desplazamiento del carrete

  carousel.querySelector('.prev').onclick = function() {
    // desplazamiento izquierdo
    position += width * count;
    // no podemos mover demasiado a la izquierda, se acaban las imágenes
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
  };

  carousel.querySelector('.next').onclick = function() {
    // desplazamiento derecho
    position -= width * count;
    // solo se puede desplazar el carrete de imágenes (longitud total de la cinta - conteo visibles)
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
  };
  
  */

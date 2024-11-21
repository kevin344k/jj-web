const span_price_btc = document.getElementById("span-price-btc");
const input_inversion_inicial = document.getElementById("inversion-inicial");
const input_result_equiv_btc = document.getElementById(
  "input-result-equiv-btc"
);
const data_halvin_now = {
  costoProducciónBTC: 80000,
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
  let CurrentDate = Date.now(); //fecha actual
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

  //traer el precio de un btc desde binance

  const response = await fetch(
    "https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT"
  );
  const data = await response.json();
  const priceBTC = Number(data.price);

  span_price_btc.textContent = `$ ${new Intl.NumberFormat("es-Mx").format(
    priceBTC.toFixed(1)
  )}`;

  function equivalenciaBTC() {
    aside_calc_jub.innerHTML = "";

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
    span_hal_jub_anio.textContent = resultCallback.Year;
    span_hal_jub_reward.textContent = `${resultCallback.Rewards.toFixed(
      9
    )} btc`;

    console.log(resultCallback.numero);

    ///VARIABLES FUNDAMENTALES PARA EL CÁLCUILO USANDO LA FÓRMULA

    const RI = data_halvin_now.recompensaBloqueNow;
    const CP = data_halvin_now.costoProducciónBTC;
    const NH = resultCallback.numero - data_halvin_now.halvin_now_numero;
    const RF = resultCallback.Rewards;

    if (NH != "" && RF != 0 && RF != "") {
      const PBTC = new Intl.NumberFormat("es-Mx").format(
        ((RI * CP * Math.pow(2, NH)) / RF).toFixed(3)
      );

      console.log(PBTC);
      result_calc_formula.textContent = `$ ${PBTC}`;
      result_calc_anio.textContent = resultCallback.Year;

      /* TABLA ADICIONAL QUE MUESTRA EL EQUIVALENTE DE LA INVERSION INICIAL EN CADA HALVIN */

      for (let i = 5; i < halvins.length; i++) {
        const child_aside = document.createElement("div");

        const calc_jub_aside =
          (RI *
            CP *
            Math.pow(
              2,
              halvins[i].numero - data_halvin_now.halvin_now_numero
            )) /
          halvins[i].Rewards;
console.log(halvins[i].numero - data_halvin_now.halvin_now_numero);

        const rule_tree_calc_jub = calc_jub_aside * 1;

        child_aside.innerHTML = `<p>${
          halvins[i].Year
        } </p><p> $ ${new Intl.NumberFormat("es-Mx").format(
          rule_tree_calc_jub.toFixed(3)
        )}</p>`;
        aside_calc_jub.appendChild(child_aside);
      }
    }
  }

  input_inversion_inicial.oninput = equivalenciaBTC;
};

init();

///calculadora de jubilacion

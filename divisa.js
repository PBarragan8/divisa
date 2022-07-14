        // const divisa = []; 
        // divisa({
        //     name: "peso",
        //     valueDolar: 12,
        //     valueEuro: 11,
        // });

        // divisa({
        //     name: "euro",
        //     valueDolar: 0.1,
        //     valuePeso: 0.01,
        // });


        // divisa({
        //     name: "dolar",
        //     valuepeso: 1,
        //     valueEuro: 3,
        // });

        // const ValorDeLaFecha = divisa.map(
        //     (money) => {
        //         return money.valueDolar;
        //     }
        // );




// function dolar ( valueEuro, valuePeso) {
//     valueEuro: 12
//     valuePeso: 13
// };
// console.log(dolar(valueEuro));

const dolar = [
    {valueEuro: 1.0031,
    valuePeso: 128.02,
}
]
const peso = [
    {
        valueDolar: 0.0079,
        valueEuro: 0.0078,
    }
]
const euro = [
    {
        valueDolar: 0.99,
        valuePeso: 127.57,
    }
]

const listMoney1 = euro.map(item => console.log(item.valuePeso));
const listMoney2 = dolar.map(item => console.log(item.valuePeso));
const listMoney3 = peso.map(item => console.log(item.valueDolar));


#! usr/bin/cnv node 
import inquirer from "inquirer";

const currency : any = {
    USD : 1,
    PKR : 277.30, //Pakistan currency
    JPY : 153.28, //Japanese currency
    SAR : 3.75, //Saudi Arabia currency
    CNY : 7.24, //Chinese currency
    AFN : 71.18, //Afghanistan currency
    IQD : 1306.82, //Iraq currecy
    IRR : 42075.00, //Iran currency
    GBP : 0.80, //Pound currency
    INR : 83.61, // Indian currency
    EUR : 0.94, // European currency

}

let currencyAnswer = await inquirer.prompt([
    {
name : "from",
message : "Enter from currency",
type : "list",
choices : ["USD", "PKR", "JPY", "SAR", "CNY", "AFN", "IQD", "IRR", "GBP", "INR", "EUR" ],
},
{
    name : "to",
    message : "Enter to currency",
    type : "list",
    choices :["USD", "PKR", "JPY", "SAR", "CNY", "AFN", "IQD", "IRR", "GBP", "INR", "EUR" ]
},
{
    name : "amount",
    type : "number",
    message : "Enter your amount",
   
}
])

let fromCurrency = currency[currencyAnswer.from];
let toCurrency = currency[currencyAnswer.to];
let amount = currencyAnswer.amount;
let baseCurrency = amount / fromCurrency;
let convertCurrency = baseCurrency * toCurrency;
console.log(convertCurrency);

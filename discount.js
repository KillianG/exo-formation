const orders = [
  {id: 2340, customer: 101, product: 20, timestamp: "1591243565", price: "12.00"},/**05**/
  {id: 2341, customer: 10, product: 12, timestamp: "1591603575", price: "32.50"},/**05**/
  {id: 2342, customer: 123, product: 8, timestamp: "1592106089", price: "125.99"},/**05**/
  {id: 2343, customer: 50, product: 21, timestamp: "1592824991", price: "39.95"},/**05**/
  {id: 2344, customer: 45, product: 4, timestamp: "1593749455", price: "210.00"},/**06*/
  {id: 2345, customer: 10, product: 45, timestamp: "1593955298", price: "25.45"},/**06**/
  {id: 2347, customer: 27, product: 20, timestamp: "1595092774", price: "12.00"},/**06**/
  {id: 2348, customer: 29, product: 14, timestamp: "1595383340", price: "89.10"},/**06**/
  {id: 2346, customer: 27, product: 45, timestamp: "1594827411", price: "25.45"},/**06**/
  {id: 2348, customer: 101, product: 20, timestamp: "1596032960", price: "12.00"},/**06**/
  {id: 2349, customer: 145, product: 20, timestamp: "1596684542", price: "12.00"},/**07**/
  {id: 2350, customer: 7, product: 68, timestamp: "1597220038", price: "32.85"},/**07**/
  {id: 2351, customer: 90, product: 4, timestamp: "1598565765", price: "46.99"},/**07**/
  {id: 2351, customer: 67, product: 8, timestamp: "1599135151", price: "125.99"}/**08**/
];
let date
document.write("<br> <br> <br> TEST DATES : <br>" );
document.write(new Date(orders[2].timestamp*1000) + "<br>");
document.write(".getDate : " + new Date(orders[13].timestamp*1000).getDate() + "<br>");
document.write(".getMonth : " + new Date(orders[13].timestamp*1000).getMonth() + "<br>");
document.write(".getYear : " + new Date(orders[13].timestamp*1000).getYear() + "<br>");
document.write(".getFullYear : " + new Date(orders[13].timestamp*1000).getFullYear() + "<br>");

function remouveDiscount (orders, discount){
        for (var i = 0; i < orders.length; i++){
        document.write("Date:" + new Date(orders[i].timestamp*1000).getMonth() + "   ")
        document.write(orders[i].price + "<br>")
        if (new Date(orders[i].timestamp * 1000).getMonth() === 6){
        orders[i].price = orders[i].price - orders[i].price * discount / 100
        document.write(orders[i].price + "<br>")
        }
        }
}
const discount = 20;
document.write(orders[4].price)
remouveDiscount(orders, 20)

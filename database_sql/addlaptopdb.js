
// const laptops = [
//   {
//     name :'Apple MacBook Pro 16"',
//     price: 239900
//   },
//   {
//     name :'ASUS ROG Strix G G531GT-AL041T 15.6" FHD 120Hz Gaming Laptop',
//     price : 87990
//   },
//   {
//     name :'HP Spectre 15 DF1033dx (Gem Cut Design) Ci7 10th Gen',
//     price : 219999
//   },
//   {
//     name :'Dell XPS 9570 15.6-inch FHD Laptop',
//     price : 127990
//   },
//   {
//     name :'Lenovo Yoga C640 10th Gen Intel Core i5 13.3 inch Full HD IPS 2-in-1 Convertible Laptop',
//     price : 80990
//   },
//   {
//     name :'Acer Predator Triton 300 PT315-51 2019 15.6-inch Gaming Laptop',
//     price : 93990
//   },
// ];

// laptops.forEach((laptop, index) => {
//   const rannum = Math.ceil(Math.random()*10+5);
//   let id = index + 16;
//   // console.log(index+1, laptop.price, rannum, 'mobile', laptop.name);
//   db.execute('INSERT INTO product VALUES(?,?,?,?,?)', [laptop.name, id, laptop.price, rannum, 'laptop'])
//     .then(() => {
//       console.log('Inserted');
//     })
//     .catch((err) => {
//       console.log('####################failed', index);
//     });
// });

// console.log('done');
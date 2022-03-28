

// const phones = [
//   {
//     name : 'New Apple iPhone 12 (64GB)',
//     price : 79899
//   },
//   {
//     name : 'Samsung Galaxy S20+ (8GB+128GB)',
//     price : 69990
//   },
//   {
//     name : 'OnePlus 8T 5G 8GB+128GB',
//     price : 42999
//   },
//   {
//     name : 'Google Pixel 5 5G 128GB',
//     price : 75900
//   },
//   {
//     name : 'OPPO F17 Pro 8GB+128GB Gift Box Edition',
//     price : 23990
//   },
//   {
//     name : 'Apple iPhone 11 Pro (512GB)',
//     price : 109999
//   },
//   {
//     name : 'OnePlus Nord 5G 8GB+128GB',
//     price : 27990
//   },
//   {
//     name : 'Vivo V20 Pro 5G 8GB+128GB',
//     price : 29990
//   },
//   {
//     name : 'Mi 10 8GB+256GB',
//     price : 49999
//   },
//   {
//     name : 'OPPO A12 3GB+32GB',
//     price : 8990
//   },
//   {
//     name : 'OnePlus 7T 8GB RAM+256GB',
//     price : 37999
//   },
//   {
//     name : 'Samsung Galaxy M51 6GB RAM+256GB',
//     price : 22999
//   },
//   {
//     name : 'Apple iPhone 7 - 32GB',
//     price : 23990
//   },
//   {
//     name : 'Redmi Note 9 Pro 4GB+64GB',
//     price : 12999
//   },
//   {
//     name : 'HTC Desire 12+ (3GB+32GB)',
//     price : 17974
//   }
// ]

// // INSERT INTO PRODUCT VALUES(name, pid, price, stock, 'mobile');

// phones.forEach((phone, index) => {
//   const rannum = Math.ceil(Math.random()*10+5);
//   let id = index + 1;
//   // console.log(index+1, phone.price, rannum, 'mobile', phone.name);
//   db.execute('INSERT INTO product VALUES(?,?,?,?,?)', [phone.name, id, phone.price, rannum, 'mobile'])
//     .then(() => {
//       console.log('Inserted');
//     })
//     .catch((err) => {
//       console.log('####################failed', index);
//     });
// });

// console.log('done');
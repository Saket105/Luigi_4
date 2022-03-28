

// const cameras = [
//   {
//     name : 'Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case',
//     price :39990
//   },
//   {
//     name : 'Canon EOS 3000D 18MP Digital SLR Camera (Black) with 18-55mm is II Lens, 16GB Card and Carry Case',
//     price :24990
//   },
//   {
//     name : 'Nikon D3500 DX-Format DSLR Two Lens Kit with AF-P DX Nikkor 18-55mm f/3.5-5.6G VR & AF-P DX Nikkor 70-300mm f/4.5-6.3G ED (Black) 16 GB Class 10 SD Card',
//     price :52000
//   },
//   {
//     name : 'Nikon D5600 with AF-P 18-55 mm + AF-P 70-300 mm VR Kit with Bag and 16GB Memory Card Free',
//     price :62500
//   },
//   {
//     name : 'Nikon D7500 20.9MP Digital SLR Camera (Black) with AF-S DX NIKKOR 18-140mm f/3.5-5.6G ED VR Lens(with Bag)',
//     price :83990
//   },
//   {
//     name : 'Canon EOS 80D 24.2MP Digital SLR Camera (Black) + EF-S 18-135mm f/3.5-5.6 Image Stabilization USM Lens Kit + 16GB Memory Card',
//     price :98440
//   }
// ];

// cameras.forEach((cam, index) => {
//   const rannum = Math.ceil(Math.random()*10+5);
//   let id = index + 22;
//   // console.log(index+1, phone.price, rannum, 'camera', phone.name);
//   db.execute('INSERT INTO product VALUES(?,?,?,?,?)', [cam.name, id, cam.price, rannum, 'camera'])
//     .then(() => {
//       console.log('Inserted');
//     })
//     .catch((err) => {
//       console.log('####################failed', index);
//     });
// });

// console.log('done');
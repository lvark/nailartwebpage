


const inicialProductos = [
    {
      id: 1, nombre: 'Ombré', precio: 60000,
      descripcion: 'Efecto Sutil y Elegante, Versatilidad en Colores, puedes usarlo así o combinar con otros elementos decorativos ',
      imagen: 'https://static3.mujerhoy.com/www/multimedia/202308/22/media/cortadas/manicura-coreana-4-shein-k1SC--624x624@MujerHoy.jpg',
      imagenes: [
        'https://i.pinimg.com/originals/fc/7c/98/fc7c9840ecd0a7b3443a596781a0043c.jpg',
        'https://i.pinimg.com/564x/5c/49/2e/5c492e72da4e23d3389cf0dc4c98113f.jpg',
        'https://i.pinimg.com/564x/3c/e5/b2/3ce5b2e2ed347018664f514dd9523065.jpg'
      ],
      categoria: 'knail',
    },
    {
      id: 2, nombre: 'Cat Eye', precio: 60000,
      descripcion: 'Si buscas un diseño de uñas elegante, llamativo y sofisticado, con un efecto visual único y personalizable, este diseño es para ti',
      imagen: 'https://ae-pic-a1.aliexpress-media.com/kf/S0742d93013b743a19d4b677e3b7651acP.jpg_640x640Q90.jpg_.webp',
      imagenes: [
        'https://i.pinimg.com/736x/fb/1d/11/fb1d113d64fc4ddf83019ede7cb1e662.jpg',
        'https://www.minutoar.com.ar/u/fotografias/m/2023/8/17/f1280x720-199530_331205_5050.jpeg',
        'https://auroranailsupply.com/cdn/shop/products/Snapinsta.app_341189161_758279879158713_5554519139913571956_n_1080_1080x.jpg?v=1681724868',
      ],
      categoria: 'knail',
    },
    {
      id: 3, nombre: 'Nail Ice Cube', precio: 80000,
      descripcion: 'Se caracteriza por su acabado cristalino, transparente o translúcido, que simula la apariencia de hielo. Este estilo tiene un look limpio, fresco y sofisticado, perfecto para mujeres que buscan una estética minimalista pero impactante.',
      imagen: 'https://i5.walmartimages.com/asr/0336c8c5-cc19-4ca0-ade7-8dea427b6159.67ceb887572ff2213aa6a8318ac3baca.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      imagenes: [
        'https://ae01.alicdn.com/kf/H1232a94d970d401d9145bdff36ca9526p/100cm-bottle-Aurora-Nails-Glass-Foil-Film-Sticker-Cellophane-Paper-Korean-Nail-Trend-Design-Ice-Cube.jpg',
        'https://preview.redd.it/trying-aurora-nails-korean-trend-v0-23z6i1essbta1.jpg?width=640&crop=smart&auto=webp&s=1f8c38cfbcaecfd2a9c2559e228eb2135728fc1a',
        'https://i.redd.it/trying-aurora-nails-korean-trend-v0-x4fvu1essbta1.jpg?width=3024&format=pjpg&auto=webp&s=8ecaed88502f0ec6c7b83897065b431c857f845d'
      ],
      categoria: 'knail',
    },
    {
      id: 4, nombre: 'Tintas', precio: 80000,
      descripcion: 'expresa tu creatividad y personalidad a través del nail art. ',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlwqDPVsquA10Y13tVvyHSIDEGW5TujPSMCAQ3p-i_zFgzTTa9hlnGFv8r5mYoWDCgkQ&usqp=CAU',
      imagenes: [
        'https://i.pinimg.com/564x/ac/f0/6c/acf06c0ce55e4a35270468535ebb9728.jpg',
        'https://i.pinimg.com/736x/43/05/a8/4305a85d43437e39f6df6bdc57925b55.jpg',
        'https://i.pinimg.com/564x/92/3e/ff/923effce7a3de395c0504aad12988a49.jpg'
      ],
      categoria: 'knail',
    },


    {
      id: 5, nombre: 'Spy x family', precio: 150000,
      descripcion: '.',
      imagen: 'https://preview.redd.it/painted-some-cute-spy-x-fam-nails-v0-zt2n10pguj2a1.jpg?width=1080&crop=smart&auto=webp&s=827b13f125dbbd91648699542b98af0ec00885d9',
      imagenes: [
        'https://i.pinimg.com/236x/71/32/33/713233fc58e1d3542a19755ea6e27a85.jpg',
        'https://i.pinimg.com/236x/14/99/7d/14997d5c0b7105cb8c99bfe7c3fd502f.jpg',
        'https://i.pinimg.com/236x/b5/30/d8/b530d8ba9a2f58b930416386cad9705b.jpg'
      ],
      categoria: 'anime',
    },
    {
      id: 6, nombre: 'Attack on Titans', precio: 180000,
      descripcion: 'Voló como una palomita',
      imagen: 'https://i.pinimg.com/236x/6a/0e/4f/6a0e4facffeeb21c09449325573158c4.jpg',
      imagenes: [
        'https://i.pinimg.com/236x/d4/63/54/d463540f5e760e7fd23c8a0cda2f18a4.jpg',
        'https://i.pinimg.com/474x/d0/ac/1d/d0ac1dccd0c3677a15c87de958631d5a.jpg',
        'https://i.pinimg.com/564x/e5/b1/b1/e5b1b13a8c7038938cfb0554429afc9f.jpg',
      ],
      categoria: 'anime',
    },
    {
      id: 7, nombre: 'Jujutsu Kaisen', precio: 180000,
      descripcion: 'Gojo siempre estaras en nuestros corazones',
      imagen: 'https://i.pinimg.com/736x/17/4f/e3/174fe32c7db12cbf9dc8b2d7eb8d6553.jpg',
      imagenes: [
        'https://i.pinimg.com/564x/b6/b5/c5/b6b5c56bab56f4346c30e04a9db929ad.jpg',
        'https://i.pinimg.com/564x/98/60/72/986072a4c42e0e05cdfde1c1dbd224f4.jpg',
        'https://i.pinimg.com/564x/68/7e/d8/687ed864d2679ee4159da7c9c87604c7.jpg'
      ],
      categoria: 'anime',
    },
    {
      id: 8, nombre: 'Kimetsu no Yaiba', precio: 180000,
      descripcion: 'Joa mani no te tocaba',
      imagen: 'https://i.pinimg.com/564x/f6/3d/59/f63d5907c5ce35c96176b92e30fb93e7.jpg',
      imagenes: [
        'https://i.pinimg.com/736x/82/99/33/829933f8b6d976c3c5d3cf79e2f70eda.jpg',
        'https://i.pinimg.com/564x/1b/f5/5c/1bf55c84e145f0db8111db44420b8625.jpg',
        'https://i.pinimg.com/564x/8b/d8/11/8bd811d3c83464e0049cae242784fd03.jpg'
      ],
      categoria: 'anime',
    },


    {
      id: 9, nombre: 'Flores', precio: 90000,
      descripcion: '.',
      imagen: 'https://i.pinimg.com/564x/45/46/67/454667751b16fcd8f5566f47250c06a0.jpg',
      imagenes: [
        'https://i.pinimg.com/564x/1d/be/25/1dbe25fd8424428ba8dc359b60867bec.jpg',
        'https://i.pinimg.com/564x/a1/c9/a5/a1c9a5937293352c8fecb71e4f580a6c.jpg',
        'https://i.pinimg.com/564x/dd/16/c6/dd16c6b608b9f04cddbc58852553b003.jpg'
      ],
      categoria: 'tresd',
    },
    {
      id: 10, nombre: 'Cute', precio: 100000,
      descripcion: '.',
      imagen: 'https://i.pinimg.com/564x/b0/fd/89/b0fd8945c6640a92da8dc9b26d30e8e3.jpg',
      imagenes: [
        'https://i.pinimg.com/564x/4d/38/41/4d3841e4af722c0b2b033840c636faf7.jpg',
        'https://i.pinimg.com/564x/d6/5a/e3/d65ae314f96d42d4d9e978742fc74943.jpg',
        'https://i.pinimg.com/564x/68/f7/82/68f78261d8670e972f2741e2e6965b34.jpg',
      ],
      categoria: 'tresd',
    },
    {
      id: 11, nombre: 'Charms', precio: 70000,
      descripcion: '.',
      imagen: 'https://i.pinimg.com/564x/e5/45/5e/e5455e085b8b77fb328bfef9367e31d7.jpg',
      imagenes: [
        'https://i.pinimg.com/736x/f9/ae/74/f9ae74e0422758fc3c4748b08acf7c50.jpg',
        'https://i.pinimg.com/564x/1e/f8/e0/1ef8e0f11fa50c1f28ae1bd198eb57f4.jpg',
        'https://i.pinimg.com/736x/91/47/12/914712ee6837a25a00b921c8cedd350a.jpg'
      ],
      categoria: 'tresd',
    },
  
    {
      id: 12, nombre: 'Concha Nacar', precio: 100000,
      descripcion: '.',
      imagen: 'https://i.pinimg.com/564x/24/11/2b/24112b1fddfd63631e3b1d9a62e1aa36.jpg',
      imagenes: [
        'https://i.pinimg.com/564x/a7/b7/85/a7b7854cf9c3956ee3b21db98eaa10cd.jpg',
        'https://i.pinimg.com/564x/ae/b5/a3/aeb5a3768086f301bafdb40db554d598.jpg',
        'https://i.pinimg.com/564x/d1/f0/b4/d1f0b40fb331834cd7b2ab3add736e8b.jpg',
      ],
      categoria: 'tendencia',
    },
    {
      id: 13, nombre: 'Paisajes', precio: 120000,
      descripcion: '.',
      imagen: 'https://i.pinimg.com/564x/ee/3a/50/ee3a504f1564344b2eb96ca3ac24141e.jpg',
      imagenes: [
        'https://i.pinimg.com/736x/ca/54/a0/ca54a0f7a74541c50a340bc08d7620b8.jpg',
        'https://i.pinimg.com/564x/40/ee/cc/40eecc4b504c40e7e3ecba2a65049ebc.jpg',
        'https://i.pinimg.com/736x/db/15/20/db1520c6513ccef1c258a4a7d3813e4c.jpg'
      ],
      categoria: 'tendencia',
    },
  
    {
      id: 14, nombre: 'Aceite para cuticula', precio: 15000,
      descripcion: '.',
      imagen: 'https://i.pinimg.com/564x/e4/c2/f9/e4c2f9695daffa8cade6f9e8ce099584.jpg',
      imagenes: [
        'https://i.pinimg.com/564x/0d/a0/6e/0da06ec1143bb52f6ed89091ef034e5c.jpg',
        'https://i.pinimg.com/564x/e7/6a/cb/e76acb9857168ef96e2431347b0e653b.jpg',
        'https://i.pinimg.com/564x/0c/1b/17/0c1b17f49b539b1d88f8680f100a18b2.jpg',
      ],
      categoria: 'accesorios',
    },

    {
      id: 15, nombre: 'Juji ito', precio: 130000,
      descripcion: '.',
      imagen: 'https://i.pinimg.com/564x/8a/53/65/8a536537c0109446cd9735577db21e66.jpg',
      imagenes: [
        'https://i.pinimg.com/564x/69/25/9b/69259b75b1ddb746da77d757c299f1d7.jpg',
        'https://i.pinimg.com/564x/e7/6a/cb/e76acb9857168ef96e2431347b0e653b.jpg',
        'https://i.pinimg.com/736x/4d/1f/16/4d1f160d3b22c1f58e1b77a818f3bb3c.jpg',
      ],
      categoria: 'anime',
    },

    {
      id: 16, nombre: 'Varios', precio: 130000,
      descripcion: '.',
      imagen: 'https://i.pinimg.com/564x/bc/dc/4b/bcdc4b46510f0c3331ed165e0647b788.jpg',
      imagenes: [
        'https://i.pinimg.com/564x/e5/18/dd/e518ddd8f525763ca07c964c2eb3d703.jpg',
        'https://i.pinimg.com/564x/38/73/7f/38737fda673eb26cf52b576bfefbe1d7.jpg',
        'https://i.pinimg.com/564x/d0/29/b7/d029b7dcfc654480cad1c9492fb68073.jpg',
      ],
      categoria: 'anime',
    },





  ];

  export default inicialProductos
console.log("Hello socks");



//code for the domstring - col-3 and col-9 classes help create the 2-column display where the image takes ony 1/3 of the space and the paragraph takes 2/3 of it. ALSO - don't forget to add class="do-flex flex-wrap" to the div container that includes all the testimonials (in the correspondign html file, where you also define the id of the container where the testimonials will go)!
// domString += '<div class="col-3">;
//domString += `<img src="" alt=""/>`;
// dom String += '</div>;
//domString += <div class="col-9">;
//domString += `<p>textdfdsfdfd</p>`;
// dom String += '</div>;



// Object for authenticated user:

const authenticatedUser = {
    id: 'sock1',
    name: 'steve',
    imageUrl: 'https://whitecompany.scene7.com/is/image/whitecompany/Cashmere-Bed-Socks/CSCBS_79_MAIN_P?$D_PDP_824x1050$',
    age: 24,
    brand: 'Hanes',
    color: 'white',
    isDirty: true,
    hobby: 'swimming',
    location: 'San Francisco, CA',
    size: 'one size fits most',
    wantsLeft: false,
    height: 'tube',
    daysSingle: 365,
    description: 'Spicy jalapeno bacon ipsum dolor amet landjaeger alcatra swine jerky, pig porchetta pancetta buffalo beef. Rump ground round tongue chislic brisket jerky tri-tip. Pig strip steak spare ribs porchetta shank venison leberkas capicola beef ribs chislic fatback t-bone doner alcatra flank. Jowl shankle cupim brisket tri-tip swine biltong frankfurter porchetta meatball doner chicken. Salami ham chicken turducken, kielbasa pastrami t-bone drumstick shankle pig boudin porchetta biltong. Jerky ham shank, ball tip shankle short ribs prosciutto beef sausage chuck t-bone flank pork belly ground round.',
    quote: 'Do not hang me out to dry'
  };


//   Array of 3 testimonials:

  const testimonials = [
    {
      id: 'testimonial1',
      imageUrl: 'https://assets.bombas.com/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/navy-cream-layflat-product_9915ee42-f6ab-4bb5-8315-9f56aae0ebe8_1600x1600.jpg%3Fv%3D1576081488',
      name: 'Joe',
      testimonial: 'This site is the BEST!  I love it'
    },
    {
      id: 'testimonial2',
      imageUrl: 'https://assets.bombas.com/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/navy-cream-layflat-product_9915ee42-f6ab-4bb5-8315-9f56aae0ebe8_1600x1600.jpg%3Fv%3D1576081488',
      name: 'Jane',
      testimonial: 'Sole Mates helped me find the PERFECT pair - even better than the original.'
    },
    {
      id: 'testimonial3',
      imageUrl: 'https://assets.bombas.com/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/navy-cream-layflat-product_9915ee42-f6ab-4bb5-8315-9f56aae0ebe8_1600x1600.jpg%3Fv%3D1576081488',
      name: 'Bethanie',
      testimonial: 'Sole Mates helped me find my soul mate!'
    }
  ];

//   Array of 6 messages:

const messages = [
  {
    id: 'message1',
    name: 'steve',
    imageUrl: 'https://assets.bombas.com/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/navy-cream-layflat-product_9915ee42-f6ab-4bb5-8315-9f56aae0ebe8_1600x1600.jpg%3Fv%3D1576081488',
    text: 'Hi I am steve'
  },
  {
    id: 'message2',
    name: 'jane',
    imageUrl: '',
    text: 'Hi I am jane'
  },
  {
    id: 'message3',
    name: 'judy',
    imageUrl: '',
    text: 'Hey steve! I like to party!'
  },
  {
    id: 'message4',
    name: 'steve',
    imageUrl: 'https://assets.bombas.com/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/navy-cream-layflat-product_9915ee42-f6ab-4bb5-8315-9f56aae0ebe8_1600x1600.jpg%3Fv%3D1576081488',
    text: 'hi Judy'
  },
  {
    id: 'message5',
    name: 'jane',
    imageUrl: '',
    text: 'anyone online?'
  },
  {
    id: 'message6',
    name: 'steve',
    imageUrl: 'https://assets.bombas.com/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/navy-cream-layflat-product_9915ee42-f6ab-4bb5-8315-9f56aae0ebe8_1600x1600.jpg%3Fv%3D1576081488',
    text: 'I am here!'
  }
];

//   Array of 10 socks:

const socks = [
    {
      id: 'sock1',
      name: 'steve',
      imageUrl: 'https://whitecompany.scene7.com/is/image/whitecompany/Cashmere-Bed-Socks/CSCBS_79_MAIN_P?$D_PDP_824x1050$',
      age: 24,
      brand: 'Hanes',
      color: 'white',
      isDirty: true,
      hobby: 'swimming',
      location: 'San Francisco, CA',
      size: 'one size fits most',
      wantsLeft: false,
      height: 'tube',
      daysSingle: 365,
      description: 'Spicy jalapeno bacon ipsum dolor amet landjaeger alcatra swine jerky, pig porchetta pancetta buffalo beef. Rump ground round tongue chislic brisket jerky tri-tip. Pig strip steak spare ribs porchetta shank venison leberkas capicola beef ribs chislic fatback t-bone doner alcatra flank. Jowl shankle cupim brisket tri-tip swine biltong frankfurter porchetta meatball doner chicken. Salami ham chicken turducken, kielbasa pastrami t-bone drumstick shankle pig boudin porchetta biltong. Jerky ham shank, ball tip shankle short ribs prosciutto beef sausage chuck t-bone flank pork belly ground round.',
      quote: 'Do not hang me out to dry'
    },
    {
      id: 'sock2',
      name: 'Jane',
      imageUrl: 'https://assets.bombas.com/image/fetch/f_auto,q_auto/https://cdn.shopify.com/s/files/1/1119/5850/products/navy-cream-layflat-product_9915ee42-f6ab-4bb5-8315-9f56aae0ebe8_1600x1600.jpg%3Fv%3D1576081488',
      age: 3,
      brand: 'hanes',
      color: 'grey',
      isDirty: false,
      hobby: 'basketball',
      location: 'San Francisco, CA',
      wantsLeft: true,
      height: 'tube',
      daysSingle: 10,
      description: 'Spare ribs burgdoggen short loin, ball tip meatloaf chicken turducken. Ham buffalo pancetta, shankle porchetta boudin fatback strip steak chuck andouille swine. Buffalo alcatra beef, cupim spare ribs chicken short ribs sausage swine pork chop. Ground round filet mignon pork loin prosciutto chicken. Salami tri-tip beef sirloin leberkas jowl. Shankle picanha pastrami jowl.',
      quote: 'Life is 10% what happens to us and 90% how we react to it.'
    },
    {
      id: 'sock3',
      name: 'Judy',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HXW30002I_001_UPC_047852282215_UPC_Black_2000x.png?v=1578521422',
      age: 1,
      brand: 'kirkland signature',
      color: 'black',
      isDirty: false,
      hobby: 'fencing',
      location: 'abandoned',
      wantsLeft: true,
      height: 'tube',
      daysSingle: 1,
      description: 'Drumstick pork spare ribs boudin. Prosciutto short ribs pastrami pork belly. Ball tip chuck filet mignon meatball. Porchetta bacon pastrami chislic picanha cupim capicola ribeye leberkas. Boudin beef shoulder short ribs beef ribs drumstick tongue kielbasa.',
      quote: 'Be not afraid of life. Believe that life is worth living, and your belief will help create the fact'
    },
    {
      id: 'sock4',
      name: 'Tammy',
      imageUrl: 'https://lp2.hm.com/hmgoepprod?set=source%5B/30/3c/303c86b3293400e00f389ce1d91ab0053e1f5444.jpg%5D,origin%5Bdam%5D,category%5Bmen_socks%5D,type%5BDESCRIPTIVESTILLLIFE%5D,res%5Bm%5D,hmver%5B1%5D&call=url%5Bfile:/product/main%5D',
      age: 1,
      brand: 'hanes',
      color: 'blue',
      isDirty: true,
      hobby: 'basketball',
      location: 'Nashville, TN',
      wantsLeft: true,
      height: 'ankle',
      daysSingle: 1,
      description: 'Drumstick porchetta meatball tail kevin t-bone bacon ham hock flank pastrami sirloin. Pork chop short ribs bresaola chuck ground round landjaeger sausage picanha capicola rump fatback frankfurter turducken. Tri-tip tongue sausage sirloin cow jowl venison pastrami pork. Turducken short ribs salami cow shankle ground round t-bone sirloin cupim biltong. Pork loin jerky ground round meatloaf cupim. Boudin ham biltong alcatra, tri-tip pork belly capicola strip steak tongue jowl landjaeger shankle doner. Beef turducken meatball ball tip.',
      quote: 'Even if you’re on the right track, you’ll get run over if you just sit there'
    },
    {
      id: 'sock5',
      name: 'George',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HXW30002I_100_UPC_047852282222_UPC_White_2000x.png?v=1578521422',
      age: 2,
      brand: 'hanes',
      color: 'white',
      isDirty: true,
      hobby: 'cars',
      location: 'San Francisco, CA',
      wantsLeft: true,
      height: 'tube',
      daysSingle: 100,
      description: 'Turkey flank shankle pork loin ground round burgdoggen. Pastrami kevin frankfurter venison. Turducken pork belly pastrami, frankfurter venison tongue swine bresaola brisket rump andouille beef. Pancetta shank hamburger meatball landjaeger. Pork belly pork chop shankle, spare ribs ball tip landjaeger jowl cow corned beef bresaola buffalo leberkas t-bone.',
      quote: 'Nurture your mind with great thoughts. To believe in the heroic makes heroes.'
    },
    {
      id: 'sock6',
      name: 'Mark',
      imageUrl: 'http://t0.gstatic.com/images?q=tbn%3AANd9GcSFSbucWA2OFDe4eqUfR4raLskmEtlOfTFtciBy7GsYmm8zBui60zCSxK_YNlawx8yOrhhTS2A&usqp=CAc',
      age: 3,
      brand: 'kirkland signature',
      color: 'black',
      isDirty: false,
      hobby: 'basketball',
      location: 'Nashville, TN',
      wantsLeft: true,
      height: 'ankle',
      daysSingle: 23,
      description: 'Beef buffalo tail porchetta rump andouille jerky swine bresaola short loin. Ham hock picanha tri-tip chuck prosciutto alcatra shank. Alcatra prosciutto boudin bresaola capicola short ribs pork loin fatback beef ribs. Biltong hamburger shank tri-tip, pancetta tail ball tip pastrami rump jerky ribeye. Drumstick pancetta turducken, ham hock kielbasa chuck beef tri-tip bresaola biltong burgdoggen tongue jowl strip steak. Doner pig ribeye, andouille ground round spare ribs strip steak.',
      quote: 'Luck is a dividend of sweat. The more you sweat, the luckier you get'
    },
    {
      id: 'sock7',
      name: 'Beth',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtekgQkNiyzZ-CmrJrORBGM9s_ZcHa4jFhSFOhs20Xn3xCS7Co',
      age: 3,
      brand: 'kirkland signature',
      color: 'white',
      isDirty: false,
      hobby: 'swimming',
      location: 'Austin, TX',
      wantsLeft: true,
      height: 'tube',
      daysSingle: 45,
      description: 'Boudin shoulder pig, ribeye jerky capicola pancetta cow kielbasa burgdoggen doner brisket. Cupim tri-tip jerky porchetta, beef pork loin pork chop swine rump ribeye. Cupim shankle leberkas alcatra t-bone prosciutto jowl tail. Chicken bacon sausage shank, ribeye hamburger chuck pancetta tri-tip ham hock jerky. Pork chislic bacon shank. T-bone jerky tenderloin drumstick hamburger strip steak. Kevin rump beef ribs tail.',
      quote: 'When I let go of what I am, I become what I might be.'
    },
    {
      id: 'sock8',
      name: 'John',
      imageUrl: 'grey',
      age: 2,
      brand: 'LL Bean',
      color: 'https://cdni.llbean.net/is/image/wim/218776_129_41?hei=1092&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2',
      isDirty: false,
      hobby: 'swimming',
      location: 'Austin, TX',
      wantsLeft: false,
      height: 'knee',
      daysSingle: 500,
      description: 'Biltong chuck boudin ground round burgdoggen. Shoulder flank chuck alcatra sausage ham venison ball tip. Tenderloin andouille sirloin spare ribs venison ball tip jerky cupim bacon pork belly. Beef drumstick pork chop alcatra, spare ribs prosciutto burgdoggen tongue brisket sausage ground round. Chuck landjaeger andouille bacon shankle, hamburger cow pork belly burgdoggen leberkas jowl fatback. Picanha tri-tip flank ham hock turkey ground round. Venison beef chuck, shoulder chislic rump picanha beef ribs buffalo.',
      quote: 'You may find the worst enemy or best friend in yourself.'
    },
    {
      id: 'sock9',
      name: 'Daniel',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9pNHWT4iTpvDIQKWi6_ZjGXTiqSujuseGgbd0tClcYFHdpxYR',
      age: 1,
      brand: 'Polo',
      color: 'black',
      isDirty: true,
      hobby: 'fencing',
      location: 'Austin, TX',
      wantsLeft: false,
      height: 'tube',
      daysSingle: 34,
      description: 'Beef ribs fatback ham landjaeger bresaola turkey tail prosciutto pork belly pork loin shank pig. Shank flank beef, pastrami ham hock burgdoggen prosciutto ribeye cupim sirloin alcatra porchetta salami. Brisket porchetta filet mignon rump, bacon t-bone tongue ball tip jowl alcatra. Beef pork chop short loin strip steak bacon short ribs kevin.',
      quote: 'Live each day as if your life had just begun.'
    },
    {
      id: 'sock10',
      name: 'Susan',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUJ1x752E2HuaNKpaSVWc7KL4S4mPfsBDjI3wbNmtc6QHJiJ2m',
      age: 60,
      brand: 'vans',
      color: 'white',
      isDirty: false,
      hobby: 'swimming',
      location: 'Nashville, TN',
      wantsLeft: true,
      height: 'knee',
      daysSingle: 66,
      description: 'Brisket capicola spare ribs tongue, shankle swine filet mignon turducken chicken meatball tenderloin tail. Ribeye shankle strip steak, tail bacon ball tip chislic corned beef tongue shoulder. Biltong buffalo pancetta turducken ham hock shoulder tri-tip tail burgdoggen meatball ball tip salami short ribs swine. Spare ribs pork belly ribeye venison shankle biltong, chislic shoulder sausage drumstick. Pig meatloaf chislic, biltong pork loin short loin pancetta shoulder pastrami swine chicken ham tri-tip ribeye.',
      quote: 'The difference between a successful person and others is not lack of strength not a lack of knowledge but rather a lack of will.'
    },
    {
      id: 'sock11',
      name: 'Savannah',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTk61-CpZduVcGysf7YWC1IiPLULSjtlxDEkzAOr6fEZAEshL6W',
      age: 40,
      brand: 'Hanes',
      color: 'black',
      isDirty: true,
      hobby: 'cars',
      location: 'Austin, TX',
      wantsLeft: false,
      height: 'tube',
      daysSingle: 345345,
      description: 'Pork andouille doner, ground round landjaeger boudin swine. Salami pork loin ribeye ball tip boudin swine prosciutto t-bone filet mignon picanha ham hock pig. Boudin pork chop tongue corned beef, landjaeger kevin chislic buffalo fatback hamburger ham hock. Sirloin hamburger ribeye turducken kevin. Cupim cow bresaola, bacon alcatra frankfurter andouille ham hock ham sirloin corned beef shoulder meatloaf. Tri-tip t-bone cupim beef ribs hamburger burgdoggen fatback ribeye chislic cow shoulder.',
      quote: 'If not us, who? If not now, when?'
    },
    {
      id: 'sock12',
      name: 'Sarah',
      imageUrl: 'https://cdn.shopify.com/s/files/1/1632/8677/products/product-image-132189677_960x.jpg?v=1527285347',
      age: 1,
      brand: 'sock r us',
      color: 'blue',
      isDirty: true,
      hobby: 'swimming',
      location: 'abandoned',
      wantsLeft: true,
      height: 'ankle',
      daysSingle: 4,
      description: 'Shoulder pork loin tri-tip pork belly. Shankle doner turducken, pig pancetta chislic drumstick ribeye. Ham hock tail salami beef burgdoggen pork. Alcatra brisket turducken, doner t-bone ribeye andouille strip steak. Fatback cupim tail ham, pancetta leberkas hamburger capicola pork chop doner meatball. Bacon chuck tail, buffalo tenderloin cow ribeye chislic biltong meatball.',
      quote: 'The only way of finding the limits of the possible is by going beyond them into the impossible'
    },
    {
      id: 'sock13',
      name: 'Whiney',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1Mlwwi9cYEuEMtwPxByz6fdfE3JTI2PwDH57YiP2atzuIDXS-',
      age: 123132,
      brand: 'target',
      color: 'white',
      isDirty: false,
      hobby: 'basketball',
      location: 'Nashville, TN',
      wantsLeft: false,
      height: 'ankle',
      daysSingle: 34,
      description: 'Tri-tip salami buffalo swine short ribs short loin. Ham hock pork shank pig picanha drumstick, sausage jowl landjaeger swine tenderloin short loin prosciutto. Short ribs boudin beef ribs buffalo meatball. Tail ham hock meatball bresaola rump burgdoggen pancetta buffalo cow doner porchetta. Pig bacon picanha andouille pork meatball salami sausage ground round boudin shankle. Beef prosciutto beef ribs picanha, cow chislic fatback.',
      quote: 'Education costs money. But then so does ignorance'
    },
    {
      id: 'sock14',
      name: 'Dan',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0104/0030/1120/products/HXW30002I_411_UPC_047852282239_UPC_Dark_Blue_2000x.png?v=1578521422',
      age: 1,
      brand: 'LL Bean',
      color: 'blue',
      isDirty: true,
      hobby: 'cars',
      location: 'Nashville, TN',
      wantsLeft: true,
      height: 'ankle',
      daysSingle: 1,
      description: 'Leberkas biltong hamburger shank. Tail flank tenderloin sirloin sausage ham hock. Chislic beef buffalo tri-tip bresaola salami jerky pastrami burgdoggen leberkas kevin strip steak. Pork chop shank landjaeger, rump tail meatloaf pancetta buffalo turkey sirloin hamburger doner porchetta tenderloin. Drumstick buffalo sirloin capicola alcatra meatloaf pig picanha. Bresaola tenderloin pork loin chislic venison meatball shank turkey drumstick kielbasa bacon. Cow shankle pig, sausage bacon brisket bresaola ham buffalo chicken.',
      quote: 'Every noble work is at first impossible'
    },
    {
      id: 'sock15',
      name: 'Jonas',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1Tq2i2eQRaIWN-DTCg5t3NgYwuWEhPNCh9TsBTIuP8D2op-XC',
      age: 2,
      brand: 'hanes',
      color: 'peach',
      isDirty: true,
      hobby: 'fencing',
      location: 'abandoned',
      wantsLeft: false,
      height: 'ankle',
      daysSingle: 12,
      description: 'Pork t-bone capicola, meatloaf venison picanha pork belly jowl fatback cupim alcatra short loin. Ground round flank biltong jowl, pork meatloaf fatback pork belly tail porchetta strip steak shoulder pancetta turducken beef. Prosciutto landjaeger pork belly, chislic venison pastrami fatback ham hock. Pork chop rump sausage, jowl t-bone kevin leberkas shoulder.',
      quote: 'Do not let what you cannot do interfere with what you can do.'
    }
];
export const categories = [
  {
    id: 3,
    name: 'Cookies',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 1,
    name: 'Mexican Food',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/19498861/thumb/1.jpg'
  },
  {
    id: 2,
    name: 'Italian Food',
    photo_url:
      'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Smoothies',
    photo_url:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
  {
    id: 0,
    name: 'Pizza',
    photo_url: 'https://img.itdg.com.br/tdg/images/blog/uploads/2019/05/pizza.jpg'
  },
];

export const recipes = [
  {
    recipeId: 122,
    categoryId: 3,
    title: 'Oatmeal Cookies',
    photo_url: 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
    photosArray: [
      "https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg",
      "https://assets.bonappetit.com/photos/57c86e2bb4ceec812a59c8ac/master/pass/best-oatmeal-raisin-cookies.jpg",
      "https://addapinch.com/wp-content/blogs.dir/3/files/2014/03/chocolate-no-bake-cookies-DSC_2853.jpg",
      "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/05/soft-oatmeal-chocolate-chip-cookies.jpg",
      "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2021/03/01/Food/Images/v-essentials-oatmealcookies0003.JPG?t=20170517"
    ],
    time: '15',
    ingredients: [
      [62, '1 1/2 tablespoon'],
      [0, '200ml'], 
      [1, '5g'],
      [63, '1 1/2 tablespoon'], 
      [2, '300g'],
      [18, '6 tablespoons'],
      [42, '1/2 cup'],
      [13, '3/4 cup'],
      [12, '1/4 cups'],
      [64, '1/2 cups'],
      [65, '1/4 cups']
    ],
    description:
      '-- Heat your oven to 350??F (177??C). Line cookie sheets with parchment paper.\n\n -- Combine the chia seeds with the water in a small bowl. Stir and set aside.\n\n -- In a large bowl, beat vegan butter, peanut butter, and sugars. Use an electric mixer on medium speed to whip until creamy. Add the chia seed mixture and stir to combine.\n\n -- In a separate bowl Stir together the flour, cornstarch, baking soda, baking powder, cinnamon salt, oats and raisins.\n\n -- Pour the wet mixture into the flour mixture, and stir until combined.\n\n -- Use a cookie scoop to drop the dough onto prepared cookie sheets, with dough balls spaced at least one inch apart.\n\n -- Bake for 9 to 10 minutes, until golden brown. When done remove from the oven and cool for a few minutes on the cookie sheet before transferring to a wire rack to cool.\n\n -- Store cookies in an airtight container. You can refrigerate these cookies to extend their freshness, up to a week. They can be frozen for up to 2 months.'
  },
  {
    recipeId: 3,
    categoryId: 4,
    title: 'Triple Berry Smoothie',
    photo_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
      'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '10',
    ingredients: [
      [59, '1'],
      [60, '1/2 lbs'],
      [66, '1/2 lbs'],
      [67, '1/2 lbs'],
      [61, '1/2 liters']
    ],
    description: 'In a blender, combine all ingredients and blend until smooth. Then divide between 2 cups and top with blackberries, if desired.'
  },
  {
    recipeId: 2,
    categoryId: 3,
    title: 'Vegan Cookies',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/06/no-bake-lactation-cookies-1-650x975.jpg',
      "https://theloopywhisk.com/wp-content/uploads/2019/04/Vegan-Chocolate-Chip-Cookies_730px-featured-500x500.jpg",
      "https://chocolatecoveredkatie.com/wp-content/uploads/2018/05/Vegan-Chocolate-Chip-Cookies-500x500.jpg", 
      "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2021/10/vegan-chocolate-cookies-tahini-800x1200.jpg",
    ],
    time: '30',
    ingredients: [
      [55, '1/2 cup'],
      [13, '3/4 cup'],
      [19, '1 teaspoon'],
      [1, '2 teaspoons'],
      [0, '1/2 cup'],
      [44, '1/4 cup'],
      [68, '1 teaspoons'],
      [12, '1 1/2 teaspoons'],
      [69, '4 oz'],
      [69, '4 oz dark chocolate'],
      [20, '1/2 teaspoon']
    ],
    description:
      '-- In a large bowl, whisk together the sugar, brown sugar, salt, and coconut oil until combined. \n\n -- Whisk in non-dairy milk and vanilla, until all sugar has dissolved and the batter is smooth. \n\n -- Sift in the flour and baking soda, then fold the mixture with a spatula, being careful not to overmix. \n\n -- Fold in the chocolate chunks evenly. \n\n -- Chill the dough for at least 30 minutes. \n\n -- Preheat oven to 350??F (180??C). \n\n -- Scoop the dough with an ice cream scoop onto a parchment paper-lined baking sheet. Be sure to leave at least 2 inches of space between cookies and the edges of the pan so cookies can spread evenly. \n\n -- Bake for 12-15 minutes, or until cookies just begin to brown. \n\n -- Cool completely.'
  },
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Pumpkin Spice Cookies',
    photo_url:
      'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriLVf3xoY5nUUFzb3n-uR9SzvpbkdQeHkig&usqp=CAU',
      'https://www.lovefromtheoven.com/wp-content/uploads/2020/08/soft-lofthouse-pumpkin-cookies-7.jpg',
      'https://inbloombakery.com/wp-content/uploads/2021/09/pumpkin-cookies-3-1-819x1024.jpg'
    ],
    time: '45',
    ingredients: [
      [55, '1/2 cup'],
      [70, '1/2 cup'],
      [16, '2'],
      [13, '3/4 cup'],
      [19, '1 teaspoon'],
      [1, '2 teaspoons'],
      [0, '1/2 cup'],
      [44, '1/4 cup'],
      [68, '1 teaspoons'],
      [12, '1 1/2 teaspoons'],
      [69, '4 oz'],
      [69, '4 oz dark chocolate'],
      [20, '1/2 teaspoon']
    ],
    description:
      '-- Blot the pumpkin. After ridding some moisture, you???ll have a little less than 1 and 1/2 cups of pumpkin??? I usually have about 1 and 1/3 cups (315g). Using anywhere between 1.33 and 1.5 cups of pumpkin is fine. \n\n -- Get your oven preheated. Prepare your baking sheets with parchment paper or silicone baking mats. I swear by these mats! You can learn more in my 5 Cookie Baking Tips video and here???s how to clean silicone baking mats. \n\n -- Whisk dry ingredients. You need flour, baking powder, baking soda, salt, pumpkin pie spice, cinnamon, and ground ginger. Pumpkin pie spice contains cinnamon and ginger, but I like adding more of both and know you???ll enjoy the extra flavor too. \n\n -- Mix the wet ingredients. You need an electric mixer for this recipe. Cream the butter and sugars together, then add the egg. Next add a splash of maple syrup to help thin out the dough, a little vanilla extract, and your blotted pumpkin. Mixture will look a little curdled at this point. Don???t fret, that???s normal. \n\n -- Mix the dry and wet ingredients together. Dough is thick and sticky, so I strongly recommend using a cookie scoop. The medium size is perfect because each dough ball should be around 1.5 Tablespoons of dough. \n\n -- Bake until the edges appear set. And here???s my tip for cooling: the longer the cookies cool, the better their flavor. It???s nearly impossible to wait before tasting one but just know that the flavors intensify after a day.'
  },
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Brownies',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
      'https://www.sabornamesa.com.br/media/k2/items/cache/3ae7ed6dc1e285ef778f4f2d7f0bc247_XL.jpg',
      'https://www.sabornamesa.com.br/media/k2/items/cache/dfa7f6322712614e6e049fc346875c0a_L.jpg',
      'https://www.cozinhatecnica.com/wp-content/uploads/2019/10/brownie.jpg'
    ],
    time: '30',
    ingredients: [
      [55, '1/2 cup'],
      [71, '1/2 cup'],
      [16, '2'],
      [13, '3/4 cup'],
      [1, '2 teaspoons'],
      [0, '1/2 cup'],
      [44, '1/4 cup'],
      [68, '1 teaspoons'],
      [12, '1 1/2 teaspoons'],
      [69, '4 oz'],
      [69, '4 oz dark chocolate'],
      [20, '1/2 teaspoon']
    ],
    description:
      '-- 2 eggs + water ??? You can use a bit of water with the eggs to achieve the moist, gooey texture of boxed mix brownies without any commercial emulsifiers. And because this recipe doesn???t contain any baking powder, eggs are essential for helping the brownies puff up in the oven. \n\n -- Powdered sugar ??? The trick to making homemade brownies that are just like ones from a box! Powdered sugar contains cornstarch, which helps thicken the batter without the chemical additives you???d find in a mix. \n\n -- Unsweetened cocoa powder ??? Michelle recommends using Hershey???s Special Dark Dutch-processed cocoa powder (I used Whole Foods??? 365 Cocoa Powder). Make sure to sift it if it???s lumpy! \n\n -- Oil ??? While many recipes for brownies use unsalted butter, Michelle???s calls for canola oil, just like the boxed mix. I use olive oil because it???s what I keep on hand, and I love the rich flavor. \n\n -- Vanilla Extract ??? 1/2 teaspoon vanilla really amps up the chocolate flavor.'
  },
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Perfect Fish Tacos',
    photo_url: 'https://hips.hearstapps.com/hmg-prod/images/190307-fish-tacos-112-1553283299.jpg',
    photosArray: [
      'http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg',
      'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg',
      'https://kristineskitchenblog.com/wp-content/uploads/2021/04/fish-tacos-1200-square-747.jpg'
    ],
    time: '35',
    ingredients: [
      [30, 'jucie of 1 '],
      [24, '2 teaspoons'],
      [0, '3 tablespoons'],
      [3, '1 teaspoon'],
      [31, '1/2 teaspoons'],
      [32, '1/2 teaspoons'],
      [4, '2 teaspoons'],
      [33, '1/2 lb'],
      [27, '8'],
      [14, '2 teasponns'],
      [34, '1']
    ],
    description:
      '-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalape??o. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. '
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Chicken Fajitas',
    photo_url:
      'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg',
    photosArray: [
      'https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg',
      'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
    ],
    time: 35,
    ingredients: [
      [9, '1/2 teaspoons'],
      [0, '4 tablespoons'],
      [1, '1/2 teaspoons'],
      [30, '2 tablespoons'],
      [31, '1 teaspoon'],
      [7, '1 teaspoon'],
      [24, '1/2 teaspoons'],
      [3, '1/2 teaspoons'],
      [21, '1 pound'],
      [22, '1/2 cup'],
      [27, '6'],
      [36, '4'],
      [37, '1/2'],
      [38, '1/2']
    ],
    description:
      '-- In a large bowl, combine 2 tablespoons oil, lemon juice and seasonings; add the chicken. Turn to coat; cover. Refrigerate for 1-4 hours In a large skillet, saute peppers and onions in remaining oil until crisp-tender. Remove and keep warm. Drain chicken, discarding marinade. In the same skillet, cook chicken over medium-high heat for 5-6 minutes or until no longer pink.\n\n -- Return pepper mixture to pan; heat through. Spoon filling down the center of tortillas; fold in half. Serve with toppings as desired.'
  },
  {
    recipeId: 6,
    categoryId: 2,
    title: 'Buffalo Pizza',
    photo_url:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    photosArray: [
      'https://www.tablefortwoblog.com/wp-content/uploads/2019/01/buffalo-chicken-pizza-recipe-photos-tablefortwoblog-3-500x500.jpg',
      'http://pizzachoicema.com/wp-content/uploads/2018/08/Buffalo-Chicken-Pizza.jpg',
      'https://static1.squarespace.com/static/565bb41ae4b0509ba9fdf769/t/5b9a8e80aa4a998b0be0fcf4/1536855690622/pizza.gif'
    ],
    time: 50,
    ingredients: [
      [39, '1 lb'],
      [40, '1 cup'],
      [41, '1/2 cup'],
      [42, '1/4 cup'],
      [43, '2 tablespoons'],
      [44, '1/2 cup'],
      [7, '1/4 teaspoons'],
      [5, '1/4 teaspoons'],
      [30, '1/4 teaspoons'],
      [45, '2 oz'],
      [12, 'for dusting'],
      [4, '1/2 teaspoons'],
      [47, '2'],
      [46, '9 oz']
    ],
    description:
      '-- Place a rack in upper third of oven. Place a large cast-iron skillet on rack and preheat oven to 500?? (or as high as your oven will go). Place pizza dough in a large bowl, pour a little oil over, and turn to coat. Cover bowl with plastic and let dough proof at room temperature while pan and oven heat up.\n\n -- Meanwhile, cook hot sauce, marinara sauce, and butter in a medium saucepan over medium heat, stirring occasionally, until butter is melted. Stir in cream, reduce heat to low, and simmer, stirring occasionally, until slightly thickened and warmed through, about 10 minutes. Heat 1 Tbsp. oil in a large skillet over medium-high. Add chicken, toss to coat, then add ?? cup Buffalo sauce.\n\n -- Cook chicken, tossing occasionally, until heated through, about 2 minutes. Reduce heat and simmer, stirring often, until chicken is well coated and sauce is slightly thickened, about 5 minutes. Meanwhile, whisk yogurt, lemon juice, celery salt, garlic powder, ?? cup blue cheese, ?? tsp. pepper, and 2 Tbsp. water in a small bowl, adding more water if sauce seems too thick (it should be pourable); set aside.\n\n -- Turn out dough onto a lightly floured work surface. Shape with your hands into a round that???s slightly larger than the cast-iron skillet you???re using. Take hot skillet out of oven (watch that handle!) and place on a heatproof surface. Add a little flour to pan. Lay dough in skillet, then work edges of dough up sides of skillet with your fingertips (use a rubber spatula or wooden spoon if you???re nervous about touching the hot pan). Drizzle a little oil around inside edge of pan so that it trickles behind and underneath dough, which will encourage browning and help it release.\n\n -- Spread about ??? cup Buffalo sauce over dough. Arrange mozzarella over, then top with remaining ?? cup blue cheese. Arrange chicken mixture on top. Bake pizza on top rack until crust and cheese are nicely browned, 15???20 minutes. Transfer skillet to stovetop (again, watch that handle!) and let pizza rest a few minutes. Using a spatula, slide pizza onto a cutting board or platter. Arrange celery over, then top with reserved blue cheese dressing. Season with pepper, then drizzle with oil.'
  },
  {
    recipeId: 0,
    categoryId: 0,
    title: 'Vegan Mexican Lasagna',
    photo_url: 'https://460362-1442130-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/02/20190202_Mexican_Lasagna_05-web.jpg',
    photosArray: [
      "https://460362-1442130-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/02/20190202_Mexican_Lasagna_05-web.jpg",
      "https://images.media-allrecipes.com/userphotos/7687154.jpg",
      "https://www.bowlofdelicious.com/wp-content/uploads/2019/06/Mexican-Lasagna-3.jpg",
      "https://thefitchen.com/wp-content/uploads/2019/11/Vegetarian-Taco-Lasagna-7.jpg"
    ],
    time: '15',
    ingredients: [
      [0, '200ml'], 
      [1, '5g'], 
      [2, '300g'], 
      [7, '1 teaspoon'], 
      [18, '1/2 cup'], 
      [34, '1'], 
      [26, '15 oz'], 
      [8, '1/2 teaspoons'], 
      [19, '1 teaspoon'], 
      [7, '1/8 teaspoons'], 
      [27, '18 6'],
      [29, '2 cup']
    ],
    description:
      '-- In a medium skillet over medium heat, saut?? onion in oil for 5 minutes until onions are tender. Add garlic, soy crumbles, and fajita seasoning. Stir in water and cornmeal and cook over low heat for 5 minutes. Set aside to cool during the next step.\n\n -- Add tofu, avocado, chickpeas, turmeric, onion powder, garlic powder, and salt to a food processor and pulse until well combined. \n\n -- Spoon some of the salsa into the bottom of a 9??13 ungreased baking pan and top with 6 corn tortillas. Spoon ?? fajita-spiced vegan crumbles over tortillas, followed by ?? avocado mixture. Repeat layers, finishing with remaining salsa, and top with remaining Cheddar shreds.\n\n -- Bake 30 minutes until cheese melts. Remove from oven and let cool for about 20 minutes.\n\n -- Cover and refrigerate for up to 10 days or freeze up to 3 months. To serve, cook in the microwave in 30-second intervals until heated through'
  },
  {
    recipeId: 7,
    categoryId: 2,
    title: 'Spaghetti Carbonara',
    photo_url: 'https://truffle-assets.imgix.net/655ce202-862-butternutsquashcarbonara-land.jpg',
    photosArray: [
      'https://ak3.picdn.net/shutterstock/videos/10431533/thumb/10.jpg',
      'https://i.ytimg.com/vi/rY4mz5TLtz4/maxresdefault.jpg',
      'https://cdn-image.foodandwine.com/sites/default/files/HD-201104-r-spaghetti-with-anchovy.jpg'
    ],
    time: 15,
    ingredients: [
      [48, '50g'],
      [49, '100g'],
      [50, '350g'],
      [51, '2 plump'],
      [42, '50g'],
      [16, '3'],
      [1, '2 teaspoons'],
      [4, '2 teaspoons']
    ],
    description:
      '-- Put the egg yolks into a bowl, finely grate in the Parmesan, season with pepper, then mix well with a fork and put to one side. Cut any hard skin off the pancetta and set aside, then chop the meat. Cook the spaghetti in a large pan of boiling salted water until al dente.\n\n -- Meanwhile, rub the pancetta skin, if you have any, all over the base of a medium frying pan (this will add fantastic flavour, or use 1 tablespoon of oil instead), then place over a medium-high heat. Peel the garlic, then crush with the palm of your hand, add it to the pan and leave it to flavour the fat for 1 minute. Stir in the pancetta, then cook for 4 minutes, or until it starts to crisp up. Pick out and discard the garlic from the pan, then, reserving some of the cooking water, drain and add the spaghetti.\n\n -- Toss well over the heat so it really soaks up all that lovely flavour, then remove the pan from the heat. Add a splash of the cooking water and toss well, season with pepper, then pour in the egg mixture ??? the pan will help to cook the egg gently, rather than scrambling it. Toss well, adding more cooking water until it???s lovely and glossy. Serve with a grating of Parmesan and an extra twist of pepper.'
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: 'Lazania',
    photo_url: 'https://images8.alphacoders.com/817/817353.jpg',
    photosArray: [
      'https://previews.123rf.com/images/somegirl/somegirl1509/somegirl150900048/46103208-top-view-of-a-delicious-traditional-italian-lasagna-made-with-minced-beef-bolognese-sauce-topped-wit.jpg',
      'https://truffle-assets.imgix.net/87f324e4-YOUTUBE-NO-TXT.00_03_19_14.Imagen_fija001.jpg',
      'https://images4.alphacoders.com/817/817350.jpg'
    ],
    time: 60,
    ingredients: [
      [36, '1 large'],
      [25, '1 pound'],
      [51, '5 cloves'],
      [52, '1 pound'],
      [53, '1 pound'],
      [54, '1 28 ounce can'],
      [23, '2 6 ounce can'],
      [55, '2 tablespoons'],
      [56, '1/4 cup'],
      [10, '1/2 cup'],
      [1, '1/2 teaspoons'],
      [58, '1 teaspoon'],
      [4, '1/4 teaspoons'],
      [16, '1 large'],
      [46, '1 pound'],
      [48, '1 cup'],
      [57, '30 ounces']
    ],
    description:
      '-- Cook noodles according to package directions; drain. Meanwhile, in a Dutch oven, cook sausage, beef and onion over medium heat 8-10 minutes or until meat is no longer pink, breaking up meat into crumbles. Add garlic; cook 1 minute. Drain. Stir in tomatoes, tomato paste, water, sugar, 3 tablespoons parsley, basil, fennel, 1/2 teaspoon salt and pepper; bring to a boil. Reduce heat; simmer, uncovered, 30 minutes, stirring occasionally. In a small bowl, mix egg, ricotta cheese, and remaining parsley and salt. Preheat oven to 375??. Spread 2 cups meat sauce into an ungreased 13x9-in. baking dish. Layer with 3 noodles and a third of the ricotta mixture. Sprinkle with 1 cup mozzarella cheese and 2 tablespoons Parmesan cheese.\n\n -- Repeat layers twice. Top with remaining meat sauce and cheeses (dish will be full). Bake, covered, 25 minutes. Bake, uncovered, 25 minutes longer or until bubbly. Let stand 15 minutes before serving.'
  }
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Oil',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 1,
    name: 'Salt',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: 2,
    name: 'Russet potatoes',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: 3,
    name: 'Paprika',
    photo_url:
      'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  },
  {
    ingredientId: 4,
    name: 'Black Pepper',
    photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  },
  {
    ingredientId: 5,
    name: 'Celery salt',
    photo_url: 'https://www.spicejungle.com/media/catalog/product/cache/77bee113a8ac4baedd074d0e50f9761e/c/e/celery-salt_1.jpg'
  },
  {
    ingredientId: 6,
    name: 'Dried sage',
    photo_url:
      'https://cdn.shopify.com/s/files/1/0491/7890/2688/products/Dried-Sage-Herb_600x.png?v=1616376276'
  },
  {
    ingredientId: 7,
    name: 'Garlic powder',
    photo_url:
      'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 8,
    name: 'Ground allspice',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2018%2F10%2FBHG20Sept20spice-04_5763911bf220Allspice20Photo20by20Meredith20650x452.jpg'
  },
  {
    ingredientId: 9,
    name: 'Dried oregano',
    photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  },
  {
    ingredientId: 10,
    name: 'Dried basil',
    photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  },
  {
    ingredientId: 11,
    name: 'Dried marjoram',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'All-purpose flour',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Brown sugar',
    photo_url:
      'https://shriiattachakki.com/wp-content/uploads/Brown-Sugar.jpg'
  },
  {
    ingredientId: 14,
    name: 'Kosher salt',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F01%2F08%2FGettyImages-1291435922-2000.jpg'
  },
  {
    ingredientId: 15,
    name: 'Whole chicken',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Eggs',
    photo_url:
      'https://image.shutterstock.com/image-photo/egg-whites-yolk-cup-isolated-260nw-1072453787.jpg'
  },
  {
    ingredientId: 17,
    name: 'Quarts neutral oil',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    ingredientId: 18,
    name: 'Water',
    photo_url: 'https://ak1.picdn.net/shutterstock/videos/829561/thumb/11.jpg'
  },
  {
    ingredientId: 19,
    name: 'Onion Powder',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Chicken Breast',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Onion chopped',
    photo_url: 'https://s3.envato.com/files/246703499/IMG_1752_5.jpg'
  },
  {
    ingredientId: 23,
    name: 'Tomato paste',
    photo_url:
      'http://d3e1m60ptf1oym.cloudfront.net/45bab59a-363c-11e1-ab4e-bf4c2e0bb026/PANELA_xgaplus.jpg'
  },
  {
    ingredientId: 24,
    name: 'Chilli Powder',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Ground Beef',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Can kidney beans, rinsed and drained ',
    photo_url:
      'https://cdn.shopify.com/s/files/1/0079/6177/2150/products/red_20kidney_20bean_20canned_1200x1200.jpg?v=1629875306'
  },
  {
    ingredientId: 27,
    name: 'Large Tortillas',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Firtos',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Shredded cheddar',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Lime',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Ground cumin',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Cayenne pepper',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Flaky white fish',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Avocado',
    photo_url:
      'https://static3.tcdn.com.br/img/img_prod/350075/muda_de_abacate_avocado_hass_feita_de_enxerto_12389_1_20200302171715.png'
  },
  {
    ingredientId: 35,
    name: 'Red Pepper Flakes',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Onions',
    photo_url: 'https://i5.walmartimages.com/asr/33813ffc-7fc4-4ff5-8667-897307ca4054_3.c1faf49fe38fb5e447847773284aaafd.jpeg'
  },
  {
    ingredientId: 37,
    name: 'Green Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Red Pepper',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Pizza dough',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Ketchup sauce',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Hot Sauce',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Butter',
    photo_url: 'https://freight.cargo.site/i/37cc760e6c63a6591e874bd90c14f5c22afc16b227817a37310aedd4b5a04507/free-png-butter-png-images-transparent-butter-png-850_559.png'
  },
  {
    ingredientId: 43,
    name: 'Heavy Cream',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'whole-milk plain yogurt',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozzarella',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'celery stalks',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Parmesan Chesse',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Spaghetti',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Garlic',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Lasagna noodles',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'Italian sauce',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Crushed Tomatoes',
    photo_url:
      'https://previews.123rf.com/images/merkulovnik/merkulovnik1406/merkulovnik140600100/28751626-crushed-tomato-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 55,
    name: 'Sugar',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'minced fresh parsley',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'ricotta cheese',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: ' fennel seed',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Banana',
    photo_url:
      'https://www.conservationmagazine.org/wp-content/uploads/2013/04/sterile-banana.jpg'
  },
  {
    ingredientId: 60,
    name: 'Frozen Straberries',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Greek Yogurt',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
  {
    ingredientId: 62,
    name: 'Chia Seeds',
    photo_url:
    'https://media.istockphoto.com/photos/chia-seeds-picture-id1172115860?b=1&k=20&m=1172115860&s=170667a&w=0&h=P2CaLrcAXl8qk6-7x0zFYySxPdXHqYsKvndyzRfHPZ0='
  },
  {
    ingredientId: 63,
    name: 'Peanut Butter',
    photo_url:
    'https://www.cozinhatecnica.com/wp-content/uploads/2019/02/pasta-de-amendoim-CAPA.jpg'
  },
  {
    ingredientId: 64,
    name: 'Oats',
    photo_url:
    'https://post.healthline.com/wp-content/uploads/2020/03/oats-oatmeal-732x549-thumbnail.jpg'
  },
  {
    ingredientId: 65,
    name: 'Raisins',
    photo_url:
    'https://www.drfuhrman.com/cdn-cgi/image/anim=false,f=auto,fit=scale-down,onerror=redirect,w=1156/rollups/bbf21a342aa65506717cbf58e40177621ac78829ab5866dbea26f69c1c85e5cb.jpg'
  },
  {
    ingredientId: 66,
    name: 'Raspberry',
    photo_url:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx9Z9W34NdfLWvpgrdxr9OBVqzs2-uFQzHidxMfrUfpzr6QICd2KcaSA87fu01ptYi7oY&usqp=CAU'
  },
  {
    ingredientId: 67,
    name: 'BlueBerry',
    photo_url:
    'https://images.squarespace-cdn.com/content/v1/5b8edfa12714e508f756f481/1538598121644-P3XKXM9Y3QHNIEPQ56JU/blueberry.jpg?format=1000w'
  },
  {
    ingredientId: 68,
    name: 'Vanilla',
    photo_url:
    'https://brownthumbmama.com/wp-content/uploads/2012/06/bottles-beans-OPT.jpg'
  },
  {
    ingredientId: 69,
    name: 'Chocolate',
    photo_url:
    'https://cdn.shopify.com/s/files/1/1709/6425/products/chips-70-silo_480x480.jpg?v=1612798262'
  },
  {
    ingredientId: 70,
    name: 'Pumpkin',
    photo_url:
    'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTCAxjByHe7g8Pf6QA5gKnhrhjG-W_GcvRyN8x6W2xyqttc6MpyNjPwjN9uDjgke6-d7QPH35NS4hRpyqJsn-U'
  },
  {
    ingredientId: 71,
    name: 'Cocoa Powder',
    photo_url:
    'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRGUu5H1Deh5qkPmGB5frLINEIo4PEohsx3atSVPl-wLkTHXlxfiRGCZuJZB5pzqrW3If9KwlwI5YwOH2RG_wM'
  },
];

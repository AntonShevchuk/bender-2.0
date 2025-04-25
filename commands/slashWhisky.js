/**
 * @param {Object} event the event object from Google Chat
 */
function slashWhisky(event) {

  let drinks = [];

  drinks.push(
    {
      "name": "Americano",
      "description": "So, you like your espresso... watered down? Fascinating. It's like admitting you can't handle the good stuff but still want to pretend you're sophisticated. Here's your diluted disappointment.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/americano.jpg"
    }
  );

  drinks.push(
    {
      "name": "Aperol Spritz",
      "description": "This is how you get classy, even if you're a loser. Three parts of that sparkling wine – Prosecco, they call it. Two parts of that orange stuff, Aperol. And a splash of soda, for bubbles. Don't forget the orange slice, or you're doing it wrong.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/aperol-spritz.jpg"
    }
  );

  drinks.push(
    {
      "name": "Blood Mary",
      "description": "Tomato juice, yeah, the red stuff. Vodka, because why not? Lemon juice, a bit of spice. Worcestershire sauce, Tabasco if you're feeling dangerous. Celery salt and pepper to taste. Some folks throw in a celery stick or an olive, like it's a salad. It's basically a liquid brunch.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/blood-mary.jpg"
    }
  );

  drinks.push(
    {
      "name": "Cappuccino",
      "description": "Behold, the cappuccino! Espresso swimming in steamed milk, topped with a mountain of foam that will vanish before you can even say \"existential dread.\" Enjoy the fleeting illusion of airy happiness.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/cappuccino.jpg"
    }
  );

  drinks.push(
    {
      "name": "Cold Brew",
      "description": "Cold brew: for the patient ones, or those who forgot to make coffee the regular way. Steeped for hours to achieve maximum smoothness and minimal acidity. It's the coffee that takes its sweet time, unlike your rapidly approaching deadlines.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/cold-brew.jpg"
    }
  );

  drinks.push(
    {
      "name": "Daiquiri",
      "description": "Listen up, this one's easy. You need some rum, the light kind, like your brain. Then, squeeze a lime – fresh, not that bottled crap. And a bit of sugar, unless you're sweet enough already, meatbag. Shake it all with ice until it's colder than my heart, and pour it into a glass. If you're feeling fancy, throw in a lime wheel.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/daiquiri.jpg"
    }
  );

  drinks.push(
    {
      "name": "Espresso",
      "description": "Ah, espresso. The fuel of the overworked and underpaid. A tiny, potent shot that promises to make you feel alive, right before you remember you still have to deal with humans.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/espresso.jpg"
    }
  );

  drinks.push(
    {
      "name": "Gin Tonik",
      "description": "Gin, the stuff that makes you tell the truth (or lies, depending on the gin). Tonic water, bubbly and slightly bitter. A wedge of lime, because it's healthy or something. Simple, but it gets the job done.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/gin-tonik.jpg"
    }
  );

  drinks.push(
    {
      "name": "Green Mexican",
      "description": "This one's weird. Tequila, because Mexico. Banana liqueur, because... why not? And lemon juice, to make it sour. Some people put salt on the rim, but I say, live a little.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/green-mexican.jpg"
    }
  );

  drinks.push(
    {
      "name": "Latte",
      "description": "The latte: where espresso goes to be... less espresso. It's like a gentle hug from a caffeinated cloud, perfect for those moments when you need a little warmth but not too much actual coffee flavor.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/latte.jpg"
    }
  );

  drinks.push(
    {
      "name": "Margarita",
      "description": "Tequila, that's the main brain-zapper. Then some lime juice, gotta be fresh, not that fake stuff. And a shot of orange liqueur, like Cointreau or Triple Sec – makes it taste less like regret in a glass. Usually served with salt on the rim, so you can pretend you're classy.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/margarita.jpg"
    }
  );

  drinks.push(
    {
      "name": "Negroni",
      "description": "Equal parts of gin (the good stuff, not the cheap swill), sweet vermouth, and Campari. Stir it, don't shake it, you animal. Orange peel is a must. This drink is bitter, like my jokes, but you'll learn to love it.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/negroni.jpg"
    }
  );

  drinks.push(
    {
      "name": "Nuka-Cola",
      "description": "Wrong universe? This is your drink if you see a mushroom cloud outside. I highly recommend pairing it with some serious sun protection – and I'm talking SPF over 2000. Might not save you from the fallout, but hey, at least your skin will be moisturized. Drink at your own risk, and don't come crying to me if you start glowing in the dark.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/nuka-cola.jpg"
    }
  );

  drinks.push(
    {
      "name": "Old Fashioned",
      "description": "This one's for the old-timers, or those who wish they were sophisticated. Whiskey, the brown kind. A sugar cube, or some simple syrup if you're lazy. A few dashes of bitters – makes it taste… interesting. Stir it, don't shake it like you're having a seizure. And for show, a twist of orange peel.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/old-fashioned.jpg"
    }
  );

  drinks.push(
    {
      "name": "Water",
      "description": "Feeling rough? Before reaching for another cocktail, try some water. Hydration is key to not feeling like a pile of scrap metal tomorrow.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/water.jpg"
    }
  );

  drinks.push(
    {
      "name": "Whiskey Sour",
      "description": "Whiskey, obviously. Lemon juice, fresh again. Simple syrup, unless you're simple enough. If you want to get all fancy, throw in an egg white, but don't come crying to me if you get salmonella. Shake it like you mean it, and garnish with a cherry or a lemon peel.",
      "image":"https://raw.githubusercontent.com/AntonShevchuk/bender-2.0/main/assets/drinks/whiskey-sour.jpg"
    }
  );

  let i = Math.floor(Math.random() * drinks.length);

  return {
    "cardsV2": [{
      "cardId": "whisky",
      "card": {
        "sections": [
          {
            "collapsible": false,
            "widgets": [
              {
                "grid": {
                  "title": "",
                  "columnCount": 1,
                  "items": [
                    {
                      "image": {
                        "imageUri": drinks[i].image,
                        "cropStyle": {
                          "type": "CIRCLE"
                        },
                        "borderStyle": {
                          "type": "STROKE"
                        }
                      },
                      "title": drinks[i].name,
                      "textAlignment": "CENTER"
                    }
                  ]
                }
              },
              {
                "decoratedText": {
                  "text": drinks[i].description
                }
              }
            ]
          }
        ]
      }
    }]
  };
}

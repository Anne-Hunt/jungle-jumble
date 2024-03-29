import { Jumble } from './models/Jumble.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  jumbles = [

    new Jumble({

      name: '3 Sentences',
      body: "As you know, I'm quite keen on comic books. Especially the ones about superheroes. I find the whole mythology surrounding superheroes fascinating."
    }),
    new Jumble({

      name: 'Small Paragraph',
      body: "Take my favorite superhero, Superman. Not a great comic book, not particularly well-drawn, but the mythology. The mythology is not only great, it's unique. Now, a staple of the superhero mythology is, there's the superhero and there's the alter ego. Batman is actually Bruce Wayne, Spider-Man is actually Peter Parker."
    }),
    new Jumble({

      name: 'Superman',
      body: "When that character wakes up in the morning, he's Peter Parker. He has to put on a costume to become Spider-Man. And it is in that characteristic Superman stands alone. Superman didn't become Superman. Superman was born Superman. When Superman wakes up in the morning, he's Superman. His alter ego is Clark Kent. His outfit with the big red 'S', that's the blanket he was wrapped in as a baby when the Kents found him."
    }),
    new Jumble({

      name: 'Beatrix Kiddo',
      body: "Those are his clothes. What Kent wears - the glasses, the business suit - that's the costume. That's the costume Superman wears to blend in with us. Clark Kent is how Superman views us. And what are the characteristics of Clark Kent? He's weak, he's unsure of himself, he's a coward. Clark Kent is Superman's critique on the whole human race. Sorta like Beatrix Kiddo and Mrs. Tommy Plympton. You would've worn the costume of Arlene Plympton."
    }),
    new Jumble({

      name: "Killer Paragraph",
      body: "But you were born Beatrix Kiddo. And every morning when you woke up, you'd still be Beatrix Kiddo. I'm calling you a killer. A natural born killer. You always have been, and you always will be. Moving to El Paso, working in a used record store, going to the movies with Tommy, clipping coupons. That's you, trying to disguise yourself as a worker bee. That's you trying to blend in with the hive. But you're not a worker bee. You're a renegade killer bee. And no matter how much beer you drank or barbecue you ate or how fat your ass got, nothing in the world would ever change that"
    }),
  ]

  /**@type {Jumble} */
  activeJumble = null


  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())
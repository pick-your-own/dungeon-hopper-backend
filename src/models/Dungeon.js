'use strict';

const mongoose = require('mongoose');

const dungeonSchema = new mongoose.Schema({
  // gs = gearscore
  story: {
    type: String,
    required: true,
  },

});

const Dungeon = mongoose.model('Dungeon', dungeonSchema);

module.exports = {
  Dungeon,
};


//! Story Ideas:
// The Cursed Catacombs:

// Beneath the ancient city, where the light of day could not penetrate, the Cursed Catacombs sprawled in a labyrinthine network of darkness. Legends whispered of a vengeful spirit that had cursed these subterranean tunnels, binding restless souls to eternal torment. Into this foreboding realm, a lone player embarked on a perilous journey, their footsteps echoing through the eerie silence.

// Known as the Seeker, this intrepid soul sought to unravel the mysteries that plagued the cursed catacombs and put the tormented spirits to rest. Armed with determination and a glimmer of hope, the Seeker ventured deeper into the heart of the subterranean maze, their senses heightened by the ominous presence that lingered in the air.

// The catacombs were a haunting sight. Dimly lit by flickering torches, the damp stone walls seemed to absorb every sound, muffling the Seeker's footsteps and amplifying the whispers of the restless dead. The air was thick with an otherworldly chill, sending shivers down the Seeker's spine. They were not alone in this forsaken place.

// As the Seeker pressed on, their path intertwined with the souls of the departed. Eerie moans and ethereal whispers echoed through the tunnels, and phantom figures flickered in the periphery of their vision. The Seeker's resolve remained unyielding, their purpose clear—to seek out the source of the curse and bring peace to the tormented souls.

// Each step revealed new horrors. Restless undead creatures, trapped between life and death, lurched from the shadows with skeletal limbs and hollow eyes. The Seeker fought valiantly, wielding their chosen weapon with precision and determination. Their strikes cut through the malevolent entities, banishing them momentarily into the ethereal realm.

// Amidst the battles, the Seeker uncovered fragments of the catacombs' dark history. Diary entries written by long-deceased inhabitants spoke of a tragedy that had befallen the ancient city—a betrayal, a pact with darkness, and the unleashing of an unspeakable curse. These fragments, like pieces of a macabre puzzle, hinted at the origin of the vengeful spirit that haunted the catacombs.

// As the Seeker descended further into the depths, the presence of the vengeful spirit grew stronger. Its malevolence seeped into every nook and cranny, warping the already gloomy atmosphere. The Seeker's heart raced with trepidation, yet they pressed on, driven by a determination to free the souls trapped within the cursed catacombs.

// Finally, in the heart of the catacombs, the Seeker discovered a chamber shrouded in an impenetrable darkness. It pulsated with an unholy energy, the very epicenter of the curse. A figure materialized—a specter wreathed in ethereal mist, its eyes burning with an unquenchable fury.

// The battle that ensued was a clash of wills and supernatural power. The Seeker's skills were put to the ultimate test as they evaded the spirit's spectral attacks and fought back with unwavering resolve. The very fate of their own soul seemed entwined with the outcome of this confrontation.

// As the battle raged on, the Seeker's determination never wavered. The echoes of the catacombs bore witness to their struggle, the walls themselves trembling with the intensity of the clash between the living and the ethereal. Would the Seeker's unwavering spirit prevail against the vengeful force that sought to drag them into eternal darkness? Would they discover the key to breaking the curse and granting peace to the restless souls?

// The answers remained shrouded in uncertainty, the conclusion of this harrowing tale yet to be revealed. The Seeker's fate and the resolution of the cursed catacombs remained open-ended, leaving room for the imagination to explore the depths of both victory and tragedy.



// ? The Forbidden Temple:
// Hidden in a dense jungle, a long-forgotten temple holds priceless treasures. Legend has it that the temple is guarded by ancient guardians and traps, protecting its riches from intruders. The players must navigate the treacherous corridors, avoiding deadly pitfalls and solving puzzles to claim the temple's bountiful rewards.

// ? As the last rays of the setting sun pierced through the dense canopy of the ancient jungle, a lone figure stood before the forbidding entrance of the Forbidden Temple. The player, fueled by unwavering determination and a hunger for adventure, took a deep breath, immersing themselves in the mysterious depths below. The air thickened with humidity, and a sense of primal foreboding settled upon their shoulders.
// ? Navigating the temple's labyrinthine passages was a formidable challenge. Whispering foliage and the haunting calls of unseen creatures heightened the player's senses, keeping them on constant alert. Suddenly, amidst the dense undergrowth, a pair of glowing eyes materialized, accompanied by a menacing growl. The first adversary had emerged from the shadows.
// ? With adrenaline coursing through their veins, the player engaged in a dance of steel and agility. Each clash of weapons sent sparks into the air, accompanied by the primal symphony of the jungle. They fought with unwavering determination, their every move a testament to their skill and resourcefulness. The battle was a symphony of strategy and instinct, a clash between wills within the heart of the Forbidden Temple.
// ? The player encountered relentless adversaries, each a guardian of the temple's secrets and a test of their mettle. Treacherous traps lay in wait, cunningly hidden amidst the overgrown foliage. Ancient enigmas tested their intellect and forced them to decipher the secrets of a forgotten era. With each trial overcome, the player's resolve grew stronger, forging an unbreakable connection with the pulse of the jungle.
// ? After a grueling expedition through the temple's depths, the player arrived at a chamber of ancient grandeur. Ethereal mist shrouded the room, as a towering figure emerged from the shadows. The temple's guardian—a colossal beast adorned with intricate markings and eyes that gleamed with primal fury—stood as the final challenge, determined to protect the temple's darkest secrets at any cost.

//?
// function createForbiddenTempleStory() {
//   const forbiddenTempleStory = {
//     beginning: "As the last rays of the setting sun pierced through the dense canopy of the ancient jungle, a lone figure stood before the towering entrance of the Forbidden Temple. The player, fueled by unwavering determination and a hunger for adventure, took a deep breath, immersing themselves in the mysterious depths below. The air thickened with humidity, and a sense of primal foreboding settled upon their shoulders.",
//     corridors: "Navigating the temple's labyrinthine passages was a formidable challenge. Whispering foliage and the haunting calls of unseen creatures heightened the player's senses, keeping them on constant alert. Suddenly, amidst the dense undergrowth, a pair of glowing eyes materialized, accompanied by a menacing growl. The first adversary had emerged from the shadows.",
//     battle: "With adrenaline coursing through their veins, the player engaged in a dance of steel and agility. Each clash of weapons sent sparks into the air, accompanied by the primal symphony of the jungle. They fought with unwavering determination, their every move a testament to their skill and resourcefulness. The battle was a symphony of strategy and instinct, a clash between wills within the heart of the Forbidden Temple.",
//     challenges: "The player encountered relentless adversaries, each a guardian of the temple's secrets and a test of their mettle. Treacherous traps lay in wait, cunningly hidden amidst the overgrown foliage. Ancient enigmas tested their intellect and forced them to decipher the secrets of a forgotten era. With each trial overcome, the player's resolve grew stronger, forging an unbreakable connection with the pulse of the jungle.",
//     boss: "After a grueling expedition through the temple's depths, the player arrived at a chamber of ancient grandeur. Ethereal mist shrouded the room, as a towering figure emerged from the shadows. The temple's guardian—a colossal beast adorned with intricate markings and eyes that gleamed with primal fury—stood as the final challenge, determined to protect the temple's darkest secrets at any cost."
//   };

//   return forbiddenTempleStory;
// }



// The Haunted Manor
// Amidst the rumors and chilling tales surrounding the manor, a solitary player embarked on a perilous journey, drawn to the mystery that awaited within its forsaken halls. Known simply as the Wanderer, this intrepid soul sought to unravel the secrets that lay hidden in the depths of the haunted manor.

// With each step, the Wanderer felt the weight of the manor's dark history pressing upon them. The air grew thick with a sense of foreboding, and the once-peaceful atmosphere turned suffocating. Shadows danced and whispered, and eerie echoes reverberated through the hallways as the Wanderer ventured deeper into the heart of the cursed abode.

// The first signs of the evil spirit's presence manifested in the form of ethereal apparitions—phantoms that materialized before the Wanderer's eyes. These lost souls, trapped between the realms of the living and the dead, were twisted by the malevolence that permeated the manor. The Wanderer could feel their torment and their desperate plea for release.

// Navigating the labyrinthine corridors, the Wanderer encountered each tormented spirit with empathy and determination. They listened to their sorrowful tales, comforting them with words of solace and compassion. The Wanderer's presence brought solace to these wretched souls, guiding them towards peace and freeing them from the clutches of the malevolent spirit.

// As the Wanderer delved further into the manor, the evil spirit's influence grew stronger. The atmosphere turned increasingly oppressive, and the very essence of innocence seemed tainted. The Wanderer encountered twisted illusions and traps set by the spirit, designed to deceive and corrupt the unwary. But the player's resolve remained unshaken, their will to confront and overcome the darkness unyielding.

// In the heart of the manor, the Wanderer discovered a chamber consumed by darkness—a nexus of the evil spirit's power. There, a malicious force awaited, its presence suffusing the room with an aura of malevolence that threatened to consume the Wanderer's own soul. The confrontation with the unspeakable evil loomed before them, a battle that would test their courage and resilience like never before.

// As the Wanderer prepared to face the embodiment of darkness, the air crackled with an otherworldly energy. Shadows coalesced, and the spirit materialized—a grotesque figure with eyes that gleamed with an unholy light. The battle commenced, the Wanderer fighting against the spirit's corrupting influence with every ounce of strength.

// The player's skill and resourcefulness were put to the ultimate test as they evaded the spirit's ethereal attacks and countered with determined strikes. Each blow struck with the weight of justice, fueled by the Wanderer's unwavering belief in the power of redemption and the triumph of purity.

// Yet, as the battle waged on, the outcome remained uncertain. The Wanderer's heart raced with adrenaline, their spirit undeterred by the evil spirit's relentless assault. With every passing moment, they drew closer to the truth—the truth of the spirit's origin, its insidious motives, and the key to banishing it from the haunted manor forever.

// In the depths of the darkness, the Wanderer fought on, hoping to dispel the malevolent presence and restore the manor to its former tranquility. The ultimate resolution of this perilous encounter and the fate of the Wanderer remained to be seen, leaving the story open to the possibilities of victory, sacrifice, or the eternal struggle between light and darkness.




// ? The Labyrinth of Shadows:
// Within an underground labyrinth, shadows lurk, waiting to consume the unwary. The players must navigate the twisting corridors, encountering devious traps and fearsome monsters born from darkness. As they delve deeper, the shadows grow stronger. Can they find the light that banishes the darkness, or will they be swallowed by its eternal embrace?
// As the sun dipped below the horizon, casting long shadows across the land, a lone figure stood before the imposing entrance of the Labyrinth of Shadows. The player, armed with determination and a thirst for adventure, took a deep breath and crossed the threshold into the unknown depths below. The air grew colder, and a sense of foreboding settled upon their shoulders.

// ? Navigating the labyrinth's twisting corridors proved to be a daunting task. Murmurs of unseen creatures echoed through the darkness, heightening the player's senses and keeping them on edge. Suddenly, a pair of glowing eyes materialized in the distance, accompanied by a low, guttural growl. The first foe had revealed itself.

// ? With weapons drawn, the player engaged in a fierce battle, their heart pounding in their chest. The clash of steel against flesh rang out, accompanied by the occasional cry of pain. It was a dance of skill and survival, with each step forward demanding unwavering focus.

// ? The foes they encountered were relentless, their forms shifting and morphing as if empowered by the very essence of darkness itself. Cunning traps threatened to ensnare the player at every turn, and devious puzzles tested their intellect. Yet, with each victory, the player grew stronger, their resolve unyielding.

// ? After a grueling journey, the player arrived at the heart of the labyrinth, where an ominous chamber awaited them. A towering figure emerged from the shadows, its presence suffocating. The dungeon boss—a manifestation of pure darkness—loomed before them, its eyes burning with malice.

//?
// function createLabyrinthStory() {
//   const labyrinthStory = {
//     beginning: "As the sun dipped below the horizon, casting long shadows across the land, a lone figure stood before the imposing entrance of the Labyrinth of Shadows. The player, armed with determination and a thirst for adventure, took a deep breath and crossed the threshold into the unknown depths below. The air grew colder, and a sense of foreboding settled upon their shoulders.",
//     corridors: "Navigating the labyrinth's twisting corridors proved to be a daunting task. Murmurs of unseen creatures echoed through the darkness, heightening the player's senses and keeping them on edge. Suddenly, a pair of glowing eyes materialized in the distance, accompanied by a low, guttural growl. The first foe had revealed itself.",
//     battle: "With weapons drawn, the player engaged in a fierce battle, their heart pounding in their chest. The clash of steel against flesh rang out, accompanied by the occasional cry of pain. It was a dance of skill and survival, with each step forward demanding unwavering focus.",
//     challenges: "The foes they encountered were relentless, their forms shifting and morphing as if empowered by the very essence of darkness itself. Cunning traps threatened to ensnare the player at every turn, and devious puzzles tested their intellect. Yet, with each victory, the player grew stronger, their resolve unyielding.",
//     boss: "After a grueling journey, the player arrived at the heart of the labyrinth, where an ominous chamber awaited them. A towering figure emerged from the shadows, its presence suffocating. The dungeon boss—a manifestation of pure darkness—loomed before them, its eyes burning with malice."
//   };

//   return labyrinthStory;
// }



// The Volcanic Forge:
// Deep within the treacherous Ashen Peaks, where the earth trembled and the air was filled with the ominous scent of sulfur, stood a dormant volcano. Little did the world above know that beneath its fiery exterior lay an ancient forge of unimaginable power—the Volcanic Forge.

// Rumors and legends spread throughout the realm about the forge and the legendary weapons said to be crafted within its heart.

// You ventured into the treacherous tunnels that snaked through the scorching depths beneath the volcano. The heat was oppressive, the air thick with smoke, and the ground beneath your feet radiated an intense heat that threatened to sear your soles. It was a grueling journey, but their determination pushed them forward.

// Your first trial awaited them in the form of fiery adversaries—the fire elementals. These creatures, born of flame and fury, lunged at the player with relentless aggression.You summon strength unknown to you, to fend off these would be threats to your life. 

// With the fire elementals vanquished, the player pressed on, facing even deadlier adversaries—the molten creatures. These grotesque beings, forged from magma and obsidian, roamed the tunnels with a hunger for destruction. The adventurer found themself engaged in a deadly dance, evading scorching tendrils and avoiding crushing blows. Your arrows found weak points in the creatures' stony armor. As you ran out of arrows you switched to your axe and cleaved through their molten bodies, It was a battle of endurance and wit as the players fought their way through the molten creatures, determined to claim victory.

// As you ventured deeper into the heart of the volcano, the players' resolve was tested by the relentless heat and the oppressive atmosphere. The forge's power pulsed through the air, a constant reminder of the legendary weapons you sought. At last, you've reached the inner sanctum, where the elemental guardians stood as formidable obstacles, their fiery presence filling the chamber with an intimidating aura.

// The battle that ensued was an epic struggle of wills. Flames clashed with arrows, hammers collided with molten fists, and sorcery clashed with the burning heat. You fought valiantly, your strength and determination fueling your every move. But the elemental guardians were no mere adversaries—they were ancient beings born of the volcano's raw power, and they were determined to protect the forge at any cost.

// As the battle raged on, the outcome remained uncertain.....it all came down to one final attakc...



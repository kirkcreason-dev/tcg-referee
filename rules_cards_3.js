var CARD_RULINGS_3 = {ygo: [
  {
    cards: ["unaffected", "forbidden droplet", "halve atk", "negate", "cannot"],
    q: "Can Forbidden Droplet affect an unaffected monster?",
    a: "No. Forbidden Droplet is a card effect that halves ATK and negates effects. An unaffected monster cannot be targeted by Forbidden Droplet and its ATK cannot be halved by it."
  },
  {
    cards: ["unaffected", "dark hole", "raigeki", "cannot destroy", "spell effect"],
    q: "Can Dark Hole or Raigeki destroy an unaffected monster?",
    a: "No. Dark Hole and Raigeki destroy by card effect. An unaffected monster cannot be destroyed by these Spell effects."
  },
  {
    cards: ["unaffected", "battle", "attacked", "can still attack", "normal"],
    q: "Can an unaffected monster be attacked normally?",
    a: "Yes. Unaffected by card effects does not prevent the monster from being attacked or from attacking. Battle interactions are game mechanics not card effects. The monster battles normally."
  },
  {
    cards: ["unaffected spell trap effects", "monster effects still apply", "partial unaffected"],
    q: "A monster is unaffected by Spell and Trap effects but not monster effects. Can Effect Veiler negate it?",
    a: "Yes. If a monster is only unaffected by Spell and Trap effects then monster effects like Effect Veiler can still negate it. Unaffected protection is specific to what is stated on the card."
  },
  {
    cards: ["daruma karma cannon", "unaffected", "flip face-down", "send graveyard"],
    q: "Opponent activates Destructive Daruma Karma Cannon while Ultimate Falcon is on the field. What happens?",
    a: "Falcon is unaffected so it is not flipped face-down. However because Player A controls a monster that was not flipped face-down, the secondary mandatory effect of Karma Cannon forces Player A to send that non-flipped monster (Falcon) to the GY."
  },
  {
    cards: ["unaffected", "compulsory evacuation device", "return hand", "cannot"],
    q: "Can Compulsory Evacuation Device return an unaffected monster to the hand?",
    a: "No. Compulsory Evacuation Device is a card effect that returns a monster to the hand. An unaffected monster cannot be affected by this card effect."
  },
  {
    cards: ["unaffected", "book of moon", "flip face-down", "cannot"],
    q: "Can Book of Moon flip an unaffected monster face-down?",
    a: "No. Book of Moon is a card effect. An unaffected monster cannot be flipped face-down by card effects."
  },
  {
    cards: ["unaffected", "mind control", "take control", "cannot"],
    q: "Can Mind Control take control of an unaffected monster?",
    a: "No. Mind Control is a card effect that changes control. An unaffected monster cannot be targeted or affected by Mind Control."
  },
  {
    cards: ["unaffected", "rivalry of warlords", "there can be only one", "continuous", "send"],
    q: "Does an unaffected monster get sent to the GY by There Can Be Only One?",
    a: "No. There Can Be Only One is a card effect that sends monsters to the GY. An unaffected monster cannot be sent to the GY by card effects."
  },
  {
    cards: ["blackwing full armor master", "unaffected", "counter", "cannot be targeted"],
    q: "Full Armor Master is unaffected by other card effects. Can the opponent target it with card effects?",
    a: "No. Unaffected by card effects means the monster cannot be targeted by those effects either. Any effect that would target Full Armor Master is simply unable to do so."
  },
  {
    cards: ["invoked mechaba", "unaffected trap", "negate", "monster spell trap"],
    q: "Can Invoked Mechaba negate a card of any type?",
    a: "Yes. Mechaba can negate any monster effect, Spell, or Trap that targets it by banishing one card from hand of the same type. However if Mechaba is unaffected by a specific type it cannot be targeted by those effects in the first place making the negate irrelevant for those."
  },
  {
    cards: ["unaffected", "xyz material detach", "effect cost", "cannot detach"],
    q: "Can an opponent use an unaffected Xyz Monster's material for a card effect?",
    a: "Xyz Materials are not on the field. Card effects that target or affect the Xyz Monster itself are blocked by unaffected protection. However the Xyz Monster's own effects that detach materials as costs still work because the monster is using its own effect."
  },
  {
    cards: ["red reboot", "trap", "negate", "set", "unaffected trap effects"],
    q: "Can Red Reboot negate a Trap used against an unaffected monster?",
    a: "Red Reboot negates a Trap card and sets it. If the Trap was targeting an unaffected monster the Trap's effect would fail anyway. Red Reboot still negates and sets the Trap regardless of whether it would have worked."
  },
  {
    cards: ["unaffected", "link arrows", "cannot point", "extra deck summon", "zone"],
    q: "Do Link Arrows pointing at an unaffected monster's zone still enable Extra Deck summons?",
    a: "Yes. Link Arrows affect zones not monsters. Unaffected monsters do not prevent Link Arrows from pointing to their zone. Extra Deck monsters can still be summoned to zones pointed at by Link Arrows regardless of what monster occupies adjacent zones."
  },
  {
    cards: ["unaffected", "ghost mourner", "negate effect", "special summon", "cannot"],
    q: "Can Ghost Mourner negate the effects of an unaffected monster?",
    a: "No. Ghost Mourner's effect negates the targeted monster's effects. An unaffected monster cannot be affected by Ghost Mourner's negation effect."
  },
  {
    cards: ["chain", "spell speed", "speed 1", "speed 2", "speed 3", "respond"],
    q: "What are the Spell Speed rules for chaining?",
    a: "Spell Speed 1: Monster effects activated on field, Continuous effects, Ignition effects. Spell Speed 2: Quick Effects, Quick-Play Spells, Trap cards. Spell Speed 3: Counter Traps only. You can only chain a card with equal or higher Spell Speed than the previous chain link. Counter Traps can only be responded to by other Counter Traps."
  },
  {
    cards: ["segoc", "simultaneous effects", "same time", "turn player", "order"],
    q: "How does SEGOC work when multiple effects trigger at the same time?",
    a: "SEGOC (Simultaneous Effects Go On Chain): When multiple trigger effects activate simultaneously from the same event, the Turn Player places their effects on the chain first in any order, then the Non-Turn Player places theirs. Mandatory effects must be placed before optional ones by the same player. The chain then resolves Last In First Out."
  },
  {
    cards: ["chain block", "segoc", "sangan", "baobaboon", "tribute summon"],
    q: "I Tribute Summon Baobaboon using Sangan. Can I chain block Sangan with Baobaboon?",
    a: "Yes. Both are mandatory Trigger Effects controlled by the Turn Player. Player places Sangan as CL1 and Baobaboon as CL2. The opponent cannot respond to Sangan because Baobaboon is already on the chain above it. This is chain blocking."
  },
  {
    cards: ["chain block", "accesscode talker", "update jammer", "effect veiler", "cl2"],
    q: "Accesscode Talker is CL1 and Update Jammer is CL2. Can opponent chain Effect Veiler to CL2?",
    a: "Yes. Accesscode Talker only prevents the opponent from responding to its own activation. By making Update Jammer CL2, a new chain link is opened that the opponent can respond to with Effect Veiler."
  },
  {
    cards: ["chain", "last in first out", "resolves", "cl2 before cl1"],
    q: "In what order does a chain resolve?",
    a: "Chains resolve Last In First Out (LIFO). Chain Link 2 resolves before Chain Link 1. Chain Link 3 resolves before Chain Link 2. The last effect placed on the chain resolves first. This is fundamental to all chain interactions."
  },
  {
    cards: ["chain", "open game state", "priority", "pass", "both players"],
    q: "When can players add to a chain?",
    a: "After each card or effect activation both players have the opportunity to respond by adding to the chain. Once both players consecutively pass without adding to the chain it is closed and resolves. You cannot go back and add to a chain after both players have passed."
  },
  {
    cards: ["mandatory", "optional", "trigger effect", "segoc", "order"],
    q: "In SEGOC do mandatory effects go before optional effects?",
    a: "Yes. When building a SEGOC chain the Turn Player must place all mandatory trigger effects before optional ones. Then the Non-Turn Player places their mandatory effects before their optional ones. Mandatory effects cannot be withheld."
  },
  {
    cards: ["chain", "cannot activate", "in response to summon", "summon response window"],
    q: "Can you chain directly to a summon?",
    a: "No. You cannot chain to a summon itself. After a summon both players have a chance to activate cards or effects in the summon response window. This is an open game state where players can activate Speed 1 or higher effects in response to the summon."
  },
  {
    cards: ["jinzo", "trap activation", "continuous effect", "cannot activate", "already face-up"],
    q: "Jinzo is Normal Summoned. Can the opponent chain a Trap card to the summon?",
    a: "No. Jinzo's continuous effect applies immediately when it hits the field. In the summon response window Jinzo is already face-up and its effect is already active preventing Trap activations. The opponent cannot activate Trap cards in response to Jinzo's summon."
  },
  {
    cards: ["chain", "spell speed 1", "cannot chain to spell speed 2"],
    q: "Can a Speed 1 effect be chained to a Speed 2 effect?",
    a: "No. You can only chain with an equal or higher Spell Speed. Speed 1 effects cannot be chained to Speed 2 effects. Speed 1 effects (Ignition, Continuous, etc.) can only be activated in an open game state not in response to other activations."
  },
  {
    cards: ["counter trap", "speed 3", "only counter trap", "cannot chain spell"],
    q: "Can a Trap card be chained to a Counter Trap?",
    a: "No. Counter Traps are Spell Speed 3. Only other Counter Traps (also Speed 3) can be chained to Counter Traps. Regular Traps are Speed 2 and cannot be chained to Speed 3 Counter Traps."
  },
  {
    cards: ["chain", "mst", "mystical space typhoon", "continuous spell", "destroy", "still resolves"],
    q: "I chain MST to destroy a Continuous Spell. Does the Continuous Spell's effect still resolve?",
    a: "It depends. If the Continuous Spell was just activated (as CL1) MST destroys it but the initial activation effect of Normal Spells resolves even if destroyed. If a Continuous Spell activates one of its effects as CL1 and MST destroys it as CL2 the effect disappears because Continuous effects require the card to remain on field."
  },
  {
    cards: ["chain", "cost already paid", "negated", "cannot reverse"],
    q: "A card is negated after its cost was paid. Is the cost reversed?",
    a: "No. Costs are paid at activation before the chain is built. Even if the card or effect is negated the cost has already been paid and is not returned. Example: Solemn Judgment is negated but the player still loses half LP as the activation cost."
  },
  {
    cards: ["priority", "turn player", "first opportunity", "main phase", "open"],
    q: "Who has priority in an open game state?",
    a: "The Turn Player always has the first opportunity to activate cards or effects in an open game state. After the Turn Player passes or activates, the Non-Turn Player gets their opportunity. This continues until both players consecutively pass."
  },
  {
    cards: ["chain", "cannot respond", "super polymerization", "no chain"],
    q: "Can any card respond to Super Polymerization?",
    a: "No. Super Polymerization specifically states neither player can activate cards or effects in response to its activation. No cards of any Spell Speed can be chained to Super Polymerization. It always resolves without response."
  },
  {
    cards: ["segoc", "both players", "trigger", "simultaneously", "non-turn player"],
    q: "Both players have trigger effects that activate simultaneously. Who goes first?",
    a: "Turn Player places their triggers first (mandatory before optional), then Non-Turn Player places theirs (mandatory before optional). Chain resolves LIFO. Example: Turn Player's effect is CL1, Non-Turn Player's effect is CL2. CL2 resolves first."
  },
  {
    cards: ["chain", "activate", "effect already negated", "cannot add"],
    q: "Can a card be added to the chain if its effect was already negated this turn?",
    a: "Generally yes unless a card specifically prevents it. Having an effect negated earlier in the turn does not prevent activating the card again unless it has a once per turn restriction or a card like Called by the Grave is preventing it."
  },
  {
    cards: ["chain link", "destroyed mid chain", "still resolves", "no longer on field"],
    q: "A card is destroyed mid-chain. Does its chain link still resolve?",
    a: "It depends on card type. Normal Spell effects resolve even if the card is destroyed before resolution. Continuous Spell and Trap effects disappear if the card leaves the field before resolution. Monster effects generally resolve even if the monster leaves the field unless the effect requires the monster to be present."
  },
  {
    cards: ["magical meltdown", "ghost ogre", "field spell", "destroyed", "search fails"],
    q: "Ghost Ogre destroys Magical Meltdown while it is on the chain. Does the search resolve?",
    a: "No. Magical Meltdown is a Field Spell. Continuous Spell effects require the card to remain face-up on the field at resolution. Since Ghost Ogre destroyed it before resolution the search effect disappears."
  },
  {
    cards: ["branded lost", "ash blossom", "initial activation", "no search", "cannot chain"],
    q: "Can Ash Blossom be chained to the initial activation of Branded Lost?",
    a: "No. Branded Lost does not include an effect to add a card to the hand upon its initial card activation. Its search effect triggers later when a Fusion Summon is performed. There is no legal target for Ash Blossom at initial activation."
  },
  {
    cards: ["chain", "respond", "after resolution", "new chain", "trigger"],
    q: "After a chain fully resolves can players respond with new effects?",
    a: "Yes. After a chain fully resolves both players check for trigger effects that activated during resolution. Those triggers form a new chain following SEGOC rules. Then players have the opportunity to activate additional cards or effects in the new open game state."
  },
  {
    cards: ["chain", "quick effect", "opponent turn", "main phase", "battle phase"],
    q: "Can Quick Effects be activated during the opponent's turn outside of Main Phase?",
    a: "Yes. Quick Effects (Spell Speed 2) can be activated during any phase of either player's turn as long as there is an appropriate activation window. During the Battle Phase, Damage Step, and End Phase there are specific windows where Quick Effects can be used."
  },
  {
    cards: ["segoc", "trigger", "mandatory", "cannot choose", "must activate"],
    q: "Can a player choose not to activate a mandatory trigger effect?",
    a: "No. Mandatory trigger effects must be activated when their conditions are met. A player cannot choose to skip or ignore a mandatory trigger. They must place it on the chain when it triggers. Only optional trigger effects can be chosen not to activate."
  },
  {
    cards: ["chain", "activate same card", "twice", "chain link 1 and 2"],
    q: "Can the same card be activated twice on the same chain?",
    a: "No. The same card cannot be activated twice on the same chain. Once a card is on the chain as a chain link it cannot be activated again on that same chain. However two copies of the same card can both be on the same chain."
  },
  {
    cards: ["fire formation tenki", "imperial iron wall", "cosmic cyclone", "chain", "banish fails"],
    q: "Cosmic Cyclone targets Tenki. Opponent chains Imperial Iron Wall. What happens?",
    a: "Imperial Iron Wall resolves first (CL2). Cards cannot be banished. Cosmic Cyclone then resolves but cannot banish Tenki. Cosmic Cyclone resolves without effect. Tenki remains on the field and its search resolves successfully."
  },
  {
    cards: ["chain", "spell speed", "ignition effect", "cannot chain to activation"],
    q: "Can an Ignition Effect be activated in response to another card activation?",
    a: "No. Ignition Effects are Spell Speed 1. They can only be activated in an open game state during the Main Phase. They cannot be chained to any activation. If a player wants to use an Ignition Effect they must do so in an open game state before or after any chains."
  },
  {
    cards: ["extra deck", "extra monster zone", "main monster zone", "link arrow", "placement"],
    q: "Where can Extra Deck monsters be placed?",
    a: "Extra Deck monsters must be placed in the Extra Monster Zone or in a Main Monster Zone that a Link Monster points to. Each player has one Extra Monster Zone. Without a Link Monster pointing to Main Monster Zones you can only have one Extra Deck monster on the field at a time (in the Extra Monster Zone)."
  },
  {
    cards: ["fusion summon", "polymerization", "materials", "hand field", "fusion substitute"],
    q: "Can Fusion Materials come from anywhere for a regular Fusion Summon?",
    a: "Yes. For a standard Polymerization Fusion Summon materials can come from the hand or field. Some Fusion Monsters specify where materials must come from. Fusion Substitute monsters can be used in place of specifically named materials unless the Fusion Monster says otherwise."
  },
  {
    cards: ["fusion summon", "contact fusion", "no polymerization", "cyber dragon", "chimeratech"],
    q: "What is a Contact Fusion?",
    a: "A Contact Fusion is a Special Summon that uses monsters on the field as materials without Polymerization. Cyber Dragon monsters fusing into Chimeratech is an example. The materials are sent to the GY as part of the summon mechanic. This is not a Fusion Summon and cannot be negated by Solemn Strike as a Fusion Summon."
  },
  {
    cards: ["synchro summon", "tuner", "non-tuner", "level", "equal"],
    q: "What are the requirements for a Synchro Summon?",
    a: "You need exactly 1 Tuner monster plus any number of non-Tuner monsters whose combined Levels equal the Synchro Monster's Level exactly. The materials are sent to the GY. The Synchro Monster is Special Summoned from the Extra Deck."
  },
  {
    cards: ["synchro summon", "during opponent turn", "quick effect", "halq", "crystron"],
    q: "Can a Synchro Summon be performed during the opponent's turn?",
    a: "Normally no. However some cards specifically allow Synchro Summoning during the opponent turn such as Crystron monsters and Formula Synchron. These cards have Quick Effects that enable the Synchro Summon outside the normal Main Phase."
  },
  {
    cards: ["xyz summon", "same level", "rank", "materials", "overlay"],
    q: "What are the requirements for an Xyz Summon?",
    a: "You need 2 or more monsters of the same Level as the Xyz Monster's Rank. They are stacked and become Xyz Materials (overlay units) attached to the Xyz Monster. Xyz Materials are not on the field. The Xyz Monster is Special Summoned from the Extra Deck."
  },
  {
    cards: ["xyz summon", "rank up", "chaos xyz", "xyz material", "upgrade"],
    q: "How does a Rank-Up Xyz Summon work?",
    a: "A Rank-Up Magic spell allows you to use an existing Xyz Monster as the sole material for a higher Rank Xyz Monster. The original Xyz Monster and all its materials become the materials for the new Xyz Monster. The new monster gains all the original materials."
  },
  {
    cards: ["link summon", "link rating", "materials", "arrows", "pointing"],
    q: "What are the requirements for a Link Summon?",
    a: "You need the exact number of monsters specified by the Link Monster's Link Rating. The materials must meet any type or attribute requirements. The materials are sent to the GY. Link Monsters have Link Arrows that point to zones, enabling Extra Deck summons in those Main Monster Zones."
  },
  {
    cards: ["link summon", "token", "cannot be material", "link 1"],
    q: "Can Tokens be used as Link Material?",
    a: "Yes. Tokens can be used as Link Material. However Tokens cannot be used as material for Link-1 monsters that restrict materials to non-Token monsters. Always check the specific Link Monster's material requirements."
  },
  {
    cards: ["ritual summon", "ritual spell", "tribute", "exact level", "higher"],
    q: "How does a Ritual Summon work?",
    a: "Activate a Ritual Spell and tribute monsters from hand or field whose total Levels equal or exceed the Ritual Monster's Level. The Ritual Monster is Special Summoned from your hand. Some Ritual Spells have specific requirements for materials."
  },
  {
    cards: ["ritual summon", "advance ritual art", "deck", "normal monsters", "tribute"],
    q: "How does Advance Ritual Art work?",
    a: "Advance Ritual Art tributes Normal Monsters from the Deck whose total Levels equal the Ritual Monster's Level exactly. The Ritual Monster is Special Summoned from the hand. This is one of the few ways to Ritual Summon using Deck materials."
  },
  {
    cards: ["pendulum summon", "pendulum scale", "level range", "extra deck", "face-up"],
    q: "How does a Pendulum Summon work?",
    a: "Place two Pendulum Monsters in the Pendulum Zones. Once per turn you can Pendulum Summon any number of monsters from your hand and face-up Extra Deck whose Levels are between the two Pendulum Scales. Pendulum Summoning is a special summon and can be negated."
  },
  {
    cards: ["pendulum", "destroyed field", "extra deck face-up", "not graveyard"],
    q: "Where do Pendulum Monsters go when destroyed on the field?",
    a: "Pendulum Monsters destroyed while face-up on the field go face-up to the Extra Deck instead of the GY. This is a game mechanic. If sent to the GY by non-destruction effects they go to the actual GY."
  },
  {
    cards: ["solemn strike", "negate summon", "extra deck", "any summon"],
    q: "Can Solemn Strike negate any Extra Deck summon?",
    a: "Yes. Solemn Strike can negate any Special Summon including Fusion, Synchro, Xyz, Link, and Pendulum Summons from the Extra Deck. Pay 1500 LP. The summoned monster is sent to the GY and the summon is treated as never having occurred."
  },
  {
    cards: ["solemn warning", "negate summon", "extra deck", "2000 lp"],
    q: "Can Solemn Warning negate Extra Deck summons?",
    a: "Yes. Solemn Warning negates any monster summon including Extra Deck summons. Pay 2000 LP. The key difference from Solemn Strike is Warning can also negate effects that would Special Summon monsters while Strike cannot."
  },
  {
    cards: ["dimensional barrier", "declare type", "prevent", "extra deck", "negate effects"],
    q: "How does Dimensional Barrier work against Extra Deck summons?",
    a: "Declare one type: Ritual, Fusion, Synchro, Xyz, or Pendulum. Until end of turn neither player can Special Summon monsters of that type and any monster of that type on the field has its effects negated. This completely prevents Extra Deck summons of the declared type."
  },
  {
    cards: ["fusion summon", "el shaddoll", "shaddoll", "must use", "specific material"],
    q: "Shaddoll Fusion monsters require specific Shaddoll materials. Can any Shaddoll be used?",
    a: "Shaddoll Fusion Monsters require at least 1 Shaddoll monster as material and 1 monster matching the specific attribute requirement. The Shaddoll can be any Shaddoll monster unless the Fusion Monster specifies a particular one."
  },
  {
    cards: ["link summon", "extra deck monster", "material", "cannot use", "restriction"],
    q: "Can Extra Deck monsters be used as Link Material?",
    a: "Yes. Extra Deck monsters on the field can be used as Link Material. This is commonly done to generate Link Arrows. However some Link Monsters specify that materials must be non-Special Summoned or impose other restrictions."
  },
  {
    cards: ["xyz summon", "materials not on field", "cannot target", "affect xyz material"],
    q: "Can card effects target Xyz Materials?",
    a: "No. Xyz Materials are not on the field. They are attached to the Xyz Monster. Most card effects cannot target or affect Xyz Materials directly. When the Xyz Monster leaves the field all remaining materials are sent to the GY."
  },
  {
    cards: ["synchro summon", "solemn strike", "negated", "materials graveyard"],
    q: "A Synchro Summon is negated by Solemn Strike. Where do the Synchro Materials go?",
    a: "The materials were already sent to the GY as part of the Synchro Summon procedure before Solemn Strike was activated. Since costs and material sends happen before the chain, the materials remain in the GY. The Synchro Monster is sent to the GY and the summon is treated as never occurring."
  },
  {
    cards: ["link summon", "underworld goddess", "opponent monster", "unaffected", "condition"],
    q: "Can Underworld Goddess use an unaffected opponent monster as Link Material?",
    a: "Yes. Underworld Goddess's ability to use 1 opponent monster as Link Material is an unclassified condition modifying the Link Summon mechanic, not a card effect. It completely bypasses unaffected by card effects protection."
  },
  {
    cards: ["fusion summon", "super polymerization", "opponent monsters", "cannot respond"],
    q: "Can Super Polymerization use opponent monsters as Fusion Materials?",
    a: "Yes. Super Polymerization can use monsters from either side of the field as Fusion Materials. Neither player can respond to its activation. The targeted monsters are sent to the GY as materials."
  },
  {
    cards: ["extra deck", "properly summoned", "revival", "cannot special summon back"],
    q: "Can an Extra Deck monster be revived if it was not properly summoned?",
    a: "No. Extra Deck monsters that were not properly summoned through their correct method cannot be Special Summoned from the GY or banished zone. Example: A Fusion Monster sent directly to the GY without being Fusion Summoned cannot be revived with Monster Reborn."
  },
  {
    cards: ["pendulum summon", "extra deck", "face-up", "pendulum scale", "requirements"],
    q: "What are the requirements to Pendulum Summon from the Extra Deck?",
    a: "To Pendulum Summon from the Extra Deck the monster must be face-up in the Extra Deck (placed there when destroyed on field), its Level must be between the two Pendulum Scales, and it must go to a zone a Link Monster points to or the Extra Monster Zone."
  },
  {
    cards: ["xyz summon", "same turn summoned", "cannot use", "material", "just summoned"],
    q: "Can I use a monster I just Special Summoned as Xyz Material in the same turn?",
    a: "Yes. Monsters can be used as Xyz Materials in the same turn they were Special Summoned unless a card specifically prevents it. There is no general rule preventing same-turn material use for Xyz Summons."
  },
  {
    cards: ["link summon", "arrows", "zone", "enabled", "extra deck summon main zone"],
    q: "A Link Monster has a downward arrow. What does that enable?",
    a: "A Link Arrow pointing to a Main Monster Zone enables Extra Deck monsters to be summoned to that specific zone. Without a Link Arrow pointing to it that zone cannot be used for Extra Deck monster summons. Multiple Link Arrows can point to the same zone from different Link Monsters."
  },
  {
    cards: ["continuous effect", "always active", "no activation", "field"],
    q: "What is a Continuous Effect in Yu-Gi-Oh?",
    a: "A Continuous Effect is an effect that is always active while the monster is face-up on the field. It does not need to be activated and does not start a chain. Examples include Dark Ruler No More preventing LP damage, Skill Drain negating monster effects, and Zombie World changing types. These effects cannot be chained to."
  },
  {
    cards: ["continuous effect", "skill drain", "negate", "face-up", "field only"],
    q: "What does Skill Drain negate exactly?",
    a: "Skill Drain negates the effects of all face-up monsters on the field while Skill Drain remains face-up. It only negates effects that are active while the monster is face-up on the field. It does NOT negate GY effects, hand effects, banished zone effects, or unclassified conditions like Blue-Eyes Alternative name change."
  },
  {
    cards: ["skill drain", "already applied", "xyz summon", "ultimate falcon", "immediately negated"],
    q: "Skill Drain is already active when Ultimate Falcon is Xyz Summoned. Is Falcon immediately negated?",
    a: "Yes. Skill Drain was applying before Falcon hit the field. Falcon's unaffected continuous effect is instantly negated the moment it arrives because Skill Drain was already in place. If Falcon was summoned first and Skill Drain activated after, Falcon would be unaffected."
  },
  {
    cards: ["skill drain", "unclassified", "condition", "name change", "blue eyes alternative"],
    q: "Skill Drain is active. Is Blue-Eyes Alternative White Dragon's name still Blue-Eyes White Dragon?",
    a: "Yes. The name change text is an Unclassified Effect (Condition) which cannot be negated by Skill Drain. Skill Drain only negates activated and continuous effects. Unclassified conditions like name changes and summoning conditions are not negated."
  },
  {
    cards: ["continuous effect", "destroyed", "stops applying", "chain resolving"],
    q: "A Continuous Effect card is destroyed during a chain. Does it still apply while the chain resolves?",
    a: "No. Once a Continuous Effect card leaves the field its effect stops applying immediately. If Skill Drain is destroyed as Chain Link 1 and a monster effect is Chain Link 2, that monster effect resolves normally because Skill Drain is no longer applying."
  },
  {
    cards: ["dark ruler no more", "continuous effect", "cannot damage", "battle damage", "turn"],
    q: "How does Dark Ruler No More work?",
    a: "Dark Ruler No More negates the effects of all face-up monsters the opponent controls until end of turn and for the rest of that turn the player cannot take battle damage from attacks involving opponent monsters. These are lingering effects that apply for the whole turn even if the card leaves the field."
  },
  {
    cards: ["rivalry of warlords", "continuous", "one type", "face-down", "tribute set"],
    q: "Rivalry of Warlords is active. Can I Tribute Set a different type monster?",
    a: "Yes. Face-down monsters do not have a Type while on the field. Because the monster is being placed face-down Rivalry of Warlords does not restrict the Summoning attempt."
  },
  {
    cards: ["gozen match", "continuous", "one attribute", "kaiju", "tribute"],
    q: "Gozen Match is active. Can opponent Special Summon a DARK Kaiju by Tributing my LIGHT monster?",
    a: "No. Under Gozen Match you cannot attempt to summon a monster of a conflicting Attribute even if the conflicting monster would leave the field as the cost to perform the summon."
  },
  {
    cards: ["zombie world", "field spell", "all monsters zombie", "ritual summon", "type change"],
    q: "Zombie World changes all monsters to Zombie type. Does this affect Ritual Summon requirements?",
    a: "Yes. Zombie World changes the type of all monsters on the field and in the GY to Zombie. This can fulfill type requirements. However Ritual Spells that require tributing specific types check the current type which would be Zombie under Zombie World."
  },
  {
    cards: ["continuous effect", "lingering", "difference", "after resolved"],
    q: "What is the difference between a Continuous Effect and a Lingering Effect?",
    a: "A Continuous Effect is always active while the card is face-up on the field and requires no activation. A Lingering Effect is created when an activated effect resolves and continues to apply for a duration like until end of turn. Continuous effects stop when the card leaves the field. Lingering effects persist even after the card that created them leaves the field."
  },
  {
    cards: ["abyss dweller", "lingering", "negated after", "gy effects blocked"],
    q: "Abyss Dweller's effect resolved blocking GY effects. Opponent negates Dweller afterward. Do GY effects work again?",
    a: "No. Dweller's effect created a lingering effect that successfully resolved. Negating Dweller after the fact does not undo a lingering effect that already resolved. GY effects remain blocked for the rest of the turn."
  },
  {
    cards: ["maxx c", "lingering", "called by the grave", "draw stops"],
    q: "Maxx C resolved this turn. Opponent uses Called by the Grave on it. Does the draw effect stop?",
    a: "Yes. Called by the Grave negates the effects of the banished card. This turns off Maxx C's lingering draw effect for the rest of the turn. Opponent can Special Summon without triggering further draws."
  },
  {
    cards: ["dimensional barrier", "lingering", "crossout designator", "restriction removed"],
    q: "Dimensional Barrier called Xyz monsters this turn. Opponent uses Crossout Designator on it. Does the restriction lift?",
    a: "Yes. Negating the source of a lingering effect with Crossout Designator removes the lingering restriction. The Xyz Summon restriction from Dimensional Barrier is lifted."
  },
  {
    cards: ["continuous effect", "cannot be chained", "no activation window"],
    q: "Can players chain to a Continuous Effect activating?",
    a: "No. Continuous Effects do not activate and do not start chains. They are simply always on while the card is face-up. There is no activation window to chain to. You can only chain to activated effects that use the chain."
  },
  {
    cards: ["dark law", "continuous", "banish graveyard", "add hand", "replacement"],
    q: "How does Masked HERO Dark Law's banishing effect work exactly?",
    a: "Dark Law has two continuous effects: 1) Any card sent to the opponent GY is banished instead (replacement effect). 2) Once per turn when the opponent adds a card from Deck to hand Dark Law can banish one card from their hand. The first is a continuous replacement. The second is a mandatory trigger that creates a chain."
  },
  {
    cards: ["dark law", "replacement effect", "cannot respond", "continuous"],
    q: "Can the opponent chain to Dark Law's banishing replacement effect?",
    a: "No. The replacement effect of Dark Law (banishing instead of sending to GY) is a Continuous Effect that acts as a replacement. It does not activate and cannot be chained to. Cards simply go to the banished zone instead of GY automatically."
  },
  {
    cards: ["necrovalley", "graveyard", "cannot be activated", "blocks effects"],
    q: "Necrovalley is active. What GY effects are blocked?",
    a: "Necrovalley prevents all cards in the GY from being targeted by card effects and all effects that would move cards from the GY to other zones. This blocks Monster Reborn, Premature Burial, Call of the Haunted, and any effect that removes or moves cards from the GY."
  },
  {
    cards: ["there can be only one", "type restriction", "send graveyard", "extra"],
    q: "There Can Be Only One resolves. What happens to extra monsters of the same type?",
    a: "When There Can Be Only One resolves each player must send monsters to the GY until they control only 1 monster of each type. The player chooses which monster of each type to keep. This applies continuously and new summons of duplicate types must be sent to the GY immediately."
  },
  {
    cards: ["imperial order", "continuous", "negate spell", "pay lp", "standby"],
    q: "How does Imperial Order work?",
    a: "Imperial Order negates the effects of all Spell cards while it is face-up. During each of your Standby Phases you pay 700 LP or destroy Imperial Order. The LP payment is mandatory. If you cannot or choose not to pay it is destroyed. All Spell effects are negated while it is active."
  },
  {
    cards: ["inspector boarder", "continuous", "prevents effects", "one per turn"],
    q: "Inspector Boarder is on the field. What does it prevent?",
    a: "Inspector Boarder prevents all players from activating monster effects if the corresponding player controls 2 or more monsters of the same type and attribute. While this condition is met no monster effects can be activated. This is a continuous effect that checks the game state constantly."
  },
  {
    cards: ["vanity's emptiness", "special summon", "continuous", "destroyed when"],
    q: "When is Vanity's Emptiness destroyed?",
    a: "Vanity's Emptiness is destroyed when a card is sent from the field or hand to your GY. Because it prevents Special Summons any card going to your GY from field or hand triggers its self-destruction. This includes the GY send from paying a cost."
  },
  {
    cards: ["skill drain", "ignition effect", "continuous", "activates on field", "negated"],
    q: "Skill Drain is active. Can monsters still activate Ignition Effects?",
    a: "Monsters can attempt to activate Ignition Effects but they will resolve negated while Skill Drain is active. Ignition Effects are activated effects that activate while face-up on the field so they are negated by Skill Drain."
  },
  {
    cards: ["skill drain", "unaffected", "cannot negate", "invoked mechaba"],
    q: "Can Skill Drain negate the effects of a monster that is unaffected by Trap cards?",
    a: "No. If a monster is unaffected by Trap card effects Skill Drain which is a Trap cannot negate it. The monster's effects continue to apply normally."
  },
  {
    cards: ["continuous effect", "trigger effect", "difference", "activate chain"],
    q: "What is the difference between a Continuous Effect and a Trigger Effect?",
    a: "A Continuous Effect is always on while the monster is face-up on the field and never activates or uses the chain. A Trigger Effect activates when a specific condition is met and uses the chain. Examples: Dark Law banishing all GY sends is Continuous. Sangan searching when sent to GY is a Trigger Effect."
  },
  {
    cards: ["macro cosmos", "continuous", "replacement", "all graveyard sends"],
    q: "How does Macro Cosmos apply its banishing effect?",
    a: "Macro Cosmos has a continuous replacement effect. Any card that would be sent to the GY is banished face-down instead. This applies to all cards from all sources including costs, effects, and battle. It cannot be chained to because it is a continuous replacement not an activated effect."
  },
  {
    cards: ["kaiser colosseum", "continuous", "opponent cannot summon more"],
    q: "How does Kaiser Colosseum work?",
    a: "While Kaiser Colosseum is face-up the opponent cannot control more monsters than you control. If you control 2 monsters the opponent cannot summon a 3rd. If you control 0 monsters this has no effect. It is a continuous effect that prevents the summon attempt entirely."
  },
  {
    cards: ["cost", "effect", "semicolon", "before after", "psct"],
    q: "How do you identify a cost versus an effect in Yu-Gi-Oh?",
    a: "In modern card text (PSCT), the cost appears before the semicolon and the effect appears after. Example: Discard 1 card; draw 2 cards. Discarding is the cost, drawing is the effect. Costs are paid at activation before the chain resolves. Effects resolve when the chain reaches that card."
  },
  {
    cards: ["cost", "negated", "still paid", "solemn judgment", "ash blossom"],
    q: "If a card is negated does the player still pay the cost?",
    a: "Yes. Costs are paid at activation before anything can respond. If a card or effect is negated the cost has already been paid and is not returned. Example: Solemn Judgment negates Monster Reborn but the player who activated Solemn still pays half LP."
  },
  {
    cards: ["cost", "cannot pay", "cannot activate", "illegal"],
    q: "What happens if a player cannot pay the full activation cost?",
    a: "If a player cannot fully pay the activation cost they cannot activate the card at all. This is an activation requirement check that happens before the card goes on the chain. Example: Cannot activate Pot of Extravagance with fewer than 3 Extra Deck cards."
  },
  {
    cards: ["skill drain", "cost", "leave field", "banish", "tribute", "cannot negate"],
    q: "Can Skill Drain negate an effect whose cost was leaving the field?",
    a: "No. If a monster leaves the field as an activation cost it is no longer on the field when Skill Drain would try to negate it. Skill Drain only negates effects of face-up monsters currently on the field. Examples: Rescue Rabbit banishes itself, Sky Striker Raye tributes itself, Effect Veiler sends itself to GY."
  },
  {
    cards: ["rescue rabbit", "skill drain", "banish cost", "resolve"],
    q: "Skill Drain is active. I Normal Summon Rescue Rabbit and activate its effect banishing itself. Does it resolve?",
    a: "Yes. Rescue Rabbit banishes itself as the activation cost. Since Rabbit is no longer on the field when Skill Drain would negate it, Skill Drain cannot apply. The two Normal Monsters are successfully Special Summoned from the Deck."
  },
  {
    cards: ["sky striker raye", "tribute cost", "skill drain", "resolve"],
    q: "Skill Drain is active. I activate Sky Striker Ace Raye's effect tributing herself. Does it resolve?",
    a: "Yes. Raye tributes herself as the activation cost before Skill Drain can negate anything. Since Raye is no longer on the field when the effect resolves, Skill Drain cannot negate it. The Sky Striker monster is successfully Special Summoned."
  },
  {
    cards: ["macro cosmos", "cost", "send graveyard", "cannot activate", "illegal"],
    q: "Macro Cosmos is active. Can a card that requires sending to the GY as cost be activated?",
    a: "No. If the activation cost explicitly requires sending a card to the Graveyard and Macro Cosmos is replacing all GY sends with banishing, the cost cannot be paid as written. The activation is entirely illegal. Example: Effect Veiler cannot be activated."
  },
  {
    cards: ["macro cosmos", "effect veiler", "discard cost", "graveyard", "illegal"],
    q: "Macro Cosmos is active. Can Effect Veiler be activated?",
    a: "No. Effect Veiler requires sending itself from hand to the Graveyard as its activation cost. Under Macro Cosmos this send would become a banish instead. Since the cost cannot be paid as written the activation is entirely illegal."
  },
  {
    cards: ["macro cosmos", "dark world dealings", "discard effect", "not cost", "legal"],
    q: "Macro Cosmos is active. Can Dark World Dealings be activated?",
    a: "Yes. Dark World Dealings discards as an effect not a cost. The draw and discard happen as the effect resolves. Under Macro Cosmos the discarded card is banished instead of going to the GY. However Dark World monster effects that require being discarded to the GY will not trigger since they are banished."
  },
  {
    cards: ["cost", "discard", "banish", "tribute", "send graveyard", "difference"],
    q: "What is the difference between discarding and sending to the GY as a cost?",
    a: "In modern PSCT, discard means send from hand to GY as a cost. Send to the GY means specifically goes to the GY. Under Macro Cosmos both are banished instead. However modern discard costs do not always specify the GY destination meaning some discard costs can still be paid under Macro Cosmos while others cannot."
  },
  {
    cards: ["tribute", "cost", "token", "valid", "tribute summon"],
    q: "Can Tokens be tributed as costs for card effects?",
    a: "Yes. Tributing a monster as a cost sends it from the field. Tokens can be tributed as costs unless the cost specifically requires the tributed card to reach the GY. Tokens cease to exist when they leave the field and do not go to the GY."
  },
  {
    cards: ["token", "forbidden droplet", "cost", "cannot", "graveyard"],
    q: "Can a Token be used as cost for Forbidden Droplet?",
    a: "No. Forbidden Droplet requires sending the card to the Graveyard as cost. Tokens cannot be sent to the Graveyard because they cease to exist when they leave the field. Tokens cannot be used as Forbidden Droplet cost."
  },
  {
    cards: ["token", "tribute", "deck devastation virus", "valid cost"],
    q: "Can a Token be tributed for Deck Devastation Virus?",
    a: "Yes provided the Token has the required ATK value. Deck Devastation Virus requires tributing a DARK monster with 2000 or more ATK as cost. If the Token qualifies by ATK and type it can be tributed. The Token does not need to reach the GY."
  },
  {
    cards: ["pot of extravagance", "5 cards", "extra deck", "banish 3 or 6", "cost"],
    q: "I have exactly 5 cards in my Extra Deck. Can I activate Pot of Extravagance?",
    a: "Yes but only with the 3 card cost. Pot of Extravagance allows banishing 3 or 6 random cards from the Extra Deck face-down. With only 5 cards you must choose the 3 card option. You cannot attempt the 6 card cost if you have fewer than 6 cards."
  },
  {
    cards: ["branded fusion", "cost", "send materials", "macro cosmos", "effect"],
    q: "Macro Cosmos is active. Does Branded Fusion work?",
    a: "Yes. Sending Fusion Materials for Branded Fusion is an effect not a cost. The materials are banished instead of going to the GY under Macro Cosmos but the Fusion Summon still resolves successfully."
  },
  {
    cards: ["ritual summon", "tribute", "cost", "effect", "dimensional fissure"],
    q: "Dimensional Fissure is active. Can I Ritual Summon?",
    a: "Yes. Tributing monsters for a Ritual Summon is sending them as part of the ritual effect not as a cost. The materials are banished instead of going to the GY under Dimensional Fissure but the Ritual Summon resolves successfully."
  },
  {
    cards: ["red eyes fusion", "restriction", "activation", "ash blossom", "negated"],
    q: "Ash Blossom negates Red-Eyes Fusion. Can I still Normal Summon this turn?",
    a: "No. Red-Eyes Fusion restricts the player from summoning the turn the card is activated. Ash Blossom negates the effect but not the activation. The activation was recognized by the game so the summoning restriction still applies even though the Fusion Summon did not happen."
  },
  {
    cards: ["nadir servant", "restriction", "ash blossom", "negated", "extra deck", "summon"],
    q: "Ash Blossom negates Nadir Servant. Can I still Special Summon from the Extra Deck this turn?",
    a: "Yes. The restriction cannot Special Summon from the Extra Deck is part of Nadir Servant's effect. Since the effect was negated by Ash Blossom the restriction is not applied. This is the opposite of Red-Eyes Fusion because the restriction is in the effect not tied to the activation."
  },
  {
    cards: ["super polymerization", "cost", "discard", "quick play", "chain"],
    q: "Super Polymerization discards as cost. Can opponent chain to Super Poly after the discard?",
    a: "No. Super Polymerization specifically states neither player can activate cards or effects in response to this card's activation. Even after the discard cost is paid no player can chain anything to Super Polymerization."
  },
  {
    cards: ["dark world", "discard cost", "trigger", "effect", "lightning"],
    q: "Dark World Lightning discards a Dark World monster as cost. Does the Dark World monster trigger?",
    a: "No. Dark World monsters trigger when discarded by an opponent's card effect or by the player's card effect. However being discarded as a cost is different from being discarded by an effect. Dark World monsters discarded as costs do not trigger their effects."
  },
  {
    cards: ["twin twisters", "discard cost", "torn scales", "phantom knights", "trigger"],
    q: "Twin Twisters discards Phantom Knights of Torn Scales as cost. Does Torn Scales trigger?",
    a: "Yes. Torn Scales triggers if a card is discarded regardless of whether it was a cost or effect. The condition was met and it triggers in a new chain after Twin Twisters resolves."
  },
  {
    cards: ["cost", "activation requirement", "check before chain", "illegal if cannot pay"],
    q: "When is the activation cost checked?",
    a: "Activation costs are checked and paid at the moment of activation before the card goes on the chain. If the cost cannot be paid the card cannot be activated at all. This is different from effect requirements which can sometimes be checked at resolution."
  },
  {
    cards: ["zeus", "divine arsenal", "detach", "solemn strike", "materials stay graveyard"],
    q: "Zeus detaches 2 materials to activate its effect. Solemn Strike negates it. Where do the materials go?",
    a: "The 2 detached materials remain in the GY. Costs are paid at activation and are not reversed even if the effect is negated. Zeus's activation is negated and Zeus is destroyed but the detached materials stay in the GY."
  },
  {
    cards: ["bujinki amaterasu", "cost", "detach", "xyz material", "effect"],
    q: "If an Xyz Monster's effect requiring detaching material is negated do the detached materials return?",
    a: "No. Detaching material as a cost happens at activation before anything responds. If the effect is negated the materials have already been detached and sent to the GY. They do not return. Costs cannot be reversed."
  },
  {
    cards: ["cost", "once per turn", "already used", "cannot activate again"],
    q: "I used a card's once per turn effect. Can I use it again if the first activation was negated?",
    a: "No. Once per turn restrictions check whether the effect was activated not whether it resolved. Even if the activation was negated the once per turn has been used for that turn. The card cannot activate that effect again this turn."
  },
  {
    cards: ["paleozoic", "trap", "banish", "special summon", "cost"],
    q: "Paleozoic traps banish themselves from the GY to Special Summon. Is this a cost or effect?",
    a: "Banishing the Paleozoic trap from the GY is the activation cost. The Special Summon is the effect. Since the banish happens as a cost it cannot be negated by Ghost Belle because Ghost Belle responds to effects that banish from the GY, not costs."
  },
  {
    cards: ["crossout designator", "cost", "banish from deck", "ash blossom", "cannot chain"],
    q: "Can Ash Blossom respond to Crossout Designator?",
    a: "No. Crossout Designator banishes a card from the Deck face-down as its activation cost. Ash Blossom negates effects that add from Deck to hand, Special Summon from Deck, or send from Deck to GY. Banishing from Deck as a cost does not match any of Ash Blossom's three conditions."
  },
  {
    cards: ["leaves the field", "trigger effect", "when", "activates"],
    q: "When does a leaves the field trigger effect activate?",
    a: "A leaves the field trigger effect activates when the monster moves from the field to the GY, is banished, returned to hand, or returned to Deck. The effect activates in the new location (usually GY) after the monster has left. However some exceptions apply based on HOW the monster left."
  },
  {
    cards: ["leaves the field", "xyz material", "overlay", "does not trigger"],
    q: "Does a monster's leaves the field effect trigger when it becomes an Xyz Material?",
    a: "No. Becoming an Xyz Material is not considered leaving the field. Once a card becomes an Xyz Material it is no longer treated as a card on the field but it has not left the field in the traditional sense. Leaves the field effects do not trigger when a monster becomes Xyz Material."
  },
  {
    cards: ["leaves the field", "return deck", "extra deck", "does not trigger", "2020"],
    q: "Does a monster's leaves the field effect trigger when returned to the Deck or Extra Deck?",
    a: "No. Under the 2020 Master Rules revision, monsters returned to the Main Deck or Extra Deck cannot activate their leaves the field trigger effects unless the card specifically states it triggers when returned to the Deck. Compulsory Evacuation Device returning a monster to hand does NOT trigger leaving the field effects either."
  },
  {
    cards: ["absolute zero", "compulsory evacuation device", "return", "does not trigger"],
    q: "Compulsory Evacuation Device returns Elemental HERO Absolute Zero to the Extra Deck. Does Absolute Zero destroy all opponent monsters?",
    a: "No. Under 2020 Master Rules, monsters returned to the Extra Deck cannot activate leaves the field trigger effects. Absolute Zero's destroy all opponent monsters effect does not trigger."
  },
  {
    cards: ["leaves the field", "banished face-down", "cannot trigger", "evenly matched"],
    q: "Does a monster's leaves the field effect trigger when banished face-down?",
    a: "No. Cards banished face-down cannot activate their leaves the field effects because their text and properties are completely hidden from the game state. Evenly Matched banishing face-down prevents all leaves the field effects."
  },
  {
    cards: ["mirrorjade", "evenly matched", "banish face-down", "end phase", "wipe"],
    q: "Evenly Matched banishes Mirrorjade the Iceblade Dragon face-down. Does Mirrorjade's End Phase wipe trigger?",
    a: "No. Mirrorjade was banished face-down. Cards banished face-down cannot activate leaves the field effects. The End Phase field wipe effect does not trigger."
  },
  {
    cards: ["mirrorjade", "sent graveyard", "effect veiler", "end phase", "wipe", "lingering"],
    q: "Mirrorjade left the field and its End Phase wipe resolved. Can Effect Veiler stop the destruction in the End Phase?",
    a: "No. The End Phase destruction is the application of a lingering effect that already resolved when Mirrorjade left the field. Mirrorjade is not activating a new effect in the End Phase. Effect Veiler cannot stop it."
  },
  {
    cards: ["dante", "change of heart", "link summon", "owner graveyard", "who activates"],
    q: "Player A takes Dante with Change of Heart and uses it as Link Material. Whose GY does Dante go to and who activates its effect?",
    a: "Dante goes to Player B's GY (the original owner's GY). Cards always go to the owner's GY when sent there. Player B activates Dante's trigger effect because it triggered in their GY."
  },
  {
    cards: ["sangan", "sent graveyard", "tribute", "search", "triggers"],
    q: "Sangan is tributed as cost. Does its search effect trigger?",
    a: "Yes. Being tributed as cost sends Sangan from the field to the GY which fulfills its condition. Sangan's mandatory trigger effect activates after the chain resolves."
  },
  {
    cards: ["sangan", "banished", "dd crow", "does not search"],
    q: "Sangan ends up banished instead of going to the GY. Does it search?",
    a: "No. Sangan specifically requires being sent to the Graveyard. If Sangan is banished by any means including D.D. Crow, Macro Cosmos, or Dimensional Fissure its search condition is not met and it does not activate."
  },
  {
    cards: ["relinquished", "equipped monster", "destroyed", "sent graveyard", "field effect"],
    q: "A monster equipped to Relinquished is destroyed. Does the equipped monster trigger its sent from field to GY effect?",
    a: "Yes. Even though the monster was treated as an Equip Spell while equipped to Relinquished, it physically went from the field to the GY when destroyed. Effects that trigger when sent from the field to the GY will activate. However effects requiring the card to leave the field as a monster would not trigger."
  },
  {
    cards: ["token", "destroyed", "leaves field", "trigger", "dark hole"],
    q: "Tokens are destroyed by Dark Hole. Can other cards trigger effects based on a card on the field being destroyed?",
    a: "Yes. Tokens are considered cards on the field and are successfully destroyed before they cease to exist. Effects that trigger when a card on the field is destroyed can be triggered by Token destruction."
  },
  {
    cards: ["premature burial", "return hand", "destroyed", "equip"],
    q: "A monster revived by Premature Burial is returned to hand. Does Premature Burial destroy the monster?",
    a: "No. Premature Burial is destroyed by game mechanics because its equip target is no longer on the field. However it cannot destroy a card that has already returned to the hand. The monster is safe in the hand."
  },
  {
    cards: ["macro cosmos", "leaves field", "banished", "graveyard trigger", "cannot"],
    q: "Macro Cosmos is active. A monster is destroyed. Do its GY trigger effects activate?",
    a: "It depends on the effect text. If the effect says sent to the GY it will not trigger because the monster is banished instead. If the effect says leaves the field it will still trigger because the monster did leave the field even if it went to the banished zone."
  },
  {
    cards: ["inzektor hornet", "equipped", "destroyed", "sent graveyard", "mechanic"],
    q: "Inzektor Hornet is equipped to a monster. The equipped monster is destroyed. Does Hornet trigger its effect?",
    a: "It depends on Hornet's text. If the effect says sent to the GY by a card effect it will NOT trigger because being sent by game mechanics (losing equip target) is not a card effect. Generic if this card is sent to the GY effects will trigger because the destination is still the GY."
  },
  {
    cards: ["synchro monster", "leaves field", "graveyard", "revived", "properly summoned"],
    q: "A Synchro Monster leaves the field and goes to GY. Can its leaves the field effect activate?",
    a: "Yes. Synchro Monsters that were properly Synchro Summoned can activate their leaves the field effects when they go to the GY. A Synchro Monster that was never properly summoned (sent directly from Extra Deck to GY) cannot activate these effects."
  },
  {
    cards: ["link monster", "leaves field", "graveyard", "trigger", "properly summoned"],
    q: "A Link Monster leaves the field to the GY. Does its leaves the field effect trigger?",
    a: "Yes provided it was properly Link Summoned first. Link Monsters that were properly summoned can activate their GY trigger effects when they leave the field."
  },
  {
    cards: ["sp little knight", "banish temporarily", "return end phase", "restriction lingers"],
    q: "S:P Little Knight banishes itself temporarily. When it returns does the direct attack restriction lift?",
    a: "No. The restriction your monsters cannot attack directly this turn is a lingering condition applied to the player when the effect resolved. It persists for the rest of the turn regardless of what happens to S:P Little Knight."
  },
  {
    cards: ["shangri-ira", "zone lock", "destroyed", "unlock immediately"],
    q: "Kashtira Shangri-Ira is destroyed. Do the locked zones immediately unlock?",
    a: "Yes. Shangri-Ira's zone lock is a continuous effect that requires it to be face-up on the field. The moment it leaves the field the zone locks are removed immediately."
  },
  {
    cards: ["fire king", "destroyed", "replaced", "effect activates", "graveyard"],
    q: "A Fire King monster is destroyed. Does its GY effect activate if it was destroyed by the Fire King archetype itself?",
    a: "Yes. Fire King monsters activate their effects when destroyed by a card effect or battle. Being destroyed by a Fire King card effect is still being destroyed by a card effect. The GY trigger activates normally."
  },
  {
    cards: ["yubel", "destroyed", "next form", "special summon", "leaves field"],
    q: "Yubel is destroyed. Does its effect to Special Summon Yubel Terror Incarnate activate?",
    a: "Yes. Yubel has a mandatory trigger effect that activates when it leaves the field by any means other than its own effect. This includes being destroyed by battle or card effects. It Special Summons Yubel Terror Incarnate from hand Deck or GY."
  },
  {
    cards: ["gravekeeper spy", "flip", "defense position", "gravekeeper", "recruit"],
    q: "Gravekeeper's Spy is flipped face-up. When does its flip effect activate?",
    a: "Gravekeeper's Spy is flipped face-up at the Before Damage Calculation sub-step. Its FLIP effect activates at the End of the Damage Step after damage calculation. The FLIP effect Special Summons a Gravekeeper monster with 1500 or less DEF from the Deck."
  },
  {
    cards: ["toadally awesome", "negate", "send graveyard", "add hand", "opponent"],
    q: "Toadally Awesome negates a Spell and adds it to hand. Does the negated Spell count as going to the GY?",
    a: "No. Toadally Awesome sends the negated card to the GY as part of its effect, then adds a Water monster from GY to hand. The negated card goes to the GY first then the add happens. The sequence is negate, send to GY, add from GY to hand."
  },
  {
    cards: ["abyss dweller", "activate effect", "graveyard", "lingering", "already resolved"],
    q: "Abyss Dweller's effect resolved. Opponent negates Dweller later. Do GY effects work now?",
    a: "No. Dweller's effect is a lingering effect that successfully resolved. Negating Dweller after the fact does not undo a resolved lingering effect. GY effects remain negated for the rest of the turn."
  },
  {
    cards: ["borreload dragon", "monster", "takeover", "original owner", "graveyard"],
    q: "Borreload Dragon takes control of an opponent monster and it is destroyed. Whose GY does it go to?",
    a: "It goes to the original owner's GY. Cards always go to the owner's GY regardless of who currently controls them. The original owner's GY effects for that monster would also trigger."
  },
  {
    cards: ["crystalline dragon", "pendulum", "destroyed", "extra deck", "graveyard"],
    q: "A Pendulum Monster in the Extra Deck is destroyed. Where does it go?",
    a: "If a Pendulum Monster is destroyed while in the Extra Deck face-up, it goes to the GY. Pendulum Monsters only go to the Extra Deck when destroyed on the field. Being destroyed in the Extra Deck sends them to the GY normally."
  },
  {
    cards: ["pendulum", "destroyed", "field", "extra deck", "not graveyard"],
    q: "A Pendulum Monster is destroyed on the field. Where does it go?",
    a: "When a Pendulum Monster is destroyed while face-up on the field it goes face-up to the Extra Deck instead of the GY. This is a game mechanic not an effect. However if the Pendulum Monster is sent to the GY as a cost or by a non-destruction effect it goes to the actual GY."
  },
  {
    cards: ["spirit monster", "end phase", "return hand", "mandatory", "leaves field"],
    q: "Spirit Monsters return to hand during End Phase. Does this trigger leaves the field effects?",
    a: "Yes and No. Spirit Monsters return to hand at the End Phase which does count as leaving the field. Any effects that trigger when the Spirit Monster leaves the field will activate. However Spirit Monsters specifically cannot Special Summon themselves back with most revival effects because they were not destroyed."
  },
  {
    cards: ["crystron", "synchro summon", "during opponent turn", "material", "trigger"],
    q: "A monster used as Synchro Material during the opponent turn leaves the field. Do its GY effects trigger?",
    a: "Yes. Being used as Synchro Material sends the monster from the field to the GY. Any trigger effects that activate when sent from the field to the GY will activate normally including during the opponent turn."
  },
  {
    cards: ["graveyard effect", "banished instead", "macro cosmos", "dimensional fissure"],
    q: "Under Dimensional Fissure a monster is destroyed. Its effect says when sent to GY. Does it trigger?",
    a: "No. Dimensional Fissure and Macro Cosmos replace GY sends with banishing. If an effect requires being sent specifically to the GY and the monster is banished instead the condition is not met and the effect does not trigger."
  },
  {
    cards: ["damage step", "what can activate", "allowed", "permitted"],
    q: "What can be activated during the Damage Step?",
    a: "During the Damage Step only these can activate: Counter Traps (Speed 3), effects that directly modify ATK or DEF values, mandatory trigger effects, and cards that specifically state they can activate in the Damage Step. Everything else is illegal during the Damage Step."
  },
  {
    cards: ["damage step", "sub steps", "before calculation", "after calculation", "start", "end"],
    q: "What are the sub-steps of the Damage Step?",
    a: "The Damage Step has 5 sub-steps: 1) Start of Damage Step - face-down attacked monster flips face-up. 2) Before Damage Calculation - ATK/DEF modifiers can activate. 3) Damage Calculation - compare ATK/DEF and apply damage. 4) After Damage Calculation - when destroyed by battle triggers activate. 5) End of Damage Step - destroyed monsters go to GY, FLIP effects activate."
  },
  {
    cards: ["honest", "damage step", "light", "atk boost", "hand trap"],
    q: "Can Honest be activated in the Damage Step?",
    a: "Yes. Honest can be activated in the Damage Step because it directly modifies ATK. When a LIGHT monster attacks or is attacked you can return Honest from hand to give that monster ATK equal to the opponent monster ATK. ATK modification effects are permitted in the Damage Step."
  },
  {
    cards: ["forbidden droplet", "damage step", "cannot", "illegal"],
    q: "Can Forbidden Droplet be activated in the Damage Step?",
    a: "No. Forbidden Droplet halves ATK as part of negating effects but it is not primarily an ATK modification card. It cannot be activated during the Damage Step."
  },
  {
    cards: ["book of moon", "damage step", "cannot"],
    q: "Can Book of Moon be activated in the Damage Step?",
    a: "No. Book of Moon does not directly modify ATK or DEF values. It cannot be activated during the Damage Step."
  },
  {
    cards: ["mirror force", "damage step", "cannot", "battle step"],
    q: "Can Mirror Force be activated in the Damage Step?",
    a: "No. Mirror Force cannot be activated in the Damage Step. It must be activated in the Battle Step after the attack is declared but before entering the Damage Step."
  },
  {
    cards: ["torrential tribute", "damage step", "cannot"],
    q: "Can Torrential Tribute be activated in the Damage Step?",
    a: "No. Torrential Tribute activates when a monster is summoned. It cannot be activated during the Damage Step."
  },
  {
    cards: ["compulsory evacuation device", "damage step", "cannot"],
    q: "Can Compulsory Evacuation Device be activated in the Damage Step?",
    a: "No. Compulsory Evacuation Device does not modify ATK or DEF and is not a Counter Trap. It cannot be activated during the Damage Step."
  },
  {
    cards: ["shrink", "damage step", "atk", "half", "can activate"],
    q: "Can Shrink be activated in the Damage Step?",
    a: "Yes. Shrink halves the ATK of a monster which is a direct ATK modification. ATK and DEF modification effects are permitted in the Damage Step."
  },
  {
    cards: ["rush recklessly", "damage step", "atk boost", "can activate"],
    q: "Can Rush Recklessly be activated in the Damage Step?",
    a: "Yes. Rush Recklessly increases a monster ATK by 700 which is a direct ATK modification. It can be activated during the Damage Step."
  },
  {
    cards: ["forbidden chalice", "damage step", "atk", "negate", "can activate"],
    q: "Can Forbidden Chalice be activated in the Damage Step?",
    a: "Yes. Forbidden Chalice increases ATK by 400 and negates effects. Because it includes a direct ATK modification it is permitted in the Damage Step."
  },
  {
    cards: ["dimensional barrier", "damage step", "cannot"],
    q: "Can Dimensional Barrier be activated in the Damage Step?",
    a: "No. Dimensional Barrier does not modify ATK or DEF and is not a Counter Trap. It cannot be activated during the Damage Step."
  },
  {
    cards: ["solemn strike", "damage step", "counter trap", "can activate", "negate summon"],
    q: "Can Solemn Strike be activated in the Damage Step?",
    a: "Yes. Counter Traps are Spell Speed 3 and are always permitted in the Damage Step. Solemn Strike can negate a monster effect or summon even during the Damage Step."
  },
  {
    cards: ["solemn judgment", "damage step", "counter trap", "can activate"],
    q: "Can Solemn Judgment be activated in the Damage Step?",
    a: "Yes. Counter Traps including Solemn Judgment are always permitted in the Damage Step."
  },
  {
    cards: ["ash blossom", "damage step", "cannot"],
    q: "Can Ash Blossom be activated in the Damage Step?",
    a: "No. Ash Blossom does not modify ATK or DEF values and is not a Counter Trap. It cannot be activated during the Damage Step."
  },
  {
    cards: ["effect veiler", "damage step", "cannot"],
    q: "Can Effect Veiler be activated in the Damage Step?",
    a: "No. Effect Veiler is a Speed 1 Spell Effect that can only be used in the Main Phase. It cannot be activated during the Damage Step for two reasons: it is Speed 1 and it does not modify ATK or DEF."
  },
  {
    cards: ["infinite impermanence", "damage step", "cannot"],
    q: "Can Infinite Impermanence be activated in the Damage Step?",
    a: "No. Infinite Impermanence does not modify ATK or DEF and is not a Counter Trap. It cannot be activated during the Damage Step."
  },
  {
    cards: ["ghost ogre", "damage step", "cannot"],
    q: "Can Ghost Ogre and Snow Rabbit be activated in the Damage Step?",
    a: "No. Ghost Ogre does not modify ATK or DEF values and is not a Counter Trap. It cannot be activated during the Damage Step."
  },
  {
    cards: ["ryko", "lightsworn", "flip effect", "damage step", "when activates"],
    q: "When does Ryko Lightsworn Hunter's FLIP effect activate?",
    a: "Ryko is flipped face-up at the Start of the Damage Step sub-step. Its FLIP effect activates After Damage Calculation at the End of the Damage Step sub-step. These are separate sub-steps."
  },
  {
    cards: ["fossil dyna", "pachycephalo", "flip", "destroy", "special summoned", "when"],
    q: "When does Fossil Dyna Pachycephalo's Flip effect destroy Special Summoned monsters?",
    a: "Fossil Dyna's FLIP effect activates After Damage Calculation at the End of the Damage Step. Its continuous effect prevents new Special Summons but the Flip effect that destroys existing Special Summoned monsters activates at the end of the Damage Step not immediately when flipped."
  },
  {
    cards: ["eater of millions", "face-down", "banish", "start of damage step"],
    q: "Eater of Millions attacks a face-down monster. Can it banish the face-down monster?",
    a: "Yes. Eater of Millions triggers at the Start of the Damage Step before the defending monster is flipped face-up. It can banish the face-down monster without it being revealed."
  },
  {
    cards: ["apollousa", "honest", "damage step", "negate", "atk modification"],
    q: "Apollousa is attacked and opponent activates Honest. Can Apollousa negate it?",
    a: "Yes. Apollousa's negation effect causes her to lose 800 ATK which is an ATK modification. Since her effect modifies ATK she is permitted to activate her negation effect during the Damage Step in response to Honest."
  },
  {
    cards: ["cyber dragon sieger", "damage step", "machine", "atk double"],
    q: "Can Cyber Dragon Sieger activate its effect in the Damage Step?",
    a: "Yes. Cyber Dragon Sieger's effect doubles its ATK and gains ATK equal to the opponent monster ATK when it attacks a Machine monster. This is a direct ATK modification so it is permitted in the Damage Step. Opponents cannot chain non-Counter effects in response."
  },
  {
    cards: ["el shaddoll construct", "avramax", "start damage step", "before calculation"],
    q: "El Shaddoll Construct attacks Mekk-Knight Crusadia Avramax. Which activates first?",
    a: "Construct activates at the Start of the Damage Step. Avramax can only activate During Damage Calculation. Construct resolves first and destroys Avramax before the window for Avramax to activate opens. Avramax never gets to use its effect."
  },
  {
    cards: ["bacon saver", "damage step", "negate attack", "graveyard"],
    q: "Can Bacon Saver negate an attack during the Damage Step?",
    a: "Yes. Bacon Saver's GY effect specifically states it can negate an attack. Cards that specifically state they can be used in the Damage Step are permitted regardless of normal restrictions."
  },
  {
    cards: ["waking the dragon", "damage step", "trap", "when destroyed"],
    q: "Waking the Dragon is destroyed during the Damage Step. Does its effect activate?",
    a: "Yes. Waking the Dragon has a mandatory trigger effect that activates when it is destroyed. Mandatory trigger effects can activate in the Damage Step."
  },
  {
    cards: ["damage step", "flip summon", "replay", "battle step", "cannot"],
    q: "A defending monster is destroyed at the Start of the Damage Step. Does the attacker get a replay?",
    a: "No. Replays can only occur during the Battle Step. Once the game transitions into the Damage Step no replays are possible. The attack simply ends without reaching damage calculation."
  },
  {
    cards: ["damage step", "monster reborn", "destroyed", "marked", "still on field"],
    q: "A monster is determined to be destroyed during Damage Calculation. Can Monster Reborn target it in the GY?",
    a: "No. Monsters determined to be destroyed by battle are marked for destruction but physically remain on the field until the End of Damage Step. They are still on the field not in the GY during the Damage Step, so they cannot be targeted by Monster Reborn yet."
  },
  {
    cards: ["damage calculation", "atk def", "locked", "apollousa", "lower atk"],
    q: "Can Apollousa lower her ATK to activate her negate during Damage Calculation?",
    a: "No. Once Damage Calculation begins ATK and DEF values are locked in for the battle outcome. Apollousa cannot lower her ATK to trigger her effect once Damage Calculation has started."
  },
  {
    cards: ["damage step", "mandatory", "trigger", "always activates"],
    q: "Can mandatory trigger effects always activate in the Damage Step?",
    a: "Yes. Mandatory trigger effects are always permitted in the Damage Step regardless of what they do. Examples include mandatory flip effects, mandatory when destroyed effects, and any effect that says it must activate."
  },
  {
    cards: ["ash blossom", "monster reborn", "graveyard", "special summon"],
    q: "Can Ash Blossom negate Monster Reborn?",
    a: "No. Ash Blossom negates effects that add from Deck to hand, Special Summon from Deck, or send from Deck to GY. Monster Reborn Special Summons from the GY not the Deck. Ash Blossom cannot negate it."
  },
  {
    cards: ["ash blossom", "reinforcement of the army", "search", "warrior"],
    q: "Can Ash Blossom negate Reinforcement of the Army?",
    a: "Yes. Reinforcement of the Army adds a Level 4 or lower Warrior from the Deck to hand. Adding from Deck to hand is one of Ash Blossom's three trigger conditions."
  },
  {
    cards: ["ash blossom", "upstart goblin", "draw", "deck"],
    q: "Can Ash Blossom negate Upstart Goblin?",
    a: "Yes. Upstart Goblin draws 1 card from the Deck. Drawing from the Deck is one of Ash Blossom's three trigger conditions."
  },
  {
    cards: ["ash blossom", "brilliant fusion", "send", "deck", "graveyard"],
    q: "Can Ash Blossom negate Brilliant Fusion?",
    a: "Yes. Brilliant Fusion sends monsters from the Deck to the GY as Fusion Materials. Sending from Deck to GY is one of Ash Blossom's three trigger conditions."
  },
  {
    cards: ["ash blossom", "id", "invoked", "aleister", "search"],
    q: "Can Ash Blossom negate Aleister the Invoker's search effect?",
    a: "Yes. Aleister adds an Invocation or Magical Meltdown from the Deck to hand when Normal Summoned. Adding from Deck to hand triggers Ash Blossom."
  },
  {
    cards: ["ash blossom", "nekroz", "cycle", "ritual", "deck"],
    q: "Can Ash Blossom negate a Nekroz ritual spell that searches from Deck?",
    a: "Yes. Any Nekroz ritual spell that adds a card from the Deck to hand as part of its effect can be negated by Ash Blossom."
  },
  {
    cards: ["ash blossom", "emergency teleport", "special summon", "deck"],
    q: "Can Ash Blossom negate Emergency Teleport?",
    a: "Yes. Emergency Teleport Special Summons a Psychic monster from the Deck. Special Summoning from the Deck is one of Ash Blossom's three trigger conditions."
  },
  {
    cards: ["ash blossom", "world legacy succession", "graveyard", "special summon"],
    q: "Can Ash Blossom negate World Legacy Succession?",
    a: "No. World Legacy Succession Special Summons from the GY not the Deck. Ash Blossom only negates Deck-based Special Summons."
  },
  {
    cards: ["effect veiler", "main phase", "quick effect", "negate"],
    q: "When can Effect Veiler be activated?",
    a: "Effect Veiler can only be activated during the opponent Main Phase in an open game state. It cannot be activated during the Battle Phase, in the Damage Step, or in response to other effect activations. It is a Speed 1 effect."
  },
  {
    cards: ["effect veiler", "quick effect", "battle phase"],
    q: "Can Effect Veiler negate a monster's Quick Effect during the Battle Phase?",
    a: "No. Effect Veiler can only be activated during the opponent Main Phase. It cannot be activated during the Battle Phase regardless of what the opponent does."
  },
  {
    cards: ["effect veiler", "continuous effect", "negate"],
    q: "Can Effect Veiler negate a monster's Continuous Effect?",
    a: "Yes. Effect Veiler negates all effects of the targeted monster including Continuous Effects while the monster remains face-up on the field. However it must be activated in the Main Phase."
  },
  {
    cards: ["ghost ogre", "snow rabbit", "spell", "trap", "activation"],
    q: "Can Ghost Ogre target a Spell or Trap card on activation?",
    a: "No. Ghost Ogre can only be activated when a monster or face-up Spell or Trap on the field activates its effect. It cannot respond to the initial activation of a Spell or Trap from the hand."
  },
  {
    cards: ["ghost ogre", "snow rabbit", "field spell", "activation", "initial"],
    q: "Can Ghost Ogre respond to a Field Spell being activated?",
    a: "No. Ghost Ogre can only target cards that are already face-up on the field and activate an effect. A Field Spell being placed face-up for the first time is not a legal target for Ghost Ogre."
  },
  {
    cards: ["ghost ogre", "snow rabbit", "face-up", "continuous", "effect activates"],
    q: "Can Ghost Ogre destroy a Continuous Spell when its effect activates?",
    a: "Yes. When a face-up Continuous Spell or Trap activates one of its effects, Ghost Ogre can be activated to destroy it. The card must already be face-up on the field and activate an effect for Ghost Ogre to respond."
  },
  {
    cards: ["ghost mourner", "moonlit chill", "special summon", "face-up", "normal summon"],
    q: "Can Ghost Mourner target a Normal Summoned monster?",
    a: "No. Ghost Mourner can only be activated when the opponent Special Summons a monster face-up. It cannot respond to Normal Summons, Flip Summons, or Set monsters."
  },
  {
    cards: ["ghost mourner", "moonlit chill", "extra deck", "negate effect"],
    q: "Ghost Mourner negates an Extra Deck monster's effect on summon. What happens?",
    a: "Ghost Mourner negates all effects of the Special Summoned monster until end of turn and inflicts damage equal to its ATK if it leaves the field. The monster remains on the field but its effects are negated."
  },
  {
    cards: ["ghost belle", "haunted mansion", "graveyard", "banish", "activate"],
    q: "What does Ghost Belle negate?",
    a: "Ghost Belle negates effects that: add a card from the GY to the hand, Special Summon from the GY, or banish a card from the GY. Any effect that interacts with the GY in these three ways can be negated by Ghost Belle."
  },
  {
    cards: ["ghost belle", "monster reborn", "graveyard", "special summon"],
    q: "Can Ghost Belle negate Monster Reborn?",
    a: "Yes. Monster Reborn Special Summons from the GY which is one of Ghost Belle's three trigger conditions."
  },
  {
    cards: ["ghost belle", "called by the grave", "banish", "graveyard"],
    q: "Can Ghost Belle negate Called by the Grave?",
    a: "Yes. Called by the Grave banishes a card from the GY which is one of Ghost Belle's three trigger conditions."
  },
  {
    cards: ["droll lock bird", "draw phase", "cannot activate"],
    q: "Can Droll and Lock Bird be activated during the Draw Phase?",
    a: "No. Droll and Lock Bird specifically states it cannot be activated during the Draw Phase. It must be activated after a card has been added to hand from the Deck but cannot be used in the Draw Phase itself."
  },
  {
    cards: ["droll lock bird", "add to hand", "search", "new chain"],
    q: "When can Droll and Lock Bird be activated?",
    a: "Droll and Lock Bird must be activated in a new chain after a card has successfully been added to the hand from the Deck. It cannot be chained directly to the search effect. It activates after the chain resolves and the card has been added to hand."
  },
  {
    cards: ["droll lock bird", "small world", "chain", "directly"],
    q: "Can Droll and Lock Bird be chained directly to Small World?",
    a: "No. Droll is a Trigger Effect and cannot be chained to a Spell activation. It must be activated in a new chain after Small World resolves and the card is successfully added to hand."
  },
  {
    cards: ["maxx c", "draw", "each special summon", "turn"],
    q: "How does Maxx C work exactly?",
    a: "During either player turn discard Maxx C. For the rest of that turn each time the opponent Special Summons a monster draw 1 card. Each individual Special Summon triggers 1 draw. The effect lasts until end of turn. Multiple copies stack if both resolve."
  },
  {
    cards: ["maxx c", "called by the grave", "negated", "lingering"],
    q: "Maxx C resolved. Opponent uses Called by the Grave targeting Maxx C. Does the draw effect continue?",
    a: "No. Called by the Grave negates the effects of the banished Maxx C including its lingering draw effect. The opponent can Special Summon freely without triggering further draws for the rest of the turn."
  },
  {
    cards: ["nibiru", "primal being", "fifth", "special summon", "main phase"],
    q: "Exactly when can Nibiru be activated?",
    a: "Nibiru can be activated during the opponent Main Phase after they have successfully Special Summoned their 5th or more monster that turn. It cannot be used in the Damage Step. The count includes all Special Summons that turn including ones that were later removed from the field."
  },
  {
    cards: ["nibiru", "solemn strike", "negated", "5th summon", "count"],
    q: "Opponent's 5th Special Summon is negated by Solemn Strike. Does Nibiru still count it?",
    a: "No. A negated summon is treated as if it never happened. It does not count toward the 5 Special Summons needed to activate Nibiru. Only successful Special Summons count."
  },
  {
    cards: ["nibiru", "crossout designator", "negated", "hand", "remains"],
    q: "Nibiru is activated and opponent chains Crossout Designator. What happens?",
    a: "Nibiru resolves negated. It is not destroyed because Crossout Designator negates but does not destroy. Nibiru remains in the player's hand."
  },
  {
    cards: ["infinite impermanence", "column", "set", "hand", "no cards"],
    q: "When does Infinite Impermanence's column negation apply?",
    a: "The column negation only applies when Impermanence was Set face-down on the field and then activated. Activating directly from hand does not grant column negation even if you control no cards."
  },
  {
    cards: ["infinite impermanence", "damage step", "activate"],
    q: "Can Infinite Impermanence be activated in the Damage Step?",
    a: "No. Infinite Impermanence does not modify ATK or DEF values and is not a Counter Trap. It cannot be activated during the Damage Step."
  },
  {
    cards: ["infinite impermanence", "token", "no effect", "negate"],
    q: "Can Infinite Impermanence target a Token?",
    a: "No. Normal Tokens are treated as Non-Effect monsters and do not have effects to negate. Infinite Impermanence cannot legally target a Token."
  },
  {
    cards: ["psy framegear gamma", "monster effect", "no monster", "control"],
    q: "When can PSY-Framegear Gamma be activated?",
    a: "PSY-Framegear Gamma can be activated when the opponent activates a monster effect and you control no monsters. It negates the effect and Special Summons itself and PSY-Frame Driver from hand or Deck. You must control no monsters at activation."
  },
  {
    cards: ["psy framegear gamma", "ash blossom", "negate", "hand"],
    q: "Can PSY-Framegear Gamma negate Ash Blossom after it is sent to the GY as cost?",
    a: "Yes. Gamma responds to the activation of a monster effect. Even though Ash Blossom is now in the GY after being discarded as cost, Gamma can legally negate the activation and destroy Ash Blossom in the GY."
  },
  {
    cards: ["called by the grave", "hand trap", "negate", "same name"],
    q: "Called by the Grave banishes Ash Blossom from opponent GY. Can opponent still activate Ash Blossom from hand?",
    a: "No. Called by the Grave prevents the opponent from activating monster effects with the same name as the banished card for the rest of the turn. The opponent cannot activate any Ash Blossom from hand for the rest of that turn."
  },
  {
    cards: ["called by the grave", "tokens", "cannot banish", "token graveyard"],
    q: "Can Called by the Grave target a Token in the GY?",
    a: "No. Tokens cannot exist in the GY. They cease to exist when they leave the field. There are no Tokens in the GY to target with Called by the Grave."
  },
  {
    cards: ["crossout designator", "banish", "copy", "negate hand trap"],
    q: "How does Crossout Designator work against hand traps?",
    a: "Declare a card name. If you have a copy of that card in your Deck banish it face-down and negate all effects of cards with that name until end of turn. This prevents hand traps like Ash Blossom, Nibiru, and Maxx C from being activated for the rest of the turn."
  },
  {
    cards: ["crossout designator", "ash blossom", "copy in deck", "required"],
    q: "Can Crossout Designator be activated without having a copy of the declared card in your Deck?",
    a: "No. Crossout Designator requires you to banish a copy of the declared card from your own Deck face-down. If you do not have that card in your Deck you cannot activate Crossout Designator declaring that name."
  },
  {
    cards: ["hanko token", "d.d. crow", "activate", "graveyard", "banish"],
    q: "When can D.D. Crow be activated?",
    a: "D.D. Crow can be activated during either player turn when there is a card in the GY to target. You discard it and banish 1 card from either GY. It is a Speed 2 Quick Effect that can be chained to any Speed 1 or 2 effect."
  },
  {
    cards: ["dd crow", "chain", "cost", "enemy controller", "sangan"],
    q: "D.D. Crow chains to Enemy Controller and banishes Sangan that was tributed as cost. Does Sangan search?",
    a: "No. Sangan was originally sent to the GY as the tribute cost for Enemy Controller. D.D. Crow then banished Sangan from the GY during the chain. Since Sangan ended up banished rather than in the GY its search condition was never met. Sangan does not activate."
  },
  {
    cards: ["effect veiler", "cannot activate", "open game state", "speed 1"],
    q: "Why can Effect Veiler only be used in Main Phase?",
    a: "Effect Veiler is a Spell Effect with Spell Speed 1. Speed 1 effects can only be activated in an open game state. The Main Phase is the only phase where an open game state regularly occurs during the opponent turn. Outside the Main Phase there is no open game state for Speed 1 effects."
  },
  {
    cards: ["ghost ogre", "cannot destroy", "cost", "chain link 1"],
    q: "Ghost Ogre destroys a monster. Can the monster still pay costs or activate effects?",
    a: "Ghost Ogre can only be activated when the card activates an effect. The effect of Ghost Ogre destroys the card after the chain resolves. Costs have already been paid at activation. The target's effect resolves negated if Ghost Ogre destroyed the card."
  },
  {
    cards: ["rescue rabbit", "skill drain", "banish", "cost", "normal monster", "special summon deck"],
    q: "Skill Drain is active. Player Normal Summons Rescue Rabbit and activates its effect banishing itself. Does it resolve?",
    a: "Yes. Rescue Rabbit banishes itself as the activation cost before Skill Drain can negate anything. Since Rescue Rabbit is no longer on the field when the effect resolves, Skill Drain cannot negate it. Skill Drain only negates effects of face-up monsters currently on the field. The two Normal Monsters are successfully Special Summoned from the Deck. Same mechanic as Sky Striker Raye."
  },
  {
    cards: ["cyber dragon", "contact fusion", "machine", "dark law"],
    q: "Can I contact fuse Cyber Dragon with opponent machine monsters while Dark Law is on the field?",
    a: "Yes. Cyber Dragon can contact fuse with opponent machine monsters regardless of Masked HERO Dark Law. Contact fusion uses monsters as materials - they are not sent to the GY as a cost. Dark Law only affects cards being sent to the GY. Since contact fusion materials are not sent to the GY Dark Law does not interfere. The resulting Chimeratech Fortress Dragon is special summoned normally."
  },
  {
    cards: ["cyber dragon", "chimeratech", "fortress", "machine", "contact"],
    q: "How does Cyber Dragon contact fusion work?",
    a: "Cyber Dragon can contact fuse during the Main Phase by sending itself and any number of Machine monsters from either field to the GY as materials. No Polymerization needed. The materials go to the GY as part of the fusion process not as a cost. Chimeratech Fortress Dragon gets 1000 ATK for each material used. Dark Law does not stop this because the materials are used for the summon not discarded as a cost."
  },
  {
    cards: ["cyberdark realm", "mystical space typhoon", "search"],
    q: "I activate Cyberdark Realm, opponent chains MST and destroys it, do I search?",
    a: "No. Cyberdark Realm is a Continuous Spell. Continuous Spells require the card to remain on the field to resolve their effects. Since MST destroyed Realm before it resolved, the search effect disappears. This is different from Normal Spells which resolve even if destroyed on the chain."
  },
  {
    cards: ["dark hole", "sky striker", "raye", "zero", "tribute", "chain"],
    q: "Opponent activates Dark Hole, I chain Sky Striker Ace Zero to tribute and special summon from deck, what resolves?",
    a: "Sky Striker Ace Zero resolves first since it was Chain Link 2. Zero tributes Raye as cost and special summons a Sky Striker from deck. Then Dark Hole resolves and destroys all monsters on the field including the Sky Striker that was just summoned. The order is: Zero resolves bringing out a monster, then Dark Hole destroys everything."
  },
  {
    cards: ["skill drain", "sky striker", "raye", "tribute", "activate"],
    q: "Skill Drain is face up, can I activate Sky Striker Ace Raye and resolve?",
    a: "Yes. You can activate Raye and her effect will resolve. Tributing Raye is the activation cost and is paid before Skill Drain can negate anything. Since Raye is no longer on the field when the effect resolves, Skill Drain cannot negate it. Skill Drain only negates effects of face-up monsters on the field, and Raye is already gone."
  },
  {
    cards: ["chimeratech rampage", "metamorphosis", "destroyed", "special summon back"],
    q: "I special summoned Chimeratech Rampage Dragon using Metamorphosis and it got destroyed, can I special summon it back?",
    a: "No. Chimeratech Rampage Dragon was not properly Fusion Summoned. Metamorphosis is not a Fusion Summon - it transforms one monster into another. Since Rampage was never properly Fusion Summoned, it cannot be revived from the GY or banished zone using Monster Reborn, Fusion Recovery, or similar effects. Proper summon requirement not met."
  },
  {
    cards: ["nebra disk", "chronomaly", "search", "special summon", "same turn"],
    q: "Can Nebra Disk use both its search effect and its GY special summon effect in the same turn?",
    a: "No. Chronomaly Nebra Disk has a once per turn restriction shared between both its effects. You cannot use the effect to add a Chronomaly monster to hand and also use the effect to special summon itself from the GY in the same turn."
  },
  {
    cards: ["cyber dragon core", "search", "cybernetic", "special summon", "same turn"],
    q: "Can Cyber Dragon Core use both its search effect and its special summon effect in the same turn?",
    a: "No. Only one of Core's effects can be used per turn. You cannot search a Cybernetic Spell/Trap and also special summon a Cyber Dragon from deck in the same turn. Core still counts as Cyber Dragon while on the field and in the GY even after using one effect."
  },
  {
    cards: ["artifact ignition", "full", "spell trap zone", "occupied", "activate"],
    q: "If all my Spell and Trap Zones are full can I activate Artifact Ignition?",
    a: "You can activate it only if you target one of your own Spell/Trap Zone cards to destroy. You cannot target your opponent's cards if your zones are full. You also cannot target a Field Spell in the Field Zone or a Pendulum card in the Pendulum Zone."
  },
  {
    cards: ["masked hero goka", "de-fusion", "mask change", "return"],
    q: "If Masked HERO Goka was summoned by Mask Change can it be targeted by De-Fusion?",
    a: "Yes. De-Fusion will return Goka to the Extra Deck. However no materials will be special summoned because Mask Change does not use fusion materials - it transforms the monster directly. De-Fusion only returns materials if the Fusion Monster was properly Fusion Summoned with materials."
  },
  {
    cards: ["elemental hero core", "destroyed", "battle", "end of battle phase", "effect"],
    q: "If Elemental HERO Core is destroyed in battle can its effect to destroy a monster activate?",
    a: "No. Core must be on the field to activate its end of Battle Phase effect. Since Core is sent to the GY when destroyed in battle it is no longer on the field and cannot activate its effect."
  },
  {
    cards: ["elemental hero core", "magic cylinder", "negated", "attack negated"],
    q: "If Core's attack is negated by Magic Cylinder can it still use its end of Battle Phase effect?",
    a: "No. Core's effect requires damage calculation to occur. Magic Cylinder negates the attack before damage calculation happens so the condition for Core's effect is never met and it cannot activate."
  },
  {
    cards: ["dark law", "reinforcement of the army", "one card", "hand", "banish"],
    q: "Opponent has one card in hand and activates Reinforcement of the Army, does Dark Law banish that card?",
    a: "Yes. Masked HERO Dark Law banishes one card from the opponent hand whenever they add a card from their deck to their hand. This triggers even if there is only one card in hand. The opponent adds the warrior from deck then Dark Law banishes one card from their hand."
  },
  {
    cards: ["dark law", "man eater bug", "flip", "destroy", "banished", "graveyard"],
    q: "Dark Law attacks face-down Man Eater Bug, bug destroys Dark Law. Is the bug banished?",
    a: "No. Once Dark Law is destroyed its continuous banish replacement effect no longer applies. Man Eater Bug is sent to the Graveyard normally. The replacement effect requires Dark Law to be face-up on the field at the moment the card would go to the GY."
  },
  {
    cards: ["dark law", "same atk", "double ko", "both destroyed", "banished"],
    q: "Dark Law battles a monster with equal ATK and both are destroyed. Is the opponent monster banished?",
    a: "No. When both monsters are destroyed simultaneously in battle Dark Law is no longer on the field when the replacement effect would apply. The opponent monster is sent to the Graveyard normally. Dark Law must be face-up on the field for its banish effect to work."
  },
  {
    cards: ["crimson blader", "same atk", "both destroyed", "level 5", "prevent summon"],
    q: "Crimson Blader battles a monster with equal ATK and both are destroyed. Does its effect activate?",
    a: "No. Crimson Blader's effect activates on the field at the end of the Damage Step. If Crimson Blader is destroyed during damage calculation it is sent to the GY and is no longer on the field, so its effect cannot activate."
  },
  {
    cards: ["kycoo", "karma cut", "banish", "graveyard"],
    q: "Kycoo the Ghost Destroyer prevents banishing from GY. Can opponent activate Karma Cut?",
    a: "Yes. Karma Cut can still be activated and will still banish the targeted monster from the field. However due to Kycoo's effect the part of Karma Cut that banishes cards with the same name from the GY will not apply. The targeted monster is still banished but the GY cleanup does not happen."
  },
  {
    cards: ["dzw", "chimera clad", "two copies", "attack twice", "number c39"],
    q: "Can you equip two copies of DZW Chimera Clad to the same Number C39 monster?",
    a: "Yes, you can equip multiple copies of DZW Chimera Clad to the same monster. However even with two copies equipped the monster can only perform one additional attack per Battle Phase. Multiple copies do not stack the additional attack - it behaves the same as having one copy."
  },
  {
    cards: ["sonic warrior", "star changer", "level", "atk boost", "graveyard"],
    q: "If Star Changer increases a Level 2 monster to Level 3 in the chain after Sonic Warrior, does it get the ATK boost?",
    a: "No. Sonic Warrior's effect checks the Level of monsters when it resolves. A monster whose Level was increased to 3 does not receive the ATK boost. However monsters whose Level was reduced to 2 or lower do receive the boost since they qualify when the effect resolves."
  },
  {
    cards: ["ghostrick vanish", "protection", "later that turn", "appears"],
    q: "Does Ghostrick Vanish protection apply to Ghostrick cards that appear later the same turn?",
    a: "Yes. Ghostrick Vanish's protection applies for the entire turn not just to cards present when it resolved. Ghostrick cards and face-down monsters that appear later in the same turn also gain the protection."
  },
  {
    cards: ["ghostrick scare", "face-down", "non-ghostrick", "target"],
    q: "Can Ghostrick Scare target face-down monsters that are not Ghostricks?",
    a: "Yes. Ghostrick Scare can target any face-down monster. However for non-Ghostrick face-down monsters only the effect that flips them face-up applies. They will not be flipped back face-down and no opponent monsters will be flipped face-down as a result."
  },
  {
    cards: ["rank up magic", "limited barians force", "bujintei susanowo", "bujincarnation"],
    q: "Can Rank-Up-Magic Limited Barians Force target Bujintei Susanowo summoned by Bujincarnation?",
    a: "Yes it can be activated. However due to Bujincarnation's summoning restriction you may only Xyz Summon a Beast, Beast-Warrior, or Winged-Beast type Xyz Monster as the result. The restriction from Bujincarnation carries over."
  },
  {
    cards: ["pixie ring", "wildheart", "unaffected", "trap", "attack"],
    q: "If Pixie Ring forces attacking the lowest ATK monster can Elemental HERO Wildheart ignore it?",
    a: "Yes. Elemental HERO Wildheart is unaffected by Trap cards. Pixie Ring is a Trap card so Wildheart can ignore its restriction and attack whichever monster you choose regardless of ATK."
  },
  {
    cards: ["gagaga cowboy", "divine dragon knight felgrand", "atk reduce", "protected"],
    q: "Gagaga Cowboy tries to reduce opponent monster ATK but it is protected by Divine Dragon Knight Felgrand. What happens?",
    a: "Only the part of Cowboy's effect that increases its own ATK by 1000 applies. The part that reduces the opponent monster ATK by 500 does not apply because the monster is protected by Felgrand. Effects that cannot apply are simply ignored while effects that can apply still resolve."
  },
  {
    cards: ["queen of thorns", "dna surgery", "plant", "summon cost", "lp"],
    q: "DNA Surgery makes all monsters Plant-type. Does Queen of Thorns still require LP payment to summon non-Plant monsters from hand?",
    a: "Yes. Even though DNA Surgery treats all monsters as Plant-type while on the field, Queen of Thorns checks the original type printed on the card when determining the summoning cost. Non-Plant monsters from hand still require 1000 LP to summon."
  },
  {
    cards: ["dragonecro nethersoul", "destroyed", "battle", "atk reduce", "token"],
    q: "If Dragonecro Nethersoul Dragon is destroyed in battle does its effect still activate?",
    a: "Yes. Dragonecro Nethersoul Dragon's effect activates in the Graveyard at the end of the Damage Step even when destroyed in battle. It reduces the ATK of the monster that destroyed it and special summons a Dark token. The GY activation allows it to work even after being destroyed."
  },
  {
    cards: ["droll", "lock bird", "dark law", "masked hero"],
    q: "Can Droll and Lock Bird be activated while Masked HERO Dark Law is on the field?",
    a: "No. Droll and Lock Bird cannot be activated while Masked HERO Dark Law is face-up on the field. Droll requires discarding itself to the GY as an activation cost. Dark Law replaces all cards that would be sent to the GY with banishing instead. Since Droll cannot be sent to the GY, the activation cost cannot be paid, so Droll and Lock Bird cannot be activated at all."
  },
  {
    cards: ["ash blossom", "monster reborn"],
    q: "Can Ash Blossom negate Monster Reborn?",
    a: "No. Ash Blossom and Joyous Spring negates effects that: 1) Add from Deck to hand, 2) Special Summon from Deck, or 3) Send from Deck to GY. Monster Reborn special summons from the GY not the Deck, so Ash Blossom cannot negate it."
  },
  {
    cards: ["ash blossom", "pot of desires"],
    q: "Can Ash Blossom negate Pot of Desires?",
    a: "Yes. Pot of Desires banishes 10 cards from Deck face-down then draws 2 cards from the Deck. Drawing from the Deck is one of Ash Blossom effects categories, so Ash Blossom can negate Pot of Desires."
  },
  {
    cards: ["ash blossom", "called by the grave"],
    q: "Can Ash Blossom negate Called by the Grave?",
    a: "No. Called by the Grave banishes from the GY, not the Deck. Ash Blossom only negates effects that interact with the Deck. Called by the Grave does not add from Deck, summon from Deck, or send from Deck to GY."
  },
  {
    cards: ["ash blossom", "foolish burial"],
    q: "Can Ash Blossom negate Foolish Burial?",
    a: "Yes. Foolish Burial sends 1 monster from the Deck to the GY. Sending from Deck to GY is one of Ash Blossom negation categories."
  },
  {
    cards: ["mst", "mystical space typhoon", "monster reborn", "normal spell"],
    q: "If I chain MST to destroy Monster Reborn does it stop the summon?",
    a: "No. Chaining MST to destroy Monster Reborn does NOT stop it. Monster Reborn is a Normal Spell. Normal Spells do not need to remain on the field to resolve their effect. MST only destroys the card - it does not negate the effect. Monster Reborn will still resolve and the monster will be summoned. To stop Monster Reborn you need a Counter Trap like Solemn Judgment or Solemn Strike."
  },
  {
    cards: ["effect veiler", "damage step"],
    q: "Can Effect Veiler be activated in the Damage Step?",
    a: "No. Effect Veiler is a Speed 1 effect that can only be activated in the Main Phase during an open game state. It cannot be activated in the Damage Step, Battle Step, or in response to other effects activating."
  },
  {
    cards: ["effect veiler", "quick effect"],
    q: "Can Effect Veiler negate a Quick Effect?",
    a: "No. Effect Veiler can only be activated during the opponent Main Phase. It cannot be activated in response to a Quick Effect activation during the Battle Phase or outside the Main Phase. Effect Veiler is a Speed 1 Spell Effect that can only be used in an open game state during the Main Phase."
  },
  {
    cards: ["infinite impermanence", "hand"],
    q: "Can Infinite Impermanence be activated from hand with no cards on my field?",
    a: "Yes. When you control no cards and activate Infinite Impermanence from hand, it also negates all Spell and Trap effects in the same column as where it was placed for the rest of the turn. This column negation is in addition to negating the targeted monster effect."
  },
  {
    cards: ["nibiru", "primal being", "fifth summon"],
    q: "When can Nibiru the Primal Being be activated?",
    a: "Nibiru can be activated after the opponent Special Summons their 5th or more monster in a single turn during the Main Phase. You tribute all monsters on the field and Special Summon Nibiru from hand. The count resets each turn. Nibiru cannot be activated in the Damage Step."
  },
  {
    cards: ["called by the grave", "ash blossom", "hand trap"],
    q: "Can Called by the Grave negate Ash Blossom in hand?",
    a: "Yes. Called by the Grave banishes a monster from the opponent GY and until end of turn negates the effects of all monsters with that name the opponent controls and prevents their effects from activating. If Ash Blossom is in the GY you can banish it to stop the opponent from activating any Ash Blossom from hand for the rest of the turn."
  },
  {
    cards: ["dark law", "any card", "graveyard", "cost"],
    q: "Can you activate cards that require sending to the GY as a cost while Dark Law is on the field?",
    a: "No. Masked HERO Dark Law replaces all sends to the GY with banishing. Any card that requires sending to the GY as an activation cost cannot be activated because the cost cannot be paid properly. Examples: Droll and Lock Bird, Ghost Ogre and Snow Rabbit, and any hand trap that discards to GY."
  },
  {
    cards: ["ghost ogre", "field spell", "continuous"],
    q: "Can Ghost Ogre and Snow Rabbit destroy a Continuous Spell?",
    a: "Yes. Ghost Ogre can destroy any monster on the field or Spell/Trap card when its effect activates. Continuous Spells that activate effects can be targeted. However Ghost Ogre can only be used when an effect activates - it cannot destroy a Continuous Spell that simply has a passive always-on effect with no activation."
  },
  {
    cards: ["maxx c", "special summon"],
    q: "How does Maxx C work?",
    a: "During either player turn, discard Maxx C. For the rest of this turn, each time the opponent Special Summons a monster draw 1 card. Maxx C effect stays active until end of turn. Each individual Special Summon triggers 1 draw. If opponent Special Summons 5 monsters you draw 5 cards."
  },
  {
    cards: ["skill drain", "face-up", "field effect"],
    q: "Does Skill Drain negate effects that activate in the GY?",
    a: "No. Skill Drain only negates the effects of face-up monsters on the field. Effects that activate in the GY, hand, or while banished are NOT negated by Skill Drain. Only effects that are active while the monster is face-up on the field are negated."
  },
  {
    cards: ["solemn judgment", "special summon", "extra deck", "negate summon counter trap"],
    q: "Can Solemn Judgment negate a Special Summon from the Extra Deck?",
    a: "Yes. Solemn Judgment is a Counter Trap that can negate the activation of any monster summon including Special Summons from Extra Deck, Normal Summons, and Ritual Summons. Pay half your LP. The summoned monster is sent to the GY and is treated as if it was never summoned."
  },
  {
    cards: ["book of moon", "damage step"],
    q: "Can Book of Moon be activated in the Damage Step?",
    a: "No. Book of Moon is a Quick-Play Spell that is Speed 2. However it does not modify ATK or DEF values directly, so it cannot be activated during the Damage Step. It can only be activated during the Main Phase or Battle Phase outside of the Damage Step."
  },
  {
    cards: ["mirror force", "damage step"],
    q: "Can Mirror Force be activated in the Damage Step?",
    a: "No. Mirror Force is a Normal Trap that destroys attacking monsters. It cannot be activated in the Damage Step. Mirror Force is activated at the start of the Damage Step before damage calculation is not possible - it must be activated in the Battle Step after the attack is declared."
  },
  {
    cards: ["torrential tribute", "damage step"],
    q: "Can Torrential Tribute be activated in the Damage Step?",
    a: "No. Torrential Tribute cannot be activated in the Damage Step. It can only be activated when a monster is summoned during the Main Phase or from other summon windows outside the Damage Step."
  },
  {
    cards: ["forbidden droplet", "negate", "effect"],
    q: "How does Forbidden Droplet work?",
    a: "Send any number of cards from hand or field to GY. Target that many effect monsters opponent controls. Until end of turn those monsters ATK is halved and their effects are negated. Forbidden Droplet cannot be responded to by the targeted monsters or monsters with the same original type as sent cards. This includes Quick Effects."
  },
  {
    cards: ["lightning storm", "set cards"],
    q: "Can Lightning Storm be activated if I control face-up cards?",
    a: "No. Lightning Storm can only be activated if you control no face-up cards. Even one face-up card on your field prevents its activation. Set cards do not count as face-up so they do not prevent Lightning Storm activation."
  },
  {
    cards: ["compulsory evacuation device", "xyz", "material"],
    q: "Can Compulsory Evacuation Device return an Xyz Monster to the Extra Deck?",
    a: "Yes. Compulsory Evacuation Device returns a monster on the field to the hand. If the target is an Xyz Monster it returns to the Extra Deck face-up instead of the hand since Xyz Monsters go to the Extra Deck. All Xyz Materials are sent to the GY when the Xyz Monster leaves the field."
  },
  {
    cards: ["dimensional barrier", "fusion", "synchro", "xyz", "ritual", "pendulum"],
    q: "How does Dimensional Barrier work?",
    a: "During either player turn declare one type: Ritual, Fusion, Synchro, Xyz, or Pendulum. Until end of turn neither player can Special Summon monsters of that type, and if any monster of that type is on the field its effects are negated. This prevents Extra Deck summons of the declared type completely."
  },
  {
    cards: ["harpie feather duster", "set", "face-down"],
    q: "Does Harpie Feather Duster destroy set Spell and Trap cards?",
    a: "Yes. Harpie Feather Duster destroys all Spell and Trap cards the opponent controls including both face-up and face-down Set cards. The opponent cannot chain the Set cards that are being destroyed since they are being destroyed simultaneously."
  },
  {
    cards: ["chain", "link", "respond", "quick effect"],
    q: "Can I activate a Quick Effect in response to my own card?",
    a: "Yes. After you activate a card or effect both players have the opportunity to respond. You can chain your own Quick Effects or your opponent can respond. Once both players pass priority consecutively the chain resolves."
  },
  {
    cards: ["segoc", "same time", "simultaneous", "trigger"],
    q: "Multiple effects triggered at the same time - how do you resolve?",
    a: "SEGOC: Simultaneous Effects Go On Chain. When multiple trigger effects activate at the same time from the same event, Turn Player places their effects on the chain first in any order they choose, then Non-Turn Player places theirs. The chain then resolves Last In First Out. Mandatory effects must be placed before optional ones."
  },
  {
    cards: ["xyz", "material", "target", "effect"],
    q: "Can card effects target Xyz Materials?",
    a: "No. Xyz Materials are not on the field - they are attached to the Xyz Monster. Most card effects cannot target or affect Xyz Materials directly. When the Xyz Monster leaves the field all remaining materials are sent to the GY. Detaching a material as a cost sends it to the GY."
  },
  {
    cards: ["pendulum", "destroyed", "extra deck", "graveyard"],
    q: "Where do Pendulum Monsters go when destroyed on the field?",
    a: "When a Pendulum Monster is destroyed while face-up on the field it goes face-up to the Extra Deck instead of the GY. This is a game mechanic not an effect so it cannot be chained to or negated by most effects. If the Pendulum Monster is sent to the GY by a non-destruction effect it goes to the actual GY."
  },
  {
    cards: ["bench", "weakness", "spread damage"],
    q: "Does Weakness apply to Bench damage?",
    a: "No. Bench damage never receives Weakness or Resistance modifications. When an attack deals damage to Benched Pokemon that damage is always the stated amount regardless of type matchup. This applies to all spread damage effects and snipe attacks."
  },
  {
    cards: ["rare candy", "stage 2", "basic"],
    q: "Can I use Rare Candy to evolve a Basic Pokemon I just played?",
    a: "No. Rare Candy allows evolving a Basic directly to its Stage 2 but the Basic must have been on the Bench before your current turn. A Basic placed on the Bench this turn cannot be evolved with Rare Candy until your next turn."
  },
  {
    cards: ["retreat", "special condition", "status"],
    q: "Does retreating cure Special Conditions?",
    a: "Yes. When a Pokemon retreats by paying its Retreat Cost all Special Conditions on that Pokemon are immediately cured. This includes Poison, Burn, Paralysis, Sleep, and Confusion. The newly Active Pokemon coming from Bench is unaffected."
  },
  {
    cards: ["vstar", "gx", "once per game"],
    q: "Can I use multiple VSTAR Powers in one game if I have multiple VSTAR Pokemon?",
    a: "No. Each player may only use one VSTAR Power per game total regardless of how many VSTAR Pokemon they have in play. When you use a VSTAR Power flip your VSTAR Marker face-down. Once flipped no more VSTAR Powers can be used by that player."
  },
  {
    cards: ["paralyzed", "asleep", "confused", "status"],
    q: "What is the strongest Special Condition?",
    a: "Paralysis is the strongest. Paralyzed Pokemon cannot attack or retreat for the entire controller turn. It is automatically cured at end of the Paralyzed Pokemon controller next turn. Sleep requires a coin flip to cure. Confusion forces a coin flip when attacking. Poison does 10 damage between turns."
  },
  {
    cards: ["deathtouch", "trample", "damage assignment"],
    q: "How does Deathtouch interact with Trample?",
    a: "With both Deathtouch and Trample, only 1 point of damage needs to be assigned to each blocker since any damage from a Deathtouch source is lethal. The remaining damage tramples through to the defending player. Example: 5/5 Deathtouch Trample attacking into a 4/4 blocker assigns 1 to blocker and 4 tramples through."
  },
  {
    cards: ["hexproof", "aura", "equip", "enchant"],
    q: "Can I attach an Aura or Equipment to my own Hexproof creature?",
    a: "Yes. Hexproof only prevents opponents from targeting the permanent. You can still target your own Hexproof creatures with your own Auras, Equipment, and spells. Your opponent cannot target it with removal or their own Auras."
  },
  {
    cards: ["indestructible", "exile", "sacrifice", "toughness"],
    q: "How do you kill an Indestructible creature?",
    a: "Indestructible prevents destruction from damage and destroy effects. Ways to remove it: Exile it, Sacrifice it, return it to hand or library, reduce toughness to 0 or less via minus effects (0 toughness is a state-based action not destruction), or Phase it out."
  },
  {
    cards: ["cascade", "free cast", "stack"],
    q: "Does the Cascade spell resolve before or after the cascaded spell?",
    a: "The cascaded spell resolves FIRST. When Cascade triggers you exile cards until finding a castable spell and cast it for free. That spell goes on the stack above the Cascade spell. The cascaded spell resolves first, then the original Cascade spell resolves."
  },
  {
    cards: ["commander", "tax", "cost", "command zone"],
    q: "Does the Commander Tax apply when cast from hand or graveyard?",
    a: "No. The Commander Tax only increases when casting from the Command Zone. Casting your Commander from hand or graveyard does not increase the tax and does not count as a cast from the Command Zone for tax purposes. The tax accumulates separately only for Command Zone casts."
  }
]}};

var CARD_RULINGS = {
ygo: [

  {
    cards: ["ultimate falcon", "raidraptor", "underworld goddess", "link material", "unaffected"],
    q: "Can Underworld Goddess use an unaffected Ultimate Falcon as Link Material?",
    a: "Yes. Underworld Goddess allowing you to use 1 opponent monster as Link Material is an unclassified condition that modifies Link Summoning mechanics. It is not an activated or continuous card effect, so it completely bypasses unaffected by card effects protection."
  },
  {
    cards: ["evenly matched", "nibiru token", "token", "banish face-down"],
    q: "Can a Nibiru Token be banished face-down by Evenly Matched?",
    a: "No. Tokens cannot be banished face-down. Because Evenly Matched specifically forces cards to be banished face-down, Player A is legally forced to keep the Token on the field and banish their other cards instead."
  },
  {
    cards: ["rivalry of warlords", "face-down", "tribute set", "dragon", "zombie"],
    q: "Rivalry of Warlords is active. Can I tribute my Zombie to Tribute Set a Dragon face-down?",
    a: "Yes. Face-down monsters do not possess a Type or Attribute while on the field. Because the monster is being placed face-down, Rivalry of Warlords does not restrict the Summoning attempt."
  },
  {
    cards: ["gozen match", "kaiju", "light", "dark", "tribute"],
    q: "Gozen Match is active. Can opponent Special Summon a DARK Kaiju to my field by Tributing my LIGHT monster?",
    a: "No. Under Gozen Match you cannot attempt to summon a monster of a conflicting Attribute even if the conflicting monster would leave the field as the cost to perform the summon."
  },
  {
    cards: ["skill drain", "blue eyes alternative", "name", "condition", "unclassified"],
    q: "Skill Drain is active. Is Blue-Eyes Alternative White Dragon's name still Blue-Eyes White Dragon?",
    a: "Yes. The text stating this card's name becomes Blue-Eyes White Dragon while on the field or in the GY is an Unclassified Effect (Condition) which cannot be negated by Skill Drain. Skill Drain only negates activated and continuous effects, not unclassified conditions."
  },
  {
    cards: ["stratos", "call of the haunted", "chain", "miss timing", "when"],
    q: "Stratos is summoned by Call of the Haunted as Chain Link 2. Chain Link 1 resolves after. Does Stratos get to search?",
    a: "No. Stratos has an optional When you can Trigger Effect. Its summon must be the very last thing to happen for it to activate. Because Chain Link 1 resolved after the summon, Stratos misses the timing and cannot activate its search effect."
  },
  {
    cards: ["sangan", "baobaboon", "polymerization", "segoc", "mandatory"],
    q: "Polymerization uses Sangan and Baobaboon as materials. Both have mandatory GY triggers. How is the chain built?",
    a: "Both are mandatory Trigger Effects controlled by the Turn Player that triggered simultaneously. The Turn Player chooses the chain order and can make Sangan CL1 and Baobaboon CL2 or vice versa. The opponent cannot activate a Fast Effect until both triggers are placed on the chain."
  },
  {
    cards: ["torn scales", "phantom knights", "twin twisters", "discard", "cost", "trigger"],
    q: "Torn Scales is discarded as cost for Twin Twisters. Does it trigger its GY effect?",
    a: "Yes. Torn Scales triggers If a card is discarded. It does not matter that it was the very card discarded as a cost. The condition was met and it will trigger in a new chain after Twin Twisters resolves."
  },
  {
    cards: ["dante", "beatrice", "detach", "xyz material", "graveyard", "if"],
    q: "Dante is detached as Xyz Material to activate Beatrice's effect. Does Dante trigger its GY effect?",
    a: "Yes. Dante's effect reads If this card is sent to the Graveyard. Detaching it as material successfully sends it to the Graveyard, fulfilling the If condition. If effects cannot miss timing."
  },
  {
    cards: ["bacon saver", "damage step", "ash blossom", "negate attack"],
    q: "Bacon Saver activates in GY during Damage Step to negate attack. Can opponent chain Ash Blossom?",
    a: "No. Ash Blossom does not modify ATK or DEF and is not a Counter Trap, making it strictly illegal to activate during the Damage Step."
  },
  {
    cards: ["ryko", "flip", "damage step", "before damage calculation", "after"],
    q: "When is Ryko Lightsworn Hunter flipped face-up and when does its FLIP effect activate?",
    a: "Ryko is flipped face-up at the Before Damage Calculation sub-step. Its FLIP effect activates After Damage Calculation. These are two separate sub-steps of the Damage Step."
  },
  {
    cards: ["damage step", "destroyed", "replay", "battle step"],
    q: "A defending monster is destroyed at the Start of the Damage Step. Does the attacker get a replay?",
    a: "No. Attack replays can only occur during the Battle Step. Once the game state has transitioned into the Damage Step no replays can occur. The attack simply ends without reaching damage calculation."
  },
  {
    cards: ["mind control", "interdimensional matter transporter", "banish", "return", "control"],
    q: "Mind Control takes opponent monster. Interdimensional Matter Transporter banishes it. When it returns who controls it?",
    a: "It physically returns to Player A's field because Player A banished it. However because Mind Control has expired it is immediately returned to Player B's control. The temporary control from Mind Control ends but the return destination is based on who banished it."
  },
  {
    cards: ["link monster", "temporarily banished", "sp little knight", "extra monster zone", "return"],
    q: "A Link Monster is temporarily banished and returns. Can it return to the Extra Monster Zone?",
    a: "No. A monster returning to the field from temporary banishment must return to a Main Monster Zone. It cannot be placed in the Extra Monster Zone."
  },
  {
    cards: ["macro cosmos", "dark world dealings", "discard", "dark world", "trigger"],
    q: "Macro Cosmos is active. Can Dark World Dealings be activated and do Dark World monsters trigger?",
    a: "The activation is legal because discarding is an effect not a cost. However Dark World monsters will not trigger because their text specifically requires being discarded to the Graveyard. Under Macro Cosmos they are banished instead so the condition is not met."
  },
  {
    cards: ["macro cosmos", "effect veiler", "cost", "graveyard", "send", "illegal"],
    q: "Macro Cosmos is active. Can Effect Veiler be activated?",
    a: "No. Effect Veiler requires sending itself from hand to the Graveyard as the activation cost. You cannot pay a cost that explicitly requires a card to be sent to the Graveyard while a continuous banishing effect is active. The activation is entirely illegal."
  },
  {
    cards: ["pot of extravagance", "5 cards", "extra deck", "banish 3 or 6"],
    q: "I have exactly 5 cards in Extra Deck. Can I activate Pot of Extravagance?",
    a: "Yes but with restrictions. You can activate it but because you do not have 6 cards you must choose to pay the cost of banishing 3. You cannot attempt to banish 6."
  },
  {
    cards: ["forbidden droplet", "infinite impermanence", "damage step", "chain"],
    q: "Forbidden Droplet is activated during Damage Step. Can opponent chain Infinite Impermanence?",
    a: "No. Infinite Impermanence does not modify ATK or DEF and is not a Counter Trap, making it strictly illegal to activate during the Damage Step."
  },
  {
    cards: ["fossil dyna", "flip effect", "special summon", "continuous", "after damage"],
    q: "Fossil Dyna Pachycephalo is flipped by an attack. Does it immediately destroy Special Summoned monsters?",
    a: "No. Fossil Dyna's continuous effect prevents new Special Summons but its Flip effect is what destroys existing Special Summoned monsters. That Flip effect activates After Damage Calculation, not immediately when flipped."
  },
  {
    cards: ["eater of millions", "face-down", "banish", "start of damage step"],
    q: "Can Eater of Millions banish a face-down monster when it attacks?",
    a: "Yes. Eater of Millions triggers at the Start of the Damage Step which occurs before the defending monster is flipped face-up. The face-down monster can be banished without being revealed."
  },
  {
    cards: ["apollousa", "honest", "damage step", "negate", "atk modify"],
    q: "Apollousa is attacked. Opponent activates Honest during Damage Calculation. Can Apollousa negate it?",
    a: "Yes. Apollousa's negation effect inherently modifies ATK (she loses 800 ATK when negating). Since her effect modifies ATK she is legally allowed to activate her negation effect during the Damage Step."
  },
  {
    cards: ["el shaddoll construct", "avramax", "mekk knight crusadia", "damage step", "start before"],
    q: "Construct attacks Mekk-Knight Crusadia Avramax. How does this resolve?",
    a: "Construct activates at the Start of the Damage Step. Avramax can only activate During Damage Calculation. Construct resolves and destroys Avramax long before the window for Avramax to activate opens. Avramax never gets to use its effect."
  },
  {
    cards: ["sangan", "baobaboon", "tribute summon", "chain block", "segoc"],
    q: "I Tribute Summon Baobaboon using Sangan. Can I chain block Sangan with Baobaboon?",
    a: "Yes. Both are mandatory Trigger Effects controlled by the Turn Player. Player A chooses the order, placing Sangan as CL1 and Baobaboon as CL2. Player B cannot respond to Sangan because Baobaboon is already on the chain above it."
  },
  {
    cards: ["accesscode talker", "update jammer", "chain link 2", "effect veiler", "respond"],
    q: "Accesscode is CL1 and Update Jammer is CL2. Can opponent chain Effect Veiler to CL2?",
    a: "Yes. Accesscode only prevents the opponent from activating cards or effects in response to its own activation. By making Update Jammer CL2, Player A opens a window for Player B to respond to that chain link with Effect Veiler."
  },
  {
    cards: ["magical meltdown", "ghost ogre", "field spell", "resolve"],
    q: "Opponent chains Ghost Ogre to Magical Meltdown. Does the search resolve?",
    a: "No. Ghost Ogre destroys Meltdown. Because Meltdown is a Field Spell it must remain face-up on the field at resolution to apply its search effect. Since it was destroyed it cannot search."
  },
  {
    cards: ["branded lost", "ash blossom", "chain", "initial activation"],
    q: "Can Ash Blossom be chained to Branded Lost's initial activation?",
    a: "No. Branded Lost does not include an effect to add a card to the hand upon its initial activation. Its search effect triggers later when a Fusion Summon is performed. At initial activation there is no legal target for Ash Blossom."
  },
  {
    cards: ["crossout designator", "ash blossom", "chain", "negate crossout"],
    q: "Crossout Designator calls Ash Blossom. Can opponent chain their own Ash Blossom to negate Crossout?",
    a: "No. Crossout Designator does not add a card to hand, Special Summon from Deck, or send from Deck to GY as an effect. It banishes for cost. It is not a legal target for Ash Blossom."
  },
  {
    cards: ["ultimate falcon", "skill drain", "already active", "xyz summon", "negated immediately"],
    q: "Skill Drain is already active. Player A Xyz Summons Ultimate Falcon. Is it negated?",
    a: "Yes. Skill Drain was already applying before Falcon hit the field. Falcon's continuous effect that makes it unaffected is instantly negated the exact moment it hits the field because Skill Drain was already in place. If Falcon was on the field first and Skill Drain was activated after, Falcon would be unaffected."
  },
  {
    cards: ["ultimate falcon", "destructive daruma karma cannon", "flip face down", "send"],
    q: "Opponent activates Daruma Karma Cannon while Ultimate Falcon is on the field. What happens?",
    a: "Falcon is unaffected so it is not flipped face-down. However because Player A controls a monster that was not flipped face-down, the secondary mandatory effect of Karma Cannon activates and Player A must send that monster (Falcon) to the GY."
  },
  {
    cards: ["full armor master", "blackwing", "evenly matched", "unaffected", "banish"],
    q: "Can Evenly Matched banish Blackwing Full Armor Master even though it is unaffected by card effects?",
    a: "Yes. Evenly Matched forces the player to perform the banishing action as a game mechanic choice. Since it is the player performing the action (not a card effect targeting the monster), unaffected monsters can legally be banished by Evenly Matched."
  },
  {
    cards: ["geomathmech final sigma", "extra monster zone", "nibiru", "tribute", "unaffected"],
    q: "Nibiru activates after 5 summons. Player A controls Final Sigma in Extra Monster Zone. Is Sigma tributed?",
    a: "No. Nibiru tributes monsters as part of its effect, not as a cost. Final Sigma is unaffected by card effects and remains on the field. Only monsters that are not unaffected are tributed."
  },
  {
    cards: ["abyss dweller", "infinite impermanence", "lingering", "resolved", "gy effect"],
    q: "Abyss Dweller's effect resolved. Opponent later negates Dweller with Impermanence. Do GY effects work now?",
    a: "No. Dweller's effect is a lingering effect that successfully resolved earlier. Negating Dweller after the fact does not undo a resolved lingering effect. The restriction on GY effects remains for the rest of the turn."
  },
  {
    cards: ["maxx c", "called by the grave", "lingering", "draw", "negate"],
    q: "Maxx C resolved. Opponent Special Summons then activates Called by the Grave targeting Maxx C. Does player draw?",
    a: "No. Called by the Grave negates the resolved effects of the card, effectively turning off the lingering draw effect for the rest of the turn even though Maxx C already resolved."
  },
  {
    cards: ["dimensional barrier", "crossout designator", "lingering", "vanish"],
    q: "Dimensional Barrier called Xyz this turn. Opponent activates Crossout Designator calling Dimensional Barrier. Does the Xyz restriction vanish?",
    a: "Yes. Negating the effect of the card with Crossout Designator turns off the lingering restriction. The Xyz Summon restriction from Dimensional Barrier is removed for the rest of the turn."
  },
  {
    cards: ["cosmic cyclone", "fire formation tenki", "imperial iron wall", "chain", "banish"],
    q: "Cosmic Cyclone targets Tenki. Opponent chains Imperial Iron Wall. What happens?",
    a: "Cosmic Cyclone resolves without effect because cards cannot be banished while Imperial Iron Wall is active. Tenki remains on the field and its search effect resolves successfully."
  },
  {
    cards: ["ghost ogre", "toon kingdom", "activation", "chain", "face-up"],
    q: "Can Ghost Ogre be chained to the initial activation of Toon Kingdom?",
    a: "No. Ghost Ogre specifies it can respond to a Spell or Trap that is already face-up on the field and activates an effect. It cannot be chained to the initial placement/activation of a Spell or Trap card from the hand."
  },
  {
    cards: ["token", "book of moon", "face-down defense", "cannot"],
    q: "Can Book of Moon target a Token?",
    a: "No. Tokens cannot exist in face-down Defense Position. Book of Moon places monsters face-down so it legally cannot target Tokens."
  },
  {
    cards: ["token", "forbidden droplet", "cost", "graveyard", "send"],
    q: "Can a Token be used as cost for Forbidden Droplet?",
    a: "No. Forbidden Droplet requires sending the card to the Graveyard as a cost. Tokens cannot be sent to the Graveyard - they simply cease to exist when they would leave the field. Therefore Tokens cannot be used as cost for Forbidden Droplet."
  },
  {
    cards: ["triple tactics talent", "ash blossom", "hand knowledge", "look at hand"],
    q: "Triple Tactics Talent is activated to look at opponent hand. Can opponent chain Ash Blossom?",
    a: "No. TTT was activated with the hand-knowledge effect. The current chain link does not include adding a card, drawing, or sending from Deck to GY. Ash Blossom has no legal activation condition here."
  },
  {
    cards: ["small world", "droll lock bird", "chain", "trigger", "new chain"],
    q: "Can Droll and Lock Bird be chained to Small World?",
    a: "No. Droll and Lock Bird is a Trigger Effect and cannot be chained to a Spell activation. It must be activated in a new chain after a card has successfully been added to the hand from the Deck."
  },
  {
    cards: ["nibiru", "crossout designator", "negated", "hand", "not destroyed"],
    q: "Nibiru activates. Opponent chains Crossout Designator declaring Nibiru. What happens?",
    a: "Nibiru resolves negated. It is not destroyed because Crossout Designator negates but does not destroy. Nibiru remains in Player A's hand."
  },
  {
    cards: ["infinite impermanence", "hand", "no cards", "column", "set"],
    q: "Infinite Impermanence is activated from hand while controlling no cards. Does the column negation apply?",
    a: "No. For the column negation effect to apply, Impermanence must have been Set on the field prior to activation. Activating directly from hand does not grant the column negation effect even if you control no cards."
  },
  {
    cards: ["sangan", "tributed", "field", "graveyard", "trigger", "sent from field"],
    q: "Sangan is tributed as cost for a card effect. Does Sangan trigger its search effect?",
    a: "Yes. Being Tributed as a cost successfully sends Sangan from the field to the GY, fulfilling the condition of if this card is sent from the field to the GY."
  },
  {
    cards: ["absolute zero", "compulsory evacuation device", "return", "extra deck", "leaves field"],
    q: "Compulsory Evacuation Device returns Absolute Zero to the Extra Deck. Does Absolute Zero's destroy all monsters effect trigger?",
    a: "No. Under the 2020 Master Rules revision, any monster returned to the Main Deck or Extra Deck cannot activate its leaves the field trigger effects unless the card specifically states it triggers when returning to the Deck."
  },
  {
    cards: ["mirrorjade", "evenly matched", "banish face-down", "end phase", "wipe"],
    q: "Evenly Matched banishes Mirrorjade face-down. Does its End Phase wipe effect trigger?",
    a: "No. Cards banished face-down cannot activate their leaves the field effects because their text and properties are completely obscured from the game state."
  },
  {
    cards: ["xyz material", "leaves field", "trigger effect", "overlay"],
    q: "A monster with a leaves the field trigger effect is used as Xyz Material. Does its effect trigger?",
    a: "No. Becoming an Xyz Material is not considered leaving the field. Once a card becomes an Xyz Material it is no longer treated as a card on the field and cannot activate leaves the field effects."
  },
  {
    cards: ["dante", "change of heart", "link summon", "owner gy", "who activates"],
    q: "Player A takes control of Player B's Dante with Change of Heart, then Link Summons sending Dante to GY. Whose GY does it go to?",
    a: "Dante goes to Player B's GY because cards always go to the owner's GY. Player B will be the one to activate Dante's Trigger Effect because the effect triggered in their possession (their GY)."
  },
  {
    cards: ["shangri-ira", "kashtira", "zone lock", "raigeki", "destroyed", "unlock"],
    q: "Kashtira Shangri-Ira is destroyed by Raigeki. Do the locked zones immediately become usable?",
    a: "Yes. Shangri-Ira's zone lock is a continuous application of a resolved effect that requires Shangri-Ira to remain face-up. Once it leaves the field the zones immediately unlock."
  },
  {
    cards: ["sp little knight", "direct attack", "restriction", "lingering", "link material"],
    q: "SP Little Knight's effect applies your monsters cannot attack directly. If SP Little Knight is used as Link Material, does the restriction lift?",
    a: "No. The restriction your monsters cannot attack directly this turn is a lingering condition applied to the player for resolving the effect. It applies for the rest of the turn regardless of what happens to SP Little Knight afterward."
  },
  {
    cards: ["ultimate falcon", "raidraptor", "kaiju", "tribute", "unaffected", "cost"],
    q: "Can a Kaiju be Special Summoned by Tributing an unaffected Ultimate Falcon?",
    a: "Yes. Kaijus tribute monsters as an inherent summoning condition (a cost to attempt the Special Summon), not as an activated card effect. Unaffected monsters can be Tributed as costs. This also applies to Lava Golem and other monsters that tribute as a summoning condition."
  },
  {
    cards: ["nadir servant", "ash blossom", "extra deck", "restriction", "negated"],
    q: "Ash Blossom negates Nadir Servant. Can Player A still Special Summon from Extra Deck this turn?",
    a: "Yes. The restriction you cannot Special Summon from the Extra Deck is part of Nadir Servant's effect. Since the effect was negated by Ash Blossom the restriction is not applied."
  },
  {
    cards: ["red eyes fusion", "ash blossom", "normal summon", "restriction", "activation"],
    q: "Ash Blossom negates Red-Eyes Fusion. Can Player A still Normal Summon this turn?",
    a: "No. Red-Eyes Fusion restricts summoning the turn you activate this card. Ash Blossom negates the effect but not the activation. The activation is still recognized by the game so the restriction still applies even though the Fusion Summon did not happen."
  },
  {
    cards: ["apollousa", "same atk", "battle", "damage calculation", "negate effect"],
    q: "Apollousa is battling a monster with the same ATK. Can Apollousa lower her ATK to activate her negate effect?",
    a: "No. If Apollousa is currently in damage calculation her ATK is locked in for the battle outcome. She cannot lower her ATK to activate her effect once damage calculation has begun."
  },
  {
    cards: ["destruction", "vs send", "difference", "destroyed vs sent"],
    q: "What is the difference between destroying a card and sending it to the GY?",
    a: "Destruction means a card is destroyed by battle or a card effect that uses the word destroy. Sending to the GY means moving directly to the GY without destruction. This difference matters for indestructible monsters (immune to destruction but can be sent), for effects that trigger when destroyed vs sent, and for cards that prevent destruction but not other removal."
  },
  {
    cards: ["indestructible", "battle", "cannot destroy", "effect", "send still works"],
    q: "An Indestructible monster cannot be destroyed. Can it be sent to the GY by card effects?",
    a: "Yes. Cannot be destroyed only prevents destruction from battle and destroy effects. Being sent to the GY by a card effect that says send is not destruction. Foolish Burial, Crush Card Virus sending cards, and similar effects can still send indestructible monsters to the GY."
  },
  {
    cards: ["indestructible", "battle", "still takes damage", "survives battle"],
    q: "An Indestructible monster battles a stronger monster. What happens?",
    a: "The Indestructible monster survives because it cannot be destroyed by battle. However the controller still takes battle damage equal to the difference in ATK. The Indestructible monster remains on the field but LP damage is still calculated normally."
  },
  {
    cards: ["destroyed by effect", "destroyed by battle", "different triggers", "some care which"],
    q: "Some effects trigger only when destroyed by a card effect vs destroyed by battle. What is the difference?",
    a: "Destroyed by battle means the monster lost in combat. Destroyed by a card effect means a card's effect explicitly destroyed it using the word destroy. Some monsters like Fire King monsters care specifically about being destroyed by a card effect. Battle destruction triggers different effects from effect destruction."
  },
  {
    cards: ["cannot be destroyed", "by battle only", "effect can still destroy", "partial protection"],
    q: "A monster cannot be destroyed by battle. Can card effects still destroy it?",
    a: "Yes. Cannot be destroyed by battle only protects against battle destruction. Card effects that destroy such as Raigeki, Dark Hole, and Mirror Force can still destroy the monster unless it also has protection against card effect destruction."
  },
  {
    cards: ["cannot be destroyed", "by card effects", "battle still destroys", "partial protection"],
    q: "A monster cannot be destroyed by card effects. Can it still be destroyed in battle?",
    a: "Yes. Cannot be destroyed by card effects only protects against effect destruction. The monster can still be destroyed normally in battle. Both forms of protection are needed to be immune to all destruction."
  },
  {
    cards: ["destruction", "simultaneous", "dark hole", "all monsters", "at same time"],
    q: "Dark Hole destroys all monsters. Is this simultaneous or sequential?",
    a: "Dark Hole destroys all monsters on the field simultaneously. All destroyed monsters are sent to the GY at the same time. All trigger effects from the simultaneous destruction form the same SEGOC chain. No monster is destroyed before another."
  },
  {
    cards: ["destruction", "non destruction removal", "banish bounce return deck", "avoids trigger"],
    q: "What are the main ways to remove monsters without destroying them?",
    a: "Non-destruction removal includes: banishing (D.D. Crow, Dimensional Prison), returning to hand (Compulsory Evacuation Device), returning to Deck (Shuffle effects), becoming Xyz Material (not leaving field), and being sent to GY without destruction (Foolish Burial). These bypass indestructible protection and some trigger effects."
  },
  {
    cards: ["destruction", "trigger effect", "when destroyed", "mandatory vs optional"],
    q: "A monster has a when destroyed trigger effect. It is banished instead of destroyed. Does it trigger?",
    a: "No. A when destroyed effect specifically requires the monster to be destroyed. Being banished, returned to hand, or sent without destruction does not fulfill the when destroyed condition. The effect does not trigger."
  },
  {
    cards: ["destruction", "if destroyed", "if vs when", "never misses timing"],
    q: "A monster has an if destroyed effect. Is it different from when destroyed?",
    a: "Yes. If destroyed effects never miss timing and trigger whenever the destruction condition is met regardless of what happened last. When destroyed effects can miss timing if destruction was not the last thing to happen. If effects are generally more reliable than when effects."
  },
  {
    cards: ["destruction", "battle", "leaves field", "trigger", "two different things"],
    q: "Can a monster have both a destroyed by battle trigger and a leaves the field trigger?",
    a: "Yes. Destroyed by battle and leaves the field are different conditions. A monster can have effects for both. Being destroyed by battle also counts as leaving the field so both conditions are met simultaneously when destroyed in battle."
  },
  {
    cards: ["destruction", "cannot be targeted", "still destroyed by non targeting effects"],
    q: "A monster cannot be targeted by card effects. Can it still be destroyed by non-targeting destruction effects?",
    a: "Yes. Targeting protection only prevents effects that target from affecting the monster. Non-targeting destruction effects like Dark Hole which destroys all monsters without targeting can still destroy the protected monster."
  },
  {
    cards: ["destruction", "half damage step", "determined destroyed", "still on field"],
    q: "A monster is determined to be destroyed by battle during Damage Calculation. Is it still on the field?",
    a: "Yes. Monsters determined to be destroyed by battle remain physically on the field until the End of the Damage Step. They are marked for destruction but are still technically on the field during Damage Calculation and After Damage Calculation sub-steps."
  },
  {
    cards: ["destruction", "send graveyard", "not destroy", "specific wording"],
    q: "An effect says send 1 monster to the GY. Is this destruction?",
    a: "No. Sending to the GY is not destruction. The word destroy must appear for it to be treated as destruction. Effects that send to the GY allow indestructible monsters to be removed and do not trigger destroyed by effects."
  },
  {
    cards: ["destruction", "stardust dragon", "negate destroy", "once per turn"],
    q: "How does Stardust Dragon's negation work?",
    a: "Stardust Dragon can tribute itself to negate the activation of an effect that would destroy a card on the field. If Stardust negated the effect it Special Summons itself back from the GY during the End Phase. It can negate exactly once per chain."
  },
  {
    cards: ["destruction", "chain destruction", "effect resolves destroy", "after chain"],
    q: "An effect says if this card is destroyed you can activate this effect. Can this be used mid-chain?",
    a: "No. Trigger effects that activate when a card is destroyed activate after the chain that caused the destruction fully resolves. They cannot activate mid-chain. After the chain resolves the trigger activates in a new chain."
  },
  {
    cards: ["destruction", "by battle", "destroyed then gy", "end damage step"],
    q: "When are monsters destroyed by battle physically sent to the GY?",
    a: "Monsters destroyed by battle are sent to the GY at the End of the Damage Step sub-step. During Damage Calculation and After Damage Calculation they are still technically on the field but marked for destruction."
  },
  {
    cards: ["destruction", "indestructible", "skill drain", "negates indestructible"],
    q: "Skill Drain is active. Does it negate a monster's own cannot be destroyed by card effects?",
    a: "Yes. If the indestructible protection comes from the monster's own continuous effect Skill Drain negates that effect removing the protection. The monster can then be destroyed normally. However if the indestructible protection comes from an external source like a Trap card Skill Drain does not affect it."
  },
  {
    cards: ["destruction", "replaced with banish", "macro cosmos", "destroyed still counts"],
    q: "Macro Cosmos is active. A monster is destroyed by Dark Hole. Is it treated as destroyed?",
    a: "Yes. The monster is still treated as being destroyed by the card effect. Macro Cosmos only changes the destination from GY to banished zone. The destruction event still occurred so destroyed by card effect triggers still activate."
  },
  {
    cards: ["destruction", "token destroyed", "ceases exist", "trigger still fires"],
    q: "A Token is destroyed. Does it count as being destroyed for trigger effects?",
    a: "Yes. Tokens are successfully destroyed before they cease to exist. Effects that trigger when a card on the field is destroyed are triggered by Token destruction. The Token does not go to the GY but its destruction event still occurred."
  },
  {
    cards: ["equip spell", "attached monster", "what is", "equip card"],
    q: "How do Equip Spell cards work?",
    a: "Equip Spell cards are attached to a specific monster on the field. They occupy a Spell and Trap Zone and apply their effects to the equipped monster. When the equipped monster leaves the field the Equip Spell is immediately destroyed. Multiple Equip Spells can be attached to the same monster."
  },
  {
    cards: ["equip spell", "equipped monster destroyed", "equip also destroyed"],
    q: "The equipped monster is destroyed. What happens to the Equip Spell?",
    a: "When the equipped monster leaves the field for any reason the Equip Spell is immediately destroyed by game mechanics. This destruction is not a card effect and cannot be chained to. The Equip Spell goes to the GY."
  },
  {
    cards: ["equip spell", "cannot equip", "wrong type attribute", "condition"],
    q: "Can Equip Spells be attached to any monster?",
    a: "It depends on the Equip Spell. Some have restrictions requiring specific Types Attributes or names. Others can equip to any monster. If an Equip Spell cannot legally be attached to any valid monster on the field it cannot be activated."
  },
  {
    cards: ["equip spell", "change control", "stolen monster", "equip goes with"],
    q: "Mind Control takes a monster equipped with an Equip Spell. What happens to the Equip?",
    a: "The Equip Spell remains on the monster. Equip Spells follow the equipped monster not the controller. The new controller benefits from or is affected by the Equip Spell as long as the monster remains equipped."
  },
  {
    cards: ["equip spell", "inzektor hornet", "equip effect", "game mechanic destroy"],
    q: "Inzektor Hornet is equipped to a monster. The equipped monster is destroyed. Is Hornet destroyed by a card effect?",
    a: "No. Hornet is destroyed by game mechanics for losing its equip target, not by a card effect. Effects requiring being sent to GY by a card effect will not trigger. Generic sent to GY effects will still trigger."
  },
  {
    cards: ["equip spell", "atk def boost", "continuous while equipped"],
    q: "Do Equip Spell ATK and DEF boosts apply continuously?",
    a: "Yes. Equip Spell ATK and DEF modifications are continuous effects that apply at all times while the Equip Spell is attached. They do not need to be activated again. The boost applies instantly when equipped and is removed when the Equip Spell is destroyed."
  },
  {
    cards: ["equip spell", "target equipped monster", "leaves before resolves"],
    q: "An Equip Spell targets a monster to equip it. The target leaves the field before resolution. What happens?",
    a: "The Equip Spell resolves without effect because the target is no longer on the field. The Equip Spell is sent to the GY without being attached to anything."
  },
  {
    cards: ["equip spell", "relinquished", "monster treated as equip", "spell zone"],
    q: "Relinquished equips an opponent monster. Is the equipped monster treated as an Equip Spell?",
    a: "Yes. The equipped monster is treated as an Equip Spell while attached to Relinquished. It occupies a Spell and Trap Zone. If Relinquished is destroyed the equipped monster is sent to its owner GY. The monster is not treated as a monster while equipped."
  },
  {
    cards: ["field spell", "field zone", "separate zone", "both active"],
    q: "Can both players have Field Spells active at the same time?",
    a: "Yes. Each player has their own Field Spell Zone. Both players can have their own Field Spell active simultaneously. They do not interfere with each other. Each Field Spell only affects the game according to its own text."
  },
  {
    cards: ["field spell", "replaced", "new field spell", "old sent gy"],
    q: "I activate a new Field Spell while I already have one active. What happens?",
    a: "The existing Field Spell is sent to the GY when the new one is activated. Each player can only have one Field Spell at a time. The old one is destroyed and replaced by the new activation."
  },
  {
    cards: ["field spell", "ghost ogre", "already face-up", "effect activates"],
    q: "Can Ghost Ogre target a Field Spell?",
    a: "Yes but only when the Field Spell activates one of its effects while already face-up on the field. Ghost Ogre cannot respond to the initial activation of a Field Spell from the hand. It can respond to effects a face-up Field Spell activates later."
  },
  {
    cards: ["field spell", "terraforming", "search", "add hand"],
    q: "Can Terraforming search any Field Spell?",
    a: "Yes. Terraforming adds any 1 Field Spell from the Deck to hand. There are no restrictions on which Field Spell it can search. Ash Blossom can negate Terraforming because it adds a card from Deck to hand."
  },
  {
    cards: ["field spell", "destroyed", "effect stops", "necrovalley"],
    q: "Necrovalley is destroyed. Do its effects immediately stop?",
    a: "Yes. Necrovalley is a Field Spell with continuous effects. When it is destroyed its effects immediately stop applying. Cards that were blocked by Necrovalley can be used again immediately after it leaves the field."
  },
  {
    cards: ["field spell", "zombie world", "type change", "both players field and gy"],
    q: "Zombie World changes all monsters to Zombie type. Does this apply to both players?",
    a: "Yes. Zombie World changes all face-up monsters on both players fields and all monsters in both players GYs to Zombie type. This is a continuous effect that applies globally. It affects both players simultaneously."
  },
  {
    cards: ["field spell", "mst", "chained", "destroyed before resolve"],
    q: "MST chains to and destroys a Field Spell activation. Does the Field Spell resolve?",
    a: "No. Field Spells are Continuous Spells and require the card to remain face-up on the field to resolve their effects. If MST destroys the Field Spell before it resolves the activation effect disappears."
  },
  {
    cards: ["quick play spell", "when can activate from hand", "main phase only"],
    q: "When can a Quick-Play Spell be activated from the hand?",
    a: "A Quick-Play Spell can only be activated directly from the hand during your own Main Phase. It cannot be activated from hand during the Battle Phase End Phase or on the opponent turn. From the field it can be activated during any phase of either turn."
  },
  {
    cards: ["quick play spell", "set then activate", "not same turn", "wait one turn"],
    q: "A Quick-Play Spell is Set on the field. When can it be activated?",
    a: "A Quick-Play Spell that was Set cannot be activated the same turn it was Set. It must remain on the field for at least until the opponent next turn. After that it can be activated during any phase of either player turn."
  },
  {
    cards: ["quick play spell", "opponent turn", "battle phase", "any phase"],
    q: "Can a Set Quick-Play Spell be activated during the opponent Battle Phase?",
    a: "Yes. A Quick-Play Spell that has been Set for at least one turn can be activated during any phase of either player turn including the Battle Phase End Phase and Damage Step (if it modifies ATK or DEF)."
  },
  {
    cards: ["quick play spell", "speed 2", "chain to trap", "chain to quick effect"],
    q: "Can a Quick-Play Spell be chained to a Trap card activation?",
    a: "Yes. Quick-Play Spells are Spell Speed 2 which equals the Spell Speed of Trap cards. Equal Spell Speeds can chain to each other. A Quick-Play Spell can be chained to a Trap and vice versa."
  },
  {
    cards: ["quick play spell", "super polymerization", "cannot respond", "unique"],
    q: "Super Polymerization is a Quick-Play Spell. Can anything be chained to it?",
    a: "No. Super Polymerization specifically states that neither player can activate cards or effects in response to its activation. Despite being Speed 2 its text creates an absolute no-response clause. Nothing can be chained to Super Polymerization."
  },
  {
    cards: ["atk def", "modification", "continuous vs activated", "which applies first"],
    q: "Multiple ATK modifications apply to a monster. In what order do they apply?",
    a: "ATK modifications are applied in the order they were applied to the monster. Continuous ATK modifications (from Equip Spells, Continuous Spells, etc.) are calculated together. Temporary modifications from effects stack on top. The final ATK is calculated after all modifications."
  },
  {
    cards: ["atk def", "halved", "then boosted", "order matters"],
    q: "A monster's ATK is halved then boosted by 1000. What is the final ATK?",
    a: "The final ATK depends on the order of application. If original ATK is 2000, halved to 1000, then boosted by 1000, final ATK is 2000. But if boosted first to 3000 then halved to 1500, the result differs. The order effects were applied determines the result."
  },
  {
    cards: ["atk def", "zero atk", "cannot be less than zero", "minimum zero"],
    q: "Can a monster's ATK go below 0?",
    a: "No. ATK and DEF cannot go below 0. If a reduction would bring ATK below 0 it is set to 0 instead. A monster with 0 ATK that is reduced further stays at 0."
  },
  {
    cards: ["atk def", "original atk", "base atk", "modification removed"],
    q: "When do ATK modifications from card effects expire?",
    a: "Temporary ATK modifications expire when the effect that granted them expires usually at end of turn. Continuous modifications from Equip Spells last as long as the Equip Spell is equipped. Battle Step modifications last only for that battle. Original ATK is restored when all modifications are removed."
  },
  {
    cards: ["atk def", "honest", "add atk in damage step", "light monster"],
    q: "Honest adds the opponent monster ATK to a LIGHT monster. When is this ATK added?",
    a: "Honest is activated Before Damage Calculation in the Damage Step. The LIGHT monster gains ATK equal to the opponent monster current ATK at the time Honest resolves. This modification applies only for that battle and expires after the Damage Step."
  },
  {
    cards: ["atk def", "skill drain", "negate atk changes from effects", "does not"],
    q: "Does Skill Drain remove ATK modifications that came from monster effects?",
    a: "Yes. Skill Drain negates the effects of face-up monsters on the field. If a monster granted itself an ATK boost through its own effect and Skill Drain becomes active the ATK boost from that effect is negated. However ATK boosts from Equip Spells or other non-monster sources are not affected by Skill Drain."
  },
  {
    cards: ["replacement effect", "what is", "instead of", "goes to gy instead banished"],
    q: "What is a replacement effect in Yu-Gi-Oh?",
    a: "A replacement effect is an effect that replaces one game action with another. It uses the word instead. Examples: Macro Cosmos banishes cards instead of sending to GY. Pendulum Monsters go to the Extra Deck instead of the GY when destroyed. These replacements cannot be chained to because they are not activated effects."
  },
  {
    cards: ["replacement effect", "macro cosmos", "continuous replacement", "cannot chain"],
    q: "Can players chain to Macro Cosmos's replacement effect when cards go to the GY?",
    a: "No. Macro Cosmos's replacement effect is a continuous replacement that activates automatically with no chain. There is no window to chain to the replacement itself. You can chain to the activation of Macro Cosmos when it is first activated but not to each individual card being banished."
  },
  {
    cards: ["replacement effect", "pendulum", "destroyed to extra deck", "mechanic"],
    q: "Pendulum Monsters going to the Extra Deck when destroyed. Is this a replacement effect?",
    a: "Yes. Pendulum Monsters going to the Extra Deck instead of the GY when destroyed on the field is a replacement effect and a game mechanic. It cannot be chained to or negated by most effects because it is a continuous replacement not an activated effect."
  },
  {
    cards: ["replacement effect", "multiple replacements", "which applies", "simultaneous"],
    q: "Both Macro Cosmos and Dimensional Fissure are active. A monster is sent to GY. What happens?",
    a: "Both replacement effects cannot apply simultaneously. When multiple replacement effects would apply to the same event the controller of the card being sent chooses which replacement applies. The monster is banished by one replacement effect."
  },
  {
    cards: ["replacement effect", "cannot be banished", "replacement fails", "goes to gy anyway"],
    q: "A monster cannot be banished. Macro Cosmos is active. Where does the monster go when destroyed?",
    a: "The monster goes to the GY. Since the monster cannot be banished Macro Cosmos replacement effect cannot apply. The monster goes to the GY as normal. Cannot be banished protection overrides the replacement."
  },
  {
    cards: ["replacement effect", "imperial iron wall", "cannot banish", "replacement blocked"],
    q: "Imperial Iron Wall is active. Can Macro Cosmos still banish cards?",
    a: "No. Imperial Iron Wall prevents all cards from being banished. Macro Cosmos replacement effect cannot apply while Imperial Iron Wall is active. Cards that would be sent to the GY simply go to the GY normally."
  },
  {
    cards: ["replacement effect", "soul absorption", "gain lp when banished", "replacement trigger"],
    q: "Cards are being banished by Macro Cosmos. Does Soul Absorption gain LP for each one?",
    a: "Yes. Soul Absorption gains 500 LP each time a card is banished. Every card banished by Macro Cosmos triggers Soul Absorption. The two cards work together to gain large amounts of LP whenever cards would normally go to the GY."
  },
  {
    cards: ["replacement effect", "gy trigger", "if banished instead", "does not trigger"],
    q: "A monster has a when sent to GY trigger effect. It is banished by Macro Cosmos instead. Does the effect trigger?",
    a: "No. If the effect requires being sent to the Graveyard and the monster is banished instead by Macro Cosmos the condition was never met. The effect does not trigger because the card never reached the GY."
  },
  {
    cards: ["once per turn", "restriction", "cannot use again", "same turn"],
    q: "What does once per turn mean on a card effect?",
    a: "Once per turn means the effect can only be activated one time during that turn regardless of what happens. Once the effect is activated that turn it cannot be activated again even if negated, even if a new copy of the card enters the field, and even if the card leaves and returns."
  },
  {
    cards: ["once per turn", "negated", "still used", "cannot activate again"],
    q: "A once per turn effect was activated and negated. Can it be used again this turn?",
    a: "No. Once per turn restrictions check whether the effect was activated not whether it resolved. Even if the activation was negated by Ash Blossom or any other negation the once per turn has been used for that turn. The effect cannot activate again."
  },
  {
    cards: ["once per turn", "new copy", "different monster", "same name"],
    q: "A monster with a once per turn effect is destroyed and a new copy is summoned. Can the new copy use the effect?",
    a: "No. Once per turn restrictions apply to the card name not the specific physical card. If any monster with that name already used the effect this turn no monster with that name can use it again. Summoning a new copy does not reset the once per turn."
  },
  {
    cards: ["once per turn", "this card", "each card separately", "multiple copies"],
    q: "If a once per turn restriction says this card can each copy use it separately?",
    a: "Yes. When the restriction says this card can only use this effect once per turn it applies to each individual copy separately. Each physical copy of the card has its own once per turn counter. Two copies of the same card on the field can each use the effect once per turn."
  },
  {
    cards: ["once per turn", "per name", "cannot activate if name used", "same name restriction"],
    q: "How do you tell if a once per turn restriction is per card or per name?",
    a: "If the restriction says you can only use this effect once per turn or this card name can only use this effect once per turn it applies to the name. If it says this card can only use this effect once per turn it applies per individual copy. Modern PSCT usually makes this clear."
  },
  {
    cards: ["once per turn", "control change", "stolen monster", "still restricted"],
    q: "An opponent uses Mind Control to take a monster that already used its once per turn effect. Can they activate it again?",
    a: "No. Once per turn restrictions follow the card regardless of who controls it. If a once per turn effect was used this turn the effect cannot be activated again even if the card changes controller."
  },
  {
    cards: ["once per turn", "both players turn", "either turn", "opponent turn"],
    q: "A once per turn Quick Effect can be used on either player's turn. Does it reset between turns?",
    a: "Once per turn resets at the start of each new turn. If a Quick Effect with once per turn is used on the opponent's turn it cannot be used again until the next turn starts. The reset happens at the start of each new turn."
  },
  {
    cards: ["once per turn", "reset", "when", "next turn starts"],
    q: "When does a once per turn restriction reset?",
    a: "Once per turn restrictions reset at the start of each new turn. The reset occurs when the turn changes from one player to the other. An effect used on Turn 1 can be used again on Turn 2 regardless of which player controls the card."
  },
  {
    cards: ["once per duel", "permanent restriction", "banished used", "cannot use again ever"],
    q: "What is the difference between once per turn and once per duel?",
    a: "Once per turn resets each turn. Once per duel means the effect can only be activated one time for the entire duel. Once a once per duel effect is used it cannot be used again regardless of how many copies are in play or how many turns pass."
  },
  {
    cards: ["once per turn", "standby phase effect", "counts for turn"],
    q: "A once per turn Standby Phase effect activates. Does it count as the once per turn for that turn?",
    a: "Yes. Standby Phase effects that have once per turn restrictions count the activation during the Standby Phase as the once per turn use for that turn. The effect cannot be activated again during that same turn."
  },
  {
    cards: ["once per turn", "you can only use this effect", "activation restriction not use"],
    q: "A card says you can only use this effect of this card once per turn. What exactly is restricted?",
    a: "The activation of that specific effect is restricted to once per turn. You cannot activate that particular effect more than once per turn. Other effects on the same card with their own once per turn restrictions are tracked separately."
  },
  {
    cards: ["once per turn", "multiple effects on same card", "each tracked separately"],
    q: "A card has Effect A and Effect B both with once per turn. Are they tracked separately?",
    a: "Yes. Each effect with a once per turn restriction is tracked independently. Using Effect A does not prevent Effect B from being used the same turn unless both are under the same restriction clause."
  },
  {
    cards: ["once per turn", "fast effect", "spell speed 2", "quick effect"],
    q: "Can a Quick Effect with once per turn be activated multiple times on the same chain?",
    a: "No. A once per turn Quick Effect can only be activated once per turn. It cannot be activated multiple times on the same chain even if the conditions are met multiple times during chain resolution."
  },
  {
    cards: ["once per turn", "trigger effect", "if condition met twice", "only one activation"],
    q: "A once per turn trigger effect condition is met twice simultaneously. Can it activate twice?",
    a: "No. Even if the trigger condition is met multiple times simultaneously a once per turn trigger can only be placed on the chain once per turn. Only one activation is allowed regardless of how many times the condition was met."
  },
  {
    cards: ["once per turn", "mandatory once per turn", "must activate if can", "cannot skip"],
    q: "A mandatory once per turn trigger effect condition is met. Must it activate?",
    a: "Yes. Mandatory trigger effects must activate when their condition is met even if they have a once per turn restriction. The once per turn prevents a second activation but the first mandatory activation cannot be skipped."
  },
  {
    cards: ["once per turn", "effect on field vs gy", "different effects", "separate tracking"],
    q: "A monster has a once per turn effect on the field and a separate once per turn effect in the GY. Are they tracked together?",
    a: "No. The once per turn tracking is per effect not per card. The field effect and the GY effect are different effects so they are tracked separately. Using the field effect does not prevent the GY effect from being used in the same turn."
  },
  {
    cards: ["once per turn", "prohibited after certain actions", "if you do this you cannot use"],
    q: "A card says if you Normal Summon this turn you cannot activate this effect. Is this a once per turn?",
    a: "No. This is a conditional activation restriction not a once per turn restriction. The effect is blocked by a specific game action rather than limited by frequency. If the condition is not met (if you did not Normal Summon) the effect can still be activated."
  },
  {
    cards: ["once per turn", "ash blossom used twice", "two separate activations"],
    q: "Can Ash Blossom be activated twice in one turn if two separate cards trigger its condition?",
    a: "No. Ash Blossom has a once per turn restriction by name. Once any Ash Blossom is activated this turn no other Ash Blossom can activate. The same name restriction prevents a second activation even from a different copy of Ash Blossom."
  },
  {
    cards: ["level", "what is", "stars", "monster level", "1 to 12"],
    q: "What is a monster's Level in Yu-Gi-Oh?",
    a: "Level represents the number of stars on a monster card ranging from 1 to 12. Level determines tribute requirements for Normal Summons (Level 5-6 need 1 tribute, Level 7+ need 2). Level is used for Synchro Summons (materials must equal exact Level) and Xyz Summons (materials must share the same Level matching the Rank)."
  },
  {
    cards: ["rank", "xyz monster", "different from level", "rank stars"],
    q: "What is a Rank and how is it different from Level?",
    a: "Rank is the equivalent of Level for Xyz Monsters shown as stars on the left side of the card image instead of the right. Xyz Monsters do not have Levels they have Ranks. Effects that reference Level do not apply to Xyz Monsters unless they specifically say Rank or Level and Rank."
  },
  {
    cards: ["level", "synchro summon", "tuner plus nontuner", "must equal exactly"],
    q: "How do Levels work for Synchro Summons?",
    a: "The combined Levels of the Tuner and non-Tuner Synchro Materials must equal exactly the Level of the Synchro Monster. If the Synchro Monster is Level 8 the materials must total exactly Level 8. Too many or too few Levels makes the summon illegal."
  },
  {
    cards: ["level", "xyz summon", "same level", "matching rank"],
    q: "How do Levels work for Xyz Summons?",
    a: "For a standard Xyz Summon all materials must share the same Level that matches the Xyz Monster's Rank. For a Rank 4 Xyz Monster both materials must be Level 4. The Levels must match exactly not just total to the Rank."
  },
  {
    cards: ["level", "change", "star changer", "galaxy cyclone", "modify"],
    q: "Can monster Levels be changed by card effects?",
    a: "Yes. Some card effects increase or decrease monster Levels. Star Changer changes a Level by 1. Some monsters change their own Level as part of their effects. Changed Levels apply to all Level-based calculations including Synchro and Xyz Summon requirements."
  },
  {
    cards: ["level", "token", "has level", "xyz material valid"],
    q: "Do Tokens have Levels?",
    a: "Yes. Tokens have Levels as defined by the card effect that created them. A Token's Level is printed or specified in the generating effect. Token Levels can be used for Synchro Summon calculations and Xyz Summon requirements."
  },
  {
    cards: ["rank", "rank up magic", "rank up xyz", "higher rank summon"],
    q: "How does Rank-Up work?",
    a: "Rank-Up Magic Spells allow using an existing Xyz Monster as the sole material to summon a higher Rank Xyz Monster. The original Xyz Monster and all its attached materials become materials for the new monster. The new Rank is typically 1 higher than the original."
  },
  {
    cards: ["level", "link monster", "no level", "link rating instead"],
    q: "Do Link Monsters have Levels?",
    a: "No. Link Monsters do not have Levels or Ranks. They have Link Ratings which indicate the number of materials needed to summon them. Effects that reference Level or Rank do not apply to Link Monsters."
  },
  {
    cards: ["level", "pendulum", "both level and scale", "use for synchro xyz"],
    q: "Do Pendulum Monsters have Levels?",
    a: "Yes. Pendulum Monsters have both a Level (for use as monster materials) and a Pendulum Scale (for Pendulum Summoning). The Level is used for Synchro and Xyz material requirements. The Scale determines the range of Levels that can be Pendulum Summoned."
  },
  {
    cards: ["level", "tribute summon", "5 needs 1", "7 needs 2", "requirement"],
    q: "A Level 6 monster requires how many tributes for a Normal Summon?",
    a: "Level 6 monsters require exactly 1 tribute for a Normal Summon. Level 5 and 6 both require 1 tribute. Level 7 and higher require 2 tributes. The tribute requirement is based on Level thresholds not the exact Level."
  },
  {
    cards: ["rank", "exceed summon", "old term", "xyz summon same thing"],
    q: "Is an Exceed Summon the same as an Xyz Summon?",
    a: "Yes. Exceed Summon is the older term used in early translated versions of the game. The current official English term is Xyz Summon. They refer to the same game action. Any cards referencing Exceed Summon are treated as referencing Xyz Summons."
  },
  {
    cards: ["level", "effect veiler", "level 1 tuner", "synchro material"],
    q: "Can Effect Veiler be used as a Synchro Material?",
    a: "Yes. Effect Veiler is a Level 1 Tuner monster. It can be used as the Tuner material for a Synchro Summon. The non-Tuner materials must have combined Levels equal to the Synchro Monster Level minus 1."
  },
  {
    cards: ["level", "mismatch", "cannot synchro", "total wrong"],
    q: "What happens if Synchro Material Levels do not match the Synchro Monster's Level?",
    a: "The Synchro Summon is illegal and cannot be performed. The combined Levels must equal exactly the Synchro Monster's Level. If the total is too high or too low the summon cannot proceed. The player must choose different materials."
  },
  {
    cards: ["rank", "chaos xyz", "rank 4 to rank 5", "by rank up magic"],
    q: "Can a Rank 4 Xyz Monster be upgraded to a Rank 5 Xyz Monster?",
    a: "Yes if you have a Rank-Up Magic Spell that allows it. Cards like Rank-Up Magic Astral Force and various other Rank-Up Magic Spells allow upgrading Xyz Monsters by 1 or more Ranks. The original monster becomes the material for the new one."
  },
  {
    cards: ["level", "reduction", "cost", "level eater", "lower level"],
    q: "Level Eater can lower a monster's Level by 1. Does this affect Synchro requirements?",
    a: "Yes. When Level Eater lowers a monster's Level by 1 the new Level is used for all Synchro Summon calculations. A Level 5 monster reduced to Level 4 by Level Eater is treated as Level 4 for material purposes."
  },
  {
    cards: ["rank", "number monsters", "rank specific", "cannot use wrong rank"],
    q: "Can Number monsters be used as Xyz Material for any Rank Xyz Monster?",
    a: "Number monsters can be used as Xyz Materials for Xyz Monsters of the same Rank. A Number 39 Utopia (Rank 4) can be used as material for another Rank 4 Xyz Monster. Some Number monsters have specific restrictions in their text about what they can be used for."
  },
  {
    cards: ["level", "max level 12", "monster highest level", "illegal above 12"],
    q: "What is the maximum Level a monster can have?",
    a: "The maximum Level for monsters is 12. Level 12 is the highest printed Level in Yu-Gi-Oh. There are no Level 13 or higher monsters in the standard game. Some card effects can temporarily increase Levels beyond 12 for game mechanic purposes but no printed monster has Level above 12."
  },
  {
    cards: ["rank", "no level xyz material", "rank 1 to rank 13"],
    q: "What is the maximum Rank an Xyz Monster can have?",
    a: "Xyz Monsters range from Rank 1 to Rank 13. Number C1000 Numeronius is an example of a very high Rank Xyz Monster. High Rank Xyz Monsters typically require specific summoning conditions or Rank-Up effects to summon."
  },
  {
    cards: ["level", "synchro tuner count", "two tuners", "some synchros"],
    q: "Can a Synchro Summon use more than one Tuner?",
    a: "Yes for specific Synchro Monsters that require 2 Tuners. Most Synchro Monsters require exactly 1 Tuner and any number of non-Tuners. Some advanced Synchro Monsters specifically require 2 or more Tuner monsters. Always check the Synchro Monster's material requirements."
  },
  {
    cards: ["level", "fusion monster", "no level some", "some do have level"],
    q: "Do Fusion Monsters have Levels?",
    a: "Yes. Most Fusion Monsters have Levels ranging from 1 to 12. Fusion Monster Levels can be used as materials for further Synchro or Xyz Summons if needed. However some Fusion Monsters are used as materials more rarely than Extra Deck monsters of other types."
  },
  {
    cards: ["counter trap", "spell speed 3", "only counter trap responds", "most powerful"],
    q: "What makes Counter Traps special?",
    a: "Counter Traps are Spell Speed 3 which is the highest Spell Speed in the game. Only other Counter Traps (also Speed 3) can be chained to Counter Traps. Regular Traps (Speed 2), Quick-Play Spells (Speed 2), and monster Quick Effects (Speed 2) cannot be chained to Counter Traps. This makes them extremely powerful negation tools."
  },
  {
    cards: ["solemn judgment", "negate any", "half lp", "summon spell trap"],
    q: "What can Solemn Judgment negate?",
    a: "Solemn Judgment can negate the activation of any monster Summon, Spell card, or Trap card. Pay half your current LP rounded down. The negated card is destroyed and sent to the GY. It is treated as if the activation never occurred. It is one of the most versatile Counter Traps."
  },
  {
    cards: ["solemn strike", "negate summon effect", "1500 lp", "specific"],
    q: "What can Solemn Strike negate?",
    a: "Solemn Strike negates the activation of a monster effect or the Special Summon of a monster. Pay 1500 LP. It cannot negate Normal Summons or Spell and Trap activations. It is specifically for monster effects and Special Summons."
  },
  {
    cards: ["solemn warning", "negate summon effect that summons", "2000 lp"],
    q: "What can Solemn Warning negate?",
    a: "Solemn Warning negates any monster Summon or the activation of a card or effect that includes a Special Summon. Pay 2000 LP. It can negate Normal Summons unlike Solemn Strike. It can also negate effects that would Special Summon as part of their effect."
  },
  {
    cards: ["counter trap", "chain to counter trap", "only counter trap", "dark bribe"],
    q: "Can Dark Bribe be chained to Solemn Judgment?",
    a: "Yes. Dark Bribe is a Counter Trap (Speed 3). Solemn Judgment is also a Counter Trap (Speed 3). Counter Traps can only be responded to by other Counter Traps so Dark Bribe can legally be chained to Solemn Judgment."
  },
  {
    cards: ["counter trap", "regular trap cannot chain", "mirror force cannot respond"],
    q: "Can Mirror Force be chained to a Counter Trap?",
    a: "No. Mirror Force is a Normal Trap with Spell Speed 2. Counter Traps are Spell Speed 3. You cannot chain a lower Spell Speed card to a higher one. Mirror Force cannot be chained to any Counter Trap."
  },
  {
    cards: ["counter trap", "quick effect monster", "cannot chain", "speed 2 vs 3"],
    q: "Can a monster Quick Effect be chained to a Counter Trap?",
    a: "No. Monster Quick Effects are Spell Speed 2. Counter Traps are Spell Speed 3. Speed 2 effects cannot be chained to Speed 3 effects. No monster effect of any kind can be chained to a Counter Trap."
  },
  {
    cards: ["dark bribe", "negate spell trap", "opponent draws", "counter trap"],
    q: "How does Dark Bribe work?",
    a: "Dark Bribe is a Counter Trap that negates the activation of 1 Spell or Trap card and destroys it. The opponent then draws 1 card as part of Dark Bribe's effect. Ash Blossom could theoretically respond to the draw but since it is during resolution of a Counter Trap nothing can chain to it."
  },
  {
    cards: ["counter trap", "set required", "one turn wait", "cannot activate same turn"],
    q: "Can a Counter Trap be activated the same turn it is Set?",
    a: "No. All Trap cards including Counter Traps cannot be activated the same turn they are Set. They must remain face-down for at least until the opponent's next turn. This is the universal Trap rule that applies to Counter Traps as well."
  },
  {
    cards: ["seven tools of the bandit", "negate trap", "1000 lp", "counter trap"],
    q: "How does Seven Tools of the Bandit work?",
    a: "Seven Tools of the Bandit is a Counter Trap that negates the activation of a Trap card and destroys it. Pay 1000 LP. It specifically targets Trap card activations only not Spell cards or monster effects."
  },
  {
    cards: ["counter trap", "jinzo", "prevents traps", "counter trap also blocked"],
    q: "Jinzo is on the field. Can Counter Traps still be activated?",
    a: "No. Jinzo's continuous effect negates all Trap effects and prevents their activation. This includes Counter Traps. Counter Traps are still Trap cards and are blocked by Jinzo just like regular Traps."
  },
  {
    cards: ["counter trap", "during damage step", "can activate", "allowed"],
    q: "Can Counter Traps be activated during the Damage Step?",
    a: "Yes. Counter Traps (Speed 3) can always be activated during the Damage Step. This is one of the exceptions to the Damage Step restriction. Regular Traps (Speed 2) cannot be activated in the Damage Step but Counter Traps always can."
  },
  {
    cards: ["mannadium reframing", "counter trap", "negate monster effect", "synchro"],
    q: "How does Mannadium Reframing work?",
    a: "Mannadium Reframing is a Counter Trap that negates the activation of a monster effect on the field and destroys that monster. Then you can Special Summon a Mannadium Tuner from your Deck. It combines negation with free Special Summoning."
  },
  {
    cards: ["counter trap", "activate spell trap same turn set", "cannot", "rule"],
    q: "A Counter Trap was just Set this turn by a card effect. Can it be activated?",
    a: "No. Even if a Trap card is Set by a card effect it still cannot be activated the same turn it was Set. The one turn wait rule applies regardless of how the Trap was Set."
  },
  {
    cards: ["counter trap", "imperial order active", "spell negated", "trap still works"],
    q: "Imperial Order is active negating all Spell effects. Can Counter Traps still be activated?",
    a: "Yes. Counter Traps are Trap cards not Spell cards. Imperial Order only negates Spell card effects. Counter Traps and all other Trap cards function normally while Imperial Order is active."
  },
  {
    cards: ["solemn judgment", "cannot activate", "lp too low", "half would be zero"],
    q: "A player has 100 LP. Can they activate Solemn Judgment?",
    a: "Yes. Half of 100 rounded down is 50 LP. The player pays 50 LP and has 50 remaining. Solemn Judgment can be activated as long as paying half LP does not reduce the player to 0 or less. The player must have at least 2 LP to activate Solemn Judgment."
  },
  {
    cards: ["counter trap", "skill drain", "negate counter trap", "cannot"],
    q: "Can Skill Drain negate a Counter Trap?",
    a: "No. Skill Drain is a Continuous Trap that negates monster effects. It does not negate Trap cards. Counter Traps are Spell Speed 3 and cannot be responded to by Skill Drain which is a Continuous Trap effect not an activated Counter Trap."
  },
  {
    cards: ["counter trap", "response window", "after activation", "chain only counter trap"],
    q: "After a Counter Trap is activated what can the opponent do?",
    a: "The opponent can only respond to a Counter Trap with another Counter Trap (Speed 3). If the opponent has no Counter Trap to chain with the Counter Trap resolves without opposition. No Quick Effects or regular Traps can be chained."
  },
  {
    cards: ["solemn strike", "normal summon", "cannot negate", "only special and monster effect"],
    q: "Can Solemn Strike negate a Normal Summon?",
    a: "No. Solemn Strike can only negate Special Summons and monster effect activations. Normal Summons cannot be negated by Solemn Strike. Use Solemn Warning or Solemn Judgment to negate Normal Summons."
  },
  {
    cards: ["counter trap", "activated while set", "response chain", "flip up activate"],
    q: "How is a Counter Trap activated from the face-down position?",
    a: "When activating a Set Trap card you flip it face-up and activate it simultaneously. For Counter Traps this means the card goes from face-down to face-up and enters the chain in one action. The activation is the flip-up and chain entry together."
  },
  {
    cards: ["flip monster", "flip effect", "what is", "face-down"],
    q: "What are Flip Monsters and how do their effects work?",
    a: "Flip Monsters are monsters with FLIP effects that activate when they are flipped face-up. They can be Set face-down and flipped by an attack, by a Flip Summon, or by a card effect. The FLIP effect activates when the monster is flipped face-up. Not all face-down monsters are Flip Monsters."
  },
  {
    cards: ["flip effect", "when activates", "end of damage step", "after calculation"],
    q: "When does a FLIP effect activate during battle?",
    a: "When a face-down monster is attacked and flipped face-up the monster is revealed at the Start of the Damage Step. The FLIP effect activates After Damage Calculation at the End of the Damage Step sub-step. The effect activates even if the monster is destroyed by the attack."
  },
  {
    cards: ["flip effect", "destroyed same turn flipped", "still activates"],
    q: "A Flip Monster is flipped face-up by an attack and immediately destroyed. Does its FLIP effect still activate?",
    a: "Yes. FLIP effects activate After Damage Calculation even if the monster is destroyed by the attack. The monster was successfully flipped face-up and the FLIP effect triggers. The effect activates at the End of the Damage Step regardless of whether the monster survives."
  },
  {
    cards: ["flip summon", "manually flip", "attack position", "main phase"],
    q: "What is a Flip Summon?",
    a: "A Flip Summon is when a player manually changes a face-down Defense Position monster to face-up Attack Position during the Main Phase. It does not use the Normal Summon for the turn. FLIP effects also activate when Flip Summoned."
  },
  {
    cards: ["flip summon", "response window", "after flip", "can respond"],
    q: "Can players respond to a Flip Summon?",
    a: "Yes. After a Flip Summon both players have a response window. The FLIP effect itself activates after the response window so players can respond to the Flip Summon before the FLIP effect activates."
  },
  {
    cards: ["flip effect", "card effect flips", "mystical space typhoon", "does not trigger"],
    q: "A card effect flips a face-down monster face-up. Does the FLIP effect activate?",
    a: "Yes. FLIP effects activate whenever a monster is flipped face-up regardless of how it was flipped. Whether by attack, Flip Summon, or card effect the FLIP effect activates when the monster becomes face-up."
  },
  {
    cards: ["flip monster", "set", "cannot attack", "same turn"],
    q: "Can a Flip Monster attack the same turn it is Set?",
    a: "No. A monster that is Set face-down cannot attack. It must first be flipped face-up either by a Flip Summon, attack, or card effect before it can attack. Monsters cannot attack while face-down."
  },
  {
    cards: ["flip effect", "mandatory", "optional", "you can"],
    q: "Can FLIP effects be optional?",
    a: "Yes. Some FLIP effects are optional and use you can language. Optional FLIP effects can be declined. Mandatory FLIP effects must activate when triggered. Most FLIP effects are mandatory but always check the card text."
  },
  {
    cards: ["ryko", "lightsworn", "flip effect", "mill three", "destroy"],
    q: "How does Ryko Lightsworn Hunter's FLIP effect work?",
    a: "When Ryko is flipped face-up its FLIP effect activates After Damage Calculation. Ryko can destroy 1 card on the field then mills 3 cards from the top of your Deck to the GY. Both the destruction and the mill are part of the same effect."
  },
  {
    cards: ["flip monster", "book of moon", "flip face-down", "reset flip effect"],
    q: "A Flip Monster was already flipped face-up. Book of Moon flips it face-down again. Can its FLIP effect activate again?",
    a: "Yes. If a Flip Monster is flipped face-down again and then flipped face-up again its FLIP effect can activate again. The FLIP effect triggers each time the monster is successfully flipped face-up from a face-down position."
  },
  {
    cards: ["flip effect", "continuous flip", "treeborn like", "face-down set each turn"],
    q: "Can Flip Monsters be re-Set and re-flipped for repeated FLIP effects?",
    a: "Yes. If a Flip Monster is Set face-down again it can be flipped face-up again to activate its FLIP effect again. There is no restriction on using FLIP effects multiple times unless the card itself has a once per turn restriction."
  },
  {
    cards: ["flip monster", "attacked", "flip face-up", "start damage step"],
    q: "When exactly is an attacked face-down monster flipped face-up?",
    a: "An attacked face-down monster is flipped face-up at the Start of the Damage Step before Damage Calculation. Both players can then see the monster and its effects before damage is calculated. The FLIP effect itself activates later After Damage Calculation."
  },
  {
    cards: ["flip effect", "skill drain", "on field face-up", "negated"],
    q: "Skill Drain is active. Does it negate a Flip Monster's FLIP effect?",
    a: "Yes. FLIP effects activate while the monster is face-up on the field making them subject to Skill Drain. If Skill Drain is active when the FLIP effect activates the effect resolves negated."
  },
  {
    cards: ["flip monster", "morphing jar", "both players discard draw", "when flipped"],
    q: "How does Morphing Jar's FLIP effect work?",
    a: "When Morphing Jar is flipped face-up both players discard their entire hand and draw 5 new cards. This happens After Damage Calculation. The discard and draw is mandatory for both players. It affects both players simultaneously."
  },
  {
    cards: ["flip effect", "destroyed before flipped", "book of moon after attack declared"],
    q: "Can a face-down monster be destroyed before it is flipped during an attack?",
    a: "Yes. During the Start of the Damage Step some effects can destroy the attacking monster before the face-down is flipped. However the face-down defending monster is flipped face-up at the Start of the Damage Step so it is revealed before most Damage Step effects activate."
  },
  {
    cards: ["fossil dyna", "pachycephalo", "flip destroys special summoned", "when"],
    q: "Fossil Dyna Pachycephalo is flipped. When does it destroy Special Summoned monsters?",
    a: "Fossil Dyna's FLIP effect that destroys all Special Summoned monsters activates After Damage Calculation at the End of the Damage Step. Its continuous effect preventing new Special Summons applies as soon as it is face-up but the destruction of existing ones happens via the FLIP effect."
  },
  {
    cards: ["flip monster", "cannot be flipped face-down", "protection", "some monsters"],
    q: "Can face-up Flip Monsters be targeted by Book of Moon?",
    a: "Yes unless the monster has protection against being targeted or changed to Defense Position. Most Flip Monsters can be flipped face-down again by Book of Moon. When flipped face-down they lose their face-up status and the FLIP effect can activate again when flipped face-up."
  },
  {
    cards: ["flip effect", "graveyard effect", "different from flip effect", "some have both"],
    q: "Some Flip Monsters also have GY effects. Are these the same as FLIP effects?",
    a: "No. FLIP effects only activate when the monster is flipped face-up. GY effects activate when the monster is in the GY. They are completely separate effects. A Flip Monster can have both a FLIP effect and a GY effect that each activate under different conditions."
  },
  {
    cards: ["flip monster", "set by effect", "opponent sets your monster", "face-down"],
    q: "If a monster is forced face-down by an opponent effect does it count as being Set?",
    a: "Yes. When a monster is flipped face-down by a card effect it is treated as being in face-down Defense Position similar to being Set. If it is flipped face-up again its FLIP effect can activate."
  },
  {
    cards: ["flip effect", "cannot activate", "ghost ogre", "not damage step"],
    q: "Can Ghost Ogre respond to a FLIP effect activation?",
    a: "FLIP effects activate After Damage Calculation which is during the Damage Step. Ghost Ogre cannot activate during the Damage Step because it does not modify ATK or DEF. Ghost Ogre cannot respond to FLIP effect activations during battle."
  },
  {
    cards: ["normal summon", "once per turn", "main phase", "cannot twice"],
    q: "How many times can a player Normal Summon per turn?",
    a: "By default a player can only Normal Summon or Set once per turn. This includes both Normal Summons and Setting monsters face-down. Some card effects grant additional Normal Summons. The once per turn restriction resets each turn."
  },
  {
    cards: ["normal summon", "level 1 to 4", "no tribute", "directly from hand"],
    q: "What Level monsters can be Normal Summoned without tributing?",
    a: "Monsters with Level 1 through 4 can be Normal Summoned directly from the hand without any tribute. Level 5 and 6 require 1 tribute. Level 7 and higher require 2 tributes. This applies to Normal Summons only not Special Summons."
  },
  {
    cards: ["normal summon", "tribute summon", "level 5 6 one tribute", "level 7 plus two"],
    q: "How many tributes are required for high level monsters?",
    a: "Level 5 and 6 monsters require 1 tribute for a Normal Summon. Level 7 and higher require 2 tributes. The tributed monsters are sent to the GY. Tokens can be used as tributes. The summoned monster can attack immediately unless restricted."
  },
  {
    cards: ["normal summon", "negate", "solemn warning", "solemn judgment"],
    q: "Can a Normal Summon be negated?",
    a: "Yes. Counter Traps like Solemn Warning and Solemn Judgment can negate Normal Summons. The negated monster is sent to the GY and the summon is treated as if it never occurred. The player loses their Normal Summon for the turn even if negated."
  },
  {
    cards: ["normal summon", "response window", "after summon", "chain to summon"],
    q: "Can cards be activated in response to a Normal Summon?",
    a: "Yes. After a Normal Summon both players have a response window where they can activate cards or effects. Quick Effects and Trap cards can be activated. However you cannot chain to the summon itself only respond after it occurs."
  },
  {
    cards: ["normal summon", "cannot attack", "turn summoned", "some restriction"],
    q: "Can a monster attack the same turn it is Normal Summoned?",
    a: "Yes by default. There is no general rule preventing Normal Summoned monsters from attacking the turn they are summoned. However some monsters specifically say they cannot attack the turn they are Normal Summoned. Always check the individual card text."
  },
  {
    cards: ["normal summon", "additional summon", "floowandereeze", "double summon"],
    q: "Can additional Normal Summons be granted by card effects?",
    a: "Yes. Some cards grant additional Normal Summons. Double Summon grants 1 additional Normal Summon. Floowandereeze monsters grant additional Normal Summons when summoned. Ultimate Conductor Tyranno can be Normal Summoned without tribute under certain conditions."
  },
  {
    cards: ["normal summon", "set", "face-down", "defense position", "counts as summon"],
    q: "Does Setting a monster count as a Normal Summon?",
    a: "Yes. Setting a monster face-down in Defense Position uses your Normal Summon for the turn. You cannot both Normal Summon and Set a monster in the same turn unless an effect grants an additional Normal Summon."
  },
  {
    cards: ["normal summon", "flip summon", "different", "not use normal summon"],
    q: "Does a Flip Summon use up the Normal Summon?",
    a: "No. A Flip Summon is when you manually flip a face-down Set monster face-up in Attack Position during the Main Phase. This does not use the Normal Summon for the turn. A player can both Flip Summon and Normal Summon in the same turn."
  },
  {
    cards: ["normal summon", "cannot normal summon", "restriction", "some cards"],
    q: "Some cards prevent Normal Summons for the turn. Does this include Sets?",
    a: "Yes. Restrictions on Normal Summons typically prevent both Normal Summons and Setting monsters face-down. If a card says you cannot Normal Summon this turn it usually means you cannot Set either unless the restriction specifically only mentions one."
  },
  {
    cards: ["normal summon", "gemini", "second normal summon", "on field", "gain effect"],
    q: "Gemini monsters require a second Normal Summon on the field. Does this use the Normal Summon?",
    a: "Yes. Normal Summoning a Gemini monster already on the field to grant it effects uses the Normal Summon for the turn. The second Normal Summon on the field counts as the turn Normal Summon."
  },
  {
    cards: ["normal summon", "level 5 tribute", "opponent monster", "cannot use"],
    q: "Can opponent monsters be tributed for a Normal Summon?",
    a: "No. For a standard Tribute Summon you can only tribute monsters you control. You cannot tribute opponent monsters for your own Normal Summon unless a card effect specifically allows tributing opponent monsters."
  },
  {
    cards: ["normal summon", "during opponent turn", "cannot", "main phase only"],
    q: "Can a Normal Summon be performed during the opponent's turn?",
    a: "No. Normal Summons can only be performed during your own Main Phase. They cannot be performed during the opponent's turn under any normal circumstances. Only Special Summons can be performed during the opponent's turn via Quick Effects."
  },
  {
    cards: ["normal summon", "one tribute", "wrong number", "illegal"],
    q: "Can a Level 5 monster be Normal Summoned with 2 tributes instead of 1?",
    a: "No. The tribute requirement is exact. Level 5 and 6 require exactly 1 tribute. Level 7 and higher require exactly 2 tributes. Providing more tributes than required is illegal. You must provide the exact number required."
  },
  {
    cards: ["normal summon", "effect activates on summon", "trigger", "response window"],
    q: "A monster has an effect that activates when Normal Summoned. When does this trigger?",
    a: "Trigger effects that activate when Normal Summoned activate in the Normal Summon response window. After the Normal Summon both players can respond. Then the summoned monster's on-summon trigger effect activates in a new chain if it was not responded to."
  },
  {
    cards: ["normal summon", "advance summon", "tribute summon", "same thing"],
    q: "Is a Tribute Summon the same as an Advance Summon?",
    a: "Yes. Tribute Summon and Advance Summon are the same thing. Tributing monsters to Normal Summon Level 5 or higher monsters is called a Tribute Summon or Advance Summon interchangeably. Both terms refer to the same game action."
  },
  {
    cards: ["normal summon", "token", "cannot normal summon token", "only special"],
    q: "Can Tokens be Normal Summoned?",
    a: "No. Tokens can only be Special Summoned by card effects that generate them. They cannot be Normal Summoned. Tokens are always Special Summoned and placed in Main Monster Zones."
  },
  {
    cards: ["normal summon", "cannot special summon after", "restriction both ways"],
    q: "Some effects say if you Normal Summon you cannot Special Summon. When does this apply?",
    a: "This restriction applies for the rest of the turn after the Normal Summon occurs. Any Special Summons attempted after the Normal Summon would be illegal. However if the restriction says the turn you Normal Summon it applies even if the Normal Summon came first."
  },
  {
    cards: ["life points", "starting lp", "8000", "win condition"],
    q: "What are the starting Life Points and win condition in Yu-Gi-Oh?",
    a: "Both players start with 8000 Life Points. A player wins when the opponent LP reaches 0. LP can also reach 0 from card effects that deal damage. If both players reach 0 simultaneously it is a draw. Other win conditions include opponent drawing from empty Deck and holding all 5 Exodia pieces."
  },
  {
    cards: ["battle damage", "atk def", "calculation", "how much damage"],
    q: "How is battle damage calculated?",
    a: "When an attacking monster battles a Defense Position monster: if ATK exceeds DEF the defending player takes damage equal to the difference (only with piercing). Without piercing no damage is dealt. When attacking an Attack Position monster: the player whose monster has lower ATK takes damage equal to the difference. Both destroyed simultaneously means no damage."
  },
  {
    cards: ["effect damage", "not battle damage", "burn", "direct"],
    q: "What is the difference between battle damage and effect damage?",
    a: "Battle damage comes from monsters battling. Effect damage (burn damage) comes from card effects. Some cards specifically care about the type of damage. Cards like Bad Reaction to Simochi convert LP gain to damage. Solemn Judgment halving LP is effect damage. Ring of Destruction deals effect damage equal to a monster ATK."
  },
  {
    cards: ["lp", "zero", "lose immediately", "during battle", "damage step"],
    q: "If a player reaches 0 LP during the Damage Step do they immediately lose?",
    a: "Yes. A player loses the duel immediately when their LP reaches 0 regardless of the phase. This applies during the Damage Step, during battle damage calculation, or from any card effect. No more effects can be activated after LP reaches 0."
  },
  {
    cards: ["lp gain", "heal", "increase", "bad reaction simochi"],
    q: "Can LP be gained above the starting 8000?",
    a: "Yes. LP can exceed 8000 through healing effects. There is no maximum LP limit. Gaining LP does not win the game. Some cards like Bad Reaction to Simochi convert LP gain to damage, and Solemn Judgment gains 0 LP if used when already at maximum LP still works."
  },
  {
    cards: ["solemn judgment", "half lp", "cost", "minimum 1"],
    q: "Solemn Judgment costs half LP. What if LP is an odd number?",
    a: "The cost is rounded down. If a player has 3000 LP Solemn Judgment costs 1500. If a player has 1 LP Solemn Judgment cannot be activated because half of 1 rounded down is 0 and you cannot pay 0 LP as a cost that requires paying LP."
  },
  {
    cards: ["lp", "cannot take damage", "protection", "waboku", "negate damage"],
    q: "Can damage be negated or prevented?",
    a: "Yes. Cards like Waboku reduce all battle damage to 0. Damage Step modifiers can change damage amounts. Some monsters grant immunity to battle damage. Life Point protection effects prevent LP from reaching 0 in some cases. Damage can be reduced but not reversed after being applied."
  },
  {
    cards: ["battle damage", "piercing", "defense position", "trample", "atk exceeds def"],
    q: "When does piercing damage apply?",
    a: "Piercing damage occurs when a monster with the piercing ability attacks a Defense Position monster and its ATK exceeds the defending monster DEF. The difference is dealt as battle damage to the defending player LP. Without the piercing ability attacking Defense Position monsters deals 0 damage even if ATK exceeds DEF."
  },
  {
    cards: ["lp", "both zero", "simultaneous", "draw", "tie"],
    q: "Both players reach 0 LP simultaneously. What happens?",
    a: "If both players reach 0 LP simultaneously the duel is a draw. This can happen when both monsters destroy each other in battle and both players take lethal damage, or when a card effect deals damage to both players simultaneously."
  },
  {
    cards: ["damage", "reflected", "ring of destruction", "both players"],
    q: "Ring of Destruction deals damage to both players. Does the controller lose if it kills them?",
    a: "If Ring of Destruction deals lethal damage to the controller the controller loses. If it deals lethal damage to both players simultaneously it is a draw. The damage is applied to both simultaneously so both reaching 0 results in a draw."
  },
  {
    cards: ["lp", "upstart goblin", "opponent gains 1000", "draw card"],
    q: "Upstart Goblin gives opponent 1000 LP. Is this mandatory?",
    a: "Yes. The LP gain for the opponent is mandatory and is part of the effect. The LP gain and the draw both happen as the effect resolves. The opponent gaining 1000 LP cannot be prevented when Upstart Goblin resolves."
  },
  {
    cards: ["battle damage", "zero atk", "attacking zero atk monster", "no damage"],
    q: "A monster with 0 ATK attacks another 0 ATK monster. What happens?",
    a: "Both monsters battle but neither is destroyed and no damage is dealt. When two monsters have equal ATK both are destroyed in battle. With 0 ATK vs 0 ATK both monsters are destroyed simultaneously and neither player takes battle damage."
  },
  {
    cards: ["lp", "lp cost", "effect", "pay 500", "activate"],
    q: "Can a player activate a card whose LP cost would reduce them to exactly 0?",
    a: "No. A player cannot pay an LP cost that would reduce their LP to 0 or less. LP costs require the player to have more LP than the cost. Example: A player at 500 LP cannot pay 500 LP as a cost because it would reduce them to exactly 0."
  },
  {
    cards: ["damage", "battle damage only", "some cards", "effect damage not count"],
    q: "Some cards say when you take battle damage. Does effect damage trigger these?",
    a: "No. Cards that specifically say battle damage only trigger from damage received through monster battles. Effect damage from card effects like burning effects does not count as battle damage and does not trigger these effects."
  },
  {
    cards: ["lp", "cannot drop below 1", "some effects", "protection"],
    q: "Can cards prevent LP from dropping below 1?",
    a: "Yes. Some card effects specifically prevent LP from dropping below 1. Golden Castle of Stromberg and some other cards have this protection. However most LP protection effects only protect against specific types of damage. Cards that specifically reduce LP to a certain number bypass most protection."
  },
  {
    cards: ["battle damage", "not dealt", "defense position attack", "no piercing"],
    q: "A monster attacks a Defense Position monster with higher DEF. What happens?",
    a: "The attacking monster is not destroyed (since it attacked) unless its ATK is lower than the DEF. Without piercing the defending player takes no battle damage. The attacking monster survives unless the DEF exceeds the ATK in which case the attacker is destroyed."
  },
  {
    cards: ["lp", "double damage", "some effects", "sky striker", "battle damage doubled"],
    q: "Some effects double battle damage. When is this applied?",
    a: "Effects that double battle damage are applied after normal damage calculation. The normal damage is calculated first then doubled. These are typically continuous effects that apply for specific conditions like attacking directly or attacking monsters in certain positions."
  },
  {
    cards: ["damage", "step", "lp reduced", "direct attack", "no monsters"],
    q: "How is damage calculated for a direct attack?",
    a: "When a monster attacks directly with no defending monsters the attacking player's monster ATK value is dealt as direct damage to the opponent LP. No DEF comparison is made. The full ATK value becomes the damage amount."
  },
  {
    cards: ["lp", "pot of prosperity", "battle damage halved", "activating player"],
    q: "Pot of Prosperity halves battle damage the opponent takes this turn. Does this apply to both players?",
    a: "No. Pot of Prosperity's damage halving only applies to battle damage that the opponent (the player who did not activate Prosperity) would take. It does not affect damage taken by the Prosperity player."
  },
  {
    cards: ["lp", "cannot gain", "some restrictions", "nurse reficule", "damage instead"],
    q: "Nurse Reficule the Fallen One is on the field. Opponent activates a card that would make them gain LP. What happens?",
    a: "Nurse Reficule converts any LP gain the opponent would have into damage instead. The opponent takes damage equal to the LP they would have gained. This applies to all LP gain effects including mandatory ones."
  },
  {
    cards: ["battle damage", "indestructible", "battle", "still takes damage"],
    q: "A monster cannot be destroyed by battle. Does the player still take battle damage?",
    a: "Yes. Cannot be destroyed by battle only prevents the monster from being destroyed. The player whose monster has lower ATK still takes battle damage equal to the difference. The indestructible monster survives but LP damage is still applied."
  },
  {
    cards: ["lp", "equal to zero", "not less than zero", "exactly zero loses"],
    q: "Does a player lose if LP reaches exactly 0 or only below 0?",
    a: "A player loses when LP reaches exactly 0. LP reaching 0 is the losing condition. LP cannot go below 0 in the game state because the player has already lost at exactly 0."
  },
  {
    cards: ["hand", "private knowledge", "cannot look", "opponent hand"],
    q: "Is the hand private knowledge in Yu-Gi-Oh?",
    a: "Yes. The hand is private knowledge. Players cannot look at the opponent hand unless a card effect specifically allows it. Players can count the number of cards in the opponent hand at any time but cannot see what those cards are without a card effect."
  },
  {
    cards: ["hand", "size limit", "six cards", "end phase discard"],
    q: "What is the hand size limit?",
    a: "The hand size limit is 6 cards. It is only enforced during the End Phase. During the game a player can have any number of cards in hand. At the End Phase if a player has more than 6 cards they must discard down to 6 of their choice."
  },
  {
    cards: ["hand", "adding", "drawing", "difference", "ash blossom"],
    q: "What is the difference between adding a card to hand and drawing a card?",
    a: "Drawing means taking the top card of the Deck and putting it in hand. Adding means moving a specific card from the Deck, GY, or field to the hand. Both trigger Droll and Lock Bird. However some effects specifically say draw and others say add. They are treated differently by cards that care about the method."
  },
  {
    cards: ["deck", "minimum cards", "40 cards", "maximum 60", "construction"],
    q: "What are the Deck size rules?",
    a: "The Main Deck must contain a minimum of 40 cards and a maximum of 60 cards. The Extra Deck can contain up to 15 cards. The Side Deck can contain up to 15 cards. During a duel the Deck is kept face-down and players cannot look through it freely."
  },
  {
    cards: ["deck", "cannot look", "private", "face-down", "shuffle"],
    q: "Can a player look through their own Deck during the game?",
    a: "No. The Deck is private and face-down during the duel. Players cannot search through their Deck freely. Only card effects that specifically allow searching or looking through the Deck permit this action. After searching the Deck is always shuffled."
  },
  {
    cards: ["hand", "trap activation from hand", "monster effect from hand", "quick effect"],
    q: "Can monster effects be activated from the hand?",
    a: "Yes but only if the card specifically states the effect can be activated from the hand. Most hand trap effects specifically say you can activate this effect from your hand. Examples include Ash Blossom, Effect Veiler discard to GY, and Maxx C. Without hand activation text effects cannot be used from hand."
  },
  {
    cards: ["deck", "shuffle", "after search", "mandatory"],
    q: "When must the Deck be shuffled?",
    a: "The Deck must be shuffled after any card effect searches through it. This includes search effects that add a card, look at specific cards, or rearrange cards. The Deck is shuffled before returning to the game state. The opponent has the right to cut after shuffling."
  },
  {
    cards: ["hand", "discard", "send to gy", "from hand", "difference cost effect"],
    q: "What is the difference between discarding and sending from hand to GY?",
    a: "Discarding is the term for sending a card from hand to the GY as a cost or effect. Sending to the GY from hand is slightly broader and can include effects. Under Macro Cosmos both go to the banished zone instead. Dark World monsters care about being discarded specifically."
  },
  {
    cards: ["hand", "card revealed", "shown to opponent", "public"],
    q: "When is a hand card revealed to the opponent?",
    a: "Hand cards are revealed when: activated as a Spell or Trap, when an effect requires showing them (Kashtira Fenrir searching requires revealing), when added by an opponent search effect to know what was added, or when the game ends. The opponent can ask to see a card that was just added to hand by an effect."
  },
  {
    cards: ["deck", "deck out", "empty deck", "lose condition", "draw"],
    q: "When does a Deck Out loss occur?",
    a: "A Deck Out loss occurs when a player is required to draw one or more cards but has no cards remaining in their Deck. The loss occurs immediately at the moment the draw is required during the Draw Phase or by a draw effect. This is an automatic loss regardless of LP totals."
  },
  {
    cards: ["hand", "maximum hand size", "infinite", "during turn"],
    q: "Is there a maximum hand size during the turn?",
    a: "No. There is no maximum hand size during your turn or at any time other than the End Phase. Players can hold any number of cards in hand throughout the game. Only at the End Phase must players discard to 6."
  },
  {
    cards: ["deck", "top card", "revealed", "face-up deck", "future fusion"],
    q: "Can the top card of the Deck be revealed?",
    a: "Some card effects reveal the top card of the Deck or place cards on top face-up. When a card is face-up on top of the Deck it is public knowledge. Both players can see it. This matters for cards like Plaguespreader Zombie which places a card face-up on top of the Deck."
  },
  {
    cards: ["hand", "trap card", "activate set", "from hand impossible"],
    q: "Can Trap cards be activated directly from the hand?",
    a: "No. Trap cards cannot be activated directly from the hand. They must first be Set face-down on the field and remain there for at least one turn before they can be activated. This is the fundamental Trap card rule."
  },
  {
    cards: ["deck", "foolish burial", "send specific card", "search gy"],
    q: "Does Foolish Burial allow choosing any monster from the Deck?",
    a: "Yes. Foolish Burial sends any 1 monster card from the Deck to the GY. The player chooses which monster to send. The Deck is searched and shuffled after. Ash Blossom can negate Foolish Burial because it sends from Deck to GY."
  },
  {
    cards: ["hand", "zero cards", "topdecking", "no hand"],
    q: "Can a player have zero cards in hand?",
    a: "Yes. Having zero cards in hand is legal and common in competitive play. Some effects specifically trigger or have conditions based on the controller having no cards in hand. Having zero cards does not cause any special game state."
  },
  {
    cards: ["deck", "pile shuffle", "verify count", "before duel", "judge"],
    q: "Can a player count the opponent Deck before a duel?",
    a: "Yes. Before a duel both players have the right to count the opponent Deck to verify it has between 40 and 60 cards. This is done by counting face-down without looking at the cards. In a tournament a judge can also verify Deck counts."
  },
  {
    cards: ["hand", "triple tactics talent", "look at hand", "not target", "choose"],
    q: "Triple Tactics Talent looks at the opponent hand. Does this target?",
    a: "No. TTT's effect to look at the opponent hand does not target specific cards. The player simply looks at all cards in the opponent hand. This is not a targeting effect."
  },
  {
    cards: ["deck", "cannot search", "prohibition", "anti spell fragrance", "set only"],
    q: "Anti-Spell Fragrance is active. Can Spell cards still be searched from Deck?",
    a: "Yes. Anti-Spell Fragrance requires Spell cards to be Set before activation. It does not prevent searching or adding Spell cards to hand. Players can still search and hold Spell cards in hand they just cannot activate them directly from hand."
  },
  {
    cards: ["hand", "full hand six", "draw effect", "still draws then discard end"],
    q: "An effect forces the player to draw when they have 6 cards. What happens?",
    a: "The player draws the card and temporarily has 7 or more cards in hand. The hand size limit is only enforced at the End Phase. During the game a player can exceed 6 cards in hand from draw effects. The excess cards are discarded at the End Phase."
  },
  {
    cards: ["deck", "xyz material", "attached", "not in deck not in gy"],
    q: "Are Xyz Materials considered to be in the Deck or GY?",
    a: "No. Xyz Materials attached to an Xyz Monster are not in any zone. They are not in the Deck, hand, field, GY, or banished zone. They exist as overlaid units on the Xyz Monster. When the Xyz Monster leaves the field the materials go to the GY."
  },
  {
    cards: ["hand", "discard to gy", "dark world", "trigger", "opponent effect"],
    q: "Dark World monsters trigger when discarded by opponent effects. What counts?",
    a: "Dark World monsters trigger their special effects specifically when discarded by an opponent card effect. Being discarded by the controller own effect does not trigger the special Dark World effect. The discard must come from an opponent card like Card Destruction or Morphing Jar."
  },
  {
    cards: ["deck", "milling", "send from deck to gy", "not destroyed", "different"],
    q: "What is milling in Yu-Gi-Oh?",
    a: "Milling refers to sending cards from the Deck to the GY by card effects. Cards that are milled are sent not destroyed so they do not trigger destruction effects. They do trigger effects that activate when sent from Deck to GY. Ash Blossom can negate mill effects."
  },
  {
    cards: ["kashtira", "arise heart", "pot of prosperity", "banish", "mandatory trigger"],
    q: "Player A controls Arise-Heart. Opponent activates Pot of Prosperity. When does Arise-Heart trigger?",
    a: "Arise-Heart's mandatory effect triggers when a card is banished. It will activate as Chain Link 1 in a new chain after Pot of Prosperity finishes resolving and each banished card triggers Arise-Heart separately."
  },
  {
    cards: ["macro cosmos", "branded fusion", "materials", "send", "banish", "resolve"],
    q: "Macro Cosmos is active. Does Branded Fusion resolve?",
    a: "Yes. Sending materials to the GY for Branded Fusion is an effect not a cost. The materials are banished instead of going to the GY and the Fusion Monster is successfully Special Summoned. The fusion still works."
  },
  {
    cards: ["tearlaments rulkallos", "bystial magnamhut", "kaleido-heart", "chain", "special summon"],
    q: "Can Tearlaments Kaleido-Heart be chained after Rulkallos negates a Special Summon and Bystial Magnamhut is chained?",
    a: "No. Kaleido-Heart only shuffles a card and does not include a Special Summon in its effect. Rulkallos can only chain to effects that include a Special Summon."
  },
  {
    cards: ["forbidden crown", "super polymerization", "chain", "fuse", "quick play"],
    q: "Opponent activates Forbidden Crown on their monster. Can I chain Super Polymerization and fuse with that monster?",
    a: "Yes. Super Polymerization is a Quick-Play Spell with Spell Speed 2. Forbidden Crown is also Speed 2. You can chain Super Polymerization to Forbidden Crown's activation and use the targeted monster as Fusion Material. The monster is sent to the GY as Fusion Material before Forbidden Crown resolves, so Forbidden Crown resolves without effect since its target is gone."
  },
  {
    cards: ["super polymerization", "speed", "quick play", "chain", "spell speed 2"],
    q: "What Spell Speed is Super Polymerization?",
    a: "Super Polymerization is a Quick-Play Spell with Spell Speed 2. It can be activated during either player turn and can be chained to other Spell Speed 2 or lower activations. It cannot be responded to because no player can activate cards or effects in response to Super Polymerization."
  },
  {
    cards: ["sangan", "dd crow", "enemy controller", "banished", "chain", "crow"],
    q: "Sangan is tributed as cost for Enemy Controller. Opponent chains DD Crow banishing Sangan from GY. Does Sangan search?",
    a: "No. Sangan was banished by D.D. Crow, not sent to the Graveyard. Sangan's effect specifically requires it to be sent to the Graveyard. Even though Sangan was originally sent to the GY as a tribute cost, D.D. Crow banished it from the GY during the chain. Sangan ended up in the banished zone, not the GY, so its search condition was never met. Sangan does not activate."
  },
  {
    cards: ["sangan", "banished", "not graveyard", "search condition"],
    q: "Sangan is banished instead of going to the Graveyard. Does it search?",
    a: "No. Sangan's effect specifically requires it to be sent to the Graveyard. If Sangan is banished by any means such as Macro Cosmos, D.D. Crow, or Dimensional Fissure instead of going to the GY, its search effect does not activate because the condition was not met."
  },
  {
    cards: ["sangan", "tribute", "cost", "graveyard", "normally", "search activate"],
    q: "Sangan is tributed as cost and goes to GY normally with no chain. Does it search?",
    a: "Yes. When Sangan is tributed as a cost and successfully sent to the Graveyard with nothing negating or redirecting it, its mandatory trigger effect activates. Being tributed as a cost counts as being sent from the field to the GY, fulfilling Sangan's condition. But if Sangan is banished instead by DD Crow or Macro Cosmos it does NOT search."
  },
  {
    cards: ["megamorph", "forbidden droplet", "atk", "halve", "equip"],
    q: "Opponent monster is equipped with Megamorph and I activate Forbidden Droplet targeting it. What happens to its ATK?",
    a: "Forbidden Droplet halves the ATK of the targeted monster and negates its effects until end of turn. Megamorph is an Equip Spell that modifies ATK - it is not negated by Forbidden Droplet since Droplet negates monster effects not equip spell effects. Both apply simultaneously. The monster ATK is modified by Megamorph first then halved by Forbidden Droplet. Megamorph doubles ATK if your LP is lower or halves it if your LP is higher, then Forbidden Droplet halves that result."
  },
  {
    cards: ["nurakumo", "mitsurugi", "dimensional fissure", "ritual summon", "tribute", "banished"],
    q: "Nurakumo No Mitsurugi is Ritual Summoned while Dimensional Fissure is on the field. What happens?",
    a: "Mitsurugi is successfully Ritual Summoned and remains on the field. Dimensional Fissure does not prevent the Ritual Summon. However the monsters tributed as materials for the Ritual Summon are banished instead of going to the GY because Dimensional Fissure replaces all sends to the GY with banishing. The Ritual Summon itself resolves normally."
  },
  {
    cards: ["dimensional fissure", "ritual summon", "tribute", "material", "banished"],
    q: "Can you Ritual Summon while Dimensional Fissure is active?",
    a: "Yes. Dimensional Fissure does not prevent Ritual Summons. The Ritual Summon resolves normally and the summoned monster hits the field. However the monsters tributed as Ritual materials are banished instead of going to the GY because Dimensional Fissure replaces all GY sends with banishing."
  },
  {
    cards: ["kashtira", "arise heart", "attach banished", "mandatory trigger"],
    q: "How does Kashtira Arise-Heart work?",
    a: "Arise-Heart has a mandatory trigger effect that activates each time a card is banished. It attaches that banished card to itself as material. After accumulating 3 materials it detaches all 3 to banish 1 card the opponent controls face-down. This triggers for every banish including costs and Macro Cosmos sends."
  },
  {
    cards: ["kashtira", "shangri-ira", "zone lock", "monster zone", "destroy unlock"],
    q: "How does Kashtira Shangri-Ira lock zones?",
    a: "Shangri-Ira locks an opponent Main Monster Zone each time a Kashtira monster it controls activates an effect. Locked zones cannot be used. The locks require Shangri-Ira to remain face-up. When Shangri-Ira leaves the field all locks are immediately removed."
  },
  {
    cards: ["tearlaments", "fusion", "mill", "gy send", "trigger"],
    q: "How does the Tearlaments engine work?",
    a: "Tearlaments monsters trigger their Fusion Summon effects when sent to the GY by any means. They shuffle themselves and other Tearlaments from hand GY or field to Fusion Summon directly. The triggers activate whenever they are milled drawn and discarded or destroyed."
  },
  {
    cards: ["tearlaments rulkallos", "negate summon", "quick effect", "water fusion"],
    q: "How does Tearlaments Rulkallos negate Special Summons?",
    a: "Rulkallos can negate a Special Summon or effect that includes a Special Summon by sending herself to the GY. This is a Quick Effect. She can only negate effects that include Special Summoning. She cannot negate effects that do not involve summoning."
  },
  {
    cards: ["branded", "fusion", "lubellion", "albaz", "extra deck"],
    q: "How does the Branded Fusion engine work?",
    a: "Branded Fusion is a Normal Spell that Fusion Summons using monsters from hand Deck or field. It restricts the player to Albaz Fusion monsters only for the rest of the turn. Lubellion the Searing Dragon can then discard from hand to reshuffle materials and Fusion Summon again."
  },
  {
    cards: ["mirrorjade", "iceblade dragon", "end phase", "wipe", "leave field"],
    q: "How does Mirrorjade the Iceblade Dragon's destruction effect work?",
    a: "When Mirrorjade leaves the field by an opponent's card effect it activates an effect to destroy all monsters the opponent controls during the End Phase. This is a lingering effect. If Mirrorjade is banished face-down its effect does not trigger. The destruction happens at the End Phase not immediately."
  },
  {
    cards: ["spright", "level 2", "rank 2", "link 2", "material"],
    q: "What is the Spright engine?",
    a: "Spright monsters have Level 2 and can use any Level 2 monster as material for their summons. They generate searches draws and Special Summons by stacking Level 2 monsters. They can also prevent the opponent from Special Summoning monsters with lower ATK than the attacking Spright."
  },
  {
    cards: ["purrely", "express", "amazing", "attachment", "xyz"],
    q: "How do Purrely Xyz Monsters work?",
    a: "Purrely Xyz Monsters attach Quick-Play Spells from hand or field to themselves as Xyz Materials. Each attached Quick-Play Spell grants different effects. My Friend Purrely searches, Purrely Sleepy Memory protects, and others grant additional effects. The more materials attached the more powerful they become."
  },
  {
    cards: ["snake eye", "ash of destruction", "poplar", "field zone", "monster to spell"],
    q: "How does the Snake-Eye engine work?",
    a: "Snake-Eye monsters send themselves and other FIRE monsters to the Spell and Trap Zone to treat them as Continuous Spells for protection and effects. Snake-Eye Ash searches FIRE monsters. They recycle through the GY and banished zone to maintain advantage."
  },
  {
    cards: ["labrynth", "big welcome", "normal trap", "lady labrynth", "search"],
    q: "How does Labrynth work?",
    a: "Labrynth is a Trap-based control deck. Big Welcome Labrynth Special Summons Labrynth monsters when Normal or Counter Traps are activated. Lady Labrynth of the Silver Castle sends opponent cards to GY when Traps resolve. The deck stacks Trap activations to generate effects and control."
  },
  {
    cards: ["bystial", "magnamhut", "druisworm", "lubellion", "light dark gy"],
    q: "How do Bystial monsters work?",
    a: "Bystial monsters can be Special Summoned by Quick Effect from hand by banishing a LIGHT or DARK monster from either GY. Each Bystial has additional effects when summoned this way. They disrupt opponent GY setups while generating their own advantage. They are used as hand traps in many decks."
  },
  {
    cards: ["floowandereeze", "normal summon", "multiple times", "exploration"],
    q: "How do Floowandereeze monsters work?",
    a: "Floowandereeze Winged Beast monsters allow additional Normal Summons. Each Floowandereeze that is Normal Summoned searches the next one while granting another Normal Summon. They can Normal Summon many times per turn but Skill Drain negates their effects since they activate on the field."
  },
  {
    cards: ["swordsoul", "synchro", "wyrm", "tenyi", "banish from hand"],
    q: "How does the Swordsoul engine work?",
    a: "Swordsoul monsters banish themselves from hand to Special Summon a Synchro Token then use the token for Synchro Summons. Chixiao searches Swordsoul cards on summon. Swordsoul of Mo Ye and Longyuan set up Synchro Summons efficiently accessing Level 8 and 10 Synchros."
  },
  {
    cards: ["ishizu", "tearlaments", "kelbek", "agido", "mill trigger"],
    q: "How do Ishizu mill cards work?",
    a: "Kelbek the Ancient Vanguard and Agido the Ancient Sentinel mill 5 cards from both Decks when sent to the GY. They trigger from any GY send. They also shuffle opponent Extra Deck monsters into the Deck. Combined with Tearlaments they create massive GY setups from mills."
  },
  {
    cards: ["rescue ace", "fire", "turbulence", "extinguish", "hydrant"],
    q: "How does the Rescue-ACE engine work?",
    a: "Rescue-ACE Turbulence Special Summons Rescue-ACE monsters from Deck when Set cards are activated. Rescue-ACE Hydrant provides protection. The deck generates advantage from setting and activating Trap cards. Air Lifter and other monsters recycle resources."
  },
  {
    cards: ["vanquish soul", "multiattribute", "check hand", "caesar valius"],
    q: "How do Vanquish Soul monsters work?",
    a: "Vanquish Soul monsters reveal Attributes in hand to gain different effects. The more Attributes revealed the more powerful the effect. Caesar Valius gains ATK and effects based on FIRE DARK and EARTH monsters revealed from hand. They do not discard so hand advantage is maintained."
  },
  {
    cards: ["new cards", "gemini", "normal effect monster", "second normal summon"],
    q: "How do Gemini monsters work?",
    a: "Gemini monsters are treated as Normal Monsters while on the field or in the GY. They can be Normal Summoned a second time while already on the field to gain their effects and become Effect Monsters. Until the second Normal Summon they have no effects and are treated as Normal Monsters."
  },
  {
    cards: ["exodia", "win condition", "five pieces", "hand win"],
    q: "How do you win with Exodia?",
    a: "If a player holds all 5 Exodia pieces (Exodia the Forbidden One plus the 4 limb cards) in their hand simultaneously they win the duel immediately. This is an alternate win condition. The win triggers automatically at any point including the Draw Phase when the 5th piece is drawn."
  },
  {
    cards: ["lab", "lord of the heavenly prison", "set", "trap", "search"],
    q: "How does Lord of the Heavenly Prison work in Labrynth?",
    a: "Lord of the Heavenly Prison is searched by Big Welcome Labrynth. When Normal or Special Summoned it Sets a Normal or Counter Trap from Deck to the field. It is a key extender that sets up Trap activations for Labrynth combos."
  },
  {
    cards: ["synchron", "junk", "stardust", "warrior tuner", "accel synchro"],
    q: "How does the Synchron engine work?",
    a: "Synchron Tuners like Junk Synchron revive monsters from GY for Synchro Summons. They access powerful Synchros like Stardust Dragon and Shooting Star Dragon. Formula Synchron enables Synchro Summons during the opponent turn. The engine specializes in Level 8 to 12 Synchros."
  },
  {
    cards: ["tri brigade", "beast warrior winged beast", "link summon", "banish gy"],
    q: "How does the Tri-Brigade engine work?",
    a: "Tri-Brigade monsters banish Beast, Beast-Warrior, or Winged-Beast monsters from the GY to Link Summon Tri-Brigade Link Monsters. Fraktall mills to GY and searches. Kitt adds from GY to hand. They generate free Link Summons from GY resources."
  },
  {
    cards: ["eldlich", "golden lord", "spell trap", "send gy", "special summon"],
    q: "How does Eldlich the Golden Lord work?",
    a: "Eldlich adds itself from hand to GY by sending a Spell or Trap. From GY it Special Summons itself by sending another Spell or Trap. This makes it nearly impossible to deplete. It is also the win condition for Eldlich Trap control decks."
  },
  {
    cards: ["runick", "hugin", "fountain", "banish deck", "quick spell"],
    q: "How does the Runick engine work?",
    a: "Runick Quick-Play Spells banish cards from the opponent Deck and Special Summon Runick Spirit Tokens. They are used with Hugin the Runick Wings to recycle. Runick Fountain shuffles Quick-Play Spells back from GY. The engine mills the opponent Deck while generating free monsters."
  },
  {
    cards: ["attribute", "types", "light dark fire water earth wind divine"],
    q: "What are the Attributes in Yu-Gi-Oh?",
    a: "There are 7 Attributes: LIGHT, DARK, FIRE, WATER, EARTH, WIND, and DIVINE. Every monster has exactly one Attribute. Attributes matter for card effects that require specific Attributes as material, for Gozen Match restrictions, and for cards that interact with specific Attribute monsters."
  },
  {
    cards: ["type", "monster types", "warrior spellcaster dragon"],
    q: "What are the Monster Types in Yu-Gi-Oh?",
    a: "There are many Monster Types including Warrior, Spellcaster, Dragon, Beast, Beast-Warrior, Winged Beast, Zombie, Fiend, Machine, Aqua, Pyro, Rock, Insect, Thunder, Dinosaur, Plant, Fish, Sea Serpent, Reptile, Psychic, Fairy, Divine-Beast, Cyberse, and Wyrm among others."
  },
  {
    cards: ["gozen match", "attribute", "one attribute", "send graveyard"],
    q: "How does Gozen Match work?",
    a: "While Gozen Match is face-up each player can only control monsters of one Attribute. If a player controls monsters of different Attributes they must send all but one Attribute to the GY. Players cannot summon monsters of an Attribute different from what they currently control."
  },
  {
    cards: ["rivalry of warlords", "type", "one type", "face-down exempt"],
    q: "How does Rivalry of Warlords work?",
    a: "While Rivalry of Warlords is face-up each player can only control monsters of one Type. If a player controls monsters of different Types they must send all but one Type to the GY. Face-down monsters do not have a Type while face-down so they are exempt from the restriction."
  },
  {
    cards: ["attribute", "chaos", "light dark banish", "material requirement"],
    q: "Chaos monsters require banishing LIGHT and DARK monsters. What counts?",
    a: "The banished monsters must have LIGHT and DARK printed as their original Attribute on the card. Attribute changes from card effects do not count for summoning costs. The original Attribute printed on the card must be LIGHT and DARK respectively."
  },
  {
    cards: ["type", "zombie world", "all monsters zombie", "gy field"],
    q: "Zombie World changes all monsters to Zombie type. Does this affect original types?",
    a: "No. Zombie World changes the current type of all monsters on the field and in the GY to Zombie but does not change the original printed type. Effects that check original types see through Zombie World. Effects checking current type on the field will see Zombie."
  },
  {
    cards: ["attribute", "dna surgery", "change type", "all monsters one type"],
    q: "How does DNA Surgery work?",
    a: "While DNA Surgery is face-up declare one Monster Type. All face-up monsters on the field become that Type. This affects the current type but not the original printed type. Effects checking original type see through DNA Surgery."
  },
  {
    cards: ["type", "dragon link", "specific type material", "fusion synchro requirement"],
    q: "When a Fusion Monster requires a Dragon type material does the material need to be originally Dragon?",
    a: "It depends on the card text. Most Fusion Monsters check the current type at the time of fusion. If DNA Surgery makes a monster Dragon type it can satisfy Dragon type material requirements. However some cards specifically say original type or printed type which cannot be changed by effects."
  },
  {
    cards: ["attribute", "bystial", "light dark only", "target gy"],
    q: "Bystial monsters require targeting LIGHT or DARK monsters in the GY. Does Zombie World affect this?",
    a: "No. Zombie World changes Types not Attributes. LIGHT and DARK are Attributes not Types. Zombie World has no effect on which monsters Bystial can target. The Attribute printed on the card determines eligibility."
  },
  {
    cards: ["type", "machine", "cyber dragon", "contact fusion", "machine only"],
    q: "Cyber Dragon contact fusions require Machine monsters. Does the target need to be originally Machine?",
    a: "The target must be Machine type at the time of the contact fusion. If a monster has been changed to Machine type by an effect it can qualify. However DNA Surgery changing a monster to Machine type would allow it to be used as contact fusion material."
  },
  {
    cards: ["attribute", "attribute change", "light dark", "gozen match exception"],
    q: "Can Attribute changes affect Gozen Match restrictions?",
    a: "Yes. Gozen Match checks the current Attribute of monsters on the field. If a monster's Attribute is changed by an effect the new Attribute is used for Gozen Match purposes. A DARK monster changed to LIGHT by an effect would be treated as LIGHT under Gozen Match."
  },
  {
    cards: ["type", "sea serpent", "aqua", "difference", "water attribute"],
    q: "What is the difference between WATER Attribute and Aqua or Sea Serpent Type?",
    a: "WATER is an Attribute. Aqua and Sea Serpent are Types. They are completely different categories. A monster can be WATER Attribute but Dragon Type. Effects that require WATER Attribute need the Attribute not the Type. Effects requiring Aqua Type need the Type not the Attribute."
  },
  {
    cards: ["type", "pendulum", "type still relevant", "machine spellcaster"],
    q: "Do Pendulum Monsters still have Types?",
    a: "Yes. Pendulum Monsters have Types like all other monsters. A Pendulum Monster can be any Type such as Spellcaster or Dragon. The Type matters for effects that require specific Types and for restrictions like Rivalry of Warlords."
  },
  {
    cards: ["attribute", "xyz monster", "attribute of material", "inherit"],
    q: "Does an Xyz Monster inherit the Attribute of its materials?",
    a: "No. An Xyz Monster has its own printed Attribute independent of its materials. The Xyz Monster's Attribute is whatever is printed on its card. The materials Attributes are irrelevant to the resulting Xyz Monster."
  },
  {
    cards: ["type", "fusion monster", "polymerization", "material types", "resulting type"],
    q: "Does a Fusion Monster's Type depend on its materials?",
    a: "No. A Fusion Monster has its own printed Type independent of its materials. The resulting Fusion Monster is whatever Type is printed on the Fusion Monster card regardless of what Types the materials were."
  },
  {
    cards: ["attribute", "gozen match", "face-down", "exempt", "no attribute"],
    q: "Do face-down monsters have an Attribute under Gozen Match?",
    a: "No. Face-down monsters do not have a known Attribute while face-down. Gozen Match does not restrict Summoning face-down monsters because their Attribute is not publicly known. Once flipped face-up Gozen Match applies."
  },
  {
    cards: ["type", "cannot normal summon", "special summon", "specific type turn"],
    q: "Some cards say you can only Special Summon a specific type this turn. Does this restrict the type of monsters in hand?",
    a: "Yes. Restrictions that say you can only Special Summon Type X monsters this turn prevent Special Summoning any monster that is not Type X. This affects all Special Summon attempts for the rest of that turn regardless of the method."
  },
  {
    cards: ["attribute", "light and dark", "honest", "blackwing", "attribute specific"],
    q: "Honest can only be used for LIGHT monsters. Is this based on current or original Attribute?",
    a: "Honest checks the current Attribute of the attacking monster at the time of activation. If the monster is currently LIGHT by any means including Attribute changes from effects it qualifies for Honest."
  },
  {
    cards: ["type", "warrior", "reinforcement of the army", "level 4 or lower", "search"],
    q: "Reinforcement of the Army searches Level 4 or lower Warrior monsters. Does it check original or current Type?",
    a: "Reinforcement of the Army checks the original printed Type of the monster in the Deck. A monster with Warrior printed on it qualifies regardless of any Type-changing effects. Effects do not change cards in the Deck."
  },
  {
    cards: ["attribute", "terra forming", "field spell", "attribute restriction", "any"],
    q: "Does the Attribute of a monster affect what Field Spells it can search?",
    a: "Monster Attributes do not restrict Field Spell searches. Terraforming searches any Field Spell regardless of what Attributes are supported. Field Spells are Spell cards not monster cards so Attribute does not apply to them."
  },
  {
    cards: ["type", "original", "current", "check when", "resolution"],
    q: "When card effects check Type or Attribute do they check original or current?",
    a: "Most effects check the current Type or Attribute at the moment of resolution unless the card specifically says original. Effects in the Deck always check original type since Deck cards are not affected by field effects. On the field current Type and Attribute apply unless original is specified."
  },
  {
    cards: ["attribute", "six attributes used", "divine rare", "obelisk slifer ra"],
    q: "What is the DIVINE Attribute?",
    a: "DIVINE is an Attribute exclusive to the Egyptian God Cards (Slifer the Sky Dragon, Obelisk the Tormentor, The Winged Dragon of Ra) and a very small number of other cards. DIVINE Attribute monsters are extremely rare and have unique interactions and immunity to most effects."
  },
  {
    cards: ["special summon", "types", "fusion synchro xyz link ritual pendulum"],
    q: "What are the different types of Special Summons?",
    a: "Special Summons include: Fusion Summon, Synchro Summon, Xyz Summon, Link Summon, Ritual Summon, Pendulum Summon, and other Special Summons from card effects. Each type has specific requirements. Fusion, Synchro, Xyz, Link, and Ritual are considered proper summons requiring specific procedures."
  },
  {
    cards: ["special summon", "proper summon", "improper", "cannot revive"],
    q: "What is a proper Special Summon vs an improper one?",
    a: "A proper Special Summon means the monster was summoned using its correct method (Fusion Summoned, Synchro Summoned, etc.). An improper summon means it was placed on the field without using its correct procedure. Extra Deck monsters that were not properly summoned cannot be revived from the GY or banished zone."
  },
  {
    cards: ["special summon", "negate", "solemn strike", "solemn warning", "counter trap"],
    q: "Can all Special Summons be negated?",
    a: "Most Special Summons can be negated by Counter Traps like Solemn Strike or Solemn Warning. However some Special Summons are treated as inherent game actions rather than activated effects. Contact fusions for example are not negatable as Fusion Summons by Solemn Strike."
  },
  {
    cards: ["special summon", "from hand", "monster effect", "cannot be negated same way"],
    q: "Can a Special Summon from hand by monster effect be negated by Solemn Strike?",
    a: "Yes. Solemn Strike can negate Special Summons that are part of monster effects. When a monster activates an effect to Special Summon Solemn Strike can negate the entire effect negating the Special Summon."
  },
  {
    cards: ["special summon", "inherent", "not effect", "blue eyes white dragon", "cannot respond same"],
    q: "What is an inherent Special Summon?",
    a: "An inherent Special Summon is one written in the monster's own text that does not use the spell speed system. Examples include Blue-Eyes White Dragon being Special Summoned by Trade-In returning itself, Cyber Dragon's auto-special summon condition. These do not start a chain but players can respond in the summon response window."
  },
  {
    cards: ["special summon", "cannot special summon", "vanity emptiness", "blocked"],
    q: "Vanity's Emptiness is active. Can any Special Summons occur?",
    a: "No. Vanity's Emptiness prevents both players from Special Summoning monsters. No Special Summons of any kind can occur while Vanity's Emptiness is face-up and its effect is applying. It is destroyed when a card is sent from the field or hand to the GY."
  },
  {
    cards: ["special summon", "once per turn", "restriction", "cannot summon again"],
    q: "A monster was Special Summoned this turn and its effect says it can only be Special Summoned once per turn. Can another copy be summoned?",
    a: "No. Once per turn Special Summon restrictions apply to the card name. If any monster with that name was Special Summoned this turn another copy cannot be Special Summoned that same turn regardless of the method."
  },
  {
    cards: ["special summon", "battle fader", "direct attack", "special summon end battle phase"],
    q: "Battle Fader is Special Summoned in response to a direct attack. What happens?",
    a: "When Battle Fader is Special Summoned from hand in response to a direct attack the Battle Phase ends immediately. The attack is not negated but the Battle Phase ends. Battle Fader is banished at the end of the Battle Phase."
  },
  {
    cards: ["special summon", "cannot special summon", "if used xyz synchro material"],
    q: "A monster says it cannot be used as a Synchro Material. Can it still be used for Xyz or Link?",
    a: "Yes. Restrictions on being used as material are specific to what is stated. Cannot be used as Synchro Material only prevents Synchro Summons. The monster can still be used as Xyz Material, Link Material, or Fusion Material unless specifically restricted."
  },
  {
    cards: ["special summon", "during opponent turn", "quick effect", "flash knight"],
    q: "Can monsters be Special Summoned during the opponent's turn?",
    a: "Yes if the summoning effect is a Quick Effect or the card specifically allows it. Monster effects with Quick Effect notation can Special Summon during the opponent's turn. Some cards like PSY-Framegear Gamma and Kuriboh Special Summon as part of their Quick Effects."
  },
  {
    cards: ["special summon", "from different zone", "hand gy deck banished"],
    q: "Can monsters be Special Summoned from the Deck?",
    a: "Yes but only by card effects that specifically allow it. Most normal effects revive from the GY. Effects that Special Summon from the Deck are targeted by Ash Blossom. Examples include Emergency Teleport and Rekindling which summon directly from the Deck."
  },
  {
    cards: ["special summon", "face-down defense", "set", "some effects"],
    q: "Can monsters be Special Summoned face-down in Defense Position?",
    a: "Yes. Some card effects specifically allow Special Summoning a monster face-down in Defense Position. This is different from setting a monster normally. The monster is treated as a face-down monster and is not revealed until flipped."
  },
  {
    cards: ["special summon", "level restriction", "too high to summon", "tribute needed"],
    q: "Can Level 5 or higher monsters be Special Summoned without tributing?",
    a: "Yes. The tribute requirement only applies to Normal Summons and Tribute Summons. Special Summons bypass tribute requirements. A Level 8 monster can be Special Summoned directly without tributing as long as the Special Summon method is legal."
  },
  {
    cards: ["special summon", "zombie world", "all zombie", "summon restriction bypass"],
    q: "Zombie World makes all monsters Zombie type. Can non-Zombie specific summons now be performed?",
    a: "It depends on the restriction. If a card requires Zombie type monsters as materials Zombie World making all monsters Zombie type would satisfy that requirement. However if the restriction is about the original type printed on the card Zombie World would not help."
  },
  {
    cards: ["special summon", "multiple same turn", "no limit unless stated"],
    q: "Is there a limit to how many monsters can be Special Summoned in one turn?",
    a: "No general limit exists. Players can Special Summon as many monsters as they have valid summons available and open zones for. The only restrictions come from specific card effects that limit Special Summons or game state limitations like full monster zones."
  },
  {
    cards: ["special summon", "tribute summon", "normal summon difference"],
    q: "What is the difference between a Normal Summon and a Special Summon?",
    a: "A Normal Summon can only happen once per turn and does not start a chain. It places a monster from the hand to the field. Level 1 to 4 can be Normal Summoned without tribute. Level 5-6 require 1 tribute and Level 7+ require 2 tributes. Special Summons are everything else and can happen multiple times per turn."
  },
  {
    cards: ["special summon", "flip summon", "face-down", "count as summon"],
    q: "Is a Flip Summon a Special Summon?",
    a: "No. A Flip Summon is its own category. It is when a face-down Defense Position monster is flipped face-up in Attack Position during the Main Phase. It is not a Normal Summon or Special Summon. It does not use up the Normal Summon for the turn."
  },
  {
    cards: ["special summon", "extra deck monster", "zone required", "main monster zone link"],
    q: "Do all Extra Deck Special Summons require a specific zone?",
    a: "Yes. Extra Deck monsters must be placed in the Extra Monster Zone or a Main Monster Zone that a Link Monster points to. Without Link Arrows pointing to Main Monster Zones only one Extra Deck monster can be on the field at a time in the Extra Monster Zone."
  },
  {
    cards: ["special summon", "cyber dragon", "opponent controls", "only machine"],
    q: "Cyber Dragon can be Special Summoned if the opponent controls a monster and you do not. Is this an inherent Special Summon?",
    a: "Yes. Cyber Dragon's Special Summon condition is an inherent summon written in its own text. It does not start a chain and does not use an effect activation. Players can respond in the summon response window but the summon itself cannot be responded to as an effect activation."
  },
  {
    cards: ["special summon", "solemn warning", "effect that summons", "negate effect not summon"],
    q: "Solemn Warning negates an effect that would Special Summon. Does it negate the summon or the effect?",
    a: "Solemn Warning can negate either: a Summon directly or an effect that includes a Special Summon. When negating an effect that summons the entire effect is negated not just the summon portion. The monster is not summoned and any other parts of the effect also fail."
  },
  {
    cards: ["special summon", "restriction from deck this turn", "nadir servant", "extra deck off"],
    q: "A card restricts Extra Deck Special Summons for the turn. Does this apply to both players?",
    a: "No unless the card text specifically says both players. Most restrictions say the player who activated the card cannot Special Summon from the Extra Deck. The opponent is unaffected unless the card text explicitly restricts both players."
  },
  {
    cards: ["special summon", "once per duel", "not once per turn", "permanent"],
    q: "A monster says it can only be Special Summoned once per duel. What does this mean?",
    a: "Once per duel Special Summon restrictions mean the monster can only be Special Summoned using that specific method one time for the entire duel. If it is summoned and later sent to the GY it cannot be summoned by that same method again. Other Special Summon methods may still be available."
  },
  {
    cards: ["special summon", "if special summoned from gy", "trigger effect", "activates"],
    q: "A monster has an effect that activates when Special Summoned from the GY. Does this activate for every revival?",
    a: "Yes. Each time the monster is Special Summoned from the GY the trigger effect activates unless it has a once per turn restriction. The effect activates in the summon response window after the summon. SEGOC applies if multiple effects trigger simultaneously."
  },
  {
    cards: ["spell card", "types", "normal quick continuous field equip ritual"],
    q: "What are the different types of Spell cards?",
    a: "There are 6 types of Spell cards: Normal Spells (activate and resolve once), Quick-Play Spells (Speed 2, can activate on either turn), Continuous Spells (remain on field and have ongoing effects), Field Spells (go in Field Spell Zone), Equip Spells (attach to monsters), and Ritual Spells (used to Ritual Summon)."
  },
  {
    cards: ["trap card", "types", "normal counter continuous"],
    q: "What are the different types of Trap cards?",
    a: "There are 3 types of Trap cards: Normal Traps (activate once and are sent to GY), Continuous Traps (remain on field after activation), and Counter Traps (Spell Speed 3, can only be responded to by other Counter Traps)."
  },
  {
    cards: ["spell card", "activation", "main phase only", "normal spell"],
    q: "When can Normal Spell cards be activated?",
    a: "Normal Spell cards can only be activated during the Main Phase in an open game state. They cannot be activated during the Draw Phase, Standby Phase, Battle Phase, Damage Step, or End Phase unless a card effect specifically allows it."
  },
  {
    cards: ["quick play spell", "set", "same turn", "cannot activate"],
    q: "Can a Quick-Play Spell be activated the same turn it is Set?",
    a: "No. A Quick-Play Spell Set during the current turn cannot be activated that same turn. It must remain Set for at least one turn before it can be activated from the Spell and Trap Zone. However Quick-Play Spells can be activated directly from the hand during the controller's Main Phase."
  },
  {
    cards: ["quick play spell", "opponent turn", "from hand", "cannot"],
    q: "Can a Quick-Play Spell be activated from hand during the opponent's turn?",
    a: "No. Quick-Play Spells can only be activated from the hand during your own Main Phase. During the opponent's turn a Quick-Play Spell can only be activated if it was already Set on the field from a previous turn."
  },
  {
    cards: ["trap card", "set", "one turn", "cannot activate same turn"],
    q: "Can a Trap card be activated the same turn it is Set?",
    a: "No. Trap cards cannot be activated the same turn they are Set. They must remain face-down for at least until the opponent's next turn before they can be activated. This is the fundamental rule of Trap timing."
  },
  {
    cards: ["continuous spell", "destroyed", "chain", "effect disappears"],
    q: "A Continuous Spell is activated as Chain Link 1. MST destroys it as Chain Link 2. Does the effect resolve?",
    a: "No. Continuous Spell effects require the card to remain face-up on the field at resolution. If the Continuous Spell is destroyed before its effect resolves the effect disappears. This is different from Normal Spells which resolve even if destroyed."
  },
  {
    cards: ["normal spell", "destroyed", "chain", "still resolves"],
    q: "A Normal Spell is activated. MST destroys it on the chain. Does the Normal Spell still resolve?",
    a: "Yes. Normal Spells do not need to remain on the field to resolve. Once activated the effect is placed on the chain and will resolve regardless of what happens to the card afterward. Destroying a Normal Spell after activation does not stop its effect."
  },
  {
    cards: ["field spell", "one per player", "destroyed when replaced", "field zone"],
    q: "Can two Field Spells be active at the same time?",
    a: "Each player can have one Field Spell in their Field Spell Zone. When a new Field Spell is activated the existing one is sent to the GY. Both players can have their own Field Spell active simultaneously but each player can only have one."
  },
  {
    cards: ["equip spell", "equipped monster", "leaves field", "destroyed"],
    q: "What happens to an Equip Spell when the equipped monster leaves the field?",
    a: "When the equipped monster leaves the field the Equip Spell is immediately destroyed by game mechanics. This is not a card effect so it cannot be chained to. The Equip Spell goes to the GY when the equipped monster is removed from the field by any means."
  },
  {
    cards: ["counter trap", "spell speed 3", "only counter trap responds"],
    q: "What can be chained to a Counter Trap?",
    a: "Only other Counter Traps (Spell Speed 3) can be chained to Counter Traps. Regular Trap cards (Speed 2), Quick-Play Spells (Speed 2), and monster Quick Effects (Speed 2) cannot be chained to Counter Traps. This makes Counter Traps extremely powerful."
  },
  {
    cards: ["trap card", "cannot activate", "jinzo", "spell speed"],
    q: "Jinzo is on the field. Can Trap cards be activated?",
    a: "No. Jinzo's continuous effect negates all Trap effects and prevents their activation while face-up on the field. No Trap cards can be activated while Jinzo is face-up. This includes all Normal, Continuous, and Counter Traps."
  },
  {
    cards: ["spell card", "cannot activate", "spell canceller", "all spells"],
    q: "Spell Canceller is on the field. Can Spell cards be activated?",
    a: "No. Spell Canceller negates all Spell card effects and prevents their activation while face-up on the field. No Spell cards can be activated while Spell Canceller is present."
  },
  {
    cards: ["continuous trap", "activated", "remains field", "effect applies"],
    q: "How do Continuous Trap cards work?",
    a: "Continuous Trap cards remain on the field after activation and apply ongoing effects. Unlike Normal Traps they are not sent to the GY after use. They stay face-up until destroyed or removed. Their effects apply continuously while face-up."
  },
  {
    cards: ["spell trap", "set", "face-down", "cannot chain face-down"],
    q: "Can a face-down Set Spell or Trap be chained to an effect?",
    a: "No. A face-down Set Spell or Trap cannot be activated in response to an effect unless it is flipped face-up first. To respond with a Trap it must be face-down and then activated (flipped up) in response. You cannot activate a Trap while it is already face-down being targeted."
  },
  {
    cards: ["harpie feather duster", "set cards", "destroy all", "face-up face-down"],
    q: "Does Harpie's Feather Duster destroy Set Spell and Trap cards?",
    a: "Yes. Harpie's Feather Duster destroys all Spell and Trap cards the opponent controls including face-up and face-down Set cards simultaneously. The opponent cannot chain the Set cards that are being destroyed since they are all targeted simultaneously."
  },
  {
    cards: ["mystical space typhoon", "chained to", "continuous spell", "destroy before resolve"],
    q: "Can MST be chained to destroy a Continuous Spell before it resolves?",
    a: "Yes. MST can be chained to the activation of a Continuous Spell. If MST resolves first the Continuous Spell is destroyed. Since Continuous Spells require field presence to resolve the destroyed Continuous Spell's effect disappears."
  },
  {
    cards: ["spell trap", "activate", "open zone", "required", "no room"],
    q: "Can a Spell or Trap be activated if all Spell and Trap Zones are full?",
    a: "No. A Spell or Trap card requires an open Spell and Trap Zone to be activated or Set. If all 5 zones are occupied the card cannot be played. This is a mandatory game requirement checked at activation."
  },
  {
    cards: ["ritual spell", "hand deck", "tribute", "ritual summon", "activate"],
    q: "Can Ritual Spell materials come from the Deck?",
    a: "No by default. Standard Ritual Spells tribute monsters from the hand or field as materials. Only specific Ritual Spells like Advance Ritual Art explicitly allow tributing from the Deck. Most require hand or field tributes only."
  },
  {
    cards: ["spell trap", "chained to activation", "before resolve", "same chain"],
    q: "Can a Spell or Trap be activated in the same chain as its activation target?",
    a: "Yes. Responding to a Spell or Trap activation by chaining another card is standard play. The responding card is placed on the chain at a higher chain link. Chains resolve Last In First Out so the responding card resolves before the original."
  },
  {
    cards: ["continuous spell", "effect activates", "ghost ogre", "already face-up"],
    q: "Can Ghost Ogre respond to a Continuous Spell effect activation?",
    a: "Yes. Ghost Ogre can be activated when a face-up Spell or Trap already on the field activates an effect. If a Continuous Spell activates one of its effects Ghost Ogre can respond to destroy it. Ghost Ogre cannot respond to the initial placement of the card."
  },
  {
    cards: ["spell trap", "imperial order", "negate all spells", "continuous trap"],
    q: "Imperial Order is active. Can any Spell cards be activated?",
    a: "No. Imperial Order negates the effects of all Spell cards while face-up. This prevents all Spell card activations. No Spell cards can be played while Imperial Order is active. During each Standby Phase 700 LP must be paid or Imperial Order is destroyed."
  },
  {
    cards: ["spell trap", "solemn judgment", "negate", "any activation", "half lp"],
    q: "What can Solemn Judgment negate?",
    a: "Solemn Judgment can negate the activation of any monster Summon, Spell card, or Trap card. Pay half your LP. The negated card is sent to the GY and treated as if it was never activated. It is a Counter Trap (Speed 3) that can stop virtually anything."
  },
  {
    cards: ["spell trap", "dark bribe", "negate spell trap", "opponent draws"],
    q: "How does Dark Bribe work?",
    a: "Dark Bribe negates the activation of 1 Spell or Trap card and destroys it. The opponent then draws 1 card. It is a Counter Trap (Speed 3). The draw happens as part of Dark Bribe's effect not as a cost. Ash Blossom can respond to the draw."
  },
  {
    cards: ["spell trap", "set", "cannot flip up", "quick play same turn"],
    q: "If a Quick-Play Spell is Set this turn can it be flipped up to activate?",
    a: "No. A Quick-Play Spell Set during the current turn cannot be activated that turn even by flipping it face-up manually. It must remain Set until the following turn. This prevents the same-turn activation restriction from being bypassed."
  },
  {
    cards: ["standby phase", "what happens", "order", "after draw phase"],
    q: "What happens during the Standby Phase?",
    a: "The Standby Phase occurs after the Draw Phase and before Main Phase 1. Many card effects specifically activate during the Standby Phase. Both players can activate Quick Effects and Trap cards during the Standby Phase. The Turn Player resolves their Standby Phase effects first then the Non-Turn Player."
  },
  {
    cards: ["standby phase", "upkeep cost", "imperial order", "pay lp", "or destroy"],
    q: "Imperial Order requires paying 700 LP during the Standby Phase. What happens if not paid?",
    a: "During each of your Standby Phases you must pay 700 LP to keep Imperial Order or it is destroyed. If you choose not to pay or cannot pay Imperial Order is destroyed at the start of your Standby Phase. The destruction is mandatory if the LP is not paid."
  },
  {
    cards: ["standby phase", "dpe", "destroyer phoenix enforcer", "return", "special summon"],
    q: "When does DPE activate its GY effect to return to the field?",
    a: "DPE activates its effect during the Standby Phase of the next turn after it was destroyed. During the Standby Phase DPE in the GY activates and Special Summons itself. This can be chained to with Fast Effects since it is an activated effect in an open game state."
  },
  {
    cards: ["standby phase", "baronne de fleur", "return extra deck", "summon gy"],
    q: "When does Baronne de Fleur activate her once per turn effect?",
    a: "Baronne activates her effect during the Standby Phase. She can return herself to the Extra Deck to Special Summon a Level 9 or lower monster from the GY. This activates during the Standby Phase and can be responded to with Fast Effects."
  },
  {
    cards: ["standby phase", "both players", "activate effects", "non turn player too"],
    q: "Can the Non-Turn Player activate effects during the Standby Phase?",
    a: "Yes. Both players can activate effects during the Standby Phase. The Turn Player has priority first but after they pass the Non-Turn Player can activate their Standby Phase effects and Quick Effects."
  },
  {
    cards: ["standby phase", "chain", "multiple effects", "sequential", "separate chains"],
    q: "Multiple cards have Standby Phase effects. Do they all go on one chain?",
    a: "No. Like the End Phase, Standby Phase effects activate sequentially in separate open game states. Each effect forms its own chain. After one Standby Phase effect resolves there is a new open game state before the next Standby Phase effect activates."
  },
  {
    cards: ["standby phase", "plaguespreader zombie", "place on top deck", "standby effect"],
    q: "Plaguespreader Zombie was Special Summoned from GY. Does it return to top of Deck during Standby Phase?",
    a: "Yes. Plaguespreader Zombie has a mandatory Standby Phase effect that returns it to the top of the Deck if it was Special Summoned from the GY. This is mandatory and occurs during the owner's Standby Phase."
  },
  {
    cards: ["standby phase", "treeborn frog", "special summon", "no spell trap", "standby"],
    q: "When does Treeborn Frog Special Summon itself?",
    a: "Treeborn Frog activates during your Standby Phase to Special Summon itself from the GY if you control no Spell or Trap cards. This is an optional trigger effect. If you control any Spell or Trap the condition is not met and the effect cannot activate."
  },
  {
    cards: ["standby phase", "called by grave", "chain", "dpe standby", "negate"],
    q: "Can Called by the Grave chain to DPE's Standby Phase effect?",
    a: "Yes. DPE's Standby Phase effect is an activated trigger effect that creates an activation window. Called by the Grave can chain to it targeting DPE in the GY. This negates DPE's effect and banishes it preventing the Special Summon."
  },
  {
    cards: ["standby phase", "skill drain", "standby effect negated", "face-up field"],
    q: "A monster has a Standby Phase effect. Skill Drain is active. Is the effect negated?",
    a: "Yes if the monster is face-up on the field. Skill Drain negates the effects of all face-up monsters on the field. If a monster activates its Standby Phase effect while face-up on the field with Skill Drain active the effect resolves negated."
  },
  {
    cards: ["standby phase", "vanity emptiness", "destroyed when", "gy send"],
    q: "Vanity's Emptiness is active. A card is sent to my GY during the Standby Phase. What happens?",
    a: "Vanity's Emptiness destroys itself when a card is sent from the field or hand to your GY. If this happens during the Standby Phase Vanity's Emptiness is destroyed immediately. Special Summons are then permitted for the rest of that phase and turn."
  },
  {
    cards: ["standby phase", "upkeep effect", "continuous trap", "pay or lose"],
    q: "Some Continuous Traps have Standby Phase upkeep costs. What happens if not paid?",
    a: "Continuous Traps and Spells with Standby Phase upkeep costs are destroyed if the cost is not paid. The destruction is a mandatory game mechanic. Examples include Imperial Order (700 LP) and Pseudo Space (discard 1 card). If unable or unwilling to pay the card is destroyed."
  },
  {
    cards: ["standby phase", "macro cosmos", "during standby", "effect still resolves"],
    q: "A monster has a Standby Phase effect that sends cards to GY. Macro Cosmos is active. Does it still work?",
    a: "The Standby Phase effect still activates and resolves but the cards are banished instead of going to the GY. Macro Cosmos replaces all GY sends with banishing. The effect resolves but the destination changes."
  },
  {
    cards: ["standby phase", "before main phase", "after draw", "timing"],
    q: "Can Quick-Play Spells be activated during the Standby Phase?",
    a: "Yes. Quick-Play Spells that were Set on a previous turn can be activated during the Standby Phase. Quick-Play Spells cannot be activated from hand during the turn they were Set but can be used from the field during any phase including the Standby Phase."
  },
  {
    cards: ["standby phase", "trap activation", "standby phase trap", "can activate"],
    q: "Can Trap cards be activated during the Standby Phase?",
    a: "Yes. Trap cards that have been Set for at least one turn can be activated during the Standby Phase in response to effects or in the open game state. The Standby Phase is an open game state where both players can respond."
  },
  {
    cards: ["standby phase", "graveyard effect", "trigger", "if standby", "activate timing"],
    q: "A monster's GY effect activates during the Standby Phase. Can it be responded to?",
    a: "Yes. GY effects that activate during the Standby Phase create an activation window. Both players can chain to these effects with appropriate Spell Speed cards. The chain is built and resolved normally."
  },
  {
    cards: ["standby phase", "gren maju da eiza", "banished count", "atk def", "check standby"],
    q: "When is Gren Maju Da Eiza's ATK and DEF checked?",
    a: "Gren Maju Da Eiza's ATK and DEF are equal to 400 times the number of banished cards the controller has. This is a continuous effect checked at all times not just during the Standby Phase. The value updates whenever the banished card count changes."
  },
  {
    cards: ["standby phase", "consecutive standby", "each turn", "recurring effect"],
    q: "A Standby Phase effect activates every turn. Does it activate on the opponent's Standby Phase too?",
    a: "It depends on the card text. Effects that say during your Standby Phase only activate on the controller's Standby Phase. Effects that say during each Standby Phase activate every turn. Effects that say during the Standby Phase activate during the current Turn Player's Standby Phase."
  },
  {
    cards: ["banished zone", "what is", "removed from play", "face-up face-down"],
    q: "What is the banished zone in Yu-Gi-Oh?",
    a: "The banished zone is where cards go when they are banished (removed from play). Cards can be banished face-up or face-down. Face-up banished cards are public knowledge and their effects may still be usable. Face-down banished cards have hidden properties and cannot activate effects or be interacted with by most effects."
  },
  {
    cards: ["banished", "face-down", "cannot activate", "hidden", "properties"],
    q: "Can face-down banished cards activate effects?",
    a: "No. Cards banished face-down have their properties completely hidden. They cannot activate effects, cannot be targeted by most card effects, and their name type and attribute are unknown. They exist in a neutral state where almost no interactions are possible."
  },
  {
    cards: ["banished", "face-up", "effects", "can still use", "chaos"],
    q: "Can face-up banished monsters still activate effects?",
    a: "Yes if the card has an effect that activates while banished. Some monsters have effects that activate from the banished zone. Face-up banished cards are public knowledge and their properties are known. Cards like Chaos monsters can interact with face-up banished cards."
  },
  {
    cards: ["banished", "imperial iron wall", "cannot banish", "blocks all banishing"],
    q: "Imperial Iron Wall is active. Can any cards be banished?",
    a: "No. Imperial Iron Wall prevents all cards from being banished by any means including costs and effects. D.D. Crow, Macro Cosmos, Dimensional Fissure, Called by the Grave, and all banishing effects are blocked. Cards that would be banished stay in their current location."
  },
  {
    cards: ["banished", "macro cosmos", "all to banished", "cannot go gy"],
    q: "Macro Cosmos is active. Where do destroyed cards go?",
    a: "Under Macro Cosmos all cards that would be sent to the GY are banished face-down instead. This includes cards destroyed by battle, destroyed by effects, discarded as costs, and sent as effect costs. No cards can reach the GY while Macro Cosmos is active."
  },
  {
    cards: ["banished", "return to field", "temporarily banished", "end phase return"],
    q: "How do temporarily banished cards return?",
    a: "Cards that are temporarily banished return to the field or appropriate zone during the End Phase of the turn they were banished unless the effect specifies a different return timing. They return to the same position and owner as when they were banished."
  },
  {
    cards: ["banished", "sp little knight", "temporarily banish", "main monster zone", "return"],
    q: "SP Little Knight temporarily banishes an opponent's Extra Deck monster. Where does it return?",
    a: "The temporarily banished Extra Deck monster returns to a Main Monster Zone not the Extra Monster Zone. Monsters returning from temporary banishment always go to Main Monster Zones."
  },
  {
    cards: ["banished", "chaos sorcerer", "remove light dark", "cost", "special summon"],
    q: "Chaos Sorcerer banishes 1 LIGHT and 1 DARK monster from GY as cost. Is this cost or effect?",
    a: "Banishing the LIGHT and DARK monsters is the summoning condition (cost) for Chaos Sorcerer's Special Summon. The banishing happens when you attempt to Special Summon it. Ghost Belle cannot negate this because it is a summoning condition not an activated effect that banishes from GY."
  },
  {
    cards: ["banished", "return from banished", "monster reborn", "cannot revive banished"],
    q: "Can Monster Reborn target a banished monster?",
    a: "No. Monster Reborn targets a monster in the GY. It cannot target banished monsters. Effects that specifically say they can Special Summon from the banished zone are needed to revive banished monsters."
  },
  {
    cards: ["banished", "escape from dark dimension", "dark monster", "revive banished"],
    q: "Escape from the Dark Dimension targets a DARK monster in the banished zone. Is this a target?",
    a: "Yes. Escape from the Dark Dimension targets 1 banished DARK monster and Special Summons it. The targeting is declared at activation. If the target is no longer banished when the effect resolves the effect disappears."
  },
  {
    cards: ["banished", "different dimension ground", "all monsters banished", "battle"],
    q: "Different Dimension Ground is active. What happens to monsters destroyed in battle?",
    a: "During the turn Different Dimension Ground is activated all monsters that would be sent to the GY are banished instead. This includes monsters destroyed by battle and by effects. The effect lasts until the end of the turn."
  },
  {
    cards: ["banished", "d fissure", "dimensional fissure", "all monsters banished", "permanent"],
    q: "Dimensional Fissure is active. Where do all monsters go when sent to the GY?",
    a: "Dimensional Fissure banishes all monsters that would be sent to the GY face-down. This applies to monsters destroyed by battle, by effects, discarded as costs, and used as material. Only monsters are affected. Spell and Trap cards still go to the GY normally."
  },
  {
    cards: ["banished", "macro cosmos", "vs dimensional fissure", "difference"],
    q: "What is the difference between Macro Cosmos and Dimensional Fissure?",
    a: "Dimensional Fissure only banishes monsters. Spell and Trap cards still go to the GY normally. Macro Cosmos banishes ALL cards including monsters Spells and Traps. Both are continuous replacement effects that cannot be chained to."
  },
  {
    cards: ["banished", "chaos dragon levianeer", "banish three", "cost light dark"],
    q: "Chaos Dragon Levianeer banishes 3 LIGHT or DARK monsters from GY as cost. What happens if the costs cannot be paid?",
    a: "If 3 LIGHT or DARK monsters are not available in the GY the Special Summon cannot be attempted. The activation condition of having sufficient monsters to banish must be met. Without 3 qualifying monsters Levianeer cannot be Special Summoned this way."
  },
  {
    cards: ["banished", "bystial", "light dark graveyard", "banish", "special summon self"],
    q: "How do Bystial monsters banish from the GY?",
    a: "Bystial monsters can be Special Summoned from the hand by targeting and banishing a LIGHT or DARK monster from either GY. This is a Quick Effect usable during either player's turn. The banishing is part of the summoning condition. Ghost Belle can negate this because it includes banishing from the GY as an effect."
  },
  {
    cards: ["banished", "deckout", "banished face-down", "count", "no"],
    q: "Do banished face-down cards count toward the Deck limit or anything?",
    a: "No. Banished face-down cards are completely removed from most game interactions. They do not count toward hand size, Deck size, or any limits. They simply exist in the banished zone in a neutral inaccessible state."
  },
  {
    cards: ["banished", "return all banished", "five headed link", "recycle"],
    q: "Some effects return banished cards to the GY or Deck. Is this possible?",
    a: "Yes. Some card effects specifically return banished cards to the GY, Deck, or hand. Examples include Pot of Acquisitiveness shuffling banished monsters back into the Deck. These effects treat banished cards as their targets and move them to the specified zone."
  },
  {
    cards: ["banished", "cannot be banished", "protection", "eldlich", "some monsters"],
    q: "Some monsters cannot be banished. How is this protection applied?",
    a: "Cannot be banished protection prevents both targeting by banishing effects and the application of replacement effects like Macro Cosmos. A monster that cannot be banished stays in the GY when Macro Cosmos would banish it, going to the GY instead."
  },
  {
    cards: ["banished", "crossout designator", "banish from deck", "cost", "face-down"],
    q: "Crossout Designator banishes a card from the Deck face-down. Where does it go?",
    a: "The card banished by Crossout Designator goes to the banished zone face-down. It is not usable and its properties are hidden. At the end of the turn (or when Crossout's effect expires) the card remains banished face-down permanently."
  },
  {
    cards: ["banished", "necroface", "shuffle back", "banished cards", "atk boost"],
    q: "How does Necroface interact with banished cards?",
    a: "When Necroface is Normal Summoned both players shuffle all banished cards back into their Decks. Necroface gains 100 ATK for each card shuffled back. This affects all face-up and face-down banished cards from both players."
  },
  {
    cards: ["banished", "quantum cat", "banish set", "set monster", "trigger"],
    q: "Can cards be banished from the field face-down?",
    a: "Yes. Some effects like Evenly Matched specifically banish cards face-down from the field. When banished face-down from the field the card goes to the banished zone with its properties hidden. It is treated the same as any other face-down banished card."
  },
  {
    cards: ["banished", "different dimension reincarnation", "banished monster", "revive equip"],
    q: "Can effects that Special Summon from the banished zone be negated?",
    a: "Yes. Effects that Special Summon from the banished zone are activated effects that can be negated by Counter Traps like Solemn Strike or by Ash Blossom if they include Special Summoning from the banished zone as part of the effect."
  },
  {
    cards: ["draw phase", "normal draw", "once per turn", "top of deck"],
    q: "How does the Draw Phase work?",
    a: "At the start of each turn the Turn Player draws 1 card from the top of their Deck. This is the normal draw for the turn. The first player does not draw on their first turn. After drawing both players can activate effects. The Draw Phase ends when both players pass."
  },
  {
    cards: ["draw phase", "first turn", "cannot draw", "no draw first player"],
    q: "Does the first player draw on their first turn?",
    a: "No. The player who goes first does not draw during their first Draw Phase. This is a rule to balance the game. Starting from the second turn onward all players draw normally during each Draw Phase."
  },
  {
    cards: ["draw phase", "droll lock bird", "cannot activate", "exception"],
    q: "Can Droll and Lock Bird be activated during the Draw Phase?",
    a: "No. Droll and Lock Bird specifically states it cannot be activated during the Draw Phase. Even if a card was added from the Deck to the hand during the Draw Phase Droll cannot respond during that phase. It must be activated in a new chain after the Draw Phase ends."
  },
  {
    cards: ["draw phase", "pot of greed", "draw 2", "during draw phase", "main phase"],
    q: "Can Pot of Greed be activated during the Draw Phase?",
    a: "No. Pot of Greed is a Normal Spell card. Normal Spells can only be activated during the Main Phase. Cards cannot be activated in the Draw Phase except for effects that specifically state they activate during the Draw Phase."
  },
  {
    cards: ["draw phase", "maxx c", "draw trigger", "each special summon"],
    q: "Maxx C resolved this turn. Does it trigger a draw during the Draw Phase if the opponent draws?",
    a: "No. Maxx C triggers when the opponent Special Summons a monster. Drawing a card during the Draw Phase does not trigger Maxx C. Maxx C only responds to Special Summons."
  },
  {
    cards: ["draw phase", "deck out", "no cards", "lose game", "cannot draw"],
    q: "What happens if a player cannot draw during the Draw Phase?",
    a: "If a player is required to draw but has no cards in their Deck they lose the duel immediately. This is called a Deck Out loss. The loss occurs at the moment the draw is required and cannot be prevented by chaining effects after the fact."
  },
  {
    cards: ["draw phase", "card effects", "during draw phase", "quick effects only"],
    q: "What can be activated during the Draw Phase?",
    a: "During the Draw Phase after the normal draw both players can activate Quick Effects and Trap cards in response to the draw or in the open game state. However most Spell and Trap activations are restricted to the Main Phase. Only cards that specifically allow Draw Phase activation or Quick Effects can be used."
  },
  {
    cards: ["draw phase", "one for one", "main phase only", "cannot draw phase"],
    q: "Can One for One be activated during the Draw Phase?",
    a: "No. One for One is a Normal Spell and can only be activated during the Main Phase. Normal Spells cannot be activated during the Draw Phase."
  },
  {
    cards: ["draw phase", "thunder dragon", "discard", "search", "hand effect"],
    q: "Can Thunder Dragon's hand effect that discards itself to search be used during the Draw Phase?",
    a: "No. Thunder Dragon's effect is a Quick Effect but it requires discarding itself. This is a monster effect activated from the hand. Monster effects activated from the hand follow their own timing rules. Most hand-activated monster effects can only be used in appropriate open game states not specifically during the Draw Phase."
  },
  {
    cards: ["draw phase", "upstart goblin", "cannot activate", "main phase spell"],
    q: "Can Upstart Goblin be activated during the Draw Phase?",
    a: "No. Upstart Goblin is a Normal Spell and can only be activated during the Main Phase. Drawing additional cards during the Draw Phase requires effects that specifically activate during the Draw Phase."
  },
  {
    cards: ["draw phase", "appropriate", "flip face-up", "trigger", "draw card"],
    q: "Appropriate is face-down. Opponent draws during Draw Phase. Does Appropriate flip and trigger?",
    a: "Yes. Appropriate triggers whenever the opponent draws 2 or more cards. The normal Draw Phase draw is only 1 card so it would not trigger Appropriate. However if an effect causes the opponent to draw 2 or more cards during the Draw Phase Appropriate can trigger."
  },
  {
    cards: ["draw phase", "pot of desires", "draw phase activate", "main phase only"],
    q: "Can Pot of Desires be activated during the Draw Phase?",
    a: "No. Pot of Desires is a Normal Spell and can only be activated during the Main Phase. Any card draw effects from Spells require Main Phase activation."
  },
  {
    cards: ["draw phase", "hand trap", "from hand", "after draw", "can respond"],
    q: "Can hand traps be activated during the Draw Phase after the normal draw?",
    a: "It depends on the hand trap. Quick Effect hand traps can generally be activated in response to events during the Draw Phase. However Droll and Lock Bird cannot activate during the Draw Phase. Effect Veiler can only activate during the opponent Main Phase. Each hand trap has its own timing restrictions."
  },
  {
    cards: ["draw phase", "full hand", "six cards", "still draw", "then discard end phase"],
    q: "If a player already has 6 cards in hand must they still draw during the Draw Phase?",
    a: "Yes. There is no restriction on drawing during the Draw Phase even with a full hand. The player draws the card and temporarily has 7 or more cards. The hand size limit of 6 is only checked and enforced during the End Phase."
  },
  {
    cards: ["draw phase", "battle fader", "draw phase summon", "cannot", "main phase only"],
    q: "Can Battle Fader be activated during the Draw Phase?",
    a: "No. Battle Fader activates when the opponent declares a direct attack. This happens during the Battle Phase not the Draw Phase. Battle Fader is irrelevant to the Draw Phase."
  },
  {
    cards: ["draw phase", "standby phase", "order", "before main phase"],
    q: "What is the order of phases at the start of a turn?",
    a: "The turn order is: Draw Phase, Standby Phase, Main Phase 1, Battle Phase (optional), Main Phase 2 (optional), End Phase. The Draw Phase is always first followed immediately by the Standby Phase before the Main Phase begins."
  },
  {
    cards: ["draw phase", "extra draw", "effect", "during draw phase", "before normal draw"],
    q: "Can an effect grant an extra draw at the start of the Draw Phase before the normal draw?",
    a: "Effects that grant extra draws typically specify when they activate. If an effect activates at the start of the Draw Phase the Turn Player resolves it then conducts their normal draw. The exact timing depends on the card text."
  },
  {
    cards: ["draw phase", "duel quiz", "cannot draw", "win condition", "empty deck"],
    q: "A player has 0 cards left in deck but has not drawn yet this turn. What happens?",
    a: "When the Turn Player must draw during the Draw Phase and has 0 cards in their Deck they immediately lose the duel. This Deck Out loss occurs at the moment the draw is required regardless of LP totals."
  },
  {
    cards: ["graveyard", "public knowledge", "open", "both players see"],
    q: "Is the Graveyard public knowledge in Yu-Gi-Oh?",
    a: "Yes. Both players can look at either GY at any time. The GY is open public knowledge. Players can check their own and the opponent GY freely. This is different from the hand which is private knowledge."
  },
  {
    cards: ["graveyard", "order", "maintained", "check last card"],
    q: "Must the GY maintain card order?",
    a: "Yes. The GY must maintain the order in which cards were sent to it. Players cannot rearrange the GY. However players can look through it to check card names and effects. The order matters for effects that interact with the top or bottom card of the GY."
  },
  {
    cards: ["graveyard", "monster reborn", "target", "either graveyard", "either player"],
    q: "Can Monster Reborn target monsters in either player's GY?",
    a: "Yes. Monster Reborn can target any monster in either player's GY. The revived monster is Special Summoned to the activating player's field. The monster goes to the activating player's side regardless of whose GY it came from."
  },
  {
    cards: ["graveyard", "owner", "sent to gy", "always owner gy"],
    q: "When a monster is sent to the GY does it go to the owner's GY or the controller's GY?",
    a: "Cards always go to the owner's GY. If Player A controls Player B's monster and it is destroyed it goes to Player B's GY. The owner is whoever the card belongs to in their deck not who currently controls it."
  },
  {
    cards: ["graveyard", "necrovalley", "blocks effects", "cannot move cards", "active"],
    q: "Necrovalley is active. What GY interactions are blocked?",
    a: "Necrovalley prevents: targeting cards in the GY with card effects, and all effects that would move cards from the GY to other zones. This blocks Monster Reborn, Call of the Haunted, any GY revival, and effects that banish from the GY. Cards can still be sent TO the GY normally."
  },
  {
    cards: ["graveyard", "send to gy", "not destroy", "difference", "foolish burial"],
    q: "What is the difference between destroying and sending to the GY?",
    a: "Destroying a card means it is destroyed by a destruction effect or battle and then sent to the GY. Sending to the GY means moving directly to the GY without destruction. This matters for effects that trigger when destroyed vs sent to GY and for cards like Indestructible monsters that cannot be destroyed but can be sent."
  },
  {
    cards: ["graveyard", "indestructible", "cannot destroy", "send still works"],
    q: "An Indestructible monster is targeted by Foolish Burial Goods. Can it be sent to the GY?",
    a: "Yes. Indestructible only prevents destruction. Being sent to the GY by a card effect is not destruction. Indestructible monsters can be sent to the GY by effects that send without destroying."
  },
  {
    cards: ["graveyard", "gy effect", "activate", "when in gy", "quick effect"],
    q: "When can GY effects be activated?",
    a: "GY effects can be activated during the appropriate phase when the activation conditions are met and there is an open game state. Many GY effects are Quick Effects activatable during either player's turn. Others are trigger effects that activate when a specific event occurs."
  },
  {
    cards: ["graveyard", "called by grave", "banish", "negate effects", "hand trap"],
    q: "Called by the Grave banishes a monster from the GY. What does it negate?",
    a: "Called by the Grave banishes a monster from the opponent GY and negates the effects of all monsters with that name the opponent controls and in their GY for the rest of the turn. This prevents the opponent from using any copy of that monster's effects including from hand."
  },
  {
    cards: ["graveyard", "dd crow", "banish", "any card", "either gy"],
    q: "Can D.D. Crow banish any card from either GY?",
    a: "Yes. D.D. Crow can banish 1 card from either player's GY. It is not limited to monsters. It can banish Spells, Traps, and monsters from either GY. It is activated by discarding D.D. Crow from hand."
  },
  {
    cards: ["graveyard", "macro cosmos", "banished instead", "no gy", "replacement"],
    q: "Macro Cosmos is active. Can GY effects activate?",
    a: "No GY effects can activate because no cards are being sent to the GY. Macro Cosmos replaces all GY sends with banishing face-down. Cards that would trigger when sent to the GY never reach the GY so their conditions are never met."
  },
  {
    cards: ["graveyard", "foolish burial", "send deck to gy", "ash blossom", "can negate"],
    q: "Can Ash Blossom negate Foolish Burial?",
    a: "Yes. Foolish Burial sends 1 monster from the Deck to the GY. Sending from Deck to GY is one of Ash Blossom's three trigger conditions. Ash Blossom can negate Foolish Burial."
  },
  {
    cards: ["graveyard", "premature burial", "equip", "gy revival", "spell"],
    q: "Does Premature Burial target a monster in the GY?",
    a: "Yes. Premature Burial targets 1 monster in your GY, pays 800 LP, and Special Summons it equipped with Premature Burial. If Premature Burial leaves the field the equipped monster is destroyed. The targeting happens at activation."
  },
  {
    cards: ["graveyard", "pot of avarice", "five monsters", "shuffle back", "draw"],
    q: "Can Pot of Avarice shuffle back any 5 monsters from the GY?",
    a: "Yes. Pot of Avarice selects any 5 monsters from your GY to shuffle back into your Deck then draws 2 cards. The monsters can be any combination of types. They are shuffled back as the cost before drawing."
  },
  {
    cards: ["graveyard", "zombie world", "type change", "gy also", "zombie"],
    q: "Does Zombie World change the Type of monsters in the GY?",
    a: "Yes. Zombie World changes all monsters on the field and in both GYs to Zombie type. This affects interactions with cards that check monster types in the GY for effects."
  },
  {
    cards: ["graveyard", "banish from gy", "face-down", "cannot use effects"],
    q: "Can banished face-down cards activate their effects?",
    a: "No. Cards banished face-down have their properties hidden and cannot activate effects. They cannot be targeted by most effects and their effects cannot be used. They exist in a neutral state where most interactions are impossible."
  },
  {
    cards: ["graveyard", "imperial iron wall", "cannot banish", "gy safe", "interaction"],
    q: "Imperial Iron Wall is active. Can cards be sent from GY to the banished zone?",
    a: "No. Imperial Iron Wall prevents all cards from being banished. Cards in the GY cannot be banished by any effect while Imperial Iron Wall is active. D.D. Crow, Called by the Grave, and all banishing effects are blocked."
  },
  {
    cards: ["graveyard", "once per turn", "gy effect", "already used this turn"],
    q: "Can a GY effect be used multiple times if multiple copies are in the GY?",
    a: "If the effect is once per turn by card name then only one copy can be used per turn regardless of how many are in the GY. If the effect is once per turn per card each copy can use the effect once. Check whether the restriction says this card or its name."
  },
  {
    cards: ["graveyard", "cannot be special summoned from gy", "restriction", "extra deck monster"],
    q: "An Extra Deck monster was sent to GY without being properly summoned. Can it be revived?",
    a: "No. Extra Deck monsters that were not properly summoned through their correct method cannot be Special Summoned from the GY or banished zone. A Fusion Monster sent directly to GY without being Fusion Summoned cannot be revived with Monster Reborn."
  },
  {
    cards: ["graveyard", "dark eruption", "dark monster", "retrieve", "add hand"],
    q: "Can Dark Eruption retrieve any DARK monster from the GY?",
    a: "Dark Eruption adds 1 DARK monster with 1500 or less ATK from your GY to your hand. This is an adding effect not a Special Summon. Ash Blossom can negate it as it adds from GY to hand. The monster must have 1500 or less ATK printed on the card."
  },
  {
    cards: ["graveyard", "trigger effect", "activate in gy", "after destroyed"],
    q: "When do GY trigger effects activate after a monster is destroyed?",
    a: "GY trigger effects activate at the first opportunity after the card reaches the GY. For monsters destroyed in battle this is after the End of Damage Step. For monsters destroyed by card effects this is after the chain that destroyed them fully resolves. Both players check for triggers and a new chain is built."
  },
  {
    cards: ["graveyard", "sending multiple", "simultaneous", "segoc", "all trigger"],
    q: "Multiple monsters are sent to the GY simultaneously. Do all their trigger effects activate?",
    a: "Yes. When multiple cards are sent to the GY simultaneously all their trigger effects activate in the same trigger window. SEGOC rules apply: Turn Player orders their triggers first then Non-Turn Player. All triggers from the simultaneous event go on the same chain."
  },
  {
    cards: ["graveyard", "soul charge", "multiple monsters", "special summon", "lp cost"],
    q: "How does Soul Charge work?",
    a: "Soul Charge targets any number of monsters in your GY and Special Summons them. You lose 1000 LP per monster summoned. You cannot conduct your Battle Phase the turn you activate Soul Charge. The LP cost is paid as an effect not a cost."
  },
  {
    cards: ["graveyard", "check gy", "during opponent turn", "any time"],
    q: "Can a player check the GY during the opponent's turn?",
    a: "Yes. Either player can look through either GY at any time. The GY is always public knowledge. There is no restriction on when players can check GY contents."
  },
  {
    cards: ["end phase", "what happens", "order", "effects resolve"],
    q: "What happens during the End Phase?",
    a: "During the End Phase: 1) The Turn Player resolves mandatory effects first then optional effects. 2) The Non-Turn Player resolves their effects. 3) Until end of turn effects expire. 4) Hand size limit is checked (6 cards). 5) Spirit Monsters return to hand. 6) Temporarily banished cards return. End Phase effects do not all resolve on one chain but sequentially in separate open game states."
  },
  {
    cards: ["end phase", "hand size", "discard", "six cards", "must discard"],
    q: "What is the hand size limit in Yu-Gi-Oh?",
    a: "The hand size limit is 6 cards. During the End Phase if a player has more than 6 cards in hand they must discard down to 6. The player chooses which cards to discard. This check happens at the very end of the End Phase after all other effects resolve."
  },
  {
    cards: ["end phase", "turn player", "mandatory first", "optional second", "order"],
    q: "In what order do End Phase effects activate?",
    a: "The Turn Player must activate their mandatory End Phase effects first then their optional ones. After the Turn Player completes their effects the Non-Turn Player activates their mandatory effects then optional ones. Each effect activates in a separate open game state."
  },
  {
    cards: ["end phase", "separate chains", "not one chain", "sequential"],
    q: "Do all End Phase effects resolve on the same chain?",
    a: "No. End Phase effects do not all happen on a single chain. They are activated or applied sequentially in separate open game states during the End Phase. Players can respond between each End Phase effect activation."
  },
  {
    cards: ["end phase", "sky striker shizuku", "search", "activate", "spell"],
    q: "Can Sky Striker Shizuku's End Phase search effect be activated and then another End Phase effect also activate?",
    a: "Yes. End Phase effects activate sequentially. After Shizuku's search resolves in its own chain there is a new open game state where other End Phase effects or Quick Effects can be activated before the End Phase concludes."
  },
  {
    cards: ["end phase", "multirole", "sky striker", "set spell", "same end phase"],
    q: "Can Sky Striker Multirole set a Spell during the same End Phase as Shizuku's search?",
    a: "Yes. End Phase effects happen in separate open game states. Shizuku searches first then Multirole can set a Spell in the same End Phase. The order follows Turn Player priority."
  },
  {
    cards: ["end phase", "mirrorjade", "wipe", "all opponent monsters", "newly summoned"],
    q: "Mirrorjade's End Phase wipe effect resolved. Opponent summons a monster during the End Phase. Is it destroyed?",
    a: "Yes. Mirrorjade's wipe is a lingering effect that applies once during the End Phase when applied. If it has not yet been applied and a new monster is summoned that monster will be destroyed when the wipe applies."
  },
  {
    cards: ["end phase", "farfa", "temporarily banished", "return", "when"],
    q: "Farfa temporarily banished an opponent monster until the End Phase. When exactly does it return?",
    a: "The monster returns during the End Phase. The Turn Player can choose when during the End Phase the temporary return happens as it occurs in an open game state. Players can activate Fast Effects before or after the return depending on the open game state."
  },
  {
    cards: ["end phase", "super polymerization", "quick play", "can activate"],
    q: "Can Super Polymerization be activated during the End Phase?",
    a: "Yes. Super Polymerization is a Quick-Play Spell and can be activated during any phase including the End Phase as long as it was Set on a previous turn or it is the opponent's End Phase."
  },
  {
    cards: ["end phase", "spirit monster", "return hand", "mandatory", "cannot keep"],
    q: "Can Spirit Monsters be kept on the field through the End Phase?",
    a: "No. Spirit Monsters have a mandatory effect to return to the hand during the End Phase of the turn they are Normal or Special Summoned. This cannot be prevented unless a card specifically stops Spirit Monsters from returning. It is mandatory and must resolve."
  },
  {
    cards: ["end phase", "dpe", "destroyer phoenix enforcer", "standby", "gy return"],
    q: "DPE activates its GY effect during the End Phase? No wait - when does DPE return?",
    a: "DPE returns during the Standby Phase not the End Phase. When DPE is destroyed its effect activates in the GY during the Standby Phase of the next turn to Special Summon itself. It does not return during the End Phase."
  },
  {
    cards: ["end phase", "until end of turn", "expires when", "after end phase"],
    q: "When do until end of turn effects expire?",
    a: "Until end of turn effects expire after all End Phase actions are completed and the turn officially ends. They remain active throughout the entire End Phase. At the start of the next turn those effects are no longer applying."
  },
  {
    cards: ["end phase", "baronne de fleur", "return extra deck", "standby phase effect"],
    q: "When does Baronne de Fleur activate her once per turn effect to return to Extra Deck?",
    a: "Baronne's effect to return to the Extra Deck and Special Summon from GY activates during the Standby Phase not the End Phase. Players can respond to this activation with Fast Effects since it is an open game state activation."
  },
  {
    cards: ["end phase", "check triggers", "after chain", "new effects"],
    q: "After an End Phase chain resolves do players check for new trigger effects?",
    a: "Yes. After each End Phase chain resolves players check for trigger effects that activated during that resolution. New triggers form a new chain following SEGOC. This continues until both players pass consecutively with no new activations."
  },
  {
    cards: ["end phase", "cannot activate", "some restrictions", "battle phase only"],
    q: "Are there any restrictions on what can be activated during the End Phase?",
    a: "Most Quick Effects and Traps can be activated during the End Phase in open game states. However some effects specifically state they can only be activated during the Main Phase or Battle Phase. Always check the card text for activation timing restrictions."
  },
  {
    cards: ["end phase", "mandatory", "optional", "cannot skip mandatory"],
    q: "Can a player choose to skip their mandatory End Phase effects?",
    a: "No. Mandatory End Phase effects must activate. A player cannot choose to skip or ignore them. Examples include Spirit Monster returns and mandatory trigger effects. Optional effects can be chosen not to activate."
  },
  {
    cards: ["end phase", "both players", "non turn player", "effects too"],
    q: "Can the Non-Turn Player activate effects during the End Phase?",
    a: "Yes. Both players can activate effects during the End Phase. The Turn Player goes first with their mandatory then optional effects. Then the Non-Turn Player has the opportunity for their effects. This is an open game state where both players can respond."
  },
  {
    cards: ["end phase", "field spell", "destroyed", "trigger", "end phase event"],
    q: "A Field Spell is destroyed during the End Phase. Can its destruction trigger effects?",
    a: "Yes. Destruction that occurs during the End Phase can trigger effects normally. Any trigger effects that activate due to the Field Spell being destroyed form a new chain and resolve during the End Phase before the turn ends."
  },
  {
    cards: ["end phase", "time limit", "tournament", "turn end", "judge call"],
    q: "What happens when time is called during a tournament round?",
    a: "When time is called the current turn finishes completely including the End Phase. After that turn ends each player takes one more turn. After those additional turns if the game is not decided the player with higher LP wins. If LP are equal the game is a draw."
  },
  {
    cards: ["end phase", "hand size limit", "discard", "choose", "which cards"],
    q: "When discarding to hand size limit in the End Phase can the player choose which cards to discard?",
    a: "Yes. When a player must discard to the hand size limit of 6 cards they choose which cards to discard. This is not random. The player selects which excess cards go to the GY."
  },
  {
    cards: ["lingering effect", "what is", "resolved effect", "continues applying"],
    q: "What is a lingering effect in Yu-Gi-Oh?",
    a: "A lingering effect is created when an activated effect resolves and continues to apply for a duration such as until end of turn. Unlike continuous effects lingering effects persist even after the card that created them leaves the field. They cannot be stopped by destroying the source card after resolution."
  },
  {
    cards: ["lingering effect", "card destroyed after", "still applies", "cannot stop"],
    q: "A card with a lingering effect is destroyed after the effect resolved. Does the lingering effect continue?",
    a: "Yes. Once a lingering effect successfully resolves it persists for its stated duration regardless of what happens to the source card. Destroying Abyss Dweller after its effect resolved does not restore GY effects. Destroying Dimensional Barrier after it resolved does not allow the declared summon type."
  },
  {
    cards: ["lingering effect", "negate after resolution", "crossout designator", "called by grave"],
    q: "Can negating a card after its lingering effect resolved undo the lingering effect?",
    a: "It depends. Called by the Grave negating a GY card CAN turn off its lingering effects like Maxx C's draw effect. Crossout Designator CAN turn off Dimensional Barrier's lingering restriction. However this is card-specific. Most lingering effects cannot be undone once they successfully resolve."
  },
  {
    cards: ["dark ruler no more", "lingering", "negate all monsters", "battle damage", "turn"],
    q: "Dark Ruler No More resolved. Can the effects be stopped mid-turn?",
    a: "No. Dark Ruler No More creates two lingering effects: negating all opponent monster effects until end of turn and preventing the activating player from taking battle damage that turn. These persist for the full turn regardless of Dark Ruler's location."
  },
  {
    cards: ["maxx c", "lingering draw", "called by grave", "turns off"],
    q: "Maxx C resolved and the draw effect is active. Opponent uses Called by the Grave targeting Maxx C. Does the draw effect stop?",
    a: "Yes. Called by the Grave negates the effects of the banished card turning off Maxx C's lingering draw effect. The opponent can Special Summon freely without triggering further draws for the rest of the turn."
  },
  {
    cards: ["dimensional barrier", "lingering restriction", "crossout designator", "lifts restriction"],
    q: "Dimensional Barrier called Xyz monsters this turn. Opponent uses Crossout Designator on Dimensional Barrier. Does the Xyz restriction lift?",
    a: "Yes. Crossout Designator negating the source card turns off the lingering restriction from Dimensional Barrier. The Xyz Summon restriction is removed for the rest of the turn."
  },
  {
    cards: ["abyss dweller", "lingering", "gy effects negated", "negate dweller after"],
    q: "Abyss Dweller's effect resolved this turn. Opponent negates Dweller with Infinite Impermanence. Do GY effects work again?",
    a: "No. Dweller's effect already successfully resolved creating a lingering restriction on GY effects. Negating Dweller after the fact does not undo the lingering effect. GY effects remain blocked for the rest of the turn."
  },
  {
    cards: ["mirrorjade", "end phase", "lingering wipe", "already resolved", "effect veiler"],
    q: "Mirrorjade's End Phase wipe effect resolved. Can Effect Veiler stop the destruction in the End Phase?",
    a: "No. The End Phase destruction is the application of a lingering effect that already resolved. Mirrorjade is not activating a new effect in the End Phase. Effect Veiler cannot stop it."
  },
  {
    cards: ["pot of prosperity", "battle damage halved", "lingering", "rest of turn"],
    q: "Pot of Prosperity resolved. Is the battle damage reduction a lingering effect?",
    a: "Yes. Pot of Prosperity's restriction that any battle damage the opponent takes is halved is a lingering effect that applies for the rest of that turn. It persists even if Pot of Prosperity is later negated or the effect is targeted."
  },
  {
    cards: ["red eyes fusion", "lingering restriction", "cannot normal summon", "activation recognized"],
    q: "Red-Eyes Fusion was activated but negated by Ash Blossom. Can I still Normal Summon this turn?",
    a: "No. Red-Eyes Fusion's restriction on Normal Summoning is tied to the activation being recognized by the game not to the effect resolving. Even though Ash Blossom negated the effect the activation still occurred creating the lingering summoning restriction."
  },
  {
    cards: ["lingering effect", "sp little knight", "direct attack restriction", "player condition"],
    q: "S:P Little Knight's effect resolved applying the direct attack restriction. Little Knight is then used as Link Material. Does the restriction lift?",
    a: "No. The restriction your monsters cannot attack directly this turn is a lingering condition applied to the player when the effect resolved. It persists for the rest of the turn regardless of what happens to S:P Little Knight."
  },
  {
    cards: ["lingering effect", "skill drain", "already negated", "monster leaves", "still negated"],
    q: "Skill Drain negated a monster's effect. The monster leaves the field. Is the effect still negated?",
    a: "The effect depends on whether it was a continuous effect or an activated effect. If Skill Drain negated an activated effect that created a lingering effect the lingering effect is gone because Skill Drain negates it while it is active. If the monster left the field the effect is no longer on the field to be negated."
  },
  {
    cards: ["nadir servant", "restriction", "extra deck", "cannot summon", "negated effect"],
    q: "Nadir Servant's effect was negated. Does the Extra Deck summon restriction apply?",
    a: "No. The restriction cannot Special Summon from the Extra Deck is part of Nadir Servant's effect. Since the effect was negated the restriction is not created. This contrasts with Red-Eyes Fusion whose restriction is tied to the activation."
  },
  {
    cards: ["lingering effect", "duration", "until end of turn", "end phase", "expires"],
    q: "When exactly does an until end of turn lingering effect expire?",
    a: "Until end of turn effects last through the entire End Phase. They expire after all End Phase effects and actions are completed and the turn officially ends. During the End Phase the effects are still active."
  },
  {
    cards: ["effect veiler", "until end of turn", "negate", "end phase", "still negated"],
    q: "Effect Veiler negated a monster's effects until end of turn. During the End Phase is the monster still negated?",
    a: "Yes. Until end of turn means through the entire End Phase. The monster's effects remain negated throughout the End Phase. They restore at the start of the next turn."
  },
  {
    cards: ["lingering effect", "forbidden chalice", "atk boost negate", "until end turn"],
    q: "Forbidden Chalice boosted a monster's ATK by 400 and negated its effects until end of turn. When does this expire?",
    a: "Both the ATK boost and the effect negation expire at the end of the turn they were applied. They last through the entire End Phase. At the start of the next turn the ATK returns to normal and the monster's effects are restored."
  },
  {
    cards: ["lingering effect", "accesscode talker", "atk gain", "permanent", "no duration"],
    q: "Accesscode Talker gains ATK from its effect. Does this ATK boost expire at end of turn?",
    a: "No. Accesscode Talker's ATK gain does not specify a duration like until end of turn. Without a stated duration the ATK boost is permanent while the card remains face-up on the field. It does not expire."
  },
  {
    cards: ["lingering effect", "dpe", "destroyer phoenix enforcer", "graveyard", "standby phase return"],
    q: "DPE was destroyed and its GY effect will return it next Standby Phase. If DPE is banished before then does it still return?",
    a: "No. DPE must be in the GY to Special Summon itself via its own Standby Phase effect. If it is moved from the GY to the banished zone before the Standby Phase the lingering effect loses track of the card and it cannot return."
  },
  {
    cards: ["lingering effect", "immunity granted", "this turn", "battle damage protection"],
    q: "A card grants immunity to battle damage this turn. Does the immunity apply even after the granting card is destroyed?",
    a: "Yes. Once the effect successfully resolved the lingering immunity persists for the rest of the turn. Destroying the source card after the effect resolved does not remove the immunity."
  },
  {
    cards: ["lingering effect", "baronne de fleur", "standby phase", "return extra deck", "summon gy"],
    q: "Baronne de Fleur activates her Standby Phase effect to return to Extra Deck and summon from GY. Can Called by the Grave chain to this?",
    a: "Yes. The effect activates in the Standby Phase creating an activation window for Fast Effects. Called by the Grave can chain to Baronne's Standby Phase effect activation."
  },
  {
    cards: ["lingering effect", "cannot chain to lingering", "already resolved"],
    q: "Can players chain to a lingering effect that is already active?",
    a: "No. Lingering effects do not activate again after they resolve. They are simply applied to the game state. There is no activation window to chain to. You can only respond to the original activation before it resolved."
  },
  {
    cards: ["lingering effect", "shangri-ira", "zone lock", "requires face-up", "not pure lingering"],
    q: "Kashtira Shangri-Ira is destroyed. Do the locked zones immediately unlock?",
    a: "Yes. Shangri-Ira's zone lock requires it to remain face-up on the field. It is a continuous application not a true lingering effect. Once it leaves the field the zone locks are immediately removed. True lingering effects persist after the source leaves but zone locks like this one do not."
  },
  {
    cards: ["token", "what is", "monster token", "basic rules"],
    q: "What are Tokens in Yu-Gi-Oh?",
    a: "Tokens are monsters that are Special Summoned by card effects. They are not real cards and do not exist in the Deck, hand, or GY. Tokens use card sleeves or other markers to represent them. When they leave the field they simply cease to exist instead of going to any zone."
  },
  {
    cards: ["token", "graveyard", "cannot go", "cease to exist"],
    q: "Where do Tokens go when they leave the field?",
    a: "Tokens cannot exist anywhere except the field. When a Token leaves the field for any reason it simply ceases to exist. It does not go to the GY, hand, Deck, or banished zone. Effects that would move Tokens to those zones simply remove them from the field."
  },
  {
    cards: ["token", "tribute", "ritual summon", "advance summon", "valid"],
    q: "Can Tokens be tributed for a Tribute Summon or Ritual Summon?",
    a: "Yes. Tokens can be tributed for Tribute Summons and Ritual Summons. The tribute simply removes the Token from the field where it ceases to exist. The Token does not need to reach the GY for the tribute to be valid."
  },
  {
    cards: ["token", "link material", "valid", "level", "linkuriboh"],
    q: "Can Tokens be used as Link Material?",
    a: "Yes. Tokens can be used as Link Material. Tokens have Levels so they can satisfy level-based material requirements like Linkuriboh requiring a Level 1 monster. However some Link Monsters specifically exclude Tokens in their material requirements."
  },
  {
    cards: ["token", "xyz material", "cannot", "no level issue"],
    q: "Can Tokens be used as Xyz Material?",
    a: "Yes. Tokens can be used as Xyz Material provided they have the correct Level. Tokens have Levels matching whatever the card that created them specifies. They can be overlaid for Xyz Summons."
  },
  {
    cards: ["token", "synchro material", "tuner token", "valid"],
    q: "Can Tokens be used as Synchro Material?",
    a: "Yes. Tokens can be used as Synchro Material. If the Token is a Tuner Token it can serve as the Tuner for the Synchro Summon. Non-Tuner Tokens can be used as non-Tuner material."
  },
  {
    cards: ["token", "book of moon", "face-down", "cannot"],
    q: "Can Book of Moon flip a Token face-down?",
    a: "No. Tokens cannot exist in face-down Defense Position. Book of Moon places monsters face-down so it legally cannot target or affect Tokens."
  },
  {
    cards: ["token", "forbidden droplet", "cost", "graveyard", "cannot"],
    q: "Can a Token be used as cost for Forbidden Droplet?",
    a: "No. Forbidden Droplet requires sending the card to the Graveyard as cost. Tokens cannot be sent to the Graveyard because they cease to exist when leaving the field. Tokens cannot pay costs that require reaching the GY."
  },
  {
    cards: ["token", "infinite impermanence", "negate effect", "no effect", "cannot target"],
    q: "Can Infinite Impermanence target a Token?",
    a: "No. Normal Tokens are Non-Effect monsters and have no effects to negate. Infinite Impermanence cannot legally target a Token because there is nothing to negate."
  },
  {
    cards: ["token", "destroyed trigger", "other cards", "dark hole"],
    q: "When Tokens are destroyed do they trigger effects that care about cards being destroyed?",
    a: "Yes. Tokens are considered cards on the field and are successfully destroyed before they cease to exist. Effects that trigger when a card on the field is destroyed can be triggered by Token destruction."
  },
  {
    cards: ["token", "deck devastation virus", "tribute", "atk requirement"],
    q: "Can a Token be tributed for Deck Devastation Virus?",
    a: "Yes provided the Token has the required ATK and type. If the Token meets the 2000 or more ATK requirement and is DARK type it can be tributed for Deck Devastation Virus. The Token does not need to reach the GY."
  },
  {
    cards: ["token", "nibiru", "primal being token", "evenly matched", "face-down"],
    q: "Can a Nibiru Primal Being Token be banished face-down by Evenly Matched?",
    a: "No. Tokens cannot be banished face-down. Evenly Matched forces cards to be banished face-down. The player is legally forced to keep the Token on the field and banish their other cards instead."
  },
  {
    cards: ["token", "effect negated", "skill drain", "continuous effect"],
    q: "Does Skill Drain affect Tokens?",
    a: "Tokens are Non-Effect monsters and have no effects to negate. Skill Drain has no impact on normal Tokens. However if a Token was given effects by another card Skill Drain would negate those granted effects."
  },
  {
    cards: ["token", "cannot exist hand deck gy", "only field"],
    q: "Can Tokens be added to the hand or returned to the Deck?",
    a: "No. Tokens can only exist on the field. Any effect that would move a Token to the hand, Deck, GY, or banished zone simply removes it from the field where it ceases to exist. The effect still resolves but the Token disappears."
  },
  {
    cards: ["token", "compulsory evacuation device", "return hand", "ceases to exist"],
    q: "Compulsory Evacuation Device targets a Token. What happens?",
    a: "The Token ceases to exist. Compulsory Evacuation Device would return the Token to the hand but Tokens cannot exist in the hand. The Token is simply removed from the field and ceases to exist. The effect resolves but the Token does not return to the hand."
  },
  {
    cards: ["token", "linkuriboh", "level 1", "material requirement"],
    q: "Can a Token be used for the Link Summon of Linkuriboh?",
    a: "Yes. Linkuriboh requires a Level 1 monster as its Link Material. Tokens possess Levels as defined by the card that created them. A Level 1 Token can be used as material for Linkuriboh."
  },
  {
    cards: ["token", "attack defense", "stats", "printed on creating card"],
    q: "What are a Token's ATK and DEF?",
    a: "A Token's ATK and DEF are defined by the card effect that created it. Most Tokens have their ATK and DEF specified in the card text that generates them. Some effects create Tokens with 0 ATK and 0 DEF by default."
  },
  {
    cards: ["token", "cannot be special summoned from gy", "does not exist gy"],
    q: "Can a Token be Special Summoned from the GY with Monster Reborn?",
    a: "No. Tokens do not exist in the GY. When a Token leaves the field it ceases to exist entirely. There is nothing in the GY to target with Monster Reborn or any other revival effect."
  },
  {
    cards: ["token", "battle", "attacks", "destroyed normally"],
    q: "Can Tokens attack and be attacked in battle normally?",
    a: "Yes. Tokens battle exactly like normal monsters using their printed ATK and DEF. They can attack opponent monsters or be attacked. When a Token is destroyed by battle it ceases to exist rather than going to the GY."
  },
  {
    cards: ["token", "once per turn", "multiple tokens", "same turn", "generate"],
    q: "Can multiple Tokens be generated in the same turn?",
    a: "Yes unless the creating effect specifies otherwise. Some effects create multiple Tokens at once. Some effects have once per turn restrictions preventing additional Token generation. Multiple different effects that create Tokens can all be used in the same turn."
  },
  {
    cards: ["token", "type attribute", "defined", "creating effect"],
    q: "What Type and Attribute do Tokens have?",
    a: "A Token's Type and Attribute are defined by the card effect that created it. Most Token-generating effects specify the Type and Attribute. This matters for effects like Rivalry of Warlords, Gozen Match, and effects requiring specific Types or Attributes."
  },
  {
    cards: ["token", "pendulum zone", "cannot place", "only monster zone"],
    q: "Can a Token be placed in the Pendulum Zone?",
    a: "No. Tokens can only be placed in Main Monster Zones. They cannot be placed in the Pendulum Zone, Extra Monster Zone beyond normal rules, Field Spell Zone, or Spell and Trap Zones."
  },
  {
    cards: ["token", "xyz summon", "becomes material", "ceases as token"],
    q: "A Token becomes an Xyz Material. Does it still cease to exist when the Xyz Monster leaves the field?",
    a: "Yes. When the Xyz Monster leaves the field all remaining Xyz Materials including any Tokens are sent to the GY. However since Tokens cannot go to the GY they simply cease to exist when they would be sent there."
  },
  {
    cards: ["battle phase", "steps", "start step", "battle step", "damage step", "end step"],
    q: "What are the steps of the Battle Phase?",
    a: "The Battle Phase has 4 steps: 1) Start Step - the Battle Phase begins, no attacks yet. 2) Battle Step - declare an attack, both players can respond. 3) Damage Step - damage is calculated, sub-steps apply. 4) End Step - the Battle Phase ends. After each attack the phase returns to the Battle Step for additional attacks."
  },
  {
    cards: ["battle phase", "attack declaration", "target", "open game state", "respond"],
    q: "When can players respond to an attack declaration?",
    a: "After an attack is declared in the Battle Step both players have the opportunity to activate cards or effects before the game moves to the Damage Step. This is the Battle Step response window. Quick Effects and Traps can be activated here."
  },
  {
    cards: ["battle phase", "replay", "when occurs", "monster leaves field"],
    q: "What is a replay in the Battle Phase?",
    a: "A replay occurs when the attack target is no longer a valid target after the attack was declared but before entering the Damage Step. The attacking player can choose to attack a different valid target or not attack at all. Replays can only occur in the Battle Step not in the Damage Step."
  },
  {
    cards: ["battle phase", "replay", "damage step", "cannot replay", "already in"],
    q: "Can a replay occur once the game is in the Damage Step?",
    a: "No. Replays can only occur in the Battle Step. Once the game transitions into the Damage Step no replays are possible. If the defending monster is destroyed during the Damage Step the attack simply ends without a replay."
  },
  {
    cards: ["battle phase", "direct attack", "no monsters", "opponent field empty"],
    q: "When can a monster attack directly?",
    a: "A monster can attack directly when the opponent controls no monsters. Some monsters have effects allowing them to attack directly even when the opponent controls monsters. Direct attacks deal battle damage equal to the attacking monster ATK to the opponent LP."
  },
  {
    cards: ["battle phase", "multiple attacks", "same monster", "once per battle step"],
    q: "Can the same monster attack multiple times in one Battle Phase?",
    a: "Only if a card effect specifically grants additional attacks. By default each monster can only attack once per turn. Effects like Borrelsword Dragon or Twin Sword Mastery grant additional attacks. Multiple attack grants do not stack beyond what each specific effect states."
  },
  {
    cards: ["battle phase", "cannot attack", "declared attack", "negate attack", "bacon saver"],
    q: "An attack is negated by Bacon Saver. Can that monster attack again?",
    a: "No. Once a monster declares an attack it has used its attack for that turn even if the attack is negated. Negating an attack does not restore the monster ability to attack again."
  },
  {
    cards: ["battle phase", "flip attack", "face-down", "flip summon", "defense"],
    q: "When a face-down Defense Position monster is attacked what happens?",
    a: "The face-down monster is flipped face-up at the Start of the Damage Step. If it has a FLIP effect it activates After Damage Calculation. Damage is calculated based on the revealed ATK and DEF. If destroyed by the attack the monster goes to the GY after the End of Damage Step."
  },
  {
    cards: ["battle phase", "piercing", "defense", "damage", "trample"],
    q: "What is piercing battle damage?",
    a: "Piercing or trample damage occurs when a monster with piercing attacks a Defense Position monster and its ATK exceeds the defending monster DEF. The difference is dealt as battle damage to the defending player LP. Without piercing attacking a Defense Position monster deals no damage even if ATK exceeds DEF."
  },
  {
    cards: ["battle phase", "defense position", "cannot be destroyed by battle", "still damage"],
    q: "A monster cannot be destroyed by battle. Does it still take damage?",
    a: "The player still takes battle damage from attacks against a monster that cannot be destroyed by battle. The monster survives but the LP damage is still applied normally. Cannot be destroyed by battle only prevents destruction not damage calculation."
  },
  {
    cards: ["battle phase", "both destroyed", "same atk", "double ko"],
    q: "Two monsters with equal ATK attack each other. What happens?",
    a: "Both monsters are destroyed simultaneously and both players take no battle damage. Both monsters go to the GY at the End of the Damage Step. This is called a double KO or simultaneous destruction by battle."
  },
  {
    cards: ["battle phase", "attack position", "defense position", "change", "when"],
    q: "Can a monster change from Attack to Defense Position during the Battle Phase?",
    a: "No. A monster cannot change battle positions during the Battle Phase through normal game mechanics. Card effects can change battle positions during the Battle Phase. A monster that was Normal Summoned that turn also cannot change battle position."
  },
  {
    cards: ["battle phase", "wall of disruption", "attacking monsters", "atk reduction", "all"],
    q: "Wall of Disruption reduces ATK of all attacking monsters. When is it activated?",
    a: "Wall of Disruption is activated in the Battle Step when a monster declares an attack. It reduces the ATK of all Attack Position monsters the opponent controls by 800 for each monster you control. It targets the attack declaration window."
  },
  {
    cards: ["battle phase", "mirror force", "destroy attacking", "battle step", "activates"],
    q: "When is Mirror Force activated?",
    a: "Mirror Force is activated in the Battle Step after an attack is declared. It destroys all Attack Position monsters the opponent controls. It cannot be activated in the Damage Step. It targets the attack declaration response window in the Battle Step."
  },
  {
    cards: ["battle phase", "cannot attack", "turn summoned", "normal summon restriction"],
    q: "Can a monster that was just Normal Summoned attack in the same turn?",
    a: "Yes. There is no general rule preventing a Normal Summoned monster from attacking the same turn it was summoned unless the card itself says it cannot attack the turn it is Normal Summoned. Some cards have this restriction but most do not."
  },
  {
    cards: ["battle phase", "direct attack", "changed to defense", "activate effect"],
    q: "A monster is attacking directly. Can the opponent activate a card to Special Summon a blocker?",
    a: "Yes. After a direct attack is declared the opponent can activate Quick Effects or Traps in the Battle Step response window. If they Special Summon a monster the attack can no longer be direct. A replay occurs and the attacking player can choose to attack the new monster or not attack."
  },
  {
    cards: ["battle phase", "cannot conduct", "skip", "effect", "some cards"],
    q: "What prevents a player from conducting a Battle Phase?",
    a: "Some card effects specifically prevent the turn player from conducting a Battle Phase. Examples include certain Monster effects and Spell cards that say the turn player cannot conduct a Battle Phase this turn. Missing a Battle Phase does not carry over to the next turn."
  },
  {
    cards: ["battle phase", "spell speed", "during battle step", "quick play", "trap"],
    q: "What can be activated during the Battle Step?",
    a: "During the Battle Step both Quick-Play Spells and Trap cards (Speed 2) and Counter Traps (Speed 3) can be activated in response to the attack declaration. Ignition Effects (Speed 1) cannot be activated during the Battle Step."
  },
  {
    cards: ["battle phase", "damage step", "honest", "calculation", "atk modification"],
    q: "When exactly during the Damage Step can ATK modification effects activate?",
    a: "ATK modification effects can activate during the Before Damage Calculation sub-step. This is after the monster is flipped face-up but before damage is actually calculated. Cards like Honest activate here."
  },
  {
    cards: ["battle phase", "token", "attack", "can be attacked", "can attack"],
    q: "Can Tokens attack and be attacked?",
    a: "Yes. Tokens can attack and be attacked like normal monsters. They battle using their printed ATK and DEF. When a Token is destroyed by battle it simply ceases to exist instead of going to the GY."
  },
  {
    cards: ["battle phase", "lifepoint damage", "zero", "lose", "immediately"],
    q: "What happens when a player reaches 0 LP during the Battle Phase?",
    a: "The player immediately loses the duel when their LP reaches 0. This applies during battle damage calculation. The game ends at that moment regardless of what other effects may be pending."
  },
  {
    cards: ["battle phase", "cannot be selected as attack target", "protection", "lynx", "subterror"],
    q: "What does cannot be selected as an attack target mean?",
    a: "If a monster cannot be selected as an attack target the opponent cannot declare attacks against it. The opponent must attack other monsters or attack directly if no other monsters are present. This is different from cannot be destroyed by battle."
  },
  {
    cards: ["battle phase", "end step", "mandatory effects", "triggers", "after battle"],
    q: "Can effects activate during the End Step of the Battle Phase?",
    a: "Yes. The End Step of the Battle Phase is an open game state where trigger effects that activated during the Battle Phase can resolve. Players can also activate Quick Effects here. After both players pass the Battle Phase ends and Main Phase 2 begins."
  },
  {
    cards: ["battle phase", "main phase 2", "after battle", "can activate spells traps"],
    q: "Can players activate cards in Main Phase 2 after the Battle Phase?",
    a: "Yes. Main Phase 2 functions the same as Main Phase 1 except a player cannot Normal Summon again if they already did in Main Phase 1. All Spell, Trap, and monster effect activations that are legal in Main Phase 1 are also legal in Main Phase 2."
  },
  {
    cards: ["battle phase", "attack directly", "restricted", "pixie ring", "lowest atk"],
    q: "Pixie Ring forces attacks on the lowest ATK monster. Can a monster ignore this?",
    a: "Only monsters unaffected by Trap cards can ignore Pixie Ring. Elemental HERO Wildheart for example is unaffected by Trap cards so it can attack any monster. Other monsters must comply with Pixie Ring and attack the lowest ATK monster."
  },
  {
    cards: ["zone", "extra monster zone", "main monster zone", "placement", "extra deck summon"],
    q: "Where must Extra Deck monsters be placed when summoned?",
    a: "Extra Deck monsters must be placed in the Extra Monster Zone or in a Main Monster Zone that a Link Monster points to. Without a Link Arrow pointing to a Main Monster Zone you can only have one Extra Deck monster at a time in the Extra Monster Zone. Each player has one Extra Monster Zone."
  },
  {
    cards: ["extra monster zone", "shared", "both players", "one each"],
    q: "Do both players share the Extra Monster Zones?",
    a: "No. Each player has their own Extra Monster Zone. Player A's Extra Monster Zone is on Player A's side of the field. Player B's is on their side. However the zones are positioned such that they are in the same column, which matters for column-based effects like Infinite Impermanence."
  },
  {
    cards: ["link arrow", "main monster zone", "enable", "extra deck", "points to"],
    q: "How do Link Arrows enable Extra Deck summons in Main Monster Zones?",
    a: "A Link Arrow pointing to a Main Monster Zone allows any Extra Deck monster to be summoned to that specific zone. The Link Monster must be on the field and its arrow must point directly to the zone. Multiple Link Arrows from different monsters can point to the same zone."
  },
  {
    cards: ["pendulum summon", "extra deck", "face-up", "extra monster zone", "link points"],
    q: "Where must Pendulum Monsters from the Extra Deck be placed?",
    a: "Pendulum Monsters summoned from the Extra Deck must go to the Extra Monster Zone or a Main Monster Zone that a Link Monster points to. They follow the same placement rules as all other Extra Deck monsters."
  },
  {
    cards: ["link monster", "extra monster zone", "cannot place", "main zone only"],
    q: "Can a Link Monster be placed in a Main Monster Zone without a Link Arrow pointing to it?",
    a: "No. Link Monsters are Extra Deck monsters and follow the same placement rules. They must go to the Extra Monster Zone or a Main Monster Zone pointed to by another Link Monster's arrow."
  },
  {
    cards: ["monster reborn", "extra deck monster", "main monster zone", "cannot extra zone"],
    q: "Monster Reborn revives an Extra Deck monster from the GY. Where does it go?",
    a: "It goes to a Main Monster Zone. Monsters Special Summoned from the GY or banished zone always go to Main Monster Zones regardless of their origin. They cannot be placed in the Extra Monster Zone."
  },
  {
    cards: ["temporarily banished", "return field", "main monster zone", "cannot extra zone"],
    q: "A temporarily banished Extra Deck monster returns. Where does it go?",
    a: "It must return to a Main Monster Zone. Monsters returning from temporary banishment cannot be placed in the Extra Monster Zone. This is true regardless of whether the monster was originally summoned to the Extra Monster Zone."
  },
  {
    cards: ["mind control", "take control", "extra deck monster", "main monster zone"],
    q: "Mind Control takes an opponent Extra Deck monster. Where does it go?",
    a: "It goes to a Main Monster Zone on the controller's field. Extra Deck monsters taken by Mind Control or similar effects go to Main Monster Zones not the Extra Monster Zone."
  },
  {
    cards: ["zone", "spell trap zone", "field spell zone", "pendulum zone", "placement"],
    q: "Where are Spell and Trap cards placed?",
    a: "Spell and Trap cards are placed in the 5 Spell and Trap Zones. The Field Spell Zone is separate and can only hold Field Spells. Pendulum Monsters placed in Pendulum Zones go in the leftmost and rightmost Spell and Trap Zones."
  },
  {
    cards: ["pendulum zone", "spell trap zone", "pendulum monster", "placed as spell"],
    q: "Can a Pendulum Monster be placed in a regular Spell and Trap Zone instead of the Pendulum Zone?",
    a: "No. Pendulum Monsters placed face-up in the Spell and Trap Zone must go in the leftmost or rightmost zone which are the Pendulum Zones. They cannot be placed in the middle Spell and Trap Zones as Pendulums."
  },
  {
    cards: ["infinite impermanence", "column", "same column", "spell trap zone", "monster zone"],
    q: "How does Infinite Impermanence's column effect work?",
    a: "When Infinite Impermanence is activated from the field (Set previously), it negates all Spell and Trap effects in the same vertical column for the rest of the turn. The column includes the Monster Zone directly above or below the Spell and Trap Zone where Impermanence was activated."
  },
  {
    cards: ["field spell zone", "one per player", "replace", "destroyed when"],
    q: "What happens when a second Field Spell is activated?",
    a: "Each player has one Field Spell Zone. When a new Field Spell is activated the previous one is sent to the GY unless the new card says otherwise. A player can only have one Field Spell active at a time."
  },
  {
    cards: ["zone", "full", "cannot summon", "main monster zone", "5 zones"],
    q: "What happens when all 5 Main Monster Zones are occupied?",
    a: "If all 5 Main Monster Zones are full no more monsters can be summoned or placed there. This applies to Normal Summons, Special Summons, and Set monsters. Effects that would summon monsters fail if there is no available zone."
  },
  {
    cards: ["extra monster zone", "opponent", "both occupied", "one zone"],
    q: "Can both players have monsters in the same Extra Monster Zone column?",
    a: "Yes but not in the same zone. Each Extra Monster Zone belongs to one player. Player A uses their own Extra Monster Zone and Player B uses theirs. Both zones are in use simultaneously when both players have Extra Deck monsters in their respective Extra Monster Zones."
  },
  {
    cards: ["zone", "link summon", "materials", "zone freed", "reuse"],
    q: "When Link Materials are sent to the GY their zones are freed. Can those zones be used immediately?",
    a: "Yes. When monsters are sent to the GY as Link Materials their zones immediately become available. The newly summoned Link Monster may point to those freed zones enabling further Extra Deck summons in the same turn."
  },
  {
    cards: ["artifact ignition", "full spell trap zone", "own card", "target"],
    q: "All my Spell and Trap Zones are full. Can I activate Artifact Ignition?",
    a: "You can activate Artifact Ignition only by targeting one of your own Spell and Trap Zone cards to destroy. You cannot target opponent cards if your zones are full. You also cannot target a Field Spell in the Field Zone or a Pendulum card in the Pendulum Zone."
  },
  {
    cards: ["zone", "equip spell", "attached to monster", "spell trap zone"],
    q: "Does an Equip Spell occupy a Spell and Trap Zone?",
    a: "Yes. Equip Spells are placed in a Spell and Trap Zone even though they are attached to a monster. They occupy one of your 5 Spell and Trap Zones. When the equipped monster leaves the field the Equip Spell is destroyed and the zone is freed."
  },
  {
    cards: ["extra monster zone", "link monster", "co-link", "mutual pointing"],
    q: "What is Co-Linking in Yu-Gi-Oh?",
    a: "Co-Linking occurs when two Link Monsters on opposite sides of the field have their Link Arrows mutually pointing at each other. Some cards have effects that activate or are enhanced when Co-Linked. Co-Linked monsters are in a network with other linked monsters."
  },
  {
    cards: ["zone", "token", "placed", "main monster zone", "only"],
    q: "Can Tokens be placed in the Extra Monster Zone?",
    a: "No. Tokens can only be placed in Main Monster Zones. Tokens are always placed in available Main Monster Zones. They cannot occupy the Extra Monster Zone even if a Link Arrow points to a Main Monster Zone."
  },
  {
    cards: ["zone", "xyz monster", "main zone", "extra zone", "after reborn"],
    q: "An Xyz Monster was in the Extra Monster Zone and was sent to GY. Monster Reborn revives it. Where does it go?",
    a: "It goes to a Main Monster Zone. Monster Reborn and all revival effects place monsters in Main Monster Zones. The monster cannot return to the Extra Monster Zone even if that zone is empty."
  },
  {
    cards: ["firewall dragon", "link arrows", "four directions", "points", "adjacent zones"],
    q: "Firewall Dragon has 4 Link Arrows. How many zones does it enable for Extra Deck summons?",
    a: "Firewall Dragon's 4 arrows each point to a different zone. Each arrow pointing to a Main Monster Zone enables one Extra Deck summon there. Up to 4 additional Main Monster Zones can have Extra Deck monsters when Firewall Dragon is in the Extra Monster Zone pointing in all 4 directions."
  },
  {
    cards: ["zone", "spell trap", "cannot activate", "full", "no open zone"],
    q: "Can a Spell or Trap card be activated if all Spell and Trap Zones are full?",
    a: "No. A Spell or Trap card cannot be activated or set if all 5 Spell and Trap Zones are occupied. The player must have an open Spell or Trap Zone to play the card. This includes all 5 regular zones and does not count the Field Spell Zone."
  },
  {
    cards: ["pendulum summon", "main monster zone", "extra monster zone", "hand monsters", "no restriction"],
    q: "When Pendulum Summoning monsters from the hand where can they be placed?",
    a: "Monsters Pendulum Summoned from the hand can be placed in any available Main Monster Zone. They do not need Link Arrows pointing to those zones. Only Pendulum Monsters from the face-up Extra Deck require Link Arrow zones or the Extra Monster Zone."
  },
  {
    cards: ["targeting", "choosing", "difference", "psct", "target word"],
    q: "What is the difference between targeting and choosing in Yu-Gi-Oh?",
    a: "Targeting uses the word target in the card text and is declared at activation before the chain resolves. The target is locked in when the effect activates. Choosing does not use the word target and the card or monster is selected when the effect resolves. This matters because targeting protection prevents being targeted but not being chosen."
  },
  {
    cards: ["targeting", "protection", "cannot be targeted", "can still be chosen"],
    q: "A monster has targeting protection. Can it still be affected by non-targeting effects?",
    a: "Yes. Targeting protection only prevents effects that use the word target from affecting the monster. Effects that choose at resolution without targeting can still affect the monster. Examples: Forbidden Droplet chooses at resolution and can bypass targeting protection."
  },
  {
    cards: ["forbidden droplet", "choose", "not target", "targeting protection", "bypass"],
    q: "Can Forbidden Droplet affect monsters with targeting protection?",
    a: "Yes. Forbidden Droplet says choose that many Effect Monsters not target. Since it chooses at resolution without targeting it completely bypasses targeting protection. Monsters that cannot be targeted by card effects can still be chosen by Forbidden Droplet."
  },
  {
    cards: ["accesscode talker", "destroy", "not target", "targeting protection", "bypass"],
    q: "Can Accesscode Talker's destruction effect target monsters with targeting protection?",
    a: "No and yes. Accesscode Talker says destroy 1 card your opponent controls without using the word target. Since it chooses at resolution without targeting it bypasses targeting protection and can destroy monsters that cannot be targeted."
  },
  {
    cards: ["dingirsu", "orcust", "send graveyard", "not target", "choose resolution"],
    q: "Does Dingirsu the Orcust of Evening Star's effect target?",
    a: "No. Dingirsu says send 1 card your opponent controls to the GY without the word target. The card is chosen at resolution. This bypasses targeting protection."
  },
  {
    cards: ["ice dragon prison", "target gy monster", "banish field", "not target field"],
    q: "Does Ice Dragon's Prison target the monsters it banishes from the field?",
    a: "No. Ice Dragon's Prison only targets the monster in the opponent GY to Special Summon it. The subsequent banishing of monsters from the field does not use the word target. Those monsters are chosen at resolution bypassing targeting protection on field monsters."
  },
  {
    cards: ["triple tactics talent", "take control", "not target", "choose resolution"],
    q: "Does Triple Tactics Talent's take control effect target?",
    a: "No. TTT does not use the word target in its text. The monster to be stolen is chosen when the effect resolves. This means it can steal monsters with targeting protection."
  },
  {
    cards: ["targeting", "declared activation", "target leaves field", "effect fails"],
    q: "A targeted monster leaves the field before the effect resolves. What happens?",
    a: "If a targeted monster is no longer in the correct location when the effect resolves the effect disappears. For most targeting effects if the target is no longer on the field the effect resolves without doing anything. The chain link is not negated just unable to resolve."
  },
  {
    cards: ["widow anchor", "sky striker", "target", "effect monster field"],
    q: "Does Sky Striker Mecha Widow Anchor target?",
    a: "Yes. Widow Anchor specifically says target 1 Effect Monster on the field. It must be declared at activation. If the targeted monster leaves the field before resolution the effect disappears."
  },
  {
    cards: ["targeting", "face-down", "cannot target", "set monster"],
    q: "Can a face-down monster be targeted by card effects?",
    a: "Generally no. Most targeting effects that say target a monster on your opponent field cannot target face-down monsters because their properties are unknown. However some cards specifically state they can target face-down cards. Always check if the card text allows face-down targeting."
  },
  {
    cards: ["knightmare unicorn", "target", "face-down", "any card field"],
    q: "Can Knightmare Unicorn target face-down cards?",
    a: "Yes. Knightmare Unicorn says target 1 card on the field. It can target any card on either field including face-down cards. The face-down card is shuffled into the Deck without being revealed."
  },
  {
    cards: ["kashtira fenrir", "target", "face-up", "banish face-down"],
    q: "Does Kashtira Fenrir's banish effect target?",
    a: "Yes. Fenrir's text reads target 1 face-up card your opponent controls then banishes it face-down. Since it says target the target is declared at activation and must be face-up."
  },
  {
    cards: ["bystial druisworm", "target", "special summoned monster", "send graveyard"],
    q: "Does Bystial Druisworm's effect to send a monster to the GY target?",
    a: "Yes. Bystial Druisworm says target 1 Special Summoned monster your opponent controls and sends it to the GY. Since it uses the word target it is declared at activation."
  },
  {
    cards: ["targeting", "two targets", "one leaves", "other still affected"],
    q: "An effect targets two cards. One target leaves the field before resolution. Does the other still get affected?",
    a: "It depends on the card text. If the effect says target 2 cards and both must be present at resolution and one leaves, the entire effect may fail. If the card says target up to 2 or the effect can apply to remaining targets it may still work on the remaining one. Check the specific card text."
  },
  {
    cards: ["relinquished anima", "enemy controller", "target leaves", "equip fails"],
    q: "Relinquished Anima targets an opponent monster to equip. Opponent chains Enemy Controller Tributing the monster. What happens?",
    a: "Anima's effect fails to equip because the targeted monster is no longer on the field at resolution. The effect resolves without doing anything. Anima does not equip any card."
  },
  {
    cards: ["targeting", "protection", "blue eyes", "spirit dragon", "cannot be targeted"],
    q: "Blue-Eyes Spirit Dragon cannot be targeted. Can Compulsory Evacuation Device target it?",
    a: "No. Blue-Eyes Spirit Dragon cannot be targeted by opponent card effects. Compulsory Evacuation Device targets 1 monster on the field. It cannot legally select Spirit Dragon as its target."
  },
  {
    cards: ["choosing", "resolution", "new information", "board state changes"],
    q: "For effects that choose at resolution can the player see the board state before choosing?",
    a: "Yes. Since choosing happens at resolution the player has full knowledge of the current board state when making their choice. This is an advantage over targeting because the player can account for any changes that happened during the chain before choosing."
  },
  {
    cards: ["ignister prominence", "target pendulum", "shuffle not target"],
    q: "Does Ignister Prominence's effect to shuffle a card into the Deck target?",
    a: "No. Ignister Prominence only targets the Pendulum Monster on the field to destroy it. The card shuffled into the Deck is chosen at resolution without targeting. This bypasses targeting protection for the shuffled card."
  },
  {
    cards: ["targeting", "graveyard", "target gy", "cannot target gy"],
    q: "Can a monster in the GY have targeting protection?",
    a: "Yes. Some cards have effects that prevent them from being targeted even in the GY. If a GY effect requires targeting a specific monster and that monster has targeting protection in the GY the targeting effect cannot select it."
  },
  {
    cards: ["targeting", "hand", "target from hand", "rarely targeted"],
    q: "Can cards in the hand be targeted?",
    a: "Rarely. Most targeting effects specify on the field or in the GY. Cards in the hand are private knowledge and generally cannot be targeted. Some specific card effects do interact with the opponent hand but typically without targeting."
  },
  {
    cards: ["number", "c39", "utopia ray", "targeting protection", "battle"],
    q: "Number C39 Utopia Ray has targeting protection. Can opponent use Compulsory Evacuation Device on it?",
    a: "No. Compulsory Evacuation Device targets 1 monster on the field. Since Utopia Ray cannot be targeted by opponent card effects it cannot be selected as the target."
  },
  {
    cards: ["choose", "target", "shrink", "half atk", "targets"],
    q: "Does Shrink target the monster whose ATK it halves?",
    a: "Yes. Shrink says target 1 face-up monster your opponent controls. It is a targeting effect declared at activation. Monsters with targeting protection cannot be selected as Shrink's target."
  },
  {
    cards: ["targeting", "activation", "must be legal", "cannot activate without valid target"],
    q: "Can a targeting effect be activated if there are no legal targets?",
    a: "No. A targeting effect cannot be activated if there are no legal targets available at the time of activation. The player must be able to declare a valid target when activating the card. If all potential targets have protection making them illegal the card cannot be activated."
  },
  {
    cards: ["missing the timing", "when you can", "optional", "last thing"],
    q: "What is missing the timing in Yu-Gi-Oh?",
    a: "Missing the timing applies to optional trigger effects that use the text When this card does X you can do Y. The trigger condition must be the very last thing to happen for the effect to activate. If anything else happens after the trigger condition the optional effect misses the timing and cannot activate."
  },
  {
    cards: ["missing the timing", "if", "when", "difference", "mandatory"],
    q: "What is the difference between IF and WHEN in trigger effects?",
    a: "IF triggers never miss timing. They activate whenever the condition is met regardless of what happened last. WHEN triggers with optional you can effects can miss timing if their trigger was not the last thing to happen. Mandatory WHEN effects (without you can) also never miss timing."
  },
  {
    cards: ["stratos", "elemental hero", "call of haunted", "chain link 2", "misses timing"],
    q: "Stratos is summoned by Call of the Haunted as Chain Link 2. Does Stratos search?",
    a: "No. Stratos has an optional When this card is Special Summoned you can search trigger. Call of the Haunted was CL1 and resolved after Stratos was summoned. Since something happened after the summon (CL1 resolving) Stratos misses the timing."
  },
  {
    cards: ["missing the timing", "chain link 1", "does not miss", "last thing"],
    q: "A monster with an optional WHEN trigger is summoned as Chain Link 1 only. Does it miss timing?",
    a: "No. If the summon was Chain Link 1 and nothing else happened after it the summon was the last thing to occur. The optional trigger effect can activate normally."
  },
  {
    cards: ["dandelion", "token", "sent graveyard", "if", "never misses"],
    q: "Dandelion is sent to the GY as Chain Link 2. Does its token effect trigger?",
    a: "Yes. Dandelion uses IF this card is sent to the GY. IF effects never miss timing. The token effect triggers regardless of whether it was the last thing to happen."
  },
  {
    cards: ["witch of the black forest", "sent graveyard", "search", "when optional", "misses timing"],
    q: "Witch of the Black Forest is sent to the GY as part of a chain. Does it search?",
    a: "It depends on whether her effect uses IF or WHEN. Modern Witch uses IF this card is sent to the GY so she never misses timing. However older cards using WHEN you can formulations could miss timing if not the last thing to happen."
  },
  {
    cards: ["missing the timing", "polymerization", "fusion material", "effect triggers"],
    q: "A monster used as Fusion Material for Polymerization has an optional WHEN sent to GY effect. Does it trigger?",
    a: "No. Polymerization is Chain Link 1. The materials are sent to the GY during resolution. Then Polymerization continues resolving and the Fusion Monster is summoned. The summon is the last thing to happen not the material being sent. The optional WHEN effect misses timing."
  },
  {
    cards: ["missing the timing", "advance summon", "tribute", "optional when", "misses"],
    q: "I Tribute Summon using a monster with an optional WHEN tributed effect. Does it trigger?",
    a: "No. When a monster is tributed for a Tribute Summon the tribute happens first then the Tribute Summon occurs. The Tribute Summon is the last thing to happen not the tribute. The optional WHEN tributed effect misses the timing."
  },
  {
    cards: ["missing the timing", "if sent graveyard", "fusion material", "never misses"],
    q: "A Fusion Material has an IF sent to the GY effect. Does it trigger after being used for Polymerization?",
    a: "Yes. IF effects never miss timing. Even though the material was sent to the GY during Polymerization resolution and the Fusion Summon happened after, the IF condition was met and the effect triggers."
  },
  {
    cards: ["optional trigger", "when destroyed", "battle", "misses", "end damage step"],
    q: "A monster with optional WHEN destroyed by battle you can effect is destroyed. Does it trigger?",
    a: "It depends on timing. If the monster is destroyed and the destruction is the last thing to happen the effect can trigger. In battle the destruction happens and then the End of Damage Step sub-step occurs. If the destruction was truly last the optional effect can activate."
  },
  {
    cards: ["missing the timing", "cost", "tribute activate", "last thing", "effect"],
    q: "I tribute a monster with optional WHEN tributed as cost for a card effect. Does its trigger activate?",
    a: "No. When tributed as cost the tribute happens at activation which is before the chain. The card then goes on the chain and effects resolve. Something happened after the tribute (the chain resolution) so the optional WHEN trigger misses the timing."
  },
  {
    cards: ["if this card is destroyed", "never misses", "mandatory", "always triggers"],
    q: "A monster says IF this card is destroyed activate this effect. Can it miss timing?",
    a: "No. IF effects cannot miss timing. Whenever the condition is met the effect triggers regardless of what happened last. This applies to both mandatory and optional IF effects."
  },
  {
    cards: ["missing the timing", "special summon", "when", "optional", "not last"],
    q: "A monster has optional WHEN Special Summoned you can effect. It is Special Summoned as part of a chain. Does it trigger?",
    a: "It depends on whether the summon was the last thing to happen. If summoned as CL2 and CL1 still resolves after the summon then something happened after making it miss timing. If summoned as CL1 and nothing resolves after the summon does not miss timing."
  },
  {
    cards: ["torrential tribute", "missing timing", "trigger", "when summoned"],
    q: "Torrential Tribute activates when a monster is summoned. Can it miss timing?",
    a: "No. Torrential Tribute is a mandatory Trap that activates when a monster is summoned. Mandatory effects cannot miss timing. Torrential Tribute always activates when its trigger condition is met."
  },
  {
    cards: ["missing the timing", "open game state", "new chain", "after chain"],
    q: "An optional trigger effect misses timing. Can it activate later in the turn?",
    a: "No. Missing the timing means the activation window for that specific trigger has permanently passed. The effect cannot activate later in the turn even if the game state returns to conditions that would normally allow it."
  },
  {
    cards: ["missing the timing", "xyz summon", "material sent", "overlay", "does not trigger"],
    q: "A monster used as Xyz Material has an optional WHEN sent to GY effect. Xyz Summon is performed. Does it trigger?",
    a: "No. Becoming Xyz Material is not being sent to the GY. Cards that become Xyz Materials are not in the GY at all - they are attached to the Xyz Monster. The trigger condition of being sent to the GY is never met so it cannot activate at all."
  },
  {
    cards: ["missing the timing", "flip effect", "when flipped", "optional", "ryko"],
    q: "Can a FLIP effect with optional WHEN flipped you can miss timing?",
    a: "Yes potentially. If a FLIP effect says When this card is flipped face-up you can it can miss timing if something happens after the flip before the effect window opens. Most FLIP effects are mandatory however so they cannot miss timing."
  },
  {
    cards: ["missing the timing", "mandatory", "can never miss", "must activate"],
    q: "Can a mandatory trigger effect ever miss the timing?",
    a: "No. Mandatory trigger effects (those without you can) never miss timing. They must activate whenever their condition is met regardless of what was the last thing to happen. Only optional trigger effects with you can text can miss timing."
  },
  {
    cards: ["torn scales", "phantom knights", "discarded cost", "if", "triggers"],
    q: "Phantom Knights of Torn Scales is discarded as cost for Twin Twisters. Does it trigger?",
    a: "Yes. Torn Scales uses IF a card is discarded. IF effects never miss timing. The effect triggers in a new chain after Twin Twisters resolves regardless of what happened last."
  },
  {
    cards: ["dante", "beatrice", "detach material", "if sent graveyard", "triggers"],
    q: "Dante is detached as Xyz Material to activate Beatrice's effect. Does Dante trigger its GY effect?",
    a: "Yes. Dante uses IF this card is sent to the GY. Detaching as Xyz Material sends it to the GY fulfilling the IF condition. IF effects never miss timing so Dante triggers in a new chain."
  },
  {
    cards: ["missing the timing", "when summoned", "cl2", "resolving chain", "after"],
    q: "Why do optional WHEN summoned effects miss timing when summoned as Chain Link 2?",
    a: "When a monster is summoned as CL2 the chain continues resolving. CL1 then resolves after the summon. This means something happened after the summon was the last thing. Since the summon was not the very last thing the optional WHEN summon effect misses timing."
  },
  {
    cards: ["unaffected", "card effects", "what bypasses", "game mechanics"],
    q: "What can bypass unaffected by card effects protection?",
    a: "Unaffected by card effects only protects against card effects. Game mechanics, costs, and unclassified conditions bypass it. Examples: Kaiju tributing as summoning condition (cost), Underworld Goddess using it as Link Material (unclassified condition), Evenly Matched forcing the player to banish (player action), and battle damage (game mechanic)."
  },
  {
    cards: ["unaffected", "kaiju", "tribute", "cost", "special summon"],
    q: "Can a Kaiju be Special Summoned by tributing an unaffected monster?",
    a: "Yes. Kaijus tribute the opponent monster as an inherent summoning condition (a cost), not a card effect. Unaffected monsters can be tributed as costs. The same applies to Lava Golem and other monsters that tribute as a summoning condition."
  },
  {
    cards: ["unaffected", "evenly matched", "banish face-down", "player action"],
    q: "Can Evenly Matched banish an unaffected monster face-down?",
    a: "Yes. Evenly Matched forces the player to perform the banishing action. Since it is the player performing the action and not a card effect directly affecting the monster, unaffected monsters can be legally banished by Evenly Matched."
  },
  {
    cards: ["unaffected", "underworld goddess", "link material", "condition"],
    q: "Can Underworld Goddess use an unaffected opponent monster as Link Material?",
    a: "Yes. Underworld Goddess's ability to use 1 opponent monster as Link Material is an unclassified condition modifying the Link Summon mechanic, not an activated or continuous card effect. It completely bypasses unaffected by card effects protection."
  },
  {
    cards: ["unaffected", "share the pain", "tribute", "player forced"],
    q: "Can Share the Pain force a player to tribute an unaffected monster?",
    a: "Yes. Share the Pain affects the player forcing them to perform the action of tributing. Player A is fully capable of tributing their own unaffected monster. The effect targets the player not the monster."
  },
  {
    cards: ["ultimate falcon", "skill drain", "already active", "negated immediately"],
    q: "Skill Drain is already active when Ultimate Falcon is Xyz Summoned. Is Falcon negated?",
    a: "Yes. Skill Drain was applying before Falcon arrived. Falcon's unaffected continuous effect is instantly negated the moment it hits the field. If Falcon was summoned first then Skill Drain activated, Falcon would be unaffected."
  },
  {
    cards: ["ultimate falcon", "skill drain", "summoned first", "then skill drain"],
    q: "Ultimate Falcon is already on the field. Opponent activates Skill Drain. Is Falcon affected?",
    a: "No. Falcon was already on the field and its unaffected continuous effect was already applying when Skill Drain activated. Since Falcon is unaffected by Trap effects Skill Drain cannot negate it."
  },
  {
    cards: ["unaffected", "battle damage", "still takes", "game mechanic"],
    q: "Does an unaffected monster still take battle damage?",
    a: "Yes. Battle damage is a game mechanic not a card effect. Unaffected monsters still battle normally, take damage from battle, and can be destroyed by battle. Unaffected by card effects does not protect against battle."
  },
  {
    cards: ["geomathmech final sigma", "extra monster zone", "nibiru", "unaffected", "tribute"],
    q: "Nibiru activates after 5 summons. Player controls Final Sigma in Extra Monster Zone. Is Sigma tributed?",
    a: "No. Nibiru tributes monsters as part of its effect not as a cost. Final Sigma is unaffected by card effects and remains on the field. Only monsters not protected by unaffected are tributed."
  },
  {
    cards: ["unaffected", "trap", "monster effect", "spell", "all effects"],
    q: "What does unaffected by all card effects protect against?",
    a: "Unaffected by all card effects protects against Spell effects, Trap effects, and monster effects. The monster cannot be targeted by effects, its ATK and DEF cannot be changed by effects, and it cannot be destroyed by card effects. Only game mechanics, costs, and battle can interact with it."
  },
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
  }
],
pkm: [
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
  }
],
mtg: [
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
]
};

// Card ruling search function - requires ALL key cards to match
function findCardRuling(question, game) {
  var q = question.toLowerCase();
  var games = game === "all" ? Object.keys(CARD_RULINGS) : [game];
  var best = null;
  var bestScore = 0;
  games.forEach(function(g) {
    (CARD_RULINGS[g] || []).forEach(function(ruling) {
      // Count how many of the ruling's key cards appear in the question
      var matched = ruling.cards.filter(function(c) {
        return q.indexOf(c.toLowerCase()) >= 0;
      }).length;
      // Require at least half the cards to match AND minimum 2 matches
      var threshold = Math.max(2, Math.ceil(ruling.cards.length * 0.5));
      if (matched >= threshold) {
        var score = matched * 20;
        if (score > bestScore) { bestScore = score; best = ruling; }
      }
    });
  });
  // Only return if strong match - prevents false positives
  return bestScore >= 40 ? best : null;
}

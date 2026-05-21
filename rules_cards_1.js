var CARD_RULINGS_1 = {ygo: [
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
  }
]}};

// Card ruling search function
function findCardRuling(question, game) {
  var q = question.toLowerCase();
  // Merge all chunks
  var allRulings = [];
  for (var ci = 1; ci <= 3; ci++) {
    var cr = window['CARD_RULINGS_' + ci];
    if (cr && cr.ygo) allRulings = allRulings.concat(cr.ygo);
  }
  var best = null;
  var bestScore = 0;
  allRulings.forEach(function(ruling) {
    var matched = ruling.cards.filter(function(c) {
      return q.indexOf(c.toLowerCase()) >= 0;
    }).length;
    var threshold = Math.max(2, Math.ceil(ruling.cards.length * 0.5));
    if (matched >= threshold) {
      var score = matched * 20;
      if (score > bestScore) { bestScore = score; best = ruling; }
    }
  });
  return bestScore >= 40 ? best : null;
}

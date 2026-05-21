var CARD_RULINGS_2 = {ygo: [
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
  }
]};

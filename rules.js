var RULES={
ygo:[

{t:"Starting LP",s:"8000 each. Reach 0 = lose.",e:"Both players start with 8000 LP. When a player reaches 0 they lose immediately even mid-turn. Effect damage and battle damage both reduce LP."},
{t:"First Turn Rule",s:"First player skips Draw Phase and cannot enter Battle Phase.",e:"The player going first does NOT draw on their first turn and CANNOT enter the Battle Phase. This is absolute with no exceptions even from card effects."},
{t:"Normal Summon",s:"One per turn. Level 1-4 free. 5-6 needs 1 tribute. 7+ needs 2.",e:"Only 1 Normal Summon or Set per turn unless a card specifically grants more. Level 5-6 requires 1 Tribute. Level 7+ requires 2 Tributes. Tribute Summon uses your Normal Summon. Setting a monster also uses your Normal Summon."},
{t:"Hand Limit",s:"Max 6 cards at End Phase. No limit during turn.",e:"During the End Phase discard down to 6 cards. You choose which to discard. No hand size limit applies during the turn itself."},
{t:"Deck Requirements",s:"40-60 main deck. 0-15 extra. 0-15 side. Max 3 copies.",e:"Main Deck 40-60 cards. Extra Deck 0-15 Fusion/Synchro/Xyz/Link monsters. Side Deck 0-15 cards. Maximum 3 copies of any card with the same name across Main plus Side combined."},
{t:"Turn Structure",s:"Draw, Standby, Main 1, Battle, Main 2, End.",e:"Draw Phase: draw 1 card mandatory. Standby Phase: standby effects activate. Main Phase 1: summon and play cards. Battle Phase: optional, cannot be conducted on first turn by first player. Main Phase 2: optional, same as Main 1. End Phase: discard to hand limit."},

{t:"Spell Speed 1",s:"Normal Spells, Ignition Effects, Trigger Effects. Can only start a chain.",e:"Speed 1 effects can ONLY start a chain. They cannot be activated in response to anything. Normal Spells, Ritual Spells, Continuous Spells, Equip Spells, Field Spells, Ignition monster effects, and Trigger monster effects are all Speed 1. You must wait for an open game state to use them."},
{t:"Spell Speed 2",s:"Quick-Play Spells, Normal Traps, Quick Effects. Can chain to Speed 1 or 2.",e:"Speed 2 can be activated in response to Speed 1 or Speed 2 effects. Quick-Play Spells, Normal Traps, Continuous Traps, and monster Quick Effects are Speed 2. These can be activated during the opponent turn."},
{t:"Spell Speed 3",s:"Counter Traps only. ONLY other Counter Traps can respond.",e:"Counter Traps are the ONLY Speed 3 cards. Only other Counter Traps can chain to them. You cannot chain a Normal Trap or Quick-Play Spell to a Counter Trap. This is the only way to truly negate most spell and trap activations."},

{t:"Chain Resolution LIFO",s:"Last In First Out. Most recent effect resolves first.",e:"Chains always resolve in reverse order. Chain Link 2 resolves before Chain Link 1. Chain Link 3 before Chain Link 2. The last card added to a chain ALWAYS resolves first. This is the fundamental rule of chain resolution."},
{t:"MST vs Monster Reborn",s:"MST destroys but does NOT negate. Monster Reborn still resolves.",e:"If you activate Monster Reborn and opponent chains Mystical Space Typhoon to destroy it, Monster Reborn STILL resolves and the monster IS summoned. MST only destroys - it does NOT negate. Normal Spells do not need to remain on the field to resolve their effect. The activation placed the effect on the chain and it resolves regardless. To stop Monster Reborn you need a Counter Trap like Solemn Judgment or Solemn Strike."},
{t:"Destroying vs Negating on Chain",s:"Destroying a spell on chain does NOT stop its effect.",e:"Critical ruling: destroying a card and negating it are completely different. MST, Mystical Space Typhoon, Twin Twisters, and similar cards destroy but do NOT negate. A Normal Spell that is destroyed after activation still resolves its effect because the activation placed the effect on the chain. Only cards specifically stating negate the activation or negate the effect can stop an already-activated Normal Spell."},
{t:"Normal Spell Field Presence",s:"Normal Spells resolve even if destroyed after activation.",e:"Normal Spells do not need to remain on the field to resolve. Once a Normal Spell is activated and placed on the chain its effect will resolve even if the card is subsequently destroyed, banished, or removed. This differs from Continuous Spells and Equip Spells which DO require field presence."},
{t:"Continuous Spell Field Requirement",s:"Continuous Spells need to remain on field. If destroyed before resolving the effect disappears.",e:"Unlike Normal Spells, Continuous Spells and Equip Spells require the card to remain face-up on the field for their effect to apply. If a Continuous Spell is destroyed before its activation resolves it will not function. This is why Twin Twisters destroying a Continuous Spell does stop it."},
{t:"Chaining to Opponent Activation",s:"Chain Speed 2 or higher cards to any activation.",e:"When opponent activates a Spell or Trap you can chain any card or effect that is Spell Speed 2 or higher. Chaining does not automatically prevent the original card from resolving unless you specifically negate it."},
{t:"Open Game State",s:"When no chain is building both players can activate Speed 1 effects.",e:"An open game state occurs when the chain has fully resolved and both players have passed priority. In an open game state the turn player can activate Speed 1 effects. Outside an open game state only Speed 2 or higher effects can be activated."},
{t:"Priority",s:"Turn player activates first. Both players pass to advance phases.",e:"The turn player always has priority to activate effects first. Both players must pass priority consecutively for the game to advance to the next phase. After each effect activation both players can respond before the next resolution."},

{t:"Damage Step Restrictions",s:"Most cards CANNOT activate in Damage Step.",e:"During the Damage Step ONLY these may activate: Counter Traps, effects that directly modify ATK or DEF values, mandatory trigger effects, and cards specifically stating they can activate in the Damage Step. Cards that CANNOT activate include Torrential Tribute, Mirror Force, Book of Moon, Book of Eclipse, Compulsory Evacuation Device, and most hand traps."},
{t:"Damage Step Sub-Steps",s:"Start, Before Calc, Damage Calculation, After Calc, End.",e:"1. Start of Damage Step: face-down attacked monster flips face-up. 2. Before Damage Calculation: ATK/DEF modifiers activate here. 3. Damage Calculation: compare ATK/DEF, apply damage. 4. After Damage Calculation: when battles and destroys effects trigger. 5. End of Damage Step: destroyed monsters go to GY, FLIP effects activate."},
{t:"ATK/DEF Modifiers in Damage Step",s:"Cards that change ATK or DEF CAN activate in Damage Step.",e:"Cards and effects that directly change ATK or DEF values can be activated in the Damage Step. Examples that CAN activate: Rush Recklessly, Honest, Shrink, Forbidden Chalice, Mage Power. These specifically modify ATK/DEF so they are permitted."},
{t:"Hand Traps in Damage Step",s:"Most hand traps CANNOT activate in Damage Step.",e:"Effect Veiler, Ash Blossom and Joyous Spring, Nibiru the Primal Being, Infinite Impermanence, and most other hand traps CANNOT be activated during the Damage Step because they do not directly modify ATK/DEF. They are Speed 1 or their effect type is not permitted in the Damage Step."},
{t:"Cyber Dragon Sieger in Damage Step",s:"Sieger effect activates in Damage Step if it attacks a Machine.",e:"Cyber Dragon Sieger has an effect that can activate during the Damage Step because it directly modifies ATK values as part of its effect. Its effect to double ATK and gain ATK equal to opponent monster ATK is an ATK modification effect permitted in the Damage Step. Opponent cannot activate non-counter effects in response."},
{t:"Honest in Damage Step",s:"Honest can be activated in Damage Step to boost LIGHT monster ATK.",e:"Honest is a hand trap that can be activated during the Damage Step specifically because it modifies ATK. When a LIGHT monster attacks or is attacked you can return Honest from hand to give that monster ATK equal to the opponent monster ATK. This is one of the few hand traps permitted in the Damage Step."},

{t:"Negate Activation vs Negate Effect",s:"Negate activation stops card entirely. Negate effect nullifies but card stays.",e:"Negate the activation: card stopped completely and destroyed as if never played. Examples: Solemn Judgment, Solemn Strike, Dark Bribe. Negate the effect: card stays on field or resolves normally but effect is nullified. Examples: Effect Veiler, Infinite Impermanence, Skill Drain. Understanding this difference is critical for judge rulings."},
{t:"Solemn Judgment",s:"Counter Trap. Negate the activation of any monster summon, spell, or trap.",e:"Solemn Judgment negates the activation of any monster summon, spell card, or trap card and destroys it. Pay half your LP as cost. Since it negates activation, the card is treated as if it was never activated. A negated summon means the monster is sent to GY and was never properly summoned."},
{t:"Solemn Strike",s:"Counter Trap. Negate the activation of any effect that includes a monster summon.",e:"Solemn Strike negates and destroys any effect that includes a monster summon, or any monster effect. Pay 1500 LP. More flexible than Solemn Warning as it targets monster effects too."},
{t:"Ash Blossom and Joyous Spring",s:"Hand trap. Negate effects that search, draw from deck, or special summon from deck.",e:"Ash Blossom is a Speed 2 Quick Effect hand trap. Discard it to negate any effect that searches the deck, draws from deck, or special summons from deck. Cannot be used in the Damage Step. Can be chained to Speed 1 effects. One of the most commonly used hand traps in competitive play."},
{t:"Effect Veiler",s:"Hand trap. Negate a face-up monster effect during opponent main phase.",e:"Discard Effect Veiler during opponent Main Phase to negate the effects of one opponent face-up monster until end of turn. This is a Speed 1 effect so it can only be activated in an open game state during the Main Phase, not during the Battle Phase or in response to another effect activation."},
{t:"Infinite Impermanence",s:"Trap. Negate a monster effect. If activated from hand negates row.",e:"Infinite Impermanence negates the effects of one face-up monster the opponent controls. If activated from hand while you control no cards it also negates all Spell and Trap effects in the same column for the rest of the turn. This is a powerful disruption tool."},
{t:"Skill Drain",s:"Continuous Trap. Negates all face-up monster effects on field.",e:"While Skill Drain is face-up on the field, the effects of all face-up monsters on the field are negated. This is a continuous negation effect that affects both players. Monsters with effects that apply while in the GY or hand are not affected."},

{t:"Targeting Rules",s:"Effects using target must declare targets at activation.",e:"A targeting effect uses the word target in its text. Targets must be declared when the effect is activated. If a target becomes illegal before the effect resolves the effect has no result for that target. If ALL targets become invalid before resolution the effect resolves without effect."},
{t:"Cannot Be Targeted",s:"Targeting protection does not stop non-targeting effects.",e:"Monsters that cannot be targeted by card effects are still vulnerable to non-targeting effects. Destroy all monsters, each monster you control gets minus 2000 ATK, and similar blanket effects are not targeting effects. Only effects specifically using the word target are stopped by targeting protection."},
{t:"Destruction Protection",s:"Cannot be destroyed does not prevent removal by other means.",e:"Monsters that cannot be destroyed by card effects can still be removed by: banishing, returning to hand or deck, being used as Fusion/Synchro/Xyz/Link material, being tributed, being flipped face-down then destroyed. Only effects that specifically destroy are prevented."},

{t:"Costs vs Effects Semicolon Rule",s:"Text before semicolon is cost. Paid at activation. Never refunded.",e:"The text before the semicolon is the COST and is paid immediately when the effect is activated before the chain fully builds. Discard 1 card: draw 2 cards means the discard is paid at activation. If the effect is later negated the cost is NOT returned. LP paid, cards discarded, and monsters tributed as costs are permanently spent."},
{t:"Activation Costs Are Mandatory",s:"If you activate an effect you must pay its cost.",e:"If you choose to activate an effect you must be able to pay its full cost and must pay it. You cannot activate an effect if you cannot pay the cost. Once activated the cost cannot be reduced or changed."},

{t:"Proper Summon Requirement",s:"Extra Deck monsters must be properly summoned before revival.",e:"Extra Deck monsters including Fusion, Synchro, Xyz, and Link monsters that were never properly summoned cannot be revived from the GY or banished zone by effects like Monster Reborn. If a Synchro Monster was sent from the Extra Deck to the GY without being properly Synchro Summoned it cannot be targeted by Monster Reborn."},
{t:"Synchro Summon Formula",s:"Tuner Level plus Non-Tuner Levels must equal Synchro Level exactly.",e:"Send 1 Tuner monster plus 1 or more non-Tuner monsters from your field to the GY. Their combined Levels must equal EXACTLY the Synchro Monster Level. Not more, not less. Example: Level 3 Tuner plus Level 5 Non-Tuner equals Level 8 Synchro."},
{t:"Xyz Summon Materials",s:"2 or more same-Level monsters. Materials are not on field.",e:"Overlay 2 or more monsters of the same Level. They become Xyz Materials underneath the Xyz Monster. Materials are NOT on the field. They cannot be targeted by most card effects. When the Xyz Monster leaves the field all remaining materials go to the GY. Detaching a material as cost sends it to the GY."},
{t:"Link Summon Rules",s:"Pay materials as listed. Link Rating equals number of materials used.",e:"Send the required number and type of monsters to the GY as Link Materials. Link Monsters have NO DEF value and cannot be in Defense Position. Link Rating equals the number of materials required. A Link-2 used as material counts as 2 materials toward another Link Summon."},
{t:"Link Arrows and Extra Deck Zones",s:"Extra Deck monsters need Extra Monster Zone or zone pointed to by Link Arrow.",e:"After the 2017 Master Rule, Fusion, Synchro, and Xyz monsters from the Extra Deck can only be summoned to the Extra Monster Zone or a Main Monster Zone that a Link Monster Arrow points to. Without a Link Monster on field you are limited to 1 Extra Deck monster at a time occupying the Extra Monster Zone."},
{t:"Pendulum Scale Summon",s:"Summon Levels strictly BETWEEN the two Scale values.",e:"Place Pendulum Monsters in leftmost and rightmost Spell/Trap Zones as Pendulum Scales. You can Pendulum Summon any number of monsters from hand and face-up Extra Deck whose Levels fall strictly BETWEEN the two Scale numbers. Scale 1 and Scale 8 allows Level 2, 3, 4, 5, 6, 7. When Pendulum Monsters are destroyed on the field they go face-up to the Extra Deck instead of the GY."},
{t:"Fusion Summon Materials",s:"Send listed materials from hand and field to GY. Use Polymerization or Fusion effect.",e:"Activate Polymerization or a card with a Fusion effect. Send the Fusion Materials listed on the Fusion Monster from hand and/or field to the GY. Material requirements must be met exactly. Some cards like Miracle Fusion allow using GY materials. Contact Fusion like Gladiator Beasts requires no spell."},
{t:"Ritual Summon Process",s:"Activate Ritual Spell. Tribute Levels equal to or exceeding Ritual Monster Level.",e:"Activate the appropriate Ritual Spell card. Tribute monsters from hand or field with total Levels equal to or exceeding the Ritual Monster Level. Over-tributing is allowed. The Ritual Monster must be in your hand. You can tribute from both hand and field simultaneously."},
{t:"Pendulum Monsters in GY",s:"Pendulum Monsters go face-up to Extra Deck when destroyed on field.",e:"When a Pendulum Monster is destroyed while face-up on the field, instead of going to the GY it goes face-up to the Extra Deck. This allows it to be Pendulum Summoned again later. However if a Pendulum Monster is sent to the GY as a cost or by a non-destruction effect it does go to the actual GY."},

{t:"SEGOC",s:"Turn Player places effects first then Non-Turn Player. Resolves LIFO.",e:"SEGOC stands for Simultaneous Effects Go On Chain. When multiple trigger effects activate from the same event at the same time, the Turn Player chooses the order to place their effects on the chain first, then the Non-Turn Player places their effects. The chain then resolves LIFO. Mandatory effects must be placed. Optional effects can be declined."},
{t:"If vs When Timing",s:"When-you-can CAN miss timing. If-you-can CANNOT miss timing.",e:"Optional When trigger effects can miss their timing if their trigger condition was not the last thing to resolve in a chain or sequence of events. Optional If trigger effects cannot miss timing and will always activate when their condition is met regardless of what else happened. Mandatory effects never miss timing. Example: When this card is sent to GY you can draw 1 card - this can miss timing if the send was not the last thing to happen."},
{t:"Missing the Timing Example",s:"Send to GY as part of cost can cause optional When effects to miss timing.",e:"If a card says send 1 monster to GY then draw 1 card, and the sent monster has a When optional trigger, that trigger MISSES TIMING because drawing was the last thing to happen, not the sending. If the monster instead says If this card is sent to GY you can draw, the If trigger CANNOT miss and will activate."},

{t:"Destruction vs Other Removal",s:"Tributed, used as material, or sent to GY as cost is NOT destruction.",e:"A monster is destroyed only by battle or by an effect specifically using the word destroy. Being tributed, being used as Synchro/Xyz/Link material, being sent to the GY as the cost of an effect, or being returned to hand/deck is NOT destruction. These methods do not trigger when destroyed effects."},
{t:"Battle Destruction",s:"Monster with lower ATK attacking higher ATK monster is destroyed.",e:"When a monster in ATK position attacks a monster with higher ATK, the attacking monster is destroyed by battle and its controller takes battle damage equal to the ATK difference. The defending monster is not destroyed. When two monsters with equal ATK battle both are destroyed."},
{t:"Battle Damage Formula",s:"Attacker ATK minus Defender ATK equals battle damage to losing player.",e:"ATK vs ATK: the player whose monster has lower ATK takes damage equal to the difference. Equal ATK: both monsters destroyed, no damage. ATK vs DEF: if attacker ATK exceeds defender DEF, defending monster destroyed, NO damage unless piercing. Piercing damage formula: attacker ATK minus defender DEF equals damage dealt."},
{t:"Direct Attack",s:"If opponent has no monsters you can attack directly for full ATK damage.",e:"When your opponent controls no monsters you can attack directly. Your monster deals its full ATK as battle damage to the opponent. Some monster effects allow direct attacks even when opponent has monsters - in that case the attacking monster often has reduced ATK for damage calculation purposes as stated on the card."},

{t:"Continuous Effects Always On",s:"Continuous effects are always active while face-up. No activation needed.",e:"Continuous effects apply automatically while the card is face-up on the field. They do not use the chain and cannot be responded to as an activation. If the card leaves the field the effect ends immediately even mid-chain resolution."},
{t:"Replacement Effects",s:"Instead effects replace how an event happens. Not placed on chain.",e:"Replacement effects use the word instead and modify how an event happens before it occurs. They are not placed on the chain. When multiple replacement effects apply to the same event the controller of the card being affected chooses the order to apply them."},
{t:"Win Conditions",s:"LP to 0, deck out, Exodia, Destiny Board, other card-specific wins.",e:"Primary: LP reaches 0. Deck out: cannot draw on mandatory Draw Phase. Exodia: all 5 Exodia pieces in hand simultaneously. Destiny Board: spell out F-I-N-A-L over 5 Standby Phases. Ghostrick Angel: attach 10 Xyz Materials. Jackpot 7: banish all 3 copies from GY. Final Countdown: survive 20 turns."},

{t:"Gemini Monsters",s:"Treated as Normal on field/GY. Second Normal Summon grants effects.",e:"Gemini Monsters are treated as Normal Monsters while on the field or in the GY. Using your Normal Summon on a face-up Gemini Monster already on the field (Gemini Summon) grants it its effects and makes it an Effect Monster. If it leaves the field it reverts to Normal Monster status."},
{t:"Spirit Monsters",s:"Cannot be Special Summoned normally. Return to hand during End Phase.",e:"Spirit Monsters cannot be Special Summoned by normal means. During the End Phase of the turn they were Normal or Flip Summoned they return to the owner hand. This return is mandatory not optional."},
{t:"FLIP Effects",s:"Activate when flipped face-up by attack, Flip Summon, or card effect.",e:"FLIP effects are Speed 1 trigger effects that activate when the monster is flipped face-up. If attacked and destroyed before being flipped, FLIP does not activate. If flipped face-up by attack, FLIP activates at End of Damage Step. If flipped by card effect, FLIP activates at next available window."},
{t:"Toon Monsters",s:"Require Toon World. Cannot attack turn summoned. Can attack directly if no opposing Toons.",e:"Most Toon Monsters require Toon World on the field to be summoned or attack. Cannot attack on the turn they are summoned. May attack opponent directly if opponent controls no Toon Monsters. If opponent controls a Toon Monster, must attack it instead."},

{t:"Forbidden and Limited List",s:"Forbidden = 0 copies. Limited = 1 copy. Semi-Limited = 2 copies.",e:"Konami updates the F&L list regularly. Forbidden cards: 0 copies allowed. Limited: 1 copy across Main Deck plus Side Deck combined. Semi-Limited: 2 copies across Main plus Side. Unlimited (not on list): 3 copies maximum. Always verify current list before tournament play."},

{t:"Trap Card Set Rule",s:"Traps must be Set first. Cannot activate same turn they were Set.",e:"All Trap cards must be Set face-down on the field before they can be activated. A Trap Set this turn cannot be activated until the opponent next turn at the earliest. This is called the 1-turn set rule. Quick-Play Spells Set on your own turn also cannot be activated until opponent turn or your next turn."},

{t:"Nibiru the Primal Being",s:"Can be activated after opponent 5th summon. Tributes all monsters.",e:"During the Main Phase after opponent Special Summons their 5th or more monster, you can Special Summon Nibiru from hand by tributing all monsters on the field. Cannot be used in the Damage Step. This is one of the strongest hand traps for stopping combo decks."},
{t:"Called by the Grave",s:"Banish monster from GY to negate effects of same-name monsters.",e:"Banish 1 monster from opponent GY and until end of turn negate the effects of all monsters with that name the opponent controls and prevents them from activating. Powerful against decks that rely on GY effects or hand traps."},
{t:"Ghost Ogre and Snow Rabbit",s:"Hand trap. Destroy a monster or spell/trap when its effect activates.",e:"When a monster on the field or spell/trap activates its effect, discard Ghost Ogre to destroy it. This is a Speed 2 Quick Effect. Cannot destroy during the Damage Step. Targets cards that have already activated their effects."}
],
pkm:[
{t:"Win Conditions",s:"Take all Prizes, opponent has no Pokemon, or deck out.",e:"Three ways to win: Take all 6 Prize Cards by knocking out opponent Pokemon. Your opponent has no Pokemon in play when their Active is knocked out and they have no Bench. Your opponent cannot draw a card at the start of their turn."},
{t:"Prize Card Counts",s:"1 Prize normally. 2 for EX/GX/V/VSTAR/ex. 3 for VMAX/Tag Team.",e:"Standard Pokemon equal 1 Prize. Pokemon-EX (all eras), Pokemon-GX, Pokemon V, Pokemon VSTAR, Pokemon ex (modern Scarlet/Violet era) all equal 2 Prizes. Pokemon VMAX and Tag Team Pokemon-GX equal 3 Prizes. Radiant Pokemon equal 1 Prize despite high power level."},
{t:"First Player Cannot Attack",s:"First player skips attack step on turn 1.",e:"The player going first cannot attack on their very first turn. They may play cards, attach energy, bench Basic Pokemon, evolve Pokemon that were already on field, use Abilities, and retreat. They simply cannot attack or declare an attack."},
{t:"Turn Order",s:"Draw, then play cards and energy freely, then attack to end turn.",e:"1. Draw 1 card mandatory - empty deck means you lose. 2. In any order: bench Basic Pokemon from hand, evolve Pokemon meeting requirements, attach 1 Energy from hand to any Pokemon, play Item Trainer cards (unlimited), play 1 Supporter Trainer card, play 1 Stadium card, use Pokemon Abilities, retreat Active Pokemon once. 3. Attack with Active Pokemon which immediately ends your turn."},
{t:"Energy Attachment",s:"Attach exactly 1 Energy card from hand per turn. Free action.",e:"Once per turn you may attach exactly 1 Energy card from your hand to any of your Pokemon (Active or Benched). This is a free action requiring no other cost. You may skip your Energy attachment. Additional Energy attachments during the same turn come only from specific card effects like Welder or Max Elixir."},
{t:"Trainer Card Limits",s:"Items unlimited per turn. Supporters 1 per turn. Stadiums 1 per turn.",e:"Item cards: play any number per turn from your hand. Supporter cards: exactly 1 per turn regardless of how many are in your hand. Stadium cards: 1 per turn, and you cannot play a Stadium with the same name as the one already in the Stadium Zone. Pokemon Tool cards: 1 per Pokemon at a time."},
{t:"Evolution Requirements",s:"Cannot evolve Pokemon placed this turn. Once per Pokemon per turn.",e:"A Basic Pokemon placed on the Bench this turn cannot be evolved until your next turn. You can only evolve each individual Pokemon once per turn. Must evolve to the immediately next stage only (Basic to Stage 1, Stage 1 to Stage 2). Rare Candy allows Basic directly to Stage 2 as long as the Basic was not placed this turn."},
{t:"Damage Calculation Order",s:"Base, modifiers, times 2 Weakness, minus 30 Resistance.",e:"Step 1: Base damage from attack text. Step 2: Add or subtract modifiers such as Choice Belt plus 30, Professor's Research boosts, damage reduction effects. Step 3: Apply Weakness - multiply by 2 in current Scarlet/Violet format. Step 4: Apply Resistance - subtract 30. CRITICAL RULE: Bench damage is NEVER affected by Weakness or Resistance regardless of type matchup."},
{t:"Weakness Current Format",s:"Times 2 damage from listed type. Applied before Resistance.",e:"In the current Scarlet and Violet format, Weakness doubles the total modified damage before Resistance is applied. Example: 100 base damage with Choice Belt becomes 130, then Weakness makes it 260, then Resistance subtracts 30 for 230 final. Bench damage never receives Weakness multiplication."},
{t:"Resistance Current Format",s:"Minus 30 damage from listed type. Applied after Weakness.",e:"Resistance subtracts 30 from the final damage calculation after Weakness has been applied. Minimum damage after Resistance is generally 10. Older formats used minus 20 instead. Bench damage never receives Resistance reduction."},
{t:"Bench Damage Rules",s:"Bench damage NEVER gets Weakness or Resistance. No exceptions.",e:"When an attack deals damage to Benched Pokemon that damage is never modified by Weakness or Resistance. A Fire attack dealing 20 to each Bench does exactly 20 to a Grass type Benched Pokemon despite the Weakness. This applies to all spread damage effects."},
{t:"Poisoned Status",s:"1 damage counter placed between each player turn. Not affected by Weakness.",e:"A Poisoned Pokemon receives 1 damage counter (10 damage) between each player turn during the between turns phase. This damage is not an attack and is therefore not modified by Weakness or Resistance. Poison is cured by retreating, evolving, switching via Switch card, or specific healing effects. Badly Poisoned places 2 damage counters."},
{t:"Burned Status",s:"Coin flip between turns. Heads = cured. Tails = 2 damage counters.",e:"Between each player turn the Burned Pokemon controller flips a coin. Heads: Burn marker removed and Burn is cured. Tails: 2 damage counters (20 damage) placed on the Burned Pokemon. Not modified by Weakness or Resistance. Cured by retreating, evolving, or healing effects."},
{t:"Paralyzed Status",s:"Cannot attack or retreat. Auto-cured at end of controller next turn.",e:"A Paralyzed Pokemon cannot attack or retreat for its controller entire turn. Paralysis is automatically cured at the end of the Paralyzed Pokemon controller next turn. Paralysis does not prevent using Abilities or playing Trainer cards. Most powerful status condition as it fully locks a Pokemon for one turn."},
{t:"Asleep Status",s:"Cannot attack or retreat. Coin flip to wake between turns.",e:"An Asleep Pokemon cannot attack or retreat and is turned 90 degrees sideways to indicate the condition. Between turns the controller flips a coin. Heads: Pokemon wakes up and marker removed. Tails: remains Asleep. Sleep can persist indefinitely on bad coin flips. Cured by retreating, evolving, or healing effects."},
{t:"Confused Status",s:"Attacking: Heads = normal. Tails = attack fails AND 30 damage to self.",e:"When a Confused Pokemon tries to attack its controller flips a coin. Heads: attack resolves completely normally. Tails: the attack completely fails with no damage and no effects to opponent AND the controller places 3 damage counters (30 damage) on the Confused Pokemon itself. Pokemon is turned upside down to indicate Confusion."},
{t:"Multiple Status Conditions",s:"Only 1 Special Condition at a time. New condition replaces old one.",e:"A Pokemon can only have 1 Special Condition at a time. If a new Special Condition is applied to a Pokemon that already has one, the new condition immediately replaces the old. Retreating or being switched via Switch card cures ALL Special Conditions on the switched Pokemon."},
{t:"Status Conditions Cured by Retreat",s:"Retreating cures ALL Special Conditions immediately.",e:"When a Pokemon successfully retreats by paying the Retreat Cost and moving to the Bench, all Special Conditions on it are immediately cured. Similarly when a Pokemon is switched via Switch, Escape Rope, or similar card effects all Special Conditions on the newly Active Pokemon are also cured."},
{t:"Retreat Cost Rules",s:"Pay Energy equal to Retreat Cost. Once per turn. Cures all conditions.",e:"Once per turn during your turn you may retreat by discarding Energy cards attached to your Active Pokemon equal to its Retreat Cost value. Move it to the Bench and choose a Benched Pokemon to become Active. All Special Conditions cured. Cannot retreat if Paralyzed or Asleep. A Retreat Cost of 0 means retreat is free but still uses your once-per-turn retreat."},
{t:"GX Attack Once Per Game",s:"Each player uses exactly 1 GX attack per game total.",e:"Each player may use a GX attack exactly once per game. This is not once per GX Pokemon - it is once per game for the entire match regardless of how many GX Pokemon you have in play or have used. Using your GX attack does not prevent your opponent from using theirs."},
{t:"VSTAR Power Once Per Game",s:"Use VSTAR Marker to track. Once per player per game.",e:"Each player has exactly 1 VSTAR Marker. When you use a VSTAR Power (either a VSTAR attack or VSTAR Ability), flip your VSTAR Marker face-down. Once flipped no VSTAR Power can be used by that player for the rest of the game. Only 1 marker per player regardless of how many VSTAR Pokemon are in play."},
{t:"Pokemon VMAX Prize Count",s:"VMAX Pokemon award 3 Prize Cards when knocked out.",e:"Pokemon VMAX award 3 Prize Cards to the opponent when knocked out, the highest Prize value in the current format. This makes knocking out a VMAX worth as much as the opponent having only 3 Prizes remaining. Combined with Tag Team GX which also award 3 Prizes, these are the most impactful knockouts."},
{t:"Tag Team GX Rules",s:"3 Prize Cards when KO. GX attack has bonus if extra Energy attached.",e:"Tag Team Pokemon-GX feature 2 or 3 Pokemon combined and award 3 Prize Cards when knocked out. Their GX attacks often have bonus effects listed after the base GX effect that activate if extra Energy beyond the base cost is attached when the attack is used."},
{t:"Prism Star Cards",s:"Only 1 per deck. Goes to Lost Zone when discarded not discard pile.",e:"Only 1 Prism Star card of any given name may be included per deck. When a Prism Star card would be discarded for any reason including being discarded from hand as a cost or sent from play it goes to the Lost Zone instead of the Discard Pile. Cards in the Lost Zone cannot be retrieved."},
{t:"ACE SPEC Cards",s:"Only 1 ACE SPEC card per deck total - any single one.",e:"A deck may contain only 1 ACE SPEC card total across the entire deck. Not 1 of each type - 1 ACE SPEC card period. These are extremely powerful Item or Supporter cards. This limit applies to both the original Black and White era ACE SPECs and the Scarlet and Violet reintroduction."},
{t:"Radiant Pokemon Rules",s:"Only 1 Radiant Pokemon per deck. No Rule Box. Worth 1 Prize.",e:"Only 1 Radiant Pokemon of any name may be in a deck. Radiant Pokemon do NOT have a Rule Box meaning they are not affected by cards that restrict Rule Box Pokemon like Path to the Peak. They are worth 1 Prize Card when knocked out despite their often very high power level."},
{t:"Lost Zone Rules",s:"Permanently removed from game for match. Cannot be retrieved.",e:"Cards sent to the Lost Zone are permanently out of the game for the duration of that match. No card effect can retrieve cards from the Lost Zone. The Lost Zone is public information - both players may look at it at any time. Common sources of Lost Zone placement: Prism Star cards when discarded, Colress Experiment, Comfey Ability, Lost Impact attack."},
{t:"Ability Rules",s:"Use as stated. Once per turn per Pokemon unless stated otherwise.",e:"Pokemon Abilities are special effects separate from attacks. Most Abilities can be used once per turn per individual Pokemon with that Ability. Some say once per turn meaning once across all your Pokemon with that Ability. Some Abilities are passive and always active. Abilities can be shut off by certain Stadiums like Path to the Peak (for Rule Box Pokemon) or effects like Garbotoxin."},
{t:"Stadium Zone Rules",s:"1 Stadium at a time. Playing new one discards old. Cannot repeat same name.",e:"Only 1 Stadium can be in the Stadium Zone at a time. Playing a new Stadium from hand discards the current one immediately even if it is your own. You cannot play a Stadium if the Stadium currently in play has the same name. Stadium effects apply to both players unless specifically stated otherwise."},
{t:"Pokemon Tool Rules",s:"1 Tool per Pokemon. Cannot attach second Tool to same Pokemon.",e:"Only 1 Pokemon Tool card may be attached to any Pokemon at a time. You cannot attach a second Tool to a Pokemon that already has one. Tools are discarded when the Pokemon they are attached to is knocked out, returned to hand, or deck. Some Tools say discard this Tool as a cost or effect."},
{t:"Knock Out Process",s:"Damage counters equal or exceed HP. Send to discard with all attached cards.",e:"When a Pokemon has damage counters equal to or exceeding its HP it is immediately knocked out. It is sent to the discard pile along with ALL attached cards including Energy, Tools, and Evolution cards underneath it. The opponent then takes the appropriate number of Prize Cards."},
{t:"Evolving Cures Special Conditions",s:"Evolving a Pokemon cures all Special Conditions but keeps damage counters.",e:"When a Pokemon evolves all Special Conditions on it are immediately removed. However damage counters placed on it remain through evolution. A Pokemon with 80 damage that evolves to a higher HP form keeps those 80 damage counters on the evolved form."},
{t:"Rare Candy Rules",s:"Basic directly to Stage 2 skipping Stage 1. Cannot use on newly placed Basic.",e:"Rare Candy allows evolving a Basic Pokemon directly to its Stage 2 form, skipping Stage 1 entirely. The Basic Pokemon must have been on the Bench before this turn started - you cannot use Rare Candy on a Basic Pokemon placed this same turn. Rare Candy does not trigger Stage 1 ETB effects."},
{t:"Deck Out Loss",s:"Cannot draw at start of turn means immediate loss.",e:"If a player cannot draw a card at the start of their turn because their deck is empty they lose the game immediately. Drawing during a card effect mid-turn that would also empty the deck does not cause a loss - only the mandatory draw at turn start triggers the deck out loss."}
],
mtg:[
{t:"Win Conditions",s:"Life to 0, deck out, 10 poison counters, special card effects.",e:"Primary: reduce opponent life total to 0. Starting life: 20 in most formats, 40 in Commander. Other loss conditions: draw from empty library (state-based action), accumulate 10 or more poison counters (infect), a card specifically says that player loses. Special wins: Laboratory Maniac wins if you draw from empty library while it is in play, Thassas Oracle wins if devotion to blue equals or exceeds library size on ETB."},
{t:"Turn Structure",s:"Untap, Upkeep, Draw, Main 1, Combat, Main 2, End Step, Cleanup.",e:"Beginning Phase: Untap Step (untap all permanents, no priority granted), Upkeep Step (triggers activate, priority granted), Draw Step (draw 1 card, priority granted). Pre-Combat Main Phase. Combat Phase: Beginning of Combat Step, Declare Attackers Step, Declare Blockers Step, First Strike Damage Step (if applicable), Regular Combat Damage Step, End of Combat Step. Post-Combat Main Phase. Ending Phase: End Step, Cleanup Step."},
{t:"The Stack",s:"All spells and abilities wait on stack. Resolves Last In First Out.",e:"Every spell cast and every non-mana ability activated goes on the stack. Stack resolves LIFO - last in first out. Both players must pass priority consecutively for the top stack item to resolve. After each item resolves both players get priority again. Mana abilities do not go on the stack and cannot be responded to."},
{t:"Priority Rules",s:"Active player first. Both must pass consecutively to advance.",e:"The active player (whose turn it is) gets priority first in each step and phase. After casting or activating something priority passes to the other player. Both must pass consecutively with nothing on the stack for the game to advance to the next step or phase."},
{t:"Sorcery Speed vs Instant Speed",s:"Sorceries: main phase only, empty stack. Instants: any time you have priority.",e:"Sorcery speed: only during your own main phase when the stack is empty. This is when you can play lands, cast sorceries, cast creatures without flash, and activate sorcery-speed abilities. Instant speed: any time you have priority including opponent turn, in response to other spells and abilities, during combat steps."},
{t:"State-Based Actions",s:"Automatic rules checked before priority. No player can respond to SBAs.",e:"State-based actions are checked before any player receives priority after any game action. SBAs happen simultaneously: creature with 0 or less toughness dies, creature with damage equal to or greater than toughness is destroyed (unless indestructible), player at 0 life loses, player with 10 or more poison counters loses, planeswalker at 0 loyalty dies, legend rule applies, token in non-battlefield zone ceases to exist, aura not attached to legal permanent goes to graveyard."},
{t:"Legend Rule",s:"Same-name legendary permanents: owner keeps one, rest go to graveyard.",e:"If a player controls two or more legendary permanents with the same name that player chooses one to keep and the rest are immediately put in the graveyard as a state-based action. This applies to all legendary permanent types: creatures, artifacts, enchantments, planeswalkers, lands. Two differently-named legendary cards can coexist."},
{t:"Combat Damage Assignment",s:"All assigned simultaneously. Attacker orders multiple blockers. Lethal damage first.",e:"When multiple creatures block one attacker, the attacking player declares a damage assignment order for the blockers. Must assign at least lethal damage to the first blocker before assigning any to the second, etc. Lethal damage equals the creature toughness minus any damage already marked. All combat damage is then dealt simultaneously unless first or double strike applies."},
{t:"Trample",s:"Excess damage over lethal goes to defending player.",e:"Trampling attacker must assign at least lethal damage to each blocker in declared order before assigning any excess to the defending player. With deathtouch and trample: since 1 damage from deathtouch is considered lethal for assignment purposes only 1 damage must be assigned to each blocker before the rest tramples through. Indestructible blockers still require their full toughness assigned before trample applies."},
{t:"First Strike and Double Strike",s:"First strike: damage in first step only. Double strike: damage in both steps.",e:"If any combatant has first strike or double strike, a first strike damage step occurs before regular combat damage. First strike creatures deal damage only in the first step. If they kill a blocker that blocker never deals damage back. Double strike creatures deal damage in BOTH the first strike step and the regular combat damage step."},
{t:"Deathtouch",s:"Any nonzero damage from deathtouch source is lethal.",e:"Any amount of damage dealt by a deathtouch source is sufficient to destroy the damaged creature. For damage assignment purposes only 1 damage from a deathtouch creature counts as lethal. This allows a 1 power deathtouch creature to satisfy the lethal requirement for an arbitrarily large blocker when combined with trample."},
{t:"Lifelink",s:"Damage dealt causes controller to gain that much life simultaneously.",e:"Lifelink is a static ability not a triggered ability. When a lifelink permanent deals damage of any kind (combat or non-combat) its controller gains that much life at the same time the damage is dealt. Multiple lifelink sources each independently gain life."},
{t:"Hexproof",s:"Opponents cannot target this permanent. Controller still can.",e:"A permanent with hexproof cannot be targeted by spells or abilities opponents control. The controller of the hexproof permanent can still target it with their own spells and abilities. Hexproof does not prevent non-targeting effects like destroy all creatures or each creature gets minus 1 minus 1."},
{t:"Shroud",s:"Nobody can target this permanent including its controller.",e:"A permanent with shroud cannot be targeted by ANY spell or ability including those its controller controls. You cannot enchant, equip, or use activated abilities that target your own shroud permanent. Shroud does not protect against non-targeting effects."},
{t:"Indestructible",s:"Cannot be destroyed by damage or destroy effects. Can still be exiled.",e:"The indestructible keyword means destroy effects and lethal combat damage cannot destroy the permanent. However indestructible permanents CAN still be: exiled, sacrificed, returned to hand or library, given minus toughness to 0 (state-based action kills at 0 toughness, not destruction), or countered before entering the battlefield."},
{t:"Protection DEBT",s:"Cannot be Damaged, Enchanted/Equipped, Blocked, or Targeted by quality.",e:"Protection from a quality means the permanent cannot be: Damaged by sources with that quality, Enchanted or Equipped by objects with that quality, Blocked by creatures with that quality, Targeted by spells or abilities with that quality. Protection from everything means all four from all possible sources. Protection does not stop effects that are none of these four."},
{t:"Layers System",s:"7 layers determine how continuous effects interact and which applies.",e:"When multiple continuous effects modify the same permanent they apply in layer order: Layer 1 Copy effects, Layer 2 Control-changing effects, Layer 3 Text-changing effects, Layer 4 Type-changing effects, Layer 5 Color-changing effects, Layer 6 Ability-adding and ability-removing effects, Layer 7 Power and toughness changes (7a sets to specific value, 7b characteristic-based, 7c additions and subtractions, 7d counters, 7e switching P/T). Within the same layer effects apply in timestamp order - earlier effect applies first."},
{t:"Replacement Effects",s:"Instead effects modify how events happen. Not placed on stack.",e:"Replacement effects use the word instead and modify how an event occurs before it happens. They are not placed on the stack and cannot be responded to as activations. When multiple replacement effects would apply to the same event the affected object controller (or affected player) chooses the order to apply them. Only one replacement can be applied to any single event occurrence."},
{t:"Commander Tax",s:"Plus 2 generic mana each time cast from command zone. Cumulative.",e:"Each time a commander is cast from the command zone it costs 2 additional generic mana compared to the last time it was cast from the command zone. First cast: printed mana cost. Second cast: printed cost plus 2. Third cast: printed cost plus 4. Casting from hand or graveyard does not affect or interact with the commander tax."},
{t:"Commander Damage",s:"21 combat damage from one commander means that player loses.",e:"If a single player has been dealt 21 or more combat damage total from one specific commander over the course of the game that player loses. Commander damage is tracked per individual commander. It is cumulative and is not reset when the commander returns to the command zone. Non-combat damage from a commander does not count."},
{t:"Color Identity Commander",s:"All mana symbols in cost and rules text determine deck color identity.",e:"A card color identity includes all mana symbols appearing in its mana cost and in its rules text including reminder text but not flavor text. Your deck can only contain cards whose color identity is a subset of your commander color identity. Colorless is not a color meaning colorless cards can be included in any Commander deck."},
{t:"London Mulligan",s:"Draw 7 each mulligan. Put cards on bottom equal to number of mulligans taken.",e:"To take a mulligan: shuffle hand into library and draw 7 new cards. After drawing choose cards equal to the number of times you have mulliganed and put them on the bottom of your library in any order. You may mulligan any number of times. A player who has taken 3 mulligans draws 7 and puts 3 on the bottom, effectively keeping a 4 card hand."},
{t:"Cascade",s:"Exile cards until nonland card with lesser mana value found. Cast it free.",e:"When you cast a cascade spell exile cards from top of library one at a time until you exile a nonland card with lesser mana value than the cascade spell. You may cast that card for free. Then shuffle all other exiled cards into library in random order. The free spell goes on the stack above the cascade spell so resolves first. You may choose not to cast the cascaded card."},
{t:"Infect",s:"Damage to creatures is minus 1 minus 1 counters. To players is poison counters.",e:"Infect creatures deal damage to other creatures in the form of minus 1 minus 1 counters rather than marking damage. They deal damage to players in the form of poison counters rather than life loss. A player with 10 or more poison counters loses the game as a state-based action. Proliferate can increase poison counters."},
{t:"Counterspell and Fizzle",s:"Countered goes to graveyard without resolving. Fizzle when all targets illegal.",e:"When a spell is countered it is removed from the stack and placed in the graveyard (or exile if the counter effect specifies) without resolving. Costs already paid remain paid. A spell fizzles when all of its targets become illegal before it resolves - the spell is countered by the game rules. If only some targets are illegal the spell still resolves affecting remaining legal targets."},
{t:"Planeswalker Rules",s:"Activate one loyalty ability per turn. Can be attacked. Dies at 0 loyalty.",e:"Planeswalkers enter with loyalty counters equal to starting loyalty. Once per turn during your main phase with empty stack, activate one loyalty ability by adding or removing loyalty counters. Planeswalkers can be attacked directly. Unblocked attack damage removes loyalty counters. Planeswalker at 0 loyalty dies as state-based action."},
{t:"Flash Timing",s:"Flash allows casting at instant speed regardless of card type.",e:"Flash grants a card the ability to be cast any time you could cast an instant. A creature with flash can be cast on opponent turn, in response to spells, during combat, etc. A sorcery with flash can be cast at instant speed. Flash is especially powerful for creatures with strong enters the battlefield effects."},
{t:"Haste and Summoning Sickness",s:"Haste removes restriction on attacking turn entered battlefield.",e:"A creature has summoning sickness and cannot attack or use tap abilities if it has not been under the controlling player control since the beginning of their most recent turn. Haste removes this restriction allowing the creature to attack and use tap abilities the turn it enters. Summoning sickness affects attacking and tapping, not blocking or other abilities."},
{t:"Vigilance",s:"Attacking does not cause this creature to tap.",e:"Creatures with vigilance do not tap when they attack. They can therefore both attack and block on the opponent next turn. Vigilance is particularly strong with activated abilities that require tapping since the creature can attack and still use its tap ability in the same turn."},
{t:"Cascade Interaction Rules",s:"Cascaded spell is cast so when-cast triggers apply.",e:"The spell found by cascade and cast for free IS cast, meaning when you cast this triggers apply to it. The cascaded spell goes on the stack above the cascade spell. Players can respond to the cascaded spell before the cascade spell resolves. If the cascaded spell is countered the cascade spell is still on the stack and resolves normally."}
],
dig:[
{t:"Win Condition",s:"Break all 5 Security then land an unblocked direct attack.",e:"Each player starts with 5 face-down Security cards. Win by breaking all opponent Security cards reducing their Security to 0, then landing an unblocked direct attack on the player. You can also win if opponent cannot draw when required."},
{t:"Memory Gauge",s:"Shared minus 3 to plus 3. Crosses to opponent side means their turn starts immediately.",e:"The Memory Gauge runs from minus 3 (opponent side) to plus 3 (your side). When you play cards or use effects you spend memory which moves the gauge toward the opponent. When the gauge moves to 1 or more on the opponent side after any action the current player turn ends immediately and the opponent turn begins."},
{t:"Turn Structure",s:"Unsuspend, Draw, Breeding, Main Phase, End.",e:"Unsuspend Phase: all your suspended Digimon become unsuspended. Draw Phase: draw 1 card. Breeding Phase: if Digimon in Breeding Zone has 3 or more DP you may move it to the battle area. Main Phase: play cards, digivolve, attack, use effects. End Phase: resolve end of turn effects."},
{t:"Digivolving Rules",s:"Pay digivolve cost. Stack on compatible target. Inherit all effects underneath.",e:"To digivolve pay the digivolve cost listed on the card and place it on top of a compatible target Digimon meeting the Digivolves From requirement (matching name or Level). The new Digimon retains all cards underneath it and their Inherited Effects are active. Digivolution removes Suspension allowing the Digimon to attack again."},
{t:"Battle Resolution",s:"Compare DP values. Higher DP wins. Equal DP means both are deleted.",e:"When two Digimon battle compare their DP values. Higher DP Digimon wins and the lower DP Digimon is deleted. If both have equal DP both are deleted simultaneously. Deleted Digimon and all cards underneath them are sent to the Trash. Delete effects and On Deletion triggers activate at this time."},
{t:"Security Check",s:"Reveal top Security card. Tamer and Option security effects activate. Then discard.",e:"When an unblocked attack reaches Security, reveal the top Security card. If it is a Tamer or Option (Spell) card its Security effect activates and resolves. Digimon Security cards with a Security effect text also activate. After the effect resolves (or if there is no security effect) the Security card is discarded."},
{t:"BLOCKER Keyword",s:"Can intercept any attack targeting player or another Digimon.",e:"When an attack is declared against any target, you may declare a Digimon with BLOCKER as the blocker. Switch that Digimon to REST position. The attack is redirected to the BLOCKER and battle is resolved between attacker and blocker. A Digimon can only use BLOCKER once per turn."},
{t:"Inherited Effects",s:"Effects of cards underneath active Digimon are active while on field.",e:"When a Digimon has digivolved multiple times, all the cards underneath it (the digivolve sources) provide their Inherited Effects to the currently active Digimon. All these Inherited Effects are active simultaneously as long as those cards remain underneath that Digimon on the field."},
{t:"Trash Zone",s:"Deleted Digimon and used Options go here. Like a graveyard.",e:"The Trash is the discard pile equivalent. Deleted Digimon (along with all cards underneath), used Option cards, and other discarded cards go here. Some card effects interact with Trash. Trash is public information - both players may look at it at any time."},
{t:"Tamer Cards",s:"Pay memory cost to place on field. Provide ongoing effects.",e:"Tamer cards represent human partners. Pay their memory cost to place them on the field. They provide continuous or triggered effects. Tamers generally cannot be attacked directly and do not participate in battle. They often have Security effects that activate when revealed from Security."},
{t:"Option Cards",s:"One-time effect cards paid with memory. Go to Trash after use.",e:"Option cards are one-time effects paid with memory that go to the Trash after resolving. They are equivalent to Spell cards in other TCGs. Many Option cards have Security effects. Option cards can generally be played any time during your Main Phase."},
{t:"Suspension System",s:"Attacking Digimon becomes Suspended. Unsuspend at start of your turn.",e:"When a Digimon attacks it becomes Suspended (turned sideways). Suspended Digimon cannot attack or block. At the beginning of your Unsuspend Phase all your Suspended Digimon become Unsuspended simultaneously. Digivolving also Unsuspends a Digimon. Some effects can Suspend Digimon outside of normal attack resolution."},
{t:"Deck Construction",s:"50 card main deck. 0-5 Digi-Egg cards. Max 4 copies per card number.",e:"Main Deck must contain exactly 50 cards. Digi-Egg Deck can contain 0-5 Digi-Egg cards. Maximum 4 copies of any card with the same card number. Different printings or alternate art of the same card with different card numbers count separately."}
],
gundam:[
{t:"Win Conditions",s:"Reduce opponent Base to 0 HP or destroy their Flagship.",e:"Win by reducing the opponent Base to 0 HP through combat damage, or by destroying the opponent Flagship unit. Base starts at 10 HP. When Base reaches 0 that player loses immediately."},
{t:"Turn Structure",s:"Draw, gain resource, Main Phase, Battle Phase, End Phase.",e:"Draw Phase: draw 1 card. Resource Phase: gain 1 resource up to your Flagship maximum. Main Phase: deploy units by paying resource cost, play Burst cards, activate abilities. Battle Phase: declare attackers, each unit may attack once per turn. End Phase: resolve end of turn effects. First player CANNOT attack on their first turn."},
{t:"Resource System",s:"Gain 1 resource per turn up to Flagship maximum. Resources carry over.",e:"At the start of each turn gain 1 resource. Your Flagship determines the maximum resources you can hold. Unspent resources carry over to the next turn up to your maximum. High-cost units require saving resources across turns. Managing resource accumulation is the core strategic element."},
{t:"Deploying Units",s:"Pay resource cost. Enter REST position. Cannot attack until next turn unless RUSH.",e:"Play units from hand by paying their resource cost in resources. Units enter the field in REST position (turned sideways). They cannot attack on the turn they are deployed unless they have the RUSH keyword. Maximum 5 units on the field at one time not counting the Flagship."},
{t:"Battle System",s:"Attacker Power vs Defender HP. Excess Power becomes Penetrating Damage to Base.",e:"When a unit attacks a blocking unit: compare attacker Power against defender HP. If Power is equal to or greater than HP, defender is destroyed. The difference (Power minus HP) is called Penetrating Damage and is immediately applied to the defending player Base. If no blocker: the full Power of the attacking unit hits the Base as direct damage."},
{t:"Penetrating Damage",s:"Excess Power after destroying blocker carries through to hit Base.",e:"Penetrating Damage is the amount of damage that carries through to the Base after a blocker is destroyed. Formula: attacker Power minus defender HP equals Penetrating Damage. Example: 3000 Power attacks 1500 HP blocker. Blocker destroyed AND 1500 Penetrating Damage hits the Base. High Power units are especially dangerous because of this mechanic."},
{t:"RUSH Keyword",s:"Unit can attack the turn it is deployed.",e:"Units with RUSH bypass the standard restriction that newly deployed units cannot attack. A RUSH unit can attack immediately on the same turn it enters the field. RUSH is critical for aggressive strategies and for finishing games before opponent can establish defenses."},
{t:"BLOCKER Keyword",s:"Can intercept any attack targeting Base or other units.",e:"When an opponent declares an attack, you may switch a unit with BLOCKER from ACTIVE to REST position to intercept it. The BLOCKER becomes the new attack target. The attacker must fight the BLOCKER instead of the original target. A unit can only use BLOCKER once per turn and must be in ACTIVE position to do so."},
{t:"Burst Cards",s:"Can be played at any time during either player turn including response to attacks.",e:"Burst cards are marked with a lightning bolt symbol. They can be activated at any time during either player turn: during Main Phase, in response to attack declarations, in response to effects. This makes them function like Quick-Play Spells in Yu-Gi-Oh or Instants in Magic. Pay their resource cost when activated."},
{t:"Flagship Rules",s:"In Command Zone. Destroyed means lose. Determines color identity.",e:"Your Flagship is placed in the Command Zone before play begins. It determines which card colors you can include in your deck. Flagship has unique abilities that often define your strategy. If your Flagship is destroyed at any point you immediately lose the game. Most effects cannot target Flagships unless specifically stated."},
{t:"Ace Units",s:"Extremely powerful units. Only 1 Ace unit per deck total.",e:"Ace units are the most powerful cards in the game with highest stats and abilities. Only 1 Ace unit of any name may be included per deck. They typically require meeting level or other requirements to deploy. Their power justifies the strict 1 per deck limitation."},
{t:"REST and ACTIVE Positions",s:"REST equals tapped. ACTIVE equals untapped. Attack puts units in REST.",e:"Units in ACTIVE position (upright) can attack and use BLOCKER. After attacking, blocking, or being used as a cost, units move to REST position (turned sideways). Units become ACTIVE again during an unsuspend step or specific card effects. REST units cannot attack or use BLOCKER."},
{t:"Color Identity",s:"Cards must match Flagship color. Multi-color Flagships allow both colors.",e:"Your Flagship color or colors determines what cards you can include in your deck. All cards must match your Flagship color identity. Dual-color Flagships allow cards of either color. Colorless cards can go in any deck."}
],
op:[
{t:"Win Conditions",s:"Reduce Life to 0 then land 1 more hit on Leader, or opponent decks out.",e:"Win by: reducing opponent Life cards to 0 AND landing one more unblocked hit on their Leader. Also win if opponent cannot draw a card when required. Each player starts with 5 Life cards. When a player takes a hit with 0 Life remaining they lose immediately."},
{t:"DON!! System",s:"Gain 2 DON per turn. Attach for plus 1000 Power each. Return at Refresh.",e:"Each player has a separate DON!! deck of exactly 10 DON!! cards. Each turn during DON!! Phase gain 2 DON!! from your DON!! deck (first player gains only 1 on their very first turn). DON!! cards can be rested to pay for playing cards OR attached to your Characters or Leader to give plus 1000 Power each. Attached DON!! return to Active DON!! area at start of your Refresh Phase."},
{t:"Turn Structure",s:"Refresh, Draw, DON!!, Main Phase, End Phase.",e:"Refresh Phase: flip all Rested cards to Active position, return all attached DON!! to Active area. Draw Phase: draw 1 card from your deck (first player skips their very first draw). DON!! Phase: gain 2 DON!! from DON!! deck (1 for first player first turn). Main Phase: play cards, attack with Characters and Leader, use effects. End Phase: resolve end of turn effects."},
{t:"Life Cards and Damage",s:"Hit on Leader reveals top Life card. Add to hand. Trigger effects may activate.",e:"When your Leader takes an unblocked hit reveal the top card of your Life pile and add it to your hand. If the revealed card has a Trigger effect you MAY choose to activate it. When your Life pile is completely empty and your Leader takes any unblocked hit you lose the game immediately."},
{t:"Leader Card Rules",s:"Always in play. Cannot be removed. Can attack once per turn.",e:"Your Leader card is always in the Leader Zone and cannot be removed from play by card effects unlike Characters. Your Leader can attack once per turn during your Main Phase. When your Leader attacks it rests (becomes horizontal). Your Leader can also be attacked by opponent units."},
{t:"Attacking with Characters",s:"Active Characters can attack once per turn. They Rest after attacking.",e:"Any Active (upright) Character you control may attack once per turn. After attacking it becomes Rested (horizontal). Characters played this same turn cannot attack unless they have the RUSH keyword. You may attack opponent Rested Characters or attack the opponent Leader directly."},
{t:"Blocking Rules",s:"Rest an Active Character to intercept attack on your Leader.",e:"When your Leader is attacked you may Rest one of your Active Characters to block. The block redirects the attack to that Character. The Character takes the hit: if attacker Power exceeds or equals Character Power the Character is KO and sent to Trash. BLOCKER keyword Characters can also intercept attacks targeting your other Characters not just your Leader."},
{t:"Counter Cards",s:"Discard Counter cards from hand during opponent attack step to boost Power.",e:"During an opponent attack step (after they declare an attack and before damage is resolved) you may discard 1 or more cards with Counter values from your hand. Each discarded Counter card adds its Counter value to your defending Leader or defending Character Power for that battle only. Counter can ONLY be used during the opponent attack step. Choose carefully which cards to discard as they go to Trash."},
{t:"Battle Resolution",s:"Compare attacker Power vs defender Power. Higher survives. Equal means both KO.",e:"After all Counter cards are played compare attacker total Power versus defender total Power. If attacker Power exceeds defender Power: defender is KO and sent to Trash. If defender Power exceeds attacker Power: attacker is KO and sent to Trash. If both have equal Power: both are KO simultaneously."},
{t:"RUSH Keyword",s:"Can attack the turn it is played. Bypasses normal restriction.",e:"Characters with RUSH can attack on the same turn they are played from hand, bypassing the standard rule that newly played Characters cannot attack. RUSH is critical for finishing games and putting immediate pressure on the opponent Life cards."},
{t:"BLOCKER Keyword",s:"Can intercept attacks on your Leader OR your other Characters.",e:"A Character with BLOCKER can intercept attacks targeting your Leader OR any of your other Characters. Must be in Active position to use BLOCKER. After blocking it becomes Rested. A Character can only BLOCK once per turn."},
{t:"TRIGGER Keyword",s:"Activates when this card is revealed from your Life pile as damage.",e:"When a card with TRIGGER is revealed from your Life pile as a result of your Leader taking an unblocked hit, you may activate its Trigger effect. This is a bonus effect for having the card in your Life pile and is entirely separate from playing the card normally. You may choose whether or not to activate Trigger effects."},
{t:"Six Colors",s:"Red aggro, Blue control, Green ramp, Purple restand, Black removal, Yellow life.",e:"Red: aggressive, direct attacks, RUSH effects. Blue: control, bouncing cards, drawing, cost reduction. Green: resource acceleration, cost reduction, searching. Purple: resting and reststanding units, reusing effects. Black: removal effects, KOing opponent units, power reduction. Yellow: Life card manipulation, gaining extra Life, searching from Life pile."},
{t:"DON!! Attachment Strategy",s:"Attach DON!! to boost Power for key battles. Returns at Refresh.",e:"Attaching DON!! to your Leader or Characters gives plus 1000 Power per attached DON!! for the rest of the turn. Attached DON!! return to your Active area at the start of your next Refresh Phase. You cannot use attached DON!! to pay for playing cards. Optimal play often involves attaching multiple DON!! for a decisive attack that claims the final Life card or Leader KO."},
{t:"Rested vs Active",s:"Rested equals horizontal unable to act. Active equals upright and ready.",e:"Active position (upright) means a card is ready to attack, block, or be used as a cost. After attacking, blocking, or being used as a resource cost cards become Rested (horizontal). At the start of your Refresh Phase all your Rested cards including Characters, your Leader, and DON!! all return to Active position simultaneously."},
{t:"Deck Construction",s:"Exactly 50 cards. Max 4 copies per name. 1 Leader. Separate 10 DON!! deck.",e:"Main deck must contain exactly 50 cards. Maximum 4 copies of any card with the same name. 1 Leader card in Leader Zone not counted in 50. Separate DON!! deck of exactly 10 DON!! cards. Cards must match Leader color identity. Dual-color Leaders allow cards of either color."}
]
};
var SYNS={
  chain:"chain resolution lifo spell speed chaining respond",
  counter:"counter trap spell speed 3 negate solemn",
  negate:"negation negate activation effect stop cancel",
  mst:"mystical space typhoon quick play destroy chain negate",
  reborn:"monster reborn normal spell resolve summon graveyard",
  destroy:"destroy destruction battle damage chain negate remove",
  typhoon:"mystical space typhoon mst destroy quick play",
  resolve:"chain resolution normal spell field continuous",
  damage:"battle damage calculation formula atk def",
  weakness:"weakness type multiplier times 2 double",
  resistance:"resistance type minus 30 reduce",
  bench:"bench damage weakness resistance spread",
  evolution:"evolve evolution stage rare candy cannot newly",
  retreat:"retreat cost switch condition cure escape rope",
  poison:"poisoned badly poisoned status condition damage counter",
  burn:"burned status condition coin flip damage counter",
  sleep:"asleep status condition coin flip wake sideways",
  para:"paralyzed cannot attack retreat status condition",
  confuse:"confused coin flip self damage upside down",
  gx:"gx attack once per game player total",
  vstar:"vstar power once game marker flip",
  don:"don resource attach power thousand boost",
  life:"life cards leader damage trigger reveal",
  memory:"memory gauge turn ends resource digimon",
  security:"security check reveal effect break attack",
  digivolve:"digivolving stack inherit effects level",
  base:"base hp penetrating damage win gundam",
  burst:"burst card instant any time quick response",
  rush:"rush attack turn deployed cannot wait",
  blocker:"blocker intercept block keyword rest",
  layers:"layers system continuous effects apply order timestamp",
  commander:"commander tax damage color identity edh zone",
  sba:"state-based actions automatic checked toughness",
  protection:"protection debt damage enchant block target",
  indestructible:"indestructible destroy exile sacrifice toughness",
  trample:"trample excess damage player deathtouch",
  extra:"extra deck zone link arrow extra monster zone",
  synchro:"synchro tuner level sum exactly formula",
  xyz:"xyz rank overlay material detach",
  link:"link arrow zone extra deck monster",
  pendulum:"pendulum scale summon between not including",
  fusion:"fusion polymerization material send graveyard",
  ritual:"ritual spell tribute level summon",
  segoc:"segoc simultaneous effects turn player non-turn",
  timing:"timing if when optional mandatory miss",
  cost:"cost semicolon paid activation refunded",
  target:"targeting target declare illegal fizzle",
  honest:"honest hand trap damage step atk",
  sieger:"cyber dragon sieger damage step atk machine",
  veiler:"effect veiler hand trap negate monster main phase",
  ash:"ash blossom hand trap negate search draw special summon",
  nibiru:"nibiru primal being hand trap fifth summon tribute",
  skill:"skill drain continuous trap negate all monsters",
  solemn:"solemn judgment solemn strike counter trap negate",
  infinite:"infinite impermanence trap negate monster column",
  ghost:"ghost ogre snow rabbit hand trap destroy field",
  called:"called by grave banish negate graveyard",
  haste:"haste summoning sickness attack tap turn",
  flash:"flash instant speed cast any time",
  vigilance:"vigilance attacking does not tap",
  lifelink:"lifelink damage life gain simultaneous",
  deathtouch:"deathtouch lethal any damage assign",
  hexproof:"hexproof opponents cannot target you can",
  shroud:"shroud nobody can target controller",
  cascade:"cascade exile cast free mana value",
  infect:"infect poison counter minus minus creature",
  planeswalker:"planeswalker loyalty ability attack",
  priority:"priority pass advance phase respond",
  open:"open game state speed 1 activate",
  flip:"flip summon effect face-down monster",
  spirit:"spirit monster return hand end phase",
  gemini:"gemini monster normal effect second summon",
  toon:"toon monster world direct attack",
  piercing:"piercing defense position damage",
  tribute:"tribute summon level cost send graveyard",
  inheritance:"inherited effects underneath stack digimon",
  tamer:"tamer card digimon field security",
  option:"option card digimon effect trash",
  penetrating:"penetrating damage excess power base gundam",
  flagship:"flagship command zone color identity lose",
  resource:"resource cost deploy gain per turn",
  counter_op:"counter discard hand power boost attack step",
  trigger:"trigger effect when life card reveal",
  prize:"prize card knock out koed won take",
  tool:"tool pokemon attach one per pokemon",
  stadium:"stadium zone one per turn same name",
  ability:"ability pokemon power blocked path peak",
  ace:"ace spec one per deck powerful item",
  radiant:"radiant one per deck no rule box prize",
  prism:"prism star lost zone one per deck",
  lost:"lost zone permanently removed cannot retrieve",
  rarely_candy:"rare candy basic stage 2 skip stage 1",
  breed:"breeding zone digi-egg hatch dp move",
  trash:"trash zone deleted digimon graveyard discard",
  suspend:"suspend unsuspend attack rest digimon"
};
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

define([],()=>{

let monsters = {

}

monsters.Krismorel = {
    name : 'Krismorel Bearcharger', size : 'Medium', type : 'Humanoid', alignment : 'chaotic good',
    ac : '22 (dwarven plate +2, shield)', hp : '204 (20d10+80)', speed : '30 ft.', str : 20, dex : 12,
    con : 18, int : 12, wis : 16, cha : 20, save:"Str +10, Cha +10", immune : '',
    conditionImmune : '', senses : 'Darkvision 60ft', passive : '9', languages : 'Elven, Common, Dwarven',
    cr : '20', trait : [ 
        { name : 'Regeneration', text : ['Krismorel regains 10 hit points at the start of her turn if she has at least 1 hp.'] }, 
        { name : 'Lay on hands', text : [`Krismorel has a pool of healing power up to 100hp. As an action she can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in her pool.`]},
        { name : 'Aura of Warding', text : ['Krismorel and allies within 10 feet have resistance to damage from spells.'] }, 
        { name : 'Elder Champion', text : [`Krismorel casts paladin spells as a bonus action.`] },
        { name : 'Spellcasting', text : [`Krismorel is a level 20 spellcaster. Her spellcasting ability is Charisma (spell save DC 19, +11 to hit with spell attacks). She has 
        the following spells prepared: 
        <br>1st level (4 slots): compelled duel, protection from evil and good   
        <br>2nd level (3 slots): lesser restoration, protection from poison, 
        <br>3rd level (3 slots): dispel magic, remove curse,
        <br>4th level (3 slots): banishment, ice storm  
        <br>5th level (2 slots): destructive wave, tree stride`]}
    ], action : [
        { name : 'Multiattack', text : `Krismorel makes two attacks with her Answerer.`},
        { name : 'Answerer', text : `Melee weapon attack +14 to hit, reach 5 ft., one target.
        Hit: 14 (1d8 + 8) slashing damage + 8 (2d8) radiant damage. `}
    ], reaction : [
        { name : 'Answerer', text : `When attacked by an enemy in reach, Krismorel can make one 
        melee attack as a reaction against that enemy. `}
    ], spells : `comeplled duel, cure wounds, lesser restoration, protection from poison, 
    dispel magic, remove curse, banishment, ice storm, circle of power, tree stride`, Slots : '4,3,3,3,2,0,0,0,0',
    legendary : [
        { name : `Elder Champion(Costs 2 actions)`, text : `Krismorel can cast a spell. Enemies within 10 feet of her have disadvantage  against the spell.`},
        { name : 'Misty Step', text : `Krismorel can teleport 30 feet instantly.`},
        { name : `Nature's Wrath (Costs 2 actions)`, text : `Krismorel can cause vines to ensnare a creature. It must succeed on a strength or dexterity saving throw which it can make at the start of each of its turns. Enemies within 10 feet of her have disadvantage on the saving throw. ` }
    ], 
    items : [
        { name : 'Dwarven Plate', text : `Plate armor +2. Reduce forced movement by 10` },
        { name : 'Answerer', text : `+3 longsword. Allows a weapon attack with advantage as a reaction.`},
        { name : 'Bag of holding', text : `bag of holding.`},
        { name : `Oil of Slipperiness`, text : `10 minutes to apply. Freedom of movement 8 hours.`},
        { name : 'Potion of superior healing', text : '8d4+8'},
        { name : 'Potion of invulnerability', text : `Restistance all 1 hour`},
        { name : `Potion of speed`, text : `Haste for 1 minute.`}
    ]
}

monsters.Kathuil = {
    name : 'Kathuil, Lord of Dwarves', size : 'M', type : 'humanoid', alignment : 'lawful neutral', ac : '20 xyz',
    hp : '284 (20d10+160)', speed : '50 ft', str : 26, dex : 22, con : 26, int : 25, wis : 25, cha : 30, 
    save : "Int +14, Wis +14, Cha +17", skill : 'Perception +14', resist:"bludgeoning, piercing, and slashing from nonmagical weapons",immune:"lightning, poison",conditionImmune:"charmed, exhaustion, frightened, poisoned",senses:"truesight 120 ft.",passive:"24",languages:"all",cr:"22",
    trait : [
        { name : 'Sure Footing', text : `Kathuil ignores difficult terrain and can move along vertical surfaces and across liquids on his turn without falling during the move`},
        { name : `Spellcasting`, text : ``} 
    ]
}
/*
,"trait":[{"name":"Angelic Weapons","text":"The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack)."},{"name":"Divine Awareness","text":"The solar knows if it hears a lie."},{"name":"Innate Spellcasting","text":["The solar's spell casting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components: ","At will: detect evil and good, invisibility (self only)","3/day each: blade barrier, dispel evil and good, resurrection","1/day each: commune, control weather"]},{"name":"Magic Resistance","text":"The solar has advantage on saving throws against spells and other magical effects."}],"action":[{"name":"Multiattack","text":"The solar makes two greatsword attacks."},{"name":"Greatsword","text":"Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage.","attack":"Greatsword|15|4d6+8+6d8"},{"name":"Slaying Longbow","text":"Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit: 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 190 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die.","attack":"Slaying Longbow|13|2d8+6+6d8"},{"name":"Flying Sword","text":"The solar releases its greatsword to hover magically in an unoccupied space within 5 ft. of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 ft. and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies."},{"name":"Healing Touch (4/Day)","text":"The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness."}],"legendary":[{"name":"Teleport","text":"The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 ft. to an unoccupied space it can see."},{"name":"Searing Burst (Costs 2 Actions)","text":"The solar emits magical, divine energy. Each creature of its choice in a 10 -foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one."},{"name":"Blinding Gaze (Costs 3 Actions)","text":"The solar targets one creature it can see within 30 ft. of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness."}],"spells":"detect evil and good, invisibility, blade barrier, dispel evil and good, resurrection, commune, control weather"}
*/
return monsters;

});
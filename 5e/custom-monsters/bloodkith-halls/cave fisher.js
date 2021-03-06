
export let monster = {
    Name : 'Cave Fisher'
    , Size : 'Medium'
    , Type : 'monstrosity'
    , Alignment : 'unaligned'
    , Speed : '20 ft, climb 20ft'
    , Save : ''
    , Skill : 'Perception +2, Stealth +5'
    , Senses : 'Blindsight 60ft'
    , Languages : ''
    , Challenge : '3'
    , Defenses : { 
        Ac : '16 (natural armor)',
        Hp : '58 (9d8+18)',
        Resist : ``,
        Immune : '',
        ConditionImmune : ''
    }
    , Stats : {
        Str : 16,
        Dex : 13, 
        Con : 14,
        Int : 3,
        Wis : 10, 
        Cha : 3
    }
    , Trait : [
        { Name : 'Adhesive Filament', Text : `The cave fisher can use its action to extend
        a sticky filament up to 60 feet, and the filament adheres to
        anything that touches it. A creature adhered to the filament is
        grappled by the cave fisher (escape DC 13), and ability checks
        made to escape this grapple have disadvantage. The filament
        can be attacked (AC 15; 5 hit points; immunity to poison and
        psychic damage), but a weapon that fails to sever it becomes
        stuck to it, requiring an action and a successful DC 13 Strength
        check to pull free. Destroying the filament deals no damage to
        the cave fisher, which can extrude a replacement filament on
        its next turn.`},
        { Name : 'Flammable Blood', Text : `If the cave fisher drops to half its hit points
        or fewer, it gains vulnerability to fire damage`},
        { Name : 'Spider Climb', Text : `The cave fisher can climb difficult surfaces, in-
        cluding upside down on ceilings, without needing to make an ability check.` }
    ]
    , Action : [
        { Name : 'Multiattack', Text : `The cave fisher makes two attacks with its claws.` },
        { Name : 'Claw', Text : `Melee Weapon Attack: +5 to hit, reach 5 ft., one target.
        Hit: 10 {2d6 + 3) slashing damage.` },
        { Name : 'Filament', Text : `One creature grappled by the cave fisher's adhesive
        filament must make a DC 13 Strength saving throw, provided
        that the target weighs 200 pounds or less. On a failure, the
        target is pulled into an unoccupied space within 5 feet of the
        cave fisher, and the cave fisher makes a claw attack against it as
        a bonus action. Reeling up the target releases anyone else who
        was attached to the filament. Until the grapple ends on the tar-
        get, the cave fisher can't extrude another filament.` }
    ]
    , Reaction : []
    , Legendary : []
    , Items : []
}


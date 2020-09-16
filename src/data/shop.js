import { MAX_LEVEL } from "@/data/experience";
import { INVENTORY_UPGRADES, COMBAT_UPGRADES, JOB_UPGRADES } from "@/data/upgrades";
import {HEAD_SEASON_ONE, HEAD_SEASON_TWO} from '@/data/items/slotHead'

export const SECTIONS = [
	{
		name: "Inventory Expansion",
		purchases: Object.keys(INVENTORY_UPGRADES)
	},
	{
		name: "MegaSeed Servitor",
		purchases: ['seed10', 'seed100', 'seed500', 'seed2000', 'seed5000']
	},
	{
		name: "Job Unlocks",
		purchases: ["unlockFabrication", "unlockTinkering", "unlockChemistry", "unlockCooking", "unlockBartending", "unlockXenobiology", "unlockShitposting", "unlockCargonia","unlockTraitor", "unlockCult", "unlockLing"]
	},
	{
		name: "Job Upgrades",
		purchases: Object.keys(JOB_UPGRADES)
	},
	{
		name: "Combat Upgrades",
		purchases: Object.keys(COMBAT_UPGRADES)
	},
	{
		name: "Gamble-O-Tron",
		purchases: ["supplyCrate", "knifeCrate", "hatCrate", "hatCrate2", "revCrate", "secCrate", "lavaCrate", "syndieCrate",  "cultCrate", "ertCrate", "wizCrate"]
	},
	{
		name: "Clothes Vendo-Matic",
		purchases: ["capeMining", "capeEngineering", "capeFabrication", "capeGraytiding", "capeTinkering", "capeBotany", "capeCooking", "capeBartending", "capeXenobiology", "capeChemistry","capeValid", "capeShitposting"]
	}
]

const SEEDS = {
	seed10: {
		name: "Plant seeds x10",
		description: "For all your botany needs.",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantSeed",
			count: 10
		},
		requiredItems: {
			money: 10 * 50
		}
	},
	seed100: {
		name: "Plant seeds x100",
		description: "For all your botany needs. 5% discount!",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantSeed",
			count: 100
		},
		requiredItems: {
			money: Math.round(100 * 50 * .95)
		}
	},
	seed500: {
		name: "Plant seeds x500",
		description: "For all your botany needs. 10% discount!",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantSeed",
			count: 500
		},
		requiredItems: {
			money: Math.round(500 * 50 * .90)
		}
	},
	seed2000: {
		name: "Plant seeds x2,000",
		description: "For all your botany needs. 15% discount!",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantSeed",
			count: 2000
		},
		requiredItems: {
			money: Math.round(2000 * 50 * .85)
		}
	},
	seed5000: {
		name: "Plant seeds x5,000",
		description: "For all your botany needs. 20% discount!",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantSeed",
			count: 5000
		},
		requiredItems: {
			money: Math.round(5000 * 50 * .8)
		}
	}
}

const JOB_UNLOCKS = {
	unlockCooking: {
		name: "Unlock Cooking",
		description: "Allows you to turn meat and produce into quality foods",
		icon: require('@/assets/art/cooking/icon.png'),
		requiredItems: {
			money: 10000
		},
		upgrade: "cookingUnlocked",
		requiredUpgrades: {
			cookingUnlocked: 0
		},
		hideIfXP: "cooking"
	},
	unlockBartending: {
		name: "Unlock Bartending",
		description: "Allows you to turn power, slimes, and ore into delicious drinks",
		icon: require("@/assets/art/bartending/icon.png"),
		requiredItems: {
			money: 15000
		},
		upgrade: "bartendingUnlocked",
		requiredUpgrades: {
			bartendingUnlocked: 0
		},
		hideIfXP: "bartending"
	},
	unlockFabrication: {
		name: "Unlock Fabrication",
		description: "Allows you to turn raw minerals into ranged weapons and exosuits",
		icon: require('@/assets/art/fabrication/icon.png'),
		requiredItems: {
			glass: 10,
			power: 10,
		},
		upgrade: "fabricationUnlocked",
		requiredUpgrades: {
			fabricationUnlocked: 0
		},
		hideIfXP: "fabrication"
	},
	unlockTinkering: {
		name: "Unlock Tinkering",
		description: "Allows you to turn junk into weapons and armor",
		icon: require('@/assets/art/tinkering/icon.png'),
		requiredItems: {
			junk: 3
		},
		upgrade: "tinkeringUnlocked",
		requiredUpgrades: {
			tinkeringUnlocked: 0
		},
		hideIfXP: "tinkering"
	},
	unlockChemistry: {
		name: "Unlock Chemistry",
		description: "Allows you to turn energy into job-boosting CHEMs and combat-boosting pills",
		icon: require('@/assets/art/chemistry/icon.png'),
		requiredItems: {
			power: 20
		},
		upgrade: "chemistryUnlocked",
		requiredUpgrades: {
			chemistryUnlocked: 0
		},
		hideIfXP: "chemistry"
	},
	unlockXenobiology: {
		name: "Unlock Xenobiology",
		description: "Allows you to raise slimes that can fight alongside you",
		icon: require('@/assets/art/xenobio/icon.gif'),
		requiredItems: {
			money: 25000
		},
		upgrade: "xenobiologyUnlocked",
		requiredUpgrades: {
			xenobiologyUnlocked: 0
		},
		hideIfXP: "xenobiology"
	},
	unlockShitposting: {
		name: "Unlock ???",
		description: "???",
		icon: require('@/assets/art/sidebar/mystery.png'),
		requiredItems: {
			money: 9999999
		},
		upgrade: "shitpostingUnlocked",
		requiredUpgrades: {
			shitpostingUnlocked: 0
		},
		hideIfXP: "shitposting"
	},
	unlockCargonia: {
		name: "Unlock Cargonia",
		description: "Allows you to spend money for minerals and guns",
		icon: require('@/assets/art/jobinfo/cargo_banner.png'),
		requiredItems: {
			antag: 1
		},
		upgrade: "cargoniaUnlocked",
		requiredUpgrades: {
			cargoniaUnlocked: 0
		},
		hideIfXP: "cargonia"
	},
	unlockTraitor: {
		name: "Unlock Traitor",
		description: "Allows you to spend 20 special Telecrystals to kickstart your progression",
		icon: require('@/assets/art/traitor/icon.png'),
		requiredItems: {
			antag: 1
		},
		items: {
			id: "spendTC",
			count: 20
		},
		upgrade: "traitorUnlocked",
		requiredUpgrades: {
			traitorUnlocked: 0
		},
		hideIfXP: "traitor"
	},
	unlockCult: {
		name: "Unlock Cult",
		description: "Allows you to sacrifice health for dark runes and minions",
		icon: require("@/assets/art/cult/Sacrifice_rune.png"),
		requiredItems: {
			antag: 1
		},
		upgrade: "cultUnlocked",
		requiredUpgrades: {
			cultUnlocked: 0
		},
		hideIfXP: "cult"
	},
	unlockLing: {
		name: "Unlock Changeling",
		description: "Allows you to shape meat into regenerative armor",
		icon: require('@/assets/art/ling/icon.png'),
		requiredItems: {
			antag: 1
		},
		upgrade: "lingUnlocked",
		requiredUpgrades: {
			lingUnlocked: 0
		},
		hideIfXP: "ling"
	},
}

const CAPES = {
	capeMining: {
		item: "capeMining",
		description: "Requires max Mining to wear.",
		requiredLevels: {
			mining: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeEngineering: {
		item: "capeEngineering",
		description: "Requires max Engineering to wear.",
		requiredLevels: {
			engineering: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeFabrication: {
		item: "capeFabrication",
		description: "Requires max Fabrication to wear.",
		requiredLevels: {
			fabrication: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeGraytiding: {
		item: "capeGraytiding",
		description: "Requires max Graytiding to wear.",
		requiredLevels: {
			graytiding: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeTinkering: {
		item: "capeTinkering",
		description: "Requires max Tinkering to wear.",
		requiredLevels: {
			tinkering: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeBotany: {
		item: "capeBotany",
		description: "Requires max Botany to wear.",
		requiredLevels: {
			botany: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeCooking: {
		item: "capeCooking",
		description: "Requires max Cooking to wear.",
		requiredLevels: {
			cooking: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeBartending: {
		item: "capeBartending",
		description: "Requires max Bartending to wear.",
		requiredLevels: {
			bartending: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeXenobiology: {
		item: "capeXenobiology",
		description: "Requires max Xenobiology to wear.",
		requiredLevels: {
			xenobiology: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeChemistry: {
		item: "capeChemistry",
		description: "Requires max Chemistry to wear.",
		requiredLevels: {
			chemistry: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeValid: {
		item: "capeValid",
		description: "Requires max Validhunting to wear.",
		requiredLevels: {
			validhunting: MAX_LEVEL
		},
		requiredItems: {
			money: 500000,
			foodMeatH: 250,
			foodMeatZ: 250,
			foodMeatA: 250,
			foot: 5
		}
	},
	capeShitposting: {
		item: "capeShitposting",
		description: "Only the truly elite can handle this.",
		requiredLevels: {
			shitposting: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	}
}

const CRATES = {
	supplyCrate: {
		item: "supplyCrate",
		description: "Nanotrasen can send the supplies YOU need directly to your location with this state of the art drop pod.",
		requiredItems: {
			money: 1000
		}
	},
	knifeCrate: {
		item: "knifeCrate",
		description: "Running with knives might not always make you faster, but you'll look cool and edgy.",
		requiredItems: {
			money: 2500
		}
	},
	hatCrate: {
		item: "hatCrate",
		description: `No Key Required. Hats can not be refunded for scrap. Collect all ${Object.keys(HEAD_SEASON_ONE).length}!`,
		requiredItems: {
			money: 10000
		}
	},
	hatCrate2: {
		item: "hatCrate2",
		description: `Christmas In July. I hope you asked for hats. Collect all ${Object.keys(HEAD_SEASON_TWO).length}!`,
		requiredItems: {
			money: 10000
		}
	},
	revCrate: {
		item: "revCrate",
		description: "Workers fighting for equal pay have stashed supplies for the next time they inevitably need them. Finders Keepers.",
		requiredItems: {
			revParts: 20
		}
	},
	secCrate: {
		item: "secCrate",
		description: "Everything needed to run an effecient internal security organization. Pre-dyed red to help cover those pesky blood stains.",
		requiredItems: {
			boss1Parts: 20
		}
	},
	lavaCrate: {
		item: "lavaCrate",
		description: "Handcrafted materials and relics aquired from the local planetary natives. ",
		requiredItems: {
			exoticParts: 20
		}
	},
	syndieCrate: {
		item: "syndieCrate",
		description: "Syndicate forces have hijacked the droppod system to help you be the murderer you always knew you could be.",
		requiredItems: {
			telecrystal: 20,
		}
	},
	cultCrate: {
		item: "cultCrate",
		description: "If you avert your eyes from the sigils and just reach into the pod you can escape mostly intact.",
		requiredItems: {
			cultParts: 20,
		}
	},
	ertCrate: {
		item: "ertCrate",
		description: "A prize from Nanotrasen for stopping some internal problems, contains even more problems!",
		requiredItems: {
			ertParts: 20,
		}
	},
	wizCrate: {
		item: "wizCrate",
		description: "This magical vending machine is just too arcane to use. It looks like it has a slot to put scrolls in?",
		requiredItems: {
			wizParts: 20,
		}
	},
}

const TICKETS = {
	
	bossTicketReset: {
		name: "Fight Infinite-Timeline Doppelgänger",
		description: "Are you sure you want to summon another to the same timeline?",
		icon: require("@/assets/art/shop/items/tickettear.gif"),
		requiredItems: {
			bluespace: 5,
		},
		enemyId: "doppleganger"
	},
	rev1ticket: {
		name: "Fight 'Head' of Cargo",
		description: "Bother the 'Head' enough to lure him out of the safety of Cargo.",
		icon: require("@/assets/art/combat/enemies/boss/rev1.png"),
		requiredItems: {
			ticket10: 5
		},
		enemyId: "rev1"
	},
	rev2ticket: {
		name: "Fight New Chief Medical Officer",
		description: "Fake an injury in front of the CMO to catch them off guard.",
		icon: require("@/assets/art/combat/enemies/boss/rev2.png"),
		requiredItems: {
			ticket10: 5
		},
		enemyId: "rev2"
	},
	rev3ticket: {
		name: "Fight IPC Research Director",
		description: "Knock on the R&D glass until the RD comes to kick your ass.",
		icon: require("@/assets/art/combat/enemies/boss/rev3_anim.gif"),
		requiredItems: {
			ticket10: 5
		},
		enemyId: "rev3"
	},
	rev4ticket: {
		name: "Fight Agent Provocateur",
		description: "Talk trash on the radio until they come to throw you out an airlock.",
		icon: require("@/assets/art/combat/enemies/boss/rev4.png"),
		requiredItems: {
			ticket10: 5
		},
		enemyId: "rev4"
	},
	sec1ticket: {
		name: "Fight Corrupt Security Officer",
		description: "Attempt breaking into the Sec lockers until you anger Shitsec.",
		icon: require("@/assets/art/combat/enemies/boss/sec-officer.png"),
		requiredItems: {
			ticket1: 5
		},
		enemyId: "sec1"
	},
	sec2ticket: {
		name: "Fight Meddling Detective",
		description: "Track bloody footprints across a crime scene, putting the Detective into a blind rage.",
		icon: require("@/assets/art/combat/enemies/boss/sec-detective.png"),
		requiredItems: {
			ticket1: 5
		},
		enemyId: "sec2"
	},
	sec3ticket: {
		name: "Fight Gulag Warden",
		description: "Breaking your friends out of Perma will incur 'His' wrath...",
		icon: require("@/assets/art/combat/enemies/boss/sec-warden.png"),
		requiredItems: {
			ticket1: 5
		},
		enemyId: "sec3"
	},
	sec4ticket: {
		name: "Fight Anime Inspired Head of Security",
		description: "Make fun of how the HoS acts, making them validhunt YOU.",
		icon: require("@/assets/art/combat/enemies/boss/sec-HOS.png"),
		requiredItems: {
			ticket1: 5
		},
		enemyId: "sec4"
	},
	lava1ticket: {
		name: "Fight Ash Drake",
		description: "Provoke the local wildlife with a blast from your kinetic accellerator.",
		icon: require("@/assets/art/combat/enemies/boss/ash-drake.png"),
		requiredItems: {
			ticket2: 5
		},
		enemyId: "lava1"
	},
	lava2ticket: {
		name: "Fight Bubblegum",
		description: "Make fun of Bubblegum's name. That's it. Bubblegum is sensitive.",
		icon: require("@/assets/art/combat/enemies/boss/bubblegum.gif"),
		requiredItems: {
			ticket2: 5
		},
		enemyId: "lava2"
	},
	lava3ticket: {
		name: "Fight Blood Drunk Miner",
		description: "Drunk is drunk, and on Space Station 13, drunk people are targets.",
		icon: require("@/assets/art/combat/enemies/boss/miner.png"),
		requiredItems: {
			ticket2: 5
		},
		enemyId: "lava3"
	},
	lava4ticket: {
		name: "Fight Legion",
		description: "The Echoing Signal draws you in, but you came prepared... right?",
		icon: require("@/assets/art/combat/enemies/boss/legion3_anim.gif"),
		requiredItems: {
			ticket2: 5
		},
		enemyId: "lava4"
	},
	nuke1ticket: {
		name: "Fight Hasty Recruit",
		description: "This nukie is certainly unprepared. Maybe they still have good loot.",
		icon: require("@/assets/art/combat/enemies/boss/nukeop1.gif"),
		requiredItems: {
			ticket40: 5
		},
		enemyId: "nuke1"
	},
	nuke2ticket: {
		name: "Fight Syndicate Assault Cyborg",
		description: "DIRECTIVE[kill_All.humans] - syndicate",
		icon: require("@/assets/art/combat/enemies/boss/nukeborg_anim.gif"),
		requiredItems: {
			ticket40: 5
		},
		enemyId: "nuke2"
	},
	nuke3ticket: {
		name: "Fight 'Larry' Incendiary",
		description: "Don't be fooled by the armor. He's got a flamethrower, and he's not afraid to use it on you.",
		icon: require("@/assets/art/combat/enemies/boss/OPl6.png"),
		requiredItems: {
			ticket40: 5
		},
		enemyId: "nuke3"
	},
	nuke4ticket: {
		name: "Fight Mechanized Assault Suit",
		description: "And now, the finale.",
		icon: require("@/assets/art/fabrication/mechmauler_anim.gif"),
		requiredItems: {
			ticket40: 5
		},
		enemyId: "nuke4"
	},
	cult1ticket: {
		name: "Fight Proselytizing Cultist",
		description: "New as they may be, they can still give you the Fist of Fury.",
		icon: require("@/assets/art/combat/enemies/boss/cult1_anim.gif"),
		requiredItems: {
			ticket3: 5
		},
		enemyId: "cult1"
	},
	cult2ticket: {
		name: "Fight Devout Neophyte",
		description: "Try to steal the Neophyte's sword, making the Cult notice you.",
		icon: require("@/assets/art/combat/enemies/boss/antag-cultist.png"),
		requiredItems: {
			ticket3: 5
		},
		enemyId: "cult2"
	},
	cult3ticket: {
		name: "Fight Wraith Construct",
		description: "They may be little creatures, but they're quite angry.",
		icon: require("@/assets/art/combat/enemies/boss/cultwraith_anim.gif"),
		requiredItems: {
			ticket3: 5
		},
		enemyId: "cult3"
	},
	cult4ticket: {
		name: "Fight Curate Of Blood",
		description: "You dare challenge the one closest to Nar-Sie?",
		icon: require("@/assets/art/combat/enemies/boss/cult4_anim.gif"),
		requiredItems: {
			ticket3: 5
		},
		enemyId: "cult4"
	},
	ert1ticket: {
		name: "Fight Medical Officer Harrison",
		description: "This doctor has broken his Oath. And he's looking right at you.",
		icon: require("@/assets/art/combat/enemies/boss/ertmed.png"),
		requiredItems: {
			ticket55: 5
		},
		enemyId: "ert1"
	},
	ert2ticket: {
		name: "Fight Engineer James",
		description: "James here will weld you into a locker and kick you around if you don't show him who's boss.",
		icon: require("@/assets/art/combat/enemies/boss/erteng.gif"),
		requiredItems: {
			ticket55: 5
		},
		enemyId: "ert2"
	},
	ert3ticket: {
		name: "Fight Security Officer Lee",
		description: "Shitcurity 9000. All your valid are belong to him.",
		icon: require("@/assets/art/combat/enemies/boss/ertsec.png"),
		requiredItems: {
			ticket55: 5
		},
		enemyId: "ert3"
	},
	ert4ticket: {
		name: "Fight Commander Woodworth",
		description: "Remember 'Captain is Comdom'? Yeah, just apply that here.",
		icon: require("@/assets/art/combat/enemies/boss/ertcom.gif"),
		requiredItems: {
			ticket55: 5
		},
		enemyId: "ert4"
	},
	wizard1ticket: {
		name: "Fight Skeletal Thrall",
		description: "This guy's all bones. Pound it to dust.",
		icon: require("@/assets/art/combat/enemies/boss/wiz-skeleton.png"),
		requiredItems: {
			ticket60: 5
		},
		enemyId: "wizard1"
	},
	wizard2ticket: {
		name: "Fight Magical Holoparasite",
		description: "Purple Guy's looking good.",
		icon: require("@/assets/art/combat/enemies/boss/wiz-stand_anim.gif"),
		requiredItems: {
			ticket60: 5
		},
		enemyId: "wizard2"
	},
	wizard3ticket: {
		name: "Fight Wielder of True Light",
		description: "The hammer is for show. So is the performance you're gonna put on clowning on this dunce.",
		icon: require("@/assets/art/combat/enemies/boss/wiz-moth_anim.gif"),
		requiredItems: {
			ticket60: 5
		},
		enemyId: "wizard3"
	},
	wizard4ticket: {
		name: "Fight THE Wizard",
		description: "Who is this guy again?",
		icon: require("@/assets/art/combat/enemies/boss/antag-wizard.png"),
		requiredItems: {
			ticket60: 5
		},
		enemyId: "wizard4"
	},
}

export const PURCHASES = {
	...INVENTORY_UPGRADES,
	...SEEDS,
	...CAPES,
	...JOB_UNLOCKS,
	...COMBAT_UPGRADES,
	...JOB_UPGRADES,
	...CRATES,
	...TICKETS
}
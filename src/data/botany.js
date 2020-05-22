export const ITEMS = {
	plantseed: {
		name: "Plant Seeds",
		sellPrice: 25,
		icon: require("@/assets/art/botany/seed.png"),
	},
	potato: {
		name: "Potato",
		sellPrice: 1,
		icon: require("@/assets/art/botany/PlantPotato.png"),
		healAmount: 5,
		stats: {
			maxHealth: 0,
			evasion: -5,
			precision: 0,
			power: 5,
		},
	},
	tomato: {
		name: "Tomato",
		sellPrice: 2,
		icon: require("@/assets/art/botany/PlantTomato.png"),
		healAmount: 5,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: 5,
			power: -5,
		},
	},
	banana: {
		name: "Banana",
		sellPrice: 5,
		icon: require("@/assets/art/botany/PlantBanana.png"),
		healAmount: 5,
		stats: {
			maxHealth: 0,
			evasion: 5,
			precision: -5,
			power: 0,
		},
	},
	flowersun: {
		name: "Sunflower",
		sellPrice: 8,
		icon: require("@/assets/art/botany/PlantFlowersun.png"),
		healAmount: 5,
		stats: {
			maxHealth: 0,
			evasion: 5,
			precision: 0,
			power: -5,
		},
	},
	mushroom: {
		name: "Glowshroom",
		sellPrice: 10,
		icon: require("@/assets/art/botany/PlantShroomglow.png"),
		healAmount: 5,
		stats: {
			maxHealth: 0,
			evasion: -5,
			precision: 5,
			power: 0,
		},
	},
	pepper: {
		name: "Hot Pepper",
		sellPrice: 10,
		icon: require("@/assets/art/botany/PlantPepperhot.png"),
		healAmount: 5,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: -5,
			power: 5,
		},
	},
	potatobattery: {
		name: "Potato Battery",
		sellPrice: 12,
		icon: require("@/assets/art/botany/PlantPotatobattery.png"),
		healAmount: 10,
		stats: {
			maxHealth: 0,
			evasion: -5,
			precision: 0,
			power: 10,
		},
	},
	tomatoblue: {
		name: "Blue Tomato",
		sellPrice: 23,
		icon: require("@/assets/art/botany/PlantTomatoblue.png"),
		healAmount: 10,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: 10,
			power: -5,
		},
	},
	bananamime: {
		name: "...",
		sellPrice: 27,
		icon: require("@/assets/art/botany/PlantBananamime.png"),
		healAmount: 10,
		stats: {
			maxHealth: 0,
			evasion: 10,
			precision: -5,
			power: 0,
		},
	},
	flowermoon: {
		name: "Moonflower",
		sellPrice: 30,
		icon: require("@/assets/art/botany/PlantFlowermoon.png"),
		healAmount: 10,
		stats: {
			maxHealth: 0,
			evasion: 10,
			precision: 0,
			power: -5,
		},
	},
	mushroomred: {
		name: "Glowcap",
		sellPrice: 10,
		icon: require("@/assets/art/botany/PlantShroomred.png"),
		healAmount: 10,
		stats: {
			maxHealth: 0,
			evasion: -5,
			precision: 10,
			power: 0,
		},
	},
	peppercold: {
		name: "Ice Pepper",
		sellPrice: 44,
		icon: require("@/assets/art/botany/PlantPeppercold.png"),
		healAmount: 10,
		stats: {
			maxHealth: 0,
			evasion: 0,
			precision: -5,
			power: 10,
		},
	},
	orange: {
		name: "Orange",
		sellPrice: 12,
		icon: require("@/assets/art/botany/PlantOrange.png"),
		healAmount: 15,
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 0,
			power: 10,
		},
	},
	tomatobluespace: {
		name: "Bluespace Tomato",
		sellPrice: 23,
		icon: require("@/assets/art/botany/PlantTomatobluespace_anim.gif"),
		healAmount: 15,
		stats: {
			maxHealth: 5,
			evasion: 0,
			precision: 10,
			power: -5,
		},
	},
	bananablue: {
		name: "Blue Banana",
		sellPrice: 27,
		icon: require("@/assets/art/botany/PlantBananablue.png"),
		healAmount: 15,
		stats: {
			maxHealth: 5,
			evasion: 10,
			precision: -5,
			power: 0,
		},
	},
	flowernova: {
		name: "Novaflower",
		sellPrice: 30,
		icon: require("@/assets/art/botany/PlantFlowernova.png"),
		healAmount: 15,
		stats: {
			maxHealth: 5,
			evasion: 10,
			precision: 0,
			power: -5,
		},
	},
	mushroomshadow: {
		name: "Shadowshroom",
		sellPrice: 10,
		icon: require("@/assets/art/botany/PlantShroomshadow.png"),
		healAmount: 15,
		stats: {
			maxHealth: 5,
			evasion: -5,
			precision: 10,
			power: 0,
		},
	},
	pepperghost: {
		name: "Ghost Pepper",
		sellPrice: 44,
		icon: require("@/assets/art/botany/PlantPepperghost.png"),
		healAmount: 15,
		stats: {
			maxHealth: 5,
			evasion: 0,
			precision: -5,
			power: 10,
		},
	},
	orange3d: {
		name: "Multidimensional Orange",
		sellPrice: 12,
		icon: require("@/assets/art/botany/PlantOrange3d_anim.gif"),
		healAmount: 20,
		stats: {
			maxHealth: -5,
			evasion: 5,
			precision: 5,
			power: 5,
		},
	},
	tomatokiller: {
		name: "Killer Tomato",
		sellPrice: 23,
		icon: require("@/assets/art/botany/PlantTomatokiller.png"),
		healAmount: 5,
		stats: {
			maxHealth: -10,
			evasion: 10,
			precision: 10,
			power: 10,
		},
	}
};

export const ACTIONS = {
	growPotato: {
		time: 1.5,
		item: "potato",
		icon: require("@/assets/art/botany/TrayPotato.gif"),
		xp: 5,
		requiredLevel: 1,
		requiredItems: {plantseed: 1}
	},
	growTomato: {
		time: 1.5,
		item: "tomato",
		icon: require("@/assets/art/botany/TrayTomato.gif"),
		xp: 5,
		requiredLevel: 1,
		requiredItems: {plantseed: 1}
	},
	growBanana: {
		time: 1.5,
		item: "banana",
		icon: require("@/assets/art/botany/TrayBanana.gif"),
		xp: 5,
		requiredLevel: 8,
		requiredItems: {plantseed: 1}
	},
	growFlowersun: {
		time: 1.5,
		item: "flowersun",
		icon: require("@/assets/art/botany/TrayFlowersun.gif"),
		xp: 5,
		requiredLevel: 8,
		requiredItems: {plantseed: 1}
	},
	growMushroom: {
		time: 1.5,
		item: "mushroom",
		icon: require("@/assets/art/botany/TrayShroomglow.gif"),
		xp: 5,
		requiredLevel: 16,
		requiredItems: {plantseed: 1}
	},
	growPepper: {
		time: 1.5,
		item: "pepper",
		icon: require("@/assets/art/botany/TrayPepperhot.gif"),
		xp: 5,
		requiredLevel: 16,
		requiredItems: {plantseed: 1}
	},
	growPotatobattery: {
		time: 1.5,
		item: "potatobattery",
		icon: require("@/assets/art/botany/TrayPotato.gif"),
		xp: 5,
		requiredLevel: 23,
		requiredItems: {plantseed: 2}
	},
	growTomatoblue: {
		time: 1.5,
		item: "tomatoblue",
		icon: require("@/assets/art/botany/TrayTomatoblue.gif"),
		xp: 5,
		requiredLevel: 23,
		requiredItems: {plantseed: 2}
	},
	growBananamime: {
		time: 1.5,
		item: "bananamime",
		icon: require("@/assets/art/botany/TrayBananamime.gif"),
		xp: 5,
		requiredLevel: 29,
		requiredItems: {plantseed: 2}
	},
	growFlowermoon: {
		time: 1.5,
		item: "flowermoon",
		icon: require("@/assets/art/botany/TrayFlowermoon.gif"),
		xp: 5,
		requiredLevel: 29,
		requiredItems: {plantseed: 2}
	},
	growMushroomred: {
		time: 1.5,
		item: "mushroomred",
		icon: require("@/assets/art/botany/TrayShroomred.gif"),
		xp: 5,
		requiredLevel: 34,
		requiredItems: {plantseed: 2}
	},
	growPeppercold: {
		time: 1.5,
		item: "peppercold",
		icon: require("@/assets/art/botany/TrayPeppercold.gif"),
		xp: 5,
		requiredLevel: 34,
		requiredItems: {plantseed: 2}
	},
	growOrange: {
		time: 1.5,
		item: "orange",
		icon: require("@/assets/art/botany/TrayOrange.gif"),
		xp: 5,
		requiredLevel: 38,
		requiredItems: {plantseed: 3}
	},
	growTomatobluespace: {
		time: 1.5,
		item: "tomatobluespace",
		icon: require("@/assets/art/botany/TrayTomatobluespace.gif"),
		xp: 5,
		requiredLevel: 38,
		requiredItems: {plantseed: 3}
	},
	growBananablue: {
		time: 1.5,
		item: "bananablue",
		icon: require("@/assets/art/botany/TrayBananablue.gif"),
		xp: 5,
		requiredLevel: 42,
		requiredItems: {plantseed: 3}
	},
	growFlowernova: {
		time: 1.5,
		item: "flowernova",
		icon: require("@/assets/art/botany/TrayFlowernova.gif"),
		xp: 5,
		requiredLevel: 42,
		requiredItems: {plantseed: 3}
	},
	growMushroomshadow: {
		time: 1.5,
		item: "mushroomshadow",
		icon: require("@/assets/art/botany/TrayShroomshadow.gif"),
		xp: 5,
		requiredLevel: 46,
		requiredItems: {plantseed: 3}
	},
	growPepperghost: {
		time: 1.5,
		item: "pepperghost",
		icon: require("@/assets/art/botany/TrayPepperghost.gif"),
		xp: 5,
		requiredLevel: 46,
		requiredItems: {plantseed: 3}
	},
	growOrange3d: {
		time: 1.5,
		item: "Orange3d",
		icon: require("@/assets/art/botany/TrayOrange.gif"),
		xp: 5,
		requiredLevel: 50,
		requiredItems: {plantseed: 5}
	},
	growTomatokiller: {
		time: 1.5,
		item: "tomatokiller",
		icon: require("@/assets/art/botany/TrayTomatokiller.gif"),
		xp: 5,
		requiredLevel: 50,
		requiredItems: {plantseed: 5}
	},
}

export const JOB = {
	id: "botany",
	name: "Botany",
	icon: require("@/assets/art/botany/icon.png"),
	color: "#3df000",
	items: ITEMS
}
export default [
	{
		name: "Arrival Lounge",
		icon: require("@/assets/art/combat/zones/departures.png"),
		enemies: ["janitor", "chaplain", "miner","playershop"]
	},
	{
		name: "Maintenance",
		icon: require("@/assets/art/combat/zones/maint.png"),
		enemies: ["mouse", "lostscientist", "cargoTech","fugitive"]
	},
	{
		name: "Head of Personnel Line",
		icon: require("@/assets/art/combat/zones/hopline.png"),
		enemies: ["Ian", "paperworkhop", "hopcurity","plasmarobo"]
	},
	{
		name: "Dorms 4",
		icon: require("@/assets/art/combat/zones/dorms4.png"),
		enemies: ["catgirl", "traitor", "braindead","chemist"]
	},
	{
		name: "Engineering",
		icon: require("@/assets/art/combat/zones/engineering.png"),
		enemies: ["redslime", "flamingatmostech", "goodengineer", "badengineer"]
	},
	{
		name: "Showroom",
		icon: require("@/assets/art/combat/zones/showroom.png"),
		enemies: ["bee", "mime", "badclown", "goodclown"]
	},
	{
		name: "Kitchen",
		icon: require("@/assets/art/combat/zones/kitchen.png"),
		enemies: ["pete", "cannibal","bartender", "botanist"]
	},

	{
		name: "Medical",
		icon: require("@/assets/art/combat/zones/medical.png"),
		enemies: ["surgeon", "runtime", "cluelessdoctor", "hulk"]
	},
	{
		name: "Bridge",
		icon: require("@/assets/art/combat/zones/bridge.png"),
		enemies: ["renault", "axeassistant", "captain", "locker"]
	},
	{
		name: "Virology",
		icon: require("@/assets/art/combat/zones/viro.png"),
		enemies: ["monkey", "afkviro", "gorilla", "movingviro"]
	},
	{
		name: "Science",
		icon: require("@/assets/art/combat/zones/robotics.png"),
		enemies: ["mech", "techpriest", "minibot", "ayyyyy"]
	},
	{
		name: "AI Core",
		icon: require("@/assets/art/combat/zones/core.png"),
		enemies: ["securitybot","drone","turrets", "AI"]
	},
	{
		name: "Biohazard Outbreak",
		icon: require("@/assets/art/combat/zones/zombies.png"),
		enemies: ["zombie1","zombie2", "zombie3", "zombie4"]
	},
	{
		name: "Worker Strike",
		icon: require("@/assets/art/combat/zones/revolution.png"),
		ticketIcon: require("@/assets/art/validhunting/doc10.png"),
		ticketName: "Proletariat Propaganda",
		enemies: ["rev1", "rev2", "rev3", "rev4"],
		boss: true,
		purchases: ["rev1ticket", "rev2ticket", "rev3ticket", "rev4ticket"]
	},
	{
		name: "Brutal Security",
		icon: require("@/assets/art/combat/zones/security.png"),
		ticketIcon: require("@/assets/art/validhunting/doc20.png"),
		ticketName: "Facist Propaganda",
		enemies: ["sec1", "sec2", "sec3", "sec4"],
		boss: true,
		purchases: ["sec1ticket", "sec2ticket", "sec3ticket", "sec4ticket"]
	},
	{
		name: "Primordial Planet",
		icon: require("@/assets/art/combat/zones/lavaland.gif"),
		ticketIcon: require("@/assets/art/validhunting/doc30.png"),
		ticketName: "Local Fauna Propaganda",
		enemies: ["lava1", "lava2", "lava3", "lava4"],
		boss: true,
		purchases: ["lava1ticket", "lava2ticket", "lava3ticket", "lava4ticket"]
	},
	{
		name: "Syndicate Nuclear Assault Team",
		icon: require("@/assets/art/combat/zones/nuke.png"),
		ticketIcon: require("@/assets/art/validhunting/doc40.png"),
		ticketName: "Security Propaganda",
		enemies: ["nuke1", "nuke2", "nuke3", "nuke4"],
		boss: true,
		purchases: ["nuke1ticket", "nuke2ticket", "nuke3ticket", "nuke4ticket"]
	},
	{
		name: "Bloodsworn Cultists",
		icon: require("@/assets/art/combat/zones/cult.gif"),
		ticketIcon: require("@/assets/art/validhunting/doc50.png"),
		ticketName: "Religious Propaganda",
		enemies: ["cult1", "cult2", "cult3", "cult4"],
		boss: true,
		purchases: ["cult1ticket", "cult2ticket", "cult3ticket", "cult4ticket"]
	},
	{
		name: "Rogue Nanotrasen Team",
		icon: require("@/assets/art/combat/zones/ert.png"),
		ticketIcon: require("@/assets/art/validhunting/doc55.png"),
		ticketName: "Traitorous Propaganda",
		enemies: ["ert1", "ert2", "ert3", "ert4"],
		boss: true,
		purchases: ["ert1ticket", "ert2ticket", "ert3ticket", "ert4ticket"]
	},
	{
		name: "Wizard Federation 'Diplomats'",
		icon: require("@/assets/art/combat/zones/traitor.gif"),
		ticketIcon: require("@/assets/art/validhunting/doc60.png"),
		ticketName: "Casualty Propaganda",
		enemies: ["wizard1", "wizard2", "wizard3", "wizard4"],
		boss: true,
		purchases: ["wizard1ticket", "wizard2ticket", "wizard3ticket", "wizard4ticket"]
	},
	{
		name: "Tear in the Fabric of Reality",
		icon: require("@/assets/art/combat/zones/tear.gif"),
		enemies: ["doppleganger"],
		ticketIcon: require("@/assets/art/mining/SheetBluespace.png"),
		ticketName: "Bluespace Crystals",
		boss: true,
		purchases: ["bossTicketReset"]
	},
	// {
	// 	name: "Debug Land",
	// 	icon: require("@/assets/art/debug/banner.png"),
	// 	enemies: ["debugA", "debugB", "debugC", "debugD", "debugE"]
	// }
]
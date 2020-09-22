# (09/XX/2020) Update 1.0.0

## Game Changes:
- Added Mech weapons
- Added Mech add-ons

## Code Changes:
- Reverted SSIdle `PR #250` (Introduces dymanic colour shifting on healthbar by *Corsaka*)
- Merged SSIdle `PR #248` (Health Colors Revamp by *remona-minett*)

## SSIdle Compatibility Report:
- Import: Fully compatible (100%)
    - All SSIdle items are valid in CSIdle.
    - **WARNING:** You will be unable to reacquire the following items if you sell or lose them in CSIdle.
        - Mech Mounted Teleporter
        - Elusive Positronic Upgrade
- Export: Mostly compatible (90%)
    - The following items **ARE NOT VALID** in SSIdle and could corrupt your game if you possess them:
        - Exosuit Repair Drone
        - Exosuit Thruster Module
        - Exosuit Mousetrap Launcher 
        - Exosuit Grenade Launcher
        - Exosuit Shotgun
        - Exosuit Assault Rifle
        - Exosuit Sniper Rifle
        - Exosuit Boxing Glove
        - Exosuit Plasma Cutter
        - Exosuit Ion Rifle
        - 

# (09/20/2020) Update 1.0.0 Beta 1

## Game Changes:
- Now unobtainable: Mech Mounted Teleporter
- Now unobtainable: Elusive Positronic Upgrade
- The popup is now actually "dark" in dark mode.

## Code Changes:
- `nocomplete: true` hides item from game completion log
- `rarity: "common", "uncommon", ...` adds rarity label to item popover

## SSIdle Compatibility Report:
- Import: Fully compatible (100% + 1 warning)
    - All SSIdle items are valid in CSIdle.
    - **WARNING:** You will be unable to reacquire the following items if you sell or lose them in CSIdle.
        - Mech Mounted Teleporter
        - Elusive Positronic Upgrade
- Export: Fully compatible (100%)
    - All CSIdle items are valid in SSIdle.
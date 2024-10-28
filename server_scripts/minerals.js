ServerEvents.recipes(event => {

    event.custom(
        {
            "type": "immersiveengineering:mineral_mix",
            "ores": [
            {
                "chance": 1,
                "output": {
                "item": "kubejs:dolomite"
                }
            }
            ],
            "spoils": [
            {
                "chance": 0.2,
                "output": {
                "item": "minecraft:gravel"
                }
            },
            {
                "chance": 0.5,
                "output": {
                "item": "minecraft:cobblestone"
                }
            },
            {
                "chance": 0.3,
                "output": {
                "item": "minecraft:cobbled_deepslate"
                }
            }
            ],
            "dimensions": [
            "minecraft:overworld"
            ],
            "weight": 2500,
            "fail_chance": 0.05
        }


    ).id('kubejs:troll')

})
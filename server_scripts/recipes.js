// priority: 0

// Visit the wiki for more info - https://kubejs.com/

ServerEvents.recipes(event => {
    // Removing recipes
    event.remove({ output: "minecraft:stone_pickaxe"})
    event.remove({output: "mekanism:alloy_infused"})
    event.remove({output: "mekanism:alloy_reinforced"})
    event.remove({output: "mekanism:alloy_atomic"})
    event.remove({not: {mod: `ad_astra`}, output: "immersiveengineering:insulating_glass"})
    event.remove({output: "ad_astra:etrionic_blast_furnace"})

    
    event.remove(
        {
            not: 
            [{mod: 'mekanism'}, {mod: 'immersive_engineering'}],
             output: `mekanism:ingot_osmium` 
        }
    )

    // Crafting Table Recipes

    // Etrionic Blast Furnace
    event.shaped('1x ad_astra:etrionic_blast_furnace', [// arg 1: output
        'A A', 
        'DCD', // arg 2: the shape (array of strings)
        'EBE'  
      ], {
        A: '#forge:plates/steel', 
        B: 'mekanism:ingot_osmium',  //arg 3: the mapping object
        C: 'minecraft:blast_furnace',   
        D: 'immersiveengineering:rs_engineering',
        E: 'immersiveengineering:radiator'
      }
    )

    // Insulating Glass Recipe
    event.custom(
        {
            "type": "ad_astra:alloying",
            "cookingtime": 100,
            "energy": 20,
            "ingredients": [
              {
                "item": "minecraft:sand"
              },
              {
                "tag": "#forge:stone"
              },
              {
                "item": "minecraft:clay_ball"
              },
              {
                "item": "kubejs:dolomite"
              }
            ],
            "result": {
              "count": 3,
              "id": "immersiveengineering:insulating_glass"
            }
          }
        


    )

    // Basic Control Circuit Recipe
    event.custom({
      "type": "immersiveengineering:blueprint",
      "category": "components",
      "inputs": [
        {
          "tag": "immersiveengineering:insulating_glass"
        },
        {
          "tag": "mekanism:ingot_osmium"
        },
        {
          "tag": "forge:dusts/redstone"
        }
      ],
      "result": {
        "Count": 1,
        "id": "mekanism:basic_control_circuit"
      }
    })
  
        
})
console.info('Hello, World! (Loaded server scripts)')


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
  event.remove([{ type: 'minecraft:smelting', output: 'mekanism:ingot_osmium' }, { type: 'minecraft:blasting', output: 'mekanism:ingot_osmium' }])
  event.remove([{ type: "ad_astra:alloying", output: "ad_astra:steel_ingot"}])

  
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
              "item": "minecraft:stone"
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


// Infused Alloy Recipe   
  event.custom(
    {
      "type": "ad_astra:alloying",
      "cookingtime": 150,
      "energy": 50,
      "ingredients": [
        {
          "tag": "ad_astra:desh_ingots"
        },
        {
          "tag": "forge:dusts/redstone"
        }
      ],
      "result": {
        "count": 1,
        "id": "mekanism:alloy_infused"
      }
    }


)

// Reinforced Alloy Recipe
event.custom(
  {
    "type": "ad_astra:alloying",
    "cookingtime": 250,
    "energy": 100,
    "ingredients": [
      {
        "tag": "ad_astra:ostrum_ingots"
      },
      {
        "item": 'ad_astra:ice_shard'
      }
    ],
    "result": {
      "count": 1,
      "id": "mekanism:alloy_reinforced"
    }
  }
)


// Steel Ingot Recipe
event.custom(
  {
    "type": "ad_astra:alloying",
    "cookingtime": 150,
    "energy": 60,
    "ingredients": [
      {
        "item": "minecraft:iron_ingot"
      },
      {
        "item": "mekanism:enriched_carbon"
      }
    ],
    "result": {
      "count": 1,
      "id": "mekanism:ingot_steel"
    }
  }
)
// Enriched carbon recipe
event.custom(
  {
    "type": "ad_astra:alloying",
    "cookingtime": 120,
    "energy": 30,
    "ingredients": [
      {
        "item": "minecraft:coal"
      },
      {
        "item": "minecraft:charcoal"
      }
    ],
    "result": {
      "count": 1,
      "id": "mekanism:enriched_carbon"
    }
  }
)
})





console.info('Hello, World! (Loaded server scripts)')


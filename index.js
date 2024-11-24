const maxHP = (entity) => ~~entity.entity?.func_110140_aT()?.func_111152_a('generic.maxHealth')?.func_111125_b()
const hp = (entity) => ~~entity.entity?.func_110143_aJ()
const addCommas = (num) => num.toFixed(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",")

let ash = null
register("step", () => {
    World.getAllEntitiesOfType(net.minecraft.entity.monster.EntityBlaze).forEach(it => {
        if (it.getName() !== "Dinnerbone") return
        if (maxHP(it) !== 50_000_000) return

        ash = it
    })
}).setFps(1)
register("worldUnload", () => ash = null)


register("renderWorld", () => {
    if (!ash) return
    Tessellator.drawString(addCommas(hp(ash)), -484.5, 140, -1015.5)
})
import { dashboardView } from "./views/dashboardView"
import { initView } from "./views/initView"
import { JSONFilePreset } from "lowdb/node"

const main = async () => {
    try {
        const db = await JSONFilePreset("db.json", { username: "" })
        console.log(db.data.username)
        if (!db.data.username) {
            await initView()
        } else {
            await dashboardView()
        }
    } catch (error) {
        console.log(error)
    }

}

main()


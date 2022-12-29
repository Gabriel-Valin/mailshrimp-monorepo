import { app } from "./app";
import {ENVIROMENT_CONFIGS} from "./config"


app.listen(ENVIROMENT_CONFIGS.port, () => console.log(`Is up on PORT ${ENVIROMENT_CONFIGS.port}`))
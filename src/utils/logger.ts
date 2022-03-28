// Logs data to the console in a clean and readable way
import logger from "pino";

const log = logger({
    prettyPrint: true,
    base:{
        pid: false
    },

});

export default log;
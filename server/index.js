const {register, login} = require("./controllers/auth.controller")
const dashboardController = require("./controllers/dashboard.controller")

const app = express();

app.use(express.json());

app.post("/register", register);
app.post("/login", login);
app.use("/dashboard", dashboardController)

module.exports = app;
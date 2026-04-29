const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
const users = require("./routes/user.js");
const posts = require("./routes/post.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser("secretcode"));

app.use(session({
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

// Root Route
app.get("/", (req, res) => {
    res.send("Server is running!..");
});

// Send Cookies Route
app.get("/getcookies", (req, res) => {
    res.cookie("greet", "hello");
    res.send("sent you some cookies!");
});

// Read Cookies Route
app.get("/greet", (req, res) => {
    let { greet = "anonymous" } = req.cookies;
    res.send(`Hi, ${greet}!`);
});

// Send Signed Cookie Route
app.get("/getsignedcookie", (req, res) => {
    res.cookie("made-in", "India", { signed: true });
    res.send("signed cookie sent");
});

// Verify Signed Cookie Route
app.get("/verify", (req, res) => {
    console.dir(req.signedCookies);
    res.send(req.signedCookies);
});

// Test Session Route
app.get("/reqcount", (req, res) => {
    if (req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send(`You sent a request ${req.session.count} times`);
});

// Register Route
app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    req.flash("success", "user registered successfully!");
    res.redirect("/hello");
});

// Hello Route
app.get("/hello", (req, res) => {
    res.render("page.ejs", { name: req.session.name });
});

// Use the router files
app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

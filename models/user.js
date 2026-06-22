const fs = require("fs");
const path = require("path");

const usersFile = path.join(__dirname, "../public/users.json");

function readUsers() {
  const data = fs.readFileSync(usersFile, "utf-8");
  return JSON.parse(data);
}

function writeUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

function login(req, res) {
  console.log("🔥 LOGIN API HIT");
  console.log("BODY:", req.body);

  const { email, password } = req.body;

  const users = readUsers();

  const user = users.find(
    (u) =>
      u.email === email.trim() &&
      u.password === password.trim()
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ email: user.email });
}

function signup(req, res) {
  const { email, password } = req.body;
  const users = readUsers();

  if (users.find((u) => u.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ email, password });
  writeUsers(users);

  res.json({ message: "Signup successful" });
}

module.exports = { login, signup };
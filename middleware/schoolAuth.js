const jwt = require("jsonwebtoken");

// Middleware for protected pages
function schoolAuth(req, res, next) {
  const token = req.cookies && req.cookies.SchoolToken;
  if (!token) return res.redirect("/school/login");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.school = decoded;
    next();
  } catch (err) {
    return res.redirect("/school/login");
  }
}

// Middleware for login/register pages
function redirectIfAuthenticated(req, res, next) {
  const token = req.cookies && req.cookies.SchoolToken;
  if (!token) return next();

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return res.redirect("/school/dashboard");
  } catch (err) {
    return next();
  }
}

module.exports = { schoolAuth, redirectIfAuthenticated };

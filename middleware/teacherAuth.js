const jwt = require("jsonwebtoken");

// Middleware to protect teacher-only pages
function teacherAuth(req, res, next) {
  const token = req.cookies && req.cookies.TeacherToken;
  if (!token) return res.redirect("/teacher/login");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.teacher = decoded; // attach decoded info to request
    next();
  } catch (err) {
    return res.redirect("/teacher/login");
  }
}

// Middleware to redirect already logged-in teachers away from login/register pages
function redirectIfTeacherAuthenticated(req, res, next) {
  const token = req.cookies && req.cookies.TeacherToken;
  if (!token) return next();

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return res.redirect("/teacher/dashboard"); // already logged in
  } catch (err) {
    return next();
  }
}

module.exports = { teacherAuth, redirectIfTeacherAuthenticated };

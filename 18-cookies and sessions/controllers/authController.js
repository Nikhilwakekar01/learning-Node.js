const getLogin = (req, res, next) => {
  res.render("auth/login", {
    pageTitle: "Login",
    currentPage: "login",
    isLoggedIn: false,
  });
};

const postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  // res.cookie("isLoggedIn", true);
  // req.isLoggedIn = true;
  res.redirect("/");
};
const postLogOut = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};

module.exports = { getLogin, postLogin, postLogOut };

const withAuth = (req, res, next) => {
  // TODO: Add a comment describing the functionality of this if statement
  // When sessin ends or when user logged-out redirect the page with login button
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;

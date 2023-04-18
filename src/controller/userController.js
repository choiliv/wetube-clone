
export const join = (req, res) => res.render("join", {pageTitle: "Join"});
export const login = (req, res) => res.render("login", {pageTitle: "Login"});
export const profile = (req, res) => res.render("userProfile", {pageTitle: "Profile"});

export const editProfile = (req, res) => res.render("editUser", {pageTitle: "Edit User"});


export const home = (req, res) => res.render("home", {pageTitle: "Home"});
export const trending = (req, res) => res.render("trending", {pageTitle: "Trending"});
export const newStory = (req, res) => res.render("new", {pageTitle: "New Story"});
export const see = (req, res) => res.render("see", {pageTitle: "See"});
export const edit = (req, res) => res.render("editStory", {pageTitle: "Edit Story"});
export const remove = (req, res) => res.render("removeStory", {pageTitle: "Remove Story"});


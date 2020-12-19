import Bread from "../../models/Bread";

const homeController = (req, res) => {
    res.render("screens/home");
};

const breadController = (req, res) => {
    const result = await Bread.find({}, {});

    res,render("screens/bread", { bread: result });
};

export default globalController = {
    homeController,
    breadController,
};
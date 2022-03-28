const shopdb = require("../models/shopdb");
const loginHandler = require("../util/loginHandler");

function getUser() {
    const email = loginHandler.getUserEmail();
    let name = "";
    if (email) {
        name = email.split("@")[0];
    }
    return [name, email];
}

exports.getPhones = (req, res, next) => {
    const [name, email] = getUser();

    shopdb
        .getProducts("phone")
        .then(([products]) => {
            res.render("pages/phones", {
                products: products,
                name: name,
                email: email,
            });
        })
        .catch((err) => {
            console.log(err);
            res.render(error);
        });
};

exports.getLaptop = (req, res, next) => {
    const [name, email] = getUser();

    shopdb
        .getProducts("laptop")
        .then(([products]) => {
            res.render("pages/laptop", {
                products: products,
                name: name,
                email: email,
            });
        })
        .catch((err) => {
            console.log(err);
            res.render(error);
        });
};

exports.getDslr = (req, res, next) => {
    const [name, email] = getUser();

    shopdb
        .getProducts("cam")
        .then(([products]) => {
            res.render("pages/dslr", {
                products: products,
                name: name,
                email: email,
            });
        })
        .catch((err) => {
            console.log(err);
            res.render(error);
        });
};

exports.getShoes = (req, res, next) => {
    const [name, email] = getUser();

    shopdb
        .getProducts("shoes")
        .then(([products]) => {
            res.render("pages/shoes", {
                products: products,
                name: name,
                email: email,
            });
        })
        .catch((err) => {
            console.log(err);
            res.render(error);
        });
};

exports.getclothes = (req, res, next) => {
    const [name, email] = getUser();

    shopdb
        .getProducts("clothes")
        .then(([products]) => {
            res.render("pages/clothes", {
                products: products,
                name: name,
                email: email,
            });
        })
        .catch((err) => {
            console.log(err);
            res.render(error);
        });
};

exports.buynow = async (req, res, next) => {
    const id = req.body.id;
    const email = req.body.email;
    const response = await shopdb.buyNow(email, id);
    let message = "";
    if (response) {
        message = "all done";
    } else {
        message = "it exists";
    }
    res.json({ message: message });
};

exports.addtocart = async (req, res, next) => {
    const id = req.body.id;
    const email = req.body.email;
    const response = await shopdb.addTOCart(email, id);
    let message = "";
    if (!response) {
        message = "item exsits";
    } else {
        message = "all good";
    }
    res.json({ message: message });
};

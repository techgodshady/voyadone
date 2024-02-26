const express = require("express");
const app = express();
const { pool } = require("./db");
const bcrypt = require('bcrypt');
const session = require('express-session');
const flash = require('express-flash');
const passport = require("passport");
const path = require('path');
const mysql = require("mysql");

const initializePassport = require("./passportConfig");

initializePassport(passport);


const PORT = process.env.PORT || 7000;


app.use(express.static(path.join(__dirname, 'public')));

app.use('/public', express.static('public'))
app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, 'views/user')]);
app.use('/Voya', express.static(path.join(__dirname, 'views', 'Voya')));



app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");



app.use(session({
    secret: '674857n65dmgt3h7528s6hf6g664grhxmfb738hfp3f3rg35cy57n',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());


app.get("/register", checkAuthenticated, (req, res) => {
    res.render("register");
});


const novice_plan = "Novice Plan - 30 days | 0.54% daily Profit | Minimum Deposit : $5,000"

const professional_plan = "Professional Plan - 30 days | 0.79% daily Profit | Minimum Deposit : $12,000"

const expert_plan = "Expert Plan - 30 days | 1.20% daily Profit | Minimum Deposit : $25,000"

const gold_plan = "Gold Plan - 30 days | 1.5% daily Profit | Minimum Deposit : $50,000"

const platinum_plan = "Platinum Plan - 30 days | 1.9% daily Profit | Minimum Deposit : $100,000"






app.get("/index", checkAuthenticated, (req, res) => {
    res.redirect("/login");
});

app.get("/login", checkAuthenticated, (req, res) => {
    res.render("login");
});


app.get("/", checkAuthenticated, (req, res) => {
    res.redirect("/login");
});

app.get("/forgot-password", checkAuthenticated, (req, res) => {
    res.render("forgot-password");


});

app.get("/user/dashboard", checkNotAuthenticated, (req, res) => {
    res.render("dashboard", { user: req.user.first_name,
    active_investment : req.user.active_investment,
    total_bonuses : req.user.total_bonuses,
    available_balance : req.user.available_balance,
    total_withdrawal: req.user.total_withdrawal });
});


// app.get("/user/payment", checkNotAuthenticated, (req, res) => {
//     res.render("payment", { user: req.user.first_name});
// });


app.get("/user/vlock", checkNotAuthenticated, (req, res) => {
    res.render("vlock", { user: req.user.first_name });
});

app.get("/user/history", checkNotAuthenticated, (req, res) => {
    res.render("history", { user: req.user.first_name });
});
app.get("/user/invest", checkNotAuthenticated, (req, res) => {
    res.render("invest", { user: req.user.first_name });
});
app.get("/user/manager", checkNotAuthenticated, (req, res) => {
    res.render("manager", { user: req.user.first_name });
});
app.get("/user/market", checkNotAuthenticated, (req, res) => {
    res.render("market", { user: req.user.first_name });
});



app.get("/user/my-investment", checkNotAuthenticated, (req, res) => {
    res.render("my-investment", { user: req.user.first_name });
});
app.get("/user/password", checkNotAuthenticated, (req, res) => {
    res.render("password", { user: req.user.first_name });
});
app.get("/user/popper", checkNotAuthenticated, (req, res) => {
    res.render("popper", { user: req.user.first_name });
});
app.get("/user/profile", checkNotAuthenticated, (req, res) => {
    res.render("profile", { user: req.user.first_name, last_name: req.user.last_name, email: req.user.email, bitcoin_address: req.user.bitcoin_address });
});

app.get("/user/referral", checkNotAuthenticated, (req, res) => {
    res.render("referral", { user: req.user.first_name, refcode: req.user.last_name + "0xah7jhd" });
});
app.get("/user/reinvest", checkNotAuthenticated, (req, res) => {
    res.render("reinvest", { user: req.user.first_name,
        active_investment : req.user.active_investment,
        total_bonuses : req.user.total_bonuses,
        available_balance : req.user.available_balance,
        total_withdrawal: req.user.total_withdrawal });
});
app.get("/user/transfer", checkNotAuthenticated, (req, res) => {
    res.render("transfer", { user: req.user.first_name,
        active_investment : req.user.active_investment,
        total_bonuses : req.user.total_bonuses,
        available_balance : req.user.available_balance,
        total_withdrawal: req.user.total_withdrawal });
});
app.get("/user/withdraw", checkNotAuthenticated, (req, res) => {
    res.render("withdraw", { user: req.user.first_name,
        active_investment : req.user.active_investment,
        total_bonuses : req.user.total_bonuses,
        available_balance : req.user.available_balance,
        total_withdrawal: req.user.total_withdrawal });
});

app.get('/user/logout', (req, res) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/login');
    });

});


app.post('/user/transfer', async (req, res) => {
    let { account_type,
        acount_name,
        account_number,
        bank_name,
        swift_code,
        routing_number,
        amount,
        country,
        bank_address } = req.body;

    pool.query(
        `UPDATE bank_transfer SET account_type = $1,
        acount_name = $2,
        account_number = $3,
        bank_name = $4,
        swift_code = $5,
        routing_number = $6,
        amount = $7,
        country = $8,
        bank_address = $9 WHERE id =$10`,[account_type,
            acount_name,
            account_number,
            bank_name,
            swift_code,
            routing_number,
            amount,
            country,
            bank_address, req.user.id], (err, result) =>{
                if (err){
                    throw err;
                } else {
                    console.log("good transfer");
                }
            }

    )

})

app.post('/user/withdraw', async (req, res) => {

    const id = req.user.id;
    let {account_type,
        withdrawal_method,
        address,
        amount} = req.body;


    let errors = [];

    const updateQuery = 'UPDATE withdrawal_request SET account_type = $1, withdrawal_method = $2, address = $3, amount = $4  WHERE id = $5';
    await pool.query(updateQuery, [account_type, withdrawal_method, address, amount, id]);

})
 
app.get('/user/payment=Bank_Deposit', checkNotAuthenticated, async (req, res) => {
    res.render("payment=Bank_Deposit", { user: req.user.first_name, amount: req.session.amount });
})


app.post('/user/invest', (req, res) => {
    req.session.investment_plan = req.body.investment_plan;
    req.session.investment_type = req.body.investment_type;
    req.session.payment_option = req.body.payment_option;
    res.redirect('/user/amount');
})

app.post('/user/amount', (req, res) => {
    req.session.amount = req.body.amount;
    const investment_plan = req.session.investment_plan;
    const amount = req.session.amount;
    const payment_option = req.session.payment_option;
    const investment_type = req.session.investment_type;
    let errors = [];

    if (investment_plan === novice_plan && amount < 5000) {
        errors.push({ message: "Error : Amount is less than the minimum deposit for this plan" });
    } if (investment_plan === professional_plan && amount < 12000) {
        errors.push({ message: "Error : Amount is less than the minimum deposit for this plan" });

    } if (investment_plan === expert_plan && amount < 25000) {
        errors.push({ message: "Error : Amount is less than the minimum deposit for this plan" });

    } if (investment_plan === gold_plan && amount < 50000) {
        errors.push({ message: "Error : Amount is less than the minimum deposit for this plan" });

    } if (investment_plan === platinum_plan && amount < 100000) {
        errors.push({ message: "Error : Amount is less than the minimum deposit for this plan" });

    } if (errors.length > 0) {
        res.render("amount", { errors, investment_type, user: req.user.first_name, payment_option, investment_plan });
    } else {
        res.redirect('/user/payment');
    }
});

//     res.redirect('/user/payment');
//   })





// app.post('/user/amount', async (req, res) =>{
//     let { investment_plan, investment_type,  payment_option } = req.body;
//     console.log("/invest:", req.body);
//     const id = req.user.id;

//     pool.query(
//         `SELECT * FROM transaction WHERE id = $1`, [id], (err, results)=>{
//             if(err){
//                 throw err;
//             } if (results.rows.length > 0){
//                 pool.query(
//                     `UPDATE transaction SET investment_plan = $1, investment_type = $2, payment_option = $3 WHERE id = $4 RETURNING id`,
//                     [investment_plan, investment_type, payment_option, id], (err, results) => {
//                         if (err) {
//                             throw err;
//                         }
//                         console.log(results.rows);
//                     }

//                 )
//             }else{
//                 pool.query(
//                     `INSERT INTO transaction ()`
//                 )
//             }
//         }
//     )
//     res.render("amount",checkNotAuthenticated, {  
//         user: req.user.first_name,
//         investment_plan, 
//         investment_type, 
//         payment_option });

// } );


// .{{((((passport.authenticate('local', {
//     failureRedirect: '/user/invest',
//     successRedirect: '/user/amount',
//     session: true, // Store user data in session
//   }));

app.get("/user/amount", checkNotAuthenticated, (req, res) => {
    const investment_plan = req.session.investment_plan;
    const investment_type = req.session.investment_type;
    const payment_option = req.session.payment_option;
    res.render("amount", {
        user: req.user.first_name,
        investment_plan,
        investment_type,
        payment_option
    });
});

//   app.get('/user/amount', passport.authenticate('local', {
//     failureRedirect: '/user/invest',
//     session: false, // Don't create new session, use existing
//   }), (req, res) => {
//     const {investment_plan, } = req.body
//     const userData = req.user; 
//     res.render("amount", { 
//         user: req.user.first_name, 
//         investment_plan: req.user.investment_plan, 
//         investment_type: req.user.investment_type, 
//         payment_option: req.user.payment_option });
//   });


//   app.post('/user/payment', passport.authenticate('local', {
//     failureRedirect: '/user/invest',
//     session: false, // Don't create new session, use existing
//   }), async (req, res) => {
//     const userData = req.body;
//     req.render("payment", {amount: userData.amount})
//   });


//   app.get('/user/payment', checkNotAuthenticated, (req, res) => {
//     res.render("vlock", { user: req.user.first_name});
// } )


app.get('/user/payment', checkNotAuthenticated, async (req, res) => {

    const payment_option = req.session.payment_option;
    const amount = req.session.amount;
    let depositWallet = [];
    let QRC = [];

    if (payment_option === "Bitcoin") {
        depositWallet.push("bc1qf3wtrfmu45g09ppg8z6gle6ghhvdjmrxyakrxt");
        QRC.push("/Build/img/btc_address.png");

    } else if (payment_option === "USDT (TRC20)") {
        depositWallet.push("TFD2aHZTqViKp3nNZ7EFjuxc1avdVUCP9v");
        QRC.push("/Build/img/trc_address.png");

    } else if (payment_option === "Ethereum") {
        depositWallet.push("Ethereum address");
        QRC.push("/Build/img/eth_address.png");

    } else if (payment_option === "Bank Deposit") {
        res.redirect('/user/payment=Bank_Deposit');
        return;
    };

    res.render("payment", {
        user: req.user.first_name,
        payment_option,
        depositWallet,
        amount,
        QRC
    })
});


app.post('/user/profile', checkNotAuthenticated, async (req, res) => {
    req.session.phone_number = req.body.phone_number;
    req.session.country = req.body.country;
    const phone_number = req.session.phone_number;
    const country = req.session.country;
    const id = req.user.id;
    const upd = 'UPDATE users SET phone_number = $1 , country = $2 WHERE id = $3';
    await pool.query(upd, [phone_number, country, id]);
    console.log(phone_number, country, id);
    res.render("profile", { user: req.user.first_name, last_name: req.user.last_name, email: req.user.email, bitcoin_address: req.user.bitcoin_address })
}

)





app.post('/user/password', checkNotAuthenticated, async (req, res) => {
    let { old_password, new_password, confirm_password } = req.body;
    let errors = [];
    if (new_password.length < 8) {
        errors.push({ message: "Password should be at least 8 characters" });
    }
    if (new_password !== confirm_password) {
        errors.push({ message: "Passwords do not match" })
    }
    const haha = 'SELECT password FROM users WHERE ID =$1';
    const id = req.user.id;
    const { rows } = await pool.query(haha, [req.user.id]);
    const DB_password = rows[0].password;

    const passwordCheck = await bcrypt.compare(old_password, DB_password);

    if (passwordCheck) {
        const hash_new = await bcrypt.hash(new_password, 10);
        const updateQuery = 'UPDATE users SET password = $1 WHERE id = $2';
        await pool.query(updateQuery, [hash_new, id]);
        errors.push({ message: "Password Changed Successfully" })
    } else {
        errors.push({ message: "Old Password is Incorrect" })
    }
    if (errors.length > 0) {
        res.render("password", { user: req.user.first_name, errors });
    }


})

app.post('/register', async (req, res) => {
    let { first_name, last_name, email, password, password_confirmation, age, us_investor, investor_type, account_type, investor_status, hear_about, capital, funds_type, love_to_know, bitcoin_address, } = req.body;
    console.log(req.body)
    let errors = [];

    if (!first_name && !last_name && !email && !password && !password_confirmation && !age && !us_investor && !investor_type && !account_type && !investor_status && !hear_about && !capital && !funds_type && !love_to_know && !bitcoin_address) {
        errors.push({ message: "Please enter all reqiured fields" });
    }

    if (password.length < 8) {
        errors.push({ message: "Password should be at least 8 characters" });
    }

    if (password !== password_confirmation) {
        errors.push({ message: "Passwords do not match" });
    }
    if (errors.length > 0) {
        res.render("register", { errors });
    } else {
        let hashedPassword = await bcrypt.hash(password, 10);

        pool.query(
            `SELECT * FROM users WHERE email = $1`, [email], (err, results) => {
                if (err) {
                    throw err;
                }
                if (results.rows.length > 0) {
                    errors.push({ message: "User Already Registered" });
                    res.render('register', { errors });
                } else {
                    pool.query(
                        `INSERT INTO users (first_name, last_name, email, password, age, us_investor, investor_type, account_type, investor_status, hear_about, capital, funds_type, love_to_know, bitcoin_address)
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
                        RETURNING id, password`, [first_name, last_name, email, hashedPassword, age, us_investor, investor_type, account_type, investor_status, hear_about, capital, funds_type, love_to_know, bitcoin_address], (err, results) => {
                        if (err) {
                            throw err;
                        } else {
                            const user_name = first_name + " " + last_name;
                            const userID = results.rows[0].id;
                            pool.query(
                                `INSERT INTO user_dashboard (id, user_name, active_investment, available_balance, total_withdrawal, total_bonuses)
                                VALUES ($1, $2, $3, $4, $5, $6)`, [userID, user_name, "0.00", "0.00", "0.00", "0.00"], (err, result) => {
                                if (err) {
                                    throw err;
                                } else {
                                    pool.query(
                                        `INSERT INTO invoice (id, user_name)
                                        VALUES ($1, $2)`, [userID, user_name], (err, result) => {
                                        if (err) {
                                            throw err;
                                        } else {
                                            pool.query(
                                                `INSERT INTO transaction_history (id, user_name)
                                                VALUES ($1, $2)`, [userID, user_name], (err, result) => {
                                                if (err) {
                                                    throw err;
                                                } else {
                                                    pool.query(
                                                        `INSERT INTO bank_transfer (id, user_name)
                                                        VALUES ($1, $2)`, [userID, user_name], (err, result) => {
                                                        if (err) {
                                                            throw err;
                                                        } else {
                                                            pool.query(
                                                                `INSERT INTO withdrawal_request (id, user_name)
                                                                VALUES ($1, $2)`, [userID, user_name], (err, result) => {
                                                                if (err) {
                                                                    throw err;
                                                                } else {
                                                                    console.log(results.rows);
                                                                    req.flash("success_msg", "You are now registered. Please log in");
                                                                    res.redirect('/login');

                                                                    
                                
                                                                }
                                                            }
                                
                                                            )
                                                            
                        
                                                        }
                                                    }
                        
                                                    )
                                                    
                
                                                }
                                            }
                
                                            )
                                            
        
                                        }
                                    }
        
                                    )
                                    
                                }
                            }

                            )

                        }}
                    )
                }
            }
        )
    }


    console.log(errors)
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/user/dashboard",
    failureRedirect: "/login",
    failureFlash: true,
}));

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/user/dashboard");
    }
    next();
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}


app.listen(PORT, () => console.log(`server is listening on ${PORT}`));



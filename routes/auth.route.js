const { Router } = require("express");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const router = Router();
const User = require("../models/User");

// router.post("/registration",(req,res)=>{
//   console.log(req.body)
// })
router.post(
  "/registration",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "Слишком короткий пароль").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Неправильный логин или пароль",
          errors: errors.array(),
        });
      }
      const { email, password } = req.body;
      const isUserWillBe = await User.findOne({ email });
      if (isUserWillBe) {
        return res
          .status(400)
          .json({ message: "Такой пользователь уже существует" });
      } else {
        let cryptPassword = await bcrypt.hash(password, 12);
        const newuser = new User({ email, password: cryptPassword });
        await newuser.save();
        return res.status(200).json({ message: "Пользователь создан" });
      }
    } catch (e) {
      return res.send({
        message: `Error in method post on register err:${e.message}`,
      });
    }
  }
);
router.post(
  "/login",
  [
    check("email", "Неправильно введен email").isEmail(),
    check("password", "Неправильно введен пароль").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Непраильно введен логин или пароль" });
      }
      const { email, password } = req.body;
      const findUser = await User.findOne({ email });
      if (!findUser) {
        return res
          .status(400)
          .json({ message: "Некорректно введенные данные" });
      }
      const isHaveUser = await bcrypt.compare(password, findUser.password);
      if (!isHaveUser) {
        return res
          .status(400)
          .json({ message: "Некорректно введенные данные" });
      }
      let token = jwt.sign(
        { userId: findUser.id },
        config.get("jwtsecretKey"),
        { expiresIn: "1h" }
      );
      res.json({ token, userId: findUser.id });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так ошибка на сервере" });
    }
  }
);

router.get("/getter", async (req, res) => {
  try {
    // res.write({message:"otvet polychen"});
    //  res.setHeader('Content-Type', 'text/html');
    res.send({ message: "helloGyes" });
    // res.end();
  } catch (error) {
    res.status(500).json({ message: "Что-то пошло не так ошибка на сервере" });
  }
});

module.exports = router;

const bcrypt = require("bcrypt")
const User = require("../models/User")

const register = async (req, res) => {
  const { email, password } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = new User({
      email,
      password: hashedPassword
    })

    await user.save()

    res.status(201).json({ message: "Utilisateur créé" })
  } catch (error) {
    res.status(500).json({ error: "Erreur inscription" })
  }
}

module.exports = { register }
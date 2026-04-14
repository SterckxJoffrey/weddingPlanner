const User = require("../models/User")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" })
    }

    const bcrypt = require("bcrypt")
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({ error: "Mot de passe incorrect" })
    }

    // Générer un token JWT
    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET || "secret", { expiresIn: "1d" })
    res.json({ message: "Connexion réussie", token })
  } catch (error) {
    res.status(500).json({ error: "Erreur login" })
  }
}

module.exports = { login }
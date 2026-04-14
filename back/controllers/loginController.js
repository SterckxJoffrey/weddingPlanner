const User = require("../models/User")

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ error: "Utilisateur non trouvé" })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json({ error: "Mot de passe incorrect" })
    }

    res.json({ message: "Connexion réussie" })
  } catch (error) {
    res.status(500).json({ error: "Erreur login" })
  }
}
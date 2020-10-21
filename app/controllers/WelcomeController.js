class WelcomeController {
  async index({req, res, next}) {
    res.status(200).send('WELCOME')
  }
}

module.exports = new WelcomeController()

const categoryController = {
    test: async (req, res) => {
        console.log('je passe dans le controller')
        res.send('Test depuis le controller')
    },
    postTest: async (req, res) => {
        try {
            return res.status(200).json(req.body)
        } catch (e) {
            console.log('erreur postTest => controller', e)
        }
    }
};

module.exports = categoryController;
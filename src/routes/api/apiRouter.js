const router = require('express').Router();
const { getAllHeroes, getHeroById, getHeroesByPublisher } = require('../../controllers/api/ApiHeroController');

router.get('/heroes', getAllHeroes);
router.get('/hero-detail/:slug', getHeroById);
router.get('/publisher/:publisher', getHeroesByPublisher);

// router.get('/publisher/:publisher', HeroController.getHeroesByPublisher);


module.exports = router;
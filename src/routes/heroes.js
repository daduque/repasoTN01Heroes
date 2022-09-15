const router = require('express').Router();
const HeroController = require('../controllers/HeroController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/assets/'));
    },
    filename: (req, file, cb) => {
        //const fileName = 'prueba-' + Date.now() + path.extname(file.originalname);
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });


router.get('/', HeroController.getAllHeroes);
router.get('/hero-detail/:slug', HeroController.getHeroById);
router.get('/publisher/:publisher', HeroController.getHeroesByPublisher);



//CRUD
router.get('/hero/create', HeroController.getCreateHeroForm);
// router.post('/hero/create', upload.single(), HeroController.createHeroAction);
router.post('/hero/create', HeroController.createHeroAction);

module.exports = router;
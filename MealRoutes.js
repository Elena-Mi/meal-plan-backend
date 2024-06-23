const { Router } = require ('express');
const router = Router();

const { getMeal, saveMeal, deleteMeal, editMeal} =  require('./Mealcontroller');

router.get('/', getMeal);

router.post('/saveMeal', saveMeal);
router.post('/deleteMeal', deleteMeal);
router.post('/editMeal', editMeal)

module.exports = router;
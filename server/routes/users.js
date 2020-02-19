var express = require('express');
const ucenikController = require('../controllers/ucenik');
const profesorController = require('../controllers/profesor');
const roditeljController = require('../controllers/roditelj');
const odeljenjeController = require('../controllers/odeljenje');
const casController = require('../controllers/cas');
const predmetController = require('../controllers/predmet');
const planIProgramController = require('../controllers/planIProgram');
const opravdanjeController = require('../controllers/opravdanje');
const napomenaController = require('../controllers/napomena');
const obavestenjeController = require('../controllers/obavestenje');
const administratorController=require('../controllers/administrator');
const forumController = require('../controllers/forum');
const forumOdgovorController = require('../controllers/forumodgovor');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
// //   res.send('respond with a resource');
// // });
//ili post ili get metoda

router.route('/administrator')
    .get(administratorController.getAdministrator)
    .post(administratorController.postAdministrator);

router.route('/administrator/:administratorId')
    .get(administratorController.getAdministratorById)
    .put(administratorController.updateAdministrator)
    .delete(administratorController.deleteAdministrator);

router.route('/ucenik')
    .get(ucenikController.getUcenik)
    .post(ucenikController.postUcenik);

router.route('/ucenik/:ucenikId')
    .get(ucenikController.getUcenikById)
    .put(ucenikController.updateUcenik)
    .delete(ucenikController.deleteUcenik);

router.route('/profesor')
    .get(profesorController.getProfesor)
    .post(profesorController.postProfesor);

router.route('/profesor/:profesorId')
    .get(profesorController.getProfesorById)
    .put(profesorController.updateProfesor)
    .delete(profesorController.deleteProfesor);

router.route('/roditelj')
    .get(roditeljController.getRoditelj)
    .post(roditeljController.postRoditelj);

router.route('/roditelj/:roditeljId')
    .get(roditeljController.getRoditeljById)
    .put(roditeljController.updateRoditelj)
    .delete(roditeljController.deleteRoditelj);

router.route('/odeljenje')
    .get(odeljenjeController.getOdeljenje)
    .post(odeljenjeController.postOdeljenje);

router.route('/odeljenje/:odeljenjeId')
    .get(odeljenjeController.getOdeljenjeById)
    .put(odeljenjeController.updateOdeljenje)
    .delete(odeljenjeController.deleteOdeljenje);

router.route('/cas')
    .get(casController.getCas)
    .post(casController.postCas);

router.route('/cas/:casId')
    .get(casController.getCasById)
    .put(casController.updateCas)
    .delete(casController.deleteCas);

router.route('/predmet')
    .get(predmetController.getPredmet)
    .post(predmetController.postPredmet);

router.route('/predmet/:predmetId')
    .get(predmetController.getPredmetById)
    .put(predmetController.updatePredmet)
    .delete(predmetController.deletePredmet);

router.route('/planiprogram')
    .get(planIProgramController.getPlanIProgram)
    .post(planIProgramController.postPlanIProgram);

router.route('/planiprogram/:planiprogramId')
    .get(planIProgramController.getPlanIProgramById)
    .put(planIProgramController.updatePlanIProgram)
    .delete(planIProgramController.deletePlanIProgram);

router.route('/opravdanje')
    .get(opravdanjeController.getOpravdanje)
    .post(opravdanjeController.postOpravdanje);

router.route('/opravdanje/opravdanjeId')
    .get(opravdanjeController.getOpravdanjeById)
    .put(opravdanjeController.updateOpravdanje)
    .delete(opravdanjeController.deleteOpravdanje);


router.route('/napomena')
    .get(napomenaController.getNapomena)
    .post(napomenaController.postNapomena);

router.route('/napomena/:napomenaId')
    .get(napomenaController.getNapomenaById)
    .put(napomenaController.updateNapomena)
    .delete(napomenaController.deleteNapomena);

router.route('/obavestenje')
    .post(obavestenjeController.postObavestenje)
    .get(obavestenjeController.getObavestenje);
	
router.route('/forum')
    .get(forumController.getForum)
    //.put(forumController.putForum)
    .post(forumController.postForum);
    
router.route('/forum/:id')
    //.get(forumController.getForumById)
    //.put(forumController.getForumById)
    .delete(forumController.deleteForumById);

router.route('/forum/:id/:incdec')
    .get(forumController.getForumById);

router.route('/forumodgovor')
    .get(forumOdgovorController.getForumOdgovor)
    .post(forumOdgovorController.postForumOdgovor);

router.route('/forumodgovor/:parentId')
    .get(forumOdgovorController.getForumOdgovorById);

router.route('/forumodgovor/:parentId/:bool')
    .delete(forumOdgovorController.deleteForumOdgovorById);

//request se ne salje ali brise
module.exports = router;

const express = require('express');
const speakerRouter =express.Router();
const speakerController =require('../controllers/speakerController')

speakerRouter.get('/',speakerController.getAllSpeakers);

speakerRouter.get('/:id',speakerController.getOneSpeaker);

speakerRouter.post('/',speakerController.addNewSpeaker);

speakerRouter.put('/:id',speakerController.editSpeaker)

speakerRouter.delete('/:id',speakerController.deleteSpeaker)

module.exports=speakerRouter;


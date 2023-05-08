const SpeakerModel = require('../model/Speaker')

const getAllSpeakers = async (req, res) => {
    try {
        const speakers = await SpeakerModel.find({});
        // console.log("Speakers")
        res.status(200).json({
            status: 'success',
            data: {speakers}
        })
    } catch (error) {
        res.status(401).json({
            status: 'failed',
            err: error.message
        })
    }
};

    const getOneSpeaker = async (req, res) => {
   try {
    const {id}=req.params;
    const speaker = await SpeakerModel.find({_id:id});
    res.status(200).json({
        status: 'success',
        data:{speaker}
    })
   } catch (error) {
    res.status(401).json({
        status:'failed',
        err: error.message
    });
   }
};

const addNewSpeaker = async (req, res) => {
try {
    const addNew= await SpeakerModel.create(req.body)
    // console.log(addNew);
    res.status(200).json({
    status: 'success',
    data:{addNew}
})
} catch (error) {
    res.status(404).json({
        status:'failed',
        err:error.message
    })
}
};

const editSpeaker = async (req, res) => {
    try {
        const {id} =req.params;
        const data = req.body
        console.log(data);
        const updateSpeaker= await SpeakerModel.findOneAndUpdate({_id:id},data,{new:true})
        console.log(updateSpeaker);
        res.status(200).json({
        status: 'success',
        data: updateSpeaker
    })
    } catch (error) {
        res.status(404).json({
            status:failed,
            error:error.message
        })
    }
};

const deleteSpeaker = async (req, res) => {
      try {
        const{id}=req.params;
        const removeSpeaker=await SpeakerModel.findOneAndRemove({_id:id})
        res.status(200).json({
        status: 'success',
        data:"removed successfully"
      })
      } catch (error) {
        res.status(404).json({
            status:failed,
            err:error.message
        });
      }
};

module.exports = {
    getAllSpeakers,
    getOneSpeaker,
    addNewSpeaker,
    editSpeaker,
    deleteSpeaker
}
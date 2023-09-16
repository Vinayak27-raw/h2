const Event = require('../models/tech')

exports.getAlltech = async(req,res)=>{
    const tec = await Event.find();
    res.send(tec);
}

exports.addEvent = async(req,res)=>{
    const tec= new Event(req.body);
    const result = await tec.save();
    res.status(201).send({message:`Event Added Successfully.`})
} 

exports.geteventById = async (req,res)=>{
    const event = await Event.findById(req.params.id);
    if(event){
        return res.send(event);
    }
    res.status(404).send({message:`Event with id ${req.params.id} not found!`})
}

exports.deleteEvent = async (req,res)=>{
    const result = await Event.findByIdAndRemove(req.params.id);
    if(result){
        return res.send({message: `Event with id ${req.params.id} deleted successfully.`})
    }
    res.status(404).send({message:`Event with id ${req.params.id} not found!`})
}

exports.updateEvent = async (req,res)=>{

    try{
        const updatedEvent = req.body;
        const id = req.params.id;

        await Event.findByIdAndUpdate(id,updatedEvent);

        res.json({message:'Event Updated Successfully'});
    } catch(error) {
        res.status(500).json({message:"Error Updating Event"})
    }

}



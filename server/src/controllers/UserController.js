const {User} = require('../models')
module.exports = {


    async index(req, res){
        try {
            const users = await User.findAll()
            res.send(users)
            } catch (err){
            res.status(500).send({
            error: 'The users information was incorrect'
            })
            }
    },
    async create(req, res){
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
            } catch (err) {
            res.status(500).send({
            error: 'Create user incorrect'
            })
            }
    },
    
    put(req, res){
        res.send('แก้ไข user คนที่ '+ req.params.userId + ' ข้อมูลที่แก้ ' +
            JSON.stringify(req.body));
        },
    
    
    remove(req, res){
        res.send('ลบ user คนที่ '+ req.params.userId);
     },

     show(req, res){
        res.send('ดูข้อมูล user ทุกคน');
     }

     

    
        }
    
    
<<<<<<< HEAD
const {User} = require('../models');

module.exports = {
    async index(req, res){
        try{
            const users = await User.findAll();
            res.send(users);
        } catch(err){
            res.status(500).send({
                error: 'เกิดข้อผิดพลาดในการดึงข้อมูล user'
            })
        }
    },
    async create(req, res){
        try {
            const user = await User.create(req.body);
            res.send(user.toJSON());
        } catch (err) {
            res.status(400).send({
                error: 'มีข้อผิดพลาดในการสร้าง user'
            })
        }
    },
    async put(req, res){
        try {
            await User.update(req.body, {
                where: {
                    id: req.params.userId
                }
            });
            res.send(req.body);
        } catch (err) {
            res.status(500).send({
                error: 'มีข้อผิดพลาดในการแก้ไข user'
            })
        }
    },
    async remove(req, res){
        try{
            const user = await User.findByPk(req.params.userId);
            if(!user){
                return res.status(403).send({
                    error: 'ไม่มี user นี้ในระบบ'
                })
            }
            await user.destroy();
            res.send(user);
        }catch(err){
            res.status(500).send({
                error: 'มีข้อผิดพลาดในการลบ user'
            })
        }
    },
    async show(req, res){
        try{
            const user = await User.findByPk(req.params.userId);
            res.send(user);
        }catch(err){
            res.status(500).send({
                error: 'มีข้อผิดพลาดในการดึงข้อมูล user'
            })
        }
    }
}
=======
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
    
>>>>>>> 76469648f2680bb426e4a0b261136eb9b29f0d95
    
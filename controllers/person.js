var express=require('express');
var router=express.Router();
var mongoose=require('mongoose')
const Employee = mongoose.model('Employee');

router.get("/",(req,res)=>{
res.render('home')
});

router.post('/',(req,res)=>{
    insertRecord(req,res);
    console.log(req.body);
});

function insertRecord(req, res) {
    var employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err, doc) => {
        if (!err)
            res.redirect('employee/list');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("employee/home", {
                    viewTitle: "Insert Employee",
                    employee: req.body
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}
router.get('/list', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render("about", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});





module.exports = router;
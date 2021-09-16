const router = require('express').Router();
let Employee = require('../models/employee.model');

router.route('/').get((req,res) => {
    Employee.find()
        .then(employee => res.json(employee))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/add').post((req,res) => {
    const empid = req.body.empid;
    const name = req.body.name;
    const age = Number(req.body.age);
    const designation = req.body.designation;
    const department = req.body.department;
    const salary = Number(req.body.salary);

    const newEmployee = new Employee({empid, name, age, designation, department, salary});

    newEmployee.save()
        .then(() => res.json('Employee added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res) => {
    Employee.findById(req.params.id)
        .then(employee => res.json(employee))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(employee => res.json('Employee deleted'))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res) => {
    Employee.findById(req.params.id)
        .then(employee => {
            employee.empid = req.body.empid;
            employee.name = req.body.name;
            employee.age = Number(req.body.age);
            employee.designation = req.body.designation;
            employee.department = req.body.department;
            employee.salary = req.body.salary;
            employee.save()
                .then(() => res.json('Exercise updated !'))
                .catch(err => res.status(400).json('Error: '+err));
        })
        .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;
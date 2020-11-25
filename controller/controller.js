const mongoose = require('mongoose');
const Emp = mongoose.model('emp');
const fetch = require('node-fetch');

exports.apidata = async function(request, response){
	 try{
        let apidata = await fetch("http://dummy.restapiexample.com/api/v1/employees");
    if (apidata.ok) { 
        let emp_json = await apidata.json();
        response.status(200).json(emp_json);
      } else {
        console.log("HTTP-Error is: " + apidata.status);
    }
      }catch(e){
        console.log('Error is:');
        console.log(e);
    }   
}

exports.get = async function(request, response){
	const emp = await Emp.find({});
	return response.status(200).json(emp);
}

exports.create = async function(request, response){
	let {id, emp_name, emp_salary, emp_age, profile_image} = request.body;
    let emp = new Emp();
    emp.id = id;
	emp.emp_name = emp_name;
	emp.emp_age = emp_age;
	emp.emp_salary = emp_salary;
	emp.profile_image = profile_image;
	await emp.save();
	return response.status(201).json(emp);
}


exports.update = async function(request, response){
	let {id, emp_name, emp_salary, emp_age, profile_image} = request.body;
	let emp = await Emp.findById(request.params.id);
	if(!emp){
		return response.status(204).json({ 'error': 'Employees Data not found' });
	}else{
		emp.id = id;
		emp.emp_name = emp_name;
		emp.emp_age = emp_age;
		emp.emp_salary = emp_salary;
		emp.profile_image = profile_image;
		
await emp.save();
		return response.status(200).json(emp);
	}
}

exports.destroy = async function(request, response){
	let emp = await Emp.findById(request.params.id);
	if(!emp){
		return response.status(204).json({'error': 'Employees Data not found'});
	}else{
		await emp.remove();
		return response.status(204).json({});	
	}
}

exports.getId = async function(request, response){
	let emp = await Emp.findById(request.params.id);
	return response.status(200).json(emp);
}
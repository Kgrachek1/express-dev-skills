const skills = [
    {id: 125223, skill: 'Git', done: true},
    {id: 127904, skill: 'HTML', done: true},
    {id: 139608, skill: 'CSS', done: false},
    {id: 157951, skill: 'JavaScript', done: false}
  ];
 module.exports = {
    getAll,
    getOne,
    create,
  deleteOne,
  update
 };

 
 function update(id, updatedSkill) {
   id = parseInt(id);
   const skill = skill.find(skill => skill.id === id);
   Object.assign(skill, updatedSkill);
 }
 
 function deleteOne(id) {
   id = parseInt(id);
   const idx = skills.find(skills => skills.id === id);
   skills.splice(idx, 1);
 }
 
 function create(skill) {
   skill.done = false;
   skills.push(skill);
 }

 function getOne(id){
   id = parseInt(id);
   return skills.find(skill => skill.id === id);
 }
 function getAll() {
    return skills;
 }
const skills = [
    {id: 125223, skill: 'Git', done: true},
    {id: 127904, skill: 'HTML', done: true},
    {id: 139608, skill: 'CSS', done: false},
    {id: 157951, skill: 'JavaScript', done: false}
  ];
 module.exports = {
    getAll,
    getOne
 };

 function getOne(id){
   id = parseInt(id);
   return skills.find(skill => skill.id === id);
 }
 function getAll() {
    return skills;
 }
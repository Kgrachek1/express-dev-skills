const Skill = require('../models/skill');

module.exports = {
   index,
   show,
   new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};
function update(req, res) {
  req.body.done = !!req.body.done;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  const skills = Skill.getOne(req.params.id);
  res.render('skills/edit', {
    title: 'Update Skill',
    skills
  });
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new', { title: 'New Skill' });
}

function show(req, res) {
    res.render('skills/show', {
      skills: Skill.getOne(req.params.id),
      title: 'My Skills'
    });
  }
  
  function index(req, res) {
      res.render('skills/index', {
       skills: Skill.getAll(),
       title: 'All My Skills'
      });
    }

    function models(req, res) {
      res.render('models/skills', {
       skills: Skill.getAll()
      });
    }
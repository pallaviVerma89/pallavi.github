// Default fallback projects (used if fetch fails)
const projects = [
  {
    "title":"Project Alpha",
    "desc":"A short description of Project Alpha.",
    "thumb":"https://via.placeholder.com/800x400?text=Alpha",
    "url":"https://example.com",
    "details":"Detailed information about Project Alpha, tech used, and your role."
  },
  {
    "title":"Project Beta",
    "desc":"A short description of Project Beta.",
    "thumb":"https://via.placeholder.com/800x400?text=Beta",
    "url":"https://example.com",
    "details":"Detailed information about Project Beta."
  },
  {
    "title":"Project Gamma",
    "desc":"A short description of Project Gamma.",
    "thumb":"https://via.placeholder.com/800x400?text=Gamma",
    "url":"https://example.com",
    "details":"Detailed information about Project Gamma."
  }
];

async function loadProjects(){
  try{
    const res = await fetch('/data/projects.json', {cache: 'no-cache'})
    if(res.ok){
      const data = await res.json()
      renderProjects(data)
      return
    }
  }catch(e){
    // ignore and fallback
  }
  renderProjects(projects)
}

function el(sel){return document.querySelector(sel)}

function renderProjects(list){
  const items = list || []
  const grid = el('#projectsGrid')
  grid.innerHTML = ''
  const tpl = el('#project-card')
  items.forEach(p=>{
    const node = tpl.content.cloneNode(true)
    const card = node.querySelector('.card')
    const thumb = card.querySelector('.thumb')
    thumb.src = p.thumb || 'https://via.placeholder.com/800x400?text=Project'
    thumb.alt = p.title || ''
    card.querySelector('.card-title').textContent = p.title || 'Untitled'
    card.querySelector('.card-desc').textContent = p.desc || ''
    const view = card.querySelector('a')
    view.href = p.url || '#'
    const details = card.querySelector('.details')
    details.addEventListener('click', ()=>openModal(p))
    grid.appendChild(node)
  })
}

function openModal(p){
  const modal = el('#modal')
  el('#modalTitle').textContent = p.title
  el('#modalDesc').textContent = p.details
  el('#modalLink').href = p.url
  modal.setAttribute('aria-hidden','false')
}

function closeModal(){
  el('#modal').setAttribute('aria-hidden','true')
}

document.addEventListener('click', e=>{
  if(e.target.id==='modal' || e.target.id==='modalClose') closeModal()
})

document.addEventListener('DOMContentLoaded', ()=>{
  loadProjects()
  document.getElementById('year').textContent = new Date().getFullYear()
})

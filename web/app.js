'use strict';

// ===== Icons =====
const I = {
  pause:'<path d="M3 12a9 9 0 1 0 3-6.7"></path><polyline points="3 4 3 8.5 7.5 8.5"></polyline><polyline points="12 7 12 12 15.5 14"></polyline>',
  wait:'<circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15.5 14"></polyline>',
  branch:'<rect x="9" y="3" width="6" height="5" rx="1"></rect><rect x="3" y="16" width="6" height="5" rx="1"></rect><rect x="15" y="16" width="6" height="5" rx="1"></rect><path d="M12 8v4M12 12H6v4M12 12h6v4"></path>',
  split:'<path d="M12 21V11"></path><path d="M12 11C12 7 9 5 5 5"></path><path d="M12 11c0-4 3-6 7-6"></path><circle cx="5" cy="4" r="1.6"></circle><circle cx="19" cy="4" r="1.6"></circle><circle cx="12" cy="21" r="1.6"></circle>',
  end:'<polygon points="8 3 16 3 21 8 21 16 16 21 8 21 3 16 3 8"></polygon>',
  sms:'<path d="M4 5h16v11H9l-4 3v-3H4z"></path>',
  email:'<rect x="3" y="5" width="18" height="14" rx="2"></rect><polyline points="4 7 12 13 20 7"></polyline>',
  ask:'<rect x="5" y="3" width="14" height="18" rx="2"></rect><line x1="9" y1="8" x2="15" y2="8"></line><line x1="9" y1="12" x2="15" y2="12"></line><line x1="9" y1="16" x2="13" y2="16"></line>',
  alertSms:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M10.5 21a1.8 1.8 0 0 0 3 0"></path>',
  alertEmail:'<rect x="3" y="6" width="18" height="13" rx="2"></rect><polyline points="4 8 12 14 20 8"></polyline><circle cx="19" cy="6" r="3" fill="currentColor" stroke="none"></circle>',
  updateContact:'<circle cx="12" cy="8" r="3.5"></circle><path d="M5.5 20a6.5 6.5 0 0 1 13 0"></path><path d="M19 4.5A6 6 0 0 0 6 6"></path><polyline points="19 2 19 5 16 5"></polyline>',
  dataCapture:'<path d="M12 3v10"></path><polyline points="8 9 12 13 16 9"></polyline><path d="M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"></path>',
  addList:'<circle cx="9" cy="8" r="3.5"></circle><path d="M3 20a6 6 0 0 1 12 0"></path><line x1="19" y1="8" x2="19" y2="14"></line><line x1="16" y1="11" x2="22" y2="11"></line>',
  block:'<circle cx="10" cy="8" r="3.5"></circle><path d="M4 20a6 6 0 0 1 12 0"></path><circle cx="18" cy="11" r="4"></circle><line x1="15.2" y1="13.8" x2="20.8" y2="8.2"></line>',
  jump:'<path d="M4 17V9a2 2 0 0 1 2-2h11"></path><polyline points="14 4 18 7.5 14 11"></polyline><path d="M9 20h9"></path>',
  addTag:'<path d="M11 3H5a2 2 0 0 0-2 2v6l8 8a2 2 0 0 0 3 0l5-5a2 2 0 0 0 0-3l-8-8Z"></path><circle cx="7.5" cy="7.5" r="1.2"></circle><line x1="16" y1="5" x2="22" y2="5"></line><line x1="19" y1="2" x2="19" y2="8"></line>',
  removeTag:'<path d="M11 4H5a2 2 0 0 0-2 2v6l8 8a2 2 0 0 0 3 0l5-5a2 2 0 0 0 0-3l-8-8Z"></path><circle cx="7.5" cy="8.5" r="1.2"></circle><line x1="16" y1="6" x2="22" y2="6"></line>',
  salesforce:'<path d="M7 18a4 4 0 0 1-.5-7.96A5 5 0 0 1 16 9.5a3.5 3.5 0 0 1 .5 7H7Z"></path>',
  webhook:'<circle cx="6" cy="6" r="2.5"></circle><circle cx="18" cy="9" r="2.5"></circle><circle cx="9" cy="18" r="2.5"></circle><path d="M8 7l8 1.4M16.5 11l-6 5"></path>',
  callForward:'<path d="M5 4h3.5l1.4 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.4V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"></path><polyline points="15 4 21 4 21 10"></polyline><line x1="21" y1="4" x2="15.5" y2="9.5"></line>',
  hangup:'<path d="M3 11c5.5-4 12.5-4 18 0l-2.2 2.5-3.2-1.2c-.4-.15-.7-.5-.7-.95V9.6c-2.6-.8-5.2-.8-7.8 0v1.2c0 .45-.3.8-.7.95L3.2 13 3 11Z"></path><line x1="4" y1="20" x2="20" y2="20"></line>',
  contact:'<path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.4 0-8 2.6-8 5.8V22h16v-2.2c0-3.2-3.6-5.8-8-5.8Z"></path>'
};
function svg(name, opts){
  opts = opts || {};
  const size = opts.size || 22, stroke = opts.stroke || '#9aa2b3', fill = opts.fill || 'none', sw = opts.sw || 1.6;
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="'+fill+'" stroke="'+stroke+'" stroke-width="'+sw+'" stroke-linecap="round" stroke-linejoin="round">'+I[name]+'</svg>';
}

// ===== Action panel data =====
const SECTIONS = [
  { title:'Flow Controls', cards:[
    {label:'Pause',icon:'pause'},{label:'Wait for Condition',icon:'wait'},{label:'Branch',icon:'branch'},
    {label:'Split',icon:'split'},{label:'End',icon:'end'} ]},
  { title:'Send Messages', cards:[
    {label:'Send Text Message',icon:'sms'},{label:'Send Email',icon:'email'},{label:'Ask Question',icon:'ask'},
    {label:'Workflow Alert SMS',icon:'alertSms'},{label:'Workflow Alert Email',icon:'alertEmail'} ]},
  { title:'Voice', cards:[
    {label:'Forward Call',icon:'callForward'},{label:'Hang up',icon:'hangup'} ]},
  { title:'Contacts', cards:[
    {label:'Update Contact',icon:'updateContact'},{label:'Data Capture',icon:'dataCapture'},{label:'Add to List',icon:'addList'},
    {label:'Block/Delete a Contact',icon:'block'},{label:'Jump to Workflow',icon:'jump'},{label:'Add Tag',icon:'addTag'},{label:'Remove Tag',icon:'removeTag'} ]},
  { title:'API & Integration', cards:[
    {label:'Create/Update a Salesforce Object',icon:'salesforce'},{label:'Send Webhook',icon:'webhook'} ]}
];

const CF_PORTS = [['Success','#16a34a'],['No Answer','#94a2b3'],['Busy','#94a2b3'],['Decline','#94a2b3'],['Failed','#e0463b']];

const SPEC_ROWS = [
  {name:'Description',req:true,component:'Textarea',limit:'1–200 characters',def:'힌트문구: Description',validation:'미 입력',error:'This is required.',description:'Internal label describing what this Forward Call step does within the workflow.'},
  {name:'Forward Calls To',req:true,component:'Dropdown (select)',limit:'—',def:'기본 전화번호',validation:'선택하지 않음',error:'This is required.',description:'The destination phone number that the incoming call is forwarded to.'},
  {name:'Caller ID',req:false,component:'Input (read-only)',limit:'—',def:'System value',validation:'Auto-populated and non-editable. No user input.',error:'',description:'The caller ID presented on the forwarded leg. Managed by the system; cannot be edited.'},
  {name:'Hide Caller ID',req:false,component:'Toggle',limit:'—',def:'Off',validation:'Boolean. Defaults to Off.',error:'',description:'When on, hides the caller ID presented to the recipient (privacy="true").'},
  {name:'Caller Display Name',req:false,component:'Input (text)',limit:'Max 256 characters',def:'공란',validation:'Optional. Must be ≤ 256 characters.',error:'Caller display name must be 256 characters or fewer.',description:'Custom display name shown to the recipient when the call is created.'},
  {name:'Ring Timeout',req:true,component:'Number input',limit:'Integer 1–300',def:'30',validation:'Required. Integer between 1 and 300 seconds. Default 30.',error:'Ring timeout must be a whole number between 1 and 300.',description:'How long the destination phone rings before the call is treated as unanswered.'},
  {name:'Limit Workflow Looping',req:false,component:'Dropdown (select)',limit:'Integer 1–99',def:'1',validation:'Optional. Integer between 1 and 99. Default 1.',error:'Loop limit must be a whole number between 1 and 99.',description:'Caps how many times this step may re-run to prevent infinite loops and repetitive messages.'}
];

// ===== State =====
let zoom = 1;
let nodes = [{ id:'trigger', label:'Contact Trigger', left:560, top:300, isTrigger:true, config:null }];
let connections = [];
let selectedId = null;
let dragPayload = null;       // {label, icon}
let dragConn = null;          // {fromId, portIndex, fromX, fromY, x, y}
let nextNum = 2;

const $ = s => document.querySelector(s);
const canvas = $('#canvas'), nodesLayer = $('#nodesLayer'), connLayer = $('#connLayer');

// ===== Build action panel =====
function buildPanel(){
  const root = $('#sections');
  SECTIONS.forEach(sec=>{
    const lbl = document.createElement('div'); lbl.className='section-label'; lbl.textContent=sec.title; root.appendChild(lbl);
    const grid = document.createElement('div'); grid.className='card-grid';
    sec.cards.forEach(card=>{
      const el = document.createElement('div');
      el.className='action-card'; el.setAttribute('draggable','true');
      el.innerHTML = svg(card.icon) + '<span>'+card.label+'</span>';
      el.addEventListener('dragstart', e=>{ dragPayload={label:card.label, icon:card.icon}; e.dataTransfer.effectAllowed='copy'; e.dataTransfer.setData('text/plain','action'); canvas.classList.add('dragover'); });
      el.addEventListener('dragend', ()=> canvas.classList.remove('dragover'));
      grid.appendChild(el);
    });
    root.appendChild(grid);
  });
}

// ===== Geometry =====
function toLayer(clientX, clientY){
  const r = canvas.getBoundingClientRect();
  const cx = r.width/2;
  return { x: cx + (clientX - r.left - cx)/zoom, y: (clientY - r.top)/zoom };
}
function nodePorts(n){
  const cx = n.left + 127, top = n.top, bottom = n.top + 64;
  let outputs;
  if(n.label==='Forward Call') outputs = [-52,-26,0,26,52].map(o=>({x:cx+o,y:bottom}));
  else outputs = [{x:cx,y:bottom}];
  return { input:{x:cx,y:top}, outputs };
}
function hasPort(n){ return n.label!=='End'; }
function subtitle(n){
  if(n.isTrigger) return 'Incoming Call';
  if(n.label==='Forward Call' && n.config && n.config.to) return 'Forward to '+n.config.to;
  if(n.label==='End' || n.label==='Hang up') return '';
  return 'Click to configure';
}

// ===== Render nodes =====
function render(){
  nodesLayer.style.transform = 'scale('+zoom+')';
  nodesLayer.innerHTML='';
  nodes.forEach(n=>{
    const wrap = document.createElement('div');
    wrap.className='node'; wrap.style.left=n.left+'px'; wrap.style.top=n.top+'px';
    wrap.style.cursor='move';

    if(!n.isTrigger){ // input port (top)
      const t=document.createElement('div'); t.className='conn-dot port-top'; wrap.appendChild(t);
    }

    const card=document.createElement('div');
    card.className='node-card'+(n.id===selectedId?' selected':'');
    const iconName = n.isTrigger ? 'contact' : n.label;
    const iconBg = n.isTrigger ? '#dfe4ea' : (n.label==='Forward Call' ? '#6c5ce7' : '#6c5ce7');
    const iconHtml = n.isTrigger
      ? '<svg width="30" height="30" viewBox="0 0 24 24" fill="#aeb8c4">'+I.contact+'</svg>'
      : svg(iconForLabel(n.label), {size:28, stroke:'#fff', sw:1.8});
    const sub = subtitle(n);
    card.innerHTML =
      '<div class="node-icon" style="background:'+iconBg+'">'+iconHtml+'</div>'+
      '<div class="node-body"><div class="node-title">'+n.label+'</div>'+
      (sub?'<div class="node-sub"'+(n.isTrigger?' style="color:var(--ink-900)"':'')+'>'+sub+'</div>':'')+
      '<div class="node-num">'+(n.isTrigger?'1':(n.num||''))+'</div></div>';
    wrap.appendChild(card);

    // delete button when selected (not trigger)
    if(n.id===selectedId && !n.isTrigger){
      const del=document.createElement('button'); del.className='delete-btn'; del.title='Delete';
      del.innerHTML='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path><path d="M10 11v6M14 11v6"></path><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path></svg>';
      del.addEventListener('click', e=>{ e.stopPropagation(); deleteNode(n.id); });
      wrap.appendChild(del);
    }

    // output ports
    if(n.label==='Forward Call'){
      const ports=document.createElement('div'); ports.className='cf-ports';
      CF_PORTS.forEach((p,i)=>{
        const cp=document.createElement('div'); cp.className='cf-port';
        const dot=document.createElement('span'); dot.className='dot'; dot.style.border='1.5px solid '+p[1];
        dot.addEventListener('mousedown', e=>startConn(n, i, e));
        const lab=document.createElement('span'); lab.className='label'; lab.textContent=p[0];
        cp.appendChild(dot); cp.appendChild(lab); ports.appendChild(cp);
      });
      wrap.appendChild(ports);
    } else if(hasPort(n)){
      const b=document.createElement('div'); b.className='conn-dot port-bottom';
      b.addEventListener('mousedown', e=>startConn(n, 0, e));
      wrap.appendChild(b);
    }

    // interactions
    card.addEventListener('click', e=>{ e.stopPropagation(); selectNode(n); });
    wrap.addEventListener('mousedown', e=>{ if(e.target.closest('.cf-port .dot')||e.target.closest('.port-bottom')||e.target.closest('.delete-btn')) return; startMove(n, e); });

    nodesLayer.appendChild(wrap);
  });
  renderConnections();
  $('#tilesCount').innerHTML = 'Tiles&nbsp;&nbsp;'+nodes.length+' / 1000';
}

function iconForLabel(label){
  const map={'Forward Call':'callForward','Hang up':'hangup','Send Text Message':'sms','Send Email':'email','Ask Question':'ask','Workflow Alert SMS':'alertSms','Workflow Alert Email':'alertEmail','Update Contact':'updateContact','Data Capture':'dataCapture','Add to List':'addList','Block/Delete a Contact':'block','Jump to Workflow':'jump','Add Tag':'addTag','Remove Tag':'removeTag','Create/Update a Salesforce Object':'salesforce','Send Webhook':'webhook','Pause':'pause','Wait for Condition':'wait','Branch':'branch','Split':'split','End':'end'};
  return map[label]||'sms';
}

// ===== Connections =====
function mkPath(a,b){ const dy=Math.max(40,Math.abs(b.y-a.y)/2); return 'M '+a.x+' '+a.y+' C '+a.x+' '+(a.y+dy)+' '+b.x+' '+(b.y-dy)+' '+b.x+' '+b.y; }
function renderConnections(){
  let s='';
  connections.forEach(c=>{
    const f=nodes.find(n=>n.id===c.from.id), t=nodes.find(n=>n.id===c.to.id);
    if(!f||!t) return;
    const outs=nodePorts(f).outputs, fp=outs[c.from.portIndex]||outs[0], tp=nodePorts(t).input;
    s+='<path d="'+mkPath(fp,tp)+'" fill="none" stroke="#94a3b8" stroke-width="2"/>';
    s+='<circle cx="'+tp.x+'" cy="'+tp.y+'" r="3.5" fill="#94a3b8"/>';
  });
  if(dragConn) s+='<path d="'+mkPath({x:dragConn.fromX,y:dragConn.fromY},{x:dragConn.x,y:dragConn.y})+'" fill="none" stroke="#2f6fed" stroke-width="2" stroke-dasharray="5 4"/>';
  connLayer.innerHTML=s;
}

// ===== Actions =====
function selectNode(n){
  selectedId = n.id;
  if(n.label==='Forward Call'){ openDrawer(n); } else { closeDrawer(); }
  render();
}
function deleteNode(id){ nodes=nodes.filter(n=>n.id!==id); connections=connections.filter(c=>c.from.id!==id&&c.to.id!==id); if(selectedId===id){selectedId=null; closeDrawer();} render(); }

function startMove(n, e){
  if(e.button!==0) return;
  e.preventDefault();
  selectNode(n);
  const sx=e.clientX, sy=e.clientY, ol=n.left, ot=n.top;
  function mv(ev){ n.left=Math.round(ol+(ev.clientX-sx)/zoom); n.top=Math.round(ot+(ev.clientY-sy)/zoom); render(); }
  function up(){ document.removeEventListener('mousemove',mv); document.removeEventListener('mouseup',up); }
  document.addEventListener('mousemove',mv); document.addEventListener('mouseup',up);
}

function startConn(n, portIndex, e){
  e.stopPropagation(); e.preventDefault();
  const fp = nodePorts(n).outputs[portIndex] || nodePorts(n).outputs[0];
  dragConn = { fromId:n.id, portIndex, fromX:fp.x, fromY:fp.y, x:fp.x, y:fp.y };
  function mv(ev){ const p=toLayer(ev.clientX,ev.clientY); dragConn.x=p.x; dragConn.y=p.y; renderConnections(); }
  function up(ev){
    document.removeEventListener('mousemove',mv); document.removeEventListener('mouseup',up);
    const p=toLayer(ev.clientX,ev.clientY); let target=null, best=24;
    nodes.forEach(nd=>{ if(nd.id===n.id) return; const ip=nodePorts(nd).input; const d=Math.hypot(ip.x-p.x, ip.y-p.y); if(d<best){best=d; target=nd;} });
    if(target) connections.push({ id:Date.now(), from:{id:n.id,portIndex}, to:{id:target.id} });
    dragConn=null; render();
  }
  document.addEventListener('mousemove',mv); document.addEventListener('mouseup',up);
}

// ===== Drop =====
canvas.addEventListener('dragover', e=>{ e.preventDefault(); e.dataTransfer.dropEffect='copy'; });
canvas.addEventListener('drop', e=>{
  e.preventDefault(); canvas.classList.remove('dragover');
  if(e.dataTransfer.getData('text/plain')!=='action' || !dragPayload) return;
  const p=toLayer(e.clientX, e.clientY);
  nodes.push({ id:Date.now(), label:dragPayload.label, icon:dragPayload.icon, left:Math.round(p.x-127), top:Math.round(p.y-32), num:nextNum++, config:null });
  dragPayload=null; render();
});
canvas.addEventListener('click', e=>{ if(e.target===canvas||e.target===nodesLayer||e.target===connLayer){ selectedId=null; closeDrawer(); render(); } });

// ===== Zoom toolbar =====
document.querySelectorAll('.toolbar button').forEach(b=>{
  b.addEventListener('click', ()=>{
    const a=b.dataset.act;
    if(a==='zoomIn') zoom=Math.min(1.6,+(zoom+0.1).toFixed(2));
    else if(a==='zoomOut') zoom=Math.max(0.5,+(zoom-0.1).toFixed(2));
    else zoom=1;
    render();
  });
});

// ===== Panel toggle =====
$('#panelToggle').addEventListener('click', ()=>{
  const panel=$('#panel'); panel.classList.toggle('collapsed');
  const sv=$('#panelToggle').querySelector('svg');
  sv.style.transform = panel.classList.contains('collapsed')?'rotate(180deg)':'rotate(0deg)';
});

// ===== Drawer =====
const drawer=$('#drawer');
function openDrawer(n){
  const c=n.config||{};
  $('#f_desc').value=c.description||'';
  $('#f_to').value=c.to||'+15555550100';
  $('#f_from').value=c.from||'';
  $('#f_name').value=c.callerDisplayName||'';
  $('#f_timeout').value=c.callTimeout!=null?c.callTimeout:30;
  $('#f_loops').value=c.maxLoops!=null?c.maxLoops:1;
  setToggle(!!c.privacy);
  drawer.classList.add('open');
}
function closeDrawer(){ drawer.classList.remove('open'); }
function setToggle(on){ $('#f_privacy').classList.toggle('on', on); }
$('#f_privacy').addEventListener('click', ()=> $('#f_privacy').classList.toggle('on'));
$('#cancelBtn').addEventListener('click', ()=>{ selectedId=null; closeDrawer(); render(); });
$('#saveBtn').addEventListener('click', ()=>{
  const n=nodes.find(x=>x.id===selectedId); if(!n) return;
  n.config={ description:$('#f_desc').value, to:$('#f_to').value, from:$('#f_from').value,
    callerDisplayName:$('#f_name').value, callTimeout:$('#f_timeout').value,
    maxLoops:$('#f_loops').value, privacy:$('#f_privacy').classList.contains('on') };
  selectedId=null; closeDrawer(); render();
});

// ===== Spec modal =====
function buildSpec(){
  const tb=$('#specRows');
  tb.innerHTML = SPEC_ROWS.map(r=>(
    '<tr>'+
    '<td><div class="name">'+r.name+'</div><span class="'+(r.req?'badge-req':'badge-opt')+'">'+(r.req?'Required':'Optional')+'</span></td>'+
    '<td class="comp">'+r.component+'</td>'+
    '<td class="lim">'+r.limit+'</td>'+
    '<td class="def">'+r.def+'</td>'+
    '<td><div>'+r.validation+'</div>'+(r.error?'<div class="err">'+r.error+'</div>':'')+'</td>'+
    '<td>'+r.description+'</td>'+
    '</tr>'
  )).join('');
}
const overlay=$('#specOverlay');
$('#specBtn').addEventListener('click', ()=> overlay.classList.add('open'));
$('#specClose').addEventListener('click', ()=> overlay.classList.remove('open'));
$('#specCloseBtn').addEventListener('click', ()=> overlay.classList.remove('open'));
overlay.addEventListener('click', e=>{ if(e.target===overlay) overlay.classList.remove('open'); });

// ===== Init =====
buildPanel();
buildSpec();
render();

const V=window.VOCAB||[],$=s=>document.querySelector(s);
const ld=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}};
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const E=t=>String(t).replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
const NAMES={class3:'班級（三）',class4:'班級（四）',other:'其他'};
let S=ld('v960',{}),cls=ld('v960cls','class3'),idx=0,flip=false,box='short',T=ld('set',{});
const EMO={"person":"🧑","about":"💬","from":"📍","with":"🤝","good":"👍","get":"🤲","time":"⏰","city":"🏙️","think":"🤔","know":"🧠","work":"💼","say":"🗣️","day":"🌞","book":"📖","learn":"🎓","all":"🌐","picture":"🖼️","find":"🔍","food":"🍱","change":"🔄","give":"🎁","other":"👉","year":"📅","than":"⚖️","out":"🚪","just":"⏱️","after":"⏭️","tell":"📢","start":"▶️","because":"❓","only":"☝️","before":"⏮️","keep":"🔒","life":"🌱","school":"🏫","thing":"📦","mean":"💭","family":"👨‍👩‍👧","way":"🛣️","now":"🔔","friend":"🧑‍🤝‍🧑","first":"🥇","need":"🙏","show":"📺","problem":"⚠️","country":"🗺️","away":"✈️","ask":"🙋","also":"➕","become":"🦋","bus":"🚌","different":"🔀","last":"🏁","hour":"🕐","shop":"🛍️","woman":"👩","free":"🆓","often":"🔁","animal":"🐾","buy":"🛒","back":"🔙","town":"🏘️","child":"🧒","man":"👨","every":"✅","line":"📏","business":"🤵","home":"🏠","right":"✔️","train":"🚆","well":"😊","visit":"👋","bring":"🎒","decide":"🎯","however":"↔️","teacher":"👩‍🏫","weekend":"🎉","popular":"⭐","second":"🥈","water":"💧","likely":"🌦️","try":"💪","news":"📰","bird":"🐦","move":"🚶","save":"🛟","word":"🔤","plan":"📝","coffee":"☕","pay":"💳","feel":"🥰","report":"📄","experience":"🧳","enjoy":"🎵","even":"😮","kind":"💖","enough":"🙆","use":"🔧","money":"💰","important":"❗","call":"📞","story":"📚","any":"🤷","love":"❤️","fall":"🍂","island":"🏝️","whale":"🐋","leave":"🚶‍♂️","writer":"✍️","never":"🚫","week":"🗓️","live":"🛌","idea":"💡","still":"⏸️","same":"🟰","put":"📥","hard":"🪨","then":"➡️","during":"⌛","game":"🎮","job":"👷","sale":"🏷️","street":"🚦","lose":"😢","lot":"🔢","card":"💌","shake":"🥤","class":"🪑","world":"🌎","house":"🏡","around":"🌀","stay":"🏨","sell":"🏪","few":"🤏","into":"↘️","chance":"🎲","park":"🌳","happy":"😄","down":"⬇️","sun":"☀️","true":"☑️","example":"📋","library":"🏛️","baby":"👶","tree":"🌲","worker":"🧑‍🔧","care":"🤗","hurt":"🤕","summer":"🏖️","surprise":"😲","cook":"👨‍🍳","festival":"🏮","morning":"🌅","chocolate":"🍫","war":"⚔️","birthday":"🎂","parent":"👨‍👩‍👦","next":"⏩","worry":"😟","white":"⚪","english":"🇬🇧","really":"💯","little":"🐜","between":"🥪","fight":"🥊","fact":"📌","share":"🍕","market":"🥬","over":"🌈","place":"🧭","restaurant":"🍽️","whether":"⁉️","girl":"👧","hit":"🏏","hope":"🤞","store":"🏬","choose":"👆","hear":"👂","price":"💲","trip":"🚐","team":"👥","rain":"☔","exercise":"🏋️","until":"🕒","shirt":"👕","body":"🧍","evening":"🌆","least":"📉","wrong":"❌","invite":"✉️","spend":"💸","together":"🫂","apartment":"🏢","happen":"⚡","kill":"🛑","party":"🥳","sugar":"🍬","great":"🌟","gift":"🎀","sure":"😎","weather":"🌤️","own":"🔑","believe":"🙌","month":"📆","rise":"📈","bag":"👜","truck":"🚚","ticket":"🎫","ice":"🧊","station":"🚉","collect":"🧺","catch":"🥎","turn":"↪️","join":"🔗","spring":"🌸","order":"🧾","remember":"🧩","name":"📛","dinner":"🍲","finally":"🎊","agree":"👌","without":"🙅","later":"🕓","celebrate":"🎈","lake":"🏞️","apple":"🍎","prize":"🏆","build":"🏗️","again":"🔂","drink":"🥛","always":"♾️","meet":"🫱","car":"🚗","notice":"👀","below":"🔽","art":"🎨","kitchen":"🍳","under":"⤵️","fly":"🕊️","rule":"📜","answer":"🗨️","understand":"🤓","prepare":"🥘","farmer":"🧑‍🌾","grow":"🌻","holiday":"🎑","special":"🎖️","night":"🌙","season":"🍁","high":"🏔️","student":"🧑‍🎓","dark":"🌑","already":"☑️","follow":"👣","hospital":"🏥","since":"🕰️","cow":"🐄","interest":"🤩","wait":"⏳","travel":"🌏","famous":"🎤","usually":"📊","green":"🟢","fix":"🛠️","cat":"🐱","miss":"🥺","history":"🏺","crazy":"🤪","today":"📍","safe":"🛡️","dangerous":"🚧","soldier":"🪖","able":"🦾","marry":"💍","drop":"🫳","sister":"👭","wear":"👗","saturday":"🎡","mind":"🧘","successful":"🏅","space":"🚀","difficult":"🧗","garden":"🌷","weekday":"🗒️","government":"🏤","dog":"🐶","color":"🖍️","size":"📐","mark":"✏️","forget":"🫥","almost":"🔜","paint":"🖌️","ago":"⏪","young":"🧑","welcome":"🪧","cry":"😭","dream":"💤","easy":"🍰","past":"🗿","dead":"🥀","date":"🗓️","july":"7️⃣","moment":"📸","brother":"👦","half":"🌗","heart":"🫀","group":"👨‍👩‍👧‍👦","lesson":"📓","winter":"⛄","piece":"🧩","fun":"🎠","taiwanese":"🇹🇼","august":"8️⃣","mosquito":"🦟","sick":"🤒","soon":"⏰","bake":"🧁","face":"😀","piano":"🎹","lunch":"🥪"};
const em=w=>EMO[String(w).toLowerCase()]||'📘';
const st=id=>((S[cls]||{})[id])||'unlearned';
const setSt=(id,s)=>{(S[cls]=S[cls]||{})[id]=s;sv('v960',S);stats()};
const say=w=>{if(!window.speechSynthesis)return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(w);u.lang='en-US';u.rate=.85;speechSynthesis.speak(u)}catch(e){}};
function stats(){const c={unlearned:0,short:0,long:0};V.forEach(v=>c[st(v.id)]++);$('#n-un').textContent=c.unlearned;$('#n-short').textContent=c.short;$('#n-long').textContent=c.long}
function tabs(){$('#cls').innerHTML=Object.keys(NAMES).map(k=>`<button data-c="${k}" class="${k===cls?'on':''}">${NAMES[k]}</button>`).join('')}
function card(){if(!V.length){$('#front').hidden=false;$('#back').hidden=true;$('#front').innerHTML='<p class="word">單字庫是空的</p><p class="pos">請檢查 data/vocab960.js 有沒有上傳成功，以及內容格式是否正確</p>';return}const v=V[idx];if(!v)return;flip=false;$('#front').hidden=false;$('#back').hidden=true;$('#hid').hidden=false;$('#shown').hidden=true;
 $('#bid').textContent='#'+String(v.id).padStart(3,'0');$('#bst').textContent={unlearned:'未學習',short:'短期記憶',long:'已精熟'}[st(v.id)];
 {const eo=$('#emo');if(eo)eo.textContent=v.emoji||em(v.word)}$('#w').textContent=v.word;$('#p').textContent=v.pos;$('#ex').textContent=v.example;$('#df').textContent=v.definition;$('#tr').textContent=v.translation;
 $('#pos2').textContent=(idx+1)+' / '+V.length;$('#jmp').value=v.id;$('#jmp').max=V.length}
function toggle(){if(!V.length)return;flip=!flip;$('#front').hidden=flip;$('#back').hidden=!flip}
const go=i=>{if(!V.length)return;idx=(i+V.length)%V.length;card()};
/* 清單 */
const TT={unlearned:'未學習',short:'短期記憶盒',long:'長期記憶盒'};
let tm;
function list(){const q=$('#q').value.trim().toLowerCase();let a=V.filter(v=>st(v.id)===box);const n=a.length;
 if(q)a=a.filter(v=>v.word.toLowerCase().includes(q)||v.definition.includes(q)||String(v.id)===q);
 $('#lt').textContent=TT[box]+'（共 '+n+' 個）';
 $('#lb').innerHTML=a.slice(0,80).map(v=>`<div class="li"><span><span class="lemo" aria-hidden="true">${v.emoji||em(v.word)}</span><b>${E(v.word)}</b> <small>${E(v.pos)}</small><br>${E(v.definition)}</span><span><button data-s="${E(v.word)}" aria-label="發音">🔊</button> <button data-g="${v.id}">前往</button></span></div>`).join('')||'<p class="lead">這裡還沒有單字。</p>'+(a.length>80?'':'');
 if(a.length>80)$('#lb').insertAdjacentHTML('beforeend','<p class="lead">只顯示前 80 個，請用搜尋縮小範圍。</p>')}
/* 配對考驗 */
let CW=[],err={},selW=null,selD=null,got=0;
const sh=a=>a.slice().sort(()=>Math.random()-.5);
function chal(){let pool=V.filter(v=>st(v.id)==='short');if(pool.length<3)pool=V;CW=sh(pool).slice(0,3);err={};CW.forEach(w=>err[w.id]=0);selW=selD=null;got=0;
 const ds=sh([...CW.map(w=>({id:w.id,t:w.definition})),...sh(V.filter(v=>!CW.includes(v))).slice(0,2).map(w=>({id:null,t:w.definition}))]);
 $('#cb').innerHTML=`<p class="lead">先點左邊的英文，再點右邊的中文。</p><div class="m2"><div>${CW.map(w=>`<button data-w="${w.id}" style="margin-bottom:10px">${E(w.word)} <small>${E(w.pos)}</small></button>`).join('')}</div><div>${ds.map((d,i)=>`<button data-d="${i}" data-i="${d.id}" style="margin-bottom:10px">${E(d.t)}</button>`).join('')}</div></div>`;
 $('#ovc').hidden=false}
function pairCheck(){if(selW==null||!selD)return;const wb=$(`[data-w="${selW}"]`),db=selD;
 if(String(selW)===db.dataset.i){wb.className=db.className='okk';wb.disabled=db.disabled=true;if(++got>=3)setTimeout(res,300)}
 else{err[selW]++;wb.classList.add('bad');db.classList.add('bad');setTimeout(()=>{wb.classList.remove('bad','sel');db.classList.remove('bad','sel')},500)}
 selW=null;selD=null}
function res(){const ok=CW.filter(w=>!err[w.id]),no=CW.filter(w=>err[w.id]);
 $('#cb').innerHTML=`<h2>配對完成！</h2>${ok.length?`<div class="msg good"><b>一次全對（晉升長期記憶盒）</b><br>${ok.map(w=>E(w.word)+'：'+E(w.definition)).join('<br>')}</div>`:''}${no.length?`<div class="msg bad"><b>曾答錯（留在短期記憶盒）</b><br>${no.map(w=>E(w.word)+'：'+E(w.definition)+'（錯 '+err[w.id]+' 次）').join('<br>')}</div>`:''}<div class="row"><button class="primary" id="ap">確定並記錄</button><button id="ag">再挑戰一組</button></div>`}
/* 事件 */
document.addEventListener('click',e=>{const t=e.target.closest('button,#fc');if(!t)return;
 if(t.id==='fc'){toggle();return}
 if(t.dataset.c){cls=t.dataset.c;sv('v960cls',cls);tabs();stats();idx=0;card()}
 else if(t.dataset.box){box=t.dataset.box;$('#q').value='';list();$('#ovl').hidden=false}
 else if(t.dataset.s)say(t.dataset.s);
 else if(t.dataset.g){idx=V.findIndex(v=>v.id==t.dataset.g);card();$('#ovl').hidden=true}
 else if(t.dataset.w){selW=+t.dataset.w;document.querySelectorAll('[data-w]:not(:disabled)').forEach(b=>b.classList.toggle('sel',b===t));pairCheck()}
 else if(t.dataset.d!==undefined){selD=t;document.querySelectorAll('[data-d]:not(:disabled)').forEach(b=>b.classList.toggle('sel',b===t));pairCheck()}
 else switch(t.id){
  case'rev':$('#hid').hidden=true;$('#shown').hidden=false;break;
  case'pv':go(idx-1);break;case'nx':go(idx+1);break;
  case'go':{const n=+$('#jmp').value;const i=V.findIndex(v=>v.id===n);if(i>=0){idx=i;card()}else card();break}
  case'toS':case'toL':setSt(V[idx].id,t.id==='toS'?'short':'long');go(idx+1);break;
  case'say':say(V[idx].word);break;
  case'lc':$('#ovl').hidden=true;break;case'cc':$('#ovc').hidden=true;break;
  case'chal':case'ag':chal();break;
  case'ap':CW.forEach(w=>setSt(w.id,err[w.id]?'short':'long'));$('#ovc').hidden=true;card();break;
  case'rst':if(confirm('確定把「'+NAMES[cls]+'」的進度全部清空嗎？此操作無法復原。')){S[cls]={};sv('v960',S);stats();card()}break}});
$('#q').addEventListener('input',()=>{clearTimeout(tm);tm=setTimeout(list,150)});
$('#jmp').addEventListener('keydown',e=>{if(e.key==='Enter')$('#go').click()});
$('#fc').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle()}});
/* 閱讀輔助（與主站共用設定） */
const ap=()=>{document.documentElement.style.setProperty('--fs',(T.fs||20)+'px');document.documentElement.style.setProperty('--lh',T.lh||1.9);document.body.classList.toggle('hc',!!T.hc);$('#hc').setAttribute('aria-pressed',!!T.hc);sv('set',T)};
$('#fm').onclick=()=>{T.fs=Math.max(16,(T.fs||20)-2);ap()};$('#fp').onclick=()=>{T.fs=Math.min(32,(T.fs||20)+2);ap()};$('#hc').onclick=()=>{T.hc=!T.hc;ap()};
ap();tabs();stats();card();

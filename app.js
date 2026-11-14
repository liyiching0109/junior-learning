const C=window.CONTENT,$=s=>document.querySelector(s),app=$('#app');
const ld=k=>{try{return JSON.parse(localStorage.getItem(k)||'{}')}catch(e){return{}}};
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const P=ld('prog'),T=ld('set');let lvF=0,Q={};
const LV=['全部難度','入門','進階','挑戰'];
const E=t=>String(t).replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const key=(s,g,u,c)=>[s,g,u,c].join('-');
const done=(s,g,u,c)=>(P[key(s,g,u,c)]||{}).n>0;
const prog=(s,g,u)=>{const cs=C[s].grades[g].units[u].concepts;return[cs.filter((_,c)=>done(s,g,u,c)).length,cs.length]};
function say(t){if(T.rd===false||!window.speechSynthesis)return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang=/[A-Za-z]{3}/.test(t)?'en-US':'zh-TW';u.rate=.85;speechSynthesis.speak(u)}catch(e){}}
const crumb=(...p)=>`<div class="crumb"><a href="#">首頁</a>${p.map(([t,h])=>' ／ '+(h!=null?`<a href="#${h}">${E(t)}</a>`:E(t))).join('')}</div>`;
function render(){const[s,g,u]=location.hash.slice(1).split('/');
 if(!C[s])return home();
 if(g===undefined)return grades(s);
 if(u===undefined)return units(s,+g);
 unit(s,+g,+u)}
function home(){app.innerHTML=`<h2>今天想練習哪一科？</h2><p class="lead">沒有時間限制，答錯可以再試。</p><div class="grid">${Object.keys(C).map(s=>{let a=0,b=0;C[s].grades.forEach((G,g)=>G.units.forEach((_,u)=>{const p=prog(s,g,u);a+=p[0];b+=p[1]}));return`<a class="card" style="--c:${C[s].color};text-decoration:none" href="#${s}">${E(C[s].name)}<small>${E(C[s].desc||'')}　已練習 ${a} / ${b} 個概念</small></a>`}).join('')}<a class="card" style="--c:#e6dcf3;text-decoration:none" href="vocab.html">英文單字卡<small>國中基礎 960 單字・短期／長期記憶盒</small></a></div>`}
function grades(s){app.innerHTML=crumb([C[s].name])+`<h2>${E(C[s].name)}：選擇年級／冊別</h2><div class="grid">${C[s].grades.map((G,g)=>`<a class="card" style="--c:${C[s].color};text-decoration:none" href="#${s}/${g}">${E(G.name)}<small>${G.units.length} 個單元</small></a>`).join('')}</div>`}
function units(s,g){const G=C[s].grades[g];app.innerHTML=crumb([C[s].name,s],[G.name])+`<h2>${E(G.name)}：選擇單元</h2><div class="grid">${G.units.map((U,u)=>{const p=prog(s,g,u);return`<a class="card" style="--c:${C[s].color};text-decoration:none" href="#${s}/${g}/${u}">${E(U.name)}<small>已練習 ${p[0]} / ${p[1]} 個概念</small></a>`}).join('')}</div>`}
function unit(s,g,u){const G=C[s].grades[g],U=G.units[u];
 app.innerHTML=crumb([C[s].name,s],[G.name,s+'/'+g],[U.name])+`<h2>${E(U.name)}</h2><p class="lead">先選難度，再選要練習的概念。</p><div class="chips">${LV.map((l,i)=>`<button data-l="${i}" class="${i===lvF?'on':''}">${l}</button>`).join('')}</div><div class="grid">
 <button class="card" data-c="all" style="--c:${C[s].color}">混合練習（所有概念）<small>題目由易到難排列</small></button>
 ${U.concepts.map((c,i)=>{const r=P[key(s,g,u,i)];return`<button class="card" data-c="${i}" style="--c:${C[s].color}">${E(c.name)}<small>${r?`練習 ${r.n} 次，最佳 ${r.best} / ${r.t}`:'還沒練習過'}</small></button>`}).join('')}</div>`;
 app.querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>{lvF=+b.dataset.l;unit(s,g,u)});
 app.querySelectorAll('[data-c]').forEach(b=>b.onclick=()=>start(s,g,u,b.dataset.c))}
function start(s,g,u,c){const U=C[s].grades[g].units[u];
 let pool=(c==='all'?U.concepts:[U.concepts[c]]).flatMap(x=>x.questions).filter(q=>!lvF||q.lv===lvF);
 if(!pool.length){alert('這個難度還沒有題目');return}
 const qs=shuf(pool).slice(0,6).sort((a,b)=>a.lv-b.lv).map(q=>({...q,opts:shuf(q.o)}));
 Q={s,g,u,c,qs,i:0,score:0};ask()}
function ask(){const q=Q.qs[Q.i];Q.t=0;Q.d=false;Q.first=true;
 app.innerHTML=`<p class="lead" style="margin:0">第 ${Q.i+1} / ${Q.qs.length} 題　${LV[q.lv]}</p><div class="bar"><i style="width:${Q.i/Q.qs.length*100}%"></i></div><div class="panel"><p class="q">${E(q.q)}</p><div class="opts">${q.opts.map(o=>`<button class="opt">${E(o)}</button>`).join('')}</div><div id="fb" aria-live="polite"></div><div class="row"><button id="hint">看提示</button><button id="say">再聽一次</button><button id="nx" class="primary" hidden>${Q.i+1<Q.qs.length?'下一題':'看結果'}</button><button id="ex">離開</button></div></div>`;
 $('#ex').onclick=render;$('#say').onclick=()=>say(q.q);
 $('#hint').onclick=()=>{Q.first=false;fb('','提示：'+(q.h||'再讀一次題目看看。'))};
 $('#nx').onclick=()=>{Q.i++;Q.i<Q.qs.length?ask():result()};
 app.querySelectorAll('.opt').forEach(b=>b.onclick=()=>pick(b,q));say(q.q)}
const fb=(c,t)=>$('#fb').innerHTML=`<div class="msg ${c}">${E(t)}</div>`;
function fin(q){Q.d=true;app.querySelectorAll('.opt').forEach(b=>{b.disabled=true;if(b.textContent===q.o[0])b.classList.add('good')});$('#nx').hidden=false;$('#nx').focus()}
function pick(b,q){if(Q.d)return;
 if(b.textContent===q.o[0]){if(Q.first&&!Q.t)Q.score++;fin(q);fb('good','答對了！'+(q.e||''))}
 else{Q.t++;Q.first=false;b.classList.add('bad');b.disabled=true;
  if(Q.t>=2){fin(q);fb('bad','沒關係，答案是「'+q.o[0]+'」。'+(q.e||''))}else fb('bad','再想想看，可以按「看提示」。')}}
function result(){const{s,g,u,c,qs,score}=Q,k=key(s,g,u,c),r=P[k]||{n:0,best:0};
 P[k]={n:r.n+1,best:Math.max(r.best,score),t:qs.length};sv('prog',P);
 const m=score/qs.length>=.8?'非常棒！可以試試更難的題目。':score/qs.length>=.5?'很不錯，再練一次會更穩。':'沒關係，多練習幾次就會進步。';
 app.innerHTML=`<div class="panel"><h2>完成了！</h2><p class="score">${score} / ${qs.length}</p><p>${m}</p><p class="lead">只計算沒看提示、一次答對的題目。</p><div class="row"><button class="primary" id="a">再練一次</button><button id="b">回單元頁</button><button id="p">列印</button></div></div>`;
 $('#a').onclick=()=>start(s,g,u,c);$('#b').onclick=render;$('#p').onclick=()=>window.print();say(m)}
/* 閱讀輔助 */
const ap=()=>{const r=document.documentElement.style;r.setProperty('--fs',(T.fs||20)+'px');r.setProperty('--lh',T.lh||1.9);document.body.classList.toggle('hc',!!T.hc);$('#sp').setAttribute('aria-pressed',(T.lh||1.9)>2);$('#hc').setAttribute('aria-pressed',!!T.hc);$('#rd').setAttribute('aria-pressed',T.rd!==false);sv('set',T)};
$('#fm').onclick=()=>{T.fs=Math.max(16,(T.fs||20)-2);ap()};$('#fp').onclick=()=>{T.fs=Math.min(32,(T.fs||20)+2);ap()};
$('#sp').onclick=()=>{T.lh=(T.lh||1.9)>2?1.9:2.4;ap()};$('#hc').onclick=()=>{T.hc=!T.hc;ap()};
$('#rd').onclick=()=>{T.rd=T.rd===false;if(!T.rd)try{speechSynthesis.cancel()}catch(e){}ap()};
addEventListener('hashchange',render);ap();render();

/*
• @David-Chian
- https://github.com/David-Chian
*/

const _0x8cc0bb=_0x1455;(function(_0x2e230f,_0x1e6592){const _0x34b75a=_0x1455,_0x3975e3=_0x2e230f();while(!![]){try{const _0x543ac0=parseInt(_0x34b75a(0x193))/0x1+parseInt(_0x34b75a(0x18e))/0x2*(parseInt(_0x34b75a(0x1a5))/0x3)+-parseInt(_0x34b75a(0x178))/0x4+-parseInt(_0x34b75a(0x195))/0x5+-parseInt(_0x34b75a(0x188))/0x6+-parseInt(_0x34b75a(0x191))/0x7+parseInt(_0x34b75a(0x186))/0x8;if(_0x543ac0===_0x1e6592)break;else _0x3975e3['push'](_0x3975e3['shift']());}catch(_0x278036){_0x3975e3['push'](_0x3975e3['shift']());}}}(_0xf881,0x8ab3a));import _0x2ed930 from'fs';import _0xcc008b from'dotenv';_0xcc008b[_0x8cc0bb(0x18d)]();function _0x1455(_0x5622ff,_0xf2e14f){const _0xf88150=_0xf881();return _0x1455=function(_0x1455fa,_0x2084c2){_0x1455fa=_0x1455fa-0x178;let _0x2a2bfb=_0xf88150[_0x1455fa];return _0x2a2bfb;},_0x1455(_0x5622ff,_0xf2e14f);}const SECRET_KEY=process[_0x8cc0bb(0x194)]['SECRET_KEY'],obtenerDatos=()=>{const _0x21dff9=_0x8cc0bb;return _0x2ed930[_0x21dff9(0x182)](_0x21dff9(0x196))?JSON[_0x21dff9(0x1a2)](_0x2ed930[_0x21dff9(0x185)](_0x21dff9(0x196),_0x21dff9(0x19c))):{'usuarios':{},'personajesReservados':[]};};let toprwHandler=async(_0x244955,{conn:_0x456dc5})=>{const _0x20c067=_0x8cc0bb;let _0x27b9eb=obtenerDatos(),_0x56704d=Object['entries'](_0x27b9eb['usuarios']);if(_0x56704d[_0x20c067(0x1a0)]===0x0){_0x456dc5[_0x20c067(0x199)](_0x244955['chat'],_0x20c067(0x17a),_0x244955,rcanal);return;}const _0x3505c2=()=>{const _0x9e4cb7=_0x20c067;try{const _0x22f4cc=JSON[_0x9e4cb7(0x1a2)](_0x2ed930[_0x9e4cb7(0x185)]('./package.json','utf-8'));if(_0x22f4cc[_0x9e4cb7(0x180)]!=='Yuki_Suou-Bot')return![];if(_0x22f4cc['repository'][_0x9e4cb7(0x184)]!==_0x9e4cb7(0x187))return![];if(SECRET_KEY!==_0x9e4cb7(0x179))return![];return!![];}catch(_0x5daf4f){return console['error'](_0x9e4cb7(0x181),_0x5daf4f),![];}};if(!_0x3505c2()){await _0x456dc5['reply'](_0x244955[_0x20c067(0x17c)],_0x20c067(0x17d),_0x244955,rcanal);return;}let _0x1418a2=_0x56704d[_0x20c067(0x17b)](([,_0x3e53b7],[,_0x3385dd])=>_0x3385dd[_0x20c067(0x18b)]-_0x3e53b7['characterCount'])[_0x20c067(0x1a1)](0x0,0xa)['map'](([_0xe751e3,_0xf70a84],_0x1b03e0)=>({'id':_0xe751e3,'nombre':'@'+_0xe751e3[_0x20c067(0x192)]('@')[0x0],'personajes':_0xf70a84[_0x20c067(0x18b)]})),_0x540455=_0x56704d[_0x20c067(0x17b)](([,_0xa79baf],[,_0x44b0d9])=>_0x44b0d9[_0x20c067(0x189)]-_0xa79baf['totalRwcoins'])['slice'](0x0,0xa)[_0x20c067(0x183)](([_0x43f62a,_0x14f368],_0x3f2cd7)=>({'id':_0x43f62a,'nombre':'@'+_0x43f62a['split']('@')[0x0],'rwcoins':_0x14f368[_0x20c067(0x189)]})),_0x1f14b0=_0x20c067(0x19f);_0x1418a2[_0x20c067(0x17f)]((_0x5a61b0,_0x30e72f)=>{const _0x12dc71=_0x20c067;_0x1f14b0+=_0x30e72f+0x1+'.\x20'+_0x5a61b0[_0x12dc71(0x190)]+_0x12dc71(0x18f)+_0x5a61b0[_0x12dc71(0x19a)]+'\x20personajes\x0a';}),_0x1f14b0+=_0x20c067(0x18c),_0x540455['forEach']((_0x32130d,_0xd10221)=>{const _0x40bac7=_0x20c067;_0x1f14b0+=_0xd10221+0x1+'.\x20'+_0x32130d[_0x40bac7(0x190)]+'\x20-\x20'+_0x32130d[_0x40bac7(0x19e)]+_0x40bac7(0x19d);}),await _0x456dc5[_0x20c067(0x17e)](_0x244955[_0x20c067(0x17c)],{'text':_0x1f14b0,'mentions':_0x1418a2['map'](_0x484fe6=>_0x484fe6['id'])[_0x20c067(0x198)](_0x540455['map'](_0x1341b0=>_0x1341b0['id']))});};toprwHandler[_0x8cc0bb(0x1a4)]=[_0x8cc0bb(0x1a3)],toprwHandler['tags']=[_0x8cc0bb(0x197)],toprwHandler[_0x8cc0bb(0x18a)]=['toprw'],toprwHandler[_0x8cc0bb(0x19b)]=!![];export default toprwHandler;function _0xf881(){const _0x4bae28=['2420195GEIzFR','data.json','rollwaifu','concat','reply','personajes','register','utf-8','\x20rwcoins\x0a','rwcoins','🌟\x20*Top\x2010\x20Usuarios\x20con\x20Más\x20Personajes*\x20🌟\x0a\x0a','length','slice','parse','toprw','help','39sCmEIN','269564AEYQCC','49rof384foerAlkkO4KF4Tdfoflw','No\x20hay\x20datos\x20de\x20usuarios\x20disponibles.','sort','chat','𝑬𝒔𝒕𝒆\x20𝒄𝒐𝒎𝒂𝒏𝒅𝒐\x20𝒔𝒐𝒍𝒐\x20𝒆𝒔𝒕𝒂\x20𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆\x20𝒑𝒂𝒓𝒂\x20𝐘𝐮𝐤𝐢-𝐒𝐮𝐨𝐮-𝐁𝐨𝐭.\x0a\x20🌹\x20https://github.com/The-King-Destroy/Yuki_Suou-Bot','sendMessage','forEach','name','Error\x20al\x20leer\x20package.json:','existsSync','map','url','readFileSync','13902384XfxSQF','git+https://github.com/The-King-Destroy/Yuki_Suou-Bot.git','4527666pFaVrm','totalRwcoins','command','characterCount','\x0a🌸\x20*Top\x2010\x20Usuarios\x20con\x20Más\x20RWCoins*\x20🌸\x0a\x0a','config','418XjpVtB','\x20-\x20','nombre','5033077hiolvh','split','852659dOJfqV','env'];_0xf881=function(){return _0x4bae28;};return _0xf881();}
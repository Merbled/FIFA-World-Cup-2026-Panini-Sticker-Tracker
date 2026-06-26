const STORAGE_KEY = "panini-world-cup-2026-sticker-tracker-v1";
function loadState(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||{}}catch{return {}}}
function saveState(state){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function getStickerState(state,id){return state[id]||0}
function nextStickerState(value){if(value===0)return 1;if(value===1)return 2;return value+1}
function stateLabel(value){if(value===0)return "NOLE";if(value===1)return "LETE";return "REPE x"+(value-1)}

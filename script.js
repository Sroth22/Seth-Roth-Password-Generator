  let words = new Map();

function preload() {
	loadStrings('beale.wordlist.asc.txt', createMap );
}


let lookupKey = ("11116");
let lookupKey2 = ("11112");
let lookupKey3 = ("11113");
let lookupKey4 = ("11114");
let lookupKey5 = ("11115");





function createMap(strings) {
	for( let line of strings ) {
		let [key, word] = line.split('\t');
		if( key.length === 5) {
			words.set( key, word);
		}
	}
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('gold');
}

function draw() {
  background('gold');
  text( words.get(lookupKey), width/2, height/2 );
  text( words.get(lookupKey2), width/2.8, height/2 );
  text( words.get(lookupKey3), width/3.7, height/2 ); 
  text( words.get(lookupKey4), width/5.5, height/2 ); 
  text( words.get(lookupKey5), width/9.8, height/2 ); 
  noLoop();
}

function generatelookupKey(any)  {
  key = "";
  const dieFaces = [1,2,3,4,5,6] 
  for( let i = 0; i < 5; i++ ) {
    key = `${key}${random(dieFaces)}`; 
  }
  return key;
}
function keyPressed() {
  lookupKey = generatelookupKey()
  lookupKey2 = generatelookupKey()
  lookupKey3 = generatelookupKey()
  lookupKey4 = generatelookupKey()
  lookupKey5 = generatelookupKey()
    redraw();
  }


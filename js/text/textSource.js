

const words = [
    "this", "is", "nothing", "what", "if","can", "make", "your", "fingers", "remember", "where", "exactly", "the", "character", "lives", "on", "the", "keyboard","tower", "Spend", "some", "time", "typing", "on", "it", "and", "you'll", "experience" , "yourself", "good", "way", "to", "sit", "keyboard", "why", "there", "which","what", "hi", "yourself", "exercise", "in", "typing", "make", "life", "easy", "somehow", "feel", "much"," relaxed", "will", "those", "great", "it", "abroad", "avoid", "making", "random", "repeating", "capitalize", "words", "improve", "skills", "muscle", "memory", "build", "end", "start","apple","banana","the","a","cartoon","box","approach","have","general","idea","more", "natural","realistic","now", "moment","happiest", "world","or","place","area","just","bench","tree","button","wire","chair","building","bulb","corner","shift","down","twilight","nightmare","nope","never","get", "lost","go","anywhere","I","do", "not","care","hide"
];



export function getText(){
    const stringLength = Math.floor(Math.random()* words.length) + 40;

    let paragraph = "";
    for(let i = 0; i<stringLength; i++){
        paragraph += words[Math.floor(Math.random() * words.length)];
        paragraph += " ";
    }

    return paragraph;
}


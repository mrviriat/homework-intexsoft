'use strict';

const text = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Vestibulum lobortis velit gravida erat auctor consequat Mauris metus mi semper et libero a sagittis varius nisl Morbi ullamcorper ante at erat iaculis quis rutrum enim suscipit Sed vel est vitae leo rhoncus ullamcorper sit amet nec nulla Phasellus eu pretium neque Etiam ligula ipsum rhoncus eu porta id mollis ac lorem Sed efficitur at urna quis rutrum Integer elementum Lorem ipsum dolor sit amet consectetur adipiscing elit Vestibulum lobortis velit gravida erat auctor consequat Mauris metus mi semper et libero a sagittis varius nisl Morbi ullamcorper ante at erat iaculis quis rutrum enim suscipit Sed vel est vitae leo rhoncus ullamcorper sit amet nec nulla Phasellus eu pretium neque Etiam ligula ipsum rhoncus eu porta id mollis ac lorem Sed efficitur at urna quis rutrum Integer elementum'

const myFunc = (text) => {

  const splitText = text.split(' ');

  for (let len = 1; len < 5; len++) {
    let current = 1;
    let word = 0;

    while (current < 10 * len) {
      let SMS = "";
      while (true) {
        if (splitText[word]) {
          if (SMS.length + splitText[word].length + 1 + `${current}/`.length + len > 140) {
            break;
          }
          else {
            SMS = SMS + splitText[word] + " ";
            word++;
          }
        }
        else {
          break;
        }
      };
      if (word == splitText.length) {
        console.log(`Количество предложений - ${current}; количество слов просмотрено - ${word + 1}`);
        return current;
      }
      current++;
    };
  };
  return false;
};



const parseSMS = (text) => {
  if (!text || typeof text !== 'string') {
    console.log([]);
    return [];
  };
  const sentencesAmount = myFunc(text);
  const splitText = text.split(' ');
  let finishArray = [];
  let word = 0;
  if (sentencesAmount) {
    for (let current = 1; current <= sentencesAmount; current++) {
      let SMS = "";
      while (true) {

        if (splitText[word]) {
          if (SMS.length + splitText[word].length + 1 + `${current}/${sentencesAmount}`.length > 140) {
            break;
          }
          else {
            SMS = SMS + splitText[word] + " ";
            word++;
          }
        }
        else {
          break;
        }
      };
      SMS = SMS + `${current}/${sentencesAmount}`
      console.log(`${SMS}. - ${SMS.length}/140.`)
      finishArray = [...finishArray, SMS]
    }
    console.log(finishArray);
  }
  else {
    console.log("Количество предложений больше 9999")
  }
};
// console.log(1);
parseSMS(text);
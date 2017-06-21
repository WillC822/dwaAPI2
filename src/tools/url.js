exports.genURL = () => {

  const sourceLetters = "ABCDEFGHIJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const urlLength = 5;

  //Start loop
  //Randomly Gen urlLength char.
  //End loop

  var urlString = '';

  for(var genLoopIndex=0; genLoopIndex < urlLength; genLoopIndex++){
    urlString += sourceLetters.charAt(Math.random() * sourceLetters.length);
  }
  return urlString;
}

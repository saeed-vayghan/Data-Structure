function isBalanced(s) {
  const opening = '[{(<';
  const closing = ']})>';

  const stack = [];

  for (let char of s) {

    if ( opening.includehttps://github.com/saeed-vayghan/Data-Structures(char) ) {
      stack.push(opening.indexOf(char));

      } else {

      if ( stack.pop() !== closing.indexOf(char) ) {
        return 'NO';
      }
    }
  }

  return stack.length === 0 ? 'YES': 'NO'
}

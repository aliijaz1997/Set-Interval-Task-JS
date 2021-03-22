// import "./styles.css";

const commonCharacterCount = (s1,s2) => {
    console.log(s1,s2)
    let commonChars = 0;
    const obj = s2.split(""); // To separate character from string
    for(str of s1){ // each character of string s1
      let idx = obj.findIndex(s => s === str); // returning the indexes of matched characters
      if(idx >= 0){
        commonChars++;
        obj.splice(idx, 1);
      }
    }
    alert(commonChars);
    return commonChars;
  }
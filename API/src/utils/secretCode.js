const secretCode = () => {
   let secret = Math.floor(100000 + Math.random() * 900000);
   return secret;
};
export default secretCode;

import JSEncrypt from 'jsencrypt';

const Encrypt =(password :string, publicKey :any) => {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    const encrypted = encrypt.encrypt(password);
    return encrypted;
  }
export default Encrypt
import totp from 'totp-generator';

const getValidOtp = (secretCode: string): number => {
  return totp(secretCode);
};

const HTotp = {
  getValidOtp
}
export default HTotp;
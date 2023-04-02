export default function getPartnarInfo(participents, email) {
  return participents.find((i) => i.email !== email);
}

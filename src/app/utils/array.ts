export type Keys =
  | 'start'
  | 'chousingservices'
  | 'comment'
  | 'thankyou'
  | 'contact'
  | 'bill'
  | 'cash'
  | 'care'
  | 'labo'
  | 'oprt'
  | 'radl'
  | 'emrg'
  | 'recp';

export default function getKeysWithTrueValues(
  obj: Record<Keys, boolean>
): Keys[] {
  const keysWithTrueValues: Keys[] = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key as Keys) && obj[key as Keys] === true) {
      keysWithTrueValues.push(key as Keys);
    }
  }
  return keysWithTrueValues;
}

import { randomInt, randomUUID } from "node:crypto";

const REFERENCE_ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

export function newId() {
// returns a UUID for internal identification.
  return randomUUID();
}

export function newReference() {
// returns a readable code for the customer.
  let code = "";

  for (let i = 0; i < 8; i += 1) {
    const index = randomInt(REFERENCE_ALPHABET.length);
    code += REFERENCE_ALPHABET[index];
  }

  return `ET-${code}`;
}
/*
Later, when we create a booking, we’ll call both functions and store both values on the same booking object:
const booking = {
  id: newId(),
  reference: newReference()
};
The booking object connects them.
The id identifies the booking internally;
the reference lets us look it up using the code a customer can read aloud.
We’ll add that when we build the inventory functions.
*/
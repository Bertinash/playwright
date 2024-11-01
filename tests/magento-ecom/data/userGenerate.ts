import randomstring from 'randomstring'

export function generateRandomUser() {
    const firstName = randomstring.generate({
        length: 6,
        charset: 'alphabetic',
        capitalization: 'capitalize',
      });
    
      const lastName = randomstring.generate({
        length: 8,
        charset: 'alphabetic',
        capitalization: 'capitalize',
      });
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`
    const password = randomstring.generate({length: 10, charset: 'alphanumeric'});
    return {firstName, lastName, email, password};
}

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

      const streetName = randomstring.generate({
        length: 12,
        charset: ['numeric','alphabet']
      })
      const city = randomstring.generate({
        length: 4,
        charset: 'alphabetic'
      })
      const zipCode = randomstring.generate({
        length: 4,
        charset: 'numeric'
      })
      const phoneNumber = randomstring.generate({
        length: 9,
        charset: 'numeric'
      })
    return {firstName, lastName, email, password, streetName, city, zipCode, phoneNumber};
}

const RegisterUser = require('../RegisterUser');

describe('a RegisterUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      username: 'abc',
      password: 'abc',
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });
});

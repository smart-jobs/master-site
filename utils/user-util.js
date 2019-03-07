/* eslint-disable no-console */
export default {
  get user() {
    if (process.browser) {
      const val = sessionStorage.getItem('user');
      try {
        if (val) return JSON.parse(val);
      } catch (err) {
        console.error(err);
      }
      return null;
    }
  },
  set user(userinfo) {
    if (process.browser) {
      sessionStorage.setItem('user', JSON.stringify(userinfo));
    }
  },
  get token() {
    if (process.browser) {
      return sessionStorage.getItem('token');
    }
  },
  set token(token) {
    if (process.browser) {
      sessionStorage.setItem('token', token);
    }
  },
  get isGuest() {
    return !this.user || this.user.role === 'guest';
  },
  save({ userinfo, token }) {
    if (process.browser) {
      sessionStorage.setItem('user', JSON.stringify(userinfo));
      sessionStorage.setItem('token', token);
    }
  },
};

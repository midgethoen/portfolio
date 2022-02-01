module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd51c0a751cd964517def6a5eaa35a450'),
  },
});

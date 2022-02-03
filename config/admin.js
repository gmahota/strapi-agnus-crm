module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6a1a2da7efd05ed87f82392af4cd3d87'),
  },
});

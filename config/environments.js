module.exports.environments = (envs = process.env.NODE_ENV) => {
    switch (envs) {
      case 'production': {
        return {
          BaseDir: 'app/',
          RoleArn: '',
          AssumeCred: ''
        }
      }
      case 'development': {
        return {
          BaseDir: 'app/',
          RoleArn: '',
          AssumeCred: ''
        }
      }
      case 'test': {
        return {
          BaseDir: 'app/'
        }
      }
    }
  }